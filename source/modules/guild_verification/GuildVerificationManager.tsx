// Module ID: 16130
// Function ID: 124985
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 653, 12359, 1360, 6652, 12360, 5078, 2]

// Module 16130 (_isNativeReflectConstruct)
import hasFlag from "hasFlag";
import module_12359 from "module_12359";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { GuildFeatures } from "ME";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleInviteData(invite) {
  const guild = invite.invite.guild;
  const flags = invite.invite.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  if (null != guild) {
    if (null != guild) {
      const features = guild.features;
      if (null != features) {
        if (features.includes(GuildFeatures.HUB)) {
          importDefault(12359).onOpenHubInvite(invite.invite);
          const obj5 = importDefault(12359);
        }
      }
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, require(6652) /* set */.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, require(6652) /* set */.GuildInviteFlags.IS_APPLICATION_BYPASS);
      const obj2 = require(1360) /* hasFlag */;
    }
    new_member = !hasFlagResult;
    const obj = require(1360) /* hasFlag */;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = require(12360) /* inviteGuildHasPendingMemberDisabledVerification */.inviteGuildHasPendingMemberDisabledVerification(guild);
    const obj3 = require(12360) /* inviteGuildHasPendingMemberDisabledVerification */;
  }
  if (new_member) {
    const result = require(12360) /* inviteGuildHasPendingMemberDisabledVerification */.openVerificationModalOrTransitionToApplication(guild.id);
    const obj4 = require(12360) /* inviteGuildHasPendingMemberDisabledVerification */;
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default tmp2;
