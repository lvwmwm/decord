// Module ID: 9427
// Function ID: 9428
// Name: testElement
// Dependencies: [9413, 9426]
// Exports: getElementById, getElements, getElementsByClassName, getElementsByTagName, getElementsByTagType, testElement

// Module 9427 (testElement)
import DomHandler from "DomHandler" /* 9413 */;
import filter from "filter" /* 9426 */;

const require = globalThis.__r;
let _require, dependencyMap, hasOwnProperty;

function combineFuncs(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    const tmp = closure_0(arg0) || closure_1(arg0);
    return tmp;
  };
}
let closure_2 = {
  tag_name(fn) {
    _require = fn;
    if (typeof fn === "function") {
      fn = (name) => {
        const isTagResult = DomHandler.isTag(name) && fn(name.name);
        return isTagResult;
      };
    } else if ("*" === fn) {
      fn = require("DomHandler").isTag;
    } else {
      fn = (name) => {
        const isTagResult = DomHandler.isTag(name) && name.name === fn;
        return isTagResult;
      };
    }
    return fn;
  },
  tag_type(fn) {
    let closure_0 = fn;
    return typeof fn === "function" ? ((type) => fn(type.type)) : ((type) => type.type === fn);
  },
  tag_contains(fn) {
    let closure_0 = fn;
    return typeof fn === "function" ? ((data) => {
      const isTextResult = DomHandler.isText(data) && fn(data.data);
      return isTextResult;
    }) : ((data) => {
      const isTextResult = DomHandler.isText(data) && data.data === fn;
      return isTextResult;
    });
  }
};

export function testElement(arg0, arg1) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    let tmp3;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(closure_2, item)) {
      tmp3 = tmp2[item](tmp);
    } else {
      closure_0 = item;
      let closure_1 = tmp;
      tmp3 = typeof tmp === "function" ? ((arg0) => {
        const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && closure_1(arg0.attribs[closure_0]);
        return isTagResult;
      }) : ((arg0) => {
        const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && arg0.attribs[closure_0] === closure_1;
        return isTagResult;
      });
    }
    return tmp3;
  });
  let reduced = null;
  if (0 !== mapped.length) {
    reduced = mapped.reduce(combineFuncs);
  }
  let reducedResult = !reduced;
  if (reduced) {
    reducedResult = reduced(arg1);
  }
  return reducedResult;
}
export function getElements(arg0, arg1, arg2, arg3) {
  let found;
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  _require = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    let tmp3;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(closure_2, item)) {
      tmp3 = tmp2[item](tmp);
    } else {
      closure_0 = item;
      let closure_1 = tmp;
      tmp3 = typeof tmp === "function" ? ((arg0) => {
        const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && closure_1(arg0.attribs[closure_0]);
        return isTagResult;
      }) : ((arg0) => {
        const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && arg0.attribs[closure_0] === closure_1;
        return isTagResult;
      });
    }
    return tmp3;
  });
  let reduced = null;
  if (0 !== mapped.length) {
    const tmp2 = combineFuncs;
    reduced = mapped.reduce(combineFuncs);
  }
  if (reduced) {
    let tmp3 = arg1;
    found = require("filter").filter(reduced, arg1, arg2, num);
  } else {
    found = [];
  }
  return found;
}
export function getElementById(fn, arg1, arg2) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let tmp = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    tmp = items;
  }
  const id = "id";
  dependencyMap = fn;
  return id(9426).findOne(typeof fn === "function" ? ((arg0) => {
    const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && closure_1(arg0.attribs[closure_0]);
    return isTagResult;
  }) : ((arg0) => {
    const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && arg0.attribs[closure_0] === closure_1;
    return isTagResult;
  }), tmp, flag);
}
export function getElementsByTagName(link, children, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  return filter.filter(closure_2.tag_name(link), children, flag, num);
}
export function getElementsByClassName(fn, arg1, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  const _class = "class";
  dependencyMap = fn;
  const tmp = typeof fn === "function" ? ((arg0) => {
    const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && closure_1(arg0.attribs[closure_0]);
    return isTagResult;
  }) : ((arg0) => {
    const isTagResult = closure_2_0(closure_2_1[0]).isTag(arg0) && arg0.attribs[closure_0] === closure_1;
    return isTagResult;
  });
  return _class(9426).filter(tmp, arg1, flag, num);
}
export function getElementsByTagType(fn, arg1, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  return filter.filter(closure_2.tag_type(fn), arg1, flag, num);
}
