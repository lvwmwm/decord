// Module ID: 15819
// Function ID: 120943
// Name: setUpdateRules
// Dependencies: []
// Exports: getMessage

// Module 15819 (setUpdateRules)
function setUpdateRules(arg0) {
  let closure_3 = function parserFor(rules, arg1) {
    let closure_0 = callback(closure_2[5]).parserFor(arg1(rules));
    const obj = callback(closure_2[5]);
    const obj2 = callback(closure_2[5]);
    const callback = obj2.reactFor(callback(closure_2[5]).ruleOutput(rules, "react"));
    return (arr, context, unsafeContext) => {
      const tmp = !arr.includes("\n\n");
      let text = arr;
      if (!tmp) {
        text = `${arr}

      `;
      }
      return callback2(callback(text, { inline: tmp, context, unsafeContext }));
    };
  }(arg1(dependencyMap[6]).rules, arg0);
  let closure_4 = function parserForNonReact(rules) {
    let closure_0 = callback(closure_2[5]).parserFor(rules);
    return (arg0, context, unsafeContext) => callback(arg0 + "\n\n", { inline: false, context, unsafeContext });
  }(arg1(dependencyMap[6]).rules);
}
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
({ FORMAT_RE: closure_8, MARKDOWN_RE: closure_9, UNSAFE_RE: closure_10, UNSAFE_RE_ALL: closure_11 } = arg1(dependencyMap[3]));
const tmp3 = () => {
  class FormattedMessage {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = closure_6(this, FormattedMessage);
      replaced = arg0;
      if (!arg2) {
        tmp3 = closure_11;
        str = "";
        replaced = arg0.replace(closure_11, "");
      }
      self.message = replaced;
      self.hasMarkdown = arg2;
      tmp4 = closure_1(closure_2[4]);
      tmp4 = new tmp4(self.message, arg1);
      self.intlMessage = tmp4;
      return;
    }
  }
  const arg1 = FormattedMessage;
  let obj = {
    key: "format",
    value(2d) {
      const self = this;
      if (this.hasMarkdown) {
        const tmp2 = callback4(self.getContext(_2d), 2);
        const first = tmp2[0];
        const intlMessage2 = self.intlMessage;
        return callback2(intlMessage2.format(first), first, tmp2[1]);
      } else {
        const intlMessage = self.intlMessage;
        return intlMessage.format(_2d);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "astFormat",
    value(2d) {
      const tmp = callback4(this.getContext(_2d), 2);
      const first = tmp[0];
      const intlMessage = this.intlMessage;
      return callback3(intlMessage.format(first), first, tmp[1]);
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
      if (regex.test(this.message)) {
        const _Object = Object;
        const entries = Object.entries(arg0);
        let num4 = 0;
        let num5 = 0;
        if (0 < entries.length) {
          do {
            let tmp2 = closure_5;
            let tmp3 = closure_5(entries[num5], 2);
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
}();
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export const FormattedMessage = tmp3;
export { setUpdateRules };
export const getMessage = function getMessage(str) {
  if (null == str) {
    return "";
  } else {
    if (null == closure_3) {
      setUpdateRules(arg1(dependencyMap[7]).default);
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
