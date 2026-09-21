// Module ID: 14176
// Function ID: 14177
// Name: openGuildActionSheet
// Dependencies: [1074, 2066, 1241, 10552, 4723, 14177, 1980, 14235, 14241, 2]
// Exports: default

// Module 14176 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ AnalyticEvents: c3, GuildFeatures: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (!obj.isFavoritesGuildId(id.id)) {
    const obj3 = { type: "Guild Profile", guild_id: id.id };
    AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, obj3);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      const obj4 = { guild: id };
      tmp3(4723).openLazy(tmp(1980)(14177, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj4);
      const tmp3Result = tmp3(4723);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = tmp3(4723).openLazy;
      const tmpResult2 = tmp(1980);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        openLazy(tmpResult2(14235, tmp2.paths), "GuildActionSheet:" + id.id, obj5);
        const tmpResult1Result = tmpResult2(14235, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        openLazy(tmpResult2(14241, tmp2.paths), "GuildActionSheet:" + id.id, obj6);
        const tmpResult1Result1 = tmpResult2(14241, tmp2.paths);
      }
      const tmp3Result2 = tmp3(4723);
    }
    tmpResult = tmp(10552);
  }
};
