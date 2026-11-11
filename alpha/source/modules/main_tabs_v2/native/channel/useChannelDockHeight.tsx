// Module ID: 11946
// Function ID: 11947
// Name: useChannelDockHeight
// Dependencies: [19, 11947, 11950, 2]
// Exports: default

// Module 11946 (useChannelDockHeight)
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11947 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11950 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelDockHeight.tsx");

export default function useChannelDockHeight() {
  let num = 0;
  const tmp = useVoicePanelDockHeightDefault();
  if (react.useContext(MainTabsNavigatorPanelContextDefault).isInMainTabs) {
    num = tmp;
  }
  return num;
};
