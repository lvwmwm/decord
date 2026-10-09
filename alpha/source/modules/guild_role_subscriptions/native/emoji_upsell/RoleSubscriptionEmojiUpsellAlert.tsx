// Module ID: 9434
// Function ID: 9435
// Name: RoleSubscriptionEmojiUpsellAlert
// Dependencies: [19, 2086, 2071, 21, 9243, 1126, 558, 576, 1497, 504, 6104, 9435, 9438, 5395, 2]

// Module 9434 (RoleSubscriptionEmojiUpsellAlert)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1126 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6104 */;
import AssetRegistryDefault from "AssetRegistry" /* 9243 */;
import CreatorRevenueButton2 from "CreatorRevenueButton" /* 9435 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleSubscriptionEmojiUpsellAlert(guildId) {
  let first;
  let intl;
  let intl2;
  let obj3;
  let onPress;
  let tmp11;
  let tmp8;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(18);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  size = onClose(1497)();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (cResult[3] !== name) {
    const obj2 = { image: onClose(9243), title: intl.string(tmp(1126).t.cBjkcx), description: intl2.formatToPlainString(tmp(1126).t["h0u/Hi"], obj3) };
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    obj3 = { serverName: name };
    cResult[3] = name;
    cResult[4] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === guildId) {
    let tmp12;
    let tmp13;
    if (cResult[6] === onClose) {
      tmp12 = cResult[7];
    }
    dependencyMap = tmp12;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(tmp(1126).t.cpT0Cq);
      cResult[8] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== tmp12) {
      class P {
        constructor() {
          const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
          const intl = intl4.intl;
          return <CreatorRevenueButton onPress={onPress} text={intl.string(intl4.t.p8FG1D)} />;
        }
      }
      cResult[9] = tmp12;
      cResult[10] = P;
    } else {
      class P {
        constructor() {
          const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
          const intl = intl4.intl;
          return <CreatorRevenueButton onPress={onPress} text={intl.string(intl4.t.p8FG1D)} />;
        }
      }
    }
    if (cResult[11] === diff) {
      class P {
        constructor() {
          const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
          const intl = intl4.intl;
          return <CreatorRevenueButton onPress={onPress} text={intl.string(intl4.t.p8FG1D)} />;
        }
      }
      if (cResult[14] === onClose) {
        class P {
          constructor() {
            const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
            const intl = intl4.intl;
            return <CreatorRevenueButton onPress={onPress} text={intl.string(intl4.t.p8FG1D)} />;
          }
        }
      }
      cResult[14] = onClose;
      cResult[15] = tmp15;
      cResult[16] = tmp16;
      cResult[17] = jsx(onClose(5395), { cancelText: tmp13, onClose, renderConfirmButton: tmp15, children: tmp16 });
      const tmp21 = jsx(onClose(5395), { cancelText: tmp13, onClose, renderConfirmButton: tmp15, children: tmp16 });
    }
    cResult[11] = diff;
    cResult[12] = tmp11;
    cResult[13] = jsx(tmp(9438).PremiumUpsellItem, { alertWidth: diff, upsellItem: tmp11 });
    const tmp18 = jsx(tmp(9438).PremiumUpsellItem, { alertWidth: diff, upsellItem: tmp11 });
  }
  function handleConfirm() {
    const obj = GuildActionCreatorsDefault;
    const result = obj.transitionToGuildSync(guildId, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  cResult[5] = guildId;
  cResult[6] = onClose;
  cResult[7] = handleConfirm;
  tmp12 = handleConfirm;
}) : (function RoleSubscriptionEmojiUpsellAlert(arg0) {
  let onClose;
  let require;
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const obj = GuildActionCreatorsDefault;
    const result = obj.transitionToGuildSync(_require, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  const tmp = onClose;
  size = onClose(stateFromStores[8])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  let obj = require("get initialized");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != _require) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let name;
  const useMemo = handleConfirm.useMemo;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items1 = [name];
  const memo = useMemo(() => {
    let intl;
    let intl2;
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    const obj = { image: AssetRegistryDefault, title: intl.string(intl4.t.cBjkcx), description: intl2.formatToPlainString(intl4.t["h0u/Hi"], { serverName: name }) };
    intl = intl4.intl;
    intl2 = intl4.intl;
    return obj;
  }, items1);
  tmp(stateFromStores[13]);
  let intl = tmp4(tmp2[5]).intl;
  return <tmpResult cancelText={intl.string(require("intl").t.cpT0Cq)} onClose={onClose} renderConfirmButton={function renderConfirmButton() {
    const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
    const intl = intl4.intl;
    return <CreatorRevenueButton onPress={handleConfirm} text={intl.string(intl4.t.p8FG1D)} />;
  }}>{null}</tmpResult>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default tmp2;
