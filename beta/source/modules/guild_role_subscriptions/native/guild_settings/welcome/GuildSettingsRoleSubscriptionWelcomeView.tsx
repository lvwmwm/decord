// Module ID: 17509
// Function ID: 17510
// Name: GuildSettingsRoleSubscriptionWelcomeView
// Dependencies: [32, 19, 17, 14750, 1074, 17510, 21, 4836, 576, 11705, 1115, 17511, 4832, 17512, 1485, 4800, 17514, 1981, 17514, 8053, 5281, 1177, 5282, 8905, 17522, 17526, 17535, 17538, 17543, 17544, 1486, 8230, 1249, 5994, 17508, 4527, 6544, 5899, 17545, 2]
// Exports: default

// Module 17509 (GuildSettingsRoleSubscriptionWelcomeView)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ErrorBlockDefault from "ErrorBlock" /* 11705 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import CreatorMonetizationEligibilityConstants from "CreatorMonetizationEligibilityConstants" /* 17510 */;
import WarningNoticeDefault from "WarningNotice" /* 17511 */;
import EligibilityActionSheet from "EligibilityActionSheet" /* 17514 */;
import HowItWorksSectionDefault from "HowItWorksSection" /* 17522 */;
import CreatorBenefitsSectionDefault from "CreatorBenefitsSection" /* 17526 */;
import CreatorHighlightSectionDefault from "CreatorHighlightSection" /* 17535 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importAll, importDefault, navigation, type;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let unpackModuleId;
function ApplicationStatusNotice(arg0) {
  let createEnableRequest;
  let isApplicationPending;
  let items;
  let items1;
  let obj3;
  let obj4;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let resubmittingEnableRequest;
  let style;
  let tmp16;
  ({ style, resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = arg0);
  ({ resubmittingEnableRequest, createEnableRequest, isApplicationPending } = arg0);
  const tmp = closure_14();
  if (null != resubmissionError) {
    const obj2 = { style: items, children: unpackModuleId(tmp16, obj3) };
    items = [tmp.statusNoticeContainer, style];
    obj3 = { children: resubmissionError.getAnyErrorMessage() };
    tmp16 = ErrorBlockDefault;
    return unpackModuleId(metroRequire, obj2);
  } else {
    let stringResult;
    if (isApplicationPending) {
      const intl2 = intl4.intl;
      requestRejectedNoticeText = intl2.string(intl4.t.OrkTBn);
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const intl = intl4.intl;
        requestRejectedNoticeText = reapplyNoticeText;
        stringResult = intl.string(intl4.t["YKw/NQ"]);
      }
    }
    let tmp7 = null;
    if (null != requestRejectedNoticeText) {
      const obj = { style: items1, children: unpackModuleId(WarningNoticeDefault, obj4) };
      items1 = [tmp.statusNoticeContainer, style];
      obj4 = { notice: requestRejectedNoticeText, ctaLabel: stringResult, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      tmp7 = unpackModuleId(metroRequire, obj);
    }
    return tmp7;
  }
}
class SectionContainer {
  constructor(footer) {
    let children;
    let items;
    let onLayout;
    let title;
    footer = footer.footer;
    ({ title, children, onLayout } = footer);
    const tmp = closure_14();
    const obj = { onLayout, style: tmp.container, children: items };
    items = [, , , ];
    const obj2 = { style: tmp.divider };
    items[0] = unpackModuleId(metroRequire, obj2);
    const obj3 = { style: tmp.sectionTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: title };
    items[1] = unpackModuleId(Text_Text.Text, obj3);
    items[2] = children;
    let tmp4Result = null != footer;
    const tmp2 = closure_12;
    const tmp3 = metroRequire;
    const tmp4 = unpackModuleId;
    if (tmp4Result) {
      const obj4 = { style: tmp.sectionFooter, variant: "text-sm/normal", color: "text-default", children: footer };
      tmp4Result = tmp4(Text_Text.Text, obj4);
    }
    items[3] = tmp4Result;
    return tmp2(tmp3, obj);
  }
}
function StartEarningButton(isTermsAccepted) {
  let Icon;
  let acceptTermsCheckboxText;
  let eligibility;
  let eligibleForMonetization;
  let error;
  let guildId;
  let intl;
  let intl2;
  let items2;
  let items4;
  let loading;
  let obj10;
  let style;
  let submitAcceptTermsRequest;
  let tmp11Result2;
  let tmp17;
  isTermsAccepted = isTermsAccepted.isTermsAccepted;
  ({ setTermsAccepted: importDefault, eligibleForMonetization, eligibility } = isTermsAccepted);
  let flag = isTermsAccepted.isFab;
  ({ guildId, acceptTermsCheckboxText, style } = isTermsAccepted);
  if (flag === undefined) {
    flag = false;
  }
  submitAcceptTermsRequest = undefined;
  const tmp = closure_14();
  let tmp2 = importDefault;
  const tmp4 = require("useCreatorMonetizationAcceptTerms")(guildId);
  ({ error, loading, submitAcceptTermsRequest } = tmp4);
  const canSubmitAcceptance = tmp4.canSubmitAcceptance;
  let obj = isTermsAccepted(submitAcceptTermsRequest[14]);
  navigation = obj.useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = react.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = {
      eligibility,
      onRequireModeratorMFAClick() {
        navigation.push(constants.SECURITY);
      }
    };
    const tmp2 = asyncRequire(17514, dependencyMap.paths);
    return openLazy(tmp2, EligibilityActionSheet.ELIGIBILITY_ACTION_SHEET_KEY, obj);
  }, items1);
  const obj2 = {
    style: tmp.tos,
    leading: closure_11(isTermsAccepted(submitAcceptTermsRequest[19]).FormRow.Checkbox, { selected: isTermsAccepted }),
    label: closure_11(isTermsAccepted(submitAcceptTermsRequest[12]).Text, { variant: "text-xs/normal", color: "text-default", children: acceptTermsCheckboxText }),
    onPress() {
      return importDefault(!isTermsAccepted);
    }
  };
  const FormRow = isTermsAccepted(submitAcceptTermsRequest[19]).FormRow;
  let tmp13 = eligibleForMonetization;
  const obj3 = { style, children: items2 };
  const tmp10 = closure_11(FormRow, obj2);
  if (eligibleForMonetization) {
    tmp13 = true === flag && !isTermsAccepted || true !== flag;
  }
  if (tmp13) {
    tmp13 = tmp10;
  }
  items2 = [tmp13, ];
  const obj4 = { style: null, children: null };
  if (eligibleForMonetization) {
    obj4.style = tmp.startEarningButton;
    const obj5 = { loading, disabled: tmp17, text: intl2.string(isTermsAccepted(submitAcceptTermsRequest[10]).t.NL5ZNS), onPress: callback };
    tmp17 = !isTermsAccepted;
    const Button = tmp5(tmp3[20]).Button;
    if (isTermsAccepted) {
      tmp17 = !canSubmitAcceptance;
    }
    if (!tmp17) {
      tmp17 = !eligibleForMonetization;
    }
    intl2 = tmp5(tmp3[10]).intl;
    obj4.children = closure_11(Button, obj5);
    const items3 = [closure_11(closure_6, obj4), ];
    let tmp11Result = null != error;
    if (tmp11Result) {
      const obj6 = { children: items4 };
      items4 = [closure_11(isTermsAccepted(submitAcceptTermsRequest[21]).Spacer, { size: 12 }), ];
      const obj7 = { children: error.getAnyErrorMessage() };
      const tmp2Result = tmp2(submitAcceptTermsRequest[9]);
      items4[1] = closure_11(tmp2Result, obj7);
      tmp11Result = tmp11(tmp16, obj6);
    }
    const obj8 = { children: items3 };
    items3[1] = tmp11Result;
    tmp11Result2 = tmp11(tmp16, obj8);
  } else {
    obj4.style = tmp.startEarningButton;
    const obj9 = { loading, text: intl.string(isTermsAccepted(submitAcceptTermsRequest[10]).t.NL5ZNS), icon: closure_11(Icon, obj10), pillStyle: { backgroundColor: "#EB5D30" }, onPress: callback1 };
    const BaseTextButton = tmp5(tmp3[22]).BaseTextButton;
    intl = tmp5(tmp3[10]).intl;
    obj10 = { source: tmp2(submitAcceptTermsRequest[23]), color: tmp2(submitAcceptTermsRequest[8]).unsafe_rawColors.WHITE, size: isTermsAccepted(submitAcceptTermsRequest[21]).Icon.Sizes.SMALL_20 };
    Icon = tmp5(tmp3[21]).Icon;
    obj4.children = closure_11(BaseTextButton, obj9);
    tmp11Result2 = tmp9(tmp12, obj4);
  }
  items2[1] = tmp11Result2;
  return closure_12(closure_6, obj3);
}
class MarketingSections {
  constructor(onboardingMarketing) {
    let closure_0;
    let closure_1;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj2;
    let onHowItWorksLayoutChange;
    let sections1;
    let tmpResult;
    onboardingMarketing = onboardingMarketing.onboardingMarketing;
    _require = undefined;
    let obj = { title: intl.string(require("intl").t.R9rNIk), footer: intl2.format(require("intl").t.oxW30N, obj2), onLayout: onHowItWorksLayoutChange, children: closure_11(HowItWorksSectionDefault, {}) };
    onHowItWorksLayoutChange = onboardingMarketing.onHowItWorksLayoutChange;
    intl = require("intl").intl;
    intl2 = require("intl").intl;
    obj2 = { creatorPortalUrl };
    const tmp2 = closure_11(SectionContainer, obj, constants.HOW_IT_WORKS);
    _require = tmp2;
    const obj3 = { title: intl3.string(require("intl").t["1QHJaW"]), children: closure_11(CreatorBenefitsSectionDefault, {}) };
    intl3 = require("intl").intl;
    const tmp3 = closure_11(SectionContainer, obj3, constants.BENEFITS);
    importDefault = tmp3;
    let sections;
    const tmp = closure_11;
    if (onboardingMarketing != null) {
      sections = onboardingMarketing.sections;
    }
    if (null == sections) {
      const obj4 = { children: items };
      items = [tmp2, tmp3];
      tmpResult = closure_12(closure_13, obj4);
    } else {
      const obj5 = {
        children: sections1.map((type) => {
            let intl;
            let obj2;
            type = type.type;
            if (constants.HOW_IT_WORKS === type) {
              return closure_0;
            } else if (constants.BENEFITS === type) {
              return closure_1;
            } else if (constants.OTHER_CREATORS === type) {
              const obj = { title: intl.string(intl4.t["tJp+QV"]), children: unpackModuleId(CreatorHighlightSectionDefault, obj2) };
              intl = intl4.intl;
              obj2 = { highlightedCreators: type.creators };
              return unpackModuleId(SectionContainer, obj, constants.OTHER_CREATORS);
            }
          })
      };
      sections1 = onboardingMarketing.sections;
      tmpResult = tmp(closure_13, obj5);
    }
    return tmpResult;
  }
}
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const metroImportAll = GuildRoleSubscriptionsConstants.CREATOR_REVENUE_PORTAL_URL;
const GuildSettingsSections = Constants.GuildSettingsSections;
const authStore = CreatorMonetizationEligibilityConstants.CreatorMonetizationOnboardingMarketingSection;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: { flex: 1, padding: 24 }, heroImage: { resizeMode: "cover", width: "100%" }, subtitle: { marginTop: 8 }, tos: obj2, startEarningButton: { marginTop: 12 }, startEarningButtonContainer: { marginTop: 14 }, startEarningFabContainer: { marginHorizontal: 24 }, divider: size, sectionTitle: { marginTop: 36, marginBottom: 10 }, sectionFooter: { marginTop: 36 }, statusNoticeContainer: { marginHorizontal: 0, marginTop: 14 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, marginTop: 10 };
createStyles = createStyles.createStyles;
size = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const authStore2 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx");

export default function GuildSettingsRoleSubscriptionWelcomeView(guild) {
  let _undefined;
  let acceptTermsCheckboxText;
  let closure_5;
  let creatorMonetizationOnboardingMarketing;
  let eligibility;
  let eligibilityError;
  let eligibilityLoading;
  let eligibleForMonetization;
  let intl2;
  let intl3;
  let isGuildOwner;
  let isLoading;
  let items3;
  let items4;
  let items5;
  let obj8;
  let refreshEligibility;
  let tmp10;
  let tmp11;
  let tmp19;
  let tmp20;
  let tmp32Result2;
  let wasRejectedInV1;
  guild = guild.guild;
  refreshEligibility = undefined;
  let ref;
  let ref1;
  let first;
  react = undefined;
  const tmp = closure_14();
  const tmp2 = refreshEligibility;
  const obj = refreshEligibility(ref1[14]);
  navigation = obj.useNavigation();
  const tmp5 = ref(ref1[27])(guild);
  ({ eligibility, refreshEligibility } = tmp5);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, isGuildOwner, eligibilityLoading, eligibilityError } = tmp5);
  const obj2 = refreshEligibility(ref1[28]);
  const creatorMonetizationIneligibleReasons = obj2.useCreatorMonetizationIneligibleReasons(eligibility);
  ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[29])(guild.id));
  ref(ref1[29])(guild.id);
  [tmp10, tmp11] = first(react.useState(false), 2);
  first(react.useState(false), 2);
  ref = react.useRef(true);
  const items = [ref, refreshEligibility];
  const obj4 = refreshEligibility(ref1[30]);
  const focusEffect = obj4.useFocusEffect(react.useCallback(() => {
    if (!ref.current) {
      refreshEligibility();
    }
  }, items));
  const effect = react.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    }
  }, []);
  const obj5 = { type: refreshEligibility(ref1[32]).ImpressionTypes.PANE, name: refreshEligibility(ref1[32]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING, properties: { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons } };
  const tmp15 = ref(ref1[31]);
  const tmp16 = null == guild.id || null == eligibility;
  tmp15(obj5, { disableTrack: tmp16 });
  [tmp19, tmp20] = first(react.useState(false), 2);
  importAll = tmp20;
  first(react.useState(false), 2);
  ref1 = obj3.useRef(null);
  const tmp8Result2 = first(react.useState(), 2);
  first = tmp8Result2[0];
  react = tmp24;
  const items1 = [tmp8Result2[1]];
  const items2 = [tmp20, first];
  const callback = obj3.useCallback((nativeEvent) => {
    let closure_0;
    const y = nativeEvent.nativeEvent.layout.y;
    if (ref1 != null) {
      const current = ref1.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
          closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
        });
      }
    }
  }, items1);
  if (!eligibilityLoading) {
    if (null != eligibility) {
      let tmp31Result;
      if (!isLoading) {
        let tmp32Result;
        if (null != eligibilityError) {
          const presentFailedToast = require("ToastUtils").presentFailedToast;
          require("ToastUtils");
          const intl = tmp2(tmp3[10]).intl;
          presentFailedToast(intl.string(tmp2(ref1[10]).t.R0RpRX));
          navigation.pop();
        }
        const obj6 = { bottom: true, style: tmp.container, children: items5 };
        const obj7 = { onScroll: tmp26, scrollEventThrottle: 36, children: closure_12(closure_6, obj8) };
        obj8 = { style: tmp.container, children: items3 };
        const SafeAreaPaddingView = tmp2(tmp3[36]).SafeAreaPaddingView;
        const obj9 = { source: ref(ref1[38]), resizeMethod: "scale", style: tmp.heroImage };
        const tmp4Result = ref(ref1[37]);
        items3 = [closure_11(tmp4Result, obj9), ];
        const obj10 = { ref: ref1, style: tmp.contentContainer, collapsable: false, children: items4 };
        const obj11 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(ref1[10]).t.QYqDQ0) };
        const Text = tmp2(tmp3[12]).Text;
        intl2 = tmp2(tmp3[10]).intl;
        items4 = [closure_11(Text, obj11), , , ];
        const obj12 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.string(tmp2(ref1[10]).t["41wkMc"]) };
        const Text2 = tmp2(tmp3[12]).Text;
        intl3 = tmp2(tmp3[10]).intl;
        items4[1] = closure_11(Text2, obj12);
        const tmp33 = closure_7;
        if (wasRejectedInV1) {
          const obj13 = { style: tmp.statusNoticeContainer };
          const merged = Object.assign(tmp5);
          tmp32Result = tmp32(ApplicationStatusNotice, obj13);
        } else {
          const obj14 = { style: tmp.startEarningButtonContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText };
          tmp32Result = tmp32(StartEarningButton, obj14);
        }
        items4[2] = tmp32Result;
        const obj15 = { onboardingMarketing: creatorMonetizationOnboardingMarketing, onHowItWorksLayoutChange: callback };
        items4[3] = closure_11(MarketingSections, obj15);
        items3[1] = closure_12(closure_6, obj10);
        items5 = [closure_11(tmp33, obj7), ];
        if (tmp32Result2) {
          tmp32Result2 = eligibleForMonetization;
        }
        if (tmp32Result2) {
          tmp32Result2 = !wasRejectedInV1;
        }
        if (tmp32Result2) {
          const obj16 = { style: tmp.startEarningFabContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText, isFab: true };
          tmp32Result2 = tmp32(StartEarningButton, obj16);
        }
        items5[1] = tmp32Result2;
        tmp31Result = tmp31(SafeAreaPaddingView, obj6);
      }
      return tmp31Result;
    }
  }
  tmp31Result = closure_11(tmp4(tmp3[34]), {});
};
export { SectionContainer };
export { MarketingSections };
