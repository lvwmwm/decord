// Module ID: 11436
// Function ID: 11437
// Name: useIsChannelFullyOpen
// Dependencies: [19, 11431, 2]
// Exports: default

// Module 11436 (useIsChannelFullyOpen)
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11431 */;
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
