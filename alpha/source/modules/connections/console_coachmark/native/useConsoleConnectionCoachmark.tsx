// Module ID: 19048
// Function ID: 19049
// Name: useConsoleConnectionCoachmark
// Dependencies: [32, 19, 4858, 19049, 9519, 4845, 1112, 575, 5226, 19050, 2119, 19052, 2]
// Exports: useConsoleConnectionCoachmark

// Module 19048 (useConsoleConnectionCoachmark)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import _modDef19052 from "module_19052" /* 19052 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/connections/console_coachmark/native/useConsoleConnectionCoachmark.tsx");

export function useConsoleConnectionCoachmark(disabled) {
  let closure_0;
  let paths;
  _require = undefined;
  let visible;
  disabled = disabled.disabled;
  let obj = require("ConsoleConnectionCoachmarkExperiment");
  const isConsoleConnectionCoachmarkEligible = obj.useIsConsoleConnectionCoachmarkEligible("YouSettingsCoachmark");
  require("useSelectedDismissibleContent");
  if (isConsoleConnectionCoachmarkEligible) {
    let items;
    if (!disabled) {
      items = [tmp(4845).DismissibleContent.CONSOLE_CONNECTION_COACHMARK];
    }
    const tmp7 = _slicedToArray(tmp5(items), 2);
    _require = tmp8;
    const tmp9 = tmp7[0] === require("dismissible_content").DismissibleContent.CONSOLE_CONNECTION_COACHMARK;
    visible = tmp9;
    const items1 = [tmp9, tmp7[1]];
    let tmp12 = null;
    if (tmp9) {
      let obj2 = { props: tmp11 };
      tmp12 = obj2;
    }
    return tmp12;
  }
  items = [];
}
