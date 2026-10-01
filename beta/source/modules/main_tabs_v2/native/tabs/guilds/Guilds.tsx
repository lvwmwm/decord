// Module ID: 15646
// Function ID: 15647
// Name: guilds/Guilds
// Dependencies: [19, 10549, 21, 15647, 4688, 10682, 4540, 14628, 15648, 16000, 14712, 2]

// Module 15646 (guilds/Guilds)
import native from "native" /* 4540 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import MainTabsConstants from "MainTabsConstants" /* 10549 */;
import QuestsEligibility from "QuestsEligibility" /* 10682 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14628 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15647 */;
import MainChannelsDefault from "MainChannels" /* 15648 */;
import YouBarDefault from "YouBar" /* 16000 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp3;
const QuestDockDefault = tmp3(14712);
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(function GuildsOnly() {
  let QuestDockExternalCoordinationContextProvider;
  let items;
  let tmp7;
  const obj = TabsPerformanceTracker;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp4 = useColorThemeBackgroundDefault();
  const obj2 = QuestsEligibility;
  let isEligibleForQuests = obj2.getIsEligibleForQuests();
  const obj3 = { gradient: tmp4, children: tmp7(QuestDockExternalCoordinationContextProvider, { children: items }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  QuestDockExternalCoordinationContextProvider = QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider;
  items = [React3(MainChannelsDefault, {}), React3(YouBarDefault, {}), ];
  tmp7 = hasOwnProperty;
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockDefault, {});
  }
  items[2] = isEligibleForQuests;
  return React3(ThemeContextProvider, obj3);
}, () => true);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
