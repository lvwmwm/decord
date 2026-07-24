// Module ID: 11490
// Function ID: 89433
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 7020, 7021, 4151, 7090, 6922, 1849, 4567, 4130, 689, 22, 6864, 566, 8643, 11148, 11146, 8233, 1881, 11491, 11147, 2]

// Module 11490 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import regExp from "regExp";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function areResolvedGamesEqual(size, size2) {
  if (size === size2) {
    return true;
  } else {
    if (null != size) {
      if (null != size2) {
        if (size.size === size2.size) {
          const tmp3 = _createForOfIteratorHelperLoose(size.keys());
          let iter = tmp3();
          if (!iter.done) {
            while (size2.has(iter.value)) {
              let iter2 = tmp3();
              iter = iter2;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
}
({ extractGameMentionIds: closure_12, GAME_MENTION_RAW_RE_GLOBAL: closure_13, GAME_MENTION_SENTINEL: closure_14 } = regExp);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, fontSize: 14 };
obj.commandOption = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, fontSize: 14 };
obj.commandErrorOption = _createForOfIteratorHelperLoose;
obj.gameMention = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MENTION_BACKGROUND, color: require("_createForOfIteratorHelperLoose").colors.MENTION_FOREGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, fontSize: 14, fontWeight: "bold" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MENTION_BACKGROUND, color: require("_createForOfIteratorHelperLoose").colors.MENTION_FOREGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, fontSize: 14, fontWeight: "bold" };
obj.autocomplete = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, fontWeight: "bold" };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((chatInputRef) => {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const channel = chatInputRef.channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  let tmp = callback();
  callback = tmp;
  const applicationCommandOptionValueParser = chatInputRef(commandsDisabled[15]).useApplicationCommandOptionValueParser({ channel });
  let obj = chatInputRef(commandsDisabled[15]);
  let items = [stateFromStores1];
  const stateFromStores = chatInputRef(commandsDisabled[13]).useStateFromStores(items, () => stateFromStores1.getActiveCommand(channel.id));
  const obj2 = chatInputRef(commandsDisabled[13]);
  let items1 = [stateFromStores];
  stateFromStores1 = chatInputRef(commandsDisabled[13]).useStateFromStores(items1, () => stateFromStores.getLastResponseNonce(channel.id));
  let obj3 = chatInputRef(commandsDisabled[13]);
  let text = chatInputRef(commandsDisabled[16]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  const ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  const tmp6 = callback(applicationCommandOptionValueParser.useState(ref.current), 2);
  let closure_9 = tmp6[1];
  let obj4 = chatInputRef(commandsDisabled[16]);
  const commands = channel(commandsDisabled[17]).useCachedResults({ type: "channel", channel }, chatInputRef(commandsDisabled[18]).ApplicationCommandType.CHAT, tmp6[0]).commands;
  let closure_11 = applicationCommandOptionValueParser.useRef(undefined);
  let tmp7 = (function useResolveComposerGameMentions(id) {
    let closure_0 = id;
    tmp = tmp(applicationCommandOptionValueParser.useState([]), 2);
    const first = tmp[0];
    let closure_2 = tmp[1];
    const items = [first];
    const callback = applicationCommandOptionValueParser.useCallback((arg0) => {
      let closure_0 = syncRawGameMentionIdsFromText(arg0);
      callback((arg0) => {
        let tmp = arg0;
        if (!obj.isEqual(arg0, closure_0)) {
          tmp = closure_0;
        }
        return tmp;
      });
    }, []);
    const memo = applicationCommandOptionValueParser.useMemo(() => first.filter((arg0) => null == gameById.getGameById(arg0)), items);
    let obj = chatInputRef(commandsDisabled[12]);
    const games = obj.useGames(memo);
    const items1 = [ref, closure_11, commands, closure_9];
    const items2 = [first, id];
    obj = {
      syncRawGameMentionIdsFromText: callback,
      rawGameMentionIds: first,
      resolvedGameMentions: chatInputRef(commandsDisabled[13]).useStateFromStores(items1, () => {
        let iter3;
        let media;
        if (0 === first.length) {
          return null;
        } else {
          currentUser = currentUser.getCurrentUser();
          if (null != currentUser) {
            const nsfwAllowed = currentUser.nsfwAllowed;
          }
          const editingMessage = commands.getEditingMessage(closure_0);
          if (null != editingMessage) {
            const mentionGames = editingMessage.mentionGames;
          }
          const _Map = Map;
          const map = new Map();
          const tmp10 = outer2_16(first);
          const iter = tmp10();
          let iter2 = iter;
          if (!iter.done) {
            do {
              let value = iter2.value;
              value = undefined;
              if (null != mentionGames) {
                value = mentionGames.get(value);
              }
              if (null == value) {
                let tmp19 = ref;
                let game = ref.getGame(value);
                if (null == game) {
                  let tmp25 = gameById;
                  gameById = gameById.getGameById(value);
                  let tmp27 = game;
                  let tmp16 = gameById;
                  let tmp17 = tmp12;
                  let tmp18 = tmp13;
                  if (null != gameById) {
                    let result = map.set(value, gameById);
                    let tmp29 = game;
                    tmp16 = gameById;
                    tmp17 = tmp12;
                    tmp18 = tmp13;
                  }
                } else {
                  let tmp35 = chatInputRef;
                  let tmp36 = commandsDisabled;
                  let obj4 = chatInputRef(commandsDisabled[14]);
                  let tmp37 = game;
                  tmp16 = tmp11;
                  tmp17 = tmp12;
                  tmp18 = tmp13;
                  if (!obj4.isGameProfileObscured(game, nsfwAllowed)) {
                    let obj = { id: value };
                    ({ name: obj3.name, media } = game);
                    let icon;
                    if (null != media) {
                      icon = media.icon;
                    }
                    let tmp22 = null;
                    if (null != icon) {
                      tmp22 = icon;
                    }
                    obj.icon = tmp22;
                    let result1 = map.set(value, obj);
                    let tmp24 = game;
                    tmp16 = tmp11;
                    tmp17 = icon;
                    tmp18 = media;
                  }
                }
              } else {
                obj = { id: value };
                ({ name: obj2.name, icon: obj2.icon } = value);
                let result2 = map.set(value, obj);
                tmp16 = tmp11;
                tmp17 = tmp12;
                tmp18 = tmp13;
              }
              iter3 = tmp10();
              tmp11 = tmp16;
              tmp12 = tmp17;
              tmp13 = tmp18;
              iter2 = iter3;
            } while (!iter3.done);
          }
          let tmp30 = null;
          if (map.size > 0) {
            tmp30 = map;
          }
          return tmp30;
        }
      }, items2, outer1_18)
    };
    return obj;
  })(channel.id);
  const syncRawGameMentionIdsFromText = tmp7.syncRawGameMentionIdsFromText;
  const rawGameMentionIds = tmp7.rawGameMentionIds;
  const resolvedGameMentions = tmp7.resolvedGameMentions;
  let items2 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp, syncRawGameMentionIdsFromText];
  callback = applicationCommandOptionValueParser.useCallback(() => {
    let editId;
    let focused;
    let selectionEnd;
    let selectionStart;
    const current = chatInputStateRef.current;
    let text = current.text;
    ({ editId, focused, selectionStart, selectionEnd } = current);
    syncRawGameMentionIdsFromText(text);
    let obj = { activeCommand: stateFromStores, channel, commandsDisabled, editId, focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart, selectionEnd, text };
    if (null == ref.current) {
      let tmp7 = chatInputStateRef(commandsDisabled[19]);
      obj = {};
      obj.props = obj;
      obj.ref = chatInputRef;
      obj.optionValueParser = applicationCommandOptionValueParser;
      obj = {
        commandOption() {
            return chatInputRef(commandsDisabled[20]).convertToNativeStyle(outer1_4.commandOption);
          },
        commandErrorOption() {
            return chatInputRef(commandsDisabled[20]).convertToNativeStyle(outer1_4.commandErrorOption);
          },
        gameMention() {
            return chatInputRef(commandsDisabled[20]).convertToNativeStyle(outer1_4.gameMention);
          },
        autocomplete(arg0) {
            if (null == arg0) {
              let convertToNativeStyleResult = chatInputRef(commandsDisabled[20]).convertToNativeStyle(outer1_4.autocomplete);
              const obj3 = chatInputRef(commandsDisabled[20]);
            } else {
              let obj = chatInputRef(commandsDisabled[20]);
              obj = {};
              const merged = Object.assign(outer1_4.autocomplete);
              obj["color"] = arg0;
              convertToNativeStyleResult = obj.convertToNativeStyle(obj);
            }
            return convertToNativeStyleResult;
          }
      };
      obj.styles = obj;
      const prototype = tmp7.prototype;
      tmp7 = new tmp7(obj);
      ref.current = tmp7;
    } else {
      const current2 = ref.current;
      const obj1 = { newState: obj };
      const result = current2.updateApplicationCommandManagerState(obj1);
    }
    text = chatInputRef(commandsDisabled[16]).getTextBeforeFirstOption(text).text;
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
  const items4 = [resolvedGameMentions, rawGameMentionIds, chatInputRef, chatInputStateRef, callback];
  const effect1 = applicationCommandOptionValueParser.useEffect(() => {
    let done;
    const current = ref.current;
    if (null != resolvedGameMentions) {
      if (0 !== rawGameMentionIds.length) {
        if (null != current) {
          const mapped = syncRawGameMentionIdsFromText(chatInputStateRef.current.text).map((arg0) => outer1_14.get(arg0));
          const found = mapped.filter((arg0) => null != arg0);
          if (0 !== found.length) {
            const replaced = str.replace(rawGameMentionIds, (arg0, arg1) => {
              let combined = arg0;
              const value = outer1_14.get(arg1);
              if (null != value) {
                const _HermesInternal = HermesInternal;
                combined = "" + resolvedGameMentions + value.name;
              }
              return combined;
            });
            const tmp13 = outer1_16(found);
            let iter2 = tmp13();
            if (!iter2.done) {
              do {
                let addGameMentionResult = current.addGameMention(iter2.value);
                let iter = tmp13();
                iter2 = iter;
                done = iter.done;
              } while (!done);
            }
            const current2 = chatInputRef.current;
            current2.setText(replaced);
            chatInputStateRef.current.textPrev = str;
            chatInputStateRef.current.text = replaced;
            callback();
          }
          const arr = syncRawGameMentionIdsFromText(chatInputStateRef.current.text);
        }
      }
    }
  }, items4);
  const imperativeHandle = applicationCommandOptionValueParser.useImperativeHandle(arg1, () => ({
    getApplicationCommandManager() {
      return outer1_11.current;
    },
    updateState() {
      return outer1_15();
    }
  }));
  return null;
});
forwardRefResult.displayName = "ChatInputAppCommandManager";
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, fontWeight: "bold" };
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;
