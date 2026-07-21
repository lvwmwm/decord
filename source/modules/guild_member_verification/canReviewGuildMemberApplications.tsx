// Module ID: 5641
// Function ID: 48227
// Name: canReviewGuildMemberApplications
// Dependencies: [31, 1348, 3756, 482, 566, 1327]
// Exports: canReviewGuildMemberApplications, useCanReviewGuildMemberApplications

// Module 5641 (canReviewGuildMemberApplications)
import module_31 from "module_31";
import closure_3 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";

({ GuildFeatures: closure_4, Permissions: closure_5 } = _isNativeReflectConstruct);
const result = isDiscordFrontendDevelopment.fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export const canReviewGuildMemberApplications = function canReviewGuildMemberApplications(guildId) {
  const guild = guild.getGuild(guildId);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if (hasItem) {
      hasItem = closure_3.can(constants2.KICK_MEMBERS, guild);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useCanReviewGuildMemberApplications = function useCanReviewGuildMemberApplications(guildId) {
  const arg1 = guildId;
  const items = [module_31];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => guild.getGuild(arg0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = closure_3.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = arg1(dependencyMap[4]).guildHasVerificationGate(stateFromStores);
    const obj2 = arg1(dependencyMap[4]);
  }
  return hasItem;
};
