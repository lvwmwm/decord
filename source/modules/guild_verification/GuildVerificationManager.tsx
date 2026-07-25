// Module ID: 16118
// Function ID: 124938
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 653, 12358, 1360, 6652, 12359, 5078, 2]

// Module 16118 (_isNativeReflectConstruct)
import hasFlag from "hasFlag";
import module_12358 from "module_12358";
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
          importDefault(12358).onOpenHubInvite(invite.invite);
          const obj5 = importDefault(12358);
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
    new_member = require(12359) /* inviteGuildHasPendingMemberDisabledVerification */.inviteGuildHasPendingMemberDisabledVerification(guild);
    const obj3 = require(12359) /* inviteGuildHasPendingMemberDisabledVerification */;
  }
  if (new_member) {
    const result = require(12359) /* inviteGuildHasPendingMemberDisabledVerification */.openVerificationModalOrTransitionToApplication(guild.id);
    const obj4 = require(12359) /* inviteGuildHasPendingMemberDisabledVerification */;
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default tmp2;
