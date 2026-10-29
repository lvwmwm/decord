// Module ID: 11867
// Function ID: 11868
// Name: useEdgeOnlySwipeExit
// Dependencies: [19, 558, 576, 11868, 2]

// Module 11867 (useEdgeOnlySwipeExit)
import react2 from "react" /* 576 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 11868 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEdgeOnlySwipeExit(arg0) {
  let closure_0 = arg0;
  let obj = react2;
  const cResult = obj.c(5);
  const edgeSwipeOnly = react.useContext(MainTabsNavigatorPanelContextDefault).edgeSwipeOnly;
  const context = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let edgeSwipeOnly1;
  const obj2 = react;
  if (context != null) {
    edgeSwipeOnly1 = context.edgeSwipeOnly;
  }
  if (edgeSwipeOnly1 == null) {
    edgeSwipeOnly1 = null;
  }
  if (cResult[0] === arg0) {
    if (cResult[1] === edgeSwipeOnly) {
      let tmp4;
      let tmp5;
      if (cResult[2] === edgeSwipeOnly1) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = obj2.useEffect(tmp4, tmp5);
    }
  }
  const fn = function s() {
    const tmp = closure_0;
    if (tmp) {
      let result = edgeSwipeOnly.set(true);
      let obj = edgeSwipeOnly1;
      if (edgeSwipeOnly1 != null) {
        let result1 = obj.set(true);
      }
      return () => {
        const result = edgeSwipeOnly.set(false);
        const obj = edgeSwipeOnly1;
        if (edgeSwipeOnly1 != null) {
          const result1 = obj.set(false);
        }
      };
    }
  };
  const items = [arg0, edgeSwipeOnly, edgeSwipeOnly1];
  cResult[0] = arg0;
  cResult[1] = edgeSwipeOnly;
  cResult[2] = edgeSwipeOnly1;
  cResult[3] = fn;
  cResult[4] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useEdgeOnlySwipeExit(arg0) {
  let closure_0 = arg0;
  let obj = react;
  const edgeSwipeOnly = react.useContext(MainTabsNavigatorPanelContextDefault).edgeSwipeOnly;
  const context = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let edgeSwipeOnly1;
  if (context != null) {
    edgeSwipeOnly1 = context.edgeSwipeOnly;
  }
  if (edgeSwipeOnly1 == null) {
    edgeSwipeOnly1 = null;
  }
  const items = [arg0, edgeSwipeOnly, edgeSwipeOnly1];
  const effect = obj.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      let result = edgeSwipeOnly.set(true);
      let obj = edgeSwipeOnly1;
      if (edgeSwipeOnly1 != null) {
        let result1 = obj.set(true);
      }
      return () => {
        const result = edgeSwipeOnly.set(false);
        const obj = edgeSwipeOnly1;
        if (edgeSwipeOnly1 != null) {
          const result1 = obj.set(false);
        }
      };
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx");

export default tmp2;
