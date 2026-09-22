// Module ID: 13995
// Function ID: 13996
// Name: openGuildActionSheet
// Dependencies: [1074, 1982, 1240, 10423, 4603, 13996, 1896, 14054, 14060, 2]
// Exports: default

// Module 13995 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
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
      tmp3(4603).openLazy(tmp(1896)(13996, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj4);
      const tmp3Result = tmp3(4603);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = tmp3(4603).openLazy;
      const tmpResult2 = tmp(1896);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        openLazy(tmpResult2(14054, tmp2.paths), "GuildActionSheet:" + id.id, obj5);
        const tmpResult1Result = tmpResult2(14054, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        openLazy(tmpResult2(14060, tmp2.paths), "GuildActionSheet:" + id.id, obj6);
        const tmpResult1Result1 = tmpResult2(14060, tmp2.paths);
      }
      const tmp3Result2 = tmp3(4603);
    }
    tmpResult = tmp(10423);
  }
};
