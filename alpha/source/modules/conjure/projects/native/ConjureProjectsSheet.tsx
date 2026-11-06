// Module ID: 13201
// Function ID: 13202
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 21, 5170, 575, 13202, 1627, 9781, 5751, 11012, 7449, 7405, 1113, 4024, 8119, 11124, 5422, 7305, 7151, 7063, 12294, 11118, 13205, 2]
// Exports: default

// Module 13201 (ConjureProjectsSheet)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef4024 from "module_4024" /* 4024 */;
import useMountEffectDefault from "useMountEffect" /* 5751 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7405 */;
import ActionSheet2 from "ActionSheet" /* 7449 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9781 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11012 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11118 */;
import AssetRegistryDefault from "AssetRegistry" /* 11124 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12294 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13202 */;
import ConjureProjectGroupListDefault from "ConjureProjectGroupList" /* 13205 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default function ConjureProjectsSheet() {
  let BottomSheetScrollView;
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj4;
  let obj7;
  let tmp10Result;
  let tmp5;
  let tmp6;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = closure_7(bottom);
  [tmp5, tmp6] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const tmp7 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp7 != null) {
    placement = tmp7.placement;
  }
  useMountEffectDefault(() => {
    const obj = ConjureActionCreators;
    obj.listProjects();
  });
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj = { title: intl.string(_modDef4024.uk6jhJ), trailing: tmp10Result };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  tmp10Result = undefined;
  if ("you_screen" === placement) {
    const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef4024.qCBh6V), onPress: confirmPin };
    const IconButton = tmp11(8119).IconButton;
    intl2 = tmp11(1113).intl;
    tmp10Result = tmp10(IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: hasOwnProperty(BottomSheetTitleHeader, obj), children: metroRequire(BottomSheetScrollView, obj4) };
  obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = tmp11(5422).BottomSheetScrollView;
  const obj5 = { size: "md", onChange: tmp6, placeholder: intl3.string(_modDef4024["2y8sUh"]), accessibilityLabel: intl4.string(_modDef4024.u0kEN9) };
  const SearchBar = tmp11(7305).SearchBar;
  intl3 = tmp11(1113).intl;
  intl4 = tmp11(1113).intl;
  items = [hasOwnProperty(SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: hasOwnProperty(TableRow, obj7) };
  const TableRowGroup = tmp11(7151).TableRowGroup;
  obj7 = {
    label: intl5.string(_modDef4024.bnVYYC),
    subLabel: intl6.string(_modDef4024.gnzLwZ),
    icon: hasOwnProperty(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault(undefined, { focusComposer: true });
    }
  };
  TableRow = tmp11(7063).TableRow;
  intl5 = tmp11(1113).intl;
  intl6 = tmp11(1113).intl;
  items[1] = hasOwnProperty(TableRowGroup, obj6);
  items[2] = hasOwnProperty(ConjureProjectGroupListDefault, { query: tmp5 });
  return hasOwnProperty(ActionSheet, obj3);
};
