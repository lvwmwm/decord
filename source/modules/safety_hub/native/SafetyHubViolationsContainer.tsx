// Module ID: 13658
// Function ID: 104879
// Name: SafetyHubViolationsHeader
// Dependencies: [57, 31, 27, 11026, 7544, 653, 33, 4130, 689, 8474, 7576, 4126, 1212, 12506, 8525, 7543, 21, 13659, 7545, 4337, 11023, 1934, 11033, 566, 675, 11031, 2]
// Exports: ConnectedSafetyHubViolationsContainer

// Module 13658 (SafetyHubViolationsHeader)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function SafetyHubViolationsHeader(count) {
  let onClick;
  let opened;
  let status;
  ({ onClick, opened, status } = count);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { onPress: onClick, style: items };
  items = [tmp.header];
  obj = { style: items1 };
  items1 = [tmp.iconBackground];
  obj = {};
  const colors = importDefault(689).colors;
  obj.color = "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED;
  obj.size = "xs";
  obj.children = closure_11(require(7576) /* WarningIcon */.WarningIcon, obj);
  const items2 = [closure_11(closure_6, obj), , ];
  const obj1 = { style: items3 };
  items3 = [tmp.headerTextContainer];
  const obj2 = { variant: "heading-sm/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = require(1212) /* getSystemLocale */.t;
  if ("active" === status) {
    const obj3 = { count: str.toString() };
    let formatToPlainStringResult = formatToPlainString(t.IeV2oY, obj3);
  } else {
    const obj4 = { count: str.toString() };
    formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj4);
  }
  obj2.children = formatToPlainStringResult;
  const items4 = [closure_11(require(4126) /* Text */.Text, obj2), ];
  const obj5 = { variant: "text-xxs/normal", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const string = intl2.string;
  const t2 = require(1212) /* getSystemLocale */.t;
  if ("active" === status) {
    let stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  obj5.children = stringResult;
  items4[1] = closure_11(require(4126) /* Text */.Text, obj5);
  obj1.children = items4;
  items2[1] = closure_12(closure_6, obj1);
  if (opened) {
    let ChevronSmallDownIcon = tmp15(12506).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp15(8525).ChevronSmallDownIcon;
  }
  const items5 = [tmp.chevron];
  items2[2] = closure_11(ChevronSmallDownIcon, { size: "md", style: items5 });
  obj.children = items2;
  return closure_12(importDefault(8474), obj);
}
function EmptyActiveState() {
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().emptyState];
  obj.style = items;
  obj = { variant: "heading-sm/extrabold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.reLFaV);
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { variant: "text-xs/normal" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.ERdH1o);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return callback2(closure_6, obj);
}
function EmptyExpiredState() {
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().emptyState];
  obj.style = items;
  obj = { variant: "text-xs/normal" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.RV3AXf);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(closure_6, obj);
}
function RelativeIncidentTime(timestamp) {
  let obj = { style: _createForOfIteratorHelperLoose().incidentDate };
  obj = { variant: "text-xs/medium", children: require(7543) /* parseMessageEmbedForProps */.getClassificationRelativeIncidentTime(timestamp.timestamp) };
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(closure_6, obj);
}
function NewBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
  obj = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp.newText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.QKMRC4);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(closure_6, obj);
}
function ClassificationDetail(classification) {
  classification = classification.classification;
  const tmp = _createForOfIteratorHelperLoose();
  const id = classification.id;
  const description = classification.description;
  const guild_metadata = classification.guild_metadata;
  let obj = description(guild_metadata[16]);
  let obj1 = id(guild_metadata[17]);
  const isNewClassification = obj1.useIsNewClassification(classification);
  const items = [description, guild_metadata];
  obj = {};
  const items1 = [tmp.detailContainerOuter, ];
  let prop = null;
  const memo = React.useMemo(() => {
    function hook(children) {
      return outer2_11(id(guild_metadata[11]).Text, { variant: "heading-md/extrabold", children }, arg1);
    }
    let obj = { description, descriptionHook: hook };
    if (null != guild_metadata) {
      let name;
      let member_type;
      if (null != guild_metadata) {
        member_type = guild_metadata.member_type;
      }
      if (member_type === id(guild_metadata[18]).MemberType.OWNER) {
        const intl3 = id(guild_metadata[12]).intl;
        obj = {};
        const merged = Object.assign(obj);
        obj = null == guild_metadata;
        name = undefined;
        if (!obj) {
          name = guild_metadata.name;
        }
        obj["guildName"] = name;
        let formatResult = intl3.format(id(guild_metadata[12]).t.Lb0HVv, obj);
      } else {
        const intl2 = id(guild_metadata[12]).intl;
        obj = { classification_type: description, classificationHook: hook };
        let name1;
        if (null != guild_metadata) {
          name1 = guild_metadata.name;
        }
        obj.guildName = name1;
        formatResult = intl2.format(id(guild_metadata[12]).t.rmpEPD, obj);
      }
    } else {
      const intl = id(guild_metadata[12]).intl;
      return intl.format(id(guild_metadata[12]).t.QY4g5t, obj);
    }
  }, items);
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  items1[1] = prop;
  obj.style = items1;
  obj = {
    onPress() {
      let obj = description(guild_metadata[19]);
      obj = { classificationId: id, source: outer1_8.StandingTab };
      obj.pushLazy(id(guild_metadata[21])(guild_metadata[20], guild_metadata.paths), obj);
    }
  };
  obj1 = { style: items2 };
  items2 = [tmp.detailContainerInner];
  const extractTimestampResult = obj.extractTimestamp(id);
  const tmp5 = callback;
  const tmp6 = closure_6;
  const tmp8 = callback;
  if (isNewClassification) {
    let tmp12Result = tmp12(NewBadge, {});
  } else {
    const obj2 = { timestamp: extractTimestampResult };
    tmp12Result = tmp12(RelativeIncidentTime, obj2);
  }
  const items3 = [tmp12Result, callback(id(guild_metadata[11]).Text, { variant: "heading-md/normal", children: memo })];
  obj1.children = items3;
  obj.children = closure_12(closure_6, obj1);
  obj.children = tmp8(description(guild_metadata[9]), obj);
  return tmp5(tmp6, obj);
}
class SafetyHubViolationsContainer {
  constructor(arg0) {
    ({ status, classifications } = global);
    c8 = undefined;
    tmp = c14();
    tmp2 = _slicedToArray(useState.useState(false), 2);
    first = tmp2[0];
    closure_1 = first;
    c2 = tmp2[1];
    tmp4 = _slicedToArray(require("_isNativeReflectConstruct"), 2);
    first1 = tmp4[0];
    _slicedToArray = first1;
    useState = tmp4[1];
    obj = require("useSafetyHubAccountStanding");
    safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
    Pressable = safetyHubAccountStanding;
    obj2 = require("initialize");
    items = [];
    items[0] = c7;
    stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
    f104890 = stateFromStores;
    items1 = [, ];
    items1[0] = classifications;
    items1[1] = first1;
    memo = useState.useMemo(() => classifications.slice(0, first1), items1);
    c7 = memo;
    items2 = [, , , ];
    items2[0] = first;
    items2[1] = safetyHubAccountStanding.state;
    items2[2] = memo;
    items2[3] = stateFromStores;
    effect = useState.useEffect(() => {
      if (first) {
        let obj = first(675);
        obj = { action: outer1_9.ViewViolationsDropdown, account_standing: safetyHubAccountStanding.state, classification_ids: memo.map((id) => Number(id.id)), source: 24.StandingTab, is_violative_content_shown: false, is_dsa_eligible: stateFromStores };
        obj.track(outer1_10.SAFETY_HUB_ACTION, obj);
      }
    }, items2);
    num = 3;
    if (classifications.length - memo.length <= 3) {
      num = classifications.length - memo.length;
    }
    c8 = num;
    obj = { style: items3 };
    items3 = [];
    items3[0] = tmp.container;
    obj1 = {
      status,
      onClick() {
            return dependencyMap((arg0) => !arg0);
          }
    };
    obj1.opened = first;
    obj1.count = classifications.length;
    tmp9 = jsxs;
    tmp10 = f104890;
    items4 = [, ];
    items4[0] = jsx(SafetyHubViolationsHeader, obj1);
    if (first) {
      obj2 = {};
      tmp13 = jsx;
      obj3 = {};
      items5 = [];
      items5[0] = tmp.separator;
      obj3.style = items5;
      tmp11 = jsxs;
      tmp12 = f104890;
      items6 = [, , , , ];
      items6[0] = jsx(f104890, obj3);
      tmp14 = memo.length > 0 && memo.map((classification) => outer1_11(outer1_20, { classification }, classification.id));
      items6[1] = tmp14;
      tmp15 = memo.length < classifications.length;
      if (tmp15) {
        tmp16 = jsxs;
        tmp17 = Fragment;
        obj4 = {};
        tmp18 = jsx;
        tmp19 = f104890;
        obj5 = {};
        items7 = [];
        items7[0] = tmp.separator;
        obj5.style = items7;
        items8 = [, ];
        items8[0] = jsx(f104890, obj5);
        tmp20 = jsx;
        tmp21 = f104890;
        obj6 = {};
        items9 = [];
        items9[0] = tmp.moreButtonContainer;
        obj6.style = items9;
        tmp22 = jsx;
        tmp23 = Pressable;
        obj7 = {};
        items10 = [];
        items10[0] = tmp.moreButton;
        obj7.style = items10;
        obj7.onPress = function onPress() {
          return callback((arg0) => arg0 + outer1_8);
        };
        tmp24 = jsx;
        tmp25 = classifications;
        tmp26 = c2;
        num2 = 11;
        obj8 = {};
        str = "heading-sm/semibold";
        obj8.variant = "heading-sm/semibold";
        num3 = 12;
        intl = require("getSystemLocale").intl;
        obj9 = {};
        obj9.nextPageSize = num;
        obj8.children = intl.format(require("getSystemLocale").t["9Ml56H"], obj9);
        obj7.children = jsx(require("Text").Text, obj8);
        obj6.children = jsx(Pressable, obj7);
        items8[1] = jsx(f104890, obj6);
        obj4.children = items8;
        tmp15 = jsxs(Fragment, obj4);
      }
      items6[2] = tmp15;
      tmp27 = 0 === memo.length;
      if (tmp27) {
        str2 = "active";
        tmp27 = "active" === status;
      }
      if (tmp27) {
        tmp28 = jsx;
        tmp29 = EmptyActiveState;
        tmp27 = jsx(EmptyActiveState, {});
      }
      items6[3] = tmp27;
      tmp30 = 0 === memo.length;
      if (tmp30) {
        str3 = "expired";
        tmp30 = "expired" === status;
      }
      if (tmp30) {
        tmp31 = jsx;
        tmp32 = EmptyExpiredState;
        tmp30 = jsx(EmptyExpiredState, {});
      }
      items6[4] = tmp30;
      obj2.children = items6;
      first = tmp11(tmp12, obj2);
    }
    items4[1] = first;
    obj.children = items4;
    return tmp9(tmp10, obj);
  }
}
({ Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActionSource: closure_8, SafetyHubAnalyticsActions: closure_9 } = SafetyHubLinks);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: 36, gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.connectedContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: require("_createForOfIteratorHelperLoose").space.PX_8, width: "100%" };
let obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
_createForOfIteratorHelperLoose.header = obj2;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: require("_createForOfIteratorHelperLoose").space.PX_8, width: "100%" };
_createForOfIteratorHelperLoose.detailContainerOuter = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: 10 };
let obj4 = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
_createForOfIteratorHelperLoose.detailContainerOuterNew = obj4;
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: 10 };
_createForOfIteratorHelperLoose.detailContainerInner = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = { display: "flex", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
_createForOfIteratorHelperLoose.iconBackground = obj6;
_createForOfIteratorHelperLoose.chevron = { marginLeft: "auto" };
let obj5 = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.incidentDate = { alignSelf: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj7 = { alignSelf: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.incidentDateNew = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, color: require("_createForOfIteratorHelperLoose").colors.CONTROL_PRIMARY_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.newText = { textTransform: "capitalize" };
const obj9 = { display: "flex", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.emptyState = obj9;
const obj10 = { height: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: 10 };
_createForOfIteratorHelperLoose.separator = obj10;
_createForOfIteratorHelperLoose.moreButtonContainer = { display: "flex", alignItems: "center", justifyContent: "center" };
const obj11 = { display: "flex", alignItems: "center", justifyContent: "center", borderBottomEndRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomStartRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 29, width: 207 };
_createForOfIteratorHelperLoose.moreButton = obj11;
_createForOfIteratorHelperLoose.headerTextContainer = { flexShrink: 0, flexGrow: 1, gap: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj8 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, color: require("_createForOfIteratorHelperLoose").colors.CONTROL_PRIMARY_TEXT_DEFAULT };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default SafetyHubViolationsContainer;
export const ConnectedSafetyHubViolationsContainer = function ConnectedSafetyHubViolationsContainer() {
  let obj = require(11031) /* useSafetyHubClassifications */;
  const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
  let obj1 = require(11031) /* useSafetyHubClassifications */;
  const expiredSafetyHubClassifications = obj1.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    obj = {};
    const items = [tmp.connectedContainer];
    obj.style = items;
    obj = { status: "active", classifications: activeSafetyHubClassifications };
    const items1 = [callback(SafetyHubViolationsContainer, obj), ];
    obj1 = { status: "expired", classifications: expiredSafetyHubClassifications };
    items1[1] = callback(SafetyHubViolationsContainer, obj1);
    obj.children = items1;
    let tmp2 = callback2(closure_6, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
};
