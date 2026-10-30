// Module ID: 15692
// Function ID: 15693
// Name: useMessageRequestPrivacyOption
// Dependencies: [19, 21, 4834, 7159, 7362, 1114, 13968, 2]
// Exports: useMessageRequestPrivacyOption

// Module 15692 (useMessageRequestPrivacyOption)
import Fragment from "Fragment" /* 21 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 13968 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettings = tmp(4834);
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  let intl;
  let intl2;
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(4834).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(4834).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = react.useCallback((arg0) => {
    const obj = UserSettingsUtils;
    const sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
    const tmp3 = arg0;
    if (tmp3) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  let obj = { label: intl.string(id(1114).t["7UgSGP"]), subLabel: intl2.string(id(1114).t.INRaYb), value: !hasItem1 && !hasItem, onValueChange: callback, disabled: hasItem1 };
  const ActionSheetSwitchRow = id(7362).ActionSheetSwitchRow;
  intl = id(1114).intl;
  intl2 = id(1114).intl;
  return jsx(ActionSheetSwitchRow, obj);
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export function useMessageRequestPrivacyOption(guild) {
  guild = guild.guild;
  let tmp = null;
  if (!useIsStricterMessageRequestsDefault()) {
    tmp = <MessageRequestRestrictedGuildPrivacyOption guild={guild} />;
  }
  return tmp;
}
