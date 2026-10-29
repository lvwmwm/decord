// Module ID: 12779
// Function ID: 12780
// Name: attributeRules
// Dependencies: [12770]

// Module 12779 (attributeRules)
import _mod12770 from "module_12770" /* 12770 */;

let fn = this && this.__importDefault || ((__esModule) => {
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
const module_12770 = fn(_mod12770);
const re1 = /[-[\]{}()*+?.,\\^$|#\s]/g;
const set = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);

export const attributeRules = {
  equals(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let fn;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    let closure_3 = value;
    if (typeof ignoreCase.ignoreCase === "boolean") {
      ignoreCase = ignoreCase.ignoreCase;
    } else if ("quirks" === ignoreCase.ignoreCase) {
      ignoreCase = adapter.quirksMode;
    } else {
      ignoreCase = !adapter.xmlMode;
      if (ignoreCase) {
        let tmp = set;
        ignoreCase = set.has(ignoreCase.name);
      }
    }
    if (ignoreCase) {
      closure_3 = value.toLowerCase();
      fn = (arg0) => {
        const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
        const tmp = null != attributeValue && attributeValue.length === length.length && attributeValue.toLowerCase() === length && closure_0(arg0);
        return tmp;
      };
    } else {
      fn = (arg0) => {
        const tmp = adapter.getAttributeValue(arg0, closure_1_2) === length && closure_0(arg0);
        return tmp;
      };
    }
    return fn;
  },
  hyphen(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let hyphen;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    let closure_3 = value;
    const length = value.length;
    if (typeof ignoreCase.ignoreCase === "boolean") {
      ignoreCase = ignoreCase.ignoreCase;
    } else if ("quirks" === ignoreCase.ignoreCase) {
      ignoreCase = adapter.quirksMode;
    } else {
      ignoreCase = !adapter.xmlMode;
      if (ignoreCase) {
        let tmp = set;
        ignoreCase = set.has(ignoreCase.name);
      }
    }
    if (ignoreCase) {
      closure_3 = value.toLowerCase();
      hyphen = function hyphenIC(arg0) {
        const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
        let tmp = null != attributeValue;
        if (tmp) {
          tmp = attributeValue.length === length || "-" === attributeValue.charAt(tmp2);
          const tmp3 = attributeValue.length === length || "-" === attributeValue.charAt(tmp2);
        }
        if (tmp) {
          const str2 = attributeValue.substr(0, length);
          tmp = str2.toLowerCase() === closure_3;
        }
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    } else {
      hyphen = function hyphen(arg0) {
        const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
        let tmp = null != attributeValue;
        if (tmp) {
          tmp = attributeValue.length === length || "-" === attributeValue.charAt(tmp2);
          const tmp3 = attributeValue.length === length || "-" === attributeValue.charAt(tmp2);
        }
        if (tmp) {
          tmp = attributeValue.substr(0, length) === closure_3;
        }
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    }
    return hyphen;
  },
  element(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    const obj = /\s/;
    if (obj.test(value)) {
      return module_12770.default.falseFunc;
    } else {
      const concat = "(?:^|\\s)".concat;
      const _RegExp = RegExp;
      const combined = "(?:^|\\s)".concat(value.replace(re1, "\\$&"), "(?:$|\\s)");
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        ignoreCase = !adapter.xmlMode;
        if (ignoreCase) {
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      let str4 = "";
      if (ignoreCase) {
        str4 = "i";
      }
      const self = this;
      const self2 = this;
      const _RegExp1 = new _RegExp(combined, str4);
      return function element(arg0) {
        const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
        const isMatch = null != attributeValue && attributeValue.length >= value.length && _RegExp1.test(attributeValue) && closure_0(arg0);
        return isMatch;
      };
    }
  },
  exists(arg0, name, adapter) {
    let closure_0 = arg0;
    name = name.name;
    adapter = adapter.adapter;
    return (arg0) => {
      const hasAttribResult = adapter.hasAttrib(arg0, name) && closure_0(arg0);
      return hasAttribResult;
    };
  },
  start(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let fn;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    let closure_3 = value;
    const length = value.length;
    if (0 === length) {
      fn = module_12770.default.falseFunc;
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else {
        let str = "quirks";
        if ("quirks" === ignoreCase.ignoreCase) {
          ignoreCase = adapter.quirksMode;
        } else {
          ignoreCase = !adapter.xmlMode;
          if (ignoreCase) {
            let tmp = set;
            ignoreCase = set.has(ignoreCase.name);
          }
        }
      }
      if (ignoreCase) {
        closure_3 = value.toLowerCase();
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
          let tmp = null != attributeValue && attributeValue.length >= length;
          if (tmp) {
            const str = attributeValue.substr(0, length);
            tmp = str.toLowerCase() === closure_3;
          }
          if (tmp) {
            tmp = closure_0(arg0);
          }
          return tmp;
        };
      } else {
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
          let startsWithResult;
          if (null !== attributeValue) {
            if (undefined !== attributeValue) {
              startsWithResult = attributeValue.startsWith(closure_3);
            }
          }
          const tmp3 = startsWithResult && closure_0(arg0);
          return tmp3;
        };
      }
    }
    return fn;
  },
  end(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let fn;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    let closure_3 = value;
    let closure_4 = tmp;
    if (0 === -value.length) {
      let tmp3 = module_12770;
      fn = module_12770.default.falseFunc;
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else {
        let str = "quirks";
        if ("quirks" === ignoreCase.ignoreCase) {
          ignoreCase = adapter.quirksMode;
        } else {
          ignoreCase = !adapter.xmlMode;
          if (ignoreCase) {
            ignoreCase = set.has(ignoreCase.name);
          }
        }
      }
      if (ignoreCase) {
        closure_3 = value.toLowerCase();
        fn = (arg0) => {
          const str = adapter.getAttributeValue(arg0, closure_1_2);
          let formatted;
          if (null !== str) {
            if (undefined !== str) {
              const str2 = str.substr(closure_4);
              formatted = str2.toLowerCase();
            }
          }
          const tmp3 = formatted === closure_3 && closure_0(arg0);
          return tmp3;
        };
      } else {
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
          let endsWithResult;
          if (null !== attributeValue) {
            if (undefined !== attributeValue) {
              endsWithResult = attributeValue.endsWith(closure_3);
            }
          }
          const tmp3 = endsWithResult && closure_0(arg0);
          return tmp3;
        };
      }
    }
    return fn;
  },
  any(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    if ("" === value) {
      return module_12770.default.falseFunc;
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        ignoreCase = !adapter.xmlMode && set.has(ignoreCase.name);
      }
      if (ignoreCase) {
        const _RegExp = RegExp;
        let tmp3 = re1;
        const self = this;
        const self2 = this;
        const regExp = new RegExp(value.replace(re1, "\\$&"), "i");
        return function anyIC(arg0) {
          const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
          const isMatch = null != attributeValue && attributeValue.length >= value.length && regExp.test(attributeValue) && closure_0(arg0);
          return isMatch;
        };
      } else {
        return (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
          let hasItem;
          if (null !== attributeValue) {
            if (undefined !== attributeValue) {
              hasItem = attributeValue.includes(value);
            }
          }
          const tmp3 = hasItem && closure_0(arg0);
          return tmp3;
        };
      }
    }
  },
  not(arg0, ignoreCase, adapter) {
    let closure_129_2;
    let fn;
    let value;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: closure_129_2, value } = ignoreCase);
    let closure_3 = value;
    if ("" === value) {
      fn = (arg0) => {
        const attributeValue = adapter.getAttributeValue(arg0, closure_1_2) && closure_0(arg0);
        return attributeValue;
      };
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        ignoreCase = !adapter.xmlMode;
        if (ignoreCase) {
          let tmp = set;
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      if (ignoreCase) {
        closure_3 = value.toLowerCase();
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, closure_1_2);
          const tmp = (null == attributeValue || attributeValue.length !== length.length || attributeValue.toLowerCase() !== length) && closure_0(arg0);
          return tmp;
        };
      } else {
        fn = (arg0) => {
          const tmp = adapter.getAttributeValue(arg0, closure_1_2) !== length && closure_0(arg0);
          return tmp;
        };
      }
    }
    return fn;
  }
};
