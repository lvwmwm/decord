// Module ID: 16721
// Function ID: 16722
// Name: FamilyCenterActivityPage
// Dependencies: [19, 17, 21, 5009, 575, 8361, 7286, 16722, 16724, 16734, 13311, 16738, 2]
// Exports: default

// Module 16721 (FamilyCenterActivityPage)
import nativeDefault from "native" /* 575 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import useUserLinks from "useUserLinks" /* 8361 */;
import FamilyCenterDataConfirmationDefault from "FamilyCenterDataConfirmation" /* 13311 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 16722 */;
import FamilyCenterActivityBannerDefault from "FamilyCenterActivityBanner" /* 16724 */;
import FamilyCenterFeatureRowDefault from "FamilyCenterFeatureRow" /* 16734 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, dataConfirmation: obj2, container: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  let SafeAreaPaddingView;
  let items;
  let items1;
  let obj6;
  let tmp3Result;
  const tmp = closure_8();
  const obj2 = { style: tmp.scrollView, children: hasOwnProperty(SafeAreaPaddingView, obj6) };
  const obj = useUserLinks;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const obj3 = { style: tmp.container, children: items };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {}), ];
  const tmp4 = React3;
  if (0 === activeLinkUserIds.length) {
    const obj4 = { children: items1 };
    items1 = [hasOwnProperty(FamilyCenterActivityBannerDefault, {}), hasOwnProperty(FamilyCenterFeatureRowDefault, {}), ];
    const obj5 = { style: tmp.dataConfirmation, children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}) };
    items1[2] = hasOwnProperty(_false, obj5);
    tmp3Result = tmp5(metroRequire, obj4);
  } else {
    tmp3Result = tmp3(tmp7(16738), {});
  }
  items[1] = tmp3Result;
  obj6 = { bottom: true, children: metroImportDefault(_false, obj3) };
  return hasOwnProperty(tmp4, obj2);
};
