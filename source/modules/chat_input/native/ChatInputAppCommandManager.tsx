// Module ID: 11460
// Function ID: 89212
// Name: ChatInputAppCommandManager
// Dependencies: [57, 31, 7021, 7022, 4130, 689, 11225, 566, 11433, 8189, 1881, 11461, 11434, 2]

// Module 11460 (ChatInputAppCommandManager)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, fontSize: 14 };
obj.commandOption = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, fontSize: 14 };
obj.commandErrorOption = _createForOfIteratorHelperLoose;
obj.autocomplete = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, fontWeight: "bold" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((chatInputRef) => {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const channel = chatInputRef.channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  const tmp = ref();
  let callback = tmp;
  const applicationCommandOptionValueParser = chatInputRef(commandsDisabled[6]).useApplicationCommandOptionValueParser({ channel });
  let obj = chatInputRef(commandsDisabled[6]);
  const items = [stateFromStores1];
  const stateFromStores = chatInputRef(commandsDisabled[7]).useStateFromStores(items, () => stateFromStores1.getActiveCommand(channel.id));
  const obj2 = chatInputRef(commandsDisabled[7]);
  const items1 = [stateFromStores];
  stateFromStores1 = chatInputRef(commandsDisabled[7]).useStateFromStores(items1, () => stateFromStores.getLastResponseNonce(channel.id));
  let obj3 = chatInputRef(commandsDisabled[7]);
  let text = chatInputRef(commandsDisabled[8]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  let tmp6 = callback(applicationCommandOptionValueParser.useState(ref.current), 2);
  let closure_9 = tmp6[1];
  const obj4 = chatInputRef(commandsDisabled[8]);
  const commands = channel(commandsDisabled[9]).useCachedResults({ type: "channel", channel }, chatInputRef(commandsDisabled[10]).ApplicationCommandType.CHAT, tmp6[0]).commands;
  let closure_11 = applicationCommandOptionValueParser.useRef(undefined);
  const items2 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp];
  callback = applicationCommandOptionValueParser.useCallback(() => {
    const current = chatInputStateRef.current;
    let text = current.text;
    let obj = { activeCommand: stateFromStores, channel, commandsDisabled, editId: current.editId, focused: current.focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart: current.selectionStart, selectionEnd: current.selectionEnd, text };
    if (null == ref.current) {
      let tmp6 = chatInputStateRef(commandsDisabled[11]);
      obj = {};
      obj.props = obj;
      obj.ref = chatInputRef;
      obj.optionValueParser = applicationCommandOptionValueParser;
      obj = {
        commandOption() {
            return chatInputRef(commandsDisabled[12]).convertToNativeStyle(outer1_4.commandOption);
          },
        commandErrorOption() {
            return chatInputRef(commandsDisabled[12]).convertToNativeStyle(outer1_4.commandErrorOption);
          },
        autocomplete(arg0) {
            if (null == arg0) {
              let convertToNativeStyleResult = chatInputRef(commandsDisabled[12]).convertToNativeStyle(outer1_4.autocomplete);
              const obj3 = chatInputRef(commandsDisabled[12]);
            } else {
              let obj = chatInputRef(commandsDisabled[12]);
              obj = {};
              const merged = Object.assign(outer1_4.autocomplete);
              obj["color"] = arg0;
              convertToNativeStyleResult = obj.convertToNativeStyle(obj);
            }
            return convertToNativeStyleResult;
          }
      };
      obj.styles = obj;
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(obj);
      ref.current = tmp6;
    } else {
      const current2 = ref.current;
      const obj1 = { newState: obj };
      const result = current2.updateApplicationCommandManagerState(obj1);
    }
    text = chatInputRef(commandsDisabled[8]).getTextBeforeFirstOption(text).text;
    const substr = text.slice(1);
    const trimEndResult = substr.trimEnd();
    if (ref.current !== trimEndResult) {
      callback(trimEndResult);
      ref.current = trimEndResult;
    }
  }, items2);
  const items3 = [callback];
  const effect = applicationCommandOptionValueParser.useEffect(() => {
    callback();
  }, items3);
  const imperativeHandle = applicationCommandOptionValueParser.useImperativeHandle(arg1, () => ({
    getApplicationCommandManager() {
      return outer1_11.current;
    },
    updateState() {
      return outer1_12();
    }
  }));
  return null;
});
forwardRefResult.displayName = "ChatInputAppCommandManager";
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, fontWeight: "bold" };
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;
