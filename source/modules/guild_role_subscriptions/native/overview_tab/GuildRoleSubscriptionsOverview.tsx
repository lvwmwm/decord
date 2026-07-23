// Module ID: 15260
// Function ID: 116446
// Name: serverNameHook
// Dependencies: [31, 4808, 3951, 1838, 33, 4126, 15261, 1212, 8002, 14102, 15262, 624, 5632, 5031, 4471, 1198, 2]
// Exports: default

// Module 15260 (serverNameHook)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";

const require = arg1;
function serverNameHook(children) {
  const obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children };
  return jsx(require(4126) /* Text */.Text, { variant: "heading-lg/extrabold", color: "interactive-text-active", children });
}
class RoleSubscriptionsUnavailableNotice {
  constructor(arg0) {
    obj = {};
    tmp = require("UnavailableNotice");
    intl = require("getSystemLocale").intl;
    obj = { serverName: global.serverName, serverNameHook };
    obj.title = intl.format(require("getSystemLocale").t.uEqG1M, obj);
    intl2 = require("getSystemLocale").intl;
    obj.description = intl2.string(require("getSystemLocale").t["+3DKTf"]);
    return jsx(tmp, obj);
  }
}
function PurchasePage(arg0) {
  let gatedChannelId;
  let guildId;
  ({ guildId, gatedChannelId } = arg0);
  let obj = importDefault(8002);
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  obj = { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(importDefault(15262), { guildId, gatedChannelId }) };
  return jsx(require(14102) /* useGroupListingsFetchContext */.GroupListingsFetchContextProvider, { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(importDefault(15262), { guildId, gatedChannelId }) });
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx");

export default function GuildRoleSubscriptionsOverview(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(stateFromStores1[11]);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId), items1);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items2, () => outer1_4.isConnected());
  const tmp3 = stateFromStores(stateFromStores1[12])(guildId);
  const React = tmp3;
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [stateFromStores, stateFromStores1, tmp3];
  const canUseRoleSubscriptionIAP = guildId(stateFromStores1[13]).useCanUseRoleSubscriptionIAP(guildId);
  const effect = React.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!tmp) {
      tmp = null != stateFromStores && result;
      const tmp4 = null != stateFromStores && result;
    }
    if (!tmp) {
      let obj = stateFromStores(stateFromStores1[14]);
      obj = {};
      const intl = guildId(stateFromStores1[7]).intl;
      obj.title = intl.string(guildId(stateFromStores1[7]).t.r0DLNm);
      const intl2 = guildId(stateFromStores1[7]).intl;
      obj.body = intl2.string(guildId(stateFromStores1[7]).t["6Y0JlN"]);
      const intl3 = guildId(stateFromStores1[7]).intl;
      obj.confirmText = intl3.string(guildId(stateFromStores1[7]).t.BddRzS);
      obj.show(obj);
      guildId(stateFromStores1[15]).replaceWith(outer1_5.defaultRoute);
      const obj3 = guildId(stateFromStores1[15]);
    }
  }, items3);
  if (canUseRoleSubscriptionIAP) {
    obj = { guildId, gatedChannelId: guildId.gatedChannelId };
    let tmp6Result = tmp6(PurchasePage, obj);
  } else {
    obj = {};
    let name;
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    obj.serverName = str;
    tmp6Result = tmp6(RoleSubscriptionsUnavailableNotice, obj);
    const tmp7 = RoleSubscriptionsUnavailableNotice;
  }
  return tmp6Result;
};
export { serverNameHook };
export { RoleSubscriptionsUnavailableNotice };
