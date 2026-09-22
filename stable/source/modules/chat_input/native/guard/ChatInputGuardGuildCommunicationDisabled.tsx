// Module ID: 12594
// Function ID: 12595
// Name: ChatInputGuardGuildCommunicationDisabled
// Dependencies: [19, 2023, 21, 12595, 12581, 11987, 1114, 2]

// Module 12594 (ChatInputGuardGuildCommunicationDisabled)
import util from "util" /* 1114 */;
import ClockWarningIcon from "ClockWarningIcon" /* 11987 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12581 */;
import useCommunicationDisabledCountdownCleanup from "useCommunicationDisabledCountdownCleanup" /* 12595 */;
import noop from "module_19" /* 19 */;

require = fn;
const link = fn(2023).GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default noop.memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  const communicationDisabledCountdownCleanup = useCommunicationDisabledCountdownCleanup.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  const obj2 = { type: "simple-action", icon: null, message: null, subtext: null, countdown: null };
  obj2.icon = jsx(ClockWarningIcon.ClockWarningIcon, {});
  const intl = tmp(1114).intl;
  obj2.message = intl.string(util.t.VSpdzK);
  const intl2 = tmp(1114).intl;
  obj2.subtext = intl2.format(util.t["4ZwD5G"], { link });
  obj2.countdown = date;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: null, message: null, subtext: null, countdown: null });
});
