// Module ID: 5793
// Function ID: 49514
// Name: GuildBoostingMarketingOverview
// Dependencies: []
// Exports: default

// Module 5793 (GuildBoostingMarketingOverview)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_8, AnalyticsPages: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ wrapper: { paddingBottom: 24 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx");

export default function GuildBoostingMarketingOverview(guildId) {
  let tmp7;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  const importDefault = guildBoostSlots;
  let obj = arg1(dependencyMap[8]);
  const giftCardMobileConsumptionHalfsheet = obj.useGiftCardMobileConsumptionHalfsheet();
  if (null != guildBoostSlots) {
    const first = guildBoostSlots[0];
  }
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => guild.getGuild(guildId));
  const dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[10]);
  const navigation = obj2.useNavigation();
  const callback = navigation;
  const analyticsLocations = importDefault(dependencyMap[11])().analyticsLocations;
  const React = analyticsLocations;
  const tmp = callback4();
  [tmp7, closure_5] = callback(React.useState(false), 2);
  const tmp6 = callback(React.useState(false), 2);
  [closure_6, closure_7] = callback(React.useState(0), 2);
  let closure_8 = React.useRef(false);
  const tmp9 = importDefault(dependencyMap[12])(() => Date.now());
  const tmp10 = importDefault(dependencyMap[13])({ forceFetch: true });
  let obj3 = arg1(dependencyMap[9]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
  if (null != stateFromStores1) {
    let UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = arg1(dependencyMap[14]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items2 = [navigation, guildBoostSlots, ];
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  items2[2] = name;
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp = null != guildBoostSlots;
    if (tmp) {
      tmp = guildBoostSlots.length > 0;
    }
    const obj = {};
    let str = "";
    let str2 = "";
    if (!tmp) {
      let name;
      if (null != stateFromStores) {
        name = stateFromStores.name;
      }
      if (null != name) {
        str = name;
      }
      str2 = str;
    }
    obj.title = str2;
    navigation.setOptions(obj);
  }, items2);
  const items3 = [guildId, analyticsLocations, tmp9];
  const effect = React.useEffect(() => () => {
    let obj = callback(closure_2[15]);
    obj = { type: constants2.PREMIUM_GUILD_USER_MODAL, location_stack: closure_4, guild_id: closure_0, duration_open_ms: Date.now() - constants2 };
    obj.track(constants.MODAL_DISMISSED, obj);
  }, items3);
  const effect1 = React.useEffect(() => {
    guildBoostSlots(stateFromStores[16]).wait(() => {
      const premiumSubscriptionPlans = callback(closure_2[17]).fetchPremiumSubscriptionPlans();
      const obj = callback(closure_2[17]);
      const paymentSources = callback(closure_2[18]).fetchPaymentSources();
    });
  }, []);
  let tmp19 = null;
  if (null != stateFromStores) {
    obj = {};
    obj = {
      contentContainerStyle: tmp.wrapper,
      onScroll(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const contentOffset = nativeEvent.contentOffset;
          let tmp2 = !ref.current;
          if (tmp2) {
            const sum = nativeEvent.layoutMeasurement.height + contentOffset.y;
            tmp2 = sum >= tmp.height - guildId(stateFromStores[19]).VISIBILITY_OFFSET;
          }
          if (tmp2) {
            let obj = guildBoostSlots(stateFromStores[15]);
            obj = { type: tmp9.PREMIUM_GUILD_USER_MODAL, location_stack: analyticsLocations, guild_id: stateFromStores.id };
            obj.track(ref.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
            ref.current = true;
          }
          callback(contentOffset.y >= closure_6);
        },
      scrollEventThrottle: 16
    };
    obj1 = {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: first,
      onLayout(nativeEvent) {
          return currentUser(nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height);
        },
      fractionalPremiumInfo: tmp10,
      premiumGroupRole: UNSPECIFIED
    };
    const items4 = [callback2(importDefault(dependencyMap[20]), obj1), , , , , ];
    obj2 = { guild: stateFromStores };
    items4[1] = callback2(importDefault(dependencyMap[21]), obj2);
    obj3 = { guild: stateFromStores };
    items4[2] = callback2(importDefault(dependencyMap[22]), obj3);
    items4[3] = callback2(importDefault(dependencyMap[23]), {});
    items4[4] = callback2(importDefault(dependencyMap[24]), {});
    items4[5] = callback2(importDefault(dependencyMap[25]), {});
    obj.children = items4;
    const items5 = [callback3(ScrollView, obj), ];
    const obj4 = { guild: stateFromStores, previousGuildSubscriptionSlot: first, isVisible: tmp7, fractionalPremiumState: tmp10.fractionalState, premiumGroupRole: UNSPECIFIED };
    items5[1] = callback2(importDefault(dependencyMap[19]), obj4);
    obj.children = items5;
    tmp19 = callback3(closure_12, obj);
  }
  return tmp19;
};
