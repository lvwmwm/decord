// Module ID: 19636
// Function ID: 19637
// Name: MobileGiftIntentCardManager
// Dependencies: [8143, 4762, 5964, 4816, 8878, 1388, 19637, 1092, 4738, 9478, 5930, 1263, 4757, 9651, 2]

// Module 19636 (MobileGiftIntentCardManager)
import ChannelTypes from "ChannelTypes" /* 1092 */;
import Timers from "Timers" /* 4757 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9651 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 8143 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import MessageStore from "MessageStore" /* 5964 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8878 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import GiftIntentReconcilingManager from "GiftIntentReconcilingManager" /* 19637 */;
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
              const tmpResult = tmp(9478);
              const result = tmpResult.logMessageGiftIntentShown(found);
              const userAffinity = self.getUserAffinity(found);
              const obj = { name: tmp(1263).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: tmp(1263).ImpressionTypes.VIEW, properties: obj2 };
              const trackImpression = tmp(5930).trackImpression;
              tmp(5930);
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
