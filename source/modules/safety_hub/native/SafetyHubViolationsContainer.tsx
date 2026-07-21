// Module ID: 13535
// Function ID: 102668
// Name: SafetyHubViolationsHeader
// Dependencies: []
// Exports: ConnectedSafetyHubViolationsContainer

// Module 13535 (SafetyHubViolationsHeader)
function SafetyHubViolationsHeader(count) {
  let onClick;
  let opened;
  let status;
  ({ onClick, opened, status } = count);
  const tmp = callback4();
  let obj = { onPress: onClick, style: items };
  const items = [tmp.header];
  obj = { style: items1 };
  const items1 = [tmp.iconBackground];
  obj = {};
  const colors = importDefault(dependencyMap[8]).colors;
  obj.color = "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED;
  obj.size = "xs";
  obj.children = closure_11(arg1(dependencyMap[10]).WarningIcon, obj);
  const items2 = [closure_11(closure_6, obj), , ];
  const obj1 = { style: items3 };
  const items3 = [tmp.headerTextContainer];
  const obj2 = { variant: "heading-sm/semibold" };
  const intl = arg1(dependencyMap[12]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[12]).t;
  if ("active" === status) {
    const obj3 = { count: str.toString() };
    let formatToPlainStringResult = formatToPlainString(t.IeV2oY, obj3);
  } else {
    const obj4 = { count: str.toString() };
    formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj4);
  }
  obj2.children = formatToPlainStringResult;
  const items4 = [closure_11(arg1(dependencyMap[11]).Text, obj2), ];
  const obj5 = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  const string = intl2.string;
  const t2 = arg1(dependencyMap[12]).t;
  if ("active" === status) {
    let stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  obj5.children = stringResult;
  items4[1] = closure_11(arg1(dependencyMap[11]).Text, obj5);
  obj1.children = items4;
  items2[1] = closure_12(closure_6, obj1);
  if (opened) {
    let ChevronSmallDownIcon = tmp15(tmp16[13]).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp15(tmp16[14]).ChevronSmallDownIcon;
  }
  const items5 = [tmp.chevron];
  items2[2] = closure_11(ChevronSmallDownIcon, { size: "md", style: items5 });
  obj.children = items2;
  return closure_12(importDefault(dependencyMap[9]), obj);
}
function EmptyActiveState() {
  let obj = {};
  const items = [callback4().emptyState];
  obj.style = items;
  obj = { variant: "heading-sm/extrabold" };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.reLFaV);
  const items1 = [callback2(arg1(dependencyMap[11]).Text, obj), ];
  obj = { variant: "text-xs/normal" };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.children = intl2.string(arg1(dependencyMap[12]).t.ERdH1o);
  items1[1] = callback2(arg1(dependencyMap[11]).Text, obj);
  obj.children = items1;
  return callback3(closure_6, obj);
}
function EmptyExpiredState() {
  let obj = {};
  const items = [callback4().emptyState];
  obj.style = items;
  obj = { variant: "text-xs/normal" };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.RV3AXf);
  obj.children = callback2(arg1(dependencyMap[11]).Text, obj);
  return callback2(closure_6, obj);
}
function RelativeIncidentTime(timestamp) {
  let obj = { style: callback4().incidentDate };
  obj = { variant: "text-xs/medium", children: arg1(dependencyMap[15]).getClassificationRelativeIncidentTime(timestamp.timestamp) };
  obj.children = callback2(arg1(dependencyMap[11]).Text, obj);
  return callback2(closure_6, obj);
}
function NewBadge() {
  const tmp = callback4();
  let obj = { style: items };
  const items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
  obj = { style: tmp.newText };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.QKMRC4);
  obj.children = callback2(arg1(dependencyMap[11]).Text, obj);
  return callback2(closure_6, obj);
}
function ClassificationDetail(classification) {
  classification = classification.classification;
  const tmp = callback4();
  const id = classification.id;
  const arg1 = id;
  const description = classification.description;
  const importDefault = description;
  const guild_metadata = classification.guild_metadata;
  const dependencyMap = guild_metadata;
  let obj = importDefault(dependencyMap[16]);
  let obj1 = arg1(dependencyMap[17]);
  const isNewClassification = obj1.useIsNewClassification(classification);
  const items = [description, guild_metadata];
  obj = {};
  const items1 = [tmp.detailContainerOuter, ];
  let prop = null;
  const memo = React.useMemo(() => {
    function hook(children) {
      return callback2(callback(closure_2[11]).Text, { variant: "heading-md/extrabold", children }, arg1);
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
      obj = { classificationId: id, source: StandingTab.StandingTab };
      obj.pushLazy(id(guild_metadata[21])(guild_metadata[20], guild_metadata.paths), obj);
    }
  };
  obj1 = { style: items2 };
  const items2 = [tmp.detailContainerInner];
  const extractTimestampResult = obj.extractTimestamp(id);
  const tmp5 = callback2;
  const tmp6 = closure_6;
  const tmp8 = callback2;
  if (isNewClassification) {
    let tmp12Result = tmp12(NewBadge, {});
  } else {
    const obj2 = { timestamp: extractTimestampResult };
    tmp12Result = tmp12(RelativeIncidentTime, obj2);
  }
  const items3 = [tmp12Result, callback2(arg1(dependencyMap[11]).Text, { variant: "heading-md/normal", children: memo })];
  obj1.children = items3;
  obj.children = closure_12(closure_6, obj1);
  obj.children = tmp8(importDefault(dependencyMap[9]), obj);
  return tmp5(tmp6, obj);
}
class SafetyHubViolationsContainer {
  constructor(arg0) {
    ({ status, classifications } = global);
    arg1 = classifications;
    closure_8 = undefined;
    tmp = closure_14();
    tmp2 = closure_3(importAll.useState(false), 2);
    first = tmp2[0];
    importDefault = first;
    closure_2 = tmp2[1];
    tmp4 = closure_3(require("module_3"), 2);
    first1 = tmp4[0];
    closure_3 = first1;
    importAll = tmp4[1];
    obj = arg1(closure_2[22]);
    safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
    Pressable = safetyHubAccountStanding;
    obj2 = arg1(closure_2[23]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
    f102679 = stateFromStores;
    items1 = [, ];
    items1[0] = classifications;
    items1[1] = first1;
    memo = importAll.useMemo(() => classifications.slice(0, first1), items1);
    closure_7 = memo;
    items2 = [, , , ];
    items2[0] = first;
    items2[1] = safetyHubAccountStanding.state;
    items2[2] = memo;
    items2[3] = stateFromStores;
    effect = importAll.useEffect(() => {
      if (first) {
        let obj = first(closure_2[24]);
        obj = {};
        obj.action = obj.ViewViolationsDropdown;
        obj.account_standing = safetyHubAccountStanding.state;
        obj.classification_ids = memo.map((id) => Number(id.id));
        obj.source = 24.StandingTab;
        obj.is_violative_content_shown = false;
        obj.is_dsa_eligible = stateFromStores;
        obj.track(constants.SAFETY_HUB_ACTION, obj);
      }
    }, items2);
    num = 3;
    if (classifications.length - memo.length <= 3) {
      num = classifications.length - memo.length;
    }
    closure_8 = num;
    obj = { style: items3 };
    items3 = [];
    items3[0] = tmp.container;
    obj1 = {
      status,
      onClick() {
            return callback((arg0) => !arg0);
          }
    };
    obj1.opened = first;
    obj1.count = classifications.length;
    tmp9 = jsxs;
    tmp10 = f102679;
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
      tmp12 = f102679;
      items6 = [, , , , ];
      items6[0] = jsx(f102679, obj3);
      tmp14 = memo.length > 0 && memo.map((classification) => callback3(closure_20, { classification }, classification.id));
      items6[1] = tmp14;
      tmp15 = memo.length < classifications.length;
      if (tmp15) {
        tmp16 = jsxs;
        tmp17 = Fragment;
        obj4 = {};
        tmp18 = jsx;
        tmp19 = f102679;
        obj5 = {};
        items7 = [];
        items7[0] = tmp.separator;
        obj5.style = items7;
        items8 = [, ];
        items8[0] = jsx(f102679, obj5);
        tmp20 = jsx;
        tmp21 = f102679;
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
          return callback2((arg0) => arg0 + closure_8);
        };
        tmp24 = jsx;
        tmp25 = arg1;
        tmp26 = closure_2;
        num2 = 11;
        obj8 = {};
        str = "heading-sm/semibold";
        obj8.variant = "heading-sm/semibold";
        num3 = 12;
        intl = arg1(closure_2[12]).intl;
        obj9 = {};
        obj9.nextPageSize = num;
        obj8.children = intl.format(arg1(closure_2[12]).t.9Ml56H, obj9);
        obj7.children = jsx(arg1(closure_2[11]).Text, obj8);
        obj6.children = jsx(Pressable, obj7);
        items8[1] = jsx(f102679, obj6);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ SafetyHubAnalyticsActionSource: closure_8, SafetyHubAnalyticsActions: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { height: null, width: 0, marginHorizontal: null, marginTop: importDefault(dependencyMap[8]).space.PX_12, gap: importDefault(dependencyMap[8]).space.PX_12 };
obj.connectedContainer = obj;
const tmp4 = arg1(dependencyMap[6]);
obj.container = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.md, padding: importDefault(dependencyMap[8]).space.PX_8, width: "100%" };
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.md, padding: importDefault(dependencyMap[8]).space.PX_8, width: "100%" };
obj.header = { gap: importDefault(dependencyMap[8]).space.PX_16 };
const obj2 = { gap: importDefault(dependencyMap[8]).space.PX_16 };
obj.detailContainerOuter = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[8]).radii.md, padding: importDefault(dependencyMap[8]).space.PX_12, marginTop: 10 };
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[8]).radii.md, padding: importDefault(dependencyMap[8]).space.PX_12, marginTop: 10 };
obj.detailContainerOuterNew = { borderColor: importDefault(dependencyMap[8]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
const obj4 = { borderColor: importDefault(dependencyMap[8]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
obj.detailContainerInner = { display: "flex", gap: importDefault(dependencyMap[8]).space.PX_8 };
const obj5 = { display: "flex", gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.iconBackground = { borderRadius: importDefault(dependencyMap[8]).radii.round, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
obj.chevron = { marginLeft: "auto" };
const obj6 = { borderRadius: importDefault(dependencyMap[8]).radii.round, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
obj.incidentDate = { alignSelf: "flex-start", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[8]).radii.md, paddingVertical: importDefault(dependencyMap[8]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_8 };
const obj7 = { alignSelf: "flex-start", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[8]).radii.md, paddingVertical: importDefault(dependencyMap[8]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_8 };
obj.incidentDateNew = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND, color: importDefault(dependencyMap[8]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj.newText = { textTransform: "capitalize" };
const obj9 = { -1861163602: true, -738052821: true, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[8]).radii.md, gap: importDefault(dependencyMap[8]).space.PX_8, marginTop: importDefault(dependencyMap[8]).space.PX_8, paddingTop: importDefault(dependencyMap[8]).space.PX_24, paddingBottom: importDefault(dependencyMap[8]).space.PX_24 };
obj.emptyState = obj9;
const obj8 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND, color: importDefault(dependencyMap[8]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj.separator = { backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.moreButtonContainer = { cix: 0, y: 0, isArray: 0 };
const obj10 = { backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.moreButton = { borderBottomEndRadius: importDefault(dependencyMap[8]).radii.xs, borderBottomStartRadius: importDefault(dependencyMap[8]).radii.xs, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED };
obj.headerTextContainer = { left: -9518928612121255000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, right: 13343272555201680000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, accessible: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025463949504 };
let closure_14 = obj.createStyles(obj);
const obj11 = { borderBottomEndRadius: importDefault(dependencyMap[8]).radii.xs, borderBottomStartRadius: importDefault(dependencyMap[8]).radii.xs, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default SafetyHubViolationsContainer;
export const ConnectedSafetyHubViolationsContainer = function ConnectedSafetyHubViolationsContainer() {
  let obj = arg1(dependencyMap[25]);
  const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
  let obj1 = arg1(dependencyMap[25]);
  const expiredSafetyHubClassifications = obj1.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    obj = {};
    const items = [tmp.connectedContainer];
    obj.style = items;
    obj = { status: "active", classifications: activeSafetyHubClassifications };
    const items1 = [callback2(SafetyHubViolationsContainer, obj), ];
    obj1 = { status: "expired", classifications: expiredSafetyHubClassifications };
    items1[1] = callback2(SafetyHubViolationsContainer, obj1);
    obj.children = items1;
    let tmp2 = callback3(closure_6, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
};
