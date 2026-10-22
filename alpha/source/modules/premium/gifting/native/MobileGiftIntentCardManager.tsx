// Module ID: 18849
// Function ID: 18850
// Name: MobileGiftIntentCardManager
// Dependencies: [7717, 4821, 5996, 4872, 8434, 1394, 18850, 1108, 4797, 10474, 9337, 1275, 4816, 9059, 2]

// Module 18849 (MobileGiftIntentCardManager)
import ChannelTypes from "ChannelTypes" /* 1108 */;
import Timers from "Timers" /* 4816 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9059 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7717 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import MessageStore from "MessageStore" /* 5996 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8434 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import GiftIntentReconcilingManager from "GiftIntentReconcilingManager" /* 18850 */;
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
              const tmpResult = tmp(10474);
              const result = tmpResult.logMessageGiftIntentShown(found);
              const userAffinity = self.getUserAffinity(found);
              const obj = { name: tmp(1275).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: tmp(1275).ImpressionTypes.VIEW, properties: obj2 };
              const trackImpression = tmp(9337).trackImpression;
              tmp(9337);
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
