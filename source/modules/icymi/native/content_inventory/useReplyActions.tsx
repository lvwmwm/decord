// Module ID: 15107
// Function ID: 113985
// Name: useReplyActions
// Dependencies: []
// Exports: useReplyActions

// Module 15107 (useReplyActions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const DraftType = arg1(dependencyMap[3]).DraftType;
let closure_7 = importDefault(dependencyMap[4]);
const EmojiIntention = arg1(dependencyMap[5]).EmojiIntention;
const MessageSendLocation = arg1(dependencyMap[6]).MessageSendLocation;
const jsx = arg1(dependencyMap[7]).jsx;
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(content) {
  content = content.content;
  const arg1 = content;
  let closure_3;
  let React;
  let closure_5;
  let DraftType;
  let obj = arg1(closure_2[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(content.author_id));
  const importDefault = stateFromStores;
  let str = "unknown";
  closure_2 = "unknown";
  const content_type = content.content_type;
  if (arg1(closure_2[9]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (arg1(closure_2[9]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (arg1(closure_2[9]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        closure_2 = "hotwheels_custom_status";
        str = "hotwheels_custom_status";
      }
    }
    const items1 = [closure_5];
    const stateFromStores1 = arg1(closure_2[8]).useStateFromStores(items1, () => {
      if (null == stateFromStores) {
        return null;
      } else {
        return callback.getChannel(callback.getDMFromUserId(stateFromStores.id));
      }
    });
    closure_3 = stateFromStores1;
    React = tmp11;
    const items2 = [null != stateFromStores1, ];
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = React.useEffect(() => tmp11 ? () => {
      let id;
      if (null != id) {
        id = id.id;
      }
      callback(closure_2[10]).clearAll(id, ChannelMessage.ChannelMessage);
    } : undefined, items2);
    const items3 = [stateFromStores, content];
    const callback = React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = stateFromStores1(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items3);
    closure_5 = callback;
    const items4 = [content.id, str, callback];
    const callback1 = React.useCallback((id) => {
      let obj = stateFromStores(closure_2[21]);
      obj.itemInteracted(content.id, closure_2, "press_emoji_send");
      obj = { itemId: content.id, itemType: closure_2, actionParameters: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } };
      stateFromStores(closure_2[21]).feedItemActioned(obj);
      if (null != id.id) {
        const _HermesInternal = HermesInternal;
        let surrogates = ":" + id.name + ":";
      } else {
        surrogates = id.surrogates;
      }
      return callback(surrogates);
    }, items4);
    DraftType = callback1;
    const items5 = [stateFromStores1, callback1];
    obj = {};
    const items6 = [stateFromStores, content, callback1, callback];
    const callback2 = React.useCallback(() => {
      let obj = content(closure_2[22]);
      obj = { "Bool(false)": "postal-address-country", "Bool(false)": "password", "Bool(false)": "email", pickerIntention: constants.REACTION, onPressEmoji: callback1 };
      let tmp;
      if (null != stateFromStores1) {
        tmp = stateFromStores1;
      }
      obj.channel = tmp;
      obj.reactionType = content(closure_2[23]).ReactionTypes.NORMAL;
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items5);
    obj.openReplyActionSheet = React.useCallback(() => {
      if (null != stateFromStores) {
        const content_type = content.content_type;
        let str = "hotwheels_custom_status";
        if (content(paths[9]).ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
          if (content(paths[9]).ContentInventoryEntryType.TOP_GAME === content_type) {
            str = "hotwheels_gaming_activity";
          } else {
            str = "unknown";
          }
        }
        let obj = stateFromStores(paths[21]);
        obj.itemInteracted(content.id, str, "press_reply_react");
        obj = { itemId: content.id, itemType: str, actionParameters: { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "WireType", "Bool(false)": "bottom" } };
        stateFromStores(paths[21]).feedItemActioned(obj);
        const obj2 = stateFromStores(paths[21]);
        obj = { content, author: stateFromStores, sendMessage: callback, onPressEmoji: callback1 };
        stateFromStores(paths[17]).openLazy(content(paths[25])(paths[24], paths.paths), "ReactActionSheet", obj);
        const obj4 = stateFromStores(paths[17]);
      }
    }, items6);
    obj.openEmojiPicker = callback2;
    return obj;
  }
  closure_2 = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};
