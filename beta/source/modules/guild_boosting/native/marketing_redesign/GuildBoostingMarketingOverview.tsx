// Module ID: 6802
// Function ID: 6803
// Name: GuildBoostingMarketingOverview
// Dependencies: [32, 19, 17, 2067, 1372, 1074, 21, 4836, 6803, 504, 1485, 6583, 5910, 6813, 1380, 1241, 573, 6675, 5174, 6821, 13115, 13122, 13127, 13137, 13142, 13146, 2]
// Exports: default

// Module 6802 (GuildBoostingMarketingOverview)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildBoostingMarketingPersistentCta from "GuildBoostingMarketingPersistentCta" /* 6821 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  const tmp2Result3 = tmp2(tmp3[10]);
  navigation = tmp2Result3.useNavigation();
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
  const tmp2Result4 = tmp2(tmp3[9]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(items1, () => UserStore.getCurrentUser());
  if (null != stateFromStores1) {
    UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp2(tmp3[14]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items2 = [navigation, guildBoostSlots, ];
  let name;
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
      const obj = guildBoostSlots(stateFromStores[15]);
      const obj2 = { type: constants2.PREMIUM_GUILD_USER_MODAL, location_stack, guild_id, duration_open_ms: Date.now() - closure_1_9 };
      obj.track(constants.MODAL_DISMISSED, obj2);
    };
  }, items3);
  const effect1 = obj4.useEffect(() => {
    let obj = guildBoostSlots(stateFromStores[16]);
    obj.wait(() => {
      const obj = guildId(stateFromStores[17]);
      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans();
      const obj2 = guildId(stateFromStores[18]);
      const paymentSources = obj2.fetchPaymentSources();
    });
  }, []);
  let tmp19 = null;
  if (null != stateFromStores) {
    let obj2 = { children: items5 };
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
    items4 = [closure_10(tmp8(tmp3[20]), obj5), , , , , ];
    const obj6 = { guild: stateFromStores };
    items4[1] = closure_10(guildBoostSlots(tmp3[21]), obj6);
    const obj7 = { guild: stateFromStores };
    items4[2] = closure_10(guildBoostSlots(tmp3[22]), obj7);
    items4[3] = closure_10(guildBoostSlots(tmp3[23]), {});
    items4[4] = closure_10(guildBoostSlots(tmp3[24]), {});
    items4[5] = closure_10(guildBoostSlots(tmp3[25]), {});
    items5 = [closure_11(closure_5, obj3), ];
    const obj8 = { guild: stateFromStores, previousGuildSubscriptionSlot: first, isVisible: first1, fractionalPremiumState: tmp13.fractionalState, premiumGroupRole: UNSPECIFIED };
    items5[1] = closure_10(guildBoostSlots(tmp3[19]), obj8);
    tmp19 = closure_11(closure_12, obj2);
  }
  return tmp19;
};
