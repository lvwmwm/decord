// Module ID: 16363
// Function ID: 16364
// Name: guilds/Guilds
// Dependencies: [19, 11419, 21, 558, 568, 16364, 4644, 11644, 15365, 16365, 16715, 15449, 4503, 2]

// Module 16363 (guilds/Guilds)
import c from "c" /* 568 */;
import native from "native" /* 4503 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4644 */;
import QuestsEligibility from "QuestsEligibility" /* 11644 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15365 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16364 */;
import MainChannelsDefault from "MainChannels" /* 16365 */;
import YouBarDefault from "YouBar" /* 16715 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15449);
require = fn;
const YouBarNavigatorScreens = fn(11419).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp6 = useColorThemeBackgroundDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = tmp(11644).getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    let first = isEligibleForQuests;
    const tmpResult = tmp(11644);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [React4(tmp5(16365), {}), React4(tmp5(16715), {}), ];
    if (first) {
      first = tmp11(tmp5(15449), {});
    }
    const obj3 = { children: null };
    items[2] = first;
    obj3.children = items;
    const tmp10Result = hasOwnProperty(tmp(15365).QuestDockExternalCoordinationContextProvider, obj3);
    cResult[1] = tmp10Result;
    let tmp9 = tmp10Result;
    tmp11 = React4;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj4 = { gradient: tmp6, children: tmp9 };
    const tmp15 = React4(tmp(4503).ThemeContextProvider, obj4);
    cResult[2] = tmp6;
    cResult[3] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  return tmp13;
}) : (() => {
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
}), () => true);
