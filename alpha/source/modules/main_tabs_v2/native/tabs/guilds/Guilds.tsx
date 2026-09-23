// Module ID: 16416
// Function ID: 16417
// Name: guilds/Guilds
// Dependencies: [19, 11434, 21, 16417, 4680, 11819, 4533, 15426, 16418, 16766, 15510, 2]

// Module 16416 (guilds/Guilds)
import native from "native" /* 4533 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4680 */;
import QuestsEligibility from "QuestsEligibility" /* 11819 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15426 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16417 */;
import MainChannelsDefault from "MainChannels" /* 16418 */;
import YouBarDefault from "YouBar" /* 16766 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15510);
require = fn;
const YouBarNavigatorScreens = fn(11434).YouBarNavigatorScreens;
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
