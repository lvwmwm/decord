// Module ID: 16619
// Function ID: 129578
// Name: ParentalConsentConnectionScreen
// Dependencies: [5, 57, 31, 27, 6769, 1849, 6770, 33, 4130, 689, 16610, 16609, 11088, 4559, 16200, 13834, 7122, 566, 13832, 16620, 16604, 3831, 1212, 2460, 4098, 13833, 1934, 16613, 11098, 4541, 16621, 9937, 16622, 4126, 2198, 13835, 2]
// Exports: default

// Module 16619 (ParentalConsentConnectionScreen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import ModalActionButton from "ModalActionButton";
import { View } from "SafetyFlowTaskScreen";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_9 } from "items";
import jsxProd from "Text";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardSection = { alignItems: "center" };
_createForOfIteratorHelperLoose.cardTitle = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let result = require("result").fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  let tmp21;
  let tmp22;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = onTaskComplete(link_code[10]);
  onTaskComplete = obj.useOnTaskComplete();
  let obj1 = onTaskComplete(link_code[11]);
  let obj2 = onTaskComplete(link_code[12]);
  const getLinkCode = obj2.useFamilyCenterActions().getLinkCode;
  getLinkCode(link_code[13])(() => {
    onTaskComplete(link_code[14]).clearWarning();
  });
  getLinkCode(link_code[15])(getLinkCode);
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
  const stateFromStores = onTaskComplete(link_code[17]).useStateFromStores(items, () => outer1_7.getLinkedUsers());
  const tmp2Result1 = onTaskComplete(link_code[17]);
  const items1 = [closure_7];
  const stateFromStores1 = onTaskComplete(link_code[17]).useStateFromStores(items1, () => outer1_7.getAreLinkedUsersProcessed());
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
  const tmp12 = stateFromStores3(React.useState(someResult), 2);
  const first = tmp12[0];
  if (someResult) {
    someResult = !first;
  }
  if (someResult) {
    tmp12[1](true);
  }
  let obj10 = onTaskComplete(link_code[17]);
  const items2 = [closure_7];
  link_code = obj10.useStateFromStores(items2, () => outer1_7.getLinkCode());
  const tmp2Result2 = onTaskComplete(link_code[17]);
  const items3 = [closure_7];
  const stateFromStores2 = onTaskComplete(link_code[17]).useStateFromStores(items3, () => outer1_7.getLinkCodeExpiresAt());
  if (null == link_code) {
    link_code = obj.link_code;
  }
  let parsed = stateFromStores2;
  if (null == stateFromStores2) {
    const _Date = Date;
    parsed = Date.parse(obj.link_code_expires_at);
  }
  const obj12 = onTaskComplete(link_code[17]);
  const items4 = [closure_8];
  stateFromStores3 = onTaskComplete(link_code[17]).useStateFromStores(items4, () => outer1_8.getCurrentUser());
  const items5 = [stateFromStores3, link_code];
  const callback = React.useCallback(() => {
    let tmp = null != stateFromStores3;
    if (tmp) {
      tmp = "" !== link_code;
    }
    if (tmp) {
      const result = onTaskComplete(link_code[18]).shareGuardianConnectLink(stateFromStores3, link_code);
      const obj = onTaskComplete(link_code[18]);
    }
  }, items5);
  const obj13 = onTaskComplete(link_code[17]);
  const derivedPendingRequests = onTaskComplete(link_code[19]).useDerivedPendingRequests(obj.pending_requests, stateFromStores1);
  const obj14 = onTaskComplete(link_code[19]);
  [tmp21, tmp22] = stateFromStores3(React.useState(false), 2);
  React = tmp22;
  // CreateGeneratorClosureLongIndex (0x67)
  const items6 = [onTaskComplete];
  const items7 = [link_code, parsed, getLinkCode];
  const callback1 = React.useCallback(parsed(tmp22), items6);
  const callback2 = React.useCallback(() => {
    let obj = getLinkCode(link_code[24]);
    obj = { linkCode: link_code, expiresAt: parsed, onRefresh: getLinkCode };
    const intl = onTaskComplete(link_code[22]).intl;
    obj.title = intl.string(getLinkCode(link_code[23]).dMMSA0);
    const intl2 = onTaskComplete(link_code[22]).intl;
    obj.body = intl2.format(getLinkCode(link_code[23])["6GaRTu"], { link: "https://support.discord.com/hc/articles/14155060633623" });
    obj.openLazy(onTaskComplete(link_code[26])(link_code[25], link_code.paths), outer1_9, obj);
  }, items7);
  obj = {};
  const tmp20 = stateFromStores3(React.useState(false), 2);
  const tmp25 = callback;
  let intl = onTaskComplete(link_code[22]).intl;
  obj.title = intl.string(getLinkCode(link_code[23]).dMMSA0);
  let intl2 = onTaskComplete(link_code[22]).intl;
  const format = intl2.format;
  const tmp27 = getLinkCode(link_code[23]);
  if (first) {
    obj1 = { pendingCount: length, link: "https://support.discord.com/hc/articles/14155060633623" };
    let formatResult = format(tmp27["Ke+kz5"], obj1);
  } else {
    obj2 = { link: "https://support.discord.com/hc/articles/14155060633623" };
    formatResult = format(tmp27["6GaRTu"], obj2);
  }
  obj.subtitle = formatResult;
  obj.subtitleColor = "text-muted";
  obj.submitting = tmp21;
  const obj3 = {};
  const obj4 = { spacing: getLinkCode(link_code[9]).space.PX_16 };
  const items8 = [callback(getLinkCode(link_code[30]), {}), ];
  let tmp32Result = first;
  if (first) {
    const obj5 = { variant: "primary" };
    const intl3 = onTaskComplete(link_code[22]).intl;
    obj5.text = intl3.string(getLinkCode(link_code[23]).OaHZUf);
    obj5.disabled = !hasActiveParentLinks || tmp21;
    obj5.loading = tmp21;
    obj5.onPress = callback1;
    tmp32Result = callback(onTaskComplete(link_code[31]).ModalActionButton, obj5);
    const tmp32 = callback;
  }
  items8[1] = tmp32Result;
  obj4.children = items8;
  obj3.children = callback2(onTaskComplete(link_code[29]).Stack, obj4);
  obj.footer = callback(onTaskComplete(link_code[28]).ModalFooter, obj3);
  const obj6 = { spacing: getLinkCode(link_code[9]).space.PX_16, style: tmp.body };
  if (first) {
    const obj7 = { pendingRequests: derivedPendingRequests, linkedUsersProcessed: stateFromStores1, expiresAt: parsed, onRefreshLinkCode: getLinkCode, onShare: callback, onInviteAnotherGuardian: callback2 };
    let tmp43 = callback(getLinkCode(link_code[32]), obj7);
  } else {
    const obj8 = { style: tmp.cardSection };
    const obj9 = { style: tmp.cardTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    const intl4 = onTaskComplete(link_code[22]).intl;
    obj9.children = intl4.string(getLinkCode(link_code[34]).pojgfk);
    const items9 = [callback(onTaskComplete(link_code[33]).Text, obj9), ];
    obj10 = { shareActions: "full", linkCode: link_code, expiresAt: parsed, onRefresh: getLinkCode };
    items9[1] = callback(onTaskComplete(link_code[35]).ConnectGuardianCard, obj10);
    obj8.children = items9;
    tmp43 = callback2(View, obj8);
  }
  obj6.children = tmp43;
  obj.children = callback(onTaskComplete(link_code[29]).Stack, obj6);
  return tmp25(getLinkCode(link_code[27]), obj);
};
