// Module ID: 15844
// Function ID: 15845
// Name: HubSideBarProgressOverview
// Dependencies: [19, 9264, 21, 12061, 1127, 11875, 13522, 4801, 12065, 1987, 2]
// Exports: default

// Module 15844 (HubSideBarProgressOverview)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import react from "react" /* 19 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9264 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(12061);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj2 = guild(12061);
  const nextHubProgressStep = obj2.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    let formatToPlainStringResult;
    size = hubProgressBarCompletedSteps.size;
    const tmpResult = guild(12061);
    const hubProgressTitleForStep = tmpResult.getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1127).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj3 = { number: "" + size, total };
      const v9j7xDu = tmp(1127).t["9j7xDu"];
      formatToPlainStringResult = formatToPlainString(v9j7xDu, obj3);
    } else {
      const intl = tmp(1127).intl;
      formatToPlainStringResult = intl.string(tmp(1127).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(11875).MIN_PROGRESS_PERCENT, 100 * size / tmp12);
    return jsx(guild(13522).GuildProgressOverviewView, {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequire(12065, dependencyMap.paths), _false, obj2);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
};
