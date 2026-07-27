// Module ID: 12978
// Function ID: 100670
// Name: openGuildActionSheet
// Dependencies: [653, 1841, 675, 9290, 4099, 12979, 1935, 13037, 13043, 2]
// Exports: default

// Module 12978 (openGuildActionSheet)
import ME from "ME";

let closure_3;
let closure_4;
({ AnalyticEvents: closure_3, GuildFeatures: closure_4 } = ME);
const result = require("expandLocation").fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = require(1841) /* isFavoritesGuildId */;
  if (!obj.isFavoritesGuildId(id.id)) {
    let obj1 = importDefault(675);
    obj = { type: "Guild Profile", guild_id: id.id };
    obj1.track(constants.OPEN_POPOUT, obj);
    if (obj4.shouldNSFWGateGuild(id.id)) {
      obj = { guild: id };
      importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(12979, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj);
      const obj7 = importDefault(4099);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = importDefault(4099).openLazy;
      const tmp12 = require(1935) /* maybeLoadBundle */;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        let tmp12Result = tmp12(13037, tmp9.paths);
        obj1 = { guild: id, expanded: flag };
        openLazy(tmp12Result, "GuildActionSheet:" + id.id, obj1);
      } else {
        const _HermesInternal = HermesInternal;
        tmp12Result = tmp12(13043, tmp9.paths);
        const obj2 = { guild: id, expanded: flag };
        openLazy(tmp12Result, "GuildActionSheet:" + id.id, obj2);
      }
      const tmp10 = importDefault(4099);
    }
    obj4 = require(9290) /* isNSFWInvite */;
  }
};
