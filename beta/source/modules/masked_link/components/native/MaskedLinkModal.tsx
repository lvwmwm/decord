// Module ID: 12510
// Function ID: 12511
// Name: MaskedLinkModal
// Dependencies: [17, 21, 4836, 576, 12507, 5209, 1115, 5209, 5279, 8053, 4832, 2]
// Exports: default

// Module 12510 (MaskedLinkModal)
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import SharedStateUtils from "SharedStateUtils" /* 12507 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { linkCalloutContainer: { maxHeight: 250 }, emphasis: obj2 };
obj2 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default function MaskedLinkModal(isProtocol) {
  let AlertActions;
  let FormRow;
  let Stack;
  let Text;
  let Text4;
  let authorityPrefix;
  let formatResult;
  let formatResult1;
  let handleCancel;
  let handleConfirm;
  let hostname;
  let intl;
  let intl4;
  let items;
  let items1;
  let obj10;
  let obj11;
  let obj15;
  let obj4;
  let onCancel;
  let onConfirm;
  let protocol;
  let shouldTrustUrl;
  let str2;
  let str4;
  let stringResult;
  let theRestOfTheUrl;
  let trustUrl;
  let url;
  isProtocol = isProtocol.isProtocol;
  shouldTrustUrl = undefined;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = closure_6();
  const obj = SharedStateUtils;
  const modalState = obj.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  const setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  const obj2 = { title: intl.string(intl6.t["3w1QGl"]), content: formatResult, actions: hasOwnProperty(AlertActions, obj4), extraContent: hasOwnProperty(Stack, obj15) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl6.intl;
  const intl2 = intl6.intl;
  if (isProtocol) {
    formatResult = intl2.format(tmp2(1115).t.aCYv1z, {});
  } else {
    formatResult = intl2.string(tmp2(1115).t.soRxRe);
  }
  AlertActions = tmp2(5209).AlertActions;
  const obj3 = { variant: "primary", onPress: handleConfirm, text: stringResult };
  const AlertActionButton = tmp2(5209).AlertActionButton;
  const intl3 = tmp2(1115).intl;
  const string = intl3.string;
  const t = tmp2(1115).t;
  if (isProtocol) {
    stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  obj4 = { children: items };
  items = [React3(AlertActionButton, obj3, "confirm"), ];
  const obj5 = { onPress: handleCancel, variant: "secondary", text: intl4.string(intl6.t["/g10LC"]) };
  const AlertActionButton2 = tmp2(5209).AlertActionButton;
  intl4 = tmp2(1115).intl;
  items[1] = React3(AlertActionButton2, obj5, "cancel");
  const obj6 = { style: tmp.emphasis, children: React3(FormRow, obj10) };
  Stack = tmp2(5279).Stack;
  const obj7 = { style: tmp.linkCalloutContainer, children: hasOwnProperty(Text, obj11) };
  FormRow = tmp2(8053).FormRow;
  Text = tmp2(4832).Text;
  let str = "text-md/normal";
  const Text2 = tmp2(4832).Text;
  const tmp10 = _false;
  const tmp9 = React2;
  if (isProtocol) {
    str = "text-md/semibold";
  }
  const obj8 = { variant: str, color: str2, children: items1 };
  str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  items1 = [protocol, authorityPrefix];
  const items2 = [hasOwnProperty(Text2, obj8), , ];
  let str3 = "text-md/semibold";
  const Text3 = tmp2(4832).Text;
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  const obj9 = { variant: str3, color: str4, children: hostname };
  str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  obj10 = { start: true, end: true, label: React3(tmp10, obj7) };
  obj11 = { variant: "text-md/normal", children: items2 };
  items2[1] = React3(Text3, obj9);
  items2[2] = React3(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl });
  const items3 = [React3(tmp9, obj6), ];
  const obj12 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    },
    label: React3(Text4, { variant: "text-md/medium", children: formatResult1 })
  };
  const FormCheckboxRow = tmp2(8053).FormCheckboxRow;
  Text4 = tmp2(4832).Text;
  const intl5 = tmp2(1115).intl;
  const format = intl5.format;
  const t2 = tmp2(1115).t;
  if (isProtocol) {
    const prop = t2["haA+Xw"];
    const obj13 = { protocol: protocol.replace(":", "") };
    formatResult1 = format(prop, obj13);
  } else {
    const obj14 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj14);
  }
  obj15 = { spacing: 16, children: items3 };
  items3[1] = React3(FormCheckboxRow, obj12);
  return React3(AlertModal, obj2);
};
