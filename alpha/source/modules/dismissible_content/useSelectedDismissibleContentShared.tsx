// Module ID: 9566
// Function ID: 9567
// Name: useSelectedDismissibleContentShared
// Dependencies: [19, 5142, 5152, 5143, 5146, 2]
// Exports: useSelectedDismissibleContentShared

// Module 9566 (useSelectedDismissibleContentShared)
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import react_mod from "react" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, lastDismissed;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export function useSelectedDismissibleContentShared(visibleContent, markAsDismissed, flag, guildId) {
  _require = visibleContent;
  dependencyMap = markAsDismissed;
  if (flag === undefined) {
    flag = false;
  }
  react = guildId;
  let closure_3;
  let tmp = null != visibleContent && !flag;
  if (tmp) {
    let tmp2 = _require;
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(visibleContent);
  }
  closure_3 = tmp;
  const items = [tmp, markAsDismissed, visibleContent, guildId];
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
          guildId = undefined;
          if (lastDismissed2 != null) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== closure_1_2;
        }
        tmp6 = result;
      }
      tmp = tmp6;
    }
    if (tmp) {
      closure_1_1(constants.AUTO_DISMISS, true);
    }
  }, items);
}
