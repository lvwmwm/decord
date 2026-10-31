// Module ID: 15732
// Function ID: 15733
// Name: useMessageRequestPrivacyOption
// Dependencies: [19, 21, 4839, 7165, 7368, 1113, 14003, 2]
// Exports: useMessageRequestPrivacyOption

// Module 15732 (useMessageRequestPrivacyOption)
import Fragment from "Fragment" /* 21 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7165 */;
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14003 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettings = tmp(4839);
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  let intl;
  let intl2;
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(4839).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(4839).RestrictedGuildIds;
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
  let obj = { label: intl.string(id(1113).t["7UgSGP"]), subLabel: intl2.string(id(1113).t.INRaYb), value: !hasItem1 && !hasItem, onValueChange: callback, disabled: hasItem1 };
  const ActionSheetSwitchRow = id(7368).ActionSheetSwitchRow;
  intl = id(1113).intl;
  intl2 = id(1113).intl;
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
