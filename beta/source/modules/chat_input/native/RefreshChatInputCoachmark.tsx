// Module ID: 12857
// Function ID: 12858
// Name: RefreshChatInputCoachmark
// Dependencies: [32, 19, 4759, 9080, 4746, 4927, 1112, 12858, 5066, 9087, 2]
// Exports: default, useRefreshChatInputCoachmark

// Module 12857 (RefreshChatInputCoachmark)
import intl3 from "intl" /* 1112 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import useCoachmark from "useCoachmark" /* 9087 */;
import AssetRegistryDefault from "AssetRegistry" /* 12858 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const OmnibuttonCoachmarkRive = tmp(5066);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
};
export function useRefreshChatInputCoachmark(disabled) {
  let closure_0;
  let items;
  _require = undefined;
  let visible;
  let reducedMotion;
  let tmp = _require;
  disabled = disabled.disabled;
  const useSelectedDismissibleContent = require("useSelectedDismissibleContent").useSelectedDismissibleContent;
  const tmp3 = require("useSelectedDismissibleContent");
  if (disabled) {
    items = [];
  } else {
    items = [tmp(tmp2[4]).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp4 = _slicedToArray(useSelectedDismissibleContent(items), 2);
  _require = tmp5;
  const tmp6 = tmp4[0] === tmp(reducedMotion[4]).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  visible = tmp6;
  reducedMotion = react.useContext(tmp(tmp2[5]).AccessibilityPreferencesContext).reducedMotion;
  const items1 = [tmp6, tmp4[1], reducedMotion.enabled];
  let memo = null;
  if (tmp6) {
    memo = react.useMemo(() => {
      let intl;
      let intl2;
      let obj3;
      const obj = {
        title: intl.string(intl3.t.eqI1WA),
        description: intl2.string(intl3.t.nxO3NK),
        position: "top",
        offsetY: 4,
        visible,
        onDismiss() {
          closure_1_0(constants.USER_DISMISS);
        },
        graphic: obj3
      };
      intl = intl3.intl;
      intl2 = intl3.intl;
      if (reducedMotion.enabled) {
        obj3 = { type: "image", src: AssetRegistryDefault, aspectRatio: "16/9" };
        const obj2 = { type: "image", src: AssetRegistryDefault, aspectRatio: "16/9" };
      } else {
        obj3 = { type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
      }
      return obj;
    }, items1);
  }
  return memo;
}
