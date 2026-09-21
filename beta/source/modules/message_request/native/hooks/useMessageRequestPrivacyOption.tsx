// Module ID: 14181
// Function ID: 14182
// Name: useMessageRequestPrivacyOption
// Dependencies: [19, 21, 558, 568, 2023, 7241, 1119, 7445, 12594, 2]

// Module 14181 (useMessageRequestPrivacyOption)
import c from "c" /* 568 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7241 */;
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 12594 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = id(568).c(14);
  guild = guild.guild;
  id = guild.id;
  let MessageRequestRestrictedGuildIds = id(2023).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  if (cResult[0] === id) {
    const RestrictedGuildIds = tmp(2023).RestrictedGuildIds;
    const setting1 = RestrictedGuildIds.useSetting();
    if (cResult[3] === guild.id) {
      if (cResult[4] === setting1) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] !== id) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        cResult[6] = id;
        cResult[7] = S;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        const stringResult = obj4.string(tmp(1119).t["7UgSGP"]);
        const intl = tmp(1119).intl;
        const stringResult1 = intl.string(tmp(1119).t.INRaYb);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        let tmp11 = stringResult1;
        const tmp10 = stringResult;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        tmp11 = cResult[9];
      }
      if (!tmp6) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      if (cResult[10] === tmp8) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      const obj2 = { label: tmp10, subLabel: tmp11, value: !tmp6, onValueChange: tmp8, disabled: tmp6 };
      const tmp17 = jsx(tmp(7445).ActionSheetSwitchRow, { label: tmp10, subLabel: tmp11, value: !tmp6, onValueChange: tmp8, disabled: tmp6 });
      cResult[10] = tmp8;
      cResult[11] = tmp6;
      cResult[12] = !tmp6;
      cResult[13] = tmp17;
    }
    const hasItem = setting1.includes(guild.id);
    cResult[3] = guild.id;
    cResult[4] = setting1;
    cResult[5] = hasItem;
    tmp6 = hasItem;
  }
  const hasItem1 = setting.includes(id);
  cResult[0] = id;
  cResult[1] = setting;
  cResult[2] = hasItem1;
}) : ((guild) => {
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(2023).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(2023).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = noop.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = UserSettingsUtils.getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  const obj = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl = id(1119).intl;
  obj.label = intl.string(id(1119).t["7UgSGP"]);
  const intl2 = id(1119).intl;
  obj.subLabel = intl2.string(id(1119).t.INRaYb);
  let tmp5 = !hasItem1;
  if (!hasItem1) {
    tmp5 = !hasItem;
  }
  obj.value = tmp5;
  obj.onValueChange = callback;
  obj.disabled = hasItem1;
  return jsx(id(7445).ActionSheetSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null, disabled: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = c.c(3);
  guild = guild.guild;
  const tmp2 = useIsStricterMessageRequestsDefault();
  if (cResult[0] === guild) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  let tmp4 = null;
  if (!tmp2) {
    const obj2 = { guild };
    tmp4 = <closure_5 guild={guild} />;
  }
  cResult[0] = guild;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((guild) => {
  let tmp = null;
  if (!useIsStricterMessageRequestsDefault()) {
    const obj = { guild: guild.guild };
    tmp = <closure_5 guild={arg0.guild} />;
  }
  return tmp;
});
