// Module ID: 15992
// Function ID: 15993
// Name: useMessageRequestPrivacyOption
// Dependencies: [19, 21, 4968, 7305, 7506, 1113, 14249, 2]
// Exports: useMessageRequestPrivacyOption

// Module 15992 (useMessageRequestPrivacyOption)
import Fragment from "Fragment" /* 21 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7305 */;
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14249 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettings = tmp(4968);
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  let intl;
  let intl2;
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(4968).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(4968).RestrictedGuildIds;
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
  const ActionSheetSwitchRow = id(7506).ActionSheetSwitchRow;
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
