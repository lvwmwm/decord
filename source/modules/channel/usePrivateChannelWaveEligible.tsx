// Module ID: 14783
// Function ID: 111431
// Name: usePrivateChannelWaveEligible
// Dependencies: []
// Exports: usePrivateChannelWaveEligible

// Module 14783 (usePrivateChannelWaveEligible)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ChannelFlags = arg1(dependencyMap[2]).ChannelFlags;
const MessageTypes = arg1(dependencyMap[3]).MessageTypes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/channel/usePrivateChannelWaveEligible.tsx");

export const usePrivateChannelWaveEligible = function usePrivateChannelWaveEligible(isDM, arg1) {
  arg1 = isDM;
  let tmp = isDM.isDM() && !isDM.isSystemDM();
  if (tmp) {
    const rawRecipients = isDM.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let recipientId = null;
  if (tmp) {
    recipientId = isDM.getRecipientId();
  }
  const importDefault = recipientId;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let isFriendResult = null != recipientId;
    if (isFriendResult) {
      isFriendResult = closure_4.isFriend(recipientId);
    }
    return isFriendResult;
  });
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => {
    let isIgnoredResult = null != recipientId;
    if (isIgnoredResult) {
      isIgnoredResult = closure_4.isIgnored(recipientId);
    }
    return isIgnoredResult;
  });
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_3];
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => {
    const messages = closure_3.getMessages(arg0.id);
    let tmp = 1 === messages.length;
    if (tmp) {
      const firstResult = messages.first();
      let type;
      if (null != firstResult) {
        type = firstResult.type;
      }
      tmp = type === constants.FRIEND_REQUEST_ACCEPTED;
    }
    return tmp;
  });
  let hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj3 = arg1(dependencyMap[4]);
  const items3 = [closure_3];
  const stateFromStores3 = arg1(dependencyMap[4]).useStateFromStores(items3, () => closure_3.hasCurrentUserSentWaveBlockingMessage(arg0.id));
  const obj4 = arg1(dependencyMap[4]);
  const obj5 = importDefault(dependencyMap[5]);
  const extractTimestampResult = importDefault(dependencyMap[5]).extractTimestamp(isDM.id);
  const obj6 = arg1(dependencyMap[6]);
  const tmp9 = importDefault(dependencyMap[7])();
  const isWithinIntervalResult = obj6.isWithinInterval(importDefault(dependencyMap[7])(), importDefault(dependencyMap[7])(extractTimestampResult), 1814400000);
  const strangerDangerWarning = arg1(dependencyMap[8]).useStrangerDangerWarning(isDM.id);
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
