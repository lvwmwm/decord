// Module ID: 17796
// Function ID: 17797
// Name: GuildVerificationManager
// Dependencies: [1078, 13266, 1389, 8700, 13267, 7397, 2]

// Module 17796 (GuildVerificationManager)
import Constants from "Constants" /* 1078 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8700 */;
import HubUtilsDefault from "HubUtils" /* 13266 */;
import GuildVerificationUtils from "GuildVerificationUtils" /* 13267 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;
import size from "module_2" /* 2 */;

function handleInviteData(invite) {
  guild = invite.invite.guild;
  let num = invite.invite.flags;
  if (num == null) {
    num = 0;
  }
  if (null != guild) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      if (features != null) {
        hasItem = features.includes(GuildFeatures.HUB);
      }
    }
    if (hasItem) {
      HubUtilsDefault.onOpenHubInvite(invite.invite);
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = tmp3(1389).hasFlag(num, tmp3(8700).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp3Result = tmp3(1389);
    }
    new_member = !hasFlagResult;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = GuildVerificationUtils.inviteGuildHasPendingMemberDisabledVerification(guild);
  }
  if (new_member) {
    const result = GuildVerificationUtils.openVerificationModalOrTransitionToApplication(guild.id);
  }
}
const GuildFeatures = Constants.GuildFeatures;
const prototype = function GuildVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { INVITE_ACCEPT_SUCCESS: handleInviteData };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype1;
