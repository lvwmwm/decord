// Module ID: 11363
// Function ID: 11364
// Name: AutomatedUnderageAppealActionSheet
// Dependencies: [19, 17, 7881, 7868, 21, 4836, 576, 1115, 504, 1613, 11362, 7859, 7861, 4800, 6571, 6045, 4832, 5999, 5917, 4525, 5281, 11360, 2]
// Exports: default

// Module 11363 (AutomatedUnderageAppealActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRow2 from "TableRow" /* 5917 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import SafetyHubActionCreators from "SafetyHubActionCreators" /* 11360 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11362 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c9;
let intl;
let intl2;
let intl3;
let intl4;
let intl5;
let intl6;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
({ AGE_APPEAL_ACTION_SHEET_NAME: metroRequire, SafetyHubLinks: metroImportDefault } = SafetyHubConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { alignItems: "center" }, content: obj3, moreInfo: obj4, learnMore: obj5, footer: obj6, number: size };
obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
size = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_10 = createStyles(obj);
let obj7 = { title: intl.string(intl8.t["1+E7LP"]), description: intl2.string(intl8.t["BXiat/"]) };
intl = intl8.intl;
intl2 = intl8.intl;
let items = [obj7, , ];
let obj8 = { title: intl3.string(intl8.t.iMQXtK), description: intl4.string(intl8.t.oQ0vwu) };
intl3 = intl8.intl;
intl4 = intl8.intl;
items[1] = obj8;
let obj9 = { title: intl5.string(intl8.t["oY/z1Q"]), description: intl6.string(intl8.t.wtj02W) };
intl5 = intl8.intl;
intl6 = intl8.intl;
items[2] = obj9;
size = size_mod;
let result = size.fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default function AutomatedUnderageAppealActionSheet(onClose) {
  let BottomSheetScrollView;
  let TableRow;
  let TableRowGroup;
  let TableRowGroup2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items5;
  let items6;
  let items7;
  let number;
  let obj11;
  let obj13;
  let obj14;
  let obj18;
  let obj4;
  let obj5;
  let obj6;
  let sum1;
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let callback1;
  const tmp = closure_10();
  dependencyMap = tmp;
  let obj = onClose(504);
  items = [callback1];
  const stateFromStores = obj.useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj2 = onClose(504);
  const items1 = [callback1];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1613)().bottom;
  const items2 = [onClose];
  const callback = stateFromStores.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
    obj.close();
  }, items2);
  const items3 = [callback];
  callback1 = stateFromStores.useCallback(() => {
    const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
    obj.success();
    callback();
    const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
    const result = obj2.start_verification_check();
  }, items3);
  const items4 = [stateFromStores, callback1];
  const effect = stateFromStores.useEffect(() => {
    if ("" !== stateFromStores) {
      const obj = { webviewUrl: tmp, onComplete: callback1, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      const showAgeVerification = AgeVerificationActionCreatorsDefault.showAgeVerification;
      AgeVerificationActionCreatorsDefault;
      showAgeVerification(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(metroRequire);
    }
  }, items4);
  let obj3 = { scrollable: true, startHeight: sum1 + classificationId(576).space.PX_32, children: closure_8(BottomSheetScrollView, obj4) };
  BottomSheet = onClose(6571).BottomSheet;
  const sum = 425 + bottom;
  sum1 = sum + classificationId(576).space.PX_16;
  obj4 = { style: tmp.container, children: closure_9(callback, obj5) };
  obj5 = { style: obj6, children: items6 };
  obj6 = { paddingBottom: bottom };
  BottomSheetScrollView = onClose(6045).BottomSheetScrollView;
  const merged = Object.assign(tmp.content);
  const obj7 = { style: tmp.header, children: items5 };
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(onClose(1115).t["9SDLnj"]) };
  const Text = onClose(4832).Text;
  intl = onClose(1115).intl;
  items5 = [closure_8(Text, obj8), ];
  const obj9 = { variant: "heading-md/medium", color: "text-default", children: intl2.string(onClose(1115).t["yvx//1"]) };
  const Text2 = onClose(4832).Text;
  intl2 = onClose(1115).intl;
  items5[1] = closure_8(Text2, obj9);
  items6 = [closure_9(callback, obj7), , , ];
  const obj10 = { children: closure_8(TableRowGroup, obj11) };
  obj11 = {
    hasIcons: true,
    children: items.map((item, index) => {
      let description;
      let obj2;
      let obj3;
      let title;
      ({ title, description } = item);
      const obj = { label: title, subLabel: description, icon: metroImportAll(View, obj2) };
      obj2 = { style: number.number, children: metroImportAll(Text_Text.Text, obj3) };
      const TableRow = TableRow2.TableRow;
      obj3 = { variant: "heading-md/semibold", color: "text-brand", children: index + 1 };
      return metroImportAll(TableRow, obj, index);
    })
  };
  TableRowGroup = onClose(5999).TableRowGroup;
  items6[1] = closure_8(callback, obj10);
  const obj12 = { style: tmp.moreInfo, children: closure_8(TableRowGroup2, obj13) };
  obj13 = { title: intl3.string(onClose(1115).t.WPwp1b), hasIcons: false, children: closure_8(TableRow, obj14) };
  TableRowGroup2 = onClose(5999).TableRowGroup;
  intl3 = onClose(1115).intl;
  obj14 = {
    label: intl4.string(onClose(1115).t.N9WJMM),
    subLabel: intl5.string(onClose(1115).t.NHq382),
    onPress() {
      const obj = classificationId(number[19]);
      return obj.openURL(constants.AGE_VERIFICATION_LINK);
    },
    arrow: true,
    start: true,
    end: true
  };
  TableRow = onClose(5917).TableRow;
  intl4 = onClose(1115).intl;
  intl5 = onClose(1115).intl;
  items6[2] = closure_8(callback, obj12);
  const obj15 = { style: tmp.footer, children: items7 };
  const obj16 = {
    onPress() {
      const obj = SafetyHubActionCreators;
      return obj.requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1,
    text: intl6.string(onClose(1115).t["54b8V0"])
  };
  const Button = onClose(5281).Button;
  intl6 = onClose(1115).intl;
  items7 = [closure_8(Button, obj16), ];
  const obj17 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore, children: intl7.format(onClose(1115).t.ZbWsOF, obj18) };
  const Text3 = onClose(4832).Text;
  intl7 = onClose(1115).intl;
  obj18 = { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK };
  items7[1] = closure_8(Text3, obj17);
  items6[3] = closure_9(callback, obj15);
  return closure_8(BottomSheet, obj3);
};
