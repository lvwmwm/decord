// Module ID: 11015
// Function ID: 85703
// Name: ClassificationHeader
// Dependencies: []
// Exports: default

// Module 11015 (ClassificationHeader)
function ClassificationHeader(classificationTypeText) {
  classificationTypeText = classificationTypeText.classificationTypeText;
  const arg1 = classificationTypeText;
  const guildMetadata = classificationTypeText.guildMetadata;
  const importDefault = guildMetadata;
  const tmp = callback3();
  const items = [classificationTypeText, guildMetadata];
  let obj = { style: tmp.header };
  const memo = React.useMemo(() => {
    let obj = {
      classification_type: classificationTypeText,
      classificationHook(children) {
        return callback2(callback(closure_2[9]).Text, { variant: "heading-xl/bold", children }, arg1);
      }
    };
    if (null != guildMetadata) {
      let name;
      let member_type;
      if (null != guildMetadata) {
        member_type = guildMetadata.member_type;
      }
      if (member_type === classificationTypeText(closure_2[10]).MemberType.OWNER) {
        const intl3 = classificationTypeText(closure_2[11]).intl;
        obj = {};
        const merged = Object.assign(obj);
        obj = null == guildMetadata;
        name = undefined;
        if (!obj) {
          name = guildMetadata.name;
        }
        obj["guildName"] = name;
        let formatResult = intl3.format(classificationTypeText(closure_2[11]).t.X1ngSd, obj);
      } else {
        const intl2 = classificationTypeText(closure_2[11]).intl;
        obj = {};
        const merged1 = Object.assign(obj);
        let name1;
        if (null != guildMetadata) {
          name1 = guildMetadata.name;
        }
        obj["guildName"] = name1;
        formatResult = intl2.format(classificationTypeText(closure_2[11]).t.rmpEPD, obj);
      }
    } else {
      const intl = classificationTypeText(closure_2[11]).intl;
      return intl.format(classificationTypeText(closure_2[11]).t.39jfOz, obj);
    }
  }, items);
  obj = { style: tmp.headerText, children: memo };
  obj.children = callback(arg1(dependencyMap[9]).Text, obj);
  return callback(closure_4, obj);
}
function ClassificationActionsTaken(arg0) {
  let actions;
  let classificationExpiration;
  ({ actions, classificationExpiration } = arg0);
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp2 = callback3();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    obj = { style: tmp2.sectionContainer };
    obj = {};
    const intl = arg1(dependencyMap[11]).intl;
    obj.children = intl.string(arg1(dependencyMap[11]).t.O2nYk+);
    const items1 = [callback(arg1(dependencyMap[9]).Text, obj), ];
    const obj1 = {};
    const items2 = [tmp2.actionsTaken];
    obj1.style = items2;
    const items3 = [found.map((action) => callback(closure_19, { action }, action.id)), ];
    let tmp11 = null;
    if (null != classificationExpiration) {
      const obj2 = { style: tmp2.classificationActionDescription };
      const obj3 = { variant: "text-xs/normal", children: [] };
      const items4 = [callback2(arg1(dependencyMap[9]).Text, obj3), ];
      const obj4 = { variant: "text-xs/normal" };
      const intl2 = arg1(dependencyMap[11]).intl;
      const obj5 = {};
      const obj6 = { dateStyle: "medium" };
      obj5.expirationDate = classificationExpiration.toLocaleDateString(stateFromStores, obj6);
      obj4.children = intl2.format(arg1(dependencyMap[11]).t.TByIjT, obj5);
      items4[1] = callback(arg1(dependencyMap[9]).Text, obj4);
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
  let closure_0 = callback3();
  const descriptions = action.action.descriptions;
  return callback(closure_15, {
    children: descriptions.map((children) => {
      let obj = { style: lib.classificationActionDescription };
      const items = [callback2(lib(closure_2[9]).Text, { variant: "text-xs/normal", children: [] }), ];
      obj = { variant: "text-xs/normal", children };
      items[1] = callback(lib(closure_2[9]).Text, obj);
      obj.children = items;
      return callback2(closure_4, obj, arg1);
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
  let obj = { style: callback3().sectionContainer };
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.977iei);
  const items = [callback(arg1(dependencyMap[9]).Text, obj), , , ];
  obj = { variant: "text-sm/normal" };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.children = intl2.format(arg1(dependencyMap[11]).t.1Z/+aA, { tosLink, communityGuidelinesLink });
  items[1] = callback(arg1(dependencyMap[13]).TextWithIOSLinkWorkaround, obj);
  items[2] = callback(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
  items[3] = appealComponent;
  obj.children = items;
  return callback2(closure_4, obj);
}
function ClassificationPolicyCard(classificationDescription) {
  const arg1 = classificationDescription.policyExplainerLink;
  const tmp = callback3();
  let obj = {};
  obj = {
    onPress() {
      callback(closure_2[15]).openURL(policyExplainerLink);
    },
    style: items
  };
  const items = [tmp.classificationPolicyCard];
  obj = { style: tmp.classificationPolicyCardIcon };
  const obj1 = { size: "sm", color: importDefault(dependencyMap[8]).colors.TEXT_LINK };
  obj.children = callback(arg1(dependencyMap[16]).ShieldIcon, obj1);
  const items1 = [callback(closure_4, obj), ];
  const obj2 = { style: tmp.classificationPolicyCardContent };
  const obj3 = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj3.children = intl.format(arg1(dependencyMap[11]).t.zxUdpj, { classificationDescription: classificationDescription.classificationTypeText });
  obj2.children = callback(arg1(dependencyMap[9]).Text, obj3);
  items1[1] = callback(closure_4, obj2);
  obj.children = items1;
  obj.children = callback2(importDefault(dependencyMap[14]), obj);
  return callback(closure_4, obj);
}
function AppealStatus() {
  const obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.I2H0/E);
  return callback(arg1(dependencyMap[9]).Text, obj);
}
function LetUsKnow(arg0) {
  const arg1 = arg0;
  let obj = { cachedAt: 400, edpbxy: 20 };
  const intl = arg1(dependencyMap[11]).intl;
  obj = {
    letUsKnowHook(children) {
      const obj = { "Null": "no-hide-descendants", "Null": "text-xs/semibold", "Null": 1, onPress: children.onPressLetUsKnow, children };
      return callback(children(closure_2[9]).Text, obj, arg1);
    }
  };
  obj.children = intl.format(arg1(dependencyMap[11]).t.IFxUaT, obj);
  return callback(arg1(dependencyMap[9]).Text, obj);
}
function AppealFooter(hasBeenAppealed) {
  let obj = { style: callback3().letUsKnowContainer };
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
  let obj = { style: callback3().redirectButtonWrapper };
  obj = { size: "md" };
  const intl = arg1(dependencyMap[11]).intl;
  obj.text = intl.string(arg1(dependencyMap[11]).t.elrEjL);
  obj.onPress = onClose.onClose;
  obj.grow = true;
  obj.children = callback(arg1(dependencyMap[17]).Button, obj);
  return callback(closure_4, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ActivityIndicator: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ SafetyHubAnalyticsActionSource: closure_9, SafetyHubAnalyticsActions: closure_10, SafetyHubLinks: closure_11 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
obj.root = obj;
const tmp4 = arg1(dependencyMap[6]);
obj.container = { paddingTop: importDefault(dependencyMap[8]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, gap: importDefault(dependencyMap[8]).space.PX_32 };
const obj2 = { getChannelsGameShopPrefix: "Array", zero: null, marketing: null, INVALID_INVITE: null, gap: importDefault(dependencyMap[8]).space.PX_8, marginBottom: importDefault(dependencyMap[8]).space.PX_8 };
obj.header = obj2;
obj.headerText = {};
const obj1 = { paddingTop: importDefault(dependencyMap[8]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, gap: importDefault(dependencyMap[8]).space.PX_32 };
obj.sectionContainer = { display: "flex", gap: importDefault(dependencyMap[8]).space.PX_8 };
const obj4 = { "Bool(true)": 1107158353, "Bool(true)": 135924, "Bool(true)": 36604738, paddingLeft: importDefault(dependencyMap[8]).space.PX_4, gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.actionsTaken = obj4;
const obj5 = { position: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, location: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[8]).space.PX_32 };
obj.classificationDetailContainer = obj5;
obj.letUsKnowContainer = { "Null": true, "Null": true };
const obj6 = { "Null": null, "Null": null, "Null": null, "Null": null, gap: importDefault(dependencyMap[8]).space.PX_12, padding: importDefault(dependencyMap[8]).space.PX_12, marginTop: importDefault(dependencyMap[8]).space.PX_4, flexShrink: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
obj.classificationPolicyCard = obj6;
const obj7 = { GiftingBadgeExperiment: null, addWindow: null, viewIsDescendantOf: null, getPlanIdForGift: null, addWindow: null, responsesApiToolCalls: null, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[8]).radii.xxl };
obj.classificationPolicyCardIcon = obj7;
obj.classificationPolicyCardContent = { flex: 1 };
const obj3 = { display: "flex", gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.classificationActionDescription = { gap: importDefault(dependencyMap[8]).space.PX_8 };
const obj8 = { gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.redirectButtonWrapper = { marginTop: importDefault(dependencyMap[8]).space.PX_32 };
let closure_16 = obj.createStyles(obj);
const obj9 = { marginTop: importDefault(dependencyMap[8]).space.PX_32 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  classificationId = classificationId.classificationId;
  const arg1 = classificationId;
  const source = classificationId.source;
  const importDefault = source;
  const onClose = classificationId.onClose;
  const dependencyMap = onClose;
  let obj = arg1(dependencyMap[18]);
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
  const React = safetyHubClassification;
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp2 = callback3();
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_8];
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
  let obj3 = arg1(dependencyMap[19]);
  const safetyHubAccountStanding = obj3.useSafetyHubAccountStanding();
  let closure_7 = safetyHubAccountStanding;
  let hasItem = !tmp7;
  if (!(null == classification || !classification.is_coppa)) {
    hasItem = stateFromStores.includes(arg1(dependencyMap[10]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
  }
  closure_8 = hasItem;
  let hasItem1 = !tmp11;
  if (!(null == classification || !classification.is_coppa)) {
    hasItem1 = stateFromStores.includes(arg1(dependencyMap[10]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
  }
  obj = { accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp4, source };
  let closure_11 = React.useRef(obj);
  const effect = React.useEffect(() => {
    closure_11.current = obj;
  });
  const items1 = [classification];
  const effect1 = React.useEffect(() => {
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
      obj.track(constants.SAFETY_HUB_ACTION, obj);
    }
  }, items1);
  if (null == classification) {
    if (safetyHubClassification.classificationRequestState === arg1(dependencyMap[10]).ClassificationRequestState.FAILED) {
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
    items3[1] = callback(importDefault(dependencyMap[22]), obj5);
    const obj6 = { actions: classification.actions };
    let obj8 = arg1(dependencyMap[23]);
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
          obj.is_violative_content_shown = tmp4;
          ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = safetyHubClassification);
          obj.track(constants.SAFETY_HUB_ACTION, obj);
          if (hasItem1) {
            source(onClose[24]).openV2(classificationId, onClose);
            const obj9 = source(onClose[24]);
          } else if (hasItem) {
            source(onClose[24]).open(classificationId, onClose);
            const obj8 = source(onClose[24]);
          } else {
            if (isAppealEligible) {
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
            const tmp4 = isAppealEligible;
          }
        }
    };
    obj7.appealComponent = callback(AppealFooter, obj8);
    items3[3] = callback(ClassificationGuidance, obj7);
    const obj9 = { onClose };
    items3[4] = callback(ClassificationDetailFooter, obj9);
    obj3.children = items3;
    tmp38Result = closure_14(classification, obj3);
    const obj4 = {};
    const tmp38 = closure_14;
    const tmp39 = classification;
    const tmp42 = callback;
    const tmp45 = importDefault(dependencyMap[22]);
  }
  obj1.children = tmp38Result;
  obj.children = callback(arg1(dependencyMap[21]).SafeAreaPaddingView, obj1);
  tmp19Result = callback(tmp4, obj);
};
