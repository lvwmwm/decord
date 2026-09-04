// Module ID: 9145
// Function ID: 9146
// Name: onConnectToConsole
// Dependencies: [19, 673, 4301, 1372, 9146, 9182, 9376, 2]
// Exports: onConnectToConsole, useOnConnectToConsole

// Module 9145 (onConnectToConsole)
import DismissibleContent from "DismissibleContent" /* 1372 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4301 */;
import _modDef9146 from "module_9146" /* 9146 */;
import _modDef9182 from "module_9182" /* 9182 */;
import _beginConsoleTransfer from "_beginConsoleTransfer" /* 9376 */;
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 673 */;

require = arg1;
({ AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let result = require("set").fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export const onConnectToConsole = function onConnectToConsole(channel, closure_0) {
  const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.DONUT_MOBILE_NUX);
  if (closure_0.twoWayLink) {
    if (!closure_0.revoked) {
      _beginConsoleTransfer.beginConsoleTransfer(channel, closure_0.type);
    }
  }
  const type = closure_0.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return _modDef9146.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return _modDef9182.showModal(items1, closure_0.type);
  }
  const obj = UNSAFE_isDismissibleContentDismissed;
  const tmp = require;
};
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  closure_0 = channel;
  closure_1 = account;
  let items = [channel, account];
  return React.useCallback(() => {
    const result = channel(closure_1_2[2]).UNSAFE_markDismissibleContentAsDismissed(channel(closure_1_2[3]).DismissibleContent.DONUT_MOBILE_NUX);
    if (account.twoWayLink) {
      if (!tmp2.revoked) {
        channel(tmp4[6]).beginConsoleTransfer(channel, tmp2.type);
        const tmp3Result = channel(tmp4[6]);
      }
    }
    const type = tmp2.type;
    if (closure_1_5.XBOX === type) {
      const items = [closure_1_4.CHANNEL_CALL];
      account(tmp4[4]).showModal(items);
      const obj4 = account(tmp4[4]);
    } else if (tmp7.PLAYSTATION === type) {
      const items1 = [closure_1_4.CHANNEL_CALL];
      account(tmp4[5]).showModal(items1, tmp2.type);
      const obj3 = account(tmp4[5]);
    }
  }, items);
};
