// Module ID: 11248
// Function ID: 11249
// Name: useIsChannelFullyOpen
// Dependencies: [19, 11243, 2]
// Exports: default

// Module 11248 (useIsChannelFullyOpen)
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11243 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useIsChannelFullyOpen.tsx");

export default function useIsChannelFullyOpen() {
  let isInMainTabs;
  let translateX;
  const context = react.useContext(MainTabsNavigatorPanelContextDefault);
  ({ isInMainTabs, translateX } = context);
  let tmp2 = !isInMainTabs;
  if (isInMainTabs) {
    tmp2 = 0 === translateX.get();
  }
  return tmp2;
};
