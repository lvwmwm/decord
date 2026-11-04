// Module ID: 15978
// Function ID: 15979
// Name: openGuildActionSheet
// Dependencies: [1072, 5015, 1252, 10151, 5382, 15979, 2123, 16043, 16049, 2]
// Exports: default

// Module 15978 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import FavoritesUtils from "FavoritesUtils" /* 5015 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10151 */;
import Constants from "Constants" /* 1072 */;
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
      tmp3Result.openLazy(asyncRequire(15979, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj4);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmpResult2 = asyncRequire;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        const tmpResult1Result = tmpResult2(16043, dependencyMap.paths);
        openLazy(tmpResult1Result, "GuildActionSheet:" + id.id, obj5);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        const tmpResult1Result1 = tmpResult2(16049, dependencyMap.paths);
        openLazy(tmpResult1Result1, "GuildActionSheet:" + id.id, obj6);
      }
    }
  }
};
