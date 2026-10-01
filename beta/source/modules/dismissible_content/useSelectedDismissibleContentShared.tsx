// Module ID: 6809
// Function ID: 6810
// Name: useSelectedDismissibleContentShared
// Dependencies: [19, 2033, 2042, 2034, 2030, 2]
// Exports: useSelectedDismissibleContentShared

// Module 6809 (useSelectedDismissibleContentShared)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import react_mod from "react" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2033 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, lastDismissed;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, id) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  react = id;
  let closure_3;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    let tmp2 = _require;
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  closure_3 = tmp;
  const items = [tmp, arg1, arg0, id];
  const effect = react.useEffect(() => () => {
    let tmp = closure_1_3;
    if (tmp) {
      lastDismissed = lastDismissed.lastDismissed;
      let content;
      const tmp2 = lastDismissed;
      if (lastDismissed != null) {
        content = lastDismissed.content;
      }
      let tmp6 = content !== closure_1_0;
      if (!tmp6) {
        const obj = closure_0(closure_1[4]);
        let result = obj.isGuildDismissibleContent(tmp5);
        if (result) {
          const lastDismissed2 = tmp2.lastDismissed;
          let guildId;
          if (lastDismissed2 != null) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== id;
        }
        tmp6 = result;
      }
      tmp = tmp6;
    }
    if (tmp) {
      closure_1_1(constants.AUTO_DISMISS, true);
    }
  }, items);
};
