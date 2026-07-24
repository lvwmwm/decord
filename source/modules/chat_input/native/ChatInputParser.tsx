// Module ID: 11147
// Function ID: 86751
// Name: ChatInputParser
// Dependencies: [6, 7, 27, 22, 2]
// Exports: convertToNativeStyle

// Module 11147 (ChatInputParser)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { processColor } from "get ActivityIndicator";

const tmp2 = (() => {
  class ChatInputParser {
    constructor() {
      tmp = outer1_2(this, ChatInputParser);
      this.rules = {};
      return;
    }
  }
  let obj = {
    key: "addRule",
    value(ruleId) {
      this.rules[ruleId.ruleId] = ruleId;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "removeRule",
    value(arg0) {
      delete tmp2[tmp];
    }
  };
  items[1] = obj;
  obj = {
    key: "parse",
    value(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = ChatInputParser(outer1_1[3]);
      return ChatInputParser(outer1_1[3]).valuesIn(this.rules).reduce((arr, matchFunction) => {
        let closure_0 = matchFunction;
        return arr.concat(matchFunction.matchFunction(closure_0, closure_1).map((arg0) => {
          if ("function" === typeof matchFunction.deleteNodeOnBackspace) {
            let deleteNodeOnBackspace = matchFunction.deleteNodeOnBackspace(arg0);
          } else {
            deleteNodeOnBackspace = matchFunction.deleteNodeOnBackspace;
          }
          if ("function" === typeof matchFunction.editDisabled) {
            let editDisabled = matchFunction.editDisabled(arg0);
          } else {
            editDisabled = matchFunction.editDisabled;
          }
          const obj = { type: matchFunction.type };
          let style;
          if (null != matchFunction.style) {
            style = matchFunction.style(arg0);
          }
          obj.style = style;
          obj.deleteNodeOnBackspace = deleteNodeOnBackspace;
          obj.editDisabled = editDisabled;
          const merged = Object.assign(arg0);
          return obj;
        }));
      }, []);
    }
  };
  items[2] = obj;
  return callback(ChatInputParser, items);
})();
const result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/ChatInputParser.tsx");

export default tmp2;
export const convertToNativeStyle = (color) => {
  let backgroundColor;
  let borderRadius;
  ({ backgroundColor, borderRadius } = color);
  let obj = { backgroundColor: 0, color: 0, borderRadius: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  let tmp3 = null;
  if (null != backgroundColor) {
    tmp3 = null;
    if (null != borderRadius) {
      obj = { backgroundColor: processColor(backgroundColor), cornerRadius: borderRadius };
      tmp3 = obj;
    }
  }
  obj = { color: processColor(color.color), backgroundStyle: tmp3 };
  const merged1 = Object.assign(merged);
  return obj;
};
export const ChatInputParseResultDataType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", ROLE_HIGHLIGHT: 1, [1]: "ROLE_HIGHLIGHT" };
export const ChatInputNodeType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", COMMAND_OPTION_WITH_VALUE: 1, [1]: "COMMAND_OPTION_WITH_VALUE", EMOJI_HIGHLIGHT: 2, [2]: "EMOJI_HIGHLIGHT", USER_HIGHLIGHT: 3, [3]: "USER_HIGHLIGHT", ROLE_HIGHLIGHT: 4, [4]: "ROLE_HIGHLIGHT", CHANNEL_HIGHLIGHT: 5, [5]: "CHANNEL_HIGHLIGHT", SILENT_HIGHLIGHT: 6, [6]: "SILENT_HIGHLIGHT", GAME_HIGHLIGHT: 7, [7]: "GAME_HIGHLIGHT", GAME_MENTION_INPUT: 8, [8]: "GAME_MENTION_INPUT" };
