// Module ID: 14415
// Function ID: 14416
// Name: ConnectGuardianBottomSheet
// Dependencies: [19, 17, 6957, 6958, 21, 4836, 576, 563, 4800, 14416, 6571, 4832, 1115, 2487, 14417, 5281, 2]
// Exports: default

// Module 14415 (ConnectGuardianBottomSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import _modDef2487 from "module_2487" /* 2487 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 14416 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
let closure_6 = FamilyCenterConstants.CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, info: obj3, centered: { textAlign: "center" }, cardContainer: { alignItems: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(arg0) {
  let ConnectGuardianCard;
  let body;
  let expiresAt;
  let intl3;
  let items2;
  let items3;
  let linkCode;
  let obj8;
  let onRefresh;
  let title;
  ({ title, body } = arg0);
  ({ linkCode, expiresAt, onRefresh } = arg0);
  const tmp = closure_9();
  let obj = useStateFromStores;
  const items = [FamilyCenterStore];
  let stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  const items1 = [FamilyCenterStore];
  const obj2 = useStateFromStores;
  let stateFromStores1 = obj2.useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(closure_1_6);
  }, []);
  useOnNewPendingRequestDefault(callback);
  const obj3 = { style: tmp.container, children: items3 };
  const obj4 = { style: tmp.info, children: items2 };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj5 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title };
  const Text = Text_Text.Text;
  if (title == null) {
    const intl = tmp2(1115).intl;
    title = intl.string(tmp7(2487).aCUVfL);
  }
  items2 = [metroImportDefault(Text, obj5), ];
  const obj6 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: body };
  const Text2 = tmp2(4832).Text;
  if (body == null) {
    const intl2 = tmp2(1115).intl;
    body = intl2.format(tmp7(2487)["2O6ltn"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  }
  items2[1] = metroImportDefault(Text2, obj6);
  items3 = [metroImportAll(View, obj4), , ];
  const obj7 = { style: tmp.cardContainer, children: metroImportDefault(ConnectGuardianCard, obj8) };
  ConnectGuardianCard = tmp2(14417).ConnectGuardianCard;
  if (stateFromStores == null) {
    stateFromStores = linkCode;
  }
  obj8 = { linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh };
  if (stateFromStores1 == null) {
    stateFromStores1 = expiresAt;
  }
  const obj9 = { startExpanded: true, children: metroImportAll(View, obj3) };
  items3[1] = metroImportDefault(View, obj7);
  const obj10 = { variant: "secondary", size: "md", text: intl3.string(_modDef2487.Hsm5IF), onPress: callback };
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items3[2] = metroImportDefault(Button, obj10);
  return metroImportDefault(BottomSheet, obj9);
};
