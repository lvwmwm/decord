// Module ID: 9371
// Function ID: 9372
// Dependencies: [9372, 9378, 9373, 9380, 9381]
// Exports: createDomStream, parseDOM, parseDocument, parseFeed

// Module 9371
import ElementType from "ElementType" /* 9380 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_2 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_3 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
const fn = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
function parseDocument(arg0, fn) {
  const domHandler = new require("DomHandler").DomHandler(undefined, fn);
  const parser = new require("module_9372").Parser(domHandler, fn);
  parser.end(arg0);
  return domHandler.root;
}
function parseDOM(arg0, fn) {
  const domHandler = new require("DomHandler").DomHandler(undefined, fn);
  const parser = new require("module_9372").Parser(domHandler, fn);
  parser.end(arg0);
  return domHandler.root.children;
}
let closure_5 = { xmlMode: true };
const ElementType_export = tmp5(ElementType);

export const Parser = require("module_9372").Parser;
export const DomHandler = require("DomHandler").DomHandler;
export const DefaultHandler = require("DomHandler").DomHandler;
export { parseDocument };
export { parseDOM };
export function createDomStream(arg0, fn, arg2) {
  const domHandler = new require("DomHandler").DomHandler(arg0, fn, arg2);
  const parser = new require("module_9372").Parser(domHandler, fn);
  return parser;
}
export const Tokenizer = fn(require("QuoteType")).default;
export { ElementType_export as ElementType };
export const getFeed = require("module_9381").getFeed;
export function parseFeed(arg0, fn) {
  let tmp = fn;
  if (undefined === fn) {
    tmp = closure_5;
  }
  const getFeed = require("module_9381").getFeed;
  const domHandler = new require("DomHandler").DomHandler(undefined, tmp);
  const parser = new require("module_9372").Parser(domHandler, tmp);
  parser.end(arg0);
  return getFeed(domHandler.root.children);
}
export const DomUtils = tmp5(require("module_9381"));
