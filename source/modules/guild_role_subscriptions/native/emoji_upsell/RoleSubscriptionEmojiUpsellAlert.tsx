// Module ID: 9353
// Function ID: 73047
// Name: RoleSubscriptionEmojiUpsellAlert
// Dependencies: [31, 1838, 1355, 33, 7942, 1212, 1450, 566, 5048, 4561, 9354, 7960, 2]
// Exports: default

// Module 9353 (RoleSubscriptionEmojiUpsellAlert)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  let onClose;
  let require;
  ({ guildId: require, onClose } = arg0);
  function handleConfirm() {
    const result = onClose(stateFromStores[8]).transitionToGuildSync(closure_0, undefined, outer1_5.ROLE_SUBSCRIPTIONS);
    if (null != onClose) {
      onClose();
    }
  }
  const size = onClose(stateFromStores[6])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  let obj = require(stateFromStores[7]);
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = outer1_4.getGuild(closure_0);
    }
    return guild;
  });
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
    const intl = outer1_0(stateFromStores[5]).intl;
    obj.title = intl.string(outer1_0(stateFromStores[5]).t.cBjkcx);
    const intl2 = outer1_0(stateFromStores[5]).intl;
    obj = { serverName: name };
    obj.description = intl2.formatToPlainString(outer1_0(stateFromStores[5]).t["h0u/Hi"], obj);
    return obj;
  }, items1);
  obj = {};
  let intl = require(stateFromStores[5]).intl;
  obj.cancelText = intl.string(require(stateFromStores[5]).t.cpT0Cq);
  obj.onClose = onClose;
  obj.renderConfirmButton = function renderConfirmButton() {
    const obj = { onPress: handleConfirm };
    const intl = outer1_0(stateFromStores[5]).intl;
    obj.text = intl.string(outer1_0(stateFromStores[5]).t.p8FG1D);
    return outer1_6(outer1_0(stateFromStores[10]).CreatorRevenueButton, obj);
  };
  obj.children = jsx(require(stateFromStores[11]).PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(onClose(stateFromStores[9]), {});
};
