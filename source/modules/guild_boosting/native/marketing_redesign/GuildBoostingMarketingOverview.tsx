// Module ID: 5798
// Function ID: 49554
// Name: GuildBoostingMarketingOverview
// Dependencies: [57, 31, 27, 1838, 1849, 653, 33, 4130, 5799, 566, 1456, 5464, 5450, 6636, 1867, 675, 686, 5638, 4451, 6639, 12508, 12515, 12520, 12530, 12535, 12539, 2]
// Exports: default

// Module 5798 (GuildBoostingMarketingOverview)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, AnalyticsPages: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { paddingBottom: 24 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx");

export default function GuildBoostingMarketingOverview(guildId) {
  let ScrollView;
  let closure_6;
  let _isNativeReflectConstruct;
  let tmp7;
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  let obj = guildId(stateFromStores[8]);
  const giftCardMobileConsumptionHalfsheet = obj.useGiftCardMobileConsumptionHalfsheet();
  if (null != guildBoostSlots) {
    const first = guildBoostSlots[0];
  }
  let obj1 = guildId(stateFromStores[9]);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  let obj2 = guildId(stateFromStores[10]);
  const navigation = obj2.useNavigation();
  const analyticsLocations = guildBoostSlots(stateFromStores[11])().analyticsLocations;
  let tmp = callback3();
  [tmp7, ScrollView] = navigation(analyticsLocations.useState(false), 2);
  const tmp6 = navigation(analyticsLocations.useState(false), 2);
  [closure_6, _isNativeReflectConstruct] = navigation(analyticsLocations.useState(0), 2);
  let closure_8 = analyticsLocations.useRef(false);
  const tmp9 = guildBoostSlots(stateFromStores[12])(() => Date.now());
  let closure_9 = tmp9;
  const tmp10 = guildBoostSlots(stateFromStores[13])({ forceFetch: true });
  let obj3 = guildId(stateFromStores[9]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_7.getCurrentUser());
  if (null != stateFromStores1) {
    let UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = guildId(stateFromStores[14]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items2 = [navigation, guildBoostSlots, ];
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  items2[2] = name;
  const layoutEffect = analyticsLocations.useLayoutEffect(() => {
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
  const effect = analyticsLocations.useEffect(() => () => {
    let obj = guildBoostSlots(stateFromStores[15]);
    obj = { type: constants2.PREMIUM_GUILD_USER_MODAL, location_stack: outer1_4, guild_id: outer1_0, duration_open_ms: Date.now() - outer1_9 };
    obj.track(constants.MODAL_DISMISSED, obj);
  }, items3);
  const effect1 = analyticsLocations.useEffect(() => {
    guildBoostSlots(stateFromStores[16]).wait(() => {
      const premiumSubscriptionPlans = guildId(stateFromStores[17]).fetchPremiumSubscriptionPlans();
      const obj = guildId(stateFromStores[17]);
      const paymentSources = guildId(stateFromStores[18]).fetchPaymentSources();
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
          return callback2(nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height);
        },
      fractionalPremiumInfo: tmp10,
      premiumGroupRole: UNSPECIFIED
    };
    const items4 = [callback(guildBoostSlots(stateFromStores[20]), obj1), , , , , ];
    obj2 = { guild: stateFromStores };
    items4[1] = callback(guildBoostSlots(stateFromStores[21]), obj2);
    obj3 = { guild: stateFromStores };
    items4[2] = callback(guildBoostSlots(stateFromStores[22]), obj3);
    items4[3] = callback(guildBoostSlots(stateFromStores[23]), {});
    items4[4] = callback(guildBoostSlots(stateFromStores[24]), {});
    items4[5] = callback(guildBoostSlots(stateFromStores[25]), {});
    obj.children = items4;
    const items5 = [callback2(ScrollView, obj), ];
    const obj4 = { guild: stateFromStores, previousGuildSubscriptionSlot: first, isVisible: tmp7, fractionalPremiumState: tmp10.fractionalState, premiumGroupRole: UNSPECIFIED };
    items5[1] = callback(guildBoostSlots(stateFromStores[19]), obj4);
    obj.children = items5;
    tmp19 = callback2(closure_12, obj);
  }
  return tmp19;
};
