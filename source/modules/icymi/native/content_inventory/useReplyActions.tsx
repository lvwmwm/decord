// Module ID: 15233
// Function ID: 116231
// Name: useReplyActions
// Dependencies: [5, 31, 1348, 4468, 1849, 1852, 4123, 33, 566, 7810, 7938, 4140, 15234, 3969, 6924, 6691, 15230, 4098, 3831, 1212, 13790, 8321, 9326, 7006, 15234, 1934, 2]
// Exports: useReplyActions

// Module 15233 (useReplyActions)
import set from "set";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { EmojiIntention } from "set";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(content) {
  content = content.content;
  let stateFromStores1;
  let React;
  let callback;
  let callback1;
  let obj = content(hotwheels_gaming_activity[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getUser(content.author_id));
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  let content_type = content.content_type;
  if (content(hotwheels_gaming_activity[9]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (content(hotwheels_gaming_activity[9]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (content(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        str = "hotwheels_custom_status";
      }
    }
    const items1 = [callback];
    stateFromStores1 = content(hotwheels_gaming_activity[8]).useStateFromStores(items1, () => {
      if (null == stateFromStores) {
        return null;
      } else {
        return callback.getChannel(callback.getDMFromUserId(stateFromStores.id));
      }
    });
    React = tmp11;
    const items2 = [null != stateFromStores1, ];
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = React.useEffect(() => c4 ? (() => {
      let id;
      if (null != outer1_3) {
        id = outer1_3.id;
      }
      stateFromStores(hotwheels_gaming_activity[10]).clearAll(id, callback1.ChannelMessage);
    }) : undefined, items2);
    const items3 = [stateFromStores, content];
    callback = React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = stateFromStores1(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items3);
    const items4 = [content.id, str, callback];
    callback1 = React.useCallback((id) => {
      let obj = stateFromStores(hotwheels_gaming_activity[21]);
      obj.itemInteracted(content.id, hotwheels_gaming_activity, "press_emoji_send");
      obj = { itemId: content.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_reply_button", actionIntentType: "react", actionDestinationType: null } };
      stateFromStores(hotwheels_gaming_activity[21]).feedItemActioned(obj);
      if (null != id.id) {
        const _HermesInternal = HermesInternal;
        let surrogates = ":" + id.name + ":";
      } else {
        surrogates = id.surrogates;
      }
      return callback(surrogates);
    }, items4);
    const items5 = [stateFromStores1, callback1];
    obj = {};
    const items6 = [stateFromStores, content, callback1, callback];
    const callback2 = React.useCallback(() => {
      let obj = content(hotwheels_gaming_activity[22]);
      obj = { pickerIntention: outer1_8.REACTION, autoFocus: false, startExpanded: false, onPressEmoji: callback1 };
      let tmp;
      if (null != stateFromStores1) {
        tmp = stateFromStores1;
      }
      obj.channel = tmp;
      obj.reactionType = content(hotwheels_gaming_activity[23]).ReactionTypes.NORMAL;
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items5);
    obj.openReplyActionSheet = React.useCallback(() => {
      if (null != stateFromStores) {
        const content_type = content.content_type;
        let str = "hotwheels_custom_status";
        if (content(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
          if (content(hotwheels_gaming_activity[9]).ContentInventoryEntryType.TOP_GAME === content_type) {
            str = "hotwheels_gaming_activity";
          } else {
            str = "unknown";
          }
        }
        let obj = stateFromStores(hotwheels_gaming_activity[21]);
        obj.itemInteracted(content.id, str, "press_reply_react");
        obj = { itemId: content.id, itemType: str, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
        stateFromStores(hotwheels_gaming_activity[21]).feedItemActioned(obj);
        const obj2 = stateFromStores(hotwheels_gaming_activity[21]);
        obj = { content, author: stateFromStores, sendMessage: callback, onPressEmoji: callback1 };
        stateFromStores(hotwheels_gaming_activity[17]).openLazy(content(hotwheels_gaming_activity[25])(hotwheels_gaming_activity[24], hotwheels_gaming_activity.paths), "ReactActionSheet", obj);
        const obj4 = stateFromStores(hotwheels_gaming_activity[17]);
      }
    }, items6);
    obj.openEmojiPicker = callback2;
    return obj;
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};
