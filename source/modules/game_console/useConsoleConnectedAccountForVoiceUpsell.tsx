// Module ID: 15852
// Function ID: 122343
// Name: useConsoleConnectedAccountForVoiceUpsell
// Dependencies: [4812, 4810, 4144, 8989, 653, 566, 15853, 2]
// Exports: default

// Module 15852 (useConsoleConnectedAccountForVoiceUpsell)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { CONSOLE_VOICE_PLATFORMS } from "XBOX_URL_BASE";
import { ActivityTypes } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default function useConsoleConnectedAccountForVoiceUpsell() {
  const items = [closure_4];
  const stateFromStores = found(566).useStateFromStores(items, () => outer1_4.getActivities(true));
  found = stateFromStores.filter((platform) => {
    platform = platform.platform;
    let hasItem = platform.type === outer1_7.PLAYING;
    if (hasItem) {
      hasItem = null != platform;
    }
    if (hasItem) {
      hasItem = outer1_6.has(platform);
    }
    return hasItem;
  });
  const obj = found(566);
  const items1 = [closure_5];
  const stateFromStores1 = found(566).useStateFromStores(items1, () => {
    let tmp = null != outer1_5.getAwaitingRemoteSessionInfo();
    if (!tmp) {
      tmp = null != outer1_5.getRemoteSessionId();
    }
    return tmp;
  });
  const obj2 = found(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = found(566).useStateFromStores(items2, () => {
    const mapped = found.map((platform) => {
      platform = platform.platform;
      if (null == platform) {
        return null;
      } else {
        const tmp3 = outer2_1(outer2_2[6])(platform);
        let account = null;
        if (null != tmp3) {
          account = outer2_3.getAccount(null, tmp3);
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
