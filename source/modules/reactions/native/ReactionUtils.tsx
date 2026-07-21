// Module ID: 9307
// Function ID: 72764
// Name: handleOutOfSuperReactions
// Dependencies: []
// Exports: handleAddNewReactions, handleRemoveAllReactions, handleViewPreviewReactions, handleViewReactions

// Module 9307 (handleOutOfSuperReactions)
function handleOutOfSuperReactions(onDismiss) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    let obj = arg1(dependencyMap[11]);
    let openLazyResult;
    if (!obj.isPremium(currentUser)) {
      obj = { onDismiss };
      openLazyResult = importDefault(dependencyMap[12]).openLazy(arg1(dependencyMap[14])(dependencyMap[13], dependencyMap.paths), "SuperReactionUpsellActionSheet", obj);
      const obj2 = importDefault(dependencyMap[12]);
    }
    return openLazyResult;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9 } = arg1(dependencyMap[4]));
const EmojiIntention = arg1(dependencyMap[5]).EmojiIntention;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = {};
obj[arg1(dependencyMap[17]).ReactionTypes.NORMAL] = importDefault(dependencyMap[21]);
obj[arg1(dependencyMap[17]).ReactionTypes.BURST] = importDefault(dependencyMap[22]);
obj = {};
obj[arg1(dependencyMap[17]).ReactionTypes.NORMAL] = arg1(dependencyMap[23]).ReactionIcon;
obj[arg1(dependencyMap[17]).ReactionTypes.BURST] = arg1(dependencyMap[24]).SuperReactionIcon;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/reactions/native/ReactionUtils.tsx");

export { handleOutOfSuperReactions };
export const handleAddNewReactions = function handleAddNewReactions(channel, id, MESSAGE, burst) {
  id = channel;
  const importDefault = id;
  if (MESSAGE === undefined) {
    MESSAGE = id(dependencyMap[10]).ReactionLocations.MESSAGE;
  }
  const dependencyMap = MESSAGE;
  burst = undefined;
  if (null != burst) {
    burst = burst.burst;
  }
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    const isPremiumResult = id(dependencyMap[11]).isPremium(currentUser);
    let tmp6 = tmp4;
    if (tmp4) {
      tmp6 = !isPremiumResult;
    }
    if (tmp6) {
      handleOutOfSuperReactions();
    }
    let tmp15Result = id(dependencyMap[15]);
    const bestActiveInputForChannelId = tmp15Result.getBestActiveInputForChannelId(channel.id);
    if (null != bestActiveInputForChannelId) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
    id(dependencyMap[16]);
    tmp15Result = {
      onPressEmoji(byName, burst) {
          const id = byName.id;
          const obj = { burst };
          if (null != byName) {
            const toReactionEmojiResult = byName(MESSAGE[7]).toReactionEmoji(byName);
            if (!tmp3) {
              const result = byName(MESSAGE[8]).triggerHapticFeedback(burst(MESSAGE[9]).IMPACT_LIGHT);
              const obj2 = byName(MESSAGE[8]);
            }
            const obj3 = byName(MESSAGE[10]);
            obj3.addReaction(id, tmp, toReactionEmojiResult, tmp2, obj);
            const obj4 = byName(MESSAGE[7]);
            const tmp3 = null != obj && obj.burst;
          }
        },
      channel,
      pickerIntention: EmojiIntention.REACTION
    };
    if (!tmp4) {
      tmp15Result.reactionType = id(dependencyMap[17]).ReactionTypes.NORMAL;
      tmp15Result.analyticsObject = MESSAGE;
      tmp15Result.messageId = id;
      tmp15Result = tmp15(tmp15Result);
    }
    const BURST = id(dependencyMap[17]).ReactionTypes.BURST;
    const obj4 = id(dependencyMap[11]);
  }
};
export const handleViewReactions = function handleViewReactions(isPoll) {
  let _location;
  let channelId;
  let messageId;
  ({ messageId, channelId, location: _location } = isPoll);
  if (_location === undefined) {
    _location = {};
  }
  isPoll = isPoll.isPoll;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(isPoll, obj);
  const channel = channel.getChannel(channelId);
  if (null != channel) {
    if (channel.isPrivate()) {
      let GUILD_CHANNEL = constants2.DM_CHANNEL;
    }
    if (null == channel) {
      if (null != channel) {
        if (null == isPoll) {
          const message = message.getMessage(channelId, messageId);
          let isPollResult;
          if (null != message) {
            isPollResult = message.isPoll();
          }
          isPoll = true === isPollResult;
        }
        obj = { guild_id: guildId.getGuildId(), channel_id: channelId, location_message_id: messageId, location_message_is_poll: isPoll };
        obj = { page: GUILD_CHANNEL, section: constants3.CHANNEL };
        const merged1 = Object.assign(_location);
        obj.location = obj;
        importDefault(dependencyMap[18]).trackWithMetadata(constants.REACTION_ACTION_SHEET_OPENED, obj);
        const obj4 = importDefault(dependencyMap[18]);
        const obj1 = { messageId, channelId, emoji: isPoll.emoji };
        const obj7 = importDefault(dependencyMap[12]);
        const merged2 = Object.assign(merged);
        obj7.openLazy(arg1(dependencyMap[14])(dependencyMap[19], dependencyMap.paths), "MessageReactions", obj1);
      }
    }
    const FORUM_CHANNEL_POST = constants3.FORUM_CHANNEL_POST;
  }
  GUILD_CHANNEL = constants2.GUILD_CHANNEL;
};
export const handleViewPreviewReactions = function handleViewPreviewReactions(id2, id, emoji) {
  let obj = importDefault(dependencyMap[12]);
  obj = { messageId: id2, channelId: id, emoji };
  obj.openLazy(id(dependencyMap[14])(dependencyMap[20], dependencyMap.paths), "MessagePreviewReactions", obj);
};
export const ADD_REACTION_ICONS = obj;
export const ADD_REACTION_ICON_COMPONENTS = obj;
export const handleRemoveAllReactions = function handleRemoveAllReactions(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = importDefault(dependencyMap[25]);
  obj = {};
  const intl = arg1(dependencyMap[26]).intl;
  obj.title = intl.string(arg1(dependencyMap[26]).t.ZbtGBm);
  obj = { variant: "text-md/normal" };
  const intl2 = arg1(dependencyMap[26]).intl;
  obj.children = intl2.string(arg1(dependencyMap[26]).t.VpjOCo);
  obj.children = jsx(arg1(dependencyMap[27]).Text, obj);
  const intl3 = arg1(dependencyMap[26]).intl;
  obj.cancelText = intl3.string(arg1(dependencyMap[26]).t.ETE/oC);
  const intl4 = arg1(dependencyMap[26]).intl;
  obj.confirmText = intl4.string(arg1(dependencyMap[26]).t.oyYWHE);
  obj.onConfirm = function onConfirm() {
    return arg0(closure_2[10]).removeAllReactions(arg0, arg1);
  };
  obj.show(obj);
};
