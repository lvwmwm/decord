// Module ID: 17886
// Function ID: 17887
// Name: MobileGiftIntentCardManager
// Dependencies: [7932, 2045, 5010, 2099, 8373, 1378, 17887, 1099, 2023, 11074, 9078, 1253, 2040, 10122, 2]

// Module 17886 (MobileGiftIntentCardManager)
import ChannelTypes from "ChannelTypes" /* 1099 */;
import Timers from "Timers" /* 2040 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 10122 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7932 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5010 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8373 */;
import GiftIntentReconcilingManager from "GiftIntentReconcilingManager" /* 17887 */;

require = fn;
const PremiumConstants = fn(1378);
({ GiftIntentSecondaryAction: closure_7, GiftIntentType: closure_8 } = PremiumConstants);
class MobileGiftIntentCardManager extends tmp3 {
}
const prototype = MobileGiftIntentCardManager.prototype;
prototype["isChannelEligible"] = function isChannelEligible(channel) {
  return channel.type === ChannelTypes.ChannelTypes.DM;
};
prototype["maybeSendCard"] = function maybeSendCard(id, found) {
  const self = this;
  dependencyMap = id;
  _require = found;
  const EnableFriendAnniversaryNotifications = require("UserSettings").EnableFriendAnniversaryNotifications;
  if (EnableFriendAnniversaryNotifications.getSetting()) {
    if (!PremiumGiftingIntentStore.isGiftIntentMessageInCooldown(found)) {
      if (id === SelectedChannelStore.getChannelId()) {
        if (MessageStore.isReady(id)) {
          if (self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, found, constants.SEND_MESSAGE)) {
            const result = tmp(11074).logMessageGiftIntentShown(found);
            const userAffinity = self.getUserAffinity(found);
            const tmpResult = tmp(11074);
            const obj = { name: tmp(1253).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: tmp(1253).ImpressionTypes.VIEW, properties: null };
            const obj2 = { gift_intent_type: tmp6.FRIEND_ANNIVERSARY, dm_affinity: null, channel_id: null };
            let dmProbability;
            if (userAffinity != null) {
              dmProbability = userAffinity.dmProbability;
            }
            obj2.dm_affinity = dmProbability;
            obj2.channel_id = id;
            obj.properties = obj2;
            tmp(9078).trackImpression(obj);
            const tmpResult2 = tmp(9078);
          }
          tmp6 = constants2;
        } else {
          obj5.whenReady(id, () => {
            if (SelectedChannelStore.getChannelId() === closure_1) {
              self.maybeSendCard(tmp, closure_0);
            }
          });
        }
        obj5 = MessageStore;
      }
    }
  }
};
prototype["sendCardInSelectedChannelIfEligible"] = function sendCardInSelectedChannelIfEligible(channelId) {
  const self = this;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (self.isChannelEligible(channel)) {
      const _Set = Set;
      const set = new Set(channel.recipients);
      const friendAnniversaries = PremiumGiftingIntentStore.getFriendAnniversaries();
      const found = friendAnniversaries.find((item) => set.has(item));
      if (null != found) {
        const delayedCall = new Timers.DelayedCall(1000, () => {
          self.maybeSendCard(channel.id, found);
        });
        delayedCall.delay();
      }
    }
  }
};
prototype["onChannelSelect"] = function onChannelSelect(channelId) {
  const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
};
prototype["sendGiftingPromptSystemMessagesIfEligible"] = function sendGiftingPromptSystemMessagesIfEligible() {
  const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
  const result = this.sendCardInSelectedChannelIfEligible(SelectedChannelStore.getChannelId());
};
const mobileGiftIntentCardManager = new MobileGiftIntentCardManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;
