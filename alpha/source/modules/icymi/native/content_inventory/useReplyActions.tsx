// Module ID: 16874
// Function ID: 16875
// Name: useReplyActions
// Dependencies: [5, 19, 2064, 7237, 1390, 1393, 5084, 504, 8251, 9235, 7008, 16875, 4923, 7363, 7172, 16873, 5055, 4768, 1126, 15084, 8455, 9397, 7882, 16875, 2000, 2]
// Exports: useReplyActions

// Module 16874 (useReplyActions)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import MessageConstants from "MessageConstants" /* 5084 */;
import DraftStore from "DraftStore" /* 7237 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8251 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8455 */;
import openEmojiPickerActionSheet2 from "openEmojiPickerActionSheet" /* 9397 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

let c3, c4, channel, closure_4;

let tmp;
const MessageReactionsTypes = tmp(7882);
let react = react_mod;
const DraftType = DraftStore.DraftType;
const EmojiIntention = EmojiConstants.EmojiIntention;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(cResult) {
  let callback2;
  let items6;
  const content = cResult.content;
  let hotwheels_gaming_activity;
  let stateFromStores1;
  react = undefined;
  let sendMessage;
  let callback1;
  let tmp = content;
  let obj = content(hotwheels_gaming_activity[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(content.author_id));
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  let content_type = content.content_type;
  if (content(hotwheels_gaming_activity[8]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp(hotwheels_gaming_activity[8]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (tmp(hotwheels_gaming_activity[8]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        str = "hotwheels_custom_status";
      }
    }
    let tmp4 = sendMessage;
    const items1 = [sendMessage];
    const tmpResult = tmp(hotwheels_gaming_activity[7]);
    stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
      if (null == stateFromStores) {
        return null;
      } else {
        return ChannelStore.getChannel(ChannelStore.getDMFromUserId(tmp.id));
      }
    });
    react = tmp7;
    let obj3 = react;
    const items2 = [tmp7, ];
    let id;
    const useEffect = react.useEffect;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = useEffect(() => {
      const tmp = closure_4;
      return tmp ? (() => {
        id = undefined;
        const clearAll = stateFromStores(hotwheels_gaming_activity[9]).clearAll;
        stateFromStores(hotwheels_gaming_activity[9]);
        if (id != null) {
          id = id.id;
        }
        clearAll(id, callback1.ChannelMessage);
      }) : undefined;
    }, items2);
    let tmp10 = stateFromStores1;
    const useCallback = obj3.useCallback;
    let closure_0 = stateFromStores1(function*(arg0, value) {
      let intl;
      let obj15;
      let obj5;
      let obj9;
      let str3;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let id;
          let closure_3;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = undefined;
              channel = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              if (null != id) {
                c3 = 1;
                c4 = 1;
                const obj6 = { value: obj15.getOrEnsurePrivateChannel(id.id), done: false };
                obj15 = stateFromStores(hotwheels_gaming_activity[10]);
                return obj6;
              }
            }
          } else {
            if (1 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                id = value;
                channel = channel.getChannel(id);
                if (null != channel) {
                  if (entry.content_type === entry(hotwheels_gaming_activity[8]).ContentInventoryEntryType.CUSTOM_STATUS) {
                    const obj8 = { status: entry.extra.status, emojiStr: str3, reply: entry, username: obj9.getName(id), attachments: entry.extra.attachments };
                    str3 = "";
                    const getStatusReplyContent = entry(hotwheels_gaming_activity[11]).getStatusReplyContent;
                    const tmp34 = entry(hotwheels_gaming_activity[11]);
                    if (null != entry.extra.emoji_name) {
                      if (null != entry.extra.emoji_id) {
                        let combined;
                        const _String = String;
                        if ("0" !== String(entry.extra.emoji_id)) {
                          const _HermesInternal2 = HermesInternal;
                          combined = "`:" + entry.extra.emoji_name + ":`";
                        }
                        str3 = combined;
                      }
                      const _HermesInternal = HermesInternal;
                      combined = "" + entry.extra.emoji_name;
                    }
                    obj9 = stateFromStores(hotwheels_gaming_activity[12]);
                    closure_3 = getStatusReplyContent(obj8);
                    const obj10 = stateFromStores(hotwheels_gaming_activity[13]);
                    closure_4 = obj10.parse(channel, closure_3);
                    const obj11 = stateFromStores(hotwheels_gaming_activity[14]);
                    const obj12 = { location: constants.ICYMI };
                    c3 = 3;
                    c4 = 1;
                    const obj13 = { value: obj11.sendMessage(channel.id, closure_4, false, obj12), done: false };
                    return obj13;
                  } else {
                    const obj14 = { channel, content: entry, entry, whenReady: false, doNotNotifyOnError: false, location: constants.ICYMI };
                    c3 = 2;
                    c4 = 1;
                    const obj16 = { value: obj5.sendMessageWithEmbed(obj14), done: false };
                    obj5 = entry(hotwheels_gaming_activity[15]);
                    return obj16;
                  }
                }
              }
            } else if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj17 = { value, done: true };
                return obj17;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj3 = stateFromStores(hotwheels_gaming_activity[16]);
            obj3.hideActionSheet();
            const obj18 = { text: intl.string(entry(hotwheels_gaming_activity[18]).t.fjcCk5), icon: entry(hotwheels_gaming_activity[19]).ChatCheckIcon };
            const openMana = stateFromStores(hotwheels_gaming_activity[17]).openMana;
            const tmp11 = stateFromStores(hotwheels_gaming_activity[17]);
            intl = entry(hotwheels_gaming_activity[18]).intl;
            openMana("content_inventory_message_sent", obj18);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp69) {
          c4 = 3;
          throw tmp69;
        }
      }
    });
    const items3 = [stateFromStores, content];
    sendMessage = useCallback(function() {
      return closure_0(...arguments);
    }, items3);
    const items4 = [content.id, str, sendMessage];
    callback1 = obj3.useCallback((id) => {
      let surrogates;
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(content.id, hotwheels_gaming_activity, "press_emoji_send");
      const obj2 = ICYMIActionCreatorsDefault;
      const obj3 = { itemId: content.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_reply_button", actionIntentType: "react", actionDestinationType: null } };
      obj2.feedItemActioned(obj3);
      const tmp3 = callback;
      if (null != id.id) {
        const _HermesInternal = HermesInternal;
        surrogates = ":" + id.name + ":";
      } else {
        surrogates = id.surrogates;
      }
      return tmp3(surrogates);
    }, items4);
    const items5 = [stateFromStores1, callback1];
    let obj2 = {
      openReplyActionSheet: obj3.useCallback(() => {
          if (null != stateFromStores) {
            const content_type = content.content_type;
            let str = "hotwheels_custom_status";
            const tmp10 = dependencyMap;
            if (ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
              if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME === content_type) {
                str = "hotwheels_gaming_activity";
              } else {
                str = "unknown";
              }
            }
            const obj = ICYMIActionCreatorsDefault;
            obj.itemInteracted(content.id, str, "press_reply_react");
            const obj3 = { itemId: content.id, itemType: str, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
            const obj2 = ICYMIActionCreatorsDefault;
            obj2.feedItemActioned(obj3);
            const obj5 = { content, author: tmp, sendMessage, onPressEmoji: callback1 };
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.openLazy(asyncRequire(16875, tmp10.paths), "ReactActionSheet", obj5);
          }
        }, items6),
      openEmojiPicker: callback2
    };
    items6 = [stateFromStores, content, callback1, sendMessage];
    callback2 = obj3.useCallback(() => {
      let tmp4;
      const obj = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji: callback1, channel: tmp4, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL };
      const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
      openEmojiPickerActionSheet2;
      const result = openEmojiPickerActionSheet(obj);
      tmp4 = stateFromStores1;
    }, items5);
    return obj2;
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};
