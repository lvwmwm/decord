// Module ID: 16521
// Function ID: 128678
// Name: GuildSettingsRoleSubscriptionEmojisInner
// Dependencies: [31, 1838, 33, 22, 4996, 16298, 16522, 1212, 16466, 566, 4098, 16523, 1934, 16476, 2]
// Exports: default

// Module 16521 (GuildSettingsRoleSubscriptionEmojisInner)
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";
import importDefaultResult from "apply";

const require = arg1;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(16466);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = guildId(566).useStateFromStores(items, () => outer1_3.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = guildId(1212).intl;
    obj = { maxSlots: stateFromStores(16522)(stateFromStores) };
    obj = { guild: stateFromStores };
    obj.headerDescription = intl.formatToPlainString(guildId(1212).t.H9Jxp6, obj);
    obj.computeEmojiItems = closure_5;
    obj.onSelectRolesForEmoji = function onSelectRolesForEmoji(arg0) {
      let closure_0 = arg0;
      if (null == stateFromStores) {
        const _Error = Error;
        let error = new Error("guild cannot be null");
        let rejectResult = Promise.reject(error);
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let obj = stateFromStores(outer2_2[10]);
          obj = {
            guildId: outer1_1.id,
            emoji: closure_0,
            onSave(arg0) {
              stateFromStores(outer3_2[10]).hideActionSheet();
              callback(arg0);
            },
            onCancel() {
              stateFromStores(outer3_2[10]).hideActionSheet();
              const error = new Error("User cancelled");
              callback2(error);
            }
          };
          obj.openLazy(guildId(outer2_2[12])(outer2_2[11], outer2_2.paths), "role-subscription-emoji-" + outer1_1.id, obj);
        });
      }
      return rejectResult;
    };
    obj.disabled = roleSubscriptionSettingsDisabled;
    return jsx(guildId(16298).ManageEmojisModal, { guild: stateFromStores });
  }
  const obj2 = guildId(566);
}
let closure_5 = require("apply").memoize((arr) => {
  const _require = arg1;
  const found = arr.filter((roles) => lib(outer1_2[4]).isRoleSubscriptionEmoji(roles, lib.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(_require(16298).computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = importDefault(16522)(arg1);
    const intl = _require(1212).intl;
    const items = [_require(16298).computeSectionItem(intl.string(_require(1212).t.sMOuuS), reversed.length, tmp4)];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
  return jsx(importDefault(16476), { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> });
};
