// Module ID: 19878
// Function ID: 19879
// Name: MobileGiftIntentCardManager
// Dependencies: [7941, 4990, 6196, 5044, 8686, 1387, 19879, 1093, 4966, 10790, 6163, 1260, 4985, 9296, 2]

// Module 19878 (MobileGiftIntentCardManager)
import ChannelTypes from "ChannelTypes" /* 1093 */;
import Timers from "Timers" /* 4985 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9296 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7941 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import MessageStore from "MessageStore" /* 6196 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8686 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import GiftIntentReconcilingManager from "GiftIntentReconcilingManager" /* 19879 */;
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
              const tmpResult = tmp(10790);
              const result = tmpResult.logMessageGiftIntentShown(found);
              const userAffinity = self.getUserAffinity(found);
              const obj = { name: tmp(1260).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: tmp(1260).ImpressionTypes.VIEW, properties: obj2 };
              const trackImpression = tmp(6163).trackImpression;
              tmp(6163);
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
