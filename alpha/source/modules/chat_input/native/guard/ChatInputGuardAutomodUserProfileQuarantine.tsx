// Module ID: 13987
// Function ID: 13988
// Name: ChatInputGuardAutomodUserProfileQuarantine
// Dependencies: [19, 502, 4921, 4927, 21, 504, 4947, 13241, 1114, 13971, 13988, 2]

// Module 13987 (ChatInputGuardAutomodUserProfileQuarantine)
import Fragment from "Fragment" /* 21 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4927 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4947 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 13241 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13971 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import size from "module_2" /* 2 */;

let set;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  let stringResult;
  let stringResult1;
  guildId = guildId.guildId;
  const tmp = guildId;
  let obj = guildId(504);
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, function() {
    if (null == guildId) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      return set;
    } else {
      const id = AuthenticationStore.getId();
      const obj = AutomodPermissionUtils;
      return obj.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
  const callback = react.useCallback(() => {
    const obj = GuildAutomodActionActionCreators;
    const result = obj.openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const obj2 = guildId(4947);
  const automodReason = obj2.getAutomodReason(stateFromStores);
  const tmp6 = GuildMemberFlags;
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(tmp(1114).t.Viksoo);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t["/PGQf0"]);
  }
  if (automodReason === tmp6.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1114).intl;
    stringResult1 = intl4.string(tmp(1114).t.ml72ZU);
  } else {
    const intl3 = tmp(1114).intl;
    stringResult1 = intl3.string(tmp(1114).t["8HW7r9"]);
  }
  ChatInputGuardDefault;
  return <tmp9 type="simple-action" actionOnPress={callback} actionLabel={stringResult} icon={null} message={stringResult1} />;
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;
