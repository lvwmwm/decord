// Module ID: 16349
// Function ID: 126138
// Name: GuildSettingsRoleSubscriptionEmojisInner
// Dependencies: []
// Exports: default

// Module 16349 (GuildSettingsRoleSubscriptionEmojisInner)
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[8]);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => guild.getGuild(guildId));
  const importDefault = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = arg1(dependencyMap[7]).intl;
    obj = { maxSlots: importDefault(dependencyMap[6])(stateFromStores) };
    obj = { guild: stateFromStores };
    obj.headerDescription = intl.formatToPlainString(arg1(dependencyMap[7]).t.H9Jxp6, obj);
    obj.computeEmojiItems = closure_5;
    obj.onSelectRolesForEmoji = function onSelectRolesForEmoji(arg0) {
      const guildId = arg0;
      if (null == stateFromStores) {
        const _Error = Error;
        const error = new Error("guild cannot be null");
        let rejectResult = Promise.reject(error);
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          let obj = arg1(paths[10]);
          obj = {
            guildId: arg1.id,
            emoji: arg0,
            onSave(arg0) {
              arg1(closure_2[10]).hideActionSheet();
              arg0(arg0);
            },
            onCancel() {
              arg1(closure_2[10]).hideActionSheet();
              const error = new Error("User cancelled");
              arg1(error);
            }
          };
          obj.openLazy(arg0(paths[12])(paths[11], paths.paths), "role-subscription-emoji-" + arg1.id, obj);
        });
      }
      return rejectResult;
    };
    obj.disabled = roleSubscriptionSettingsDisabled;
    return jsx(arg1(dependencyMap[5]).ManageEmojisModal, obj);
  }
  const obj2 = arg1(dependencyMap[9]);
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = importDefault(dependencyMap[3]).memoize((arr) => {
  const found = arr.filter((roles) => arg1(closure_2[4]).isRoleSubscriptionEmoji(roles, arg1.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(arg1(dependencyMap[5]).computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = importDefault(dependencyMap[6])(arg1);
    const intl = arg1(dependencyMap[7]).intl;
    const items = [arg1(dependencyMap[5]).computeSectionItem(intl.string(arg1(dependencyMap[7]).t.sMOuuS), reversed.length, tmp4)];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const importDefaultResult = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
  return jsx(importDefault(dependencyMap[13]), obj);
};
