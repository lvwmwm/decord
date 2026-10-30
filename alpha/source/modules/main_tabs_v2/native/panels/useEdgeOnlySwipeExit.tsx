// Module ID: 12055
// Function ID: 12056
// Name: useEdgeOnlySwipeExit
// Dependencies: [19, 12056, 2]
// Exports: default

// Module 12055 (useEdgeOnlySwipeExit)
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 12056 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx");

export default function useEdgeOnlySwipeExit(arg0) {
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
};
