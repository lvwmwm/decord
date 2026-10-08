// Module ID: 16892
// Function ID: 16893
// Name: useDisallowSwipeExit
// Dependencies: [19, 558, 576, 16624, 2]

// Module 16892 (useDisallowSwipeExit)
import react2 from "react" /* 576 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 16624 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisallowSwipeExit(arg0) {
  let closure_0 = arg0;
  let obj = react2;
  const cResult = obj.c(5);
  const disallowGesture = react.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const context = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let disallowGesture1;
  const obj2 = react;
  if (context != null) {
    disallowGesture1 = context.disallowGesture;
  }
  if (disallowGesture1 == null) {
    disallowGesture1 = null;
  }
  if (cResult[0] === arg0) {
    if (cResult[1] === disallowGesture) {
      let tmp4;
      let tmp5;
      if (cResult[2] === disallowGesture1) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = obj2.useEffect(tmp4, tmp5);
    }
  }
  const fn = function n() {
    const tmp = closure_0;
    if (tmp) {
      let result = disallowGesture.set(true);
      let obj = disallowGesture1;
      if (disallowGesture1 != null) {
        let result1 = obj.set(true);
      }
      return () => {
        const result = disallowGesture.set(false);
        const obj = disallowGesture1;
        if (disallowGesture1 != null) {
          const result1 = obj.set(false);
        }
      };
    }
  };
  const items = [arg0, disallowGesture, disallowGesture1];
  cResult[0] = arg0;
  cResult[1] = disallowGesture;
  cResult[2] = disallowGesture1;
  cResult[3] = fn;
  cResult[4] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useDisallowSwipeExit(arg0) {
  let closure_0 = arg0;
  let obj = react;
  const disallowGesture = react.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const context = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let disallowGesture1;
  if (context != null) {
    disallowGesture1 = context.disallowGesture;
  }
  if (disallowGesture1 == null) {
    disallowGesture1 = null;
  }
  const items = [arg0, disallowGesture, disallowGesture1];
  const effect = obj.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      let result = disallowGesture.set(true);
      let obj = disallowGesture1;
      if (disallowGesture1 != null) {
        let result1 = obj.set(true);
      }
      return () => {
        const result = disallowGesture.set(false);
        const obj = disallowGesture1;
        if (disallowGesture1 != null) {
          const result1 = obj.set(false);
        }
      };
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useDisallowSwipeExit.tsx");

export default tmp2;
