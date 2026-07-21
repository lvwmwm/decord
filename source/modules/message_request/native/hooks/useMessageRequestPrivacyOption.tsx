// Module ID: 12795
// Function ID: 98032
// Name: MessageRequestRestrictedGuildPrivacyOption
// Dependencies: []
// Exports: useMessageRequestPrivacyOption

// Module 12795 (MessageRequestRestrictedGuildPrivacyOption)
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  guild = guild.guild;
  const id = guild.id;
  const arg1 = id;
  const MessageRequestRestrictedGuildIds = arg1(dependencyMap[2]).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = arg1(dependencyMap[2]).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = React.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = id(closure_2[3]).getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = id(closure_2[2]).MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  const obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.label = intl.string(arg1(dependencyMap[5]).t.7UgSGP);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[5]).t.INRaYb);
  obj.value = !hasItem1 && !hasItem;
  obj.onValueChange = callback;
  obj.disabled = hasItem1;
  return jsx(arg1(dependencyMap[4]).ActionSheetSwitchRow, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = function useMessageRequestPrivacyOption(guild) {
  let tmp = null;
  if (!importDefault(dependencyMap[6])()) {
    const obj = { guild: guild.guild };
    tmp = <MessageRequestRestrictedGuildPrivacyOption {...obj} />;
  }
  return tmp;
};
