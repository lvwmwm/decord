// Module ID: 19016
// Function ID: 19017
// Name: AppIconsCoachmark
// Dependencies: [19, 17, 1383, 4860, 21, 5014, 575, 504, 2047, 5258, 5272, 5717, 19017, 1187, 10048, 5624, 1113, 5634, 15340, 2]
// Exports: default

// Module 19016 (AppIconsCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 10048 */;
import AppIconUtils from "AppIconUtils" /* 15340 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19017 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, info: { alignItems: "center" }, image: { alignSelf: "center", marginBottom: 20 }, nitroWheel: { marginRight: 8 }, titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, footer: obj3 };
obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
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
  const tmp = closure_9();
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
  BottomSheet = markAsDismissed(5272).BottomSheet;
  const obj5 = { source: AssetRegistryDefault2, style: tmp.image };
  const tmp10 = FastImageDefault;
  items2 = [closure_7(tmp10, obj5), , ];
  const obj6 = { style: tmp.titleContainer, children: items3 };
  const obj7 = { source: AssetRegistryDefault, size: markAsDismissed(1187).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true };
  const Icon = markAsDismissed(1187).Icon;
  items3 = [closure_7(Icon, obj7), ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1113).t.EfA4Cq) };
  const Text = markAsDismissed(5624).Text;
  intl = markAsDismissed(1113).intl;
  items3[1] = closure_7(Text, obj8);
  items2[1] = closure_8(View, obj6);
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: stringResult };
  const Text2 = markAsDismissed(5624).Text;
  const intl2 = markAsDismissed(1113).intl;
  const string = intl2.string;
  const t = markAsDismissed(1113).t;
  if (isPremiumResult) {
    stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  items2[2] = closure_7(Text2, obj9);
  items4 = [closure_8(View, obj4), ];
  const obj10 = { style: tmp.footer, children: items5 };
  const obj11 = {
    text: intl3.string(tmp2(1113).t.Pt547C),
    onPress: function handleOnTryIt() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp3(ContentDismissActionType.PRIMARY);
      }
      const obj2 = AppIconUtils;
      const result = obj2.navigateToAppIconSettings();
    }
  };
  const Button = tmp2(5634).Button;
  intl3 = tmp2(1113).intl;
  items5 = [closure_7(Button, obj11), ];
  const obj12 = { variant: "secondary", text: intl4.string(tmp2(1113).t.iSrIIZ), onPress: callback };
  const Button2 = tmp2(5634).Button;
  intl4 = tmp2(1113).intl;
  items5[1] = closure_7(Button2, obj12);
  items4[1] = closure_8(View, obj10);
  return closure_8(BottomSheet, obj3);
};
