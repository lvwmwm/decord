// Module ID: 13672
// Function ID: 103524
// Name: FamilyCenterActivitySectionHeader
// Dependencies: []
// Exports: default

// Module 13672 (FamilyCenterActivitySectionHeader)
function FamilyCenterActivitySectionHeader(displayType) {
  displayType = displayType.displayType;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[7])();
  let obj = arg1(dependencyMap[8]);
  const activityTypeTextConfigs = obj.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  const actionsForDisplayType = arg1(dependencyMap[9]).useActionsForDisplayType(displayType);
  const obj4 = arg1(dependencyMap[9]);
  let length = arg1(dependencyMap[9]).useFormattedTotalForDisplayType(displayType);
  if (displayType === constants.PURCHASES) {
    let sectionHeaderResult;
    if (null != value) {
      sectionHeaderResult = value.sectionHeader(length);
    }
    let sectionDescription;
    if (null != value) {
      sectionDescription = value.sectionDescription;
    }
    let tmp8 = null;
    if (undefined !== sectionDescription) {
      let sectionDescriptionResult;
      if (null != value) {
        let tmp10 = null != tmp2;
        if (tmp10) {
          tmp10 = tmp2;
        }
        sectionDescriptionResult = value.sectionDescription(tmp10);
      }
      tmp8 = sectionDescriptionResult;
    }
    obj = {};
    obj = { variant: "text-sm/semibold", style: tmp.header, children: sectionHeaderResult };
    const items = [callback2(arg1(dependencyMap[10]).Text, obj), ];
    let tmp16 = null;
    if (null !== tmp8) {
      const obj1 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", style: tmp.description, children: tmp8 };
      tmp16 = callback2(arg1(dependencyMap[10]).Text, obj1);
    }
    items[1] = tmp16;
    obj.children = items;
    return closure_10(closure_6, obj);
  }
  length = actionsForDisplayType.length;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: closure_7, TeenActionDisplayType: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
obj.header = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.description = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
let closure_11 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj2 = { container: { display: "flex" }, loadMoreContainer: {} };
const obj5 = arg1(dependencyMap[5]);
obj2.loadMore = { borderBottomRightRadius: importDefault(dependencyMap[6]).radii.sm, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
obj2.loadMoreButton = { paddingVertical: 4 };
let closure_12 = obj5.createStyles(obj2);
const obj3 = { borderBottomRightRadius: importDefault(dependencyMap[6]).radii.sm, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default function FamilyCenterActivitySection(displayType) {
  displayType = displayType.displayType;
  const arg1 = displayType;
  let loadMoreButton = callback4();
  let obj = arg1(closure_2[9]);
  const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
  let obj1 = arg1(closure_2[9]);
  const actionTotalsForDisplayType = obj1.useActionTotalsForDisplayType(displayType);
  let obj2 = arg1(closure_2[11]);
  const familyCenterActions = obj2.useFamilyCenterActions({});
  const loadMore = familyCenterActions.loadMore;
  const importDefault = loadMore;
  const tmp3 = callback(React.useState(closure_7), 2);
  closure_2 = tmp3[1];
  const substr = actionsForDisplayType.slice(0, tmp3[0]);
  const items = [loadMore, displayType];
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    const intl = arg1(closure_2[12]).intl;
    obj = {};
    const _Math = Math;
    obj.pageSize = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
    const formatToPlainStringResult = intl.formatToPlainString(importDefault(closure_2[13]).7dMmJY, obj);
    obj = { style: loadMoreButton.container };
    obj1 = { displayType };
    const items1 = [callback2(FamilyCenterActivitySectionHeader, obj1), substr.map((action) => callback2(loadMore(closure_2[14]), { action }, action.event_id)), ];
    if (substr.length >= actionTotalsForDisplayType) {
      items1[2] = null;
      obj.children = items1;
      return tmp23(tmp24, obj);
    } else {
      obj2 = { style: loadMoreButton.loadMoreContainer };
      if (familyCenterActions.isMoreLoading) {
        const obj3 = { style: loadMoreButton.loadMore };
        const obj4 = {};
        loadMoreButton = loadMoreButton.loadMoreButton;
        obj4.style = loadMoreButton;
        obj3.children = callback2(closure_5, obj4);
        let tmp7Result = tmp7(closure_6, obj3);
      } else {
        const obj5 = { style: loadMoreButton.loadMore, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", onPress: tmp4 };
        const obj6 = { style: loadMoreButton.loadMoreButton, children: formatToPlainStringResult };
        obj5.children = callback2(arg1(closure_2[10]).Text, obj6);
        tmp7Result = tmp7(arg1(closure_2[15]).PressableOpacity, obj5);
      }
      obj2.children = tmp7Result;
      callback2(closure_6, obj2);
      const tmp5 = callback2;
      const tmp6 = closure_6;
    }
    const tmp23 = closure_10;
    const tmp24 = closure_6;
  }
};
