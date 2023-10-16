exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 57707:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37490))

/***/ }),

/***/ 41512:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 44383:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16173, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39038));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3430));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88684));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59070));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79850));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26785));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81420))

/***/ }),

/***/ 88684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function DialogflowMessenger() {
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    if (session) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("df-messenger", {
        "user-id": session?.authToken,
        intent: "WELCOME",
        "chat-title": "workspace-bot",
        "agent-id": "64aa82c8-b1b7-49f2-9d7b-7d40fad0d251",
        "language-code": "en"
    });
    else return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogflowMessenger);


/***/ }),

/***/ 39038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessProvider: () => (/* binding */ SessProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ SessProvider auto */ 


function SessProvider(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
        children: props.children
    });
}


/***/ }),

/***/ 81420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketContext: () => (/* binding */ SocketContext),
/* harmony export */   SocketProvider: () => (/* binding */ SocketProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77369);
/* __next_internal_client_entry_do_not_use__ SocketContext,SocketProvider auto */ 




const SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);

const iceServers = [
    {
        url: "stun:global.stun.twilio.com:3478"
    },
    {
        url: "turn:global.turn.twilio.com:3478?transport=udp",
        username: "a939e485500fe0ea3ed2f216929f5a3f9bcb71b7ae47c0d70d3178eb61a47aaf",
        // urls: "turn:global.turn.twilio.com:3478?transport=udp",
        credential: "ZQStZHd9+N0rq5pjVxRmO0UaycAbbA/m+/XerXQ3RRY="
    },
    {
        url: "turn:global.turn.twilio.com:3478?transport=tcp",
        username: "a939e485500fe0ea3ed2f216929f5a3f9bcb71b7ae47c0d70d3178eb61a47aaf",
        // urls: "turn:global.turn.twilio.com:3478?transport=tcp",
        credential: "ZQStZHd9+N0rq5pjVxRmO0UaycAbbA/m+/XerXQ3RRY="
    },
    {
        url: "turn:global.turn.twilio.com:443?transport=tcp",
        username: "a939e485500fe0ea3ed2f216929f5a3f9bcb71b7ae47c0d70d3178eb61a47aaf",
        // urls: "turn:global.turn.twilio.com:443?transport=tcp",
        credential: "ZQStZHd9+N0rq5pjVxRmO0UaycAbbA/m+/XerXQ3RRY="
    }
];
function SocketProvider({ children }) {
    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [peer, setPeer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (session) {
            const client = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(`${"https://workspace-api-f8rx.onrender.com"}`, {
                transportOptions: {
                    polling: {
                        extraHeaders: {
                            Authorization: `Bearer ${session?.authToken}`
                        }
                    }
                }
            });
            const clientPromise = new Promise((resolve)=>{
                client.on("connect", ()=>{
                    resolve(client);
                    __webpack_require__.e(/* import() */ 551).then(__webpack_require__.t.bind(__webpack_require__, 24551, 23)).then(({ default: Peer })=>{
                        const mypeer = new Peer(client.id, {
                            "config": {
                                "iceServers": iceServers
                            }
                        });
                        setSocket(client);
                        setPeer(mypeer);
                    });
                });
            });
        }
    }, [
        session?.authToken
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocketContext.Provider, {
        value: {
            socket,
            peer
        },
        children: children
    });
}


/***/ }),

/***/ 59070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SpinnerContext: () => (/* binding */ SpinnerContext),
  "default": () => (/* binding */ SpinnerProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./app/components/Spinner.tsx


function Spinner({}) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "z-50",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "inline-block h-8 w-8 animate-spin rounded-full border-gray-200 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
            role: "status",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
                children: "Loading..."
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/components/SpinnerProvider.tsx
/* __next_internal_client_entry_do_not_use__ SpinnerContext,default auto */ 


const SpinnerContext = /*#__PURE__*/ (0,react_.createContext)(null);

function SpinnerProvider({ children }) {
    const [loading, setLoading] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(SpinnerContext.Provider, {
        value: {
            setLoading
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative",
            children: [
                loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-40",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Spinner, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 79850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71072);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 3430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocketProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81420);
/* harmony import */ var _Wrapper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63472);
/* harmony import */ var _Wrapper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Wrapper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71072);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34751);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45996);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* __next_internal_client_entry_do_not_use__ default auto */ 









function Wrapper({ children }) {
    let { socket } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SocketProvider__WEBPACK_IMPORTED_MODULE_2__.SocketContext);
    const [myTheme, setMyTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .F)();
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMyTheme(theme);
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            try {
                document.querySelector("df-messenger").shadowRoot.querySelector(".df-messenger-wrapper").querySelector("#widgetIcon").style.bottom = "10vh";
            } catch (e) {}
        }, 3000);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!socket) return;
        socket?.emit("join", (callStatus)=>{
            console.log(callStatus);
        });
        socket?.on("message", (message)=>{
            console.log("message rec", message);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__/* .toast */ .Am.info(`Message from ${message.senderName} : ${message.text} : ${message.image != "" ? " image" : ""} : ${message.video != "" ? " video " : ""}`);
            return message;
        });
        console.log("joined again");
    }, [
        socket
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__/* .ToastContainer */ .Ix, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: myTheme
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-3 mx-2 sm:m-1 h-10 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: " font-bold",
                            children: "Workspace"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setTheme(theme == "dark" ? "light" : "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    style: {
                                        filter: myTheme == "dark" ? "brightness(0) invert(1)" : "brightness(100%) invert(0)"
                                    },
                                    className: `${myTheme == "light" ? "filter-invert" : ""}`,
                                    src: `${myTheme == "light" ? "/light-mode.png" : "/dark-mode.png"}`,
                                    height: "30",
                                    width: "30",
                                    alt: "light-mode"
                                })
                            }),
                            session?.authToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)(),
                                className: "BtnLogout w-10 mb-2 mt-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "signLogout",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 512 512",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "textLogout",
                                        children: "Logout"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
}


