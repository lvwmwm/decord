// Module ID: 18241
// Function ID: 18242
// Name: GuildSettingsRoleSubscriptionEmojis
// Dependencies: [19, 2067, 21, 12, 5683, 17999, 18242, 1119, 18186, 504, 4725, 18243, 1984, 558, 568, 18196, 2]

// Module 18241 (GuildSettingsRoleSubscriptionEmojis)
import c from "c" /* 568 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5683 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 18196 */;
import getMaxRoleSubscriptionEmojiSlotsDefault from "getMaxRoleSubscriptionEmojiSlots" /* 18242 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import apply from "module_12" /* 12 */;

require = fn;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  const roleSubscriptionSettingsDisabled = guildId(18186).useRoleSubscriptionSettingsDisabled();
  let obj = guildId(18186);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1119).intl;
    const obj3 = { maxSlots: stateFromStores(18242)(stateFromStores) };
    const obj4 = {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1119).t.H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(emoji) {
          if (null == stateFromStores) {
            const _Error = Error;
            let error = new Error("guild cannot be null");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = new Promise((arg0, arg1) => {
              emoji = arg0;
              closure_1 = arg1;
              const obj = ActionSheetActionCreatorsDefault;
              obj.openLazy(asyncRequireImpl(18243, dependencyMap.paths), "role-subscription-emoji-" + stateFromStores.id, {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  stateFromStores(4725).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(4725).hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                }
              });
            });
          }
          return rejectResult;
        },
      disabled: roleSubscriptionSettingsDisabled
    };
    return jsx(tmp(17999).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1119).t.H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(emoji) {
          if (null == stateFromStores) {
            const _Error = Error;
            let error = new Error("guild cannot be null");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = new Promise((arg0, arg1) => {
              emoji = arg0;
              closure_1 = arg1;
              const obj = ActionSheetActionCreatorsDefault;
              obj.openLazy(asyncRequireImpl(18243, dependencyMap.paths), "role-subscription-emoji-" + stateFromStores.id, {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  stateFromStores(4725).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(4725).hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                }
              });
            });
          }
          return rejectResult;
        },
      disabled: roleSubscriptionSettingsDisabled
    });
  }
  const obj2 = guildId(504);
}
const jsx = fn(21).jsx;
const computeEmojiItems = apply.memoize((arr, arg1) => {
  _require = arg1;
  const found = arr.filter((item) => RoleSubscriptionEmojiUtils.isRoleSubscriptionEmoji(item, id.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(require("GuildSettingsModalEmoji").computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = getMaxRoleSubscriptionEmojiSlotsDefault(arg1);
    const intl = require("util").intl;
    const items = [require("GuildSettingsModalEmoji").computeSectionItem(intl.string(require("util").t.sMOuuS), reversed.length, tmp4)];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = c.c(5);
  guildId = guildId.guildId;
  if (cResult[0] !== guildId) {
    const obj2 = { guildId };
    const tmp6 = <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} />;
    cResult[0] = guildId;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = jsx(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
  cResult[2] = guildId;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
  return jsx(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> });
});
