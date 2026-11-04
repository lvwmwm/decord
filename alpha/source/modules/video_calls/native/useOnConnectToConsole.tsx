// Module ID: 14953
// Function ID: 14954
// Name: useOnConnectToConsole
// Dependencies: [19, 1072, 5171, 4974, 9871, 14848, 12175, 2]
// Exports: onConnectToConsole, useOnConnectToConsole

// Module 14953 (useOnConnectToConsole)
import dismissible_content from "dismissible_content" /* 4974 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5171 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9871 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 14848 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const beginConsoleTransfer = tmp(12175);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export function onConnectToConsole(channel, found) {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
  if (found.twoWayLink) {
    if (!found.revoked) {
      const tmpResult = beginConsoleTransfer;
      tmpResult.beginConsoleTransfer(channel, found.type);
    }
  }
  const type = found.type;
  if (hasOwnProperty.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    const obj4 = XboxLinkModalActionCreatorsDefault;
    return obj4.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    const obj3 = PlayStationLinkModalActionCreatorsDefault;
    return obj3.showModal(items1, found.type);
  }
}
export function useOnConnectToConsole(channel, account) {
  let closure_0 = channel;
  let items = [channel, account];
  return react.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    const tmp = channel;
    if (account.twoWayLink) {
      if (!account.revoked) {
        const tmp3Result = beginConsoleTransfer;
        tmp3Result.beginConsoleTransfer(tmp, account.type);
      }
    }
    const type = tmp2.type;
    if (hasOwnProperty.XBOX === type) {
      const items = [constants.CHANNEL_CALL];
      const obj4 = XboxLinkModalActionCreatorsDefault;
      obj4.showModal(items);
    } else if (hasOwnProperty.PLAYSTATION === type) {
      const items1 = [constants.CHANNEL_CALL];
      const obj3 = PlayStationLinkModalActionCreatorsDefault;
      obj3.showModal(items1, account.type);
    }
  }, items);
}
