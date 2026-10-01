// Module ID: 9759
// Function ID: 9760
// Name: RoleSubscriptionEmojiUpsellAlert
// Dependencies: [19, 2067, 2052, 21, 8615, 1115, 1479, 504, 5832, 5300, 9760, 8623, 2]
// Exports: default

// Module 9759 (RoleSubscriptionEmojiUpsellAlert)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import AssetRegistryDefault from "AssetRegistry" /* 8615 */;
import CreatorRevenueButton2 from "CreatorRevenueButton" /* 9760 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const jsx = Fragment.jsx;
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  let onClose;
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const obj = GuildActionCreatorsDefault;
    const result = obj.transitionToGuildSync(require, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  const tmp = onClose;
  size = onClose(stateFromStores[6])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  let obj = require("get initialized");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != require) {
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
    const obj = { image: AssetRegistryDefault, title: intl.string(intl3.t.cBjkcx), description: intl2.formatToPlainString(intl3.t["h0u/Hi"], { serverName: name }) };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items1);
  tmp(stateFromStores[9]);
  let intl = tmp4(tmp2[5]).intl;
  return <tmpResult cancelText={intl.string(require("intl").t.cpT0Cq)} onClose={onClose} renderConfirmButton={function renderConfirmButton() {
    const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
    const intl = intl3.intl;
    return <CreatorRevenueButton onPress={handleConfirm} text={intl.string(intl3.t.p8FG1D)} />;
  }}>{null}</tmpResult>;
};
