import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


Modal.setAppElement("#root");

const News = () => {
  const initialCodeString = `
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
  }`;

  const extensionString = `
  {
    "recommendations": [
      "mikael.angular-beastcode",
      "angular.ng-template",
      "coenraads.bracket-pair-colorizer",
      "mikestead.dotenv",
      "dsznajder.es7-react-js-snippets",
      "dbaeumer.vscode-eslint",
      "mkxml.vscode-filesize",
      "ritwickdey.liveserver",
      "davidanson.vscode-markdownlint",
      "pkief.material-icon-theme",
      "zhuangtongfa.material-theme",
      "esbenp.prettier-vscode",
      "syler.sass-indented",
      "octref.vetur",
      "ms-vscode.vscode-typescript-tslint-plugin",
      "visualstudioexptteam.vscodeintellicode",
      "formulahendry.code-runner"
    ]
  }`;

  const editorConfigString = `
  [*]
  end_of_line = lf
  indent_style = space
  indent_size = 2`;

  const packageJsonString =`
  "lint": "eslint --ext js,jsx,ts,tsx src/",
  "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
  "prettier": "prettier --check "src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)"",
  "prettier:fix": "prettier --write "src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)""
  `;

  const prettierString = `
  {
    "arrowParens": "avoid",
    "semi": false,
    "trailingComma": "none",
    "endOfLine": "lf",
    "tabWidth": 2,
    "printWidth": 80,
    "useTabs": false
  }
  `;

  const prettierignorgeString = `
  .cache
   package-lock.json
  `;

  const eslintrcString = `
  {
    "extends": ["react-app", "prettier"],
    "plugins": ["react", "prettier"],
    "rules": {
      "prettier/prettier": [
        "warn",
        {
          "arrowParens": "avoid",
          "semi": false,
          "trailingComma": "none",
          "endOfLine": "lf",
          "tabWidth": 2,
          "printWidth": 80,
          "useTabs": false
        }
      ],
      "no-console": "warn"
    }
  }
  `;

  const eslintignoreString = `
  /src/serviceWorker.js
  /src/setupTests.js.js
  `;

  const reduxLoginString = `
  store.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
  setTimeout(() => {
    store.dispatch({ type: 'HIDE_NOTIFICATION' })
  }, 5000)
  `;

  const connectedComponentString = `
  this.props.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
  setTimeout(() => {
    this.props.dispatch({ type: 'HIDE_NOTIFICATION' })
  }, 5000)
  `;

  const dispatchObjectString =`
  // actions.js
  export function showNotification(text) {
    return { type: 'SHOW_NOTIFICATION', text }
  }
  export function hideNotification() {
    return { type: 'HIDE_NOTIFICATION' }
  }
  // component.js
  import { showNotification, hideNotification } from '../actions'
  this.props.dispatch(showNotification('You just logged in.'))
  setTimeout(() => {
    this.props.dispatch(hideNotification())
  }, 5000)
  `;

  const connectString =`
  this.props.showNotification('You just logged in.')
  setTimeout(() => {
    this.props.hideNotification()
  }, 5000)
  `;

  const logicTimeOutString =`
  // actions.js
  function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  let nextNotificationId = 0
  export function showNotificationWithTimeout(dispatch, text) {
    // Base on ID to identify Hide or Display
    const id = nextNotificationId++
    dispatch(showNotification(id, text))
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }
  `;

  const noticationWithTimeOutString =`
  // component.js
  showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')
  // otherComponent.js
  showNotificationWithTimeout(this.props.dispatch, 'You just logged out.')
  `;

  const singleTonString = `
  // store.js
  export default createStore(reducer)
  // actions.js
  import store from './store'
  // ...
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    const id = nextNotificationId++
    store.dispatch(showNotification(id, text))
    setTimeout(() => {
      store.dispatch(hideNotification(id))
    }, 5000)
  }
  // component.js
  showNotificationWithTimeout('You just logged in.')
  // otherComponent.js
  showNotificationWithTimeout('You just logged out.')
  `;


  const clientSideString =`
  // actions.js
  // ...
  let nextNotificationId = 0
  export function showNotificationWithTimeout(dispatch, text) {
    const id = nextNotificationId++
    dispatch(showNotification(id, text))
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }
  // component.js
  showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')
  // otherComponent.js
  showNotificationWithTimeout(this.props.dispatch, 'You just logged out.')
  `;

  const reduxThunkActionString =`
  import { createStore, applyMiddleware } from 'redux'
  import thunk from 'redux-thunk'
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )
  // It still recognizes plain object actions
  store.dispatch({ type: 'INCREMENT' })
  // But with thunk middleware, it is also aware of functions
  store.dispatch(function (dispatch) {
    // ... can dispatch many times inside
    dispatch({ type: 'INCREMENT' })
    dispatch({ type: 'INCREMENT' })
    dispatch({ type: 'INCREMENT' })
    setTimeout(() => {
      // ... even asynchronous!
      dispatch({ type: 'DECREMENT' })
    }, 1000)
  })
  `;

  const actionCreatorString =`
  // actions.js
  function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    return function (dispatch) {
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }
  `;

  const componentString =`
  // component.js
  showNotificationWithTimeout('You just logged in.')(this.props.dispatch)
  `;

  const loggerString =`
  // component.js
  this.props.dispatch(showNotificationWithTimeout('You just logged in.'))
  `;

  const connectDispatchString =`
  // actions.js
  function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    return function (dispatch) {
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }
  // component.js
  import { connect } from 'react-redux'
  // ...
  this.props.showNotificationWithTimeout('You just logged in.')
  // ...
  export default connect(
    mapStateToProps,
    { showNotificationWithTimeout }
  )(MyComponent)
  `;

  const getStateString =`
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    return function (dispatch, getState) {
      // Redux doesn't care what you return in thunk
      if (!getState().areNotificationsEnabled) {
        return
      }
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }
  `;

  const promiseString =`
  dispatch(someThunkReturningPromise()).then(...)
  `;


  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/1.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href>Anh Ben</a>
                    <span>06 Jul 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                Setup environment performance in React
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne} href>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                        <p className="date">
                            By <a href>Anh Ben</a>
                            <span>05 April 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                        How to setup environment performance in React: VS code, Prettier, ESLint
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                          Setting the environment to code is something that many new coders often ignore because it is quite cumbersome. But believe me, once installed, you will be very happy to code. The reason I choose Visual Studio Code as my editor is because it's free 😳 , fully functional and trusted by many people from newbie to pro. Enough rambling, let's get to the main point.
                          </p>

                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">1. Visual Studio Code Setting</h4>
                          <h5 className="pb--20">Essential Extensions for Visual Studio Code when coding React</h5>
                          
                          <ul>
                            <li><strong>Atom One Dark Theme</strong>: Atom theme for VSCode, much nicer than default theme. Code inspiration</li>
                            <li><strong>Auto Close Tag</strong>: Auto close tag in code HTML, JSX</li>
                            <li><strong>Auto Rename Tag</strong>: Automatically rename tags when coding HTML, JSX. Combined with Auto Close Tag will make a great duo</li>
                            <li><strong>Bookmarks</strong>: Highlight lines of code for easy searching. When your code is long, having to scroll up, scroll down to find and code is quite tiring. Now just mark the location, then you just need to point to that location and the editor will open right at the bookmark position.</li>
                            <li><strong>Bracket Pair Colorizer</strong>: Help distinguish the {} when it becomes too much</li>
                            <li><strong>Code Spelling Checker</strong>: Check spelling when coding (English only)</li>
                            <li><strong>EditorConfig</strong>: To run the .editorconfig file, which is very convenient, I will talk about this file below</li>
                            <li><strong>ES7 React/Redux/React-Native/JS snippets</strong>: Snippet for React, Redux</li>
                            <li><strong>ESLint:</strong> ESLint for editor</li>
                            <li><strong>GitLens</strong>: Manage code better with git, show file changers, commits, etc.</li>
                            <li><strong>html to JSX</strong>: Convert HTML to JSX</li>
                            <li><strong>Live Server</strong>: Make the server auto reload when the html code is static</li>
                            <li><strong>Material Icon Theme</strong>: Add theme icons for files and folders to help you identify files quickly</li>
                            <li><strong>Prettier</strong>: Format code beautiful and genuine</li>
                            <li><strong>SVG Viewer</strong>: View svg images on editor</li>
                            <li><strong>VSCode-styled-components</strong>: Highlight and auto-complete for styled-component like when coding on css file</li>

                          </ul>
                        </div>    

                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">2. Setup Workspace</h4>
                          
                          <p> For those of you who don't know, VS Code has 2 types of settings, one is for the user, the other is for the workspace. If you do not set the workspace, by default VS Code will get the settings in the user. In this article, we only set the workspace.</p>
                          <p>And setting also has 2 ways of setting, 1 is setting by JSON file, 2 is by UI. Here, I set it up with a JSON file to make it easier to see. Create file <code>./vscode/settings.json</code>  in home directory</p>
                          
                          <SyntaxHighlighter language="json" style={dark} children={initialCodeString}/>

                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p> IN_WHICH </p>
                            <ul>
                              <li>We choose <strong>Default Formatter</strong> as <strong>Prettier.</strong></li>
                              <li><code>"editor.formatOnSave: true"</code>so that when saving, it will automatically format (with <strong>ESLint</strong> or with <strong>Prettier</strong>, as we have defined above)</li>
                              <li><code>"eslint.format.enable: true"</code> to enable <strong>ESLint's</strong> code formatting feature</li>
                              <li><code>"source.fixAll.eslint": true</code> so that when you save it <strong>ESLint</strong> will automatically format and fix errors <strong>ESLint</strong> for us.</li>
                            </ul>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>Add more <strong>recommended extension</strong> into workspace, so that when anyone opens the source code, VS Code will recommend installing these extensions. You need add more file <code>extensions.json</code> in folder <code>.vscode</code>. These are the extensions I just listed above, you just need to copy this file and put it in the source, the editor will display the <code>recommended extension</code>, no need to search for each one.</p>
                          
                          <SyntaxHighlighter language="json" style={dark} children={extensionString}/>
                          
                          <p>
                          When working in Teams, to unify extensions and settings among members, we should share the <code>.vscode</code> folder (just leave it in the source, don't put it in <code>.gitignore</code> ).
                          </p>
                        </div> 
                        
                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">3. Add file .editorconfig</h4>
                          
                          <p>If you do not know, <strong>EditorConfig</strong> was born to unify standards between different editors. For example, someone use <strong>indent</strong> as <strong>space</strong>, someone use <strong>tab</strong>; someone <strong>indent </strong>2, others 4. <strong>EditorConfig</strong> makes our code more consistent, readable and maintainable.</p>
                          <p>You create the file <code>.editorconfig</code> in the main directory of the project. Because we already have the <strong>Editor Config</strong> extension installed above, when we create this file, the browser will automatically receive these settings.</p>
                          
                          <SyntaxHighlighter language="editorconfig" style={dark} children={editorConfigString}/>
                        </div>

                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">4. Install ESLint and Prettier for React</h4>
                          <p>Here I use 
                            <a href="https://create-react-app.dev" data-wpel-link="external" rel="external noopener noreferrer"> Create React App</a>
                            , so by default, people have already installed the basic 
                            <a href="https://create-react-app.dev/docs/setting-up-your-editor/#experimental-extending-the-eslint-config" data-wpel-link="external" rel="external noopener noreferrer"> ESLint suite</a>
                            , I just need to install a few more things and the project will be smooth. Please follow the steps below
                          </p>
                          <p>Create a <code>.env</code> file in the root directory and add this value to <code>EXTEND_ESLINT=true</code>. The purpose is to make it possible for us to add other linters to <strong>React</strong>.</p>
                          <p>Install the following package <code>npm i prettier eslint-config-prettier eslint-plugin-prettier -D</code></p>
                          <p>Add this script in <code>package.json</code> (scripts section). Here I use <strong>Typescript</strong> and maybe <strong>Javascript</strong>, so I set it as <code>js, jsx, ts, tsx</code></p>
                          
                          <SyntaxHighlighter language="json" style={dark} children={packageJsonString}/>

                          <p>With the above commands, we just need to <code>npm lint</code> and <strong>eslint</strong> will scan the entire project for errors, <code>npm lint:fix</code> will automatically fix the entire project. Similar to prettier</p>
                          
                          <p>Create the file <code>.prettierrc</code>. This file specifies the rules for <strong>Prettier</strong></p>
                          <SyntaxHighlighter language="json" style={dark} children={prettierString}/>

                          <p>Create a <code>.prettierignore</code> file. This file tells <strong>Prettier</strong> not to format at the paths specified here</p>
                          <SyntaxHighlighter language="ignore" style={dark} children={prettierignorgeString}/>
                          
                          <p>Create <code>.eslintrc</code> file. This file is intended to extend the <strong>ESLint</strong> React configuration to help catch errors on the terminal, if you have installed the <strong>ESLint</strong> extension, it will rely on this file to catch errors directly on the editor.</p>
                          <SyntaxHighlighter language="json" style={dark} children={eslintrcString}/>

                          <p>We have added some <strong>Prettier</strong> rules as entered in <code>.prettierrc</code> to <strong>ESLint</strong> so that <strong>ESLint</strong> catches errors in case we forget to format</p>
                          <SyntaxHighlighter language="ignore" style={dark} children={eslintignoreString}/>

                        </div>


                        <div className="content">
                          <h3 className="title pt--20 pb--20">In Summary</h3>
                          <p>That's it, above is the configuration that I use for my current React projects. Hope to make your project cleaner and smoother. You can change some places to suit your own style, not necessarily exactly the same 😆</p>
                          <p>In the next post, I will go into the analysis of the best practice React folder structure. Have a nice weekend everyone</p>
                          <p>Link Github:&nbsp;<a href="https://github.com/nguyenvuhoang/React-Folder-Structure" rel="external noopener noreferrer" data-wpel-link="external">https://github.com/nguyenvuhoang/React-Folder-Structure</a></p>
                        </div>  

                        


                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href>Anh Ben</a>
                    <span>22 March 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  Why should we use Redux Thunk Tutorial
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo} href>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/2.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href>Anh Ben</a>
                            <span>22 March 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Why should we use a middleware like Redux Thunk
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                          Have you ever wondered why you have to use a middleware like 
                          <a href="https://github.com/reduxjs/redux-thunk" data-wpel-link="external" rel="external noopener noreferrer"> Redux Thunk </a>, 
                          <a href="https://redux-saga.js.org/" data-wpel-link="external" rel="external noopener noreferrer"> Redux Saga </a>? 
                          Or do you just use it because you see tutorials online telling you to use &#128540; and that's it.
                          </p>
                          <p className="bigger">
                          Anyway, it's time for you to reconsider whether we really need a middleware or not, in this article I will analyze between writing pure no middleware and using <strong>Redux Thunk</strong>.
                          </p>

                          <div className="content">
                            <h4 className="heading4 pt--10 pb--20">1. Asynchronous Dispatch</h4>
                            <p>For example, a user logs in to our website, after successful login, a toast message will be displayed, after 5 seconds, that message will automatically hide.</p>
                            <p>This is the simplest way to do it in Redux</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={reduxLoginString}/>
                            <p>Or like this inside connected component</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={connectedComponentString}/>
                            <p>The only difference is that inside a connected component, usually you won't access the store directly, you'll get dispatch via prop (or hook for React Hooks). However, there is no significant difference.</p>
                            <p>If you don't want to retype when <code>dispatch</code> with the same actions from different components, you can separate the action like this instead of having to <code>dispatch</code> an object</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={dispatchObjectString}/>
                            <p>Or if you put actions inside <code>connect()</code> you would use it like this</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={connectString}/>
                            <p>So far we haven't used any middleware or advanced concept.</p>
                            
                          </div> 

                          <div className="content">
                            <h4 className="heading4 pt--10 pb--20">2. Split into asynchronous action action</h4>
                            <p>The above approach works well in simple cases, but you may find a few problems:</p>
                            <ul>
                              <li>It makes you rewrite this logic anywhere you want to show the message.</li>
                              <li>Notifications without <strong>ID</strong> to distinguish each other, easily leading to the phenomenon of dispatch <code>HIDE_NOTIFICATION</code> 1 is that all existing messages on the screen are hidden earlier than expected.</li>
                            </ul>
                            <p>To solve these problems, we need to split into a function that only focuses on timeout logic and dispatching 2 actions. It might look like this:</p>
                            
                            <SyntaxHighlighter language="jsx" style={dark} children={logicTimeOutString}/>
                            <p>Components can now use <code>showNotificationWithTimeout</code> without duplicating the above logic or facing the issue of hiding notifications:</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={noticationWithTimeOutString}/>
                            <p>Why does <code>showNotificationWithTimeout()</code> have <code>dispatch</code> as the first argument? Because it needs to dispatch actions to the store. Normally a component does the <code>dispatch</code> but since we want an external function to do this, we need to pass <code>dispatch</code> in.</p>
                            <p>If you have a singleton store exported from some module, you can import it and use <code>dispatch</code> directly like this</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={singleTonString}/>
                            <p>This looks simpler, but we shouldn't. The main reason is because it forces the store to be a singleton. This makes it difficult to integrate into server rendering. On the server, you'll want each request to have its own store, so that different users receive a different preload data.</p>
                            <p>A singleton is also harder to test.</p>
                            <p>So we shouldn't do that, or you're sure in the future the app will be client-side only.</p>
                            <p>Go back to previous version:</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={clientSideString}/>
                            <p>This solved the problem with repeating logic and hiding notifications.</p>
                            
                          
                          </div>

                          <div className="content">
                            <h4 className="heading4 pt--10 pb--20">3. Thunk Middleware</h4>
                            <p>For simple apps, the above approach seems fine. You don't need to worry about middleware if you're happy with it.</p>                            
                            <p>In bigger apps, you may encounter some inconvenience around it.</p>
                            <p>For example, it doesn't seem very nice when we have to propagate dispatch all over the place. This makes the <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" data-wpel-link="external" rel="external noopener noreferrer">separate containers and component</a> become more complicated because any component that <code>dispatch</code> an asynchronous Redux action must receive <code>dispatch</code> as a prop. You can't bind actions to <code>connect()</code> anymore because <code>showNotificationWithTimeout()</code> is not really an action creator anymore. It does not return an object (<strong>Redux action</strong>).</p>
                            <p>Also, it's not very nice to have to remember which functions are synchronous actions like <code>showNotification()</code> and which are asynchronous like <code>showNotificationWithTimeout()</code>. Since they are used differently, you must also be careful or you will lead to unnecessary errors.</p>
                            <p>We need a way to show Redux that the asynchronous action creators are a special case of the action creator instead of as a completely different function.</p>
                            <p>If you are still here with me and you are also aware of the problem inside your app, welcome to use <a href="https://github.com/reduxjs/redux-thunk" data- wpel-link="external" rel="external noopener noreferrer">Redux Thunk</a> middleware.</p>
                            <p>In the gist, Redux Thunk "taught" Redux to recognize these special actions.</p>
                            
                            <SyntaxHighlighter language="jsx" style={dark} children={reduxThunkActionString}/>
                            <p>When this middleware is enabled, if you dispatch a function, the Redux Thunk middleware will give that function a dispatch argument. Redux Thunk also helps your reducer to only accept plain object actions.</p>
                            <p>Redux Thunk also allows us to declare <code>showNotificationWithTimeout()</code> as a regular Redux action creator.</p>

                            <SyntaxHighlighter language="jsx" style={dark} children={actionCreatorString}/>
                            <p> Note that the spelling is almost the same as the previous version. However, it does not accept <code> send </code> as the first argument. Instead, it returns a function as the <code> dispatch </code> argument. </p>
                            <p>How do we use it in the component? Obviously, we could write like this:</p>
                            
                            <SyntaxHighlighter language="jsx" style={dark} children={componentString}/>
                            <p>We are using as a <a href="https://xdevclass.com/phan-2-toan-tu-cau-lenh-dieu-kien-vong-lap-function-hof-arrow-function- call-apply-bind-in-javascript/#Currying" data-wpel-link="internal">currying function</a> and pass <code>dispatch</code> in.</p>
                            <p>Looks like it's more "dumb" than the previous version.</p>
                            <p>But like I said before.<strong> If Redux Thunk middleware is enabled, whenever you <code>dispatch</code> a function instead of an object, the middleware will call that function with <code> dispatch</code> is passed as the first argument.</strong></p>
                            <p>So we can do it like this</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={loggerString}/>
                            <p>Finally, <code>dispatch</code> an async action looks no different from a sync action. This is a good thing because the component doesn't care what happens inside the action, whether it's synchronous or asynchronous.</p>
                            <p>If combined with <code>connect()</code>, the way we <code>dispatch</code> will be even more concise.</p>
                            
                            <SyntaxHighlighter language="jsx" style={dark} children={connectDispatchString}/>
                          </div>

                          <div className="content">
                            <h4 className="heading4 pt--10 pb--20">4. Read state in Thunk</h4>
                            <p>In case you want to get the current state of the Redux store, you can pass <code>getState</code> as the second argument to the function you return from the thunk action creator. This allows thunk to read the current state of the store.</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={getStateString}/>
                          </div>

                          <div className="content">
                            <h4 className="heading4 pt--10 pb--20">5.Return in Thunk </h4>
                            <p>Redux doesn't care what you return from thunk, but it will give you the value you return from thunk after <code>dispatch</code> is done. That's why you can return a Promise from thunk and wait for it until it succeeds by calling</p>
                            <SyntaxHighlighter language="jsx" style={dark} children={promiseString}/>
                          </div>

                          <div className="content">
                            <h4 className="heading4 pt--10 pb--20">6. In Summary</h4>
                            <p>Don't use any middleware from Redux Thunk, Redux Saga if you really don't need them and understand what you're doing.</p>
                            <p>If your app in the future is extensible and you want to get the benefits that thunk brings like solving the problem of passing <code>dispatch</code> everywhere in the component, then I recommend Use immediately and always be sure. It's very light anyway.</p>
                            <p>Thanks for reading this far, see you next time</p>
                          </div>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          
        </ul>
      </div>
    </>
  );
};

export default News;
