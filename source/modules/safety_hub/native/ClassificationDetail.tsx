// Module ID: 11025
// Function ID: 85753
// Name: ClassificationHeader
// Dependencies: [31, 27, 1921, 11026, 7544, 653, 33, 4130, 689, 4126, 7545, 1212, 566, 5459, 8474, 3827, 8173, 4543, 11031, 11033, 675, 5121, 11034, 7543, 11038, 6837, 6842, 11040, 2]
// Exports: default

// Module 11025 (ClassificationHeader)
import result from "result";
import get_ActivityIndicator from "module_11040";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function ClassificationHeader(classificationTypeText) {
  classificationTypeText = classificationTypeText.classificationTypeText;
  const guildMetadata = classificationTypeText.guildMetadata;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [classificationTypeText, guildMetadata];
  let obj = { style: tmp.header };
  const memo = React.useMemo(() => {
    let obj = {
      classification_type: classificationTypeText,
      classificationHook(children) {
        return outer2_13(classificationTypeText(outer2_2[9]).Text, { variant: "heading-xl/bold", children }, arg1);
      }
    };
    if (null != guildMetadata) {
      let name;
      let member_type;
      if (null != guildMetadata) {
        member_type = guildMetadata.member_type;
      }
      if (member_type === classificationTypeText(outer1_2[10]).MemberType.OWNER) {
        const intl3 = classificationTypeText(outer1_2[11]).intl;
        obj = {};
        const merged = Object.assign(obj);
        obj = null == guildMetadata;
        name = undefined;
        if (!obj) {
          name = guildMetadata.name;
        }
        obj["guildName"] = name;
        let formatResult = intl3.format(classificationTypeText(outer1_2[11]).t.X1ngSd, obj);
      } else {
        const intl2 = classificationTypeText(outer1_2[11]).intl;
        obj = {};
        const merged1 = Object.assign(obj);
        let name1;
        if (null != guildMetadata) {
          name1 = guildMetadata.name;
        }
        obj["guildName"] = name1;
        formatResult = intl2.format(classificationTypeText(outer1_2[11]).t.rmpEPD, obj);
      }
    } else {
      const intl = classificationTypeText(outer1_2[11]).intl;
      return intl.format(classificationTypeText(outer1_2[11]).t["39jfOz"], obj);
    }
  }, items);
  obj = { variant: "text-lg/normal", style: tmp.headerText, color: "mobile-text-heading-primary", children: memo };
  obj.children = callback(classificationTypeText(4126).Text, obj);
  return callback(closure_4, obj);
}
function ClassificationActionsTaken(arg0) {
  let actions;
  let classificationExpiration;
  ({ actions, classificationExpiration } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.locale);
  const tmp2 = _createForOfIteratorHelperLoose();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    obj = { style: tmp2.sectionContainer };
    obj = { variant: "eyebrow", color: "text-muted" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t["O2nYk+"]);
    const items1 = [callback(require(4126) /* Text */.Text, obj), ];
    const obj1 = {};
    const items2 = [tmp2.actionsTaken];
    obj1.style = items2;
    const items3 = [found.map((action) => outer1_13(outer1_19, { action }, action.id)), ];
    let tmp11 = null;
    if (null != classificationExpiration) {
      const obj2 = { style: tmp2.classificationActionDescription };
      const obj3 = { variant: "text-xs/normal", children: [" ", "\u2022"] };
      const items4 = [callback2(require(4126) /* Text */.Text, obj3), ];
      const obj4 = { variant: "text-xs/normal" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj5 = {};
      const obj6 = { dateStyle: "medium" };
      obj5.expirationDate = classificationExpiration.toLocaleDateString(stateFromStores, obj6);
      obj4.children = intl2.format(require(1212) /* getSystemLocale */.t.TByIjT, obj5);
      items4[1] = callback(require(4126) /* Text */.Text, obj4);
      obj2.children = items4;
      tmp11 = callback2(closure_4, obj2, "expiration");
    }
    items3[1] = tmp11;
    obj1.children = items3;
    items1[1] = callback2(closure_4, obj1);
    obj.children = items1;
    let tmp4Result = callback2(closure_4, obj);
    const tmp10 = closure_4;
    const tmp4 = callback2;
    const tmp5 = closure_4;
    const tmp9 = callback2;
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
}
function ClassificationActionsTakenRows(action) {
  let closure_0 = _createForOfIteratorHelperLoose();
  const descriptions = action.action.descriptions;
  return callback(closure_15, {
    children: descriptions.map((children) => {
      let obj = { style: lib.classificationActionDescription };
      const items = [outer1_14(lib(outer1_2[9]).Text, { variant: "text-xs/normal", children: [" ", "\u2022"] }), ];
      obj = { variant: "text-xs/normal", children };
      items[1] = outer1_13(lib(outer1_2[9]).Text, obj);
      obj.children = items;
      return outer1_14(outer1_4, obj, arg1);
    })
  });
}
function ClassificationGuidance(arg0) {
  let appealComponent;
  let classificationTypeText;
  let communityGuidelinesLink;
  let policyExplainerLink;
  let tosLink;
  ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
  let obj = { style: _createForOfIteratorHelperLoose().sectionContainer };
  obj = { variant: "eyebrow", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["977iei"]);
  const items = [callback(require(4126) /* Text */.Text, obj), , , ];
  obj = { variant: "text-sm/normal" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.format(require(1212) /* getSystemLocale */.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
  items[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
  items[2] = callback(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
  items[3] = appealComponent;
  obj.children = items;
  return callback2(closure_4, obj);
}
function ClassificationPolicyCard(classificationDescription) {
  const policyExplainerLink = classificationDescription.policyExplainerLink;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = {
    onPress() {
      outer1_1(outer1_2[15]).openURL(policyExplainerLink);
    },
    style: items
  };
  items = [tmp.classificationPolicyCard];
  obj = { style: tmp.classificationPolicyCardIcon };
  const obj1 = { size: "sm", color: importDefault(689).colors.TEXT_LINK };
  obj.children = callback(policyExplainerLink(8173).ShieldIcon, obj1);
  const items1 = [callback(closure_4, obj), ];
  const obj2 = { style: tmp.classificationPolicyCardContent };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
  const intl = policyExplainerLink(1212).intl;
  obj3.children = intl.format(policyExplainerLink(1212).t.zxUdpj, { classificationDescription: classificationDescription.classificationTypeText });
  obj2.children = callback(policyExplainerLink(4126).Text, obj3);
  items1[1] = callback(closure_4, obj2);
  obj.children = items1;
  obj.children = callback2(importDefault(8474), obj);
  return callback(closure_4, obj);
}
function AppealStatus() {
  const obj = { variant: "text-md/normal", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["I2H0/E"]);
  return callback(require(4126) /* Text */.Text, obj);
}
function LetUsKnow(arg0) {
  const _require = arg0;
  let obj = { variant: "text-sm/normal", color: "text-muted" };
  const intl = _require(1212).intl;
  obj = {
    letUsKnowHook(children) {
      const obj = { onPress: lib.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children };
      return outer1_13(lib(outer1_2[9]).Text, obj, arg1);
    }
  };
  obj.children = intl.format(_require(1212).t.IFxUaT, obj);
  return callback(_require(4126).Text, obj);
}
function AppealFooter(hasBeenAppealed) {
  let obj = { style: _createForOfIteratorHelperLoose().letUsKnowContainer };
  if (hasBeenAppealed.hasBeenAppealed) {
    let tmp3Result = tmp3(AppealStatus, {});
  } else {
    obj = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
    tmp3Result = tmp3(LetUsKnow, obj);
  }
  obj.children = tmp3Result;
  return closure_13(closure_4, obj);
}
function ClassificationDetailFooter(onClose) {
  let obj = { style: _createForOfIteratorHelperLoose().redirectButtonWrapper };
  obj = { size: "md" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.elrEjL);
  obj.onPress = onClose.onClose;
  obj.grow = true;
  obj.children = callback(require(4543) /* Button */.Button, obj);
  return callback(closure_4, obj);
}
({ View: closure_4, ActivityIndicator: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActionSource: closure_9, SafetyHubAnalyticsActions: closure_10, SafetyHubLinks: closure_11 } = SafetyHubLinks);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.root = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexDirection: "column", height: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.container = obj1;
let obj2 = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.header = obj2;
_createForOfIteratorHelperLoose.headerText = { textAlign: "center", maxWidth: 260 };
_createForOfIteratorHelperLoose.sectionContainer = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { display: "flex", paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_4, flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.actionsTaken = obj4;
let obj5 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.classificationDetailContainer = obj5;
_createForOfIteratorHelperLoose.letUsKnowContainer = { display: "flex", alignItems: "center" };
let obj6 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_12, padding: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, flexShrink: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.classificationPolicyCard = obj6;
let obj7 = { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl };
_createForOfIteratorHelperLoose.classificationPolicyCardIcon = obj7;
_createForOfIteratorHelperLoose.classificationPolicyCardContent = { flex: 1 };
let obj8 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.classificationActionDescription = obj8;
let obj9 = { width: 300, alignSelf: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.redirectButtonWrapper = obj9;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  const onClose = classificationId.onClose;
  let obj = classificationId(onClose[18]);
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = classificationId(onClose[12]);
  let items = [hasItem];
  const stateFromStores = obj1.useStateFromStores(items, () => hasItem.getAppealEligibility());
  let flagged_content;
  if (null != classification) {
    flagged_content = classification.flagged_content;
  }
  let tmp4 = null != flagged_content;
  if (tmp4) {
    let length;
    if (null != classification) {
      length = classification.flagged_content.length;
    }
    tmp4 = length > 0;
  }
  let closure_6 = tmp4;
  let obj3 = classificationId(onClose[19]);
  const safetyHubAccountStanding = obj3.useSafetyHubAccountStanding();
  hasItem = !tmp7;
  if (!(null == classification || !classification.is_coppa)) {
    hasItem = stateFromStores.includes(classificationId(onClose[10]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
  }
  let hasItem1 = !tmp11;
  if (!(null == classification || !classification.is_coppa)) {
    hasItem1 = stateFromStores.includes(classificationId(onClose[10]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
  }
  obj = { accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp4, source };
  let closure_11 = safetyHubClassification.useRef(obj);
  const effect = safetyHubClassification.useEffect(() => {
    closure_11.current = obj;
  });
  const items1 = [classification];
  const effect1 = safetyHubClassification.useEffect(() => {
    let accountStanding;
    let classificationId;
    let classificationState;
    let hasFlaggedContent;
    let source;
    if (null != classification) {
      const current = ref.current;
      ({ classificationState, source } = current);
      ({ accountStanding, classificationId, hasFlaggedContent } = current);
      let obj = source(onClose[20]);
      obj = {};
      obj.action = obj.ViewViolationDetail;
      obj.account_standing = accountStanding.state;
      const _Number = Number;
      const items = [Number(classificationId)];
      obj.classification_ids = items;
      if (null == source) {
        source = hasItem1.SystemDM;
      }
      obj.source = source;
      obj.is_violative_content_shown = hasFlaggedContent;
      ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = classificationState);
      obj.track(outer1_12.SAFETY_HUB_ACTION, obj);
    }
  }, items1);
  if (null == classification) {
    if (safetyHubClassification.classificationRequestState === classificationId(onClose[10]).ClassificationRequestState.FAILED) {
      classificationId.onError();
      let tmp19Result = null;
    }
    return tmp19Result;
  }
  obj = { style: tmp2.root };
  obj1 = { style: tmp2.container, bottom: true };
  if (null == classification) {
    const obj2 = { size: "large" };
    let tmp38Result = callback(isAppealEligible, obj2);
  } else {
    obj3 = {};
    const items2 = [tmp2.classificationDetailContainer];
    obj3.style = items2;
    ({ description: obj15.classificationTypeText, guild_metadata: obj15.guildMetadata } = classification);
    const items3 = [callback(ClassificationHeader, {}), , , , ];
    const obj5 = {};
    let flagged_content1 = classification.flagged_content;
    if (null == flagged_content1) {
      flagged_content1 = [];
    }
    obj5.flaggedContent = flagged_content1;
    items3[1] = callback(source(onClose[22]), obj5);
    const obj6 = { actions: classification.actions };
    let obj8 = classificationId(onClose[23]);
    obj6.classificationExpiration = obj8.getClassificationExpiration(classification);
    items3[2] = callback(ClassificationActionsTaken, obj6);
    const obj7 = {};
    ({ APPEALS_LINK: obj10.appealLink, COMMUNITY_GUIDELINES: obj10.communityGuidelinesLink, TOS_LINK: obj10.tosLink } = closure_11);
    ({ description: obj10.classificationTypeText, explainer_link: obj10.policyExplainerLink } = classification);
    obj8 = {
      hasBeenAppealed: null != classification.appeal_status,
      onPressLetUsKnow() {
          let obj = source(onClose[20]);
          obj = { action: obj.ClickLetUsKnow, account_standing: safetyHubAccountStanding.state };
          const items = [Number(classificationId)];
          obj.classification_ids = items;
          if (null != source) {
            let SystemDM = source;
          } else {
            SystemDM = hasItem1.SystemDM;
          }
          obj.source = SystemDM;
          obj.is_violative_content_shown = closure_6;
          ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = safetyHubClassification);
          obj.track(outer1_12.SAFETY_HUB_ACTION, obj);
          if (hasItem1) {
            source(onClose[24]).openV2(classificationId, onClose);
            const obj9 = source(onClose[24]);
          } else if (hasItem) {
            source(onClose[24]).open(classificationId, onClose);
            const obj8 = source(onClose[24]);
          } else if (isAppealEligible) {
            let tmp5Result = tmp5(tmp6[25]);
            obj = { name: classificationId(tmp6[26]).MetricEvents.APPEAL_INGESTION_VIEW };
            tmp5Result.increment(obj);
            tmp5Result = tmp5(tmp6[27]);
            const obj1 = { classificationId };
            tmp5Result.open(obj1);
          } else {
            tmp5(tmp6[15]).openURL(ref.APPEALS_LINK);
            const tmp5Result1 = tmp5(tmp6[15]);
          }
        }
    };
    obj7.appealComponent = callback(AppealFooter, obj8);
    items3[3] = callback(ClassificationGuidance, obj7);
    let obj9 = { onClose };
    items3[4] = callback(ClassificationDetailFooter, obj9);
    obj3.children = items3;
    tmp38Result = closure_14(classification, obj3);
    const obj4 = {};
    const tmp38 = closure_14;
    const tmp39 = classification;
    const tmp42 = callback;
    const tmp45 = source(onClose[22]);
  }
  obj1.children = tmp38Result;
  obj.children = callback(classificationId(onClose[21]).SafeAreaPaddingView, obj1);
  tmp19Result = callback(closure_6, obj);
};
