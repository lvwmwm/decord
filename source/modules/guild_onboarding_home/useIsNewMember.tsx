// Module ID: 5608
// Function ID: 47684
// Name: _getIsNewMember
// Dependencies: [1909, 1917, 3746, 1360, 664, 566, 2]
// Exports: default, getIsNewMember

// Module 5608 (_getIsNewMember)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
function _getIsNewMember(guildId, closure_4, _isNativeReflectConstruct) {
  if (_isNativeReflectConstruct.isFullServerPreview(guildId)) {
    return true;
  } else {
    const selfMember = closure_4.getSelfMember(guildId);
    if (null == selfMember) {
      return false;
    } else {
      const selfMemberJoinedAt = closure_4.getSelfMemberJoinedAt(guildId);
      let tmp12 = null != selfMemberJoinedAt;
      if (tmp12) {
        const flags = selfMember.flags;
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        let tmp6 = !require(1360) /* hasFlag */.hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        if (tmp6) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp6 = diff < importDefault(664).Millis.WEEK;
        }
        tmp12 = tmp6;
        const obj = require(1360) /* hasFlag */;
      }
      return tmp12;
    }
  }
}
const result = require("GuildMemberFlags").fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  const _require = arg0;
  const items = [closure_4, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_6(closure_0, outer1_4, outer1_3));
};
export const getIsNewMember = function getIsNewMember(guildId) {
  return _getIsNewMember(guildId, closure_4, _isNativeReflectConstruct);
};
