// Module ID: 15259
// Function ID: 15260
// Name: UserSettingsPremiumGuildSubscriptions
// Dependencies: [19, 17, 1385, 2172, 9169, 2175, 2176, 1072, 1387, 21, 5243, 6898, 5314, 9171, 7209, 6704, 7743, 7747, 5866, 1113, 2185, 15260, 1398, 15274, 15276, 15278, 15282, 9920, 8463, 9250, 15214, 504, 1499, 9911, 1624, 2]
// Exports: default

// Module 15259 (UserSettingsPremiumGuildSubscriptions)
import intl3 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import user from "user" /* 1398 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import native from "native" /* 5314 */;
import Text_Text from "Text/Text" /* 5866 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6704 */;
import LegacyTokens from "LegacyTokens" /* 6898 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7209 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7743 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7747 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 9171 */;
import BoostingUnavailablePillDefault from "BoostingUnavailablePill" /* 15274 */;
import BoostingCountDownPillDefault from "BoostingCountDownPill" /* 15276 */;
import GuildBoostingUpsellDefault from "GuildBoostingUpsell" /* 15282 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import BillingInfoStore from "BillingInfoStore" /* 2172 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 9169 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2175 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import Constants from "Constants" /* 1072 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let _require, dependencyMap, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let obj2;
let tmp2;
let unpackModuleId;
const TopPattern = tmp2(15278);
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ HelpdeskArticles: unpackModuleId, UserSettingsSections: closure_12 } = Constants);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { upsellSection: { position: "relative" }, background: { position: "absolute", width: "100%" }, scroller: obj2, subscriptionHeader: { paddingHorizontal: 16, paddingBottom: 32 }, blurb: { lineHeight: 18 }, blurbNotLast: { marginBottom: 8 }, boostingUnavailablePill: { marginHorizontal: 16, alignContent: "center" }, externalManagement: { marginTop: 8 } };
obj2 = { flex: 1, backgroundColor: LegacyTokens.DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
const authStore3 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class UserSettingsPremiumGuildSubscriptions extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { isOnCooldown: false };
    applyArgumentsResult.handleLearnMorePremium = function handleLearnMorePremium() {
      navigation = require.props.navigation;
      const routes = navigation.getState().routes;
      const found = routes.find((name) => name.name === constants.PREMIUM);
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(constants.PREMIUM);
      const obj2 = UserSettingsUtils;
      const obj3 = { destinationPane: constants.PREMIUM };
      const result = obj2.trackUserSettingsPaneViewed(obj3);
      if (null != found) {
        navigation.navigate(constants.PREMIUM, undefined, { pop: true });
      } else {
        navigation.push(constants.PREMIUM);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const self = this;
    if (!this.props.hasFetchedSlots) {
      const obj = actions_BoostingActionCreators;
      const guildBoostSlots = obj.fetchGuildBoostSlots();
    }
    const tmp4 = self.props.shouldFetchSubscriptionPlans && !self.props.isFetchingSubscriptionPlans;
    if (tmp4) {
      const obj2 = SubscriptionPlanActionCreators;
      const premiumSubscriptionPlans = obj2.fetchPremiumSubscriptionPlans();
    }
    if (!self.props.isFetchingPaymentSources) {
      const obj3 = actions_BillingActionCreators;
      const paymentSources = obj3.fetchPaymentSources();
    }
  }
  renderPremiumGuildSubscriptions() {
    let A4UTjH;
    let format;
    let intl;
    let items;
    let items1;
    let items2;
    let obj4;
    let obj5;
    const tmp = closure_16(this.context);
    const props = this.props;
    const externalManagementMessage = props.externalManagementMessage;
    let tmp3Result = null;
    if (props.hasSlots) {
      const Fragment = react.Fragment;
      const obj = { style: tmp.subscriptionHeader, children: items1 };
      const obj2 = { style: items, variant: "body-sm/medium", color: "interactive-text-default", children: intl.string(intl3.t.GwnFO5) };
      items = [, ];
      ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [gesture(Text, obj2), , ];
      const obj3 = { style: tmp.blurb, variant: "body-sm/medium", color: "interactive-text-default", children: format(A4UTjH, obj4) };
      const Text2 = Text_Text.Text;
      const intl2 = intl3.intl;
      format = intl2.format;
      obj4 = { helpdeskArticle: obj5.getArticleURL(unpackModuleId.GUILD_SUBSCRIPTIONS) };
      A4UTjH = intl3.t.A4UTjH;
      obj5 = HelpdeskUtilsDefault;
      items1[1] = gesture(Text2, obj3);
      let tmp6Result = null != externalManagementMessage;
      const tmp5 = React3;
      const tmp7 = require;
      const tmp9 = importDefault;
      if (tmp6Result) {
        const obj6 = { style: tmp.externalManagement, variant: "body-sm/medium", color: "text-default", children: externalManagementMessage };
        tmp6Result = tmp6(tmp7(5866).Text, obj6);
      }
      const obj7 = { children: items2 };
      items1[2] = tmp6Result;
      items2 = [closure_15(tmp5, obj), gesture(tmp9(15260), {})];
      tmp3Result = tmp3(Fragment, obj7);
    }
    return tmp3Result;
  }
  render() {
    let fpDurationText;
    let fractionalState;
    let hasAvailableSlots;
    let hasFetchedSubscriptionPlans;
    let isInReverseTrial;
    let items;
    let items1;
    let premiumGroupRole;
    let tmp5;
    const self = this;
    const tmp = closure_16(this.context);
    const props = this.props;
    ({ fractionalState, isInReverseTrial } = props);
    ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
    if (premiumGroupRole === user.PremiumSubscriptionGroupRole.MEMBER) {
      const obj2 = { style: tmp.boostingUnavailablePill };
      tmp5 = gesture(BoostingUnavailablePillDefault, obj2);
    } else {
      tmp5 = null;
      if (fractionalState !== FractionalPremiumStates.NONE) {
        const obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
        tmp5 = gesture(BoostingCountDownPillDefault, obj);
      }
    }
    const obj3 = { style: tmp.scroller, children: items };
    items = [tmp5, self.renderPremiumGuildSubscriptions(), ];
    const obj4 = { style: tmp.upsellSection, children: items1 };
    items1 = [, ];
    const obj5 = { style: tmp.background };
    items1[0] = gesture(TopPattern.TopPattern, obj5);
    let tmp13Result = null;
    const tmp11 = hasOwnProperty;
    const tmp12 = React3;
    const tmp13 = gesture;
    if (hasFetchedSubscriptionPlans) {
      const obj6 = { onLearnMorePremium: self.handleLearnMorePremium, fractionalState, isInReverseTrial, hasAvailableSlots };
      tmp13Result = tmp13(GuildBoostingUpsellDefault, obj6);
    }
    items1[1] = tmp13Result;
    items[2] = closure_15(tmp12, obj4);
    return closure_15(tmp11, obj3);
  }
}
const prototype = UserSettingsPremiumGuildSubscriptions.prototype;
UserSettingsPremiumGuildSubscriptions.contextType = native.ThemeContext;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  let c2;
  let endsAt;
  let fractionalState;
  let hasFetchedSubscriptionPlans;
  let premiumTypeSubscription;
  let tmp11;
  route = route.route;
  _require = undefined;
  dependencyMap = undefined;
  let isInReverseTrial;
  let fpDurationText;
  let obj = require("useSubscriptionPlansLoaded");
  _require = obj.useSubscriptionPlansLoaded();
  let flag;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      flag = params.shouldFetchSubscriptionPlans;
    }
  }
  if (flag == null) {
    flag = true;
  }
  ({ fractionalState: c2, endsAt } = flag(8463)({ forceFetch: true }));
  flag(8463)({ forceFetch: true });
  const tmpResult = require("ReverseTrialUtils");
  isInReverseTrial = tmpResult.useIsInReverseTrial();
  const tmp4 = flag(15214);
  fpDurationText = tmp4(endsAt, tmp(15214).CountDownMessageTypes.LONG_TIME_LEFT);
  const items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
  const tmpResult6 = require("get initialized");
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(items, () => {
    let premiumGroupRole;
    let values;
    const obj = { hasFetchedSlots: GuildBoostSlotStore.hasFetched, hasSlots: Object.keys(GuildBoostSlotStore.boostSlots).length > 0, hasAvailableSlots: values.filter((isAvailable) => isAvailable.isAvailable()).length > 0, hasFetchedSubscriptionPlans, isFetchingSubscriptionPlans: SubscriptionPlanStore.isFetchingForPremiumSKUs(), isFetchingPaymentSources: BillingInfoStore.isPaymentSourceFetching, shouldFetchSubscriptionPlans: flag, fractionalState, isInReverseTrial, fpDurationText, premiumGroupRole };
    values = Object.values(GuildBoostSlotStore.boostSlots);
    premiumGroupRole = undefined;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    return obj;
  });
  const items1 = [SubscriptionStore];
  const tmpResult7 = require("get initialized");
  const stateFromStores = tmpResult7.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const tmpResult8 = require("useNavigation");
  navigation = tmpResult8.useNavigation();
  const obj2 = { navigation, externalManagementMessage: tmp11 };
  const tmpResult9 = require("PremiumManagementUtils");
  const externalManagementMessage = tmpResult9.getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  tmp11 = null;
  const tmp10 = UserSettingsPremiumGuildSubscriptions;
  const tmp9 = closure_14;
  const tmpResult10 = require("MetaQuestUtils");
  if (tmpResult10.isMetaQuest()) {
    tmp11 = externalManagementMessage;
  }
  const merged = Object.assign(stateFromStoresObject);
  return tmp9(tmp10, obj2);
};
