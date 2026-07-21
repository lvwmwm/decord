// Module ID: 7648
// Function ID: 61183
// Name: getQuickReactionLabel
// Dependencies: []
// Exports: createMessageAccessibilityActions, getMessageAccessibilityActionFromLabel

// Module 7648 (getQuickReactionLabel)
function getQuickReactionLabel() {
  const DoubleTapReactionEmoji = arg1(dependencyMap[3]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (null != setting) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true === disableDoubleTap) {
    return null;
  } else {
    if (null != setting) {
      let obj = arg1(dependencyMap[4]);
      const result = obj.disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl2 = arg1(dependencyMap[5]).intl;
        obj = { emojiName: result.name };
        return intl2.formatToPlainString(arg1(dependencyMap[5]).t.eQIttH, obj);
      }
    }
    const intl = arg1(dependencyMap[5]).intl;
    obj = { emojiName: "heart" };
    return intl.formatToPlainString(arg1(dependencyMap[5]).t.eQIttH, obj);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const obj = { VIEW_PROFILE: "view_profile", ADD_REACTION: "add_reaction", ADD_QUICK_REACTION: "add_quick_reaction", REPLY: "reply", MESSAGE_ACTIONS_MENU: "message_actions_menu", EDIT_GDM: "edit_gdm", OPEN_PINS: "open_pins", JUMP_TO_MESSAGE: "jump_to_message" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

export const MessageAccessibilityAction = obj;
export const getMessageAccessibilityActionFromLabel = function getMessageAccessibilityActionFromLabel(action) {
  const obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj[intl.string(arg1(dependencyMap[5]).t.iXAna6)] = obj.VIEW_PROFILE;
  const intl2 = arg1(dependencyMap[5]).intl;
  obj[intl2.string(arg1(dependencyMap[5]).t.lfIHs4)] = obj.ADD_REACTION;
  const intl3 = arg1(dependencyMap[5]).intl;
  obj[intl3.string(arg1(dependencyMap[5]).t.5IEsGx)] = obj.REPLY;
  const intl4 = arg1(dependencyMap[5]).intl;
  obj[intl4.string(arg1(dependencyMap[5]).t.ChPNkN)] = obj.MESSAGE_ACTIONS_MENU;
  const intl5 = arg1(dependencyMap[5]).intl;
  obj[intl5.string(arg1(dependencyMap[5]).t.5Q9+/L)] = obj.EDIT_GDM;
  const intl6 = arg1(dependencyMap[5]).intl;
  obj[intl6.string(arg1(dependencyMap[5]).t.mp1N/2)] = obj.OPEN_PINS;
  const intl7 = arg1(dependencyMap[5]).intl;
  obj[intl7.string(arg1(dependencyMap[5]).t.+TSRGD)] = obj.JUMP_TO_MESSAGE;
  const tmp = getQuickReactionLabel();
  if (null != tmp) {
    obj[tmp] = obj.ADD_QUICK_REACTION;
  }
  return obj[action];
};
export const createMessageAccessibilityActions = function createMessageAccessibilityActions(message, channel) {
  if (null == channel) {
    return [];
  } else {
    const guildId = channel.getGuildId();
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_2.canChatInGuild(guildId);
    }
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_3.can(Permissions.ADD_REACTIONS, channel);
    }
    if (!canChatInGuildResult) {
      canChatInGuildResult = channel.isPrivate();
    }
    let obj = {};
    const intl = channel(dependencyMap[5]).intl;
    obj.label = intl.string(channel(dependencyMap[5]).t.iXAna6);
    obj.name = obj.VIEW_PROFILE;
    const items = [obj];
    if (canChatInGuildResult) {
      obj = {};
      const intl2 = channel(dependencyMap[5]).intl;
      obj.label = intl2.string(channel(dependencyMap[5]).t.lfIHs4);
      obj.name = obj.ADD_REACTION;
      items.push(obj);
      const tmp13 = getQuickReactionLabel();
      if (null != tmp13) {
        obj = { label: tmp13 };
        obj.name = obj.ADD_QUICK_REACTION;
        items.push(obj);
      }
    }
    if (obj4.canReplyToMessage(channel, message)) {
      const obj1 = {};
      const intl3 = channel(dependencyMap[5]).intl;
      obj1.label = intl3.string(channel(dependencyMap[5]).t.5IEsGx);
      obj1.name = obj.REPLY;
      items.push(obj1);
    }
    const obj2 = {};
    const intl4 = channel(dependencyMap[5]).intl;
    obj2.label = intl4.string(channel(dependencyMap[5]).t.ChPNkN);
    obj2.name = obj.MESSAGE_ACTIONS_MENU;
    items.push(obj2);
    return items;
  }
};
