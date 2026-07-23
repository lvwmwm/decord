// Module ID: 15515
// Function ID: 119640
// Name: isGuildEligibleForStageChannels
// Dependencies: [1838, 653, 566, 2]
// Exports: useGuildEligibleForStageChannels

// Module 15515 (isGuildEligibleForStageChannels)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
function isGuildEligibleForStageChannels(id) {
  let obj;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [_createForOfIteratorHelperLoose];
    tmp = items;
  }
  [obj] = tmp;
  const guild = obj.getGuild(id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return Boolean(hasItem);
}
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export { isGuildEligibleForStageChannels };
export const useGuildEligibleForStageChannels = function useGuildEligibleForStageChannels(arg0) {
  const _require = arg0;
  let items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_2];
    return outer1_4(closure_0, items);
  }, items1);
};
