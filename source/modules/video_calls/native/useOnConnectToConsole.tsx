// Module ID: 8935
// Function ID: 70453
// Name: onConnectToConsole
// Dependencies: [31, 653, 3946, 1334, 8936, 8971, 9039, 2]
// Exports: useOnConnectToConsole

// Module 8935 (onConnectToConsole)
import result from "result";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function onConnectToConsole(channel, closure_0) {
  const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.DONUT_MOBILE_NUX);
  if (closure_0.twoWayLink) {
    if (!closure_0.revoked) {
      require(9039) /* _beginConsoleTransfer */.beginConsoleTransfer(channel, closure_0.type);
    }
  }
  const type = closure_0.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return importDefault(8936).showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return importDefault(8971).showModal(items1, closure_0.type);
  }
  const obj = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
}
({ AnalyticsLocations: closure_4, PlatformTypes: closure_5 } = ME);
let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export { onConnectToConsole };
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  let closure_0 = channel;
  let closure_1 = account;
  const items = [channel, account];
  return React.useCallback(() => {
    outer1_6(closure_0, closure_1);
  }, items);
};
