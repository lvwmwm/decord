// Module ID: 15129
// Function ID: 15130
// Name: openGuildActionSheet
// Dependencies: [1071, 4787, 1255, 11290, 5127, 15130, 2119, 15198, 15204, 2]
// Exports: default

// Module 15129 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 11290 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AnalyticEvents: c3, GuildFeatures: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const obj = FavoritesUtils;
  if (!obj.isFavoritesGuildId(id.id)) {
    const obj3 = { type: "Guild Profile", guild_id: id.id };
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(constants.OPEN_POPOUT, obj3);
    const tmpResult = age_gate_AgeGateUtils;
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      const obj4 = { guild: id };
      const tmp3Result = ActionSheetActionCreatorsDefault;
      tmp3Result.openLazy(asyncRequire(15130, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj4);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmpResult2 = asyncRequire;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        const tmpResult1Result = tmpResult2(15198, dependencyMap.paths);
        openLazy(tmpResult1Result, "GuildActionSheet:" + id.id, obj5);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        const tmpResult1Result1 = tmpResult2(15204, dependencyMap.paths);
        openLazy(tmpResult1Result1, "GuildActionSheet:" + id.id, obj6);
      }
    }
  }
};
