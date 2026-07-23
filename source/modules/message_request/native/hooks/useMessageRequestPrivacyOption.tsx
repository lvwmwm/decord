// Module ID: 12916
// Function ID: 100221
// Name: MessageRequestRestrictedGuildPrivacyOption
// Dependencies: [31, 33, 3803, 5793, 5502, 1212, 11478, 2]
// Exports: useMessageRequestPrivacyOption

// Module 12916 (MessageRequestRestrictedGuildPrivacyOption)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(3803).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(3803).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = React.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = id(outer1_2[3]).getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = id(outer1_2[2]).MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  const obj = {};
  const intl = id(1212).intl;
  obj.label = intl.string(id(1212).t["7UgSGP"]);
  const intl2 = id(1212).intl;
  obj.subLabel = intl2.string(id(1212).t.INRaYb);
  obj.value = !hasItem1 && !hasItem;
  obj.onValueChange = callback;
  obj.disabled = hasItem1;
  return jsx(id(5502).ActionSheetSwitchRow, {});
}
const result = require("explicitContentFromProto").fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = function useMessageRequestPrivacyOption(guild) {
  let tmp = null;
  if (!importDefault(11478)()) {
    const obj = { guild: guild.guild };
    tmp = <MessageRequestRestrictedGuildPrivacyOption guild={arg0.guild} />;
  }
  return tmp;
};
