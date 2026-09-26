// Module ID: 15648
// Function ID: 15649
// Name: guilds/Guilds
// Dependencies: [19, 10549, 21, 15649, 4688, 10682, 4540, 14628, 15650, 16002, 14714, 2]

// Module 15648 (guilds/Guilds)
import native from "native" /* 4540 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import QuestsEligibility from "QuestsEligibility" /* 10682 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14628 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15649 */;
import MainChannelsDefault from "MainChannels" /* 15650 */;
import YouBarDefault from "YouBar" /* 16002 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(14714);
require = fn;
const YouBarNavigatorScreens = fn(10549).YouBarNavigatorScreens;
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
