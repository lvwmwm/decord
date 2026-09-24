// Module ID: 16440
// Function ID: 16441
// Name: guilds/Guilds
// Dependencies: [19, 11440, 21, 16441, 4682, 11825, 4535, 15435, 16442, 16790, 15519, 2]

// Module 16440 (guilds/Guilds)
import native from "native" /* 4535 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4682 */;
import QuestsEligibility from "QuestsEligibility" /* 11825 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15435 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16441 */;
import MainChannelsDefault from "MainChannels" /* 16442 */;
import YouBarDefault from "YouBar" /* 16790 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15519);
require = fn;
const YouBarNavigatorScreens = fn(11440).YouBarNavigatorScreens;
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
