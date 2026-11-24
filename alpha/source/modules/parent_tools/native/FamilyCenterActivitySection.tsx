// Module ID: 16234
// Function ID: 16235
// Name: FamilyCenterActivitySection
// Dependencies: [32, 19, 17, 8072, 21, 4917, 575, 8075, 8077, 16229, 5508, 5598, 1112, 2824, 12378, 16235, 6026, 2]
// Exports: default

// Module 16234 (FamilyCenterActivitySection)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5508 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8075 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8077 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 16229 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
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
  const actionTotalsForDisplayType = obj4.useActionTotalsForDisplayType(displayType);
  const obj5 = useFamilyCenterActivities;
  const formattedTotalForDisplayType = obj5.useFormattedTotalForDisplayType(displayType);
  if (displayType === metroImportAll.PURCHASES) {
    let tmp8 = formattedTotalForDisplayType;
    let sectionHeaderResult;
    if (value != null) {
      sectionHeaderResult = value.sectionHeader(tmp8);
    }
    let sectionDescription1;
    if (value != null) {
      sectionDescription1 = value.sectionDescription;
    }
    let tmp12 = null;
    if (undefined !== sectionDescription1) {
      let sectionDescriptionResult;
      if (value != null) {
        const sectionDescription = value.sectionDescription;
        if (flag == null) {
          flag = false;
        }
        sectionDescriptionResult = sectionDescription(flag);
      }
      tmp12 = sectionDescriptionResult;
    }
    const obj2 = { variant: "body-sm/semibold", style: tmp.header, children: sectionHeaderResult };
    const items = [React4(Text_Text.Text, obj2), ];
    let tmp16Result = null;
    const tmp14 = authStore;
    const tmp15 = metroRequire;
    const tmp16 = React4;
    if (null !== tmp12) {
      const obj3 = { variant: "body-sm/medium", color: "text-muted", style: tmp.description, children: tmp12 };
      tmp16Result = tmp16(tmp3(5508).Text, obj3);
    }
    const obj6 = { children: items };
    items[1] = tmp16Result;
    return tmp14(tmp15, obj6);
  }
  tmp8 = actionTotalsForDisplayType;
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
  let obj = displayType(16229);
  const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
  const obj2 = displayType(16229);
  const actionTotalsForDisplayType = obj2.useActionTotalsForDisplayType(displayType);
  const callback = react.useCallback(() => {
    const presentFailedToast = displayType(closure_2[11]).presentFailedToast;
    displayType(closure_2[11]);
    const intl = displayType(closure_2[12]).intl;
    presentFailedToast(intl.string(loadMore(closure_2[13]).Wu8BK2));
  }, []);
  const obj3 = displayType(12378);
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
    let intl = tmp2(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Math = Math;
    const obj4 = { pageSize: Math.min(actionTotalsForDisplayType - substr.length, tmp7) };
    const v7dMmJY = loadMore(2824)["7dMmJY"];
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
        const obj10 = { style: tmp.loadMore, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", onPress: tmp9, children: closure_9(displayType(5508).Text, obj11) };
        const PressableOpacity = tmp2(6026).PressableOpacity;
        obj11 = { style: tmp.loadMoreButton, variant: "body-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
        tmp20Result = tmp20(PressableOpacity, obj10);
      }
      tmp20Result2 = tmp20(tmp19, obj7);
    }
    items1[2] = tmp20Result2;
    return tmp18(closure_6, obj5);
  }
};
