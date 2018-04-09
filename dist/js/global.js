/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_binder__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_s__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_h__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_f__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_c__ = __webpack_require__(5);







var args = [{
    "html": [__WEBPACK_IMPORTED_MODULE_1__modules_s__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__modules_h__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__modules_f__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__modules_c__["a" /* default */]]
}];

__WEBPACK_IMPORTED_MODULE_0__libs_binder__["a" /* default */].apply(undefined, args);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = binder;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// v.2.1

function binder(selectorsAndFunctionsBounds) {
    var runTests = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var t0 = void 0,
        t1 = void 0;
    if (runTests) t0 = performance.now();
    // polyfill for ".matches()" method
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
    // gather all selectors in array
    var selectorsToFind = Object.keys(selectorsAndFunctionsBounds);
    // find selectors in document
    var foundElements = [].concat(_toConsumableArray(document.querySelectorAll(selectorsToFind.join(","))));
    // filter bounds for not founded selectors
    var filteredBounds = {};

    var _loop = function _loop(key) {
        if (foundElements.some(function (element) {
            return element.matches(key);
        })) {
            filteredBounds[key] = selectorsAndFunctionsBounds[key];
        } else {
            if (runTests) console.log("- " + key + " was not found");
        }
    };

    for (var key in selectorsAndFunctionsBounds) {
        _loop(key);
    }
    // gather all modules in one object
    var mergedModules = {};
    for (var bound in filteredBounds) {
        var module = filteredBounds[bound];
        var nature = Object.prototype.toString.call(module);
        if (nature === "[object Array]") {
            module.forEach(function (script) {
                if (Object.prototype.toString.call(script) === "[object Function]") {
                    mergedModules[script.name] = script;
                    mergedModules[script.name]();
                } else {
                    mergedModules = Object.assign(mergedModules, script);
                }
            });
        } else if (nature === "[object Object]") {
            mergedModules = Object.assign(mergedModules, module);
        } else if (nature === "[object Function]") {
            mergedModules[module.name] = module;
            mergedModules[module.name]();
        } else {
            console.log("! unsupported format: ", module);
        }
    }
    if (runTests) console.log("binderResultObject: ", mergedModules);
    if (runTests) t1 = performance.now();
    if (runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = s;

function s() {

    // function compare(a, b, c) {
    //     return a < b && a > c
    //     // return
    //     //     a > b
    //     // &&
    //     //     a > c
    // }
    // console.log(compare(1, 2, 3));


    // let a = 1
    // let a = 1 + 2
    // let b = function() {}
    // function c(){} c()


    // [1, 2, 3].forEach(x => console.log(x))
    // `hello`.indexOf('o') // template literals
    // (function() {
    //     document.getElementById("app").style.fontSize = '50px';
    // })();


}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h;

function h() {

    // [[Scope]] = 'Global Object'
    // LexicalEnvironment = {x: undefined, fun: function}

    var x = 1; // LexicalEnvironment = {x: 1, fun: function}


    function fun() {

        // [[Scope]] = Parent Lexical Environment
        // LexicalEnvironment = {y: undefined, myFunc: 'function'}

        var y = 2; // LexicalEnvironment = {y: 2, myFunc: 'function'}

        myFunc(y);

        function myFunc(z) {

            // [[Scope]] = Parent Lexical Environment
            // LexicalEnvironment = {z: 2}

            console.log();
        }
    }

    fun();

    /*
    
    LexicalEnvironment - inner object, containing all arguments, vars & functions
    [[Scope]] - system inner property - link to external LexicalEnvironment
    
    1. Initialization (creation phase) - LE created with filled arguments, empty vars and functions declarations
    2. execution phase - assigning vars, functions expressions, execute functions
    3. clear - LE removed, memory cleared
    
    
    
    logic questions:
    - when [[scope]] is created
    - why vars 'hoisted' as undefined
    - is parent le is prototype of child le
    
    */
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = f;

function f() {

  // function declaration

  function fun1() {}

  // function expression

  var fun2 = function fun2() {};

  // named function expression
  var fun3 = function name() {};

  // new function
  var fun4 = new Function('a', 'b', 'return a + b');
  // [[scope]] = 'Global object'

}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = c;

function c() {

    // sum(3)(4)
    // var s = new Function(); => // {}

    // ex 1

    // function sum(x) {
    //     return function(y) {
    //         console.log(x + y);
    //     }
    // }
    // var plus2 = sum(2);
    // var plus7 = sum(7);
    // plus2(3);
    // plus7(7);
    // sum(10)(10);


    // ex 2

    // var myMsg = 'Clicked';
    // $('.button').on('click', function(e) {
    //     e.preventDefault();
    //     alert(msg);
    // });

    // function test(e, msg) {
    //     e.preventDefault();
    //     alert(msg);
    // }
    // $('.button').on('click', test(e, myMsg));

    // function showMsg(msg) {
    //     return function(e) {
    //         e.preventDefault();
    //         alert(msg);
    //     }
    // }
    // $('.button').on('click', showMsg(myMsg));

    // ex 3

    // function counter() {
    //     var c = 0;
    //     return function() {
    //         console.log(c++);
    //     }
    // }

    // var counter1 = counter();
    // var counter2 = counter();
    // counter1();
    // counter1();
    // counter1();
    // counter2();
    // counter2();

    // ex 4 (property)

    // function pf(x) {
    //     return x
    // }
    // pf.y = 2;
    // console.log(pf.y)


    // ex 5

    function counter() {
        var current = 1;
        return {
            get: function get() {
                console.log(current++);
            },
            set: function set(val) {
                current = val;
            },
            reset: function reset() {
                current = 1;
            }
        };
    }

    var myCounter = counter();
    myCounter.get();
    myCounter.get();
    myCounter.get();
    myCounter.set(10);
    myCounter.get();
    myCounter.get();
    myCounter.get();
    myCounter.reset();
    myCounter.get();
    myCounter.get();
    myCounter.get();

    // ex 6

    // function counter() {
    //     var current = 1
    //     function c() {
    //         console.log(current++);
    //     }
    //     c.set = function(val) {current = val}
    //     c.reset = function() {current = 1}
    //     return c;
    // }

    // var myCounter1 = counter();
    // myCounter1();
    // myCounter1();
    // myCounter1();
    // myCounter1.set(10);
    // myCounter1();
    // myCounter1();
    // myCounter1();
    // myCounter1.reset();
    // myCounter1();
    // myCounter1();
    // myCounter1();

}

/***/ })
/******/ ]);