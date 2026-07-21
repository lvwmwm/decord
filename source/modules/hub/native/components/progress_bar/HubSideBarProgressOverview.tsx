// Module ID: 14914
// Function ID: 112335
// Name: HubSidebarProgressOverview
// Dependencies: []
// Exports: default

// Module 14914 (HubSidebarProgressOverview)
importAll(dependencyMap[0]);
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[3]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = arg1(dependencyMap[3]).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = arg1(dependencyMap[3]).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_4) {
      const intl2 = arg1(dependencyMap[4]).intl;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.number = "" + size;
      obj.total = closure_4;
      let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[4]).t.9j7xDu, obj);
    } else {
      const intl = arg1(dependencyMap[4]).intl;
      formatToPlainStringResult = intl.string(arg1(dependencyMap[4]).t.+Gyklt);
    }
    const _Math = Math;
    const bound = Math.max(arg1(dependencyMap[5]).MIN_PROGRESS_PERCENT, 100 * size / closure_4);
    obj = {
      onPress() {
          let obj = callback(paths[7]);
          obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(guild(paths[9])(paths[8], paths.paths), closure_3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(arg1(dependencyMap[6]).GuildProgressOverviewView, obj);
  }
  const obj2 = arg1(dependencyMap[3]);
};
