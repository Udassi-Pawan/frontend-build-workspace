"use strict";
exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 35904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ handler),
/* harmony export */   POST: () => (/* binding */ handler),
/* harmony export */   handler: () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49861);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51989);


const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
    providers: [
        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            httpOptions: {
                timeout: 40000
            },
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    // session: {
    //   maxAge: 3600,
    // },
    // jwt: {
    //   maxAge: 3600,
    // },
    callbacks: {
        async redirect ({ url, baseUrl }) {
            return "/";
        },
        async jwt ({ token, account, user }) {
            if (account) {
                const res = await fetch(`${"https://workspace-api-f8rx.onrender.com"}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${account?.id_token}`
                    }
                });
                const resParsed = await res.json();
                token = Object.assign({}, token, {
                    id_token: account.id_token
                });
                token = Object.assign({}, token, {
                    myToken: resParsed.authToken
                });
            }
            return token;
        },
        async session ({ session, token }) {
            if (session) {
                session = Object.assign({}, session, {
                    id_token: token.id_token
                });
                session = Object.assign({}, session, {
                    authToken: token.myToken
                });
            }
            return session;
        }
    }
});



/***/ })

};
;