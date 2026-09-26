// Module ID: 16355
// Function ID: 16356
// Name: guilds/Guilds
// Dependencies: [19, 11381, 21, 16356, 4641, 11768, 4498, 15369, 16357, 16706, 15453, 2]

// Module 16355 (guilds/Guilds)
import native from "native" /* 4498 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4641 */;
import QuestsEligibility from "QuestsEligibility" /* 11768 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15369 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16356 */;
import MainChannelsDefault from "MainChannels" /* 16357 */;
import YouBarDefault from "YouBar" /* 16706 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15453);
require = fn;
const YouBarNavigatorScreens = fn(11381).YouBarNavigatorScreens;
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
