// Module ID: 9383
// Function ID: 9384
// Name: useGameProfileSummaryExpansion
// Dependencies: [32, 19, 9320, 2]
// Exports: useGameProfileSummaryExpansion

// Module 9383 (useGameProfileSummaryExpansion)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileSummaryExpansion.tsx");

export function useGameProfileSummaryExpansion(trackAction) {
  let callback1;
  let closure_2;
  let first;
  [first, _slicedToArray] = callback1.useState("full");
  const items = [trackAction, first];
  const callback = callback1.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_2((arg0) => {
      let tmp = arg0;
      if ("expanded" !== arg0) {
        let str = "full";
        if (closure_0) {
          str = "collapsed";
        }
        tmp = str;
      }
      return tmp;
    });
  }, []);
  callback1 = callback1.useCallback((arg0) => {
    let str = "collapsed";
    if (arg0) {
      str = "expanded";
    }
    const tmp = "full" !== first && first !== str;
    if (tmp) {
      const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
      trackAction(arg0 ? GameProfileTrackActionActions.ShowMore : GameProfileTrackActionActions.ShowLess);
      closure_2(str);
    }
  }, items);
  const items1 = [callback1, first];
  const obj = { isCollapsed: "collapsed" === first, isExpanded: "expanded" === first, showToggle: "full" !== first, setHasOverflow: callback, setExpanded: callback1, toggleExpanded: callback1.useCallback(() => callback1("expanded" !== first), items1) };
  return obj;
}
