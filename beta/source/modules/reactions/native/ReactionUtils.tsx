// Module ID: 10824
// Function ID: 10825
// Name: reactions/ReactionUtils
// Dependencies: [2045, 5056, 4655, 1372, 1074, 1375, 21, 4481, 4801, 4802, 7183, 4488, 4800, 10598, 1981, 4701, 10583, 7182, 5016, 10825, 10837, 10838, 10839, 8219, 8676, 5203, 1115, 4832, 2]
// Exports: handleAddNewReactions, handleOutOfSuperReactions, handleRemoveAllReactions, handleViewPreviewReactions, handleViewReactions

// Module 10824 (reactions/ReactionUtils)
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ReactionUtils from "ReactionUtils" /* 4481 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7182 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7183 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import SuperReactionIcon from "SuperReactionIcon" /* 8676 */;
import AssetRegistryDefault from "AssetRegistry" /* 10838 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10839 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
({ AnalyticEvents: metroImportDefault, AnalyticsPages: metroImportAll, AnalyticsSections: c9 } = Constants);
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let obj = {};
obj[MessageReactionsTypes.ReactionTypes.NORMAL] = AssetRegistryDefault;
obj[MessageReactionsTypes.ReactionTypes.BURST] = AssetRegistryDefault2;
let obj2 = {};
obj2[MessageReactionsTypes.ReactionTypes.NORMAL] = ReactionIcon.ReactionIcon;
obj2[MessageReactionsTypes.ReactionTypes.BURST] = SuperReactionIcon.SuperReactionIcon;
let result = size.fileFinishedImporting("modules/reactions/native/ReactionUtils.tsx");

export const handleOutOfSuperReactions = function handleOutOfSuperReactions(onDismiss) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    let openLazyResult;
    const obj = PremiumUtils;
    const tmp2 = require;
    const tmp3 = dependencyMap;
    if (!obj.isPremium(currentUser)) {
      const obj3 = { onDismiss };
      const obj2 = ActionSheetActionCreatorsDefault;
      openLazyResult = obj2.openLazy(tmp2(1981)(10598, tmp3.paths), "SuperReactionUpsellActionSheet", obj3);
    }
    return openLazyResult;
  }
};
export const handleAddNewReactions = function handleAddNewReactions(channel, id, MESSAGE, burst) {
  _require = channel;
  importDefault = id;
  if (MESSAGE === undefined) {
    MESSAGE = require("ReactionActionCreators").ReactionLocations.MESSAGE;
  }
  if (burst != null) {
    burst = burst.burst;
  }
  let obj = UserStore;
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    const obj7 = require("PremiumUtils");
    const isPremiumResult = obj7.isPremium(currentUser);
    const tmp4 = true === burst && !isPremiumResult;
    if (tmp4) {
      const currentUser1 = obj.getCurrentUser();
      if (null != currentUser1) {
        const tmp14Result = require("PremiumUtils");
        if (!tmp14Result.isPremium(currentUser1)) {
          const obj3 = require("ActionSheetActionCreators");
          obj3.openLazy(require("asyncRequire")(MESSAGE[13], MESSAGE.paths), "SuperReactionUpsellActionSheet", { onDismiss: "Path" });
        }
      }
    }
    const tmp14Result3 = require("ChatInputUtils");
    const bestActiveInputForChannelId = tmp14Result3.getBestActiveInputForChannelId(channel.id);
    if (bestActiveInputForChannelId != null) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
    require("openEmojiPickerActionSheet");
    let obj2 = {
      onPressEmoji(byName, burst) {
          id = channel.id;
          const obj = { burst };
          if (null != byName) {
            const obj2 = ReactionUtils;
            const toReactionEmojiResult = obj2.toReactionEmoji(byName);
            if (!obj.burst) {
              const tmp3Result = HapticUtils;
              const result = tmp3Result.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            }
            const tmp3Result2 = ReactionActionCreators;
            tmp3Result2.addReaction(id, closure_1, toReactionEmojiResult, MESSAGE, obj);
          }
        },
      channel,
      pickerIntention: EmojiIntention.REACTION,
      reactionType: null,
      analyticsObject: null,
      messageId: null
    };
    if (true === burst) {
      let NORMAL;
      if (isPremiumResult) {
        NORMAL = tmp14(tmp15[17]).ReactionTypes.BURST;
      }
      obj2.reactionType = NORMAL;
      obj2.analyticsObject = MESSAGE;
      obj2.messageId = id;
      tmp10(obj2);
    }
    NORMAL = tmp14(tmp15[17]).ReactionTypes.NORMAL;
  }
};
export const handleViewReactions = function handleViewReactions(isPoll) {
  let _location;
  let channelId;
  let messageId;
  let obj2;
  ({ messageId, channelId, location: _location } = isPoll);
  if (_location === undefined) {
    _location = {};
  }
  isPoll = isPoll.isPoll;
  const emoji = isPoll.emoji;
  const merged = Object.assign(isPoll, Object.assign({ messageId: 0, channelId: 0, location: 0, isPoll: 0, emoji: 0 }));
  const channel = ChannelStore.getChannel(channelId);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  let isForumLikeChannelResult;
  const tmp4 = isPrivateResult ? metroImportAll.DM_CHANNEL : metroImportAll.GUILD_CHANNEL;
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (!isForumLikeChannelResult) {
    let FORUM_CHANNEL_POST;
    let isForumPostResult;
    if (channel != null) {
      isForumPostResult = channel.isForumPost();
    }
    if (!isForumPostResult) {
      FORUM_CHANNEL_POST = constants2.CHANNEL;
    }
    if (isPoll == null) {
      const message = MessageStore.getMessage(channelId, messageId);
      let isPollResult;
      if (message != null) {
        isPollResult = message.isPoll();
      }
      isPoll = true === isPollResult;
    }
    const obj = { guild_id: SelectedGuildStore.getGuildId(), channel_id: channelId, location_message_id: messageId, location_message_is_poll: isPoll, location: obj2 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const REACTION_ACTION_SHEET_OPENED = metroImportDefault.REACTION_ACTION_SHEET_OPENED;
    AppAnalyticsUtilsDefault;
    obj2 = { page: tmp4, section: FORUM_CHANNEL_POST };
    const merged1 = Object.assign(_location);
    trackWithMetadata(REACTION_ACTION_SHEET_OPENED, obj);
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj3 = { messageId, channelId, emoji };
    ActionSheetActionCreatorsDefault;
    const tmp21 = asyncRequire(10825, dependencyMap.paths);
    const merged2 = Object.assign(merged);
    openLazy(tmp21, "MessageReactions", obj3);
  }
  FORUM_CHANNEL_POST = constants2.FORUM_CHANNEL_POST;
};
export const handleViewPreviewReactions = function handleViewPreviewReactions(id2, id, emoji) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { messageId: id2, channelId: id, emoji };
  obj.openLazy(asyncRequire(10837, dependencyMap.paths), "MessagePreviewReactions", obj2);
};
export const ADD_REACTION_ICONS = obj;
export const ADD_REACTION_ICON_COMPONENTS = obj2;
export const handleRemoveAllReactions = function handleRemoveAllReactions(arg0, arg1) {
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  _require = arg0;
  importDefault = arg1;
  let obj = {
    title: intl.string(require("intl").t.ZbtGBm),
    children: null,
    cancelText: intl3.string(require("intl").t["ETE/oC"]),
    confirmText: intl4.string(require("intl").t.oyYWHE),
    onConfirm() {
      const obj = ReactionActionCreators;
      return obj.removeAllReactions(closure_0, closure_1);
    }
  };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = require("intl").intl;
  ({ variant: "text-md/normal", children: intl2.string(require("intl").t.VpjOCo) });
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  show(obj);
};
