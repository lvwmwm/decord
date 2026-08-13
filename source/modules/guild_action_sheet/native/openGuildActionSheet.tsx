// Module ID: 13323
// Function ID: 13324
// Name: openGuildActionSheet
// Dependencies: [676, 1913, 698, 8728, 4310, 13324, 2007, 13382, 13388, 2]
// Exports: default

// Module 13323 (openGuildActionSheet)
import ME from "ME";

let c3;
let c4;
({ AnalyticEvents: c3, GuildFeatures: c4 } = ME);
const result = require("expandEventProperties").fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = require(1913) /* getFavoritesAwareGuildName */;
  if (!obj.isFavoritesGuildId(id.id)) {
    let obj1 = importDefault(698);
    obj = { type: "Guild Profile", guild_id: null };
    obj[1] = id.id;
    obj1.track(constants.OPEN_POPOUT, obj);
    let tmpResult = tmp(8728);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = tmp3(4310);
      obj = { guild: null };
      obj[0] = id;
      tmp3Result.openLazy(tmp(2007)(13324, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = tmp3(4310);
      const openLazy = tmp3Result.openLazy;
      tmpResult = tmp(2007);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: null, expanded: null };
        obj1[0] = id;
        obj1[1] = flag;
        openLazy(tmpResult(13382, tmp2.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13382, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: null, expanded: null };
        obj2[0] = id;
        obj2[1] = flag;
        openLazy(tmpResult(13388, tmp2.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13388, tmp2.paths);
      }
    }
  }
};
