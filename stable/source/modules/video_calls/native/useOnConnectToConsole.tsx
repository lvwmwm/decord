// Module ID: 9345
// Function ID: 9346
// Name: useOnConnectToConsole
// Dependencies: [19, 1074, 4457, 1943, 9346, 9382, 9577, 2]
// Exports: onConnectToConsole, useOnConnectToConsole

// Module 9345 (useOnConnectToConsole)
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4457 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9346 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9382 */;
import noop from "module_19" /* 19 */;

const beginConsoleTransfer = tmp(9577);
require = fn;
const Constants = fn(1074);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export const onConnectToConsole = function onConnectToConsole(channel, found) {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
  if (found.twoWayLink) {
    if (!found.revoked) {
      beginConsoleTransfer.beginConsoleTransfer(channel, found.type);
    }
  }
  const type = found.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items1, found.type);
  }
};
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  closure_0 = channel;
  let items = [channel, account];
  return noop.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    if (account.twoWayLink) {
      if (!tmp2.revoked) {
        beginConsoleTransfer.beginConsoleTransfer(closure_0, tmp2.type);
        const tmp3Result = beginConsoleTransfer;
      }
    }
    const type = tmp2.type;
    if (constants2.XBOX === type) {
      const items = [constants.CHANNEL_CALL];
      XboxLinkModalActionCreatorsDefault.showModal(items);
    } else if (tmp7.PLAYSTATION === type) {
      const items1 = [constants.CHANNEL_CALL];
      PlayStationLinkModalActionCreatorsDefault.showModal(items1, tmp2.type);
    }
  }, items);
};
