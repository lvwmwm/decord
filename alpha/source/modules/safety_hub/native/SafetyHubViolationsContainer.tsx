// Module ID: 14835
// Function ID: 14836
// Name: SafetyHubViolationsContainer
// Dependencies: [32, 19, 17, 5920, 5921, 1085, 21, 5090, 587, 558, 576, 5003, 1126, 5086, 13698, 10508, 7013, 5927, 11, 14836, 5922, 5940, 11495, 1999, 11499, 504, 1264, 11497, 2]

// Module 14835 (SafetyHubViolationsContainer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import WarningIcon2 from "WarningIcon" /* 5003 */;
import Text_Text from "Text/Text" /* 5086 */;
import SafetyHubModels from "SafetyHubModels" /* 5922 */;
import SafetyHubUtils from "SafetyHubUtils" /* 5927 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 7013 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11497 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubStore from "SafetyHubStore" /* 5920 */;
import SafetyHubConstants from "SafetyHubConstants" /* 5921 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault, is_dsa_eligible, trackResult;

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
function ClassificationDetail(classification) {
  let items2;
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
  let obj = description(guild_metadata[18]);
  const extractTimestampResult = obj.extractTimestamp(id);
  let obj2 = id(guild_metadata[19]);
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
      return closure_1_11(id(guild_metadata[13]).Text, obj, arg1);
    }
    let obj = { description, descriptionHook: hook };
    if (null != guild_metadata) {
      let format2Result;
      let member_type;
      if (guild_metadata != null) {
        member_type = tmp2.member_type;
      }
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = tmp7(1126).intl;
        const format2 = intl3.format;
        const obj2 = { guildName: name };
        const Lb0HVv = tmp7(1126).t.Lb0HVv;
        const merged = Object.assign(obj);
        name = undefined;
        if (guild_metadata != null) {
          name = tmp2.name;
        }
        format2Result = format2(Lb0HVv, obj2);
      } else {
        const intl2 = tmp7(1126).intl;
        const format = intl2.format;
        const obj3 = { classification_type: tmp, classificationHook: hook, guildName: name1 };
        name1 = undefined;
        const rmpEPD = tmp7(1126).t.rmpEPD;
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
      obj.pushLazy(asyncRequire(11495, dependencyMap.paths), obj2);
    },
    children: tmp12(closure_6, obj5)
  };
  obj5 = { style: tmp.detailContainerInner, children: items2 };
  tmp12 = closure_12;
  tmp2Result = tmp2(guild_metadata[16]);
  if (isNewClassification) {
    tmp8Result = tmp8(closure_19, {});
  } else {
    const obj6 = { timestamp: extractTimestampResult };
    tmp8Result = tmp8(closure_18, obj6);
  }
  items2 = [tmp8Result, tmp8(tmp5(tmp3[13]).Text, { variant: "heading-md/normal", children: memo })];
  return closure_11(closure_6, obj3);
}
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
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyHubViolationsHeader(arg0) {
  let ICON_MUTED;
  let count;
  let items;
  let items1;
  let onClick;
  let opened;
  let status;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(27);
  ({ count, onClick, opened, status } = arg0);
  const tmp4 = closure_14();
  const colors = nativeDefault.colors;
  if ("active" === status) {
    ICON_MUTED = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp7 = tmp6;
  } else {
    ICON_MUTED = colors.ICON_MUTED;
    tmp7 = tmp6;
  }
  if (cResult[0] !== ICON_MUTED) {
    const obj2 = { color: ICON_MUTED, size: "xs" };
    const tmp10 = unpackModuleId(WarningIcon2.WarningIcon, obj2);
    cResult[0] = ICON_MUTED;
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp4.iconBackground) {
    let tmp11;
    let formatToPlainStringResult;
    if (cResult[3] === tmp8) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === count) {
      let tmp13;
      let tmp15;
      let tmp18;
      let tmp20;
      if (cResult[6] === status) {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== tmp13) {
        const obj3 = { variant: "heading-sm/semibold", children: tmp13 };
        const tmp17 = unpackModuleId(Text_Text.Text, obj3);
        cResult[8] = tmp13;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] !== status) {
        let stringResult;
        const intl2 = tmp(1126).intl;
        const string = intl2.string;
        const t2 = tmp(1126).t;
        if ("active" === status) {
          stringResult = string(t2.XJ2YVR);
        } else {
          stringResult = string(t2.SzGV0g);
        }
        cResult[10] = status;
        cResult[11] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp18) {
        const obj4 = { variant: "text-xxs/normal", color: "text-muted", children: tmp18 };
        const tmp22 = unpackModuleId(Text_Text.Text, obj4);
        cResult[12] = tmp18;
        cResult[13] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === tmp4.headerTextContainer) {
        if (cResult[15] === tmp15) {
          let tmp23;
          let ChevronSmallDownIcon;
          if (cResult[16] === tmp20) {
            tmp23 = cResult[17];
          }
          if (cResult[18] === opened) {
            let tmp27;
            if (cResult[19] === tmp4.chevron) {
              tmp27 = cResult[20];
            }
            if (cResult[21] === onClick) {
              if (cResult[22] === tmp4.header) {
                if (cResult[23] === tmp11) {
                  if (cResult[24] === tmp23) {
                    let tmp30;
                    if (cResult[25] === tmp27) {
                      tmp30 = cResult[26];
                    }
                    return tmp30;
                  }
                }
              }
            }
            const obj5 = { onPress: onClick, style: tmp4.header, children: items };
            items = [tmp11, tmp23, tmp27];
            const tmp32 = closure_12(tmp7(7013), obj5);
            cResult[21] = onClick;
            cResult[22] = tmp4.header;
            cResult[23] = tmp11;
            cResult[24] = tmp23;
            cResult[25] = tmp27;
            cResult[26] = tmp32;
            tmp30 = tmp32;
          }
          const tmp28 = unpackModuleId;
          if (opened) {
            ChevronSmallDownIcon = tmp(13698).ChevronSmallUpIcon;
          } else {
            ChevronSmallDownIcon = tmp(10508).ChevronSmallDownIcon;
          }
          const obj6 = { size: "md", style: tmp4.chevron };
          const tmp28Result = tmp28(ChevronSmallDownIcon, obj6);
          cResult[18] = opened;
          cResult[19] = tmp4.chevron;
          cResult[20] = tmp28Result;
          tmp27 = tmp28Result;
        }
      }
      const obj7 = { style: tmp4.headerTextContainer, children: items1 };
      items1 = [tmp15, tmp20];
      const tmp26 = closure_12(metroRequire, obj7);
      cResult[14] = tmp4.headerTextContainer;
      cResult[15] = tmp15;
      cResult[16] = tmp20;
      cResult[17] = tmp26;
      tmp23 = tmp26;
    }
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp(1126).t;
    if ("active" === status) {
      const IeV2oY = t.IeV2oY;
      const obj8 = { count: count.toString() };
      formatToPlainStringResult = formatToPlainString(IeV2oY, obj8);
    } else {
      const fZAHBT = t.fZAHBT;
      const obj9 = { count: count.toString() };
      formatToPlainStringResult = formatToPlainString(fZAHBT, obj9);
    }
    cResult[5] = count;
    cResult[6] = status;
    cResult[7] = formatToPlainStringResult;
    tmp13 = formatToPlainStringResult;
  }
  const obj10 = { style: tmp4.iconBackground, children: tmp8 };
  const tmp12 = unpackModuleId(metroRequire, obj10);
  cResult[2] = tmp4.iconBackground;
  cResult[3] = tmp8;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function SafetyHubViolationsHeader(count) {
  let ChevronSmallDownIcon;
  let WarningIcon;
  let formatToPlainStringResult;
  let items;
  let items1;
  let obj3;
  let onClick;
  let opened;
  let status;
  let stringResult;
  ({ onClick, opened, status } = count);
  const tmp = closure_14();
  const obj = { onPress: onClick, style: tmp.header, children: items };
  const obj2 = { style: tmp.iconBackground, children: unpackModuleId(WarningIcon, obj3) };
  const tmp4 = TouchableHitBoxDefault;
  WarningIcon = WarningIcon2.WarningIcon;
  const colors = nativeDefault.colors;
  obj3 = { color: "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED, size: "xs" };
  items = [unpackModuleId(metroRequire, obj2), , ];
  const obj4 = { style: tmp.headerTextContainer, children: items1 };
  const Text = tmp7(5086).Text;
  const intl = tmp7(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp7(1126).t;
  if ("active" === status) {
    const IeV2oY = t.IeV2oY;
    const obj5 = { count: count.count.toString() };
    formatToPlainStringResult = formatToPlainString(IeV2oY, obj5);
  } else {
    const fZAHBT = t.fZAHBT;
    const obj6 = { count: count.count.toString() };
    formatToPlainStringResult = formatToPlainString(fZAHBT, obj6);
  }
  items1 = [unpackModuleId(Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult }), ];
  const Text2 = tmp7(5086).Text;
  const intl2 = tmp7(1126).intl;
  const string = intl2.string;
  const t2 = tmp7(1126).t;
  if ("active" === status) {
    stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  items1[1] = unpackModuleId(Text2, { variant: "text-xxs/normal", color: "text-muted", children: stringResult });
  items[1] = closure_12(metroRequire, obj4);
  if (opened) {
    ChevronSmallDownIcon = tmp7(13698).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp7(10508).ChevronSmallDownIcon;
  }
  const obj7 = { size: "md", style: tmp.chevron };
  items[2] = unpackModuleId(ChevronSmallDownIcon, obj7);
  return closure_12(tmp4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyActiveState() {
  let first;
  let intl;
  let intl2;
  let items;
  let tmp11;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-sm/extrabold", children: intl.string(intl4.t.reLFaV) };
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp7 = unpackModuleId(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/normal", children: intl2.string(intl4.t.ERdH1o) };
    const Text2 = tmp(5086).Text;
    intl2 = tmp(1126).intl;
    const tmp10 = unpackModuleId(Text2, obj3);
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.emptyState) {
    const obj4 = { style: tmp4.emptyState, children: items };
    items = [first, tmp8];
    const tmp14 = closure_12(metroRequire, obj4);
    cResult[2] = tmp4.emptyState;
    cResult[3] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  return tmp11;
}) : (function EmptyActiveState() {
  let intl;
  let intl2;
  let items;
  const obj = { style: closure_14().emptyState, children: items };
  const obj2 = { variant: "heading-sm/extrabold", children: intl.string(intl4.t.reLFaV) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [unpackModuleId(Text, obj2), ];
  const obj3 = { variant: "text-xs/normal", children: intl2.string(intl4.t.ERdH1o) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = unpackModuleId(Text2, obj3);
  return closure_12(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyExpiredState() {
  let first;
  let intl;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/normal", children: intl.string(intl4.t.RV3AXf) };
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp7 = unpackModuleId(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyState) {
    const obj3 = { style: tmp4.emptyState, children: first };
    const tmp11 = unpackModuleId(metroRequire, obj3);
    cResult[1] = tmp4.emptyState;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function EmptyExpiredState() {
  let Text;
  let intl;
  let obj2;
  const obj = { style: closure_14().emptyState, children: unpackModuleId(Text, obj2) };
  obj2 = { variant: "text-xs/normal", children: intl.string(intl4.t.RV3AXf) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return unpackModuleId(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function RelativeIncidentTime(timestamp) {
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  timestamp = timestamp.timestamp;
  const tmp4 = closure_14();
  const incidentDate = tmp4.incidentDate;
  if (cResult[0] !== timestamp) {
    const tmpResult = SafetyHubUtils;
    const classificationRelativeIncidentTime = tmpResult.getClassificationRelativeIncidentTime(timestamp);
    cResult[0] = timestamp;
    cResult[1] = classificationRelativeIncidentTime;
    tmp5 = classificationRelativeIncidentTime;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj2 = { variant: "text-xs/medium", children: tmp5 };
    const tmp9 = unpackModuleId(Text_Text.Text, obj2);
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4.incidentDate) {
    let tmp10;
    if (cResult[5] === tmp7) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = unpackModuleId(metroRequire, { style: incidentDate, children: tmp7 });
  cResult[4] = tmp4.incidentDate;
  cResult[5] = tmp7;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function RelativeIncidentTime(timestamp) {
  let Text;
  let obj2;
  let obj3;
  timestamp = timestamp.timestamp;
  const obj = { style: closure_14().incidentDate, children: unpackModuleId(Text, obj2) };
  obj2 = { variant: "text-xs/medium", children: obj3.getClassificationRelativeIncidentTime(timestamp) };
  Text = Text_Text.Text;
  obj3 = SafetyHubUtils;
  return unpackModuleId(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewBadge() {
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_14();
  if (cResult[0] === tmp4.incidentDate) {
    let tmp5;
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4.incidentDateNew) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    const newText = tmp4.newText;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl4.t.QKMRC4);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.newText) {
      const obj2 = { variant: "text-xs/medium", color: "text-overlay-light", style: newText, children: tmp7 };
      const tmp11 = unpackModuleId(Text_Text.Text, obj2);
      cResult[4] = tmp4.newText;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { style: tmp5, children: tmp9 };
    const tmp15 = unpackModuleId(metroRequire, obj3);
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp4);
  cResult[0] = tmp4.incidentDate;
  cResult[1] = tmp4.incidentDateNew;
  cResult[2] = items;
  tmp5 = items;
}) : (function NewBadge() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyHubViolationsContainer(arg0) {
  let classifications;
  let closure_1;
  let isDsaEligible;
  let opened;
  let safetyHubAccountStanding;
  let stateFromStores;
  let status;
  let tmp10;
  let tmp11;
  let tmp8;
  let tmp = opened;
  let obj = opened(576);
  const cResult = obj.c(29);
  ({ status, classifications } = arg0);
  const tmp4 = closure_14();
  const tmp5 = safetyHubAccountStanding(stateFromStores.useState(false), 2);
  opened = tmp5[0];
  importDefault = tmp5[1];
  [tmp8, dependencyMap] = safetyHubAccountStanding(stateFromStores.useState(3), 2);
  const tmp7 = safetyHubAccountStanding(stateFromStores.useState(3), 2);
  const obj3 = opened(11499);
  safetyHubAccountStanding = obj3.useSafetyHubAccountStanding();
  const obj2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function y() {
      return isDsaEligible.getIsDsaEligible();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  if (cResult[2] === classifications) {
    let tmp14;
    if (cResult[3] === tmp8) {
      tmp14 = cResult[4];
    }
    let closure_5 = tmp14;
    if (cResult[5] === safetyHubAccountStanding.state) {
      if (cResult[6] === tmp14) {
        if (cResult[7] === stateFromStores) {
          let tmp16;
          let tmp17;
          if (cResult[8] === opened) {
            tmp16 = cResult[9];
            tmp17 = cResult[10];
          }
          const effect = obj2.useEffect(tmp16, tmp17);
          const num9 = 3;
          class L {
            constructor() {
              tmp = closure_0;
              if (tmp) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                tmp4 = closure_1(closure_2[26]);
                tmp5 = AnalyticEvents;
                obj = { action: null, account_standing: null, classification_ids: null, source: null, is_violative_content_shown: false, is_dsa_eligible: null };
                tmp6 = SafetyHubAnalyticsActions;
                obj.action = SafetyHubAnalyticsActions.ViewViolationsDropdown;
                tmp7 = closure_3;
                obj.account_standing = closure_3.state;
                tmp8 = closure_5;
                track = tmp4.track;
                SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                obj.classification_ids = closure_5.map((id) => Number(id.id));
                tmp9 = closure_8;
                obj.source = closure_8.StandingTab;
                tmp10 = closure_4;
                obj.is_dsa_eligible = closure_4;
                trackResult = track(SAFETY_HUB_ACTION, obj);
              }
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor() {
                return closure_1((arg0) => !arg0);
              }
            }
            cResult[11] = G;
            class L {
              constructor() {
                tmp = closure_0;
                if (tmp) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  tmp4 = closure_1(closure_2[26]);
                  tmp5 = AnalyticEvents;
                  obj = { action: null, account_standing: null, classification_ids: null, source: null, is_violative_content_shown: false, is_dsa_eligible: null };
                  tmp6 = SafetyHubAnalyticsActions;
                  obj.action = SafetyHubAnalyticsActions.ViewViolationsDropdown;
                  tmp7 = closure_3;
                  obj.account_standing = closure_3.state;
                  tmp8 = closure_5;
                  track = tmp4.track;
                  SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                  obj.classification_ids = closure_5.map((id) => Number(id.id));
                  tmp9 = closure_8;
                  obj.source = closure_8.StandingTab;
                  tmp10 = closure_4;
                  obj.is_dsa_eligible = closure_4;
                  trackResult = track(SAFETY_HUB_ACTION, obj);
                }
                return;
              }
            }
          } else {
            class G {
              constructor() {
                return closure_1((arg0) => !arg0);
              }
            }
          }
          if (cResult[12] === classifications.length) {
            class G {
              constructor() {
                return closure_1((arg0) => !arg0);
              }
            }
          }
          const obj4 = { status, onClick: tmp19, opened, count: classifications.length };
          cResult[12] = classifications.length;
          cResult[13] = opened;
          cResult[14] = status;
          cResult[15] = closure_11(closure_15, obj4);
          const tmp23 = closure_11(closure_15, obj4);
        }
      }
    }
    class L {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = closure_1(closure_2[26]);
          tmp5 = AnalyticEvents;
          obj = { action: null, account_standing: null, classification_ids: null, source: null, is_violative_content_shown: false, is_dsa_eligible: null };
          tmp6 = SafetyHubAnalyticsActions;
          obj.action = SafetyHubAnalyticsActions.ViewViolationsDropdown;
          tmp7 = closure_3;
          obj.account_standing = closure_3.state;
          tmp8 = closure_5;
          track = tmp4.track;
          SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
          obj.classification_ids = closure_5.map((id) => Number(id.id));
          tmp9 = closure_8;
          obj.source = closure_8.StandingTab;
          tmp10 = closure_4;
          obj.is_dsa_eligible = closure_4;
          trackResult = track(SAFETY_HUB_ACTION, obj);
        }
        return;
      }
    }
    const items1 = [opened, safetyHubAccountStanding.state, tmp14, stateFromStores];
    cResult[5] = safetyHubAccountStanding.state;
    cResult[6] = tmp14;
    cResult[7] = stateFromStores;
    cResult[8] = opened;
    cResult[9] = L;
    cResult[10] = items1;
    tmp17 = items1;
    tmp16 = L;
  }
  const substr = classifications.slice(0, tmp8);
  cResult[2] = classifications;
  cResult[3] = tmp8;
  cResult[4] = substr;
  tmp14 = substr;
}) : (function SafetyHubViolationsContainer(arg0) {
  let Text;
  let classifications;
  let closure_2;
  let closure_4;
  let intl;
  let items3;
  let items5;
  let obj10;
  let obj11;
  let obj9;
  let status;
  const f118543 = (classification) => {
    const obj = { classification };
    return closure_1_11(ClassificationDetail, obj, classification.id);
  };
  ({ status, classifications } = arg0);
  let first1;
  is_dsa_eligible = undefined;
  let memo;
  let tmp = closure_14();
  const tmp2 = first1(is_dsa_eligible.useState(false), 2);
  let opened = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp4 = first1(is_dsa_eligible.useState(3), 2);
  first1 = tmp4[0];
  is_dsa_eligible = tmp4[1];
  let obj = classifications(11499);
  const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
  const items = [memo];
  const obj2 = classifications(504);
  const stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
  const items1 = [classifications, first1];
  memo = is_dsa_eligible.useMemo(() => classifications.slice(0, first1), items1);
  const items2 = [opened, safetyHubAccountStanding.state, memo, stateFromStores];
  const effect = is_dsa_eligible.useEffect(() => {
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
  const obj3 = { style: tmp.container, children: items3 };
  items3 = [, ];
  const obj4 = {
    status,
    onClick() {
      return closure_2((arg0) => !arg0);
    },
    opened,
    count: classifications.length
  };
  items3[0] = closure_11(closure_15, obj4);
  if (opened) {
    const obj5 = { style: tmp.separator };
    const items4 = [closure_11(stateFromStores, obj5), memo.length > 0 && memo.map(f118543), , , ];
    let tmp11Result = memo.length < classifications.length;
    memo.length > 0 && memo.map(f118543);
    if (tmp11Result) {
      const obj6 = { children: items5 };
      const obj7 = { style: tmp.separator };
      items5 = [closure_11(stateFromStores, obj7), ];
      const obj8 = { style: tmp.moreButtonContainer, children: closure_11(safetyHubAccountStanding, obj9) };
      obj9 = {
        style: tmp.moreButton,
        onPress() {
              return closure_4((arg0) => arg0 + num);
            },
        children: closure_11(Text, obj10)
      };
      obj10 = { variant: "heading-sm/semibold", children: intl.format(classifications(1126).t["9Ml56H"], obj11) };
      Text = tmp6(5086).Text;
      intl = tmp6(1126).intl;
      obj11 = { nextPageSize: num };
      items5[1] = closure_11(stateFromStores, obj8);
      tmp11Result = tmp11(closure_13, obj6);
    }
    items4[2] = tmp11Result;
    items4[3] = 0 === memo.length && "active" === status && tmp13(closure_16, {});
    const tmp13Result = 0 === memo.length && "active" === status && tmp13(closure_16, {});
    const obj12 = { children: items4 };
    items4[4] = 0 === memo.length && "expired" === status && tmp13(closure_17, {});
    const tmp13Result2 = 0 === memo.length && "expired" === status && tmp13(closure_17, {});
    opened = tmp11(tmp12, obj12);
  }
  items3[1] = opened;
  return closure_12(stateFromStores, obj3);
});
let closure_21 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedSafetyHubViolationsContainer() {
  let items;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp2 = closure_14();
  const obj2 = useSafetyHubClassifications;
  const activeSafetyHubClassifications = obj2.useActiveSafetyHubClassifications();
  const obj3 = useSafetyHubClassifications;
  const expiredSafetyHubClassifications = obj3.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    let tmp4;
    let tmp8;
    if (cResult[0] !== activeSafetyHubClassifications) {
      const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
      const tmp7 = unpackModuleId(closure_21, obj4);
      cResult[0] = activeSafetyHubClassifications;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== expiredSafetyHubClassifications) {
      const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
      const tmp11 = unpackModuleId(closure_21, obj5);
      cResult[2] = expiredSafetyHubClassifications;
      cResult[3] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === tmp2.connectedContainer) {
      if (cResult[5] === tmp4) {
        let tmp12;
        if (cResult[6] === tmp8) {
          tmp12 = cResult[7];
        }
        tmp3 = tmp12;
      }
    }
    const obj6 = { style: tmp2.connectedContainer, children: items };
    items = [tmp4, tmp8];
    const tmp15 = closure_12(metroRequire, obj6);
    cResult[4] = tmp2.connectedContainer;
    cResult[5] = tmp4;
    cResult[6] = tmp8;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp3 = null;
  }
  return tmp3;
}) : (function ConnectedSafetyHubViolationsContainer() {
  let items;
  let tmp2;
  const tmp = closure_14();
  const obj = useSafetyHubClassifications;
  const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
  const obj2 = useSafetyHubClassifications;
  const expiredSafetyHubClassifications = obj2.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    const obj3 = { style: tmp.connectedContainer, children: items };
    const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
    items = [unpackModuleId(closure_21, obj4), ];
    const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
    items[1] = unpackModuleId(closure_21, obj5);
    tmp2 = closure_12(metroRequire, obj3);
  } else {
    tmp2 = null;
  }
  return tmp2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default tmp6;
export const ConnectedSafetyHubViolationsContainer = tmp7;
