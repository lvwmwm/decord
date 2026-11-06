// Module ID: 7660
// Function ID: 7661
// Name: GuildBoostingMarketingOverview
// Dependencies: [32, 19, 17, 5041, 1385, 1072, 21, 5170, 7661, 504, 1499, 7410, 5769, 7676, 1398, 7681, 1252, 7518, 6614, 7682, 15700, 15707, 15712, 1652, 15722, 15727, 15731, 2]
// Exports: default

// Module 7660 (GuildBoostingMarketingOverview)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GuildBoostingMarketingPersistentCta from "GuildBoostingMarketingPersistentCta" /* 7682 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let constants, navigation;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const ScrollView = react_native.ScrollView;
({ AnalyticEvents: metroImportAll, AnalyticsPages: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ wrapper: { paddingBottom: 24 } });
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx");

export default function GuildBoostingMarketingOverview(guildId) {
  let UNSPECIFIED;
  let currentUser;
  let first;
  let items4;
  let items5;
  let items6;
  let stateFromStores;
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  let tmp2 = guildId;
  let tmp3 = stateFromStores;
  let tmp = closure_13();
  let obj = guildId(stateFromStores[8]);
  const giftCardMobileConsumptionHalfsheet = obj.useGiftCardMobileConsumptionHalfsheet();
  if (guildBoostSlots != null) {
    first = guildBoostSlots[0];
  }
  const items = [GuildStore];
  const tmp2Result = tmp2(tmp3[9]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp2Result4 = tmp2(tmp3[10]);
  navigation = tmp2Result4.useNavigation();
  const analyticsLocations = guildBoostSlots(tmp3[11])().analyticsLocations;
  const tmp9 = navigation(analyticsLocations.useState(false), 2);
  let closure_5 = tmp9[1];
  const first1 = tmp9[0];
  [GuildStore, UserStore] = navigation(analyticsLocations.useState(0), 2);
  const tmp11 = navigation(analyticsLocations.useState(0), 2);
  const ref = analyticsLocations.useRef(false);
  const tmp12 = guildBoostSlots(tmp3[12])(() => Date.now());
  constants = tmp12;
  const tmp13 = guildBoostSlots(tmp3[13])({ forceFetch: true });
  const items1 = [UserStore];
  const tmp2Result5 = tmp2(tmp3[9]);
  const stateFromStores1 = tmp2Result5.useStateFromStores(items1, () => UserStore.getCurrentUser());
  if (null != stateFromStores1) {
    UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp2(tmp3[14]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const tmp2Result6 = tmp2(tmp3[15]);
  const triggeredLayoutTransition = tmp2Result6.useTriggeredLayoutTransition();
  const layout = triggeredLayoutTransition.layout;
  const items2 = [navigation, guildBoostSlots, ];
  let name;
  const trigger = triggeredLayoutTransition.trigger;
  const useLayoutEffect = obj4.useLayoutEffect;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items2[2] = name;
  const layoutEffect = useLayoutEffect(() => {
    let str = "";
    const setOptions = navigation.setOptions;
    const tmp = null != guildBoostSlots && guildBoostSlots.length > 0;
    if (!tmp) {
      let str2;
      if (stateFromStores != null) {
        str2 = stateFromStores.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      str = str2;
    }
    setOptions({ title: str });
  }, items2);
  const items3 = [guildId, analyticsLocations, tmp12];
  const effect = obj4.useEffect(() => {
    let guild_id;
    let location_stack;
    return () => {
      const obj = guildBoostSlots(stateFromStores[16]);
      const obj2 = { type: constants2.PREMIUM_GUILD_USER_MODAL, location_stack, guild_id, duration_open_ms: Date.now() - closure_1_9 };
      obj.track(constants.MODAL_DISMISSED, obj2);
    };
  }, items3);
  const effect1 = obj4.useEffect(() => {
    const obj = guildId(stateFromStores[17]);
    const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans();
    const obj2 = guildId(stateFromStores[18]);
    const paymentSources = obj2.fetchPaymentSources();
  }, []);
  let tmp20 = null;
  if (null != stateFromStores) {
    let obj2 = { children: items6 };
    const obj3 = {
      contentContainerStyle: tmp.wrapper,
      onScroll(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const contentOffset = nativeEvent.contentOffset;
          const current = ref.current;
          let tmp3 = !current;
          const tmp2 = ref;
          if (!current) {
            const sum = nativeEvent.layoutMeasurement.height + contentOffset.y;
            tmp3 = sum >= tmp.height - GuildBoostingMarketingPersistentCta.VISIBILITY_OFFSET;
          }
          if (tmp3) {
            const obj2 = { type: constants.PREMIUM_GUILD_USER_MODAL, location_stack: analyticsLocations, guild_id: stateFromStores.id };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
            tmp2.current = true;
          }
          closure_5(contentOffset.y >= GuildStore);
        },
      scrollEventThrottle: 16,
      children: items4
    };
    const obj5 = {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: first,
      onLayout(nativeEvent) {
          return UserStore(nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height);
        },
      fractionalPremiumInfo: tmp13,
      premiumGroupRole: UNSPECIFIED
    };
    items4 = [closure_10(tmp8(tmp3[20]), obj5), , , ];
    const obj6 = { guild: stateFromStores };
    items4[1] = closure_10(guildBoostSlots(tmp3[21]), obj6);
    const obj7 = { guild: stateFromStores, layout, onExpandedChange: trigger };
    items4[2] = closure_10(guildBoostSlots(tmp3[22]), obj7);
    const obj8 = { layout, children: items5 };
    const View = tmp8(tmp3[23]).View;
    items5 = [closure_10(tmp8(tmp3[24]), {}), closure_10(tmp8(tmp3[25]), {}), closure_10(tmp8(tmp3[26]), {})];
    items4[3] = closure_11(View, obj8);
    items6 = [closure_11(closure_5, obj3), ];
    const obj9 = { guild: stateFromStores, previousGuildSubscriptionSlot: first, isVisible: first1, fractionalPremiumState: tmp13.fractionalState, premiumGroupRole: UNSPECIFIED };
    items6[1] = closure_10(guildBoostSlots(tmp3[19]), obj9);
    tmp20 = closure_11(closure_12, obj2);
  }
  return tmp20;
};
