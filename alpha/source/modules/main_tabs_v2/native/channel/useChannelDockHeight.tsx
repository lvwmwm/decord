// Module ID: 11435
// Function ID: 11436
// Name: useChannelDockHeight
// Dependencies: [19, 11436, 11439, 2]
// Exports: default

// Module 11435 (useChannelDockHeight)
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11436 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11439 */;
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
