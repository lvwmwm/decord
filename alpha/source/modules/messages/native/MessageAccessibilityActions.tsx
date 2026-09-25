// Module ID: 7404
// Function ID: 7405
// Name: MessageAccessibilityActions
// Dependencies: [2020, 7405, 1115, 7408, 7413, 2]
// Exports: createMessageAccessibilityActions, getMessageAccessibilityActionFromLabel

// Module 7404 (MessageAccessibilityActions)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7408 */;
import size from "module_2" /* 2 */;

const MessageAccessibilityAction = { VIEW_PROFILE: "view_profile", ADD_REACTION: "add_reaction", ADD_QUICK_REACTION: "add_quick_reaction", REPLY: "reply", MESSAGE_ACTIONS_MENU: "message_actions_menu", EDIT_GDM: "edit_gdm", OPEN_PINS: "open_pins", JUMP_TO_MESSAGE: "jump_to_message" };
let result = size.fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

export { MessageAccessibilityAction };
export const getMessageAccessibilityActionFromLabel = function getMessageAccessibilityActionFromLabel(action) {
  const obj = {};
  const intl = util.intl;
  obj[intl.string(util.t.iXAna6)] = obj.VIEW_PROFILE;
  const intl2 = util.intl;
  obj[intl2.string(util.t.lfIHs4)] = obj.ADD_REACTION;
  const intl3 = util.intl;
  obj[intl3.string(util.t["5IEsGx"])] = obj.REPLY;
  const intl4 = util.intl;
  obj[intl4.string(util.t.ChPNkN)] = obj.MESSAGE_ACTIONS_MENU;
  const intl5 = util.intl;
  obj[intl5.string(util.t["5Q9+/L"])] = obj.EDIT_GDM;
  const intl6 = util.intl;
  obj[intl6.string(util.t["mp1N/2"])] = obj.OPEN_PINS;
  const intl7 = util.intl;
  obj[intl7.string(util.t["+TSRGD"])] = obj.JUMP_TO_MESSAGE;
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  let formatToPlainStringResult = null;
  if (true !== disableDoubleTap) {
    if (null != setting) {
      const result = tmp(7405).disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl9 = tmp(1115).intl;
        const obj2 = { emojiName: result.name };
        formatToPlainStringResult = intl9.formatToPlainString(tmp(1115).t.eQIttH, obj2);
      }
      const tmpResult = tmp(7405);
    }
    const intl8 = tmp(1115).intl;
    formatToPlainStringResult = intl8.formatToPlainString(tmp(1115).t.eQIttH, { emojiName: "heart" });
  }
  if (null != formatToPlainStringResult) {
    obj[formatToPlainStringResult] = obj.ADD_QUICK_REACTION;
  }
  return obj[action];
};
export const createMessageAccessibilityActions = function createMessageAccessibilityActions(message, channel) {
  if (null == channel) {
    return [];
  } else {
    const obj2 = { label: null, name: null };
    const intl6 = util.intl;
    obj2.label = intl6.string(util.t.iXAna6);
    obj2.name = obj.VIEW_PROFILE;
    const items = [obj2];
    if (canAddNewReactionsDefault(channel)) {
      obj = { label: null, name: null };
      const intl = tmp10(1115).intl;
      obj.label = intl.string(tmp10(1115).t.lfIHs4);
      obj.name = tmp12.ADD_REACTION;
      items.push(obj);
      const DoubleTapReactionEmoji = tmp10(2020).DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.getSetting();
      let disableDoubleTap;
      if (setting != null) {
        disableDoubleTap = setting.disableDoubleTap;
      }
      let formatToPlainStringResult = null;
      if (true !== disableDoubleTap) {
        if (null != setting) {
          const result = tmp10(7405).disambiguatedEmojiFromSettingsValue(setting);
          if (null != result) {
            const intl3 = tmp10(1115).intl;
            const obj3 = { emojiName: result.name };
            formatToPlainStringResult = intl3.formatToPlainString(tmp10(1115).t.eQIttH, obj3);
          }
          const tmp10Result = tmp10(7405);
        }
        const intl2 = tmp10(1115).intl;
        formatToPlainStringResult = intl2.formatToPlainString(tmp10(1115).t.eQIttH, { emojiName: "heart" });
      }
      if (null != formatToPlainStringResult) {
        const obj4 = { label: formatToPlainStringResult, name: tmp12.ADD_QUICK_REACTION };
        items.push(obj4);
      }
    }
    if (tmp10Result2.canReplyToMessage(channel, message)) {
      const obj5 = { label: null, name: null };
      const intl4 = tmp10(1115).intl;
      obj5.label = intl4.string(tmp10(1115).t["5IEsGx"]);
      obj5.name = tmp12.REPLY;
      items.push(obj5);
    }
    const obj6 = { label: null, name: null };
    const intl5 = tmp10(1115).intl;
    obj6.label = intl5.string(util.t.ChPNkN);
    obj6.name = obj.MESSAGE_ACTIONS_MENU;
    items.push(obj6);
    return items;
  }
};
