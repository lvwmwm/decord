// Module ID: 1049
// Function ID: 11241
// Name: createFrame
// Dependencies: []

// Module 1049 (createFrame)
function createFrame(filename, arg1, lineno, colno) {
  let UNKNOWN_FUNCTION = arg1;
  const obj = { filename };
  if ("<anonymous>" === arg1) {
    UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
  }
  obj.function = UNKNOWN_FUNCTION;
  obj.in_app = true;
  if (undefined !== lineno) {
    obj.lineno = lineno;
  }
  if (undefined !== colno) {
    obj.colno = colno;
  }
  return obj;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
let closure_4 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
let closure_5 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
let closure_6 = /at (.+?) ?\(data:(.+?),/;
const items = [
,
  function chromeStackParserFn(str) {
    let tmp13;
    let tmp15;
    const match = str.match(closure_6);
    if (match) {
      const obj = {};
      const _HermesInternal = HermesInternal;
      obj.filename = "<data:" + match[2] + ">";
      obj.function = match[1];
      return obj;
    } else {
      const match1 = regex.exec(str);
      if (match1) {
        const tmp23 = callback(match1, 4);
        return createFrame(tmp23[1], require(dependencyMap[1]).UNKNOWN_FUNCTION, +tmp23[2], +tmp23[3]);
      } else {
        const match2 = regex2.exec(str);
        if (match2) {
          if (match2[2]) {
            if (0 === arr.indexOf("eval")) {
              const match3 = regex3.exec(match2[2]);
              if (match3) {
                match2[2] = match3[1];
                match2[3] = match3[2];
                match2[4] = match3[3];
              }
            }
            const arr = match2[2];
          }
          let UNKNOWN_FUNCTION = match2[1];
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
          }
          [tmp13, tmp15] = callback(extractSafariExtensionDetails(UNKNOWN_FUNCTION, match2[2]), 2);
          let tmp16;
          if (match2[3]) {
            tmp16 = +match2[3];
          }
          let tmp17;
          if (match2[4]) {
            tmp17 = +match2[4];
          }
          return createFrame(tmp15, tmp13, tmp16, tmp17);
        }
      }
    }
  }
];
let closure_7 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
let closure_8 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const items1 = [
,
  function gecko(arg0) {
    let tmp11;
    let tmp9;
    const match = regex4.exec(arg0);
    if (match) {
      if (match[3]) {
        if (arr.indexOf(" > eval") > -1) {
          const match1 = regex5.exec(match[3]);
          if (match1) {
            match[1] = match[1] || "eval";
            match[3] = match1[1];
            match[4] = match1[2];
            match[5] = "";
          }
        }
        const arr = match[3];
      }
      let UNKNOWN_FUNCTION = match[1];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
      }
      [tmp9, tmp11] = callback(extractSafariExtensionDetails(UNKNOWN_FUNCTION, match[3]), 2);
      let tmp12;
      if (match[4]) {
        tmp12 = +match[4];
      }
      let tmp13;
      if (match[5]) {
        tmp13 = +match[5];
      }
      return createFrame(tmp11, tmp9, tmp12, tmp13);
    }
  }
];
let closure_9 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const items2 = [
  null,
  function winjs(arg0) {
    const match = regex6.exec(arg0);
    let tmp3Result;
    if (match) {
      let UNKNOWN_FUNCTION = match[1];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
      }
      let tmp8;
      if (match[4]) {
        tmp8 = +match[4];
      }
      tmp3Result = createFrame(tmp4, UNKNOWN_FUNCTION, tmp7, tmp8);
      const tmp3 = createFrame;
    }
    return tmp3Result;
  }
];
let closure_10 = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
const items3 = [
,
  function opera10(arg0) {
    const match = regex7.exec(arg0);
    let tmp3Result;
    if (match) {
      let UNKNOWN_FUNCTION = match[3];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
      }
      tmp3Result = createFrame(match[2], UNKNOWN_FUNCTION, +match[1]);
      const tmp3 = createFrame;
    }
    return tmp3Result;
  }
];
let closure_11 = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
const items4 = [
  null,
  function opera11(arg0) {
    const match = regex8.exec(arg0);
    let tmp3Result;
    if (match) {
      let UNKNOWN_FUNCTION = match[3];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = match[4];
      }
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
      }
      tmp3Result = createFrame(tmp4, UNKNOWN_FUNCTION, +match[1], +match[2]);
      const tmp3 = createFrame;
    }
    return tmp3Result;
  }
];
const items5 = [items, items1];
const createStackParser = require(dependencyMap[1]).createStackParser;
function extractSafariExtensionDetails(UNKNOWN_FUNCTION, arg1) {
  const tmp = -1 !== UNKNOWN_FUNCTION.indexOf("safari-extension");
  if (!tmp) {
    if (-1 === UNKNOWN_FUNCTION.indexOf("safari-web-extension")) {
      const items = [UNKNOWN_FUNCTION, arg1];
      return items;
    }
  }
  if (-1 !== UNKNOWN_FUNCTION.indexOf("@")) {
    UNKNOWN_FUNCTION = UNKNOWN_FUNCTION.split("@")[0];
  } else {
    UNKNOWN_FUNCTION = require(dependencyMap[1]).UNKNOWN_FUNCTION;
  }
  const items1 = [UNKNOWN_FUNCTION, ];
  if (tmp) {
    let combined = concat(arg1);
  } else {
    combined = concat(arg1);
  }
  items1[1] = combined;
}

export const chromeStackLineParser = items;
export const defaultStackLineParsers = items5;
export const defaultStackParser = createStackParser.apply(require(dependencyMap[1]), items5);
export const geckoStackLineParser = items1;
export const opera10StackLineParser = items3;
export const opera11StackLineParser = items4;
export const winjsStackLineParser = items2;
