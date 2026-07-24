// Module ID: 9351
// Function ID: 73038
// Name: handleOutOfSuperReactions
// Dependencies: [1348, 4349, 3947, 1849, 653, 1852, 33, 3769, 4099, 4100, 7004, 3776, 4098, 9352, 1934, 3989, 9362, 7005, 4324, 9463, 9472, 9473, 9474, 7437, 7483, 4470, 1212, 4126, 2]
// Exports: handleAddNewReactions, handleRemoveAllReactions, handleViewPreviewReactions, handleViewReactions

// Module 9351 (handleOutOfSuperReactions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { EmojiIntention } from "set";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function handleOutOfSuperReactions(onDismiss) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    let obj = require(3776) /* _createForOfIteratorHelperLoose */;
    let openLazyResult;
    if (!obj.isPremium(currentUser)) {
      obj = { onDismiss };
      openLazyResult = importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9352, dependencyMap.paths), "SuperReactionUpsellActionSheet", obj);
      const obj2 = importDefault(4098);
    }
    return openLazyResult;
  }
}
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9 } = ME);
let obj = {};
obj[require("ReactionTypes").ReactionTypes.NORMAL] = require("registerAsset");
obj[require("ReactionTypes").ReactionTypes.BURST] = require("registerAsset");
obj = {};
obj[require("ReactionTypes").ReactionTypes.NORMAL] = require("ReactionIcon").ReactionIcon;
obj[require("ReactionTypes").ReactionTypes.BURST] = require("SuperReactionIcon").SuperReactionIcon;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/reactions/native/ReactionUtils.tsx");

export { handleOutOfSuperReactions };
export const handleAddNewReactions = function handleAddNewReactions(channel, id, MESSAGE, burst) {
  const _require = channel;
  let closure_1 = id;
  if (MESSAGE === undefined) {
    MESSAGE = _require(MESSAGE[10]).ReactionLocations.MESSAGE;
  }
  burst = undefined;
  if (null != burst) {
    burst = burst.burst;
  }
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    const isPremiumResult = _require(MESSAGE[11]).isPremium(currentUser);
    let tmp6 = tmp4;
    if (tmp4) {
      tmp6 = !isPremiumResult;
    }
    if (tmp6) {
      handleOutOfSuperReactions();
    }
    let tmp15Result = _require(MESSAGE[15]);
    const bestActiveInputForChannelId = tmp15Result.getBestActiveInputForChannelId(channel.id);
    if (null != bestActiveInputForChannelId) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
    _require(MESSAGE[16]);
    tmp15Result = {
      onPressEmoji(byName, burst) {
          const id = channel.id;
          const obj = { burst };
          if (null != byName) {
            const toReactionEmojiResult = channel(MESSAGE[7]).toReactionEmoji(byName);
            if (!tmp3) {
              const result = channel(MESSAGE[8]).triggerHapticFeedback(id(MESSAGE[9]).IMPACT_LIGHT);
              const obj2 = channel(MESSAGE[8]);
            }
            const obj3 = channel(MESSAGE[10]);
            obj3.addReaction(id, tmp, toReactionEmojiResult, tmp2, obj);
            const obj4 = channel(MESSAGE[7]);
            tmp3 = null != obj && obj.burst;
          }
        },
      channel,
      pickerIntention: EmojiIntention.REACTION
    };
    if (!tmp4) {
      tmp15Result.reactionType = _require(MESSAGE[17]).ReactionTypes.NORMAL;
      tmp15Result.analyticsObject = MESSAGE;
      tmp15Result.messageId = id;
      tmp15Result = tmp15(tmp15Result);
    }
    const BURST = _require(MESSAGE[17]).ReactionTypes.BURST;
    let obj4 = _require(MESSAGE[11]);
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
  let obj = { messageId: 0, channelId: 0, location: 0, isPoll: 0, emoji: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(isPoll, obj);
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (channel.isPrivate()) {
      let GUILD_CHANNEL = constants2.DM_CHANNEL;
    }
    if (null == channel) {
      if (null != channel) {
        if (null == isPoll) {
          message = message.getMessage(channelId, messageId);
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
        importDefault(4324).trackWithMetadata(constants.REACTION_ACTION_SHEET_OPENED, obj);
        const obj4 = importDefault(4324);
        const obj1 = { messageId, channelId, emoji: isPoll.emoji };
        const obj7 = importDefault(4098);
        const merged2 = Object.assign(merged);
        obj7.openLazy(require(1934) /* maybeLoadBundle */(9463, dependencyMap.paths), "MessageReactions", obj1);
      }
    }
    const FORUM_CHANNEL_POST = constants3.FORUM_CHANNEL_POST;
  }
  GUILD_CHANNEL = constants2.GUILD_CHANNEL;
};
export const handleViewPreviewReactions = function handleViewPreviewReactions(id2, id, emoji) {
  let obj = importDefault(4098);
  obj = { messageId: id2, channelId: id, emoji };
  obj.openLazy(require(1934) /* maybeLoadBundle */(9472, dependencyMap.paths), "MessagePreviewReactions", obj);
};
export const ADD_REACTION_ICONS = obj;
export const ADD_REACTION_ICON_COMPONENTS = obj;
export const handleRemoveAllReactions = function handleRemoveAllReactions(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  let obj = importDefault(4470);
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.ZbtGBm);
  obj = { variant: "text-md/normal" };
  const intl2 = _require(1212).intl;
  obj.children = intl2.string(_require(1212).t.VpjOCo);
  obj.children = jsx(_require(4126).Text, { variant: "text-md/normal" });
  const intl3 = _require(1212).intl;
  obj.cancelText = intl3.string(_require(1212).t["ETE/oC"]);
  const intl4 = _require(1212).intl;
  obj.confirmText = intl4.string(_require(1212).t.oyYWHE);
  obj.onConfirm = function onConfirm() {
    return callback(outer1_2[10]).removeAllReactions(callback, closure_1);
  };
  obj.show(obj);
};
