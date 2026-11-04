// Module ID: 14251
// Function ID: 14252
// Name: ChatInputGuardGuildCommunicationDisabled
// Dependencies: [19, 5055, 21, 14252, 14238, 13503, 1113, 2]

// Module 14251 (ChatInputGuardGuildCommunicationDisabled)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 5055 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 14238 */;
import useCommunicationDisabledCountdownCleanup from "useCommunicationDisabledCountdownCleanup" /* 14252 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const link = GuildDisableCommunicationConstants.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = Fragment.jsx;
const memoResult = react.memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  let date;
  guildMember = guildMember.guildMember;
  const obj = useCommunicationDisabledCountdownCleanup;
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date();
  } else {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(communicationDisabledUntil);
  }
  ChatInputGuardDefault;
  const intl = tmp(1113).intl;
  const intl2 = tmp(1113).intl;
  const obj3 = { link };
  return <tmp8 type="simple-action" icon={null} message={intl.string(intl3.t.VSpdzK)} subtext={intl2.format(intl3.t["4ZwD5G"], obj3)} countdown={date} />;
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;
