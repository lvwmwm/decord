// Module ID: 18912
// Function ID: 18913
// Name: useGuildEligibleForStageChannels
// Dependencies: [4885, 1072, 504, 2]
// Exports: isGuildEligibleForStageChannels, useGuildEligibleForStageChannels

// Module 18912 (useGuildEligibleForStageChannels)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export function isGuildEligibleForStageChannels(id) {
  let obj;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore];
    tmp = items;
  }
  [obj] = tmp;
  const _Boolean = Boolean;
  const guild = obj.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return _Boolean(hasItem);
}
export function useGuildEligibleForStageChannels(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  let items = [GuildStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let obj;
    const items = [GuildStore];
    [obj] = items;
    const _Boolean = Boolean;
    const guild = obj.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    return _Boolean(hasItem);
  }, items1);
}
