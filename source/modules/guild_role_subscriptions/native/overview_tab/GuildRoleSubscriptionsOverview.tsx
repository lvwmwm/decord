// Module ID: 15134
// Function ID: 114200
// Name: serverNameHook
// Dependencies: []
// Exports: default

// Module 15134 (serverNameHook)
function serverNameHook(children) {
  return jsx(arg1(dependencyMap[5]).Text, { children });
}
class RoleSubscriptionsUnavailableNotice {
  constructor(arg0) {
    obj = {};
    tmp = importDefault(dependencyMap[6]);
    intl = arg1(dependencyMap[7]).intl;
    obj = { serverName: global.serverName, serverNameHook };
    obj.title = intl.format(arg1(dependencyMap[7]).t.uEqG1M, obj);
    intl2 = arg1(dependencyMap[7]).intl;
    obj.description = intl2.string(arg1(dependencyMap[7]).t.+3DKTf);
    return jsx(tmp, obj);
  }
}
function PurchasePage(arg0) {
  let gatedChannelId;
  let guildId;
  ({ guildId, gatedChannelId } = arg0);
  let obj = importDefault(dependencyMap[8]);
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  obj = { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(importDefault(dependencyMap[10]), { guildId, gatedChannelId }) };
  return jsx(arg1(dependencyMap[9]).GroupListingsFetchContextProvider, obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx");

export default function GuildRoleSubscriptionsOverview(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId), items1);
  const importDefault = stateFromStores;
  const items2 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[11]).useStateFromStores(items2, () => connected.isConnected());
  const dependencyMap = stateFromStores1;
  const tmp3 = importDefault(dependencyMap[12])(guildId);
  const React = tmp3;
  const obj2 = arg1(dependencyMap[11]);
  const items3 = [stateFromStores, stateFromStores1, tmp3];
  const canUseRoleSubscriptionIAP = arg1(dependencyMap[13]).useCanUseRoleSubscriptionIAP(guildId);
  const effect = React.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!tmp) {
      tmp = null != stateFromStores && null;
      const tmp4 = null != stateFromStores && null;
    }
    if (!tmp) {
      let obj = stateFromStores(stateFromStores1[14]);
      obj = {};
      const intl = guildId(stateFromStores1[7]).intl;
      obj.title = intl.string(guildId(stateFromStores1[7]).t.r0DLNm);
      const intl2 = guildId(stateFromStores1[7]).intl;
      obj.body = intl2.string(guildId(stateFromStores1[7]).t.6Y0JlN);
      const intl3 = guildId(stateFromStores1[7]).intl;
      obj.confirmText = intl3.string(guildId(stateFromStores1[7]).t.BddRzS);
      obj.show(obj);
      guildId(stateFromStores1[15]).replaceWith(defaultRoute.defaultRoute);
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
