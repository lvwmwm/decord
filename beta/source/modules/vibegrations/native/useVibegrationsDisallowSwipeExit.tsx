// Module ID: 16278
// Function ID: 16279
// Name: useVibegrationsDisallowSwipeExit
// Dependencies: [19, 15635, 2]
// Exports: default

// Module 16278 (useVibegrationsDisallowSwipeExit)
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 15635 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

let result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsDisallowSwipeExit.tsx");

export default function useVibegrationsDisallowSwipeExit(arg0) {
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
};
