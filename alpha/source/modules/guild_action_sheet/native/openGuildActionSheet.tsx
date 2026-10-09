// Module ID: 14057
// Function ID: 14058
// Name: openGuildActionSheet
// Dependencies: [1085, 2089, 1265, 9431, 5055, 14058, 2000, 14122, 14128, 2]
// Exports: default

// Module 14057 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import FavoritesUtils from "FavoritesUtils" /* 2089 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9431 */;
import Constants from "Constants" /* 1085 */;
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
      tmp3Result.openLazy(asyncRequire(14058, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj4);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmpResult2 = asyncRequire;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        const tmpResult1Result = tmpResult2(14122, dependencyMap.paths);
        openLazy(tmpResult1Result, "GuildActionSheet:" + id.id, obj5);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        const tmpResult1Result1 = tmpResult2(14128, dependencyMap.paths);
        openLazy(tmpResult1Result1, "GuildActionSheet:" + id.id, obj6);
      }
    }
  }
};
