// Module ID: 16240
// Function ID: 16241
// Name: guilds/Guilds
// Dependencies: [19, 11182, 21, 558, 576, 16241, 4932, 10576, 15178, 16242, 16604, 15262, 4787, 2]

// Module 16240 (guilds/Guilds)
import react2 from "react" /* 576 */;
import native from "native" /* 4787 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4932 */;
import QuestsEligibility from "QuestsEligibility" /* 10576 */;
import MainTabsConstants from "MainTabsConstants" /* 11182 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15178 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16241 */;
import MainChannelsDefault from "MainChannels" /* 16242 */;
import YouBarDefault from "YouBar" /* 16604 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp3;
const QuestDockDefault = tmp3(15262);
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsOnly() {
  let first;
  let tmp13;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = TabsPerformanceTracker;
  const trackTabPerformance = obj2.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp6 = useColorThemeBackgroundDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = QuestsEligibility;
    const isEligibleForQuests = tmpResult.getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    first = isEligibleForQuests;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const QuestDockExternalCoordinationContextProvider = tmp(15178).QuestDockExternalCoordinationContextProvider;
    const items = [React3(MainChannelsDefault, {}), React3(YouBarDefault, {}), ];
    const tmp10 = hasOwnProperty;
    const tmp11 = React3;
    if (first) {
      first = tmp11(tmp5(15262), {});
    }
    const obj3 = { children: items };
    items[2] = first;
    const tmp10Result = tmp10(QuestDockExternalCoordinationContextProvider, obj3);
    cResult[1] = tmp10Result;
    tmp9 = tmp10Result;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj4 = { gradient: tmp6, children: tmp9 };
    const tmp15 = React3(native.ThemeContextProvider, obj4);
    cResult[2] = tmp6;
    cResult[3] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  return tmp13;
}) : (function GuildsOnly() {
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
}), () => true);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
