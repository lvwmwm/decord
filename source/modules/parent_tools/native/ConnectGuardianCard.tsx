// Module ID: 13835
// Function ID: 106001
// Name: ConnectGuardianCard
// Dependencies: [31, 27, 1849, 6770, 33, 4130, 689, 624, 6678, 13831, 13832, 5490, 3830, 1212, 2198, 4541, 12198, 4126, 4704, 4543, 12254, 4965, 2]
// Exports: ConnectGuardianCard

// Module 13835 (ConnectGuardianCard)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_6 } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.compactContainer = { alignSelf: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { alignSelf: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_NORMAL };
_createForOfIteratorHelperLoose.card = obj2;
_createForOfIteratorHelperLoose.countdown = { textAlign: "center" };
let obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.divider = obj3;
_createForOfIteratorHelperLoose.compactDividerFlush = { paddingHorizontal: 0 };
let obj4 = { flex: 1, height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_NORMAL };
_createForOfIteratorHelperLoose.dividerLine = obj4;
let obj1 = { alignSelf: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.dividerText = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonGroup = { paddingTop: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = function ConnectGuardianCard(linkCode) {
  let days;
  let expiresAt;
  let hours;
  let minutes;
  let seconds;
  let shareActions;
  linkCode = linkCode.linkCode;
  ({ expiresAt, shareActions } = linkCode);
  if (shareActions === undefined) {
    shareActions = "none";
  }
  let stateFromStores;
  let id;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = linkCode(id[7]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  id = undefined;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  ({ days, hours, minutes, seconds } = stateFromStores(id[8])(expiresAt));
  stateFromStores(id[9])(expiresAt, linkCode.onRefresh);
  const items1 = [stateFromStores, linkCode];
  const callback = React.useCallback(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = "" !== linkCode;
    }
    if (tmp) {
      const result = linkCode(id[10]).shareGuardianConnectLink(stateFromStores, linkCode);
      const obj = linkCode(id[10]);
    }
  }, items1);
  const items2 = [id, linkCode];
  if (null == id) {
    return null;
  } else {
    const intl5 = linkCode(id[13]).intl;
    obj = { style: tmp.card };
    const tmp31 = callback(id, linkCode);
    obj = { align: "center", spacing: stateFromStores(id[6]).space.PX_8 };
    const obj1 = { size: 160, text: tmp31 };
    const items3 = [callback2(linkCode(id[16]).QRCodeWithOverlay, obj1), ];
    const obj2 = { style: tmp.countdown, variant: "text-xs/normal" };
    const stringResult = intl5.string(stateFromStores(id[14]).RfkLDs);
    const _HermesInternal = HermesInternal;
    obj2.children = "" + stringResult + " " + linkCode(id[18]).getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds);
    items3[1] = callback2(linkCode(id[17]).Text, obj2);
    obj.children = items3;
    obj.children = callback3(linkCode(id[15]).Stack, obj);
    const tmp40 = callback2(View, obj);
    if ("none" === shareActions) {
      return tmp40;
    } else {
      const obj3 = {};
      const items4 = [tmp.divider, ];
      let compactDividerFlush = tmp41;
      if ("compact" === shareActions) {
        compactDividerFlush = tmp.compactDividerFlush;
      }
      items4[1] = compactDividerFlush;
      obj3.style = items4;
      const obj4 = { style: tmp.dividerLine };
      const items5 = [callback2(View, obj4), , ];
      const obj5 = { style: tmp.dividerText, variant: "text-sm/medium", color: "text-muted" };
      const intl = linkCode(id[13]).intl;
      const tmp14 = stateFromStores(id[14]);
      obj5.children = intl.string("compact" === shareActions ? tmp14.XhROZk : tmp14.lggBOi);
      items5[1] = callback2(linkCode(id[17]).Text, obj5);
      const obj6 = { style: tmp.dividerLine };
      items5[2] = callback2(View, obj6);
      obj3.children = items5;
      const tmp42Result = callback3(View, obj3);
      if ("compact" === shareActions) {
        const obj7 = { style: tmp.compactContainer };
        const items6 = [tmp40, tmp42Result, ];
        const obj8 = { variant: "secondary", size: "md" };
        const intl4 = linkCode(id[13]).intl;
        obj8.text = intl4.string(linkCode(id[13]).t.Ej3B3Y);
        const obj9 = { size: "md", color: stateFromStores(id[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
        obj8.icon = callback2(linkCode(id[20]).ShareIcon, obj9);
        obj8.disabled = "" === linkCode;
        obj8.onPress = callback;
        items6[2] = callback2(linkCode(id[19]).Button, obj8);
        obj7.children = items6;
        let tmp18Result = tmp18(View, obj7);
      } else {
        const obj10 = { spacing: stateFromStores(id[6]).space.PX_32, style: tmp.container };
        const items7 = [tmp40, tmp42Result, ];
        const obj11 = { style: tmp.buttonGroup };
        const obj12 = { variant: "secondary", size: "md" };
        const intl2 = linkCode(id[13]).intl;
        obj12.text = intl2.string(linkCode(id[13]).t.Ej3B3Y);
        obj12.disabled = "" === linkCode;
        obj12.onPress = callback;
        const items8 = [callback2(linkCode(id[19]).Button, obj12), ];
        const obj13 = { variant: "secondary", size: "md" };
        const intl3 = linkCode(id[13]).intl;
        obj13.text = intl3.string(linkCode(id[13]).t.WqhZss);
        obj13.disabled = "" === linkCode;
        obj13.onPress = tmp7;
        items8[1] = callback2(linkCode(id[19]).Button, obj13);
        obj11.children = items8;
        items7[2] = tmp18(linkCode(id[21]).ButtonGroup, obj11);
        obj10.children = items7;
        tmp18Result = tmp18(linkCode(id[15]).Stack, obj10);
      }
      return tmp18Result;
    }
    const obj16 = linkCode(id[18]);
  }
  const tmp4 = stateFromStores(id[8])(expiresAt);
};
