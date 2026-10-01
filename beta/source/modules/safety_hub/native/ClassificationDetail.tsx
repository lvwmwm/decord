// Module ID: 11358
// Function ID: 11359
// Name: ClassificationDetail
// Dependencies: [19, 17, 2112, 7881, 7868, 1074, 21, 4836, 576, 4832, 7869, 1115, 504, 3103, 9203, 4525, 8705, 5917, 5281, 11359, 11361, 7880, 7861, 1241, 11362, 5179, 5184, 11364, 6544, 11369, 7867, 2]
// Exports: default

// Module 11358 (ClassificationDetail)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef3103 from "module_3103" /* 3103 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TableRow2 from "TableRow" /* 5917 */;
import SafetyHubModels from "SafetyHubModels" /* 7869 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11362 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 11364 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guildMetadata;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
function ClassificationHeader(classificationTypeText) {
  let obj2;
  classificationTypeText = classificationTypeText.classificationTypeText;
  guildMetadata = classificationTypeText.guildMetadata;
  const tmp = closure_16();
  const items = [classificationTypeText, guildMetadata];
  let obj = { style: tmp.header, children: closure_13(classificationTypeText(4832).Text, obj2) };
  const memo = react.useMemo(() => {
    let formatResult;
    let name;
    let name1;
    let obj = {
      classification_type: classificationTypeText,
      classificationHook(children, arg1) {
        const obj = { variant: "heading-xl/bold", children };
        return closure_1_13(classificationTypeText(closure_1_2[9]).Text, obj, arg1);
      }
    };
    if (null != guildMetadata) {
      let format2Result;
      let member_type;
      if (guildMetadata != null) {
        member_type = tmp.member_type;
      }
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = tmp6(1115).intl;
        const format2 = intl3.format;
        const obj2 = { guildName: name };
        const X1ngSd = tmp6(1115).t.X1ngSd;
        const merged = Object.assign(obj);
        name = undefined;
        if (guildMetadata != null) {
          name = tmp.name;
        }
        format2Result = format2(X1ngSd, obj2);
      } else {
        const intl2 = tmp6(1115).intl;
        const format = intl2.format;
        const obj3 = { guildName: name1 };
        const rmpEPD = tmp6(1115).t.rmpEPD;
        const merged1 = Object.assign(obj);
        name1 = undefined;
        if (guildMetadata != null) {
          name1 = tmp.name;
        }
        format2Result = format(rmpEPD, obj3);
      }
      formatResult = format2Result;
    } else {
      const intl = intl4.intl;
      formatResult = intl.format(intl4.t["39jfOz"], obj);
    }
    return formatResult;
  }, items);
  obj2 = { variant: "text-lg/normal", style: tmp.headerText, color: "mobile-text-heading-primary", children: memo };
  return closure_13(closure_4, obj);
}
function SectionHeader(arg0) {
  let children;
  let obj;
  let plain;
  ({ children, plain } = arg0);
  if (plain === undefined) {
    plain = false;
  }
  const Text = Text_Text.Text;
  const tmp = map1;
  if (plain) {
    obj = { variant: "text-sm/medium", color: "text-subtle", children };
    const obj2 = { variant: "text-sm/medium", color: "text-subtle", children };
  } else {
    obj = { variant: "eyebrow", color: "text-muted", children };
  }
  return tmp(Text, obj);
}
function BulletRow(large) {
  let items;
  let flag = large.large;
  const children = large.children;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_16();
  let str = "text-xs/normal";
  if (flag) {
    str = "text-md/medium";
  }
  const obj = { style: tmp.classificationActionDescription, children: items };
  items = [authStore2(Text_Text.Text, { variant: str, children: [" ", "\u2022"] }), ];
  const obj2 = { variant: str, style: tmp.bulletText, children };
  items[1] = map1(Text_Text.Text, obj2);
  return authStore2(React3, obj);
}
function ClassificationActionsTaken(arg0) {
  let TByIjT;
  let actions;
  let classificationExpiration;
  let format;
  let intl;
  let items1;
  let items2;
  let items3;
  let locale;
  let obj6;
  let redesigned;
  let tmp6Result;
  ({ actions, classificationExpiration, redesigned } = arg0);
  let obj = redesigned(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_16();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    const obj2 = { style: tmp4.sectionContainer, children: items1 };
    const obj3 = { plain: redesigned, children: intl.string(redesigned(1115).t["O2nYk+"]) };
    intl = tmp(1115).intl;
    items1 = [closure_13(SectionHeader, obj3), ];
    const obj4 = { style: items2, children: items3 };
    items2 = [tmp4.actionsTaken];
    items3 = [
      found.map((action) => {
          const obj = { action, large: redesigned };
          return map1(ClassificationActionsTakenRows, obj, action.id);
        }),

    ];
    let tmp8Result = null;
    const tmp8 = closure_13;
    if (null != classificationExpiration) {
      const obj5 = { large: redesigned, children: format(TByIjT, obj6) };
      const intl2 = tmp(1115).intl;
      format = intl2.format;
      obj6 = { expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }) };
      TByIjT = tmp(1115).t.TByIjT;
      tmp8Result = tmp8(BulletRow, obj5, "expiration");
    }
    items3[1] = tmp8Result;
    items1[1] = closure_14(closure_4, obj4);
    tmp6Result = tmp6(tmp7, obj2);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
function ManualReviewDecidedUnderageActionsTaken() {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj4;
  const tmp = closure_16();
  const obj = { style: tmp.sectionContainer, children: items };
  const obj2 = { plain: true, children: intl.string(intl4.t["O2nYk+"]) };
  intl = intl4.intl;
  items = [map1(SectionHeader, obj2), ];
  const obj3 = { style: items1, children: map1(BulletRow, obj4) };
  items1 = [tmp.actionsTaken];
  obj4 = { large: true, children: intl2.string(_modDef3103.rn3Gto) };
  intl2 = intl4.intl;
  items[1] = map1(React3, obj3);
  return authStore2(React3, obj);
}
function ClassificationActionsTakenRows(large) {
  let descriptions;
  large = large.large;
  let obj = {
    children: descriptions.map((children, index) => {
      const obj = { large, children };
      return map1(BulletRow, obj, index);
    })
  };
  descriptions = large.action.descriptions;
  return closure_13(closure_15, obj);
}
function ManualReviewDecidedUnderageGuidance() {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj4;
  const tmp = closure_16();
  const obj = { style: tmp.sectionContainer, children: items };
  const obj2 = { plain: true, children: intl.string(intl4.t["977iei"]) };
  intl = intl4.intl;
  items = [map1(SectionHeader, obj2), ];
  const obj3 = { style: items1, children: map1(BulletRow, obj4) };
  items1 = [tmp.actionsTaken];
  obj4 = { large: true, children: intl2.string(_modDef3103["yV/t/V"]) };
  intl2 = intl4.intl;
  items[1] = map1(React3, obj3);
  return authStore2(React3, obj);
}
function ClassificationGuidance(arg0) {
  let appealComponent;
  let classificationTypeText;
  let communityGuidelinesLink;
  let intl;
  let intl2;
  let items;
  let policyExplainerLink;
  let tosLink;
  ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
  const obj = { style: closure_16().sectionContainer, children: items };
  const obj2 = { variant: "eyebrow", color: "text-muted", children: intl.string(intl4.t["977iei"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [map1(Text, obj2), , , ];
  const obj3 = { variant: "text-sm/normal", children: intl2.format(intl4.t["1Z/+aA"], { tosLink, communityGuidelinesLink }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = map1(Text2, obj3);
  items[2] = map1(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
  items[3] = appealComponent;
  return authStore2(React3, obj);
}
function ClassificationPolicyCard(policyExplainerLink) {
  let ShieldIcon;
  let Text;
  let intl;
  let items;
  let items1;
  let obj2;
  let obj4;
  let obj6;
  let tmp2;
  policyExplainerLink = policyExplainerLink.policyExplainerLink;
  const classificationTypeText = policyExplainerLink.classificationTypeText;
  const tmp = closure_16();
  let obj = { children: closure_14(tmp2, obj2) };
  obj2 = {
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(policyExplainerLink);
    },
    style: items,
    children: items1
  };
  items = [tmp.classificationPolicyCard];
  const obj3 = { style: tmp.classificationPolicyCardIcon, children: closure_13(ShieldIcon, obj4) };
  obj4 = { size: "sm", color: nativeDefault.colors.TEXT_LINK };
  tmp2 = TouchableHitBoxDefault;
  ShieldIcon = policyExplainerLink(8705).ShieldIcon;
  items1 = [closure_13(closure_4, obj3), ];
  const obj5 = { style: tmp.classificationPolicyCardContent, children: closure_13(Text, obj6) };
  obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.format(policyExplainerLink(1115).t.zxUdpj, { classificationDescription: classificationTypeText }) };
  Text = policyExplainerLink(4832).Text;
  intl = policyExplainerLink(1115).intl;
  items1[1] = closure_13(closure_4, obj5);
  return closure_13(closure_4, obj);
}
function AppealStatus() {
  let intl;
  const obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(intl4.t["I2H0/E"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  return map1(Text, obj);
}
function LetUsKnow(arg0) {
  let intl;
  let obj2;
  let onPressLetUsKnow;
  _require = arg0;
  let obj = { variant: "text-sm/normal", color: "text-muted", children: intl.format(require("intl").t.IFxUaT, obj2) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj2 = {
    letUsKnowHook(children, arg1) {
      const obj = { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children };
      return map1(Text_Text.Text, obj, arg1);
    }
  };
  return closure_13(Text, obj);
}
function AppealFooter(hasBeenAppealed) {
  let tmpResult;
  const obj = { style: closure_16().letUsKnowContainer, children: tmpResult };
  const tmp2 = React3;
  if (hasBeenAppealed.hasBeenAppealed) {
    tmpResult = tmp(AppealStatus, {});
  } else {
    const obj2 = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
    tmpResult = tmp(LetUsKnow, obj2);
  }
  return map1(tmp2, obj);
}
function ConfirmMinimumAgeGuidance(arg0) {
  let communityGuidelinesLink;
  let intl;
  let intl2;
  let intl3;
  let items;
  let onPressLetUsKnow;
  let tosLink;
  ({ tosLink, communityGuidelinesLink, onPressLetUsKnow } = arg0);
  const tmp = closure_16();
  const obj = { style: tmp.confirmMinimumAgeSection, children: items };
  const obj2 = { plain: true, children: intl.string(intl4.t.RVEiD0) };
  intl = intl4.intl;
  items = [map1(SectionHeader, obj2), , ];
  const obj3 = { label: intl2.string(intl4.t.YQPbuc), onPress: onPressLetUsKnow, arrow: true, start: true, end: true };
  const TableRow = TableRow2.TableRow;
  intl2 = intl4.intl;
  items[1] = map1(TableRow, obj3);
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.guidelinesFooter, children: intl3.format(intl4.t["1Z/+aA"], { tosLink, communityGuidelinesLink }) };
  const Text = Text_Text.Text;
  intl3 = intl4.intl;
  items[2] = map1(Text, obj4);
  return authStore2(React3, obj);
}
function ManualReviewDecidedUnderageFooter(arg0) {
  let communityGuidelinesLink;
  let intl;
  let tosLink;
  ({ tosLink, communityGuidelinesLink } = arg0);
  const obj = { variant: "text-sm/normal", color: "text-muted", children: intl.format(_modDef3103.vPOpia, { tosLink, communityGuidelinesLink }) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  return map1(Text, obj);
}
function ManualReviewDecidedUnderageView() {
  let items;
  const obj = { children: items };
  items = [map1(ManualReviewDecidedUnderageActionsTaken, {}), map1(ManualReviewDecidedUnderageGuidance, {}), ];
  const obj2 = { tosLink: unpackModuleId.TOS_LINK, communityGuidelinesLink: unpackModuleId.COMMUNITY_GUIDELINES };
  items[2] = map1(ManualReviewDecidedUnderageFooter, obj2);
  return authStore2(closure_15, obj);
}
function ClassificationDetailFooter(onClose) {
  let Button;
  let intl;
  let obj2;
  onClose = onClose.onClose;
  const obj = { style: closure_16().redirectButtonWrapper, children: map1(Button, obj2) };
  obj2 = { size: "md", text: intl.string(intl4.t.elrEjL), onPress: onClose, grow: true };
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return map1(React3, obj);
}
({ View: closure_4, ActivityIndicator: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ SafetyHubAnalyticsActionSource: c9, SafetyHubAnalyticsActions: c10, SafetyHubLinks: unpackModuleId } = SafetyHubConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, container: obj3, header: obj4, headerText: { textAlign: "center", maxWidth: 260 }, sectionContainer: obj5, actionsTaken: obj6, classificationDetailContainer: obj7, letUsKnowContainer: { display: "flex", alignItems: "center" }, confirmMinimumAgeSection: obj8, guidelinesFooter: obj9, classificationPolicyCard: obj10, classificationPolicyCardIcon: size, classificationPolicyCardContent: { flex: 1 }, classificationActionDescription: obj11, bulletText: { flex: 1 }, redirectButtonWrapper: obj12 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", height: "100%", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32 };
obj4 = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj5 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj6 = { display: "flex", paddingLeft: nativeDefault.space.PX_4, flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj7 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj8 = { display: "flex", gap: nativeDefault.space.PX_12 };
obj9 = { marginTop: nativeDefault.space.PX_12 };
obj10 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4, flexShrink: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, width: 32, height: 32, borderRadius: nativeDefault.radii.xxl };
obj11 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj12 = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
let closure_16 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  let SafeAreaPaddingView;
  let hasItem;
  let items3;
  let items4;
  let obj13;
  let obj5;
  let tmp38Result;
  let tmpResult6;
  classificationId = classificationId.classificationId;
  let source = classificationId.source;
  const onClose = classificationId.onClose;
  const onError = classificationId.onError;
  let obj = classificationId(onClose[19]);
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp4 = closure_16();
  let obj2 = classificationId(onClose[12]);
  let items = [hasItem];
  const stateFromStores = obj2.useStateFromStores(items, () => hasItem.getAppealEligibility());
  let flagged_content;
  const tmp5 = hasItem;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  let tmp7 = null != flagged_content;
  if (tmp7) {
    let length;
    if (classification != null) {
      length = classification.flagged_content.length;
    }
    tmp7 = length > 0;
  }
  const is_violative_content_shown = tmp7;
  let tmpResult = tmp(tmp2[20]);
  const safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  let is_coppa;
  if (classification != null) {
    is_coppa = classification.is_coppa;
  }
  hasItem = is_coppa && stateFromStores.includes(tmp(tmp2[10]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
  let is_coppa1;
  if (classification != null) {
    is_coppa1 = classification.is_coppa;
  }
  let hasItem1 = is_coppa1 && stateFromStores.includes(tmp(tmp2[10]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
  const useIsExpressiveModalV2Enabled = tmp(tmp2[21]).useIsExpressiveModalV2Enabled;
  classificationId(onClose[21]);
  if (hasItem1) {
    hasItem1 = useIsExpressiveModalV2Enabled(tmp(tmp2[22]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS);
  }
  let tmpResult5 = tmp(tmp2[12]);
  const items1 = [tmp5];
  let is_coppa2;
  const stateFromStores1 = tmpResult5.useStateFromStores(items1, () => hasItem.getIsManualReviewDecidedUnderage());
  if (classification != null) {
    is_coppa2 = classification.is_coppa;
  }
  let obj3 = { accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp7, source };
  const tmp17 = is_coppa2 && stateFromStores1;
  const ref = safetyHubClassification.useRef(obj3);
  const effect = safetyHubClassification.useEffect(() => {
    ref.current = obj3;
  });
  const items2 = [classification];
  const effect1 = safetyHubClassification.useEffect(() => {
    let accountStanding;
    let classificationState;
    let hasFlaggedContent;
    let items;
    if (null != classification) {
      const current = ref.current;
      ({ classificationState, source } = current);
      ({ accountStanding, classificationId, hasFlaggedContent } = current);
      const obj = { action: authStore.ViewViolationDetail, account_standing: accountStanding.state, classification_ids: items, source, is_violative_content_shown: hasFlaggedContent, is_dsa_eligible: null, violation_type: null };
      const _Number = Number;
      const track = AnalyticsUtilsDefault.track;
      const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
      items = [];
      AnalyticsUtilsDefault;
      items[0] = Number(classificationId);
      if (source == null) {
        source = React4.SystemDM;
      }
      ({ isDsaEligible: obj.is_dsa_eligible, violationType: obj.violation_type } = classificationState);
      track(SAFETY_HUB_ACTION, obj);
    }
  }, items2);
  if (null == classification) {
    let tmp20Result8;
    if (safetyHubClassification.classificationRequestState === classificationId(onClose[10]).ClassificationRequestState.FAILED) {
      onError();
      tmp20Result8 = null;
    }
    return tmp20Result8;
  }
  const obj4 = { style: tmp4.root, children: closure_13(SafeAreaPaddingView, obj5) };
  obj5 = { style: tmp4.container, bottom: true, children: tmp38Result };
  SafeAreaPaddingView = tmp(tmp2[28]).SafeAreaPaddingView;
  const tmp21 = is_violative_content_shown;
  if (null == classification) {
    tmp38Result = tmp20(isAppealEligible, { size: "large" });
  } else {
    let tmp20Result5;
    const obj6 = { style: items3, children: items4 };
    items3 = [tmp4.classificationDetailContainer];
    const obj7 = { classificationTypeText: null, guildMetadata: null };
    ({ description: obj18.classificationTypeText, guild_metadata: obj18.guildMetadata } = classification);
    items4 = [closure_13(ClassificationHeader, obj7), , , ];
    let flagged_content1 = classification.flagged_content;
    const tmp39 = classification;
    const tmp42 = source(onClose[29]);
    if (flagged_content1 == null) {
      flagged_content1 = [];
    }
    const obj8 = { flaggedContent: flagged_content1 };
    items4[1] = closure_13(tmp42, obj8);
    if (tmp17) {
      tmp20Result5 = tmp20(ManualReviewDecidedUnderageView, {});
    } else {
      let tmp20Result6;
      function onPressLetUsKnow() {
        let SystemDM;
        let items;
        const obj = { action: authStore.ClickLetUsKnow, account_standing: safetyHubAccountStanding.state, classification_ids: items, source: SystemDM, is_violative_content_shown, is_dsa_eligible: null, violation_type: null };
        const track = AnalyticsUtilsDefault.track;
        const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
        items = [];
        AnalyticsUtilsDefault;
        items[0] = Number(classificationId);
        SystemDM = source;
        if (source == null) {
          SystemDM = React4.SystemDM;
        }
        ({ isDsaEligible: obj.is_dsa_eligible, violationType: obj.violation_type } = safetyHubClassification);
        track(SAFETY_HUB_ACTION, obj);
        const tmp7 = hasItem1;
        if (tmp7) {
          const tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
          tmpResult.openV2(classificationId, onClose);
        } else {
          const tmp8 = hasItem;
          if (tmp8) {
            const tmpResult5 = AutomatedUnderageAppealModalActionCreatorsDefault;
            tmpResult5.open(classificationId, onClose);
          } else {
            const tmp9 = isAppealEligible;
            if (tmp9) {
              const obj2 = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              increment(obj2);
              obj3 = { classificationId };
              const tmpResult7 = AppealIngestionModalActionCreatorsDefault;
              tmpResult7.open(obj3);
            } else {
              const tmpResult8 = LinkingDefault;
              tmpResult8.openURL(unpackModuleId.APPEALS_LINK);
            }
          }
        }
      }
      const obj9 = { actions: classification.actions, classificationExpiration: tmpResult6.getClassificationExpiration(classification), redesigned: hasItem1 };
      tmpResult6 = tmp(tmp2[30]);
      const items5 = [closure_13(ClassificationActionsTaken, obj9), ];
      const tmp22 = closure_15;
      if (hasItem1) {
        const obj10 = { tosLink: null, communityGuidelinesLink: null, onPressLetUsKnow };
        ({ TOS_LINK: obj14.tosLink, COMMUNITY_GUIDELINES: obj14.communityGuidelinesLink } = ref);
        tmp20Result6 = tmp20(ConfirmMinimumAgeGuidance, obj10);
      } else {
        ({ APPEALS_LINK: obj12.appealLink, COMMUNITY_GUIDELINES: obj12.communityGuidelinesLink, TOS_LINK: obj12.tosLink } = ref);
        ({ description: obj12.classificationTypeText, explainer_link: obj12.policyExplainerLink } = classification);
        const obj11 = { appealLink: null, communityGuidelinesLink: null, tosLink: null, classificationTypeText: null, policyExplainerLink: null, appealComponent: closure_13(AppealFooter, obj13) };
        obj13 = { hasBeenAppealed: null != classification.appeal_status, onPressLetUsKnow };
        tmp20Result6 = tmp20(ClassificationGuidance, obj11);
      }
      const obj15 = { children: items5 };
      items5[1] = tmp20Result6;
      tmp20Result5 = tmp38(tmp22, obj15);
    }
    items4[2] = tmp20Result5;
    let tmp20Result7 = !hasItem1;
    if (tmp20Result7) {
      const obj16 = { onClose };
      tmp20Result7 = tmp20(ClassificationDetailFooter, obj16);
    }
    items4[3] = tmp20Result7;
    tmp38Result = tmp38(tmp39, obj6);
  }
  tmp20Result8 = tmp20(tmp21, obj4);
};
