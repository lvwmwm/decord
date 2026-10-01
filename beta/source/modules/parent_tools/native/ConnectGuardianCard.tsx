// Module ID: 14417
// Function ID: 14418
// Name: ConnectGuardianCard
// Dependencies: [19, 17, 1372, 6958, 21, 4836, 576, 563, 6859, 14413, 14414, 6610, 4527, 1115, 2487, 5279, 9319, 4832, 5481, 5281, 12470, 5745, 2]
// Exports: ConnectGuardianCard

// Module 14417 (ConnectGuardianCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import shareGuardianConnectLink from "shareGuardianConnectLink" /* 14414 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
let closure_6 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, compactContainer: obj3, card: obj4, countdown: { textAlign: "center" }, divider: obj5, compactDividerFlush: { paddingHorizontal: 0 }, dividerLine: obj6, dividerText: obj7, buttonGroup: { paddingTop: 0 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
obj4 = { alignSelf: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj5 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj6 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj7 = { marginHorizontal: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = function ConnectGuardianCard(linkCode) {
  let ShareIcon;
  let Stack2;
  let currentUser;
  let days;
  let expiresAt;
  let hours;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items5;
  let items6;
  let items7;
  let items8;
  let minutes;
  let obj12;
  let obj3;
  let seconds;
  let shareActions;
  let string;
  let tmp2Result;
  let tmp6Result;
  linkCode = linkCode.linkCode;
  ({ expiresAt, shareActions } = linkCode);
  const onRefresh = linkCode.onRefresh;
  if (shareActions === undefined) {
    shareActions = "none";
  }
  let id;
  let tmp = closure_9();
  let tmp2 = linkCode;
  let obj = linkCode(id[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6 = stateFromStores;
  ({ days, hours, minutes, seconds } = stateFromStores(id[8])(expiresAt));
  const tmp7 = stateFromStores(id[8])(expiresAt);
  stateFromStores(id[9])(expiresAt, onRefresh);
  const items1 = [stateFromStores, linkCode];
  const callback = react.useCallback(() => {
    let tmp2 = null != stateFromStores;
    const tmp = stateFromStores;
    if (tmp2) {
      tmp2 = "" !== linkCode;
    }
    if (tmp2) {
      const obj = shareGuardianConnectLink;
      const result = obj.shareGuardianConnectLink(tmp, linkCode);
    }
  }, items1);
  const items2 = [id, linkCode];
  if (null == id) {
    return null;
  } else {
    const tmp17 = closure_6(id, linkCode);
    const intl5 = tmp2(tmp3[13]).intl;
    const obj2 = { style: tmp.card, children: closure_8(Stack2, obj3) };
    obj3 = { align: "center", spacing: tmp6(id[6]).space.PX_8, children: items3 };
    const stringResult = intl5.string(tmp6(id[14]).RfkLDs);
    Stack2 = tmp2(tmp3[15]).Stack;
    const obj4 = { size: 160, text: tmp17 };
    items3 = [closure_7(tmp2(tmp3[16]).QRCodeWithOverlay, obj4), ];
    const obj5 = { style: tmp.countdown, variant: "text-xs/normal", children: "" + stringResult + " " + tmp2Result.getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds) };
    const Text2 = tmp2(tmp3[17]).Text;
    const _HermesInternal = HermesInternal;
    tmp2Result = tmp2(id[18]);
    items3[1] = closure_7(Text2, obj5);
    const tmp23 = closure_7(View, obj2);
    if ("none" === shareActions) {
      return tmp23;
    } else {
      let tmp21Result2;
      const items4 = [tmp.divider, ];
      const obj6 = { style: items4, children: items5 };
      const tmp11 = "compact" === shareActions && tmp.compactDividerFlush;
      items4[1] = tmp11;
      const obj7 = { style: tmp.dividerLine };
      items5 = [closure_7(View, obj7), , ];
      const obj8 = { style: tmp.dividerText, variant: "text-sm/medium", color: "text-muted", children: string("compact" === shareActions ? tmp6Result.XhROZk : tmp6Result.lggBOi) };
      const Text = tmp2(tmp3[17]).Text;
      const intl = tmp2(tmp3[13]).intl;
      string = intl.string;
      tmp6Result = tmp6(id[14]);
      items5[1] = closure_7(Text, obj8);
      const obj9 = { style: tmp.dividerLine };
      items5[2] = closure_7(View, obj9);
      const tmp21Result = closure_8(View, obj6);
      if ("compact" === shareActions) {
        const obj10 = { style: tmp.compactContainer, children: items6 };
        items6 = [tmp23, tmp21Result, ];
        const obj11 = { variant: "secondary", size: "md", text: intl4.string(tmp2(id[13]).t.Ej3B3Y), icon: closure_7(ShareIcon, obj12), disabled: "" === linkCode, onPress: callback };
        const Button3 = tmp2(tmp3[19]).Button;
        intl4 = tmp2(tmp3[13]).intl;
        obj12 = { size: "md", color: tmp6(id[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
        ShareIcon = tmp2(tmp3[20]).ShareIcon;
        items6[2] = closure_7(Button3, obj11);
        tmp21Result2 = tmp21(tmp20, obj10);
      } else {
        const obj13 = { spacing: tmp6(id[6]).space.PX_32, style: tmp.container, children: items7 };
        const Stack = tmp2(tmp3[15]).Stack;
        items7 = [tmp23, tmp21Result, ];
        const obj14 = { style: tmp.buttonGroup, children: items8 };
        const ButtonGroup = tmp2(tmp3[21]).ButtonGroup;
        const obj15 = { variant: "secondary", size: "md", text: intl2.string(tmp2(id[13]).t.Ej3B3Y), disabled: "" === linkCode, onPress: callback };
        const Button = tmp2(tmp3[19]).Button;
        intl2 = tmp2(tmp3[13]).intl;
        items8 = [closure_7(Button, obj15), ];
        const obj16 = { variant: "secondary", size: "md", text: intl3.string(tmp2(id[13]).t.WqhZss), disabled: "" === linkCode, onPress: tmp10 };
        const Button2 = tmp2(tmp3[19]).Button;
        intl3 = tmp2(tmp3[13]).intl;
        items8[1] = closure_7(Button2, obj16);
        items7[2] = closure_8(ButtonGroup, obj14);
        tmp21Result2 = tmp21(Stack, obj13);
      }
      return tmp21Result2;
    }
  }
};
