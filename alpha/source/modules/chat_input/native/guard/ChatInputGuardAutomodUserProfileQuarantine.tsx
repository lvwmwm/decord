// Module ID: 13260
// Function ID: 13261
// Name: ChatInputGuardAutomodUserProfileQuarantine
// Dependencies: [19, 502, 4704, 4710, 21, 504, 4730, 12308, 1113, 13243, 13261, 2]

// Module 13260 (ChatInputGuardAutomodUserProfileQuarantine)
import Fragment from "Fragment" /* 21 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4710 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4730 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 12308 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13243 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
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
  const obj2 = guildId(4730);
  const automodReason = obj2.getAutomodReason(stateFromStores);
  const tmp6 = GuildMemberFlags;
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1113).intl;
    stringResult = intl2.string(tmp(1113).t.Viksoo);
  } else {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t["/PGQf0"]);
  }
  if (automodReason === tmp6.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1113).intl;
    stringResult1 = intl4.string(tmp(1113).t.ml72ZU);
  } else {
    const intl3 = tmp(1113).intl;
    stringResult1 = intl3.string(tmp(1113).t["8HW7r9"]);
  }
  ChatInputGuardDefault;
  return <tmp9 type="simple-action" actionOnPress={callback} actionLabel={stringResult} icon={null} message={stringResult1} />;
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;
