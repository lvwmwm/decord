// Module ID: 14307
// Function ID: 14308
// Name: SafetyHubViolationsContainer
// Dependencies: [32, 19, 17, 7881, 7868, 1074, 21, 4836, 576, 9203, 8048, 4832, 1115, 13113, 10615, 7867, 11, 14308, 7869, 5039, 11357, 1981, 11361, 504, 1241, 11359, 2]
// Exports: ConnectedSafetyHubViolationsContainer

// Module 14307 (SafetyHubViolationsContainer)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7867 */;
import SafetyHubModels from "SafetyHubModels" /* 7869 */;
import WarningIcon2 from "WarningIcon" /* 8048 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11359 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
function SafetyHubViolationsHeader(count) {
  let ChevronSmallDownIcon;
  let WarningIcon;
  let formatToPlainStringResult;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj3;
  let onClick;
  let opened;
  let status;
  let stringResult;
  ({ onClick, opened, status } = count);
  const tmp = closure_14();
  const obj = { onPress: onClick, style: items, children: items2 };
  items = [tmp.header];
  const obj2 = { style: items1, children: unpackModuleId(WarningIcon, obj3) };
  items1 = [tmp.iconBackground];
  const tmp4 = TouchableHitBoxDefault;
  WarningIcon = WarningIcon2.WarningIcon;
  const colors = nativeDefault.colors;
  obj3 = { color: "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED, size: "xs" };
  items2 = [unpackModuleId(metroRequire, obj2), , ];
  const obj4 = { style: items3, children: items4 };
  items3 = [tmp.headerTextContainer];
  const Text = tmp7(4832).Text;
  const intl = tmp7(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp7(1115).t;
  if ("active" === status) {
    const IeV2oY = t.IeV2oY;
    const obj5 = { count: count.count.toString() };
    formatToPlainStringResult = formatToPlainString(IeV2oY, obj5);
  } else {
    const fZAHBT = t.fZAHBT;
    const obj6 = { count: count.count.toString() };
    formatToPlainStringResult = formatToPlainString(fZAHBT, obj6);
  }
  items4 = [unpackModuleId(Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult }), ];
  const Text2 = tmp7(4832).Text;
  const intl2 = tmp7(1115).intl;
  const string = intl2.string;
  const t2 = tmp7(1115).t;
  if ("active" === status) {
    stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  items4[1] = unpackModuleId(Text2, { variant: "text-xxs/normal", color: "text-muted", children: stringResult });
  items2[1] = closure_12(metroRequire, obj4);
  if (opened) {
    ChevronSmallDownIcon = tmp7(13113).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp7(10615).ChevronSmallDownIcon;
  }
  const obj7 = { size: "md", style: items5 };
  items5 = [tmp.chevron];
  items2[2] = unpackModuleId(ChevronSmallDownIcon, obj7);
  return closure_12(tmp4, obj);
}
function EmptyActiveState() {
  let intl;
  let intl2;
  let items;
  let items1;
  const obj = { style: items, children: items1 };
  items = [closure_14().emptyState];
  const obj2 = { variant: "heading-sm/extrabold", children: intl.string(intl4.t.reLFaV) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [unpackModuleId(Text, obj2), ];
  const obj3 = { variant: "text-xs/normal", children: intl2.string(intl4.t.ERdH1o) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = unpackModuleId(Text2, obj3);
  return closure_12(metroRequire, obj);
}
function EmptyExpiredState() {
  let Text;
  let intl;
  let items;
  let obj2;
  const obj = { style: items, children: unpackModuleId(Text, obj2) };
  items = [closure_14().emptyState];
  obj2 = { variant: "text-xs/normal", children: intl.string(intl4.t.RV3AXf) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return unpackModuleId(metroRequire, obj);
}
function RelativeIncidentTime(timestamp) {
  let Text;
  let obj2;
  let obj3;
  timestamp = timestamp.timestamp;
  const obj = { style: closure_14().incidentDate, children: unpackModuleId(Text, obj2) };
  obj2 = { variant: "text-xs/medium", children: obj3.getClassificationRelativeIncidentTime(timestamp) };
  Text = Text_Text.Text;
  obj3 = SafetyHubUtils;
  return unpackModuleId(metroRequire, obj);
}
function NewBadge() {
  let Text;
  let intl;
  let items;
  let obj2;
  const tmp = closure_14();
  const obj = { style: items, children: unpackModuleId(Text, obj2) };
  items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
  obj2 = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp.newText, children: intl.string(intl4.t.QKMRC4) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return unpackModuleId(metroRequire, obj);
}
function ClassificationDetail(classification) {
  let items2;
  let items3;
  let obj4;
  let obj5;
  let tmp12;
  let tmp2Result;
  let tmp8Result;
  classification = classification.classification;
  const tmp = closure_14();
  const id = classification.id;
  const description = classification.description;
  const guild_metadata = classification.guild_metadata;
  const tmp2 = description;
  let obj = description(guild_metadata[16]);
  const extractTimestampResult = obj.extractTimestamp(id);
  let obj2 = id(guild_metadata[17]);
  const isNewClassification = obj2.useIsNewClassification(classification);
  const items = [description, guild_metadata];
  const items1 = [tmp.detailContainerOuter, ];
  let prop = null;
  const memo = react.useMemo(() => {
    let formatResult;
    let name;
    let name1;
    function hook(children, arg1) {
      const obj = { variant: "heading-md/extrabold", children };
      return closure_1_11(id(guild_metadata[11]).Text, obj, arg1);
    }
    let obj = { description, descriptionHook: hook };
    if (null != guild_metadata) {
      let format2Result;
      let member_type;
      if (guild_metadata != null) {
        member_type = tmp2.member_type;
      }
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = tmp7(1115).intl;
        const format2 = intl3.format;
        const obj2 = { guildName: name };
        const Lb0HVv = tmp7(1115).t.Lb0HVv;
        const merged = Object.assign(obj);
        name = undefined;
        if (guild_metadata != null) {
          name = tmp2.name;
        }
        format2Result = format2(Lb0HVv, obj2);
      } else {
        const intl2 = tmp7(1115).intl;
        const format = intl2.format;
        const obj3 = { classification_type: tmp, classificationHook: hook, guildName: name1 };
        name1 = undefined;
        const rmpEPD = tmp7(1115).t.rmpEPD;
        if (guild_metadata != null) {
          name1 = tmp2.name;
        }
        format2Result = format(rmpEPD, obj3);
      }
      formatResult = format2Result;
    } else {
      const intl = intl4.intl;
      formatResult = intl.format(intl4.t.QY4g5t, obj);
    }
    return formatResult;
  }, items);
  const tmp5 = id;
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  let obj3 = { style: items1, children: tmp8(tmp2Result, obj4) };
  items1[1] = prop;
  obj4 = {
    onPress() {
      const obj = ModalActionCreatorsDefault;
      const obj2 = { classificationId: id, source: metroImportAll.StandingTab };
      obj.pushLazy(asyncRequire(11357, dependencyMap.paths), obj2);
    },
    children: tmp12(closure_6, obj5)
  };
  obj5 = { style: items2, children: items3 };
  items2 = [tmp.detailContainerInner];
  tmp12 = closure_12;
  tmp2Result = tmp2(guild_metadata[9]);
  if (isNewClassification) {
    tmp8Result = tmp8(NewBadge, {});
  } else {
    const obj6 = { timestamp: extractTimestampResult };
    tmp8Result = tmp8(RelativeIncidentTime, obj6);
  }
  items3 = [tmp8Result, tmp8(tmp5(tmp3[11]).Text, { variant: "heading-md/normal", children: memo })];
  return closure_11(closure_6, obj3);
}
class SafetyHubViolationsContainer {
  constructor(arg0) {
    let Text;
    let classifications;
    let closure_2;
    let closure_4;
    let intl;
    let items10;
    let items3;
    let items4;
    let items5;
    let items7;
    let items8;
    let items9;
    let obj10;
    let obj11;
    let obj9;
    let status;
    const f99478 = (classification) => {
      const obj = { classification };
      return closure_1_11(ClassificationDetail, obj, classification.id);
    };
    ({ status, classifications } = arg0);
    let first1;
    react = undefined;
    let memo;
    let tmp = closure_14();
    const tmp2 = first1(react.useState(false), 2);
    let opened = tmp2[0];
    dependencyMap = tmp2[1];
    const tmp4 = first1(react.useState(3), 2);
    first1 = tmp4[0];
    react = tmp4[1];
    let obj = classifications(11361);
    const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
    const items = [memo];
    const obj2 = classifications(504);
    const stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
    const items1 = [classifications, first1];
    memo = react.useMemo(() => classifications.slice(0, first1), items1);
    const items2 = [opened, safetyHubAccountStanding.state, memo, stateFromStores];
    const effect = react.useEffect(() => {
      const tmp = first;
      if (tmp) {
        const obj = { action: React4.ViewViolationsDropdown, account_standing: safetyHubAccountStanding.state, classification_ids: memo.map((id) => Number(id.id)), source: metroImportAll.StandingTab, is_violative_content_shown: false, is_dsa_eligible: stateFromStores };
        const track = AnalyticsUtilsDefault.track;
        const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
        AnalyticsUtilsDefault;
        track(SAFETY_HUB_ACTION, obj);
      }
    }, items2);
    let num = 3;
    if (classifications.length - memo.length <= 3) {
      num = classifications.length - memo.length;
    }
    const obj3 = { style: items3, children: items4 };
    items3 = [tmp.container];
    items4 = [, ];
    const obj4 = {
      status,
      onClick() {
        return closure_2((arg0) => !arg0);
      },
      opened,
      count: classifications.length
    };
    items4[0] = closure_11(SafetyHubViolationsHeader, obj4);
    if (opened) {
      const obj5 = { style: items5 };
      items5 = [tmp.separator];
      const items6 = [closure_11(stateFromStores, obj5), memo.length > 0 && memo.map(f99478), , , ];
      let tmp11Result = memo.length < classifications.length;
      memo.length > 0 && memo.map(f99478);
      if (tmp11Result) {
        const obj7 = { style: items7 };
        items7 = [tmp.separator];
        const obj6 = { children: items8 };
        items8 = [closure_11(stateFromStores, obj7), ];
        const obj8 = { style: items9, children: closure_11(safetyHubAccountStanding, obj9) };
        items9 = [tmp.moreButtonContainer];
        obj9 = {
          style: items10,
          onPress() {
                return closure_4((arg0) => arg0 + num);
              },
          children: closure_11(Text, obj10)
        };
        items10 = [tmp.moreButton];
        obj10 = { variant: "heading-sm/semibold", children: intl.format(classifications(1115).t["9Ml56H"], obj11) };
        Text = tmp6(4832).Text;
        intl = tmp6(1115).intl;
        obj11 = { nextPageSize: num };
        items8[1] = closure_11(stateFromStores, obj8);
        tmp11Result = tmp11(closure_13, obj6);
      }
      items6[2] = tmp11Result;
      items6[3] = 0 === memo.length && "active" === status && tmp13(EmptyActiveState, {});
      const tmp13Result = 0 === memo.length && "active" === status && tmp13(EmptyActiveState, {});
      const obj12 = { children: items6 };
      items6[4] = 0 === memo.length && "expired" === status && tmp13(EmptyExpiredState, {});
      const tmp13Result2 = 0 === memo.length && "expired" === status && tmp13(EmptyExpiredState, {});
      opened = tmp11(tmp12, obj12);
    }
    items4[1] = opened;
    return closure_12(stateFromStores, obj3);
  }
}
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ SafetyHubAnalyticsActionSource: metroImportAll, SafetyHubAnalyticsActions: c9 } = SafetyHubConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { connectedContainer: obj2, container: obj3, header: obj4, detailContainerOuter: obj5, detailContainerOuterNew: obj6, detailContainerInner: obj7, iconBackground: obj8, chevron: { marginLeft: "auto" }, incidentDate: obj9, incidentDateNew: obj10, newText: { textTransform: "capitalize" }, emptyState: obj11, separator: size, moreButtonContainer: { display: "flex", alignItems: "center", justifyContent: "center" }, moreButton: size1, headerTextContainer: { flexShrink: 0, flexGrow: 1, gap: 2 } };
obj2 = { display: "flex", marginTop: nativeDefault.space.PX_12, marginBottom: 36, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_8, width: "100%" };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, width: "100%" };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: 10 };
obj6 = { borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
obj7 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj8 = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
obj9 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj11 = { display: "flex", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.md, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24 };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 10 };
size1 = { display: "flex", alignItems: "center", justifyContent: "center", borderBottomEndRadius: nativeDefault.radii.xs, borderBottomStartRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 29, width: 207 };
const authStore2 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default SafetyHubViolationsContainer;
export const ConnectedSafetyHubViolationsContainer = function ConnectedSafetyHubViolationsContainer() {
  let items;
  let items1;
  let tmp2;
  const tmp = closure_14();
  const obj = useSafetyHubClassifications;
  const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
  const obj2 = useSafetyHubClassifications;
  const expiredSafetyHubClassifications = obj2.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    const obj3 = { style: items, children: items1 };
    items = [tmp.connectedContainer];
    const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
    items1 = [unpackModuleId(SafetyHubViolationsContainer, obj4), ];
    const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
    items1[1] = unpackModuleId(SafetyHubViolationsContainer, obj5);
    tmp2 = closure_12(metroRequire, obj3);
  } else {
    tmp2 = null;
  }
  return tmp2;
};
