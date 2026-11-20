// Module ID: 13663
// Function ID: 13664
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 21, 4794, 575, 13664, 1628, 9831, 5355, 6814, 7433, 7395, 1112, 4091, 7471, 11552, 5026, 7307, 7228, 6925, 13667, 12168, 13668, 2]
// Exports: default

// Module 13663 (ConjureProjectsSheet)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef4091 from "module_4091" /* 4091 */;
import useMountEffectDefault from "useMountEffect" /* 5355 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7395 */;
import ActionSheet2 from "ActionSheet" /* 7433 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9831 */;
import AssetRegistryDefault from "AssetRegistry" /* 11552 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12168 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13664 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 13667 */;
import ConjureProjectGroupListDefault from "ConjureProjectGroupList" /* 13668 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
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
  let obj = { title: intl.string(_modDef4091.uk6jhJ), trailing: tmp10Result };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  tmp10Result = undefined;
  if ("you_screen" === placement) {
    const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef4091.qCBh6V), onPress: confirmPin };
    const IconButton = tmp11(7471).IconButton;
    intl2 = tmp11(1112).intl;
    tmp10Result = tmp10(IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: hasOwnProperty(BottomSheetTitleHeader, obj), children: metroRequire(BottomSheetScrollView, obj4) };
  obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = tmp11(5026).BottomSheetScrollView;
  const obj5 = { size: "md", onChange: tmp6, placeholder: intl3.string(_modDef4091["2y8sUh"]), accessibilityLabel: intl4.string(_modDef4091.u0kEN9) };
  const SearchBar = tmp11(7307).SearchBar;
  intl3 = tmp11(1112).intl;
  intl4 = tmp11(1112).intl;
  items = [hasOwnProperty(SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: hasOwnProperty(TableRow, obj7) };
  const TableRowGroup = tmp11(7228).TableRowGroup;
  obj7 = {
    label: intl5.string(_modDef4091.bnVYYC),
    subLabel: intl6.string(_modDef4091.gnzLwZ),
    icon: hasOwnProperty(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault(undefined, { focusComposer: true });
    }
  };
  TableRow = tmp11(6925).TableRow;
  intl5 = tmp11(1112).intl;
  intl6 = tmp11(1112).intl;
  items[1] = hasOwnProperty(TableRowGroup, obj6);
  items[2] = hasOwnProperty(ConjureProjectGroupListDefault, { query: tmp5 });
  return hasOwnProperty(ActionSheet, obj3);
};
