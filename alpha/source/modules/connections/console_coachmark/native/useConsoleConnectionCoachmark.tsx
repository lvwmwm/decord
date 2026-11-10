// Module ID: 19253
// Function ID: 19254
// Name: useConsoleConnectionCoachmark
// Dependencies: [32, 19, 4988, 19254, 7644, 4975, 1113, 575, 5376, 19255, 2118, 19257, 2]
// Exports: useConsoleConnectionCoachmark

// Module 19253 (useConsoleConnectionCoachmark)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4988 */;
import _modDef19257 from "module_19257" /* 19257 */;
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
      items = [tmp(4975).DismissibleContent.CONSOLE_CONNECTION_COACHMARK];
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
