// Module ID: 14043
// Function ID: 108021
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 2]
// Exports: parseVtt

// Module 14043 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _defineProperties = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _defineProperties;
  }
  const result = _isNativeReflectConstruct();
}
function validTimestamp(arg0) {
  return regex.test(arg0);
}
function parseTimestamp(str) {
  const match = str.match(closure_6);
  if (null == match) {
    return 0;
  } else {
    str = "0";
    if (null != match[1]) {
      str = tmp3;
    }
    const _parseFloat = parseFloat;
    const result = 60 * parseFloat(str);
    const _parseFloat2 = parseFloat;
    const result1 = 60 * parseFloat(match[2]);
    return result * 60 + result1 + parseFloat(match[3]);
  }
}
let tmp2 = ((arg0) => {
  class VttParserError {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_1(this, VttParserError);
      items = [];
      items[0] = arg0;
      obj = outer1_3(VttParserError);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.error = arg1;
      tmp2Result.name = "ParserError";
      return tmp2Result;
    }
  }
  callback(VttParserError, arg0);
  return VttParserError(VttParserError);
})(require("_wrapNativeSuper")(Error));
let closure_5 = tmp2;
const re6 = /([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VttParser.tsx");

export const VttParserError = tmp2;
export const parseVtt = function parseVtt(text) {
  let cues;
  let errors;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const meta = obj.meta;
  let tmp = undefined !== meta && meta;
  const strict = obj.strict;
  let str = text.trim();
  const str2 = text.trim().replace(/\r\n/g, "\n");
  let parts = text.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n\n");
  const str4 = parts.shift();
  if (str4.startsWith("WEBVTT")) {
    let parts1 = str4.split("\n");
    const replaced = parts1[0].replace("WEBVTT", "");
    if (replaced.length > 0) {
      if (" " !== replaced[0]) {
        if ("\t" !== replaced[0]) {
          let prototype3 = tmp2.prototype;
          let tmp21 = new tmp2("Header comment must start with space or tab");
          throw tmp21;
        }
      }
    }
    if (0 === parts.length) {
      if (1 === parts1.length) {
        obj = { valid: true, strict: tmp2, cues: [], errors: [] };
        return obj;
      }
    }
    if (!tmp) {
      if (parts1.length > 1) {
        if ("" !== parts1[1]) {
          let prototype2 = tmp2.prototype;
          let tmp11 = new tmp2("Missing blank line after signature");
          throw tmp11;
        }
      }
    }
    ({ errors, cues } = (function parseCues(parts, arg1) {
      let _defineProperties = arg1;
      const items = [];
      const mapped = parts.map((str) => {
        const parts = str.split("\n");
        const found = parts.filter(Boolean);
        if (found.length <= 0) {
          if (1 === found.length) {
            const first = found[0];
            if (!first.includes("-->")) {
              const _HermesInternal = HermesInternal;
              const prototype = outer2_5.prototype;
              const tmp6 = new outer2_5("Cue identifier cannot be standalone (cue #" + arg1 + ")");
              throw tmp6;
            }
          }
          if (found.length > 1) {
            const first1 = found[0];
            if (!first1.includes("-->")) {
              if (!obj4.includes("-->")) {
                const _HermesInternal2 = HermesInternal;
                const prototype2 = outer2_5.prototype;
                const tmp11 = new outer2_5("Cue identifier needs to be followed by timestamp (cue #" + arg1 + ")");
                throw tmp11;
              }
              obj4 = found[1];
            }
          }
          let hasItem = found.length > 1;
          if (hasItem) {
            hasItem = found[1].includes("-->");
            const obj5 = found[1];
          }
          let str11 = "";
          if (hasItem) {
            str11 = found.shift();
          }
          const parts1 = found[0].split(" --> ");
          if (2 === parts1.length) {
            if (outer2_8(parts1[0])) {
              if (outer2_8(parts1[1])) {
                const tmp16 = outer2_9(parts1[0]);
                const tmp17 = outer2_9(parts1[1]);
                if (tmp) {
                  if (tmp16 > tmp17) {
                    const _HermesInternal5 = HermesInternal;
                    const prototype5 = outer2_5.prototype;
                    const tmp34 = new outer2_5("Start timestamp greater than end (cue #" + arg1 + ")");
                    throw tmp34;
                  } else if (tmp17 <= tmp16) {
                    const _HermesInternal4 = HermesInternal;
                    const prototype4 = outer2_5.prototype;
                    const tmp29 = new outer2_5("End must be greater than start (cue #" + arg1 + ")");
                    throw tmp29;
                  }
                }
                if (!tmp) {
                  if (tmp17 < tmp16) {
                    const _HermesInternal3 = HermesInternal;
                    const prototype3 = outer2_5.prototype;
                    const tmp21 = new outer2_5("End must be greater or equal to start when not strict (cue #" + arg1 + ")");
                    throw tmp21;
                  }
                }
                const trimmed = parts1[1].replace(outer2_6, "").trim();
                found.shift();
                const str18 = found.join("\n");
                let tmp2 = false;
                if ("" !== str18.trim()) {
                  const obj = { identifier: str11, start: tmp16, end: tmp17, text: str18, styles: trimmed };
                  tmp2 = obj;
                }
                const str16 = parts1[1];
                const str17 = parts1[1].replace(outer2_6, "");
              }
            }
          }
          const _HermesInternal6 = HermesInternal;
          const prototype6 = outer2_5.prototype;
          const tmp39 = new outer2_5("Invalid cue timestamp (cue #" + arg1 + ")");
          throw tmp39;
        } else {
          const trimmed1 = found[0].trim();
          tmp2 = null;
          str = found[0];
        }
        return tmp2;
      });
      return {
        cues: mapped.filter((arg0) => {
          let tmp = null !== arg0;
          if (tmp) {
            tmp = false !== arg0;
          }
          return tmp;
        }),
        errors: items
      };
    })(parts, tmp2));
    if (tmp2) {
      if (errors.length > 0) {
        throw errors[0];
      }
    }
    let tmp14 = null;
    if (tmp) {
      tmp14 = (function parseMeta(parts1) {
        const obj = {};
        const substr = parts1.slice(1);
        const item = substr.forEach((arr) => {
          const index = arr.indexOf(":");
          const trimmed = arr.slice(0, index).trim();
          const str = arr.slice(0, index);
          obj[trimmed] = arr.slice(index + 1).trim();
        });
        let tmp2 = null;
        if (Object.keys(obj).length > 0) {
          tmp2 = obj;
        }
        return tmp2;
      })(parts1);
    }
    obj = { valid: 0 === errors.length, strict: tmp2, cues, errors };
    if (tmp) {
      const obj1 = { meta: tmp14 };
      tmp = obj1;
    }
    const merged = Object.assign(tmp);
    return obj;
  } else {
    let prototype = tmp2.prototype;
    let tmp6 = new tmp2("Must start with \"WEBVTT\"");
    throw tmp6;
  }
  const str3 = text.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n");
};
