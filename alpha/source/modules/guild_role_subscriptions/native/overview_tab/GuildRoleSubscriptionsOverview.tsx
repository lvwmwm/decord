// Module ID: 18602
// Function ID: 18603
// Name: GuildRoleSubscriptionsOverview
// Dependencies: [19, 6568, 5049, 4885, 21, 5624, 18603, 1113, 9910, 17191, 18604, 563, 7425, 6834, 5959, 1099, 2]
// Exports: default

// Module 18602 (GuildRoleSubscriptionsOverview)
import Fragment from "Fragment" /* 21 */;
import router_utils from "router_utils" /* 1099 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9910 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 17191 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18603 */;
import react_mod from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import DefaultRouteStore from "DefaultRouteStore" /* 5049 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

function serverNameHook(children) {
  return jsx(Text_Text.Text, { variant: "heading-lg/extrabold", color: "interactive-text-active", children });
}
class RoleSubscriptionsUnavailableNotice {
  constructor(serverName) {
    serverName = serverName.serverName;
    UnavailableNoticeDefault;
    const intl = intl4.intl;
    const obj2 = { serverName, serverNameHook };
    const intl2 = intl4.intl;
    return <tmp title={intl.format(intl4.t.uEqG1M, obj2)} description={intl2.string(intl4.t["+3DKTf"])} />;
  }
}
function PurchasePage(arg0) {
  let gatedChannelId;
  let guildId;
  ({ guildId, gatedChannelId } = arg0);
  const obj = NativePaymentHooksDefault;
  const mobileStoreFront = obj.useMobileStoreFront();
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  return <GroupListingsFetchContextProvider guildId={guildId} refetchOnMount={null == gatedChannelId} countryCode={country} dontFetchWhileTrue={null == country}>{null}</GroupListingsFetchContextProvider>;
}
let react = react_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx");

export default function GuildRoleSubscriptionsOverview(guildId) {
  let closure_3;
  let connected;
  let tmp6Result;
  guildId = guildId.guildId;
  let stateFromStores1;
  const gatedChannelId = guildId.gatedChannelId;
  let obj = guildId(stateFromStores1[11]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = guildId(stateFromStores1[11]);
  const items2 = [GatewayConnectionStore];
  stateFromStores1 = obj2.useStateFromStores(items2, () => connected.isConnected());
  const tmp3 = stateFromStores(stateFromStores1[12])(guildId);
  react = tmp3;
  const items3 = [stateFromStores, stateFromStores1, tmp3];
  const obj3 = guildId(stateFromStores1[13]);
  const canUseRoleSubscriptionIAP = obj3.useCanUseRoleSubscriptionIAP(guildId);
  const effect = react.useEffect(() => {
    let intl;
    let intl2;
    let intl3;
    let tmp = !stateFromStores1;
    if (stateFromStores1) {
      tmp = null != stateFromStores && closure_3;
    }
    if (!tmp) {
      const obj = { title: intl.string(intl4.t.r0DLNm), body: intl2.string(intl4.t["6Y0JlN"]), confirmText: intl3.string(intl4.t.BddRzS) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl4.intl;
      intl2 = intl4.intl;
      intl3 = intl4.intl;
      show(obj);
      const obj2 = router_utils;
      obj2.replaceWith(DefaultRouteStore.defaultRoute);
    }
  }, items3);
  if (canUseRoleSubscriptionIAP) {
    const obj4 = { guildId, gatedChannelId };
    tmp6Result = tmp6(PurchasePage, obj4);
  } else {
    let str;
    const tmp7 = RoleSubscriptionsUnavailableNotice;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    const obj5 = { serverName: str };
    tmp6Result = tmp6(tmp7, obj5);
  }
  return tmp6Result;
};
export { serverNameHook };
export { RoleSubscriptionsUnavailableNotice };
