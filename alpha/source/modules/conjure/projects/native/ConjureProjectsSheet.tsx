// Module ID: 14708
// Function ID: 14709
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 17, 10867, 21, 5014, 575, 14699, 504, 14709, 1113, 3868, 6076, 6975, 12463, 6953, 10976, 14710, 14713, 7060, 5624, 5634, 10875, 1625, 9674, 5593, 7366, 7321, 8028, 10980, 5275, 7218, 2]
// Exports: default

// Module 14708 (ConjureProjectsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import _modDef3868 from "module_3868" /* 3868 */;
import useMountEffectDefault from "useMountEffect" /* 5593 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import getTimestampStringDefault from "getTimestampString" /* 6076 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9674 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10976 */;
import AssetRegistryDefault from "AssetRegistry" /* 10980 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12463 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 14710 */;
import useConjureOwnProjectListStateDefault from "useConjureOwnProjectListState" /* 14713 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10867 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const ConjureProjectIconDefault = ConjureProjectIcon;

let metroImportAll;
let metroImportDefault;
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
function ProjectList(query) {
  let Text;
  let Text3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let obj9;
  let projects;
  let tmp8;
  query = query.query;
  const tmp = closure_9(0);
  const tmp4 = useConjureOwnProjectListStateDefault(query);
  if ("projects" === tmp4.kind) {
    const obj2 = {
      hasIcons: true,
      children: projects.map((project) => {
          const obj = { project };
          return closure_1_7(closure_1_10, obj, project.id);
        })
    };
    projects = tmp4.projects;
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp8 = metroImportDefault(TableRowGroup, obj2);
  } else if ("no_match" === tmp4.kind) {
    const obj3 = { style: tmp.state, children: metroImportDefault(Text3, obj4) };
    obj4 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3868.X37fkR) };
    Text3 = Text_Text.Text;
    intl4 = intl7.intl;
    tmp8 = metroImportDefault(View, obj3);
  } else if ("error" === tmp4.kind) {
    const obj5 = { style: tmp.state, children: items };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3868.DJAPMO) };
    const Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items = [metroImportDefault(Text2, obj6), ];
    const obj7 = {
      variant: "secondary",
      size: "sm",
      text: intl3.string(_modDef3868["WFJ/vb"]),
      onPress() {
          const obj = ConjureActionCreators;
          return obj.listProjects();
        }
    };
    const Button = components_Button_Button.Button;
    intl3 = intl7.intl;
    items[1] = metroImportDefault(Button, obj7);
    tmp8 = metroImportAll(View, obj5);
  } else if ("loading" === tmp4.kind) {
    const obj8 = { style: tmp.state, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    tmp8 = metroImportDefault(View, obj8);
  } else {
    let obj = { style: tmp.state, children: metroImportDefault(Text, obj9) };
    obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(_modDef3868["9/5sLV"]) };
    Text = Text_Text.Text;
    intl = intl7.intl;
    tmp8 = metroImportDefault(View, obj);
  }
  return tmp8;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let size1;
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 }, trailingIndicator: size, unreadDot: size1 };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 });
  size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, alignItems: "center", justifyContent: "center" };
  size1 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  return obj;
});
let closure_10 = react.memo(function ProjectRow(project) {
  let stringResult;
  let tmp18Result;
  let tmp18Result2;
  let tmp19;
  project = project.project;
  const tmp = closure_9(0);
  const obj = project(14699);
  const conjureHomeProjectState = obj.useConjureHomeProjectState(project.id);
  const items = [ConjurePublishStatusStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    return publishState;
  }, items1);
  const obj3 = project(14699);
  const result = obj3.conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj4 = project(14699);
  const result1 = obj4.conjureProjectLastActivityTime(project);
  if ("deleting" === conjureHomeProjectState) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(tmp8(3868).Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl2 = tmp2(1113).intl;
    stringResult = intl2.string(tmp8(3868)["Y8pS+n"]);
  } else {
    let tmp8ResultResult = null;
    if (null != result1) {
      const obj5 = { since: result1, getFormatter: project(6076).getAbbreviatedFormatter, includeWeeks: true };
      const tmp8Result = getTimestampStringDefault;
      tmp8ResultResult = tmp8Result(obj5);
    }
    const items2 = [tmp8ResultResult, tmp9, ];
    let stringResult1 = null;
    if (result) {
      const intl = tmp2(1113).intl;
      stringResult1 = intl.string(tmp8(3868).CSAaT0);
    }
    items2[2] = stringResult1;
    const found = items2.filter((item) => null != item);
    stringResult = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult, ];
  let stringResult2 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl4 = tmp2(1113).intl;
    stringResult2 = intl4.string(tmp8(3868)["N+3Pzk"]);
  }
  items3[2] = stringResult2;
  const found1 = items3.filter((item) => null != item && "" !== item);
  const joined = found1.join(", ");
  const obj6 = { label: project.name, subLabel: tmp19, accessibilityLabel: joined, icon: closure_7(ConjureProjectIconDefault, { project, size: "list" }), trailing: null, disabled: null, onPress: null };
  tmp19 = undefined;
  const TableRow = tmp2(6975).TableRow;
  if ("" !== stringResult) {
    tmp19 = stringResult;
  }
  if ("deleting" !== conjureHomeProjectState) {
    obj6.trailing = tmp18Result2;
    obj6.disabled = "deleting" === conjureHomeProjectState;
    obj6.onPress = function onPress() {
      return openConjureHomeScreenDefault(project.id, { entryPoint: "project_list" });
    };
    return closure_7(TableRow, obj6);
  }
  const obj7 = { style: tmp.trailingIndicator, children: tmp18Result };
  if ("unread" === conjureHomeProjectState) {
    const obj8 = { style: tmp.unreadDot };
    tmp18Result = tmp18(tmp21, obj8);
  } else {
    tmp18Result = tmp18(tmp2(6953).ActivityIndicator, { size: "small" });
  }
  tmp18Result2 = closure_7(View, obj7);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

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
  const tmp3 = closure_9(bottom);
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
  let obj = { title: intl.string(_modDef3868.uk6jhJ), trailing: tmp10Result };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  tmp10Result = undefined;
  if ("you_screen" === placement) {
    const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef3868.qCBh6V), onPress: confirmPin };
    const IconButton = tmp11(8028).IconButton;
    intl2 = tmp11(1113).intl;
    tmp10Result = tmp10(IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: metroImportDefault(BottomSheetTitleHeader, obj), children: metroImportAll(BottomSheetScrollView, obj4) };
  obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = tmp11(5275).BottomSheetScrollView;
  const obj5 = { size: "md", onChange: tmp6, placeholder: intl3.string(_modDef3868["2y8sUh"]), accessibilityLabel: intl4.string(_modDef3868.u0kEN9) };
  const SearchBar = tmp11(7218).SearchBar;
  intl3 = tmp11(1113).intl;
  intl4 = tmp11(1113).intl;
  items = [metroImportDefault(SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: metroImportDefault(TableRow, obj7) };
  const TableRowGroup = tmp11(7060).TableRowGroup;
  obj7 = {
    label: intl5.string(_modDef3868.bnVYYC),
    subLabel: intl6.string(_modDef3868.gnzLwZ),
    icon: metroImportDefault(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault(undefined, { focusComposer: true });
    }
  };
  TableRow = tmp11(6975).TableRow;
  intl5 = tmp11(1113).intl;
  intl6 = tmp11(1113).intl;
  items[1] = metroImportDefault(TableRowGroup, obj6);
  items[2] = metroImportDefault(ProjectList, { query: tmp5 });
  return metroImportDefault(ActionSheet, obj3);
};
