// Module ID: 16031
// Function ID: 123052
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16031 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ GiftIntentSecondaryAction: closure_13, GiftIntentType: closure_14 } = arg1(dependencyMap[10]));
let tmp3 = (arg0) => {
  class MobileGiftIntentCardManager {
    constructor() {
      self = this;
      tmp = closure_3(this, MobileGiftIntentCardManager);
      obj = closure_6(MobileGiftIntentCardManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MobileGiftIntentCardManager;
  callback2(MobileGiftIntentCardManager, arg0);
  let obj = {
    key: "isChannelEligible",
    value(type) {
      return type.type === MobileGiftIntentCardManager(closure_2[11]).ChannelTypes.DM;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "maybeSendCard",
    value(channel_id, recipientUserId) {
      const self = this;
      const MobileGiftIntentCardManager = this;
      const EnableFriendAnniversaryNotifications = MobileGiftIntentCardManager(recipientUserId[12]).EnableFriendAnniversaryNotifications;
      if (EnableFriendAnniversaryNotifications.getSetting()) {
        if (!closure_12.isGiftIntentMessageInCooldown(recipientUserId)) {
          if (channel_id === store.getChannelId()) {
            if (closure_10.isReady(channel_id)) {
              if (self.trySendGiftingPromptSystemMessage(channel_id, constants2.FRIEND_ANNIVERSARY, recipientUserId, constants.SEND_MESSAGE, "maybeSendCard")) {
                let obj = MobileGiftIntentCardManager(recipientUserId[13]);
                const result = obj.logMessageGiftIntentShown(recipientUserId);
                const userAffinity = userAffinity.getUserAffinity(recipientUserId);
                obj = { name: MobileGiftIntentCardManager(recipientUserId[15]).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: MobileGiftIntentCardManager(recipientUserId[15]).ImpressionTypes.VIEW };
                obj = { gift_intent_type: constants2.FRIEND_ANNIVERSARY };
                let dmProbability;
                if (null != userAffinity) {
                  dmProbability = userAffinity.dmProbability;
                }
                obj.dm_affinity = dmProbability;
                obj.channel_id = channel_id;
                obj.properties = obj;
                MobileGiftIntentCardManager(recipientUserId[14]).trackImpression(obj);
                const obj2 = MobileGiftIntentCardManager(recipientUserId[14]);
              }
            } else {
              closure_10.whenReady(channel_id, () => {
                if (channelId.getChannelId() === arg0) {
                  self.maybeSendCard(arg0, arg1);
                }
              });
            }
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "sendCardInSelectedChannelIfEligible",
    value(channelId) {
      const self = this;
      const MobileGiftIntentCardManager = this;
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        if (self.isChannelEligible(channel)) {
          const _Set = Set;
          const set = new Set(channel.recipients);
          const friendAnniversaries = closure_12.getFriendAnniversaries();
          const found = friendAnniversaries.find((arg0) => set.has(arg0));
          if (null != found) {
            const DelayedCall = MobileGiftIntentCardManager(set[16]).DelayedCall;
            const prototype2 = DelayedCall.prototype;
            const delayedCall = new DelayedCall(1000, () => {
              self.maybeSendCard(channel.id, found);
            });
            delayedCall.delay();
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "maybeFetchUserAffinities",
    value() {
      if (obj.getConfig({ location: "MobileGiftIntentCardManager" }).enabled) {
        const userAffinitiesV2 = MobileGiftIntentCardManager(closure_2[18]).fetchUserAffinitiesV2();
        const obj2 = MobileGiftIntentCardManager(closure_2[18]);
      }
    }
  };
  items[4] = {
    key: "onChannelSelect",
    value(channelId) {
      const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
    }
  };
  items[5] = {
    key: "sendGiftingPromptSystemMessagesIfEligible",
    value() {
      const result = this.maybeFetchUserAffinities();
      const result1 = this.sendCardInSelectedChannelIfEligible(store.getChannelId());
    }
  };
  return callback(MobileGiftIntentCardManager, items);
}(importDefault(dependencyMap[19]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default tmp3;
