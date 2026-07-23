// Module ID: 630
// Function ID: 7249
// Name: u
// Dependencies: [2]

// Module 630 (u)
let _Date = Date;
if (Date.now) {
  let nowResult = _Date.now();
} else {
  let prototype = _Date.prototype;
  _Date = new _Date();
  nowResult = +_Date;
}
let tmp6 = global.performance || {};
let closure_1 = tmp6;
let closure_2 = [];
let closure_3 = {};
function u(arg0, arg1) {
  const items = [];
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arr;
    if (arr[num][arg0] == arg1) {
      let tmp2 = arr;
      arr = items.push(arr[num]);
    }
  }
  return items;
}
function f(arg0, arg1) {
  let tmp10;
  let diff = tmp - 1;
  if (+arr.length) {
    do {
      let tmp4 = arr;
      let tmp5 = arr[diff];
      let tmp6 = tmp5.entryType != arg0;
      if (!tmp6) {
        let tmp7 = tmp3;
        if (tmp3) {
          tmp7 = tmp5.name != arg1;
        }
        tmp6 = tmp7;
      }
      if (!tmp6) {
        let tmp8 = arr;
        let spliceResult = arr.splice(diff, 1);
      }
      tmp10 = +diff;
      diff = tmp10 - 1;
    } while (tmp10);
  }
}
if (!tmp6.now) {
  tmp6.now = tmp6.webkitNow || tmp6.mozNow || tmp6.msNow || (() => {
    let _Date = Date;
    if (Date.now) {
      let nowResult = _Date.now();
    } else {
      const prototype = _Date.prototype;
      _Date = new _Date();
      nowResult = +_Date;
    }
    return nowResult - closure_0;
  });
}
if (!tmp6.mark) {
  tmp6.mark = tmp6.webkitMark || ((name) => {
    const obj = { name, entryType: "mark", startTime: tmp6.now(), duration: 0 };
    closure_3[name] = obj;
  });
}
if (!tmp6.measure) {
  tmp6.measure = tmp6.webkitMeasure || ((name) => {
    if (undefined !== arg2) {
      if (undefined === dependencyMap[arg2]) {
        const _SyntaxError2 = SyntaxError;
        const syntaxError = new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.");
        throw syntaxError;
      }
    }
    if (undefined !== arg1) {
      if (undefined === dependencyMap[arg1]) {
        const _SyntaxError = SyntaxError;
        const syntaxError1 = new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.");
        throw syntaxError1;
      }
    }
    let num = 0;
    if (dependencyMap[arg1]) {
      num = dependencyMap[arg1].startTime;
    }
    if (dependencyMap[arg2]) {
      let startTime = dependencyMap[arg2].startTime;
    } else {
      startTime = tmp6.now();
    }
    const obj = { name, entryType: "measure", startTime: num, duration: startTime - num };
  });
}
if (!tmp6.getEntriesByType) {
  tmp6.getEntriesByType = tmp6.webkitGetEntriesByType || ((arg0) => u("entryType", arg0));
}
if (!tmp6.getEntriesByName) {
  tmp6.getEntriesByName = tmp6.webkitGetEntriesByName || ((arg0) => u("name", arg0));
}
if (!tmp6.clearMarks) {
  tmp6.clearMarks = tmp6.webkitClearMarks || ((arg0) => {
    f("mark", arg0);
  });
}
if (!tmp6.clearMeasures) {
  tmp6.clearMeasures = tmp6.webkitClearMeasures || ((arg0) => {
    f("measure", arg0);
  });
}
global.performance = tmp6;
let tmp7 = "function" === typeof globalThis.define;
if (tmp7) {
  let ajs = globalThis.define.amd;
  if (!ajs) {
    ajs = globalThis.define.ajs;
  }
  tmp7 = ajs;
}
if (tmp7) {
  globalThis.define("performance", [], () => closure_1);
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/performance-utils/performance-polyfill.js");
