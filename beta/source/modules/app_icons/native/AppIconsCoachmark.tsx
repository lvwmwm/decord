// Module ID: 16748
// Function ID: 16749
// Name: AppIconsCoachmark
// Dependencies: [19, 17, 1372, 2042, 21, 4836, 576, 504, 4488, 4800, 6571, 16749, 1177, 9419, 4832, 1115, 5281, 12995, 2]
// Exports: default

// Module 16748 (AppIconsCoachmark)
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AssetRegistryDefault from "AssetRegistry" /* 9419 */;
import AppIconUtils from "AppIconUtils" /* 12995 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16749 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, info: { alignItems: "center" }, image: { alignSelf: "center", marginBottom: 20 }, nitroWheel: { marginRight: 8 }, titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, footer: obj3 };
obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  let currentUser;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  const tmp2 = markAsDismissed;
  const tmp3 = dependencyMap;
  let obj = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = PremiumUtilsDefault;
  const items1 = [markAsDismissed];
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }, items1);
  const obj3 = {
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    contentStyles: tmp.container,
    children: items4
  };
  const obj4 = { style: tmp.info, children: items2 };
  const obj5 = { source: AssetRegistryDefault2, style: tmp.image };
  BottomSheet = markAsDismissed(6571).BottomSheet;
  items2 = [closure_8(closure_4, obj5), , ];
  const obj6 = { style: tmp.titleContainer, children: items3 };
  const obj7 = { source: AssetRegistryDefault, size: markAsDismissed(1177).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true };
  const Icon = markAsDismissed(1177).Icon;
  items3 = [closure_8(Icon, obj7), ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1115).t.EfA4Cq) };
  const Text = markAsDismissed(4832).Text;
  intl = markAsDismissed(1115).intl;
  items3[1] = closure_8(Text, obj8);
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: stringResult };
  const Text2 = markAsDismissed(4832).Text;
  const intl2 = markAsDismissed(1115).intl;
  const string = intl2.string;
  const t = markAsDismissed(1115).t;
  if (isPremiumResult) {
    stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  items2[2] = closure_8(Text2, obj9);
  items4 = [closure_9(closure_5, obj4), ];
  const obj10 = { style: tmp.footer, children: items5 };
  const obj11 = {
    text: intl3.string(tmp2(1115).t.Pt547C),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp3(ContentDismissActionType.PRIMARY);
      }
      const obj2 = AppIconUtils;
      const result = obj2.navigateToAppIconSettings();
    }
  };
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items5 = [closure_8(Button, obj11), ];
  const obj12 = { variant: "secondary", text: intl4.string(tmp2(1115).t.iSrIIZ), onPress: callback };
  const Button2 = tmp2(5281).Button;
  intl4 = tmp2(1115).intl;
  items5[1] = closure_8(Button2, obj12);
  items4[1] = closure_9(closure_5, obj10);
  return closure_9(BottomSheet, obj3);
};
