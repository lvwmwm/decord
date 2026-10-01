// Module ID: 15671
// Function ID: 15672
// Name: usePrivateChannelWaveEligible
// Dependencies: [5056, 4479, 2052, 1074, 504, 11, 4512, 4421, 10906, 2]
// Exports: usePrivateChannelWaveEligible

// Module 15671 (usePrivateChannelWaveEligible)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import MessageStore from "MessageStore" /* 5056 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelFlags = ChannelConstants.ChannelFlags;
const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWaveEligible.tsx");

export const usePrivateChannelWaveEligible = function usePrivateChannelWaveEligible(isDM, arg1) {
  _require = isDM;
  let tmp = isDM.isDM() && !isDM.isSystemDM();
  if (tmp) {
    const rawRecipients = isDM.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let recipientId = null;
  if (tmp) {
    recipientId = isDM.getRecipientId();
  }
  const items = [RelationshipStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isFriendResult = null != recipientId && RelationshipStore.isFriend(tmp);
    return isFriendResult;
  });
  const items1 = [RelationshipStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const isIgnoredResult = null != recipientId && RelationshipStore.isIgnored(tmp);
    return isIgnoredResult;
  });
  const items2 = [MessageStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const messages = MessageStore.getMessages(isDM.id);
    let tmp = 1 === messages.length;
    if (tmp) {
      const firstResult = messages.first();
      let type;
      if (firstResult != null) {
        type = firstResult.type;
      }
      tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
    }
    return tmp;
  });
  let hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const items3 = [MessageStore];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items3, () => MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id));
  const obj5 = recipientId(11);
  const extractTimestampResult = obj5.extractTimestamp(isDM.id);
  const isWithinInterval = require("DateUtils").isWithinInterval;
  require("DateUtils");
  const tmp10 = recipientId(4421)();
  const isWithinIntervalResult = isWithinInterval(tmp10, recipientId(4421)(extractTimestampResult), 1814400000);
  const obj6 = require("useStrangerDangerWarning");
  const strangerDangerWarning = obj6.useStrangerDangerWarning(isDM.id);
  if (tmp) {
    tmp = stateFromStores;
  }
  if (tmp) {
    tmp = !stateFromStores1;
  }
  if (tmp) {
    if (!hasFlagResult) {
      hasFlagResult = null == arg1;
    }
    if (!hasFlagResult) {
      hasFlagResult = stateFromStores2;
    }
    tmp = hasFlagResult;
  }
  if (tmp) {
    tmp = !stateFromStores3;
  }
  if (tmp) {
    tmp = isWithinIntervalResult;
  }
  if (tmp) {
    tmp = null == strangerDangerWarning;
  }
  return tmp;
};
