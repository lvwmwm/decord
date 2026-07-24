// Module ID: 12483
// Function ID: 96841
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1849, 3778, 4023, 3781, 3782, 653, 1851, 33, 4130, 4973, 7375, 5793, 4026, 5638, 4451, 4126, 1212, 1920, 12484, 1867, 12498, 12500, 12502, 12506, 3842, 12404, 6636, 7835, 12444, 566, 1456, 6642, 1553, 2]
// Exports: default

// Module 12483 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import dispatcher from "dispatcher";
import getSanitizedRestrictedGuilds from "getSanitizedRestrictedGuilds";
import importAllResult from "ManaContext";
import get_ActivityIndicator from "handlePress";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "calculateFractionalPremiumInfo";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_9, ScrollView: closure_10 } = get_ActivityIndicator);
({ HelpdeskArticles: closure_16, UserSettingsSections: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
_createForOfIteratorHelperLoose = { upsellSection: { position: "relative" }, background: { position: "absolute", width: "100%" } };
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("result").DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
_createForOfIteratorHelperLoose.scroller = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subscriptionHeader = { paddingHorizontal: 16, paddingBottom: 32 };
_createForOfIteratorHelperLoose.blurb = { lineHeight: 18 };
_createForOfIteratorHelperLoose.blurbNotLast = { marginBottom: 8 };
_createForOfIteratorHelperLoose.boostingUnavailablePill = { marginHorizontal: 16, alignContent: "center" };
_createForOfIteratorHelperLoose.externalManagement = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((PureComponent) => {
  class UserSettingsPremiumGuildSubscriptions {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_23()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { isOnCooldown: false };
      tmp2Result.handleLearnMorePremium = () => {
        const navigation = tmp2Result.props.navigation;
        const routes = navigation.getState().routes;
        const found = routes.find((name) => name.name === outer3_17.PREMIUM);
        let obj = outer2_1(outer2_2[17]);
        obj.setSection(outer2_17.PREMIUM);
        obj = { destinationPane: outer2_17.PREMIUM };
        const result = UserSettingsPremiumGuildSubscriptions(outer2_2[18]).trackUserSettingsPaneViewed(obj);
        if (null != found) {
          navigation.navigate(found);
        } else {
          navigation.push(outer2_17.PREMIUM);
        }
      };
      return tmp2Result;
    }
  }
  callback2(UserSettingsPremiumGuildSubscriptions, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      if (!this.props.hasFetchedSlots) {
        const guildBoostSlots = UserSettingsPremiumGuildSubscriptions(outer1_2[19]).fetchGuildBoostSlots();
        const obj = UserSettingsPremiumGuildSubscriptions(outer1_2[19]);
      }
      if (tmp4) {
        const premiumSubscriptionPlans = UserSettingsPremiumGuildSubscriptions(outer1_2[20]).fetchPremiumSubscriptionPlans();
        const obj2 = UserSettingsPremiumGuildSubscriptions(outer1_2[20]);
      }
      if (!self.props.isFetchingPaymentSources) {
        const paymentSources = UserSettingsPremiumGuildSubscriptions(outer1_2[21]).fetchPaymentSources();
        const obj3 = UserSettingsPremiumGuildSubscriptions(outer1_2[21]);
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "renderPremiumGuildSubscriptions",
    value() {
      const tmp = outer1_21(this.context);
      const props = this.props;
      const externalManagementMessage = props.externalManagementMessage;
      let tmp3Result = null;
      if (props.hasSlots) {
        let obj = {};
        obj = { style: tmp.subscriptionHeader };
        obj = { style: null, variant: "text-sm/medium", color: "interactive-text-default" };
        const items = [, ];
        ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
        obj.style = items;
        const intl = UserSettingsPremiumGuildSubscriptions(outer1_2[23]).intl;
        obj.children = intl.string(UserSettingsPremiumGuildSubscriptions(outer1_2[23]).t.GwnFO5);
        const items1 = [outer1_19(UserSettingsPremiumGuildSubscriptions(outer1_2[22]).Text, obj), , ];
        const obj1 = { style: tmp.blurb, variant: "text-sm/medium", color: "interactive-text-default" };
        const intl2 = UserSettingsPremiumGuildSubscriptions(outer1_2[23]).intl;
        const obj2 = { helpdeskArticle: outer1_1(outer1_2[24]).getArticleURL(outer1_16.GUILD_SUBSCRIPTIONS) };
        obj1.children = intl2.format(UserSettingsPremiumGuildSubscriptions(outer1_2[23]).t.A4UTjH, obj2);
        items1[1] = outer1_19(UserSettingsPremiumGuildSubscriptions(outer1_2[22]).Text, obj1);
        let tmp11 = null != externalManagementMessage;
        if (tmp11) {
          const obj3 = { style: tmp.externalManagement, variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
          tmp11 = outer1_19(UserSettingsPremiumGuildSubscriptions(outer1_2[22]).Text, obj3);
        }
        items1[2] = tmp11;
        obj.children = items1;
        const items2 = [outer1_20(outer1_9, obj), outer1_19(outer1_1(outer1_2[25]), {})];
        obj.children = items2;
        tmp3Result = tmp3(outer1_8.Fragment, obj);
        const obj6 = outer1_1(outer1_2[24]);
        const tmp5 = outer1_9;
      }
      return tmp3Result;
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      let fpDurationText;
      let fractionalState;
      let hasAvailableSlots;
      let hasFetchedSubscriptionPlans;
      let isInReverseTrial;
      let premiumGroupRole;
      const self = this;
      const tmp = outer1_21(this.context);
      const props = this.props;
      ({ fractionalState, isInReverseTrial } = props);
      ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
      if (premiumGroupRole === UserSettingsPremiumGuildSubscriptions(outer1_2[26]).PremiumSubscriptionGroupRole.MEMBER) {
        let obj = { style: tmp.boostingUnavailablePill };
        let tmp3 = outer1_19(outer1_1(outer1_2[27]), obj);
      } else {
        tmp3 = null;
        if (fractionalState !== outer1_18.NONE) {
          obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
          tmp3 = outer1_19(outer1_1(outer1_2[28]), obj);
        }
      }
      obj = { style: tmp.scroller };
      const items = [tmp3, self.renderPremiumGuildSubscriptions(), ];
      const obj1 = { style: tmp.upsellSection };
      const items1 = [outer1_19(UserSettingsPremiumGuildSubscriptions(outer1_2[29]).TopPattern, { style: tmp.background }), ];
      let tmp13 = null;
      if (hasFetchedSubscriptionPlans) {
        const obj3 = { onLearnMorePremium: self.handleLearnMorePremium, fractionalState, isInReverseTrial, hasAvailableSlots };
        tmp13 = outer1_19(outer1_1(outer1_2[30]), obj3);
      }
      items1[1] = tmp13;
      obj1.children = items1;
      items[2] = outer1_20(outer1_9, obj1);
      obj.children = items;
      return outer1_20(outer1_10, obj);
    }
  };
  items[2] = obj;
  return callback(UserSettingsPremiumGuildSubscriptions, items);
})(importAllResult.PureComponent);
let closure_22 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  route = route.route;
  let importDefault;
  let fractionalState;
  let getActivityIndicator;
  let _isNativeReflectConstruct;
  let obj = _require(fractionalState[32]);
  _require = obj.useSubscriptionPlansLoaded();
  let prop;
  if (null != route) {
    const params = route.params;
    if (null != params) {
      prop = params.shouldFetchSubscriptionPlans;
    }
  }
  importDefault = null == prop || prop;
  const tmp2 = importDefault(fractionalState[33])({ forceFetch: true });
  fractionalState = tmp2.fractionalState;
  getActivityIndicator = _require(fractionalState[34]).useIsInReverseTrial();
  const obj2 = _require(fractionalState[34]);
  _isNativeReflectConstruct = importDefault(fractionalState[35])(tmp2.endsAt, _require(fractionalState[35]).CountDownMessageTypes.LONG_TIME_LEFT);
  const tmp3 = importDefault(fractionalState[35]);
  const items = [closure_13, closure_12, closure_14, closure_11];
  const stateFromStoresObject = _require(fractionalState[36]).useStateFromStoresObject(items, () => {
    const obj = { hasFetchedSlots: outer1_13.hasFetched, hasSlots: Object.keys(outer1_13.boostSlots).length > 0 };
    const values = Object.values(outer1_13.boostSlots);
    obj.hasAvailableSlots = values.filter((isAvailable) => isAvailable.isAvailable()).length > 0;
    obj.hasFetchedSubscriptionPlans = closure_0;
    obj.isFetchingSubscriptionPlans = outer1_14.isFetchingForPremiumSKUs();
    obj.isFetchingPaymentSources = outer1_12.isPaymentSourceFetching;
    obj.shouldFetchSubscriptionPlans = closure_1;
    obj.fractionalState = fractionalState;
    obj.isInReverseTrial = getActivityIndicator;
    obj.fpDurationText = _isNativeReflectConstruct;
    const currentUser = outer1_11.getCurrentUser();
    let premiumGroupRole;
    if (null != currentUser) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    obj.premiumGroupRole = premiumGroupRole;
    return obj;
  });
  const obj3 = _require(fractionalState[36]);
  const items1 = [closure_15];
  const stateFromStores = _require(fractionalState[36]).useStateFromStores(items1, () => outer1_15.getPremiumTypeSubscription());
  const obj4 = _require(fractionalState[36]);
  const navigation = _require(fractionalState[37]).useNavigation();
  const obj5 = _require(fractionalState[37]);
  obj = { navigation };
  const externalManagementMessage = _require(fractionalState[38]).getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  const obj6 = _require(fractionalState[38]);
  const tmp8 = closure_19;
  const tmp9 = closure_22;
  let tmp10 = null;
  if (obj8.isMetaQuest()) {
    tmp10 = externalManagementMessage;
  }
  obj.externalManagementMessage = tmp10;
  const merged = Object.assign(stateFromStoresObject);
  return tmp8(tmp9, obj);
};
