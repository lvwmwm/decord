// Module ID: 15862
// Function ID: 15863
// Name: guilds/Guilds
// Dependencies: [19, 10749, 21, 15863, 4717, 10887, 4569, 14840, 15864, 16225, 14924, 2]

// Module 15862 (guilds/Guilds)
import native from "native" /* 4569 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4717 */;
import QuestsEligibility from "QuestsEligibility" /* 10887 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14840 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15863 */;
import MainChannelsDefault from "MainChannels" /* 15864 */;
import YouBarDefault from "YouBar" /* 16225 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(14924);
require = fn;
const YouBarNavigatorScreens = fn(10749).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(function GuildsOnly() {
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp4 = useColorThemeBackgroundDefault();
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  const obj3 = { gradient: tmp4, children: null };
  const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj3.children = hasOwnProperty(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, { children: items });
  return React4(native.ThemeContextProvider, obj3);
}, () => true);
