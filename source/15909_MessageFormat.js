// Module ID: 15909
// Function ID: 122998
// Name: MessageFormat
// Dependencies: [15910, 15912, 15914, 15911]

// Module 15909 (MessageFormat)
import extend from "extend";
import extend from "extend";
import extend from "extend";
import extend from "extend";
import extend from "extend";
import extend from "extend";

class MessageFormat {
  constructor(arg0, arg1, arg2) {
    self = this;
    __parseResult = global;
    if ("string" === typeof global) {
      tmp2 = MessageFormat;
      __parseResult = MessageFormat.__parse(global);
    }
    if (__parseResult) {
      str = "messageFormatPattern";
      if ("messageFormatPattern" === __parseResult.type) {
        tmp4 = MessageFormat;
        tmp5 = importDefault;
        _mergeFormatsResult = self._mergeFormats(MessageFormat.formats, importDefault);
        tmp7 = _compilePattern;
        tmp8 = self;
        num = 0;
        obj = require("extend");
        obj = {};
        obj.value = self._resolveLocale(require);
        str2 = "_locale";
        definePropertyResult = obj.defineProperty(self, "_locale", obj);
        tmp10 = self;
        tmp11 = __parseResult;
        tmp12 = require;
        tmp13 = _mergeFormatsResult;
        _compilePattern = self._compilePattern(__parseResult, require, _mergeFormatsResult, self._findPluralRuleFunction(self._locale));
        self.format = (arg0) => self._format(closure_0, arg0);
        return;
      }
    }
    typeError = new TypeError("A message must be provided as a String or AST.");
    throw typeError;
  }
  resolvedOptions() {
    obj = { locale: this._locale };
    return obj;
  }
  _compilePattern(arg0, arg1, arg2, arg3) {
    _default = new require("StringFormat").default(require, importDefault, importAll);
    return _default.compile(global);
  }
  _findPluralRuleFunction(arg0) {
    __localeData__ = MessageFormat.__localeData__;
    parentLocale = __localeData__[global.toLowerCase(global)];
    if (parentLocale) {
      while (!parentLocale.pluralRuleFunction) {
        parentLocale = parentLocale.parentLocale;
        if (parentLocale) {
          str = tmp.parentLocale;
          parentLocale = __localeData__[str.toLowerCase(str)];
        }
      }
      return parentLocale.pluralRuleFunction;
    }
    error = new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + global);
    throw error;
  }
  _format(arg0, arg1) {
    self = this;
    length = global.length;
    num = 0;
    str = "";
    str2 = "";
    if (0 < length) {
      while (true) {
        obj = global[num];
        if ("string" !== typeof obj) {
          id = obj.id;
          if (!require) {
            break;
          } else {
            tmp2 = closure_0;
            tmp3 = closure_1;
            hop = require("extend").hop;
            if (!hop.call(require, id)) {
              break;
            } else {
              tmp9 = require[id];
              if (obj.options) {
                text = `${tmp12(obj.getOption(tmp9), require)}`;
                tmp13 = id;
                tmp14 = tmp9;
              } else {
                text = `${obj.format(tmp9)}`;
                tmp10 = id;
                tmp11 = tmp9;
              }
            }
          }
        } else {
          text = str + obj;
        }
        num = num + 1;
        str = text;
        str2 = text;
      }
      tmp4 = globalThis;
      _Error = Error;
      str3 = "A value must be provided for: ";
      prototype = Error.prototype;
      tmp5 = new.target;
      tmp6 = new.target;
      error = new Error("A value must be provided for: " + id);
      tmp8 = error;
      throw error;
    }
    return str2;
  }
  _mergeFormats(arg0, arg1) {
    obj = {};
    for (const key10009 in arg0) {
      tmp12 = key10009;
      tmp13 = closure_0;
      tmp14 = closure_1;
      hop2 = require("extend").hop;
      if (!hop2.call(arg0, key10009)) {
        continue;
      } else {
        tmp = closure_0;
        tmp2 = closure_1;
        obj2 = require("extend");
        objCreateResult = obj2.objCreate(arg0[key10009]);
        obj[key10009] = objCreateResult;
        callResult = arg1;
        if (!arg1) {
        } else {
          tmp5 = closure_0;
          tmp6 = closure_1;
          hop = require("extend").hop;
          callResult = hop.call(arg1, key10009);
        }
        tmp7 = objCreateResult;
        if (!callResult) {
          continue;
        } else {
          tmp8 = closure_0;
          tmp9 = closure_1;
          obj3 = require("extend");
          extendResult = obj3.extend(objCreateResult, arg1[key10009]);
          tmp11 = objCreateResult;
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
  _resolveLocale(arg0) {
    items1 = global;
    if ("string" === typeof global) {
      items = [];
      items[0] = global;
      items1 = items;
    }
    if (!items1) {
      items1 = [];
    }
    combined = items1.concat(MessageFormat.defaultLocale);
    length = combined.length;
    num = 0;
    if (0 < length) {
      while (true) {
        str = combined[num];
        str2 = str.toLowerCase();
        parts = str2.split("-");
        if (parts.length) {
          tmp2 = tmp[parts.join(parts, "-")];
          while (!tmp2) {
            arr = parts.pop();
            tmp4 = tmp2;
            continue;
          }
          return tmp2.locale;
        }
        num = num + 1;
      }
    }
    arr1 = combined.pop();
    error = new Error("No locale data has been added to IntlMessageFormat for: " + combined.join(", ") + ", or the default locale: " + arr1);
    throw error;
  }
}
extend.defineProperty(MessageFormat, "formats", { enumerable: true, value: { number: { currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } } });
let obj = {};
obj.value = extend.objCreate(null);
extend.defineProperty(MessageFormat, "__localeData__", obj);
obj = {
  value(locale) {
    if (locale) {
      if (locale.locale) {
        MessageFormat.__localeData__[locale.locale.toLowerCase()] = locale;
      }
    }
    const error = new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
    throw error;
  }
};
extend.defineProperty(MessageFormat, "__addLocaleData", obj);
extend.defineProperty(MessageFormat, "__parse", { value: require("SyntaxError").default.parse });
let obj2 = { enumerable: true, writable: true, value: undefined };
extend.defineProperty(MessageFormat, "defaultLocale", obj2);

export default MessageFormat;
