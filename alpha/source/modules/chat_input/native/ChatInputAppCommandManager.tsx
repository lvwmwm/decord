// Module ID: 13919
// Function ID: 13920
// Name: ChatInputAppCommandManager
// Dependencies: [32, 19, 8337, 8338, 2015, 8672, 1384, 6031, 5009, 575, 12759, 12, 7474, 504, 8674, 12258, 13705, 10296, 1993, 13920, 2]

// Module 13919 (ChatInputAppCommandManager)
import nativeDefault from "native" /* 575 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 13705 */;
import ApplicationCommandManagerDefault from "ApplicationCommandManager" /* 13920 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 8337 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8338 */;
import GameStore from "GameStore" /* 2015 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8672 */;
import UserStore from "UserStore" /* 1384 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 6031 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let gameById, map, set;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function areResolvedGamesEqual(size, size2) {
  if (size === size2) {
    return true;
  } else {
    if (null != size) {
      if (null != size2) {
        if (size.size === size2.size) {
          const keys = size.keys();
          for (const item10011 of keys) {
            if (size2.has(item10011)) {
              continue;
            } else {
              obj.return();
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
    }
    return false;
  }
}
class ChatInputAppCommandManager {
  constructor(chatInputRef) {
    let closure_1;
    let closure_4;
    let closure_9;
    let first;
    let first1;
    chatInputRef = chatInputRef.chatInputRef;
    const chatInputStateRef = chatInputRef.chatInputStateRef;
    const channel = chatInputRef.channel;
    const commandsDisabled = chatInputRef.commandsDisabled;
    let stateFromStores1;
    closure_9 = undefined;
    let stateFromStores2;
    let callback1;
    let tmp = stateFromStores2();
    _slicedToArray = tmp;
    let obj = chatInputRef(commandsDisabled[15]);
    const applicationCommandOptionValueParser = obj.useApplicationCommandOptionValueParser({ channel });
    let obj2 = chatInputRef(commandsDisabled[13]);
    const items = [stateFromStores1];
    const stateFromStores = obj2.useStateFromStores(items, () => ApplicationCommandStore.getActiveCommand(channel.id));
    let obj3 = chatInputRef(commandsDisabled[13]);
    const items1 = [stateFromStores];
    stateFromStores1 = obj3.useStateFromStores(items1, () => ApplicationCommandAutocompleteStore.getLastResponseNonce(channel.id));
    const useRef = applicationCommandOptionValueParser.useRef;
    let obj4 = chatInputRef(commandsDisabled[16]);
    let text = obj4.getTextBeforeFirstOption(chatInputStateRef.current.text).text;
    let substr = text.slice(1);
    const ref1 = useRef(substr.trimEnd());
    [first, closure_9] = applicationCommandOptionValueParser.useState(ref1.current);
    const obj6 = channel(commandsDisabled[17]);
    const commands = obj6.useCachedResults({ type: "channel", channel }, chatInputRef(commandsDisabled[18]).ApplicationCommandType.CHAT, first).commands;
    const ref = applicationCommandOptionValueParser.useRef(undefined);
    first1 = undefined;
    closure_1 = undefined;
    [first1, closure_1] = applicationCommandOptionValueParser.useState([]);
    const callback = applicationCommandOptionValueParser.useCallback((arg0) => {
      let closure_0 = ref(arg0);
      let tmp = closure_1((arg0) => {
        let tmp = closure_0;
        const obj = closure_2_1(closure_2_3[11]);
        if (obj.isEqual(arg0, closure_0)) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []);
    const items2 = [first1];
    const memo = applicationCommandOptionValueParser.useMemo(() => first1.filter((item) => null == gameById.getGameById(item)), items2);
    const obj7 = chatInputRef(commandsDisabled[12]);
    const games = obj7.useGames(memo);
    const items3 = [ref1, commands, closure_9];
    const items4 = [first1];
    const obj8 = chatInputRef(commandsDisabled[13]);
    stateFromStores2 = obj8.useStateFromStores(items3, function() {
      let media;
      if (0 === first1.length) {
        return null;
      } else {
        let nsfwAllowed;
        const currentUser = commands.getCurrentUser();
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        for (const item10017 of tmp) {
          let tmp6 = item10017;
          let game = ref1.getGame(item10017);
          let tmp9 = game;
          if (null == game) {
            gameById = gameById.getGameById(tmp6);
            if (null != gameById) {
              let result = map.set(tmp6, tmp20);
            }
          } else {
            let obj2 = chatInputRef(commandsDisabled[14]);
            if (!obj2.isGameProfileObscured(tmp9, nsfwAllowed)) {
              let obj = { id: tmp6, name: null, icon };
              ({ name: obj3.name, media } = tmp9);
              let icon;
              set = map.set;
              if (media != null) {
                icon = media.icon;
              }
              if (icon == null) {
                icon = null;
              }
              let result1 = set(tmp6, obj);
            }
          }
          continue;
        }
        let tmp24 = null;
        if (map.size > 0) {
          tmp24 = map;
        }
        return tmp24;
      }
    }, items4, callback1);
    const items5 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp, callback];
    callback1 = applicationCommandOptionValueParser.useCallback(function() {
      let editId;
      let focused;
      let obj3;
      let selectionEnd;
      let selectionStart;
      const current = chatInputStateRef.current;
      const text = current.text;
      ({ editId, focused, selectionStart, selectionEnd } = current);
      callback(text);
      const obj = { activeCommand: stateFromStores, channel, commandsDisabled, editId, focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart, selectionEnd, text };
      if (null == ref.current) {
        let closure_0 = closure_4;
        const obj2 = { props: obj, ref: chatInputRef, optionValueParser: applicationCommandOptionValueParser, styles: obj3 };
        const self = this;
        const self2 = this;
        obj3 = {
          commandOption() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.commandOption);
            },
          commandErrorOption() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.commandErrorOption);
            },
          gameMention() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.gameMention);
            },
          timestampMention() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.timestampMention);
            },
          autocomplete(color) {
              let autocomplete;
              const convertToNativeStyle = chatInputRef(commandsDisabled[10]).convertToNativeStyle;
              chatInputRef(commandsDisabled[10]);
              if (null == color) {
                autocomplete = closure_0.autocomplete;
              } else {
                autocomplete = { color };
                const merged = Object.assign(closure_0.autocomplete);
              }
              return convertToNativeStyle(autocomplete);
            }
        };
        ref.current = new ApplicationCommandManagerDefault(obj2);
        const tmp10 = new ApplicationCommandManagerDefault(obj2);
      } else {
        const current2 = tmp2.current;
        const obj4 = { newState: obj };
        const result = current2.updateApplicationCommandManagerState(obj4);
      }
      const obj5 = ChatInputCommandOptionParser;
      const text1 = obj5.getTextBeforeFirstOption(text).text;
      const substr = text1.slice(1);
      const trimEndResult = substr.trimEnd();
      if (ref1.current !== trimEndResult) {
        closure_9(trimEndResult);
        tmp13.current = trimEndResult;
      }
    }, items5);
    const items6 = [callback1];
    const effect = applicationCommandOptionValueParser.useEffect(() => {
      callback1();
    }, items6);
    const items7 = [tmp];
    const effect1 = applicationCommandOptionValueParser.useEffect(() => {
      const current = ref.current;
      if (current != null) {
        let closure_0 = closure_4;
        let obj = {
          commandOption() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.commandOption);
            },
          commandErrorOption() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.commandErrorOption);
            },
          gameMention() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.gameMention);
            },
          timestampMention() {
              const obj = chatInputRef(commandsDisabled[10]);
              return obj.convertToNativeStyle(closure_0.timestampMention);
            },
          autocomplete(color) {
              let autocomplete;
              const convertToNativeStyle = chatInputRef(commandsDisabled[10]).convertToNativeStyle;
              chatInputRef(commandsDisabled[10]);
              if (null == color) {
                autocomplete = closure_0.autocomplete;
              } else {
                autocomplete = { color };
                const merged = Object.assign(closure_0.autocomplete);
              }
              return convertToNativeStyle(autocomplete);
            }
        };
        current.updateStyles(obj);
      }
    }, items7);
    const items8 = [stateFromStores2, first1, chatInputRef, chatInputStateRef, callback1];
    const effect2 = applicationCommandOptionValueParser.useEffect(() => {
      const current = ref.current;
      if (null != stateFromStores2) {
        if (0 !== first1.length) {
          if (null != current) {
            const arr = unpackModuleId(chatInputStateRef.current.text);
            const mapped = arr.map((item) => stateFromStores2.get(item));
            const found = mapped.filter((item) => null != item);
            if (0 !== found.length) {
              const replaced = str.replace(authStore2, (arg0, arg1) => {
                let combined = arg0;
                const value = stateFromStores2.get(arg1);
                if (null != value) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + first1 + value.name;
                }
                return combined;
              });
              for (const item10011 of found) {
                let addGameMentionResult = current.addGameMention(item10011);
                continue;
              }
              const current2 = chatInputRef.current;
              current2.setText(replaced);
              chatInputStateRef.current.textPrev = chatInputStateRef.current.text;
              chatInputStateRef.current.text = replaced;
              callback1();
            }
          }
        }
      }
    }, items8);
    const imperativeHandle = applicationCommandOptionValueParser.useImperativeHandle(ref, () => ({
      getApplicationCommandManager() {
        return ref.current;
      },
      updateState() {
        return callback1();
      }
    }));
    return null;
  }
}
let _slicedToArray = _slicedToArray_mod;
({ extractGameMentionIds: unpackModuleId, GAME_MENTION_RAW_RE_GLOBAL: closure_12, GAME_MENTION_SENTINEL: map1 } = ChannelAutocompleteConstants);
let createStyles = createStyles_mod;
let obj = { commandOption: obj2, commandErrorOption: obj3, gameMention: obj4, timestampMention: obj5, autocomplete: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj4 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj5 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj6 = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
const authStore3 = createStyles(obj);
ChatInputAppCommandManager.displayName = "ChatInputAppCommandManager";
const memoResult = react.memo(ChatInputAppCommandManager);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;
