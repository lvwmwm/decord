// Module ID: 12311
// Function ID: 94339
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 12311 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ View: closure_9, ScrollView: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
const tmp3 = arg1(dependencyMap[6]);
({ HelpdeskArticles: closure_16, UserSettingsSections: closure_17 } = arg1(dependencyMap[12]));
const FractionalPremiumStates = arg1(dependencyMap[13]).FractionalPremiumStates;
const tmp4 = arg1(dependencyMap[12]);
({ jsx: closure_19, jsxs: closure_20 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { upsellSection: { position: "relative" }, background: { -9223372036854775808: true, 0: true } };
obj = { <string:1673945475>: "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", <string:1711008972>: true, <string:2697769059>: null, backgroundColor: arg1(dependencyMap[16]).DARK_TRANSPARENT_LIGHT_WHITE_500 };
obj.scroller = obj;
obj.subscriptionHeader = { "Null": "isArray", "Null": "accessibilityRole" };
obj.blurb = { lineHeight: 18 };
obj.blurbNotLast = { marginBottom: 8 };
obj.boostingUnavailablePill = { <string:1711008972>: "center", <string:2697769059>: "center" };
obj.externalManagement = { marginTop: 8 };
let closure_21 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (PureComponent) => {
  class UserSettingsPremiumGuildSubscriptions {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UserSettingsPremiumGuildSubscriptions);
      items1 = [...items];
      obj = closure_6(UserSettingsPremiumGuildSubscriptions);
      tmp2 = closure_5;
      if (closure_23()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      UserSettingsPremiumGuildSubscriptions = tmp2Result;
      tmp2Result.state = { isOnCooldown: false };
      tmp2Result.handleLearnMorePremium = () => {
        const navigation = tmp2Result.props.navigation;
        const routes = navigation.getState().routes;
        const found = routes.find((name) => name.name === constants.PREMIUM);
        let obj = callback(closure_2[17]);
        obj.setSection(constants.PREMIUM);
        obj = { destinationPane: constants.PREMIUM };
        const result = tmp2Result(closure_2[18]).trackUserSettingsPaneViewed(obj);
        if (null != found) {
          navigation.navigate(found);
        } else {
          navigation.push(constants.PREMIUM);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = UserSettingsPremiumGuildSubscriptions;
  callback3(UserSettingsPremiumGuildSubscriptions, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      if (!this.props.hasFetchedSlots) {
        const guildBoostSlots = UserSettingsPremiumGuildSubscriptions(closure_2[19]).fetchGuildBoostSlots();
        const obj = UserSettingsPremiumGuildSubscriptions(closure_2[19]);
      }
      if (tmp4) {
        const premiumSubscriptionPlans = UserSettingsPremiumGuildSubscriptions(closure_2[20]).fetchPremiumSubscriptionPlans();
        const obj2 = UserSettingsPremiumGuildSubscriptions(closure_2[20]);
      }
      if (!self.props.isFetchingPaymentSources) {
        const paymentSources = UserSettingsPremiumGuildSubscriptions(closure_2[21]).fetchPaymentSources();
        const obj3 = UserSettingsPremiumGuildSubscriptions(closure_2[21]);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "renderPremiumGuildSubscriptions",
    value() {
      const tmp = callback5(this.context);
      const props = this.props;
      const externalManagementMessage = props.externalManagementMessage;
      let tmp3Result = null;
      if (props.hasSlots) {
        let obj = {};
        obj = { style: tmp.subscriptionHeader };
        obj = {};
        const items = [, ];
        ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
        obj.style = items;
        const intl = UserSettingsPremiumGuildSubscriptions(closure_2[23]).intl;
        obj.children = intl.string(UserSettingsPremiumGuildSubscriptions(closure_2[23]).t.GwnFO5);
        const items1 = [callback4(UserSettingsPremiumGuildSubscriptions(closure_2[22]).Text, obj), , ];
        const obj1 = { style: tmp.blurb };
        const intl2 = UserSettingsPremiumGuildSubscriptions(closure_2[23]).intl;
        const obj2 = { helpdeskArticle: callback(closure_2[25]).getArticleURL(constants.GUILD_SUBSCRIPTIONS) };
        obj1.children = intl2.format(UserSettingsPremiumGuildSubscriptions(closure_2[23]).t.A4UTjH, obj2);
        items1[1] = callback4(UserSettingsPremiumGuildSubscriptions(closure_2[24]).TextWithIOSLinkWorkaround, obj1);
        let tmp11 = null != externalManagementMessage;
        if (tmp11) {
          const obj3 = { style: tmp.externalManagement, children: externalManagementMessage };
          tmp11 = callback4(UserSettingsPremiumGuildSubscriptions(closure_2[22]).Text, obj3);
        }
        items1[2] = tmp11;
        obj.children = items1;
        const items2 = [closure_20(closure_9, obj), callback4(callback(closure_2[26]), {})];
        obj.children = items2;
        tmp3Result = tmp3(React.Fragment, obj);
        const obj6 = callback(closure_2[25]);
        const tmp5 = closure_9;
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
      const tmp = callback5(this.context);
      const props = this.props;
      ({ fractionalState, isInReverseTrial } = props);
      ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
      if (premiumGroupRole === UserSettingsPremiumGuildSubscriptions(closure_2[27]).PremiumSubscriptionGroupRole.MEMBER) {
        let obj = { style: tmp.boostingUnavailablePill };
        let tmp3 = callback4(callback(closure_2[28]), obj);
      } else {
        tmp3 = null;
        if (fractionalState !== constants2.NONE) {
          obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
          tmp3 = callback4(callback(closure_2[29]), obj);
        }
      }
      obj = { style: tmp.scroller };
      const items = [tmp3, self.renderPremiumGuildSubscriptions(), ];
      const obj1 = { style: tmp.upsellSection };
      const items1 = [callback4(UserSettingsPremiumGuildSubscriptions(closure_2[30]).TopPattern, { style: tmp.background }), ];
      let tmp13 = null;
      if (hasFetchedSubscriptionPlans) {
        const obj3 = { onLearnMorePremium: self.handleLearnMorePremium, fractionalState, isInReverseTrial, hasAvailableSlots };
        tmp13 = callback4(callback(closure_2[31]), obj3);
      }
      items1[1] = tmp13;
      obj1.children = items1;
      items[2] = closure_20(closure_9, obj1);
      obj.children = items;
      return closure_20(closure_10, obj);
    }
  };
  items[2] = obj;
  return callback2(UserSettingsPremiumGuildSubscriptions, items);
}(importAllResult.PureComponent);
tmp6.contextType = arg1(dependencyMap[32]).ThemeContext;
const tmp5 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  route = route.route;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let closure_4;
  let obj = callback(dependencyMap[33]);
  const callback = obj.useSubscriptionPlansLoaded();
  let prop;
  if (null != route) {
    const params = route.params;
    if (null != params) {
      prop = params.shouldFetchSubscriptionPlans;
    }
  }
  importDefault = null == prop || prop;
  const tmp2 = importDefault(dependencyMap[34])({ forceFetch: true });
  dependencyMap = tmp2.fractionalState;
  closure_3 = callback(dependencyMap[35]).useIsInReverseTrial();
  const obj2 = callback(dependencyMap[35]);
  closure_4 = importDefault(dependencyMap[36])(tmp2.endsAt, callback(dependencyMap[36]).CountDownMessageTypes.LONG_TIME_LEFT);
  const tmp3 = importDefault(dependencyMap[36]);
  const items = [closure_13, closure_12, closure_14, closure_11];
  const stateFromStoresObject = callback(dependencyMap[37]).useStateFromStoresObject(items, () => {
    const obj = { hasFetchedSlots: closure_13.hasFetched, hasSlots: Object.keys(closure_13.boostSlots).length > 0 };
    const values = Object.values(closure_13.boostSlots);
    obj.hasAvailableSlots = values.filter((isAvailable) => isAvailable.isAvailable()).length > 0;
    obj.hasFetchedSubscriptionPlans = closure_0;
    obj.isFetchingSubscriptionPlans = fetchingForPremiumSKUs.isFetchingForPremiumSKUs();
    obj.isFetchingPaymentSources = obj.isPaymentSourceFetching;
    obj.shouldFetchSubscriptionPlans = closure_1;
    obj.fractionalState = fractionalState;
    obj.isInReverseTrial = closure_3;
    obj.fpDurationText = closure_4;
    const currentUser = currentUser.getCurrentUser();
    let premiumGroupRole;
    if (null != currentUser) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    obj.premiumGroupRole = premiumGroupRole;
    return obj;
  });
  const obj3 = callback(dependencyMap[37]);
  const items1 = [closure_15];
  const stateFromStores = callback(dependencyMap[37]).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj4 = callback(dependencyMap[37]);
  const navigation = callback(dependencyMap[38]).useNavigation();
  const obj5 = callback(dependencyMap[38]);
  obj = { navigation };
  const externalManagementMessage = callback(dependencyMap[39]).getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  const obj6 = callback(dependencyMap[39]);
  const tmp8 = closure_19;
  const tmp9 = tmp6;
  let tmp10 = null;
  if (obj8.isMetaQuest()) {
    tmp10 = externalManagementMessage;
  }
  obj.externalManagementMessage = tmp10;
  const merged = Object.assign(stateFromStoresObject);
  return tmp8(tmp9, obj);
};
