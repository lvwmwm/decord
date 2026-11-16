// Module ID: 11411
// Function ID: 11412
// Name: useChannelDockHeight
// Dependencies: [19, 11412, 11415, 2]
// Exports: default

// Module 11411 (useChannelDockHeight)
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11412 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11415 */;
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
