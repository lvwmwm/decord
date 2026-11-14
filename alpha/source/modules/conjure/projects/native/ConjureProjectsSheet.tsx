// Module ID: 10537
// Function ID: 10538
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 21, 5306, 575, 10538, 1630, 10514, 5899, 7329, 7951, 7913, 1113, 4131, 7988, 10540, 5570, 7825, 7746, 7443, 10543, 10536, 10550, 2]
// Exports: default

// Module 10537 (ConjureProjectsSheet)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef4131 from "module_4131" /* 4131 */;
import useMountEffectDefault from "useMountEffect" /* 5899 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7329 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7913 */;
import ActionSheet2 from "ActionSheet" /* 7951 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 10514 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 10538 */;
import AssetRegistryDefault from "AssetRegistry" /* 10540 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 10543 */;
import ConjureProjectGroupListDefault from "ConjureProjectGroupList" /* 10550 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
  let obj = { title: intl.string(_modDef4131.uk6jhJ), trailing: tmp10Result };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  tmp10Result = undefined;
  if ("you_screen" === placement) {
    const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef4131.qCBh6V), onPress: confirmPin };
    const IconButton = tmp11(7988).IconButton;
    intl2 = tmp11(1113).intl;
    tmp10Result = tmp10(IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: hasOwnProperty(BottomSheetTitleHeader, obj), children: metroRequire(BottomSheetScrollView, obj4) };
  obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = tmp11(5570).BottomSheetScrollView;
  const obj5 = { size: "md", onChange: tmp6, placeholder: intl3.string(_modDef4131["2y8sUh"]), accessibilityLabel: intl4.string(_modDef4131.u0kEN9) };
  const SearchBar = tmp11(7825).SearchBar;
  intl3 = tmp11(1113).intl;
  intl4 = tmp11(1113).intl;
  items = [hasOwnProperty(SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: hasOwnProperty(TableRow, obj7) };
  const TableRowGroup = tmp11(7746).TableRowGroup;
  obj7 = {
    label: intl5.string(_modDef4131.bnVYYC),
    subLabel: intl6.string(_modDef4131.gnzLwZ),
    icon: hasOwnProperty(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault(undefined, { focusComposer: true });
    }
  };
  TableRow = tmp11(7443).TableRow;
  intl5 = tmp11(1113).intl;
  intl6 = tmp11(1113).intl;
  items[1] = hasOwnProperty(TableRowGroup, obj6);
  items[2] = hasOwnProperty(ConjureProjectGroupListDefault, { query: tmp5 });
  return hasOwnProperty(ActionSheet, obj3);
};
