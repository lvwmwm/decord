// Module ID: 16251
// Function ID: 125554
// Name: ApplicationStatusNotice
// Dependencies: []
// Exports: default

// Module 16251 (ApplicationStatusNotice)
function ApplicationStatusNotice(arg0) {
  let createEnableRequest;
  let isApplicationPending;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let resubmittingEnableRequest;
  let style;
  ({ style, resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = arg0);
  ({ resubmittingEnableRequest, createEnableRequest, isApplicationPending } = arg0);
  const tmp = callback4();
  if (null != resubmissionError) {
    let obj = {};
    const items = [tmp.statusNoticeContainer, style];
    obj.style = items;
    obj = { children: resubmissionError.getAnyErrorMessage() };
    obj.children = callback2(importDefault(dependencyMap[9]), obj);
    return callback2(closure_6, obj);
  } else {
    if (isApplicationPending) {
      const intl2 = arg1(dependencyMap[10]).intl;
      requestRejectedNoticeText = intl2.string(arg1(dependencyMap[10]).t.OrkTBn);
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const intl = arg1(dependencyMap[10]).intl;
        requestRejectedNoticeText = reapplyNoticeText;
        const stringResult = intl.string(arg1(dependencyMap[10]).t.YKw/NQ);
      }
    }
    let tmp7 = null;
    if (null != requestRejectedNoticeText) {
      obj = {};
      const items1 = [tmp.statusNoticeContainer, style];
      obj.style = items1;
      const obj1 = { notice: requestRejectedNoticeText, ctaLabel: stringResult, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      obj.children = callback2(importDefault(dependencyMap[11]), obj1);
      tmp7 = callback2(closure_6, obj);
    }
    return tmp7;
  }
}
class SectionContainer {
  constructor(arg0) {
    footer = global.footer;
    ({ title, children, onLayout } = global);
    tmp = closure_14();
    obj = { onLayout, style: tmp.container };
    obj = { style: tmp.divider };
    tmp2 = jsxs;
    tmp3 = View;
    items = [, , , ];
    items[0] = jsx(View, obj);
    obj1 = { delete: false, dispatch: 0, raw: 4 };
    obj1.style = tmp.sectionTitle;
    obj1.children = title;
    items[1] = jsx(arg1(dependencyMap[12]).Text, obj1);
    items[2] = children;
    tmp4 = null != footer;
    if (tmp4) {
      tmp5 = jsx;
      tmp6 = arg1;
      tmp7 = dependencyMap;
      obj2 = { delete: -1034747437, dispatch: -1274954172, raw: 94480 };
      obj2.style = tmp.sectionFooter;
      obj2.children = footer;
      tmp4 = jsx(arg1(dependencyMap[12]).Text, obj2);
    }
    items[3] = tmp4;
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
function StartEarningButton(isTermsAccepted) {
  let acceptTermsCheckboxText;
  let eligibility;
  let eligibleForMonetization;
  let error;
  let guildId;
  let loading;
  let style;
  let submitAcceptTermsRequest;
  isTermsAccepted = isTermsAccepted.isTermsAccepted;
  const arg1 = isTermsAccepted;
  ({ setTermsAccepted: closure_1, eligibleForMonetization, eligibility } = isTermsAccepted);
  const importAll = eligibility;
  let flag = isTermsAccepted.isFab;
  ({ guildId, acceptTermsCheckboxText, style } = isTermsAccepted);
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let closure_4;
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[13])(guildId);
  ({ error, loading, submitAcceptTermsRequest } = tmp2);
  dependencyMap = submitAcceptTermsRequest;
  let obj = arg1(dependencyMap[14]);
  const navigation = obj.useNavigation();
  closure_4 = navigation;
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = React.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = React.useCallback(() => {
    let obj = callback(submitAcceptTermsRequest[15]);
    obj = {
      eligibility,
      onRequireModeratorMFAClick() {

      }
    };
    return obj.openLazy(isTermsAccepted(submitAcceptTermsRequest[17])(submitAcceptTermsRequest[16], submitAcceptTermsRequest.paths), isTermsAccepted(submitAcceptTermsRequest[18]).ELIGIBILITY_ACTION_SHEET_KEY, obj);
  }, items1);
  obj = { style: tmp.tos, leading: callback2(arg1(dependencyMap[19]).FormRow.Checkbox, { selected: isTermsAccepted }) };
  obj = { hasMaxConnections: true, isBoostOnlySubscription: true, children: acceptTermsCheckboxText };
  obj.label = callback2(arg1(dependencyMap[12]).Text, obj);
  obj.onPress = function onPress() {
    return callback(!isTermsAccepted);
  };
  const obj1 = { style };
  let tmp9 = eligibleForMonetization;
  if (eligibleForMonetization) {
    tmp9 = true === flag && !isTermsAccepted || true !== flag;
    const tmp10 = true === flag && !isTermsAccepted || true !== flag;
  }
  if (tmp9) {
    tmp9 = tmp6;
  }
  const items2 = [tmp9, ];
  if (eligibleForMonetization) {
    const obj2 = {};
    const obj3 = { style: tmp.startEarningButton };
    const obj4 = { loading };
    let tmp26 = !isTermsAccepted;
    if (!tmp26) {
      tmp26 = !tmp2.canSubmitAcceptance;
    }
    if (!tmp26) {
      tmp26 = !eligibleForMonetization;
    }
    obj4.disabled = tmp26;
    const intl2 = arg1(dependencyMap[10]).intl;
    obj4.text = intl2.string(arg1(dependencyMap[10]).t.NL5ZNS);
    obj4.onPress = callback;
    obj3.children = callback2(arg1(dependencyMap[20]).Button, obj4);
    const items3 = [callback2(closure_6, obj3), ];
    let tmp30 = null != error;
    if (tmp30) {
      const obj5 = {};
      const obj6 = { size: 12 };
      const items4 = [callback2(arg1(dependencyMap[21]).Spacer, obj6), ];
      const obj7 = { children: error.getAnyErrorMessage() };
      items4[1] = callback2(importDefault(dependencyMap[9]), obj7);
      obj5.children = items4;
      tmp30 = callback3(closure_13, obj5);
      const tmp38 = importDefault(dependencyMap[9]);
    }
    items3[1] = tmp30;
    obj2.children = items3;
    let tmp19Result = callback3(closure_13, obj2);
    const tmp19 = callback3;
    const tmp20 = closure_13;
    const tmp21 = callback2;
    const tmp22 = closure_6;
    const tmp23 = callback2;
  } else {
    const obj8 = { style: tmp.startEarningButton };
    const obj9 = { loading };
    const intl = arg1(dependencyMap[10]).intl;
    obj9.text = intl.string(arg1(dependencyMap[10]).t.NL5ZNS);
    const obj10 = { source: importDefault(dependencyMap[23]), color: importDefault(dependencyMap[8]).unsafe_rawColors.WHITE, size: arg1(dependencyMap[21]).Icon.Sizes.SMALL_20 };
    obj9.icon = callback2(arg1(dependencyMap[21]).Icon, obj10);
    const obj11 = { backgroundColor: "#EB5D30" };
    obj9.pillStyle = obj11;
    obj9.onPress = callback1;
    obj8.children = callback2(arg1(dependencyMap[22]).BaseTextButton, obj9);
    tmp19Result = callback2(closure_6, obj8);
  }
  items2[1] = tmp19Result;
  obj1.children = items2;
  return callback3(closure_6, obj1);
}
class MarketingSections {
  constructor(arg0) {
    onboardingMarketing = global.onboardingMarketing;
    obj = {};
    intl = arg1(dependencyMap[10]).intl;
    obj.title = intl.string(arg1(dependencyMap[10]).t.R9rNIk);
    intl2 = arg1(dependencyMap[10]).intl;
    obj = { creatorPortalUrl: closure_8 };
    obj.footer = intl2.format(arg1(dependencyMap[10]).t.oxW30N, obj);
    obj.onLayout = global.onHowItWorksLayoutChange;
    obj.children = jsx(importDefault(dependencyMap[24]), {});
    tmp = jsx(SectionContainer, obj, closure_10.HOW_IT_WORKS);
    arg1 = tmp;
    obj1 = {};
    intl3 = arg1(dependencyMap[10]).intl;
    obj1.title = intl3.string(arg1(dependencyMap[10]).t.1QHJaW);
    obj1.children = jsx(importDefault(dependencyMap[25]), {});
    tmp2 = jsx(SectionContainer, obj1, closure_10.BENEFITS);
    importDefault = tmp2;
    sections = undefined;
    if (null != onboardingMarketing) {
      sections = onboardingMarketing.sections;
    }
    if (null == sections) {
      tmp7 = jsxs;
      tmp8 = Fragment;
      obj2 = {};
      items = [, ];
      items[0] = tmp;
      items[1] = tmp2;
      obj2.children = items;
      tmp6 = jsxs(Fragment, obj2);
    } else {
      tmp4 = jsx;
      tmp5 = Fragment;
      obj3 = {};
      sections1 = onboardingMarketing.sections;
      obj3.children = sections1.map((type) => {
        type = type.type;
        if (constants.HOW_IT_WORKS === type) {
          return tmp;
        } else if (constants.BENEFITS === type) {
          return tmp2;
        } else if (constants.OTHER_CREATORS === type) {
          let obj = {};
          const intl = tmp(closure_3[10]).intl;
          obj.title = intl.string(callback(closure_3[10]).t.tJp+QV);
          obj = { highlightedCreators: type.creators };
          obj.children = callback(closure_16(closure_3[26]), obj);
          return callback(closure_16, obj, constants.OTHER_CREATORS);
        }
      });
      tmp6 = jsx(Fragment, obj3);
    }
    return tmp6;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = arg1(dependencyMap[3]).CREATOR_REVENUE_PORTAL_URL;
const GuildSettingsSections = arg1(dependencyMap[4]).GuildSettingsSections;
let closure_10 = arg1(dependencyMap[5]).CreatorMonetizationOnboardingMarketingSection;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { flex: 1 }, contentContainer: { -1805531016: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021729236920285, 2095032404: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012237906228841671 }, heroImage: { <string:4069139795>: true, <string:1710685430>: true }, subtitle: { marginTop: 8 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[8]).radii.sm, marginTop: 10 };
obj.tos = obj;
obj.startEarningButton = { marginTop: 12 };
obj.startEarningButtonContainer = { marginTop: 14 };
obj.startEarningFabContainer = { marginHorizontal: 24 };
const obj1 = { accessibilityRole: 0, padding: -11151, "Null": 24183295, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED };
obj.divider = obj1;
obj.sectionTitle = {};
obj.sectionFooter = { marginTop: 36 };
obj.statusNoticeContainer = {};
let closure_14 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx");

export default function GuildSettingsRoleSubscriptionWelcomeView(guild) {
  let acceptTermsCheckboxText;
  let creatorMonetizationOnboardingMarketing;
  let eligibility;
  let eligibilityError;
  let eligibilityLoading;
  let eligibleForMonetization;
  let isGuildOwner;
  let isLoading;
  let refreshEligibility;
  let tmp15;
  let tmp16;
  let wasRejectedInV1;
  guild = guild.guild;
  let importAll;
  let dependencyMap;
  let callback;
  let React;
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  const navigation = obj.useNavigation();
  const tmp2 = importDefault(dependencyMap[27])(guild);
  ({ eligibility, refreshEligibility } = tmp2);
  const arg1 = refreshEligibility;
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1 } = tmp2);
  ({ isGuildOwner, eligibilityLoading, eligibilityError } = tmp2);
  let obj1 = arg1(dependencyMap[28]);
  const creatorMonetizationIneligibleReasons = obj1.useCreatorMonetizationIneligibleReasons(eligibility);
  ({ isLoading, creatorMonetizationOnboardingMarketing } = importDefault(dependencyMap[29])(guild.id));
  const tmp5 = callback(React.useState(false), 2);
  const first = tmp5[0];
  const ref = React.useRef(true);
  const importDefault = ref;
  let obj2 = arg1(dependencyMap[30]);
  const items = [ref, refreshEligibility];
  const focusEffect = obj2.useFocusEffect(React.useCallback(() => {
    if (!ref.current) {
      refreshEligibility();
    }
  }, items));
  const effect = React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
    }
  }, []);
  obj = {};
  const tmp4 = importDefault(dependencyMap[29])(guild.id);
  obj.type = arg1(dependencyMap[32]).ImpressionTypes.PANE;
  obj.name = arg1(dependencyMap[32]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
  obj.properties = { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons };
  importDefault(dependencyMap[31])(obj, { disableTrack: null == guild.id || null == eligibility });
  const tmp11 = importDefault(dependencyMap[31]);
  const tmp12 = null == guild.id || null == eligibility;
  [tmp15, tmp16] = callback(React.useState(false), 2);
  importAll = tmp16;
  const ref1 = React.useRef(null);
  dependencyMap = ref1;
  const tmp18 = callback(React.useState(), 2);
  const first1 = tmp18[0];
  callback = first1;
  React = tmp20;
  const items1 = [tmp18[1]];
  const items2 = [tmp16, first1];
  callback = React.useCallback((nativeEvent) => {
    const refreshEligibility = nativeEvent.nativeEvent.layout.y;
    let tmp = null == ref1;
    if (!tmp) {
      const current = ref1.current;
      tmp = null == current;
      const obj = current;
    }
    if (!tmp) {
      obj.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const diff = arg5 - y(closure_3[33]).STATUS_BAR_HEIGHT;
        callback(y + (diff - y(closure_3[33]).NAV_BAR_HEIGHT));
      });
    }
  }, items1);
  if (!eligibilityLoading) {
    if (null != eligibility) {
      if (!isLoading) {
        if (null != eligibilityError) {
          let obj4 = importAll(dependencyMap[35]);
          const intl = arg1(dependencyMap[10]).intl;
          obj4.presentFailedToast(intl.string(arg1(dependencyMap[10]).t.R0RpRX));
          navigation.pop();
        }
        obj = { bottom: true, style: tmp.container };
        obj1 = { onScroll: tmp22, scrollEventThrottle: 36 };
        obj2 = { style: tmp.container };
        const obj3 = { source: importDefault(dependencyMap[38]), resizeMethod: "scale", style: tmp.heroImage };
        const items3 = [callback2(importDefault(dependencyMap[37]), obj3), ];
        obj4 = { ref: ref1, style: tmp.contentContainer, collapsable: false };
        const obj5 = {};
        const intl2 = arg1(dependencyMap[10]).intl;
        obj5.children = intl2.string(arg1(dependencyMap[10]).t.QYqDQ0);
        const items4 = [callback2(arg1(dependencyMap[12]).Text, obj5), , , ];
        const obj6 = { delete: -1034747437, dispatch: -1274954172, raw: 94480, style: tmp.subtitle };
        const intl3 = arg1(dependencyMap[10]).intl;
        obj6.children = intl3.string(arg1(dependencyMap[10]).t.41wkMc);
        items4[1] = callback2(arg1(dependencyMap[12]).Text, obj6);
        if (wasRejectedInV1) {
          const obj7 = { style: tmp.statusNoticeContainer };
          const merged = Object.assign(tmp2);
          let tmp42Result = tmp42(ApplicationStatusNotice, obj7);
        } else {
          const obj8 = { style: tmp.startEarningButtonContainer, guildId: guild.id, isTermsAccepted: first, setTermsAccepted: tmp7, eligibleForMonetization, eligibility, acceptTermsCheckboxText };
          tmp42Result = tmp42(StartEarningButton, obj8);
        }
        items4[2] = tmp42Result;
        const obj9 = { onboardingMarketing: creatorMonetizationOnboardingMarketing, onHowItWorksLayoutChange: callback };
        items4[3] = callback2(MarketingSections, obj9);
        obj4.children = items4;
        items3[1] = closure_12(closure_6, obj4);
        obj2.children = items3;
        obj1.children = closure_12(closure_6, obj2);
        const items5 = [callback2(closure_7, obj1), ];
        if (tmp15) {
          tmp15 = eligibleForMonetization;
        }
        if (tmp15) {
          tmp15 = !wasRejectedInV1;
        }
        if (tmp15) {
          const obj10 = { style: tmp.startEarningFabContainer, guildId: guild.id, isTermsAccepted: first, setTermsAccepted: tmp7, eligibleForMonetization, eligibility, acceptTermsCheckboxText, isFab: true };
          tmp15 = callback2(StartEarningButton, obj10);
        }
        items5[1] = tmp15;
        obj.children = items5;
        let tmp28Result = closure_12(arg1(dependencyMap[36]).SafeAreaPaddingView, obj);
        const tmp28 = closure_12;
        const tmp31 = callback2;
        const tmp32 = closure_7;
        const tmp33 = closure_12;
        const tmp34 = closure_6;
        const tmp37 = importDefault(dependencyMap[37]);
        const tmp38 = closure_12;
        const tmp39 = closure_6;
      }
      return tmp28Result;
    }
  }
  tmp28Result = callback2(importDefault(dependencyMap[34]), {});
};
export { SectionContainer };
export { MarketingSections };
