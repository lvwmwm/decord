// Module ID: 12914
// Function ID: 100215
// Name: openGuildActionSheet
// Dependencies: [653, 5077, 675, 9348, 4098, 12915, 1934, 12973, 12979, 2]
// Exports: default

// Module 12914 (openGuildActionSheet)
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
  let obj = require(5077) /* isFavoritesGuildId */;
  if (!obj.isFavoritesGuildId(id.id)) {
    let obj1 = importDefault(675);
    obj = { type: "Guild Profile", guild_id: id.id };
    obj1.track(constants.OPEN_POPOUT, obj);
    if (obj4.shouldNSFWGateGuild(id.id)) {
      obj = { guild: id };
      importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(12915, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj);
      const obj7 = importDefault(4098);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = importDefault(4098).openLazy;
      const tmp12 = require(1934) /* maybeLoadBundle */;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        let tmp12Result = tmp12(12973, tmp9.paths);
        obj1 = { guild: id, expanded: flag };
        openLazy(tmp12Result, "GuildActionSheet:" + id.id, obj1);
      } else {
        const _HermesInternal = HermesInternal;
        tmp12Result = tmp12(12979, tmp9.paths);
        const obj2 = { guild: id, expanded: flag };
        openLazy(tmp12Result, "GuildActionSheet:" + id.id, obj2);
      }
      const tmp10 = importDefault(4098);
    }
    obj4 = require(9348) /* isNSFWInvite */;
  }
};
