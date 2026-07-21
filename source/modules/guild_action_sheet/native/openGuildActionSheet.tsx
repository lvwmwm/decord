// Module ID: 12793
// Function ID: 98026
// Name: openGuildActionSheet
// Dependencies: []
// Exports: default

// Module 12793 (openGuildActionSheet)
const _module = require(dependencyMap[0]);
({ AnalyticEvents: closure_3, GuildFeatures: closure_4 } = _module);
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = require(dependencyMap[1]);
  if (!obj.isFavoritesGuildId(id.id)) {
    let obj1 = importDefault(dependencyMap[2]);
    obj = { type: "Guild Profile", guild_id: id.id };
    obj1.track(constants.OPEN_POPOUT, obj);
    if (obj4.shouldNSFWGateGuild(id.id)) {
      obj = { guild: id };
      importDefault(dependencyMap[4]).openLazy(require(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj);
      const obj7 = importDefault(dependencyMap[4]);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = importDefault(dependencyMap[4]).openLazy;
      const tmp12 = require(dependencyMap[6]);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        let tmp12Result = tmp12(tmp9[7], tmp9.paths);
        obj1 = { guild: id, expanded: flag };
        openLazy(tmp12Result, "GuildActionSheet:" + id.id, obj1);
      } else {
        const _HermesInternal = HermesInternal;
        tmp12Result = tmp12(tmp9[8], tmp9.paths);
        const obj2 = { guild: id, expanded: flag };
        openLazy(tmp12Result, "GuildActionSheet:" + id.id, obj2);
      }
      const tmp10 = importDefault(dependencyMap[4]);
    }
    const obj4 = require(dependencyMap[3]);
  }
};
