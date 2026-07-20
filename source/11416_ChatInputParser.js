// Module ID: 11416
// Function ID: 88866
// Name: ChatInputParser
// Dependencies: []
// Exports: convertToNativeStyle

// Module 11416 (ChatInputParser)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const processColor = arg1(dependencyMap[2]).processColor;
const tmp2 = () => {
  class ChatInputParser {
    constructor() {
      tmp = closure_2(this, ChatInputParser);
      this.rules = {};
      return;
    }
  }
  const importDefault = ChatInputParser;
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
      delete r1[r0];
    }
  };
  items[1] = obj;
  obj = {
    key: "parse",
    value(arg0, arg1) {
      const ChatInputParser = arg0;
      const obj = ChatInputParser(arg1[3]);
      return ChatInputParser(arg1[3]).valuesIn(this.rules).reduce((arr, matchFunction) => {
        arr = matchFunction;
        return arr.concat(matchFunction.matchFunction(arr, matchFunction).map((arg0, self) => {
          if ("function" === typeof self.deleteNodeOnBackspace) {
            let deleteNodeOnBackspace = self.deleteNodeOnBackspace(arg0);
          } else {
            deleteNodeOnBackspace = self.deleteNodeOnBackspace;
          }
          if ("function" === typeof self.editDisabled) {
            let editDisabled = self.editDisabled(arg0);
          } else {
            editDisabled = self.editDisabled;
          }
          const obj = { type: self.type };
          let style;
          if (null != self.style) {
            style = self.style(arg0);
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
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/chat_input/native/ChatInputParser.tsx");

export default tmp2;
export const convertToNativeStyle = (color) => {
  let backgroundColor;
  let borderRadius;
  ({ backgroundColor, borderRadius } = color);
  let obj = {};
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
export const ChatInputNodeType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", COMMAND_OPTION_WITH_VALUE: 1, [1]: "COMMAND_OPTION_WITH_VALUE", EMOJI_HIGHLIGHT: 2, [2]: "EMOJI_HIGHLIGHT", USER_HIGHLIGHT: 3, [3]: "USER_HIGHLIGHT", ROLE_HIGHLIGHT: 4, [4]: "ROLE_HIGHLIGHT", CHANNEL_HIGHLIGHT: 5, [5]: "CHANNEL_HIGHLIGHT", SILENT_HIGHLIGHT: 6, [6]: "SILENT_HIGHLIGHT" };
