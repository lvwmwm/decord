// Module ID: 20258
// Function ID: 20259
// Name: GuildVerificationManager
// Dependencies: [1072, 15941, 1406, 7677, 15942, 7882, 2]

// Module 20258 (GuildVerificationManager)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1406 */;
import GuildInviteFlags from "GuildInviteFlags" /* 7677 */;
import HubUtilsDefault from "HubUtils" /* 15941 */;
import GuildVerificationUtils from "GuildVerificationUtils" /* 15942 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
import size from "module_2" /* 2 */;

function handleInviteData(invite) {
  const guild = invite.invite.guild;
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
      const obj5 = HubUtilsDefault;
      obj5.onOpenHubInvite(invite.invite);
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    const obj = FlagUtils;
    let hasFlagResult = obj.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      const tmp3Result = FlagUtils;
      hasFlagResult = tmp3Result.hasFlag(num, tmp3(7677).GuildInviteFlags.IS_APPLICATION_BYPASS);
    }
    new_member = !hasFlagResult;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    const obj3 = GuildVerificationUtils;
    new_member = obj3.inviteGuildHasPendingMemberDisabledVerification(guild);
  }
  if (new_member) {
    const obj4 = GuildVerificationUtils;
    const result = obj4.openVerificationModalOrTransitionToApplication(guild.id);
  }
}
const GuildFeatures = Constants.GuildFeatures;
class GuildVerificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { INVITE_ACCEPT_SUCCESS: handleInviteData };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const guildVerificationManager = new GuildVerificationManager();
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default guildVerificationManager;
