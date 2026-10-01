// Module ID: 17144
// Function ID: 17145
// Name: GuildVerificationManager
// Dependencies: [1074, 12490, 1385, 7840, 12491, 6539, 2]

// Module 17144 (GuildVerificationManager)
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildInviteFlags from "GuildInviteFlags" /* 7840 */;
import HubUtilsDefault from "HubUtils" /* 12490 */;
import GuildVerificationUtils from "GuildVerificationUtils" /* 12491 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
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
      hasFlagResult = tmp3Result.hasFlag(num, tmp3(7840).GuildInviteFlags.IS_APPLICATION_BYPASS);
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
