// Module ID: 11467
// Function ID: 11468
// Name: RefreshChatInputCoachmark
// Dependencies: [32, 19, 2042, 6806, 2029, 1115, 4640, 10589, 2]
// Exports: default, useRefreshChatInputCoachmark

// Module 11467 (RefreshChatInputCoachmark)
import intl3 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import OmnibuttonCoachmarkRive from "OmnibuttonCoachmarkRive" /* 4640 */;
import useCoachmark from "useCoachmark" /* 10589 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
};
export const useRefreshChatInputCoachmark = function useRefreshChatInputCoachmark(disabled) {
  let closure_0;
  let items;
  let visible;
  _require = undefined;
  dependencyMap = undefined;
  disabled = disabled.disabled;
  const useSelectedDismissibleContent = require("useSelectedDismissibleContent").useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (disabled) {
    items = [];
  } else {
    items = [tmp(2029).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp4 = _slicedToArray(useSelectedDismissibleContent(items), 2);
  _require = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  dependencyMap = tmp6;
  const items1 = [tmp6, tmp4[1]];
  let memo = null;
  if (tmp6) {
    memo = react.useMemo(() => {
      let intl;
      let intl2;
      const obj = {
        title: intl.string(intl3.t.eqI1WA),
        description: intl2.string(intl3.t.nxO3NK),
        position: "top",
        offsetY: 4,
        visible,
        onDismiss() {
          closure_1_0(constants.USER_DISMISS);
        },
        graphic: { type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" }
      };
      intl = intl3.intl;
      intl2 = intl3.intl;
      ({ type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" });
      return obj;
    }, items1);
  }
  return memo;
};
