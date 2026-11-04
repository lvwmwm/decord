// Module ID: 11427
// Function ID: 11428
// Name: useChannelDockHeight
// Dependencies: [19, 11428, 11431, 2]
// Exports: default

// Module 11427 (useChannelDockHeight)
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11428 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11431 */;
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
