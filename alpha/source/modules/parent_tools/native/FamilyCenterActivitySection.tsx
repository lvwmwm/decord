// Module ID: 17038
// Function ID: 17039
// Name: FamilyCenterActivitySection
// Dependencies: [32, 19, 17, 7856, 21, 5141, 575, 8511, 8513, 17033, 5761, 5845, 1113, 2667, 13579, 17039, 7121, 2]
// Exports: default

// Module 17038 (FamilyCenterActivitySection)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5761 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8511 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8513 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 17033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7856 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj5;
function FamilyCenterActivitySectionHeader(displayType) {
  displayType = displayType.displayType;
  const tmp = closure_11();
  let flag = useIsInAdultAgeGroupDefault();
  const obj = FamilyCenterUtils;
  const activityTypeTextConfigs = obj.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  const obj4 = useFamilyCenterActivities;
  const actionsForDisplayType = obj4.useActionsForDisplayType(displayType);
  const obj5 = useFamilyCenterActivities;
  const formattedTotalForDisplayType = obj5.useFormattedTotalForDisplayType(displayType);
  if (displayType === metroImportAll.PURCHASES) {
    let length = formattedTotalForDisplayType;
    let sectionHeaderResult;
    if (value != null) {
      sectionHeaderResult = value.sectionHeader(length);
    }
    let sectionDescription1;
    if (value != null) {
      sectionDescription1 = value.sectionDescription;
    }
    let tmp10 = null;
    if (undefined !== sectionDescription1) {
      let sectionDescriptionResult;
      if (value != null) {
        const sectionDescription = value.sectionDescription;
        if (flag == null) {
          flag = false;
        }
        sectionDescriptionResult = sectionDescription(flag);
      }
      tmp10 = sectionDescriptionResult;
    }
    const obj2 = { variant: "body-sm/semibold", style: tmp.header, children: sectionHeaderResult };
    const items = [React4(Text_Text.Text, obj2), ];
    let tmp14Result = null;
    const tmp12 = authStore;
    const tmp13 = metroRequire;
    const tmp14 = React4;
    if (null !== tmp10) {
      const obj3 = { variant: "body-sm/medium", color: "text-muted", style: tmp.description, children: tmp10 };
      tmp14Result = tmp14(tmp3(5761).Text, obj3);
    }
    const obj6 = { children: items };
    items[1] = tmp14Result;
    return tmp12(tmp13, obj6);
  }
  length = actionsForDisplayType.length;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: metroImportDefault, TeenActionDisplayType: metroImportAll } = FamilyCenterConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, description: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
createStyles = createStyles_mod;
let obj4 = { container: { display: "flex" }, loadMoreContainer: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }, loadMore: obj5, loadMoreButton: { paddingVertical: 4 } };
obj5 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
let closure_13 = createStyles.createStyles(obj4);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default function FamilyCenterActivitySection(displayType) {
  let closure_2;
  let items1;
  let obj11;
  let obj9;
  let tmp20Result;
  displayType = displayType.displayType;
  const tmp = closure_13();
  let obj = displayType(17033);
  const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
  const obj2 = displayType(17033);
  const actionTotalsForDisplayType = obj2.useActionTotalsForDisplayType(displayType);
  const callback = react.useCallback(() => {
    const presentFailedToast = displayType(closure_2[11]).presentFailedToast;
    displayType(closure_2[11]);
    const intl = displayType(closure_2[12]).intl;
    presentFailedToast(intl.string(loadMore(closure_2[13]).Wu8BK2));
  }, []);
  const obj3 = displayType(13579);
  const familyCenterActions = obj3.useFamilyCenterActions({ onError: callback });
  const loadMore = familyCenterActions.loadMore;
  const isMoreLoading = familyCenterActions.isMoreLoading;
  const tmp8 = _slicedToArray(react.useState(closure_7), 2);
  dependencyMap = tmp8[1];
  const substr = actionsForDisplayType.slice(0, tmp8[0]);
  const items = [loadMore, displayType];
  const tmp7 = closure_7;
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    let intl = tmp2(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Math = Math;
    const obj4 = { pageSize: Math.min(actionTotalsForDisplayType - substr.length, tmp7) };
    const v7dMmJY = loadMore(2667)["7dMmJY"];
    const formatToPlainStringResult = formatToPlainString(v7dMmJY, obj4);
    const obj5 = { style: tmp.container, children: items1 };
    const obj6 = { displayType };
    items1 = [
      closure_9(FamilyCenterActivitySectionHeader, obj6),
      substr.map((action) => {
          const obj = { action };
          return closure_1_9(loadMore(closure_2[15]), obj, action.event_id);
        }),

    ];
    let tmp20Result2 = null;
    const tmp18 = closure_10;
    if (substr.length < actionTotalsForDisplayType) {
      const obj7 = { style: tmp.loadMoreContainer, children: tmp20Result };
      if (isMoreLoading) {
        const obj8 = { style: tmp.loadMore, children: closure_9(closure_5, obj9) };
        obj9 = { style: tmp.loadMoreButton, animating: true, color: "#fff", size: "small" };
        tmp20Result = tmp20(tmp19, obj8);
      } else {
        const obj10 = { style: tmp.loadMore, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", onPress: tmp9, children: closure_9(displayType(5761).Text, obj11) };
        const PressableOpacity = tmp2(7121).PressableOpacity;
        obj11 = { style: tmp.loadMoreButton, variant: "body-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
        tmp20Result = tmp20(PressableOpacity, obj10);
      }
      tmp20Result2 = tmp20(tmp19, obj7);
    }
    items1[2] = tmp20Result2;
    return tmp18(closure_6, obj5);
  }
};
