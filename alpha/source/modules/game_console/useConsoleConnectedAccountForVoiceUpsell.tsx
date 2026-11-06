// Module ID: 19540
// Function ID: 19541
// Name: useConsoleConnectedAccountForVoiceUpsell
// Dependencies: [6652, 6650, 5921, 9843, 504, 5918, 19541, 2]
// Exports: default

// Module 19540 (useConsoleConnectedAccountForVoiceUpsell)
import GameConsoleConstants from "GameConsoleConstants" /* 9843 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6652 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6650 */;
import GameConsoleStore from "GameConsoleStore" /* 5921 */;
import size from "module_2" /* 2 */;

let account, platform;

const CONSOLE_VOICE_PLATFORMS = GameConsoleConstants.CONSOLE_VOICE_PLATFORMS;
const result = size.fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default function useConsoleConnectedAccountForVoiceUpsell() {
  let activities;
  let awaitingRemoteSessionInfo;
  let found;
  const items = [SelfPresenceStore];
  const obj = found(504);
  const stateFromStores = obj.useStateFromStores(items, () => activities.getActivities(true));
  found = stateFromStores.filter((platform) => {
    platform = platform.platform;
    const hasItem = platform.type === found(dependencyMap[5]).ActivityTypes.PLAYING && null != platform && set.has(platform);
    return hasItem;
  });
  const items1 = [GameConsoleStore];
  const obj2 = found(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const tmp = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId();
    return tmp;
  });
  const items2 = [ConnectedAccountsStore];
  const obj3 = found(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const mapped = found.map((platform) => {
      platform = platform.platform;
      if (null == platform) {
        return null;
      } else {
        const tmp3 = closure_1_1(closure_1_2[6])(platform);
        account = null;
        if (null != tmp3) {
          account = account.getAccount(null, tmp3);
        }
        return account;
      }
    });
    return mapped.find((item) => null != item);
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
