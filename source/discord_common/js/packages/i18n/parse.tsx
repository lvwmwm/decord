// Module ID: 15995
// Function ID: 123525
// Name: setUpdateRules
// Dependencies: [57, 6, 7, 15996, 15954, 3829, 15997, 15998, 2]
// Exports: getMessage

// Module 15995 (setUpdateRules)
import _slicedToArray from "_slicedToArray";
import link from "link";
import updateRules from "updateRules";
import FORMAT_RE from "FORMAT_RE";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
function setUpdateRules(arg0) {
  let closure_3 = (function parserFor(rules, arg1) {
    let closure_0 = outer1_1(outer1_2[5]).parserFor(arg1(rules));
    const obj = outer1_1(outer1_2[5]);
    const obj2 = outer1_1(outer1_2[5]);
    let closure_1 = obj2.reactFor(outer1_1(outer1_2[5]).ruleOutput(rules, "react"));
    return (arr, context, unsafeContext) => {
      const tmp = !arr.includes("\n\n");
      let text = arr;
      if (!tmp) {
        text = `${arr}

      `;
      }
      return callback2(callback(text, { inline: tmp, context, unsafeContext }));
    };
  })(require(15997) /* link */.rules, arg0);
  let closure_4 = (function parserForNonReact(rules) {
    let closure_0 = outer1_1(outer1_2[5]).parserFor(rules);
    return (arg0, context, unsafeContext) => callback(arg0 + "\n\n", { inline: false, context, unsafeContext });
  })(require(15997) /* link */.rules);
}
({ FORMAT_RE: closure_8, MARKDOWN_RE: closure_9, UNSAFE_RE: closure_10, UNSAFE_RE_ALL: closure_11 } = FORMAT_RE);
let tmp3 = (() => {
  class FormattedMessage {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_6(this, FormattedMessage);
      replaced = arg0;
      if (!arg2) {
        tmp3 = outer1_11;
        str = "";
        replaced = arg0.replace(outer1_11, "");
      }
      self.message = replaced;
      self.hasMarkdown = arg2;
      tmp4 = outer1_1(outer1_2[4]);
      tmp4 = new tmp4(self.message, arg1);
      self.intlMessage = tmp4;
      return;
    }
  }
  let obj = {
    key: "format",
    value(_2d) {
      const self = this;
      if (this.hasMarkdown) {
        const tmp2 = outer1_5(self.getContext(_2d), 2);
        const first = tmp2[0];
        const intlMessage2 = self.intlMessage;
        return outer1_3(intlMessage2.format(first), first, tmp2[1]);
      } else {
        const intlMessage = self.intlMessage;
        return intlMessage.format(_2d);
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "astFormat",
    value(_2d) {
      const tmp = outer1_5(this.getContext(_2d), 2);
      const first = tmp[0];
      const intlMessage = this.intlMessage;
      return outer1_4(intlMessage.format(first), first, tmp[1]);
    }
  };
  items[1] = obj;
  obj = {
    key: "plainFormat",
    value(arg0) {
      const intlMessage = this.intlMessage;
      return intlMessage.format(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getContext",
    value(arg0) {
      const obj = {};
      if (outer1_10.test(this.message)) {
        const _Object = Object;
        const entries = Object.entries(arg0);
        let num4 = 0;
        let num5 = 0;
        if (0 < entries.length) {
          do {
            let tmp2 = outer1_5;
            let tmp3 = outer1_5(entries[num5], 2);
            let first = tmp3[0];
            let message = this.message;
            let _HermesInternal = HermesInternal;
            let tmp5 = num4;
            if (message.includes("!!{" + first + "}!!")) {
              let sum = num4 + 1;
              obj[sum] = tmp3[1];
              arg0[first] = sum;
              tmp5 = sum;
            }
            num5 = num5 + 1;
            num4 = tmp5;
          } while (num5 < entries.length);
        }
      }
      const items = [arg0, obj];
      return items;
    }
  };
  return callback(FormattedMessage, items);
})();
let closure_12 = tmp3;
const result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export const FormattedMessage = tmp3;
export { setUpdateRules };
export const getMessage = function getMessage(str) {
  if (null == str) {
    return "";
  } else {
    if (null == closure_3) {
      setUpdateRules(require(15998) /* updateRules */.default);
    }
    const replaced = str.replace(/^\n+|\n+$/g, "");
    const isMatch = regex.test(replaced);
    const isMatch1 = regex2.test(replaced);
    if (isMatch) {
      const prototype = tmp3.prototype;
      let tmp10 = new tmp3(replaced, arg1, isMatch1);
    } else {
      tmp10 = replaced;
    }
    return tmp10;
  }
};
