// Module ID: 19988
// Function ID: 19989
// Name: GuildSettingsRoleSubscriptionEmojis
// Dependencies: [19, 4885, 21, 12, 4968, 19723, 19989, 1113, 19938, 504, 5258, 19990, 1994, 19946, 2]
// Exports: default

// Module 19988 (GuildSettingsRoleSubscriptionEmojis)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 4968 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 19946 */;
import getMaxRoleSubscriptionEmojiSlotsDefault from "getMaxRoleSubscriptionEmojiSlots" /* 19989 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(19938);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { maxSlots: stateFromStores(19989)(stateFromStores) };
    const H9Jxp6 = tmp(1113).t.H9Jxp6;
    formatToPlainString(H9Jxp6, obj3);
    return jsx(tmp(19723).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: formatToPlainString(H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(dependencyMap) {
          let rejectResult;
          if (null == stateFromStores) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            let error = new Error("guild cannot be null");
            rejectResult = reject(error);
          } else {
            const tmp = globalThis;
            const self = this;
            const self2 = this;
            rejectResult = new Promise((arg0, arg1) => {
              dependencyMap = arg0;
              let closure_1 = arg1;
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              let obj = {
                guildId: stateFromStores.id,
                emoji: dependencyMap,
                onSave(arg0) {
                  const obj = closure_2_1(closure_2_2[10]);
                  obj.hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  const obj = closure_2_1(closure_2_2[10]);
                  obj.hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                }
              };
              const tmp2 = asyncRequire(19990, dependencyMap.paths);
              openLazy(tmp2, "role-subscription-emoji-" + stateFromStores.id, obj);
            });
          }
          return rejectResult;
        },
      disabled: roleSubscriptionSettingsDisabled
    });
  }
}
const jsx = Fragment.jsx;
const computeEmojiItems = module_12.memoize((arr, arg1) => {
  let id;
  _require = arg1;
  const found = arr.filter((item) => {
    const obj = RoleSubscriptionEmojiUtils;
    return obj.isRoleSubscriptionEmoji(item, id.id);
  });
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(require("GuildSettingsModalEmoji").computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp5 = getMaxRoleSubscriptionEmojiSlotsDefault(arg1);
    const computeSectionItem = require("GuildSettingsModalEmoji").computeSectionItem;
    require("GuildSettingsModalEmoji");
    const intl = require("intl").intl;
    const items = [computeSectionItem(intl.string(require("intl").t.sMOuuS), reversed.length, tmp5)];
    HermesBuiltin.arraySpread(items, reversed, 1);
    return items;
  }
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  GuildSettingsRoleSubscriptionContainerDefault;
  return <tmp guildId={guildId}>{null}</tmp>;
};
