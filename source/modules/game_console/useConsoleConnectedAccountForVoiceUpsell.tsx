// Module ID: 15677
// Function ID: 119766
// Name: useConsoleConnectedAccountForVoiceUpsell
// Dependencies: []
// Exports: default

// Module 15677 (useConsoleConnectedAccountForVoiceUpsell)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const CONSOLE_VOICE_PLATFORMS = arg1(dependencyMap[3]).CONSOLE_VOICE_PLATFORMS;
const ActivityTypes = arg1(dependencyMap[4]).ActivityTypes;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default function useConsoleConnectedAccountForVoiceUpsell() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => activities.getActivities(true));
  const found = stateFromStores.filter((platform) => {
    platform = platform.platform;
    let hasItem = platform.type === constants.PLAYING;
    if (hasItem) {
      hasItem = null != platform;
    }
    if (hasItem) {
      hasItem = set.has(platform);
    }
    return hasItem;
  });
  const arg1 = found;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    let tmp = null != store.getAwaitingRemoteSessionInfo();
    if (!tmp) {
      tmp = null != store.getRemoteSessionId();
    }
    return tmp;
  });
  const obj2 = arg1(dependencyMap[5]);
  const items2 = [closure_3];
  const stateFromStores2 = arg1(dependencyMap[5]).useStateFromStores(items2, () => {
    const mapped = found.map((platform) => {
      platform = platform.platform;
      if (null == platform) {
        return null;
      } else {
        const tmp3 = callback(closure_2[6])(platform);
        let account = null;
        if (null != tmp3) {
          account = account.getAccount(null, tmp3);
        }
        return account;
      }
    });
    return mapped.find((arg0) => null != arg0);
  });
  let tmp3 = null;
  if (found.length > 0) {
    tmp3 = null;
    if (null != stateFromStores2) {
      tmp3 = null;
      if (!stateFromStores1) {
        tmp3 = stateFromStores2;
      }
    }
  }
  return tmp3;
};
