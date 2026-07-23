// Module ID: 15038
// Function ID: 114546
// Name: HubSidebarProgressOverview
// Dependencies: [31, 5714, 33, 11698, 1212, 11507, 12982, 4098, 11702, 1934, 2]
// Exports: default

// Module 15038 (HubSidebarProgressOverview)
import "result";
import items from "items";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = items);
const result = require("jsxProd").fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(11698);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = guild(11698).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = guild(11698).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_4) {
      const intl2 = guild(1212).intl;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.number = "" + size;
      obj.total = closure_4;
      let formatToPlainStringResult = intl2.formatToPlainString(guild(1212).t["9j7xDu"], obj);
    } else {
      const intl = guild(1212).intl;
      formatToPlainStringResult = intl.string(guild(1212).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(guild(11507).MIN_PROGRESS_PERCENT, 100 * size / closure_4);
    obj = {
      onPress() {
          let obj = outer1_1(outer1_2[7]);
          obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(guild(outer1_2[9])(outer1_2[8], outer1_2.paths), outer1_3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(guild(12982).GuildProgressOverviewView, {
      onPress() {
          let obj = outer1_1(outer1_2[7]);
          obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(guild(outer1_2[9])(outer1_2[8], outer1_2.paths), outer1_3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(11698);
};