/***/ }),

/***/ 37490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobalError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function GlobalError({ error, reset }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Something went wrong!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>reset(),
                    children: "Try again"
                })
            ]
        })
    });
}


/***/ }),

/***/ 26785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReduxProvider: () => (/* binding */ ReduxProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
;// CONCATENATED MODULE: ./redux/features/user-slice.ts

const initialState = {
    user: {
        _id: "",
        name: "",
        email: "",
        groups: []
    }
};
const user = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
        }
    }
});
const { setUser } = user.actions;
/* harmony default export */ const user_slice = (user.reducer);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./redux/store.ts



const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        userReducer: user_slice
    }
});
const useAppSelector = (/* unused pure expression or super */ null && (useSelector));

;// CONCATENATED MODULE: ./redux/provider.tsx
/* __next_internal_client_entry_do_not_use__ ReduxProvider auto */ 



function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib.Provider, {
        store: store,
        children: [
            " ",
            children
        ]
    });
}


/***/ }),

/***/ 44452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/global-error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(59160);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/components/SessProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/components/SessProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SessProvider"];

;// CONCATENATED MODULE: ./redux/provider.tsx

const provider_proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/redux/provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: provider_esModule, $$typeof: provider_$$typeof } = provider_proxy;
const provider_default_ = provider_proxy.default;

const provider_e0 = provider_proxy["ReduxProvider"];

;// CONCATENATED MODULE: ./app/components/SocketProvider.tsx

const SocketProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/components/SocketProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SocketProvider_esModule, $$typeof: SocketProvider_$$typeof } = SocketProvider_proxy;
const SocketProvider_default_ = SocketProvider_proxy.default;

const SocketProvider_e0 = SocketProvider_proxy["SocketContext"];

const e1 = SocketProvider_proxy["SocketProvider"];

;// CONCATENATED MODULE: ./app/components/Wrapper.tsx

const Wrapper_proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/components/Wrapper.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Wrapper_esModule, $$typeof: Wrapper_$$typeof } = Wrapper_proxy;
const Wrapper_default_ = Wrapper_proxy.default;


/* harmony default export */ const Wrapper = (Wrapper_default_);
;// CONCATENATED MODULE: ./app/components/DialogFlowMessenger.tsx

const DialogFlowMessenger_proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/components/DialogFlowMessenger.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: DialogFlowMessenger_esModule, $$typeof: DialogFlowMessenger_$$typeof } = DialogFlowMessenger_proxy;
const DialogFlowMessenger_default_ = DialogFlowMessenger_proxy.default;


/* harmony default export */ const DialogFlowMessenger = (DialogFlowMessenger_default_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(34862);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./app/components/ThemeProvider.tsx

const ThemeProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/components/ThemeProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ThemeProvider_esModule, $$typeof: ThemeProvider_$$typeof } = ThemeProvider_proxy;
const ThemeProvider_default_ = ThemeProvider_proxy.default;

const ThemeProvider_e0 = ThemeProvider_proxy["ThemeProvider"];

;// CONCATENATED MODULE: ./app/components/SpinnerProvider.tsx

const SpinnerProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/udassi/Documents/Fullstack/workspace/app/components/SpinnerProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SpinnerProvider_esModule, $$typeof: SpinnerProvider_$$typeof } = SpinnerProvider_proxy;
const SpinnerProvider_default_ = SpinnerProvider_proxy.default;

const SpinnerProvider_e0 = SpinnerProvider_proxy["SpinnerContext"];


/* harmony default export */ const SpinnerProvider = (SpinnerProvider_default_);
;// CONCATENATED MODULE: ./app/layout.tsx











const metadata = {
    title: "Workspace",
    description: "Generated by create next app",
    twitter: {
        card: "summary_large_image",
        creator: "@imamdev_",
        images: "https://example.com/og.png"
    },
    applicationName: "Workspace",
    appleWebApp: {
        capable: true,
        title: "Workspace",
        statusBarStyle: "default"
    },
    formatDetection: {
        telephone: false
    },
    themeColor: "#FFFFFF",
    viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    manifest: "/manifest.json",
    icons: [
        {
            rel: "apple-touch-icon",
            url: "/icons/apple-touch-icon.png"
        },
        {
            rel: "shortcut icon",
            url: "/favicon.ico"
        }
    ],
    keywords: [
        "nextjs",
        "pwa",
        "next-pwa"
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    src: "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    type: "module",
                    src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    noModule: true,
                    src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    src: "https://unpkg.com/swiper@8/swiper-bundle.min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SpinnerProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(provider_e0, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider_e0, {
                                        attribute: "class",
                                        defaultTheme: "system",
                                        enableSystem: true,
                                        disableTransitionOnChange: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                                            children: children
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DialogFlowMessenger, {})
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 85080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"85x85"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.ico")

    return [{
      ...imageData,
      url: imageUrl + "?d46cabbe0782dffd",
    }]
  });

/***/ }),

/***/ 63472:
/***/ (() => {



/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;