// Module ID: 11449
// Function ID: 89137
// Name: ChatInputAppCommandManager
// Dependencies: []

// Module 11449 (ChatInputAppCommandManager)
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.xs, fontSize: 14 };
obj.commandOption = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: importDefault(dependencyMap[5]).colors.TEXT_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[5]).radii.xs, fontSize: 14 };
obj.commandErrorOption = obj1;
obj.autocomplete = { color: importDefault(dependencyMap[5]).colors.TEXT_BRAND, fontWeight: "bold" };
let closure_8 = obj1.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((chatInputRef) => {
  chatInputRef = chatInputRef.chatInputRef;
  const arg1 = chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const importDefault = chatInputStateRef;
  const channel = chatInputRef.channel;
  const importAll = channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  const dependencyMap = commandsDisabled;
  const tmp = callback2();
  let callback = tmp;
  const applicationCommandOptionValueParser = arg1(dependencyMap[6]).useApplicationCommandOptionValueParser({ channel });
  const obj = arg1(dependencyMap[6]);
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => stateFromStores1.getActiveCommand(channel.id));
  let closure_6 = stateFromStores;
  const obj2 = arg1(dependencyMap[7]);
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => stateFromStores.getLastResponseNonce(channel.id));
  closure_7 = stateFromStores1;
  const obj3 = arg1(dependencyMap[7]);
  const text = arg1(dependencyMap[8]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  const substr = text.slice(1);
  const ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  const callback2 = ref;
  const tmp6 = callback(applicationCommandOptionValueParser.useState(ref.current), 2);
  let closure_9 = tmp6[1];
  const obj4 = arg1(dependencyMap[8]);
  const commands = importAll(dependencyMap[9]).useCachedResults({ type: "channel", channel }, arg1(dependencyMap[10]).ApplicationCommandType.CHAT, tmp6[0]).commands;
  let closure_11 = importAllResult.useRef(undefined);
  const items2 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp];
  callback = importAllResult.useCallback(() => {
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
            return callback(closure_3[12]).convertToNativeStyle(closure_4.commandOption);
          },
        commandErrorOption() {
            return callback(closure_3[12]).convertToNativeStyle(closure_4.commandErrorOption);
          },
        autocomplete(arg0) {
            if (null == arg0) {
              let convertToNativeStyleResult = callback(closure_3[12]).convertToNativeStyle(closure_4.autocomplete);
              const obj3 = callback(closure_3[12]);
            } else {
              let obj = callback(closure_3[12]);
              obj = {};
              const merged = Object.assign(closure_4.autocomplete);
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
  const effect = importAllResult.useEffect(() => {
    callback();
  }, items3);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    getApplicationCommandManager() {
      return ref.current;
    },
    updateState() {
      return callback();
    }
  }));
  return null;
});
forwardRefResult.displayName = "ChatInputAppCommandManager";
const obj2 = { color: importDefault(dependencyMap[5]).colors.TEXT_BRAND, fontWeight: "bold" };
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;
