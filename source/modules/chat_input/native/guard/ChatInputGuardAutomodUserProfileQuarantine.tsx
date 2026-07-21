// Module ID: 11486
// Function ID: 89417
// Dependencies: []

// Module 11486
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const GuildMemberFlags = arg1(dependencyMap[3]).GuildMemberFlags;
const jsx = arg1(dependencyMap[4]).jsx;
const memoResult = importAllResult.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4, closure_5];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == guildId) {
      const _Set = Set;
      const set = new Set();
      return set;
    } else {
      const id = id.getId();
      return guildId(closure_2[6]).getAutomodQuarantinedGuildMemberFlags(member.getMember(guildId, id));
    }
  }, items1);
  const callback = importAllResult.useCallback(() => {
    const result = guildId(closure_2[7]).openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const automodReason = arg1(dependencyMap[6]).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = arg1(dependencyMap[8]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[8]).t.Viksoo);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t./PGQf0);
  }
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = arg1(dependencyMap[8]).intl;
    let stringResult1 = intl4.string(arg1(dependencyMap[8]).t.ml72ZU);
  } else {
    const intl3 = arg1(dependencyMap[8]).intl;
    stringResult1 = intl3.string(arg1(dependencyMap[8]).t.8HW7r9);
  }
  obj = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult };
  const obj2 = arg1(dependencyMap[6]);
  obj.icon = jsx(arg1(dependencyMap[10]).ChatXIcon, {});
  obj.message = stringResult1;
  return jsx(importDefault(dependencyMap[9]), obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;
