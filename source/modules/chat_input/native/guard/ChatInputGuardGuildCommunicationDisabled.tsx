// Module ID: 11476
// Function ID: 89362
// Dependencies: []

// Module 11476
let closure_3 = arg1(dependencyMap[1]).GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  let obj = arg1(dependencyMap[3]);
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  obj = { type: "simple-action", icon: jsx(arg1(dependencyMap[5]).ClockWarningIcon, {}) };
  const intl = arg1(dependencyMap[6]).intl;
  obj.message = intl.string(arg1(dependencyMap[6]).t.VSpdzK);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj = { link: closure_3 };
  obj.subtext = intl2.format(arg1(dependencyMap[6]).t.4ZwD5G, obj);
  obj.countdown = date;
  return jsx(importDefault(dependencyMap[4]), obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;
