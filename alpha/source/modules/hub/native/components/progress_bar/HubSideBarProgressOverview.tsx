// Module ID: 17776
// Function ID: 17777
// Name: HubSideBarProgressOverview
// Dependencies: [19, 13103, 21, 13484, 1113, 13270, 15116, 5006, 13488, 2121, 2]
// Exports: default

// Module 17776 (HubSideBarProgressOverview)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import react from "react" /* 19 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 13103 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(13484);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj2 = guild(13484);
  const nextHubProgressStep = obj2.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    let formatToPlainStringResult;
    size = hubProgressBarCompletedSteps.size;
    const tmpResult = guild(13484);
    const hubProgressTitleForStep = tmpResult.getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1113).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj3 = { number: "" + size, total };
      const v9j7xDu = tmp(1113).t["9j7xDu"];
      formatToPlainStringResult = formatToPlainString(v9j7xDu, obj3);
    } else {
      const intl = tmp(1113).intl;
      formatToPlainStringResult = intl.string(tmp(1113).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(13270).MIN_PROGRESS_PERCENT, 100 * size / tmp12);
    return jsx(guild(15116).GuildProgressOverviewView, {
      onPress: function handlePress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequire(13488, dependencyMap.paths), _false, obj2);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
};
