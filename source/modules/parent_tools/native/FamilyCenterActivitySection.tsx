// Module ID: 13802
// Function ID: 105758
// Name: FamilyCenterActivitySectionHeader
// Dependencies: [57, 31, 27, 6770, 33, 4130, 689, 7124, 6828, 13797, 4126, 11061, 1212, 2198, 13803, 4660, 2]
// Exports: default

// Module 13802 (FamilyCenterActivitySectionHeader)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function FamilyCenterActivitySectionHeader(displayType) {
  displayType = displayType.displayType;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(7124)();
  let obj = require(6828) /* getActivityTypeTextConfigs */;
  const activityTypeTextConfigs = obj.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  const actionsForDisplayType = require(13797) /* useActionTotalsForDisplayType */.useActionsForDisplayType(displayType);
  const obj4 = require(13797) /* useActionTotalsForDisplayType */;
  let length = require(13797) /* useActionTotalsForDisplayType */.useFormattedTotalForDisplayType(displayType);
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
    const items = [callback2(require(4126) /* Text */.Text, obj), ];
    let tmp16 = null;
    if (null !== tmp8) {
      const obj1 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: tmp8 };
      tmp16 = callback2(require(4126) /* Text */.Text, obj1);
    }
    items[1] = tmp16;
    obj.children = items;
    return closure_10(closure_6, obj);
  }
  length = actionsForDisplayType.length;
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: closure_7, TeenActionDisplayType: closure_8 } = items);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { container: { display: "flex" }, loadMoreContainer: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", width: "100%" } };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
obj2.loadMore = obj3;
obj2.loadMoreButton = { paddingVertical: 4 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj2);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default function FamilyCenterActivitySection(displayType) {
  displayType = displayType.displayType;
  let loadMoreButton = callback3();
  let obj = displayType(13797);
  const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
  let obj1 = displayType(13797);
  const actionTotalsForDisplayType = obj1.useActionTotalsForDisplayType(displayType);
  let obj2 = displayType(11061);
  const familyCenterActions = obj2.useFamilyCenterActions({});
  const loadMore = familyCenterActions.loadMore;
  const tmp3 = callback(React.useState(closure_7), 2);
  const dependencyMap = tmp3[1];
  const substr = actionsForDisplayType.slice(0, tmp3[0]);
  const items = [loadMore, displayType];
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    const intl = displayType(1212).intl;
    obj = {};
    const _Math = Math;
    obj.pageSize = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
    const formatToPlainStringResult = intl.formatToPlainString(loadMore(2198)["7dMmJY"], obj);
    obj = { style: loadMoreButton.container };
    obj1 = { displayType };
    const items1 = [callback2(FamilyCenterActivitySectionHeader, obj1), substr.map((action) => outer1_9(loadMore(13803), { action }, action.event_id)), ];
    if (substr.length >= actionTotalsForDisplayType) {
      items1[2] = null;
      obj.children = items1;
      return tmp23(tmp24, obj);
    } else {
      obj2 = { style: loadMoreButton.loadMoreContainer };
      if (familyCenterActions.isMoreLoading) {
        const obj3 = { style: loadMoreButton.loadMore };
        const obj4 = { style: null, animating: true, color: "#fff", size: "small" };
        loadMoreButton = loadMoreButton.loadMoreButton;
        obj4.style = loadMoreButton;
        obj3.children = callback2(closure_5, obj4);
        let tmp7Result = tmp7(closure_6, obj3);
      } else {
        const obj5 = { style: loadMoreButton.loadMore, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", onPress: tmp4 };
        const obj6 = { style: loadMoreButton.loadMoreButton, variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
        obj5.children = callback2(displayType(4126).Text, obj6);
        tmp7Result = tmp7(displayType(4660).PressableOpacity, obj5);
      }
      obj2.children = tmp7Result;
      callback2(closure_6, obj2);
      const tmp5 = callback2;
      const tmp6 = closure_6;
    }
    tmp23 = closure_10;
    tmp24 = closure_6;
  }
};
