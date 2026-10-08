// Module ID: 17935
// Function ID: 17936
// Name: MobileGiftIntentCardManager
// Dependencies: [7336, 2063, 5428, 2115, 8080, 1391, 17936, 1106, 2040, 10082, 8941, 1272, 2058, 8692, 2]

// Module 17935 (MobileGiftIntentCardManager)
import ChannelTypes from "ChannelTypes" /* 1106 */;
import Timers from "Timers" /* 2058 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 8692 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7336 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import MessageStore from "MessageStore" /* 5428 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8080 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import GiftIntentReconcilingManager from "GiftIntentReconcilingManager" /* 17936 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let metroImportAll;
let metroImportDefault;
({ GiftIntentSecondaryAction: metroImportDefault, GiftIntentType: metroImportAll } = PremiumConstants);
class MobileGiftIntentCardManager extends GiftIntentReconcilingManager {
  isChannelEligible(channel) {
    return channel.type === ChannelTypes.ChannelTypes.DM;
  }
  maybeSendCard(id, found) {
    let dmProbability;
    let obj2;
    const self = this;
    dependencyMap = id;
    _require = found;
    const tmp = _require;
    const EnableFriendAnniversaryNotifications = require("UserSettings").EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      if (!PremiumGiftingIntentStore.isGiftIntentMessageInCooldown(found)) {
        if (id === SelectedChannelStore.getChannelId()) {
          const obj4 = MessageStore;
          if (MessageStore.isReady(id)) {
            const tmp6 = constants2;
            if (self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, found, constants.SEND_MESSAGE)) {
              const tmpResult = tmp(10082);
              const result = tmpResult.logMessageGiftIntentShown(found);
              const userAffinity = self.getUserAffinity(found);
              const obj = { name: tmp(1272).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: tmp(1272).ImpressionTypes.VIEW, properties: obj2 };
              const trackImpression = tmp(8941).trackImpression;
              tmp(8941);
              obj2 = { gift_intent_type: tmp6.FRIEND_ANNIVERSARY, dm_affinity: dmProbability, channel_id: id };
              dmProbability = undefined;
              if (userAffinity != null) {
                dmProbability = userAffinity.dmProbability;
              }
              trackImpression(obj);
            }
          } else {
            obj4.whenReady(id, () => {
              if (SelectedChannelStore.getChannelId() === id) {
                self.maybeSendCard(tmp, found);
              }
            });
          }
        }
      }
    }
  }
  sendCardInSelectedChannelIfEligible(channelId) {
    const self = this;
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (self.isChannelEligible(channel)) {
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        set = new Set(channel.recipients);
        const friendAnniversaries = PremiumGiftingIntentStore.getFriendAnniversaries();
        const found = friendAnniversaries.find((item) => set.has(item));
        if (null != found) {
          const self4 = this;
          const self5 = this;
          const delayedCall = new Timers.DelayedCall(1000, () => {
            self.maybeSendCard(channel.id, found);
          });
          delayedCall.delay();
        }
      }
    }
  }
  onChannelSelect(channelId) {
    const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
  }
  sendGiftingPromptSystemMessagesIfEligible() {
    const obj = UserAffinitiesActionCreators;
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
    const result = this.sendCardInSelectedChannelIfEligible(SelectedChannelStore.getChannelId());
  }
}
const prototype = MobileGiftIntentCardManager.prototype;
const mobileGiftIntentCardManager = new MobileGiftIntentCardManager();
let result = size.fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;
