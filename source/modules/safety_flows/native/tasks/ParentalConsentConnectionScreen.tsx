// Module ID: 16432
// Function ID: 126943
// Name: ParentalConsentConnectionScreen
// Dependencies: []
// Exports: default

// Module 16432 (ParentalConsentConnectionScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[9]).space.PX_24 };
obj.body = obj;
obj.cardSection = { alignItems: "center" };
const tmp2 = arg1(dependencyMap[7]);
obj.cardTitle = { marginTop: importDefault(dependencyMap[9]).space.PX_12, marginBottom: importDefault(dependencyMap[9]).space.PX_24, textAlign: "center" };
let closure_12 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[9]).space.PX_12, marginBottom: importDefault(dependencyMap[9]).space.PX_24, textAlign: "center" };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  let tmp21;
  let tmp22;
  const tmp = callback5();
  let obj = arg1(dependencyMap[10]);
  const onTaskComplete = obj.useOnTaskComplete();
  const arg1 = onTaskComplete;
  let obj1 = arg1(dependencyMap[11]);
  let obj2 = arg1(dependencyMap[12]);
  const getLinkCode = obj2.useFamilyCenterActions().getLinkCode;
  const importDefault = getLinkCode;
  importDefault(dependencyMap[13])(() => {
    onTaskComplete(link_code[14]).clearWarning();
  });
  importDefault(dependencyMap[15])(getLinkCode);
  let component = obj1.useSafetyFlowTask().task.ui_component.component;
  if (null == component) {
    component = {};
  }
  obj = {};
  let str = "";
  let str2 = "";
  if ("string" === typeof component.link_code) {
    str2 = component.link_code;
  }
  obj.link_code = str2;
  if ("string" === typeof component.link_code_expires_at) {
    str = component.link_code_expires_at;
  }
  obj.link_code_expires_at = str;
  obj.pending_requests = Array.isArray(component.pending_requests) ? component.pending_requests : [];
  let tmp2Result = tmp2(tmp3[16]);
  const pendingRequestCount = tmp2Result.usePendingRequestCount();
  tmp2Result = tmp2(tmp3[16]);
  const hasActiveParentLinks = tmp2Result.useHasActiveParentLinks();
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => authStore.getLinkedUsers());
  const tmp2Result1 = arg1(dependencyMap[17]);
  const items1 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[17]).useStateFromStores(items1, () => authStore.getAreLinkedUsersProcessed());
  if (stateFromStores1) {
    const _Object = Object;
    const values = Object.values(stateFromStores);
    let someResult = values.some((arg0) => null != arg0);
  } else {
    someResult = obj.pending_requests.length > 0;
  }
  let length = pendingRequestCount;
  if (!stateFromStores1) {
    length = obj.pending_requests.length;
  }
  const tmp12 = callback2(React.useState(someResult), 2);
  const first = tmp12[0];
  if (someResult) {
    someResult = !first;
  }
  if (someResult) {
    tmp12[1](true);
  }
  let obj10 = arg1(dependencyMap[17]);
  const items2 = [closure_7];
  let link_code = obj10.useStateFromStores(items2, () => authStore.getLinkCode());
  const tmp2Result2 = arg1(dependencyMap[17]);
  const items3 = [closure_7];
  const stateFromStores2 = arg1(dependencyMap[17]).useStateFromStores(items3, () => authStore.getLinkCodeExpiresAt());
  if (null == link_code) {
    link_code = obj.link_code;
  }
  const dependencyMap = link_code;
  let parsed = stateFromStores2;
  if (null == stateFromStores2) {
    const _Date = Date;
    parsed = Date.parse(obj.link_code_expires_at);
  }
  let callback = parsed;
  const obj12 = arg1(dependencyMap[17]);
  const items4 = [closure_8];
  const stateFromStores3 = arg1(dependencyMap[17]).useStateFromStores(items4, () => currentUser.getCurrentUser());
  let callback2 = stateFromStores3;
  const items5 = [stateFromStores3, link_code];
  callback = React.useCallback(() => {
    let tmp = null != stateFromStores3;
    if (tmp) {
      tmp = "" !== link_code;
    }
    if (tmp) {
      const result = onTaskComplete(link_code[18]).shareGuardianConnectLink(stateFromStores3, link_code);
      const obj = onTaskComplete(link_code[18]);
    }
  }, items5);
  const obj13 = arg1(dependencyMap[17]);
  const derivedPendingRequests = arg1(dependencyMap[19]).useDerivedPendingRequests(obj.pending_requests, stateFromStores1);
  const obj14 = arg1(dependencyMap[19]);
  [tmp21, tmp22] = callback2(React.useState(false), 2);
  const React = tmp22;
  // CreateGeneratorClosureLongIndex (0x67)
  const items6 = [onTaskComplete];
  const items7 = [link_code, parsed, getLinkCode];
  const callback1 = React.useCallback(callback(tmp22), items6);
  callback2 = React.useCallback(() => {
    let obj = getLinkCode(link_code[24]);
    obj = { linkCode: link_code, expiresAt: parsed, onRefresh: getLinkCode };
    const intl = onTaskComplete(link_code[22]).intl;
    obj.title = intl.string(getLinkCode(link_code[23]).dMMSA0);
    const intl2 = onTaskComplete(link_code[22]).intl;
    obj.body = intl2.format(getLinkCode(link_code[23]).6GaRTu, { link: "https://support.discord.com/hc/articles/14155060633623" });
    obj.openLazy(onTaskComplete(link_code[26])(link_code[25], link_code.paths), closure_9, obj);
  }, items7);
  obj = {};
  const tmp20 = callback2(React.useState(false), 2);
  const tmp25 = callback3;
  const intl = arg1(dependencyMap[22]).intl;
  obj.title = intl.string(importDefault(dependencyMap[23]).dMMSA0);
  const intl2 = arg1(dependencyMap[22]).intl;
  const format = intl2.format;
  const tmp27 = importDefault(dependencyMap[23]);
  if (first) {
    obj1 = { pendingCount: length, link: "https://support.discord.com/hc/articles/14155060633623" };
    let formatResult = format(tmp27.Ke+kz5, obj1);
  } else {
    obj2 = { link: "https://support.discord.com/hc/articles/14155060633623" };
    formatResult = format(tmp27.6GaRTu, obj2);
  }
  obj.subtitle = formatResult;
  obj.subtitleColor = "text-muted";
  obj.submitting = tmp21;
  const obj3 = {};
  const obj4 = { spacing: importDefault(dependencyMap[9]).space.PX_16 };
  const items8 = [callback3(importDefault(dependencyMap[30]), {}), ];
  let tmp32Result = first;
  if (first) {
    const obj5 = { variant: "primary" };
    const intl3 = arg1(dependencyMap[22]).intl;
    obj5.text = intl3.string(importDefault(dependencyMap[23]).OaHZUf);
    obj5.disabled = !hasActiveParentLinks || tmp21;
    obj5.loading = tmp21;
    obj5.onPress = callback1;
    tmp32Result = callback3(arg1(dependencyMap[31]).ModalActionButton, obj5);
    const tmp32 = callback3;
  }
  items8[1] = tmp32Result;
  obj4.children = items8;
  obj3.children = callback4(arg1(dependencyMap[29]).Stack, obj4);
  obj.footer = callback3(arg1(dependencyMap[28]).ModalFooter, obj3);
  const obj6 = { spacing: importDefault(dependencyMap[9]).space.PX_16, style: tmp.body };
  if (first) {
    const obj7 = { pendingRequests: derivedPendingRequests, linkedUsersProcessed: stateFromStores1, expiresAt: parsed, onRefreshLinkCode: getLinkCode, onShare: callback, onInviteAnotherGuardian: callback2 };
    let tmp43 = callback3(importDefault(dependencyMap[32]), obj7);
  } else {
    const obj8 = { style: tmp.cardSection };
    const obj9 = { style: tmp.cardTitle };
    const intl4 = arg1(dependencyMap[22]).intl;
    obj9.children = intl4.string(importDefault(dependencyMap[34]).pojgfk);
    const items9 = [callback3(arg1(dependencyMap[33]).Text, obj9), ];
    obj10 = { shareActions: "full", linkCode: link_code, expiresAt: parsed, onRefresh: getLinkCode };
    items9[1] = callback3(arg1(dependencyMap[35]).ConnectGuardianCard, obj10);
    obj8.children = items9;
    tmp43 = callback4(View, obj8);
  }
  obj6.children = tmp43;
  obj.children = callback3(arg1(dependencyMap[29]).Stack, obj6);
  return tmp25(importDefault(dependencyMap[27]), obj);
};
