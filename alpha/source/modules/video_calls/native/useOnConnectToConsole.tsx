// Module ID: 9110
// Function ID: 9111
// Name: useOnConnectToConsole
// Dependencies: [19, 1085, 4898, 2048, 9111, 9148, 10896, 558, 576, 2]
// Exports: onConnectToConsole

// Module 9110 (useOnConnectToConsole)
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9111 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9148 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let tmp;
const beginConsoleTransfer = tmp(10896);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnConnectToConsole(arg0, arg1) {
  let closure_0;
  _require = arg0;
  const twoWayLink = arg1;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === arg1) {
    let tmp2;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function s() {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    const tmp = closure_0;
    if (twoWayLink.twoWayLink) {
      if (!twoWayLink.revoked) {
        const tmp3Result = beginConsoleTransfer;
        tmp3Result.beginConsoleTransfer(tmp, twoWayLink.type);
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
      obj3.showModal(items1, twoWayLink.type);
    }
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useOnConnectToConsole(arg0, arg1) {
  let closure_0 = arg0;
  const twoWayLink = arg1;
  let items = [arg0, arg1];
  return react.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    const tmp = closure_0;
    if (twoWayLink.twoWayLink) {
      if (!twoWayLink.revoked) {
        const tmp3Result = beginConsoleTransfer;
        tmp3Result.beginConsoleTransfer(tmp, twoWayLink.type);
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
      obj3.showModal(items1, twoWayLink.type);
    }
  }, items);
});
function onConnectToConsole(channel, found) {
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
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export { onConnectToConsole };
export const useOnConnectToConsole = tmp3;
