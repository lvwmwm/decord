// Module ID: 5805
// Function ID: 49653
// Name: useSelectedDismissibleContentShared
// Dependencies: [31, 1338, 1345, 1339, 1335, 2]
// Exports: useSelectedDismissibleContentShared

// Module 5805 (useSelectedDismissibleContentShared)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
let result = require("ContentDismissActionType").fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, id) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  const React = id;
  let c3;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _require(1339).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  c3 = tmp;
  const items = [tmp, arg1, arg0, id];
  const effect = React.useEffect(() => () => {
    let tmp = outer1_3;
    if (outer1_3) {
      const lastDismissed = c3.lastDismissed;
      let content;
      if (null != lastDismissed) {
        content = lastDismissed.content;
      }
      let tmp6 = content !== outer1_0;
      if (!tmp6) {
        let result = callback(table[4]).isGuildDismissibleContent(outer1_0);
        if (result) {
          const lastDismissed2 = c3.lastDismissed;
          let guildId;
          if (null != lastDismissed2) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== outer1_2;
        }
        tmp6 = result;
        const obj = callback(table[4]);
      }
      tmp = tmp6;
    }
    if (tmp) {
      outer1_1(outer2_4.AUTO_DISMISS, true);
    }
  }, items);
};
