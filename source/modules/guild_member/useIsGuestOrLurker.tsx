// Module ID: 10777
// Function ID: 83733
// Name: _isGuestOrLurkerInGuild
// Dependencies: [1917, 1838, 653, 566, 2]
// Exports: default, isGuestOrLurkerInGuild

// Module 10777 (_isGuestOrLurkerInGuild)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
function _isGuestOrLurkerInGuild(guild_id, id, _createForOfIteratorHelperLoose, _isNativeReflectConstruct) {
  const guild = _createForOfIteratorHelperLoose.getGuild(guild_id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.CONFERENCE);
  }
  let isGuestOrLurkerResult = true !== hasItem;
  if (isGuestOrLurkerResult) {
    isGuestOrLurkerResult = _isNativeReflectConstruct.isGuestOrLurker(guild_id, id);
  }
  return isGuestOrLurkerResult;
}
const result = require("ME").fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => outer1_5(closure_0, closure_1, outer1_3, outer1_2), items1);
};
export const isGuestOrLurkerInGuild = function isGuestOrLurkerInGuild(guild_id, id) {
  return _isGuestOrLurkerInGuild(guild_id, id, _createForOfIteratorHelperLoose, _isNativeReflectConstruct);
};
