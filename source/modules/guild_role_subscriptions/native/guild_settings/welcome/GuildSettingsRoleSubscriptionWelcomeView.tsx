// Module ID: 16423
// Function ID: 128094
// Name: ApplicationStatusNotice
// Dependencies: [57, 31, 27, 14144, 653, 16424, 33, 4130, 689, 11358, 1212, 16425, 4126, 16426, 1456, 4098, 16428, 1934, 16428, 7636, 4543, 1273, 4544, 8524, 16436, 16440, 16449, 16452, 16457, 16458, 1457, 8604, 480, 5084, 16422, 3830, 5121, 5085, 16459, 2]
// Exports: default

// Module 16423 (ApplicationStatusNotice)
import _slicedToArray from "_slicedToArray";
import trackImpression from "trackImpression";
import get_ActivityIndicator from "useOnboardingMonetizationEnableFlow";
import { CREATOR_REVENUE_PORTAL_URL as closure_8 } from "MAX_SUBSCRIPTION_TIERS";
import { GuildSettingsSections } from "ME";
import { CreatorMonetizationOnboardingMarketingSection as closure_10 } from "CreatorMonetizationApplicationState";
import jsxProd from "NAV_BAR_HEIGHT";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let require = arg1;
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
  const tmp = _createForOfIteratorHelperLoose();
  if (null != resubmissionError) {
    let obj = {};
    const items = [tmp.statusNoticeContainer, style];
    obj.style = items;
    obj = { children: resubmissionError.getAnyErrorMessage() };
    obj.children = callback(importDefault(11358), obj);
    return callback(closure_6, obj);
  } else {
    if (isApplicationPending) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      requestRejectedNoticeText = intl2.string(require(1212) /* getSystemLocale */.t.OrkTBn);
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const intl = require(1212) /* getSystemLocale */.intl;
        requestRejectedNoticeText = reapplyNoticeText;
        const stringResult = intl.string(require(1212) /* getSystemLocale */.t["YKw/NQ"]);
      }
    }
    let tmp7 = null;
    if (null != requestRejectedNoticeText) {
      obj = {};
      const items1 = [tmp.statusNoticeContainer, style];
      obj.style = items1;
      const obj1 = { notice: requestRejectedNoticeText, ctaLabel: stringResult, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      obj.children = callback(importDefault(16425), obj1);
      tmp7 = callback(closure_6, obj);
    }
    return tmp7;
  }
}
class SectionContainer {
  constructor(arg0) {
    footer = global.footer;
    ({ title, children, onLayout } = global);
    tmp = c14();
    obj = { onLayout, style: tmp.container };
    obj = { style: tmp.divider };
    tmp2 = jsxs;
    tmp3 = View;
    items = [, , , ];
    items[0] = jsx(View, obj);
    obj1 = { style: null, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
    obj1.style = tmp.sectionTitle;
    obj1.children = title;
    items[1] = jsx(require("Text").Text, obj1);
    items[2] = children;
    tmp4 = null != footer;
    if (tmp4) {
      tmp5 = jsx;
      tmp6 = closure_0;
      tmp7 = closure_3;
      obj2 = { style: null, variant: "text-sm/normal", color: "text-default" };
      obj2.style = tmp.sectionFooter;
      obj2.children = footer;
      tmp4 = jsx(require("Text").Text, obj2);
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
  let importDefault;
  let loading;
  let style;
  let submitAcceptTermsRequest;
  isTermsAccepted = isTermsAccepted.isTermsAccepted;
  ({ setTermsAccepted: importDefault, eligibleForMonetization, eligibility } = isTermsAccepted);
  let flag = isTermsAccepted.isFab;
  ({ guildId, acceptTermsCheckboxText, style } = isTermsAccepted);
  if (flag === undefined) {
    flag = false;
  }
  submitAcceptTermsRequest = undefined;
  let navigation;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(submitAcceptTermsRequest[13])(guildId);
  ({ error, loading, submitAcceptTermsRequest } = tmp2);
  let obj = isTermsAccepted(submitAcceptTermsRequest[14]);
  navigation = obj.useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = React.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = React.useCallback(() => {
    let obj = outer1_1(submitAcceptTermsRequest[15]);
    obj = {
      eligibility,
      onRequireModeratorMFAClick() {
        outer1_4.push(outer2_9.SECURITY);
      }
    };
    return obj.openLazy(isTermsAccepted(submitAcceptTermsRequest[17])(submitAcceptTermsRequest[16], submitAcceptTermsRequest.paths), isTermsAccepted(submitAcceptTermsRequest[18]).ELIGIBILITY_ACTION_SHEET_KEY, obj);
  }, items1);
  obj = { style: tmp.tos, leading: callback(isTermsAccepted(submitAcceptTermsRequest[19]).FormRow.Checkbox, { selected: isTermsAccepted }) };
  obj = { variant: "text-xs/normal", color: "text-default", children: acceptTermsCheckboxText };
  obj.label = callback(isTermsAccepted(submitAcceptTermsRequest[12]).Text, obj);
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
    const intl2 = isTermsAccepted(submitAcceptTermsRequest[10]).intl;
    obj4.text = intl2.string(isTermsAccepted(submitAcceptTermsRequest[10]).t.NL5ZNS);
    obj4.onPress = callback;
    obj3.children = callback(isTermsAccepted(submitAcceptTermsRequest[20]).Button, obj4);
    const items3 = [callback(closure_6, obj3), ];
    let tmp30 = null != error;
    if (tmp30) {
      const obj5 = {};
      const obj6 = { size: 12 };
      const items4 = [callback(isTermsAccepted(submitAcceptTermsRequest[21]).Spacer, obj6), ];
      const obj7 = { children: error.getAnyErrorMessage() };
      items4[1] = callback(importDefault(submitAcceptTermsRequest[9]), obj7);
      obj5.children = items4;
      tmp30 = callback2(closure_13, obj5);
      const tmp38 = importDefault(submitAcceptTermsRequest[9]);
    }
    items3[1] = tmp30;
    obj2.children = items3;
    let tmp19Result = callback2(closure_13, obj2);
    const tmp19 = callback2;
    const tmp20 = closure_13;
    const tmp21 = callback;
    const tmp22 = closure_6;
    const tmp23 = callback;
  } else {
    const obj8 = { style: tmp.startEarningButton };
    const obj9 = { loading };
    const intl = isTermsAccepted(submitAcceptTermsRequest[10]).intl;
    obj9.text = intl.string(isTermsAccepted(submitAcceptTermsRequest[10]).t.NL5ZNS);
    const obj10 = { source: importDefault(submitAcceptTermsRequest[23]), color: importDefault(submitAcceptTermsRequest[8]).unsafe_rawColors.WHITE, size: isTermsAccepted(submitAcceptTermsRequest[21]).Icon.Sizes.SMALL_20 };
    obj9.icon = callback(isTermsAccepted(submitAcceptTermsRequest[21]).Icon, obj10);
    const obj11 = { backgroundColor: "#EB5D30" };
    obj9.pillStyle = obj11;
    obj9.onPress = callback1;
    obj8.children = callback(isTermsAccepted(submitAcceptTermsRequest[22]).BaseTextButton, obj9);
    tmp19Result = callback(closure_6, obj8);
  }
  items2[1] = tmp19Result;
  obj1.children = items2;
  return callback2(closure_6, obj1);
}
class MarketingSections {
  constructor(arg0) {
    onboardingMarketing = global.onboardingMarketing;
    obj = {};
    intl = require("getSystemLocale").intl;
    obj.title = intl.string(require("getSystemLocale").t.R9rNIk);
    intl2 = require("getSystemLocale").intl;
    obj = { creatorPortalUrl: c8 };
    obj.footer = intl2.format(require("getSystemLocale").t.oxW30N, obj);
    obj.onLayout = global.onHowItWorksLayoutChange;
    obj.children = jsx(require("HowItWorksCard"), {});
    tmp = jsx(SectionContainer, obj, c10.HOW_IT_WORKS);
    closure_0 = tmp;
    obj1 = {};
    intl3 = require("getSystemLocale").intl;
    obj1.title = intl3.string(require("getSystemLocale").t["1QHJaW"]);
    obj1.children = jsx(require("getGreenTextStyle"), {});
    tmp2 = jsx(SectionContainer, obj1, c10.BENEFITS);
    closure_1 = tmp2;
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
        if (outer1_10.HOW_IT_WORKS === type) {
          return tmp;
        } else if (outer1_10.BENEFITS === type) {
          return tmp2;
        } else if (outer1_10.OTHER_CREATORS === type) {
          let obj = {};
          const intl = tmp(outer1_3[10]).intl;
          obj.title = intl.string(outer1_11(outer1_3[10]).t["tJp+QV"]);
          obj = { highlightedCreators: type.creators };
          obj.children = outer1_11(outer1_16(outer1_3[26]), obj);
          return outer1_11(outer1_16, obj, outer1_10.OTHER_CREATORS);
        }
      });
      tmp6 = jsx(Fragment, obj3);
    }
    return tmp6;
  }
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 }, contentContainer: { flex: 1, padding: 24 }, heroImage: { resizeMode: "cover", width: "100%" }, subtitle: { marginTop: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 10 };
_createForOfIteratorHelperLoose.tos = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.startEarningButton = { marginTop: 12 };
_createForOfIteratorHelperLoose.startEarningButtonContainer = { marginTop: 14 };
_createForOfIteratorHelperLoose.startEarningFabContainer = { marginHorizontal: 24 };
let obj1 = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.divider = obj1;
_createForOfIteratorHelperLoose.sectionTitle = { marginTop: 36, marginBottom: 10 };
_createForOfIteratorHelperLoose.sectionFooter = { marginTop: 36 };
_createForOfIteratorHelperLoose.statusNoticeContainer = { marginHorizontal: 0, marginTop: 14 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx");

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
  let ref1;
  let first1;
  let React;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = refreshEligibility(ref1[14]);
  const navigation = obj.useNavigation();
  const tmp2 = ref(ref1[27])(guild);
  ({ eligibility, refreshEligibility } = tmp2);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1 } = tmp2);
  ({ isGuildOwner, eligibilityLoading, eligibilityError } = tmp2);
  let obj1 = refreshEligibility(ref1[28]);
  const creatorMonetizationIneligibleReasons = obj1.useCreatorMonetizationIneligibleReasons(eligibility);
  ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[29])(guild.id));
  const tmp5 = first1(React.useState(false), 2);
  const first = tmp5[0];
  ref = React.useRef(true);
  let obj2 = refreshEligibility(ref1[30]);
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
  const tmp4 = ref(ref1[29])(guild.id);
  obj.type = refreshEligibility(ref1[32]).ImpressionTypes.PANE;
  obj.name = refreshEligibility(ref1[32]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
  obj.properties = { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons };
  ref(ref1[31])(obj, { disableTrack: null == guild.id || null == eligibility });
  const tmp11 = ref(ref1[31]);
  const tmp12 = null == guild.id || null == eligibility;
  [tmp15, tmp16] = first1(React.useState(false), 2);
  importAll = tmp16;
  ref1 = React.useRef(null);
  const tmp18 = first1(React.useState(), 2);
  first1 = tmp18[0];
  React = tmp20;
  const items1 = [tmp18[1]];
  const items2 = [tmp16, first1];
  const callback = React.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.layout.y;
    let tmp = null == ref1;
    if (!tmp) {
      const current = ref1.current;
      tmp = null == current;
      const obj = current;
    }
    if (!tmp) {
      obj.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const diff = arg5 - refreshEligibility(ref1[33]).STATUS_BAR_HEIGHT;
        outer1_5(closure_0 + (diff - refreshEligibility(ref1[33]).NAV_BAR_HEIGHT));
      });
    }
  }, items1);
  if (!eligibilityLoading) {
    if (null != eligibility) {
      if (!isLoading) {
        if (null != eligibilityError) {
          let obj4 = importAll(ref1[35]);
          const intl = refreshEligibility(ref1[10]).intl;
          obj4.presentFailedToast(intl.string(refreshEligibility(ref1[10]).t.R0RpRX));
          navigation.pop();
        }
        obj = { bottom: true, style: tmp.container };
        obj1 = { onScroll: tmp22, scrollEventThrottle: 36 };
        obj2 = { style: tmp.container };
        const obj3 = { source: ref(ref1[38]), resizeMethod: "scale", style: tmp.heroImage };
        const items3 = [callback(ref(ref1[37]), obj3), ];
        obj4 = { ref: ref1, style: tmp.contentContainer, collapsable: false };
        const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
        const intl2 = refreshEligibility(ref1[10]).intl;
        obj5.children = intl2.string(refreshEligibility(ref1[10]).t.QYqDQ0);
        const items4 = [callback(refreshEligibility(ref1[12]).Text, obj5), , , ];
        const obj6 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default" };
        const intl3 = refreshEligibility(ref1[10]).intl;
        obj6.children = intl3.string(refreshEligibility(ref1[10]).t["41wkMc"]);
        items4[1] = callback(refreshEligibility(ref1[12]).Text, obj6);
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
        items4[3] = callback(MarketingSections, obj9);
        obj4.children = items4;
        items3[1] = closure_12(closure_6, obj4);
        obj2.children = items3;
        obj1.children = closure_12(closure_6, obj2);
        const items5 = [callback(closure_7, obj1), ];
        if (tmp15) {
          tmp15 = eligibleForMonetization;
        }
        if (tmp15) {
          tmp15 = !wasRejectedInV1;
        }
        if (tmp15) {
          const obj10 = { style: tmp.startEarningFabContainer, guildId: guild.id, isTermsAccepted: first, setTermsAccepted: tmp7, eligibleForMonetization, eligibility, acceptTermsCheckboxText, isFab: true };
          tmp15 = callback(StartEarningButton, obj10);
        }
        items5[1] = tmp15;
        obj.children = items5;
        let tmp28Result = closure_12(refreshEligibility(ref1[36]).SafeAreaPaddingView, obj);
        const tmp28 = closure_12;
        const tmp31 = callback;
        const tmp32 = closure_7;
        const tmp33 = closure_12;
        const tmp34 = closure_6;
        const tmp37 = ref(ref1[37]);
        const tmp38 = closure_12;
        const tmp39 = closure_6;
      }
      return tmp28Result;
    }
  }
  tmp28Result = callback(ref(ref1[34]), {});
};
export { SectionContainer };
export { MarketingSections };
