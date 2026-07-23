// Module ID: 11997
// Function ID: 92700
// Name: UserProfileApplicationWidgetCard
// Dependencies: [31, 27, 1921, 1194, 33, 4130, 689, 11998, 11999, 12089, 12090, 12091, 12092, 566, 12000, 1324, 5470, 6865, 8588, 8600, 12093, 12083, 5511, 6860, 11927, 4126, 1212, 2]
// Exports: default

// Module 11997 (UserProfileApplicationWidgetCard)
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
  let obj2 = userId(5470);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (null != getOrFetchApplication) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let obj4 = userId(6865);
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
  obj.source = userId(8600).GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  obj.trackEntryPointImpression = true;
  const tmp8Result = stateFromStores(8588)(obj);
  dependencyMap = tmp8Result;
  const tmp11 = stateFromStores(12093)(userId, widget.applicationId);
  const surfaceConfigs = tmp11.surfaceConfigs;
  ({ resolutionContext, isLoading, hasIdentity } = tmp11);
  const tmp12 = surfaceConfigs[userId(undefined, 12083).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp13 = surfaceConfigs[userId(undefined, 12083).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
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
        let obj9 = userId(6860);
        obj2.title = obj9.getWidgetTitle(widget);
        obj2.titleLeadingIcon = tmp14;
        const obj3 = { style: tmp.stillSyncing };
        obj4 = { size: "xs", color: stateFromStores(689).colors.TEXT_MUTED };
        const items3 = [callback(userId(11927).HourglassIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted" };
        const intl = userId(1212).intl;
        obj5.children = intl.string(userId(1212).t.z5K4Uv);
        items3[1] = callback(userId(4126).Text, obj5);
        obj3.children = items3;
        obj2.children = callback2(closure_6, obj3);
        return callback(stateFromStores(5511), obj2);
      }
    }
  }
  let obj13 = userId(12000);
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
  let obj15 = userId(6860);
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
  const tmp8 = stateFromStores(8588);
  obj7.children = userId(6860).getWidgetTitle(widget);
  items4[1] = tmp27(userId(4126).Text, obj7);
  obj6.children = items4;
  const obj8 = {};
  let layout;
  const obj18 = userId(6860);
  if (null != tmp12) {
    layout = tmp12.layout;
  }
  obj8.layoutName = layout;
  obj8.header = tmp25(tmp26, obj6);
  obj8.topConfig = tmp12;
  obj8.resolveFieldValue = result;
  obj8.numberFormat = memo;
  obj8.isFirstWidget = isFirstWidget;
  ({ layoutName, header, topConfig, resolveFieldValue, numberFormat } = obj8);
  let tmp31 = null;
  if (null != topConfig) {
    if (userId(11998).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layoutName) {
      obj9 = { header, topConfig, resolveFieldValue, numberFormat, isFirstWidget: tmp30 };
      tmp31 = callback(stateFromStores(11999), obj9);
    } else {
      tmp31 = null;
      if (userId(11998).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layoutName) {
        const obj10 = { header, topConfig, resolveFieldValue, numberFormat };
        tmp31 = callback(stateFromStores(12089), obj10);
      }
    }
  }
  if (null != tmp13) {
    layout = tmp13.layout;
  }
  let tmp42 = null;
  if (null != tmp13) {
    if (userId(11998).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout) {
      const obj11 = { bottomConfig: tmp13, resolveFieldValue: result, numberFormat: memo };
      tmp42 = callback(stateFromStores(12090), obj11);
    } else if (userId(11998).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout) {
      const obj12 = { bottomConfig: tmp13, resolveFieldValue: result };
      tmp42 = callback(stateFromStores(12091), obj12);
    } else {
      tmp42 = null;
      if (userId(11998).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout) {
        obj13 = { bottomConfig: tmp13, resolveFieldValue: result };
        tmp42 = callback(stateFromStores(12092), obj13);
      }
    }
  }
  let tmp53 = null;
  if (null != tmp31) {
    tmp53 = null;
    if (null != tmp42) {
      const obj14 = { style: cardStyle };
      const items5 = [tmp31, , ];
      obj15 = { style: tmp.divider };
      items5[1] = callback(closure_6, obj15);
      items5[2] = tmp42;
      obj14.children = items5;
      tmp53 = callback2(stateFromStores(5511), obj14);
      const tmp57 = stateFromStores(5511);
    }
  }
  return tmp53;
};
