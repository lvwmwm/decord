// Module ID: 18217
// Function ID: 18218
// Name: HubSideBarProgressOverview
// Dependencies: [19, 9112, 21, 14187, 1114, 13997, 15762, 5253, 14191, 1995, 2]
// Exports: default

// Module 18217 (HubSideBarProgressOverview)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9112 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(14187);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj2 = guild(14187);
  const nextHubProgressStep = obj2.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    let formatToPlainStringResult;
    size = hubProgressBarCompletedSteps.size;
    const tmpResult = guild(14187);
    const hubProgressTitleForStep = tmpResult.getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1114).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj3 = { number: "" + size, total };
      const v9j7xDu = tmp(1114).t["9j7xDu"];
      formatToPlainStringResult = formatToPlainString(v9j7xDu, obj3);
    } else {
      const intl = tmp(1114).intl;
      formatToPlainStringResult = intl.string(tmp(1114).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(13997).MIN_PROGRESS_PERCENT, 100 * size / tmp12);
    return jsx(guild(15762).GuildProgressOverviewView, {
      onPress: function handlePress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequire(14191, dependencyMap.paths), _false, obj2);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
};
