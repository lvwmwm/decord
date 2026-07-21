// Module ID: 9345
// Function ID: 72993
// Name: RoleSubscriptionEmojiUpsellAlert
// Dependencies: []
// Exports: default

// Module 9345 (RoleSubscriptionEmojiUpsellAlert)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  let onClose;
  ({ guildId: closure_0, onClose } = arg0);
  const importDefault = onClose;
  function handleConfirm() {
    const result = onClose(stateFromStores[8]).transitionToGuildSync(closure_0, undefined, constants.ROLE_SUBSCRIPTIONS);
    if (null != onClose) {
      onClose();
    }
  }
  const size = importDefault(dependencyMap[6])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = guild.getGuild(closure_0);
    }
    return guild;
  });
  const dependencyMap = stateFromStores;
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const items1 = [name];
  const memo = handleConfirm.useMemo(() => {
    let name;
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    let obj = { image: onClose(stateFromStores[4]) };
    const intl = callback(stateFromStores[5]).intl;
    obj.title = intl.string(callback(stateFromStores[5]).t.cBjkcx);
    const intl2 = callback(stateFromStores[5]).intl;
    obj = { serverName: name };
    obj.description = intl2.formatToPlainString(callback(stateFromStores[5]).t.h0u/Hi, obj);
    return obj;
  }, items1);
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.cancelText = intl.string(arg1(dependencyMap[5]).t.cpT0Cq);
  obj.onClose = onClose;
  obj.renderConfirmButton = function renderConfirmButton() {
    const obj = { onPress: handleConfirm };
    const intl = callback(stateFromStores[5]).intl;
    obj.text = intl.string(callback(stateFromStores[5]).t.p8FG1D);
    return callback2(callback(stateFromStores[10]).CreatorRevenueButton, obj);
  };
  obj.children = jsx(arg1(dependencyMap[11]).PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(importDefault(dependencyMap[9]), obj);
};
