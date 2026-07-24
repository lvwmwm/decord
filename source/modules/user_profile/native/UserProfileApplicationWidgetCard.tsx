// Module ID: 12023
// Function ID: 92936
// Name: UserProfileApplicationWidgetCard
// Dependencies: [31, 27, 1921, 1194, 33, 4130, 689, 12024, 12025, 12115, 12116, 12117, 12118, 566, 12026, 1324, 5468, 6864, 8631, 8642, 12119, 12109, 5509, 6859, 11953, 4126, 1212, 2]
// Exports: default

// Module 12023 (UserProfileApplicationWidgetCard)
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ Image: closure_4, Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 16, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.appIcon = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.divider = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.stillSyncing = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  let cardStyle;
  let hasIdentity;
  let header;
  let isFirstWidget;
  let isLoading;
  let layoutName;
  let numberFormat;
  let resolutionContext;
  let resolveFieldValue;
  let topConfig;
  let widget;
  userId = userId.userId;
  ({ widget, cardStyle, isFirstWidget } = userId);
  if (isFirstWidget === undefined) {
    isFirstWidget = false;
  }
  let stateFromStores;
  let dependencyMap;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.locale);
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => userId(_undefined[14]).createCompactNumberFormat(stateFromStores), items1);
  let obj1 = userId(566);
  const items2 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_8.getId() === userId);
  const tmp5 = stateFromStores(1324)("UserProfileCard");
  let obj2 = userId(5468);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (null != getOrFetchApplication) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let obj4 = userId(6864);
  let canonicalGameId;
  if (null != getOrFetchApplication) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = obj4.useGame(canonicalGameId).data;
  obj = { location: "UserProfileApplicationWidgetCard" };
  let id;
  if (null != data) {
    id = data.id;
  }
  obj.applicationId = id;
  obj.source = userId(8642).GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  obj.trackEntryPointImpression = true;
  const tmp8Result = stateFromStores(8631)(obj);
  dependencyMap = tmp8Result;
  const tmp11 = stateFromStores(12119)(userId, widget.applicationId);
  const surfaceConfigs = tmp11.surfaceConfigs;
  ({ resolutionContext, isLoading, hasIdentity } = tmp11);
  const tmp12 = surfaceConfigs[userId(undefined, 12109).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp13 = surfaceConfigs[userId(undefined, 12109).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp14 = null;
  if (null != iconURL) {
    obj = {};
    obj1 = { uri: iconURL };
    obj.source = obj1;
    obj.style = tmp.appIcon;
    tmp14 = callback(closure_4, obj);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        obj2 = { style: cardStyle };
        let obj9 = userId(6859);
        obj2.title = obj9.getWidgetTitle(widget);
        obj2.titleLeadingIcon = tmp14;
        const obj3 = { style: tmp.stillSyncing };
        obj4 = { size: "xs", color: stateFromStores(689).colors.TEXT_MUTED };
        const items3 = [callback(userId(11953).HourglassIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted" };
        const intl = userId(1212).intl;
        obj5.children = intl.string(userId(1212).t.z5K4Uv);
        items3[1] = callback(userId(4126).Text, obj5);
        obj3.children = items3;
        obj2.children = callback2(closure_6, obj3);
        return callback(stateFromStores(5509), obj2);
      }
    }
  }
  let obj13 = userId(12026);
  const result = obj13.bindResolveFieldValue(resolutionContext);
  const obj6 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (null != _undefined) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp8Result,
    accessibilityRole: "button"
  };
  let obj15 = userId(6859);
  obj6.accessibilityLabel = obj15.getWidgetTitle(widget);
  const items4 = [tmp14, ];
  const obj7 = {};
  let str2 = "text-sm/semibold";
  if (tmp5) {
    str2 = "text-sm/medium";
  }
  obj7.variant = str2;
  let str3 = "text-default";
  if (tmp5) {
    str3 = "text-strong";
  }
  obj7.color = str3;
  obj7.lineClamp = 1;
  const tmp25 = callback2;
  const tmp26 = closure_5;
  const tmp27 = callback;
  const tmp8 = stateFromStores(8631);
  obj7.children = userId(6859).getWidgetTitle(widget);
  items4[1] = tmp27(userId(4126).Text, obj7);
  obj6.children = items4;
  const obj8 = {};
  let layout;
  const obj18 = userId(6859);
  if (null != tmp12) {
    layout = tmp12.layout;
  }
  obj8.layoutName = layout;
  obj8.header = tmp25(tmp26, obj6);
  obj8.topConfig = tmp12;
  obj8.resolveFieldValue = result;
  obj8.numberFormat = memo;
  ({ layoutName, header, topConfig, resolveFieldValue, numberFormat } = obj8);
  let tmp30 = null;
  if (null != topConfig) {
    if (userId(12024).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layoutName) {
      obj9 = { header, topConfig, resolveFieldValue, numberFormat };
      tmp30 = callback(stateFromStores(12025), obj9);
    } else {
      tmp30 = null;
      if (userId(12024).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layoutName) {
        const obj10 = { header, topConfig, resolveFieldValue, numberFormat };
        tmp30 = callback(stateFromStores(12115), obj10);
      }
    }
  }
  if (null != tmp13) {
    layout = tmp13.layout;
  }
  let tmp41 = null;
  if (null != tmp13) {
    if (userId(12024).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout) {
      const obj11 = { bottomConfig: tmp13, resolveFieldValue: result, numberFormat: memo };
      tmp41 = callback(stateFromStores(12116), obj11);
    } else if (userId(12024).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout) {
      const obj12 = { bottomConfig: tmp13, resolveFieldValue: result };
      tmp41 = callback(stateFromStores(12117), obj12);
    } else {
      tmp41 = null;
      if (userId(12024).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout) {
        obj13 = { bottomConfig: tmp13, resolveFieldValue: result };
        tmp41 = callback(stateFromStores(12118), obj13);
      }
    }
  }
  let tmp53Result = null;
  if (null != tmp30) {
    tmp53Result = null;
    if (null != tmp41) {
      const obj14 = {};
      const items5 = [cardStyle, ];
      if (isFirstWidget) {
        let layout1;
        if (null != tmp12) {
          layout1 = tmp12.layout;
        }
        isFirstWidget = layout1 === userId(12024).ApplicationWidgetLayoutName.WIDGET_TOP_HERO;
      }
      if (isFirstWidget) {
        obj15 = { marginTop: userId(12025).HERO_IMAGE_UNCLIPPED_TOP_BLEED };
        isFirstWidget = obj15;
      }
      items5[1] = isFirstWidget;
      obj14.style = items5;
      const items6 = [tmp30, , ];
      const obj16 = { style: tmp.divider };
      items6[1] = callback(closure_6, obj16);
      items6[2] = tmp41;
      obj14.children = items6;
      tmp53Result = callback2(stateFromStores(5509), obj14);
      const tmp53 = callback2;
      const tmp56 = stateFromStores(5509);
    }
  }
  return tmp53Result;
};
