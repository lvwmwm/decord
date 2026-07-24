// Module ID: 13707
// Function ID: 105192
// Name: items
// Dependencies: [57, 31, 27, 1849, 11053, 7589, 33, 7590, 13708, 4130, 689, 1212, 4091, 7577, 8524, 5776, 9042, 566, 1392, 8271, 1273, 4126, 2]
// Exports: default

// Module 13707 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { SafetyHubLinks } from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = { [arg1(7590).AccountStandingState.ALL_GOOD]: { left: "0%" } };
obj = { left: "25%" };
obj = { translateX: -0.5 * require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH };
let items = [obj];
obj.transform = items;
obj[require("ContentIdType").AccountStandingState.LIMITED] = obj;
let obj1 = { left: "50%" };
let obj2 = { translateX: -0.5 * require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH };
let items1 = [obj2];
obj1.transform = items1;
obj[require("ContentIdType").AccountStandingState.VERY_LIMITED] = obj1;
let obj3 = { left: "75%" };
let obj4 = { translateX: -0.5 * require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH };
let items2 = [obj4];
obj3.transform = items2;
obj[require("ContentIdType").AccountStandingState.AT_RISK] = obj3;
const obj5 = { left: "100%" };
let obj6 = { translateX: -require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH };
let items3 = [obj6];
obj5.transform = items3;
obj[require("ContentIdType").AccountStandingState.SUSPENDED] = obj5;
let obj7 = {};
const obj8 = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj7.container = obj8;
_createForOfIteratorHelperLoose = { position: "relative", justifyContent: "center", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj7.avatarBackground = _createForOfIteratorHelperLoose;
obj7.good = { color: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
const obj10 = { color: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
obj7.limited = { color: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
obj7.veryLimited = { color: "#FF7A00" };
const obj11 = { color: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
obj7.atRisk = { color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL };
const obj12 = { color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL };
obj7.suspended = { color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL };
obj7.body = { display: "flex", rowGap: 40, width: "100%" };
const obj13 = { color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL };
obj7.bodyText = { rowGap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj7.health = { position: "relative", left: 0, right: 0, marginBottom: 18 };
const obj15 = { height: 3, width: "100%", position: "absolute", top: 8.5, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj7.line = obj15;
obj7.subwayMarker = { position: "absolute" };
const obj14 = { rowGap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj7.icon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj7);
const obj16 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default function SafetyHubAccountStanding() {
  let description;
  let title;
  accountStanding = accountStanding.getAccountStanding();
  const tmp2 = callback(memo.useState(0), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp4 = callback4();
  callback = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    let obj = {};
    obj = { title: accountStanding(1212).t.uaKrRi };
    const intl = accountStanding(1212).intl;
    obj = { termsOfService: outer1_8.TOS_LINK, communityGuidelines: outer1_8.COMMUNITY_GUIDELINES };
    obj.description = intl.format(accountStanding(1212).t.pEdBD4, obj);
    obj.status = accountStanding(1212).t["/Idfao"];
    obj.style = tmp4.good;
    obj.CustomIcon = accountStanding(4091).CircleCheckIcon;
    obj[accountStanding(7590).AccountStandingState.ALL_GOOD] = obj;
    const obj1 = { title: accountStanding(1212).t.epkcmS };
    const intl2 = accountStanding(1212).intl;
    obj1.description = intl2.string(accountStanding(1212).t["774juc"]);
    obj1.status = accountStanding(1212).t.umleq4;
    obj1.style = tmp4.limited;
    obj1.CustomIcon = accountStanding(7577).CircleErrorIcon;
    obj1.iconSource = first(8524);
    obj[accountStanding(7590).AccountStandingState.LIMITED] = obj1;
    const obj2 = { title: accountStanding(1212).t.crzE2X };
    const intl3 = accountStanding(1212).intl;
    obj2.description = intl3.string(accountStanding(1212).t["T/Ufh9"]);
    obj2.status = accountStanding(1212).t.WBtMHf;
    obj2.style = tmp4.veryLimited;
    obj2.CustomIcon = accountStanding(7577).CircleErrorIcon;
    obj2.iconSource = first(8524);
    obj[accountStanding(7590).AccountStandingState.VERY_LIMITED] = obj2;
    const obj3 = { title: accountStanding(1212).t.XRNVzO };
    const intl4 = accountStanding(1212).intl;
    obj3.description = intl4.string(accountStanding(1212).t["hbH+9S"]);
    obj3.status = accountStanding(1212).t["7f+4Lg"];
    obj3.style = tmp4.atRisk;
    obj3.CustomIcon = accountStanding(7577).CircleErrorIcon;
    obj3.iconSource = first(8524);
    obj[accountStanding(7590).AccountStandingState.AT_RISK] = obj3;
    const obj4 = { title: accountStanding(1212).t.MExFkz };
    const intl5 = accountStanding(1212).intl;
    obj4.description = intl5.string(accountStanding(1212).t["2liUvt"]);
    obj4.status = accountStanding(1212).t["0OONGB"];
    obj4.style = tmp4.suspended;
    obj4.CustomIcon = accountStanding(5776).CircleXIcon;
    obj4.iconSource = first(9042);
    obj[accountStanding(7590).AccountStandingState.SUSPENDED] = obj4;
    return obj;
  }, items);
  const items1 = [accountStanding, memo, first, tmp4];
  const memo1 = memo.useMemo(() => {
    const entries = Object.entries(memo);
    return entries.map((arg0, index) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const parsed = parseInt(tmp);
      let obj = { style: items };
      items = [outer1_3.subwayMarker, outer2_11[parsed]];
      obj = {};
      obj = {};
      const obj1 = {};
      const merged = Object.assign(outer1_3.icon);
      obj1["width"] = 20;
      obj1["height"] = 20;
      obj.style = obj1;
      obj.color = tmp2.style.color;
      obj.selectedIcon = outer2_9(tmp2.CustomIcon, obj);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      obj.isSelected = parsed === outer1_0.state;
      obj.index = index;
      obj.onLayout = function onLayout(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > outer2_1) {
          outer2_2(nativeEvent.nativeEvent.layout.height);
        }
      };
      obj.size = 20;
      obj.numOptions = Object.keys(outer1_4).length;
      obj.children = outer2_9(first(table[8]), obj, index);
      return outer2_9(style, obj, index);
    });
  }, items1);
  let obj = accountStanding(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items2, () => outer1_6.getCurrentUser());
  if (null != stateFromStores) {
    let obj1 = first(1392);
    let userAvatarSource = obj1.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = first(8271);
  }
  const style = tmp13.style;
  obj = { style: items3 };
  items3 = [tmp4.container];
  obj = { style: tmp4.avatarBackground };
  ({ title, description } = memo[accountStanding.state]);
  obj1 = { source: userAvatarSource, size: accountStanding(1273).AvatarSizes.XXLARGE };
  let username;
  if (null != stateFromStores) {
    username = stateFromStores.username;
  }
  let str = "";
  if (null != username) {
    str = username;
  }
  obj1["aria-label"] = str;
  obj.children = callback2(accountStanding(1273).Avatar, obj1);
  const items4 = [callback2(style, obj), ];
  let obj2 = { style: tmp4.body };
  let obj3 = { style: tmp4.bodyText };
  let obj4 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" } };
  let intl = accountStanding(1212).intl;
  obj4.children = intl.format(title, {
    hook(children) {
      return outer1_9(accountStanding(4126).Text, { style, variant: "heading-lg/bold", children }, arg1);
    }
  });
  const items5 = [callback2(accountStanding(4126).Text, obj4), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: description };
  items5[1] = callback2(accountStanding(4126).Text, obj6);
  obj3.children = items5;
  const items6 = [callback3(style, obj3), ];
  const obj7 = { style: items7 };
  items7 = [tmp4.health, { height: first }];
  const items8 = [callback2(style, { style: tmp4.line }), memo1];
  obj7.children = items8;
  items6[1] = callback3(style, obj7);
  obj2.children = items6;
  items4[1] = callback3(style, obj2);
  obj.children = items4;
  return callback3(style, obj);
};
