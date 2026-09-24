// Module ID: 10060
// Function ID: 10061
// Name: useOnConnectToConsole
// Dependencies: [19, 1078, 4611, 2031, 9372, 9403, 10061, 558, 568, 2]
// Exports: onConnectToConsole

// Module 10060 (useOnConnectToConsole)
import dismissible_content from "dismissible_content" /* 2031 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4611 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9372 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9403 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const beginConsoleTransfer = tmp(10061);
require = fn;
const Constants = fn(1078);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
function onConnectToConsole(channel, found) {
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
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export { onConnectToConsole };
export const useOnConnectToConsole = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const twoWayLink = arg1;
  const cResult = require("c").c(3);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function s() {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    if (twoWayLink.twoWayLink) {
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
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  const twoWayLink = arg1;
  let items = [arg0, arg1];
  return noop.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    if (twoWayLink.twoWayLink) {
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
});
