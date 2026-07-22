// Module ID: 5605
// Function ID: 47661
// Name: _getIsNewMember
// Dependencies: []
// Exports: default, getIsNewMember

// Module 5605 (_getIsNewMember)
function _getIsNewMember(guildId, closure_4, closure_3) {
  if (closure_3.isFullServerPreview(guildId)) {
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
        let tmp6 = !closure_4(dependencyMap[3]).hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        if (tmp6) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp6 = diff < importDefault(dependencyMap[4]).Millis.WEEK;
        }
        tmp12 = tmp6;
        const obj = closure_4(dependencyMap[3]);
      }
      return tmp12;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const GuildMemberFlags = arg1(dependencyMap[2]).GuildMemberFlags;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  const arg1 = arg0;
  const items = [closure_4, closure_3];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => callback(arg0, closure_4, closure_3));
};
export const getIsNewMember = function getIsNewMember(guildId) {
  return _getIsNewMember(guildId, closure_4, closure_3);
};
