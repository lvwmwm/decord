// Module ID: 16110
// Function ID: 16111
// Name: guilds/Guilds
// Dependencies: [19, 11222, 21, 16111, 4490, 11621, 4347, 15180, 16112, 16460, 15264, 2]

// Module 16110 (guilds/Guilds)
import native from "native" /* 4347 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4490 */;
import QuestsEligibility from "QuestsEligibility" /* 11621 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15180 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16111 */;
import MainChannelsDefault from "MainChannels" /* 16112 */;
import YouBarDefault from "YouBar" /* 16460 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15264);
require = fn;
const YouBarNavigatorScreens = fn(11222).YouBarNavigatorScreens;
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
