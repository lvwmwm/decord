// Module ID: 12225
// Function ID: 95482
// Name: MaskedLinkModal
// Dependencies: [27, 33, 4130, 689, 12222, 4475, 1212, 4475, 4541, 7495, 4126, 2]
// Exports: default

// Module 12225 (MaskedLinkModal)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
({ View: closure_2, ScrollView: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { linkCalloutContainer: { maxHeight: 250 } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.emphasis = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default function MaskedLinkModal(isProtocol) {
  let authorityPrefix;
  let handleCancel;
  let handleConfirm;
  let hostname;
  let onCancel;
  let onConfirm;
  let protocol;
  let shouldTrustUrl;
  let theRestOfTheUrl;
  let trustUrl;
  let url;
  isProtocol = isProtocol.isProtocol;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = callback2();
  let obj = shouldTrustUrl(setShouldTrustUrl[4]);
  const modalState = obj.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  obj = {};
  const intl = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  obj.title = intl.string(shouldTrustUrl(setShouldTrustUrl[6]).t["3w1QGl"]);
  const intl2 = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  if (isProtocol) {
    let formatResult = intl2.format(tmp4(tmp5[6]).t.aCYv1z, {});
  } else {
    formatResult = intl2.string(tmp4(tmp5[6]).t.soRxRe);
  }
  obj.content = formatResult;
  obj = {};
  const obj1 = { variant: "primary", onPress: handleConfirm };
  const intl3 = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  const string = intl3.string;
  const t = shouldTrustUrl(setShouldTrustUrl[6]).t;
  if (isProtocol) {
    let stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  obj1.text = stringResult;
  const items = [callback(shouldTrustUrl(setShouldTrustUrl[5]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { onPress: handleCancel, variant: "secondary" };
  const intl4 = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  obj2.text = intl4.string(shouldTrustUrl(setShouldTrustUrl[6]).t["/g10LC"]);
  items[1] = callback(shouldTrustUrl(setShouldTrustUrl[5]).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = closure_5(shouldTrustUrl(setShouldTrustUrl[7]).AlertActions, obj);
  const obj3 = { spacing: 16 };
  const obj4 = { style: tmp.emphasis };
  const obj5 = { start: true, end: true };
  const obj6 = { style: tmp.linkCalloutContainer };
  const obj7 = { variant: "text-md/normal" };
  const obj8 = {};
  let str = "text-md/normal";
  if (isProtocol) {
    str = "text-md/semibold";
  }
  obj8.variant = str;
  let str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  obj8.color = str2;
  const items1 = [protocol, authorityPrefix];
  obj8.children = items1;
  const items2 = [closure_5(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj8), , ];
  const obj9 = {};
  let str3 = "text-md/semibold";
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  obj9.variant = str3;
  let str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  obj9.color = str4;
  obj9.children = hostname;
  items2[1] = callback(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj9);
  const obj10 = { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl };
  items2[2] = callback(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj10);
  obj7.children = items2;
  obj6.children = closure_5(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj7);
  obj5.label = callback(closure_3, obj6);
  obj4.children = callback(shouldTrustUrl(setShouldTrustUrl[9]).FormRow, obj5);
  const items3 = [callback(closure_2, obj4), ];
  const obj11 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    }
  };
  const obj12 = { variant: "text-md/medium" };
  const intl5 = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  const format = intl5.format;
  const t2 = shouldTrustUrl(setShouldTrustUrl[6]).t;
  if (isProtocol) {
    const obj13 = { protocol: protocol.replace(":", "") };
    let formatResult1 = format(t2["haA+Xw"], obj13);
  } else {
    const obj14 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj14);
  }
  obj12.children = formatResult1;
  obj11.label = callback(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj12);
  items3[1] = callback(shouldTrustUrl(setShouldTrustUrl[9]).FormCheckboxRow, obj11);
  obj3.children = items3;
  obj.extraContent = closure_5(shouldTrustUrl(setShouldTrustUrl[8]).Stack, obj3);
  return callback(shouldTrustUrl(setShouldTrustUrl[5]).AlertModal, obj);
};
