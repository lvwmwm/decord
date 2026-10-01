// Module ID: 6822
// Function ID: 6823
// Name: GuildBoostingSubscribeButton
// Dependencies: [5, 19, 17, 4729, 1074, 5748, 1374, 21, 6823, 5039, 5746, 13114, 1485, 6583, 563, 1380, 12034, 5281, 1115, 5409, 2]
// Exports: default

// Module 6822 (GuildBoostingSubscribeButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 5748 */;
import GuildBoostPurchasingUtils from "GuildBoostPurchasingUtils" /* 6823 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4729 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_3, navigation;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let location = function _handleBoostPress() {
  let obj = _asyncToGenerator(async (analyticsLocations, guildId, section) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      let obj5;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              const obj4 = {
                source: obj5,
                analyticsLocations,
                guildId,
                onBack() {
                          const arr = guildId(section[9]);
                          return arr.pop();
                        }
              };
              c4 = 1;
              c5 = 1;
              obj5 = { page: constants3.PREMIUM_GUILD_USER_MODAL, section, object: constants.BUTTON_CTA, objectType: constants2.BUY };
              const obj7 = { value: obj6.launchGuildBoostFlowOrAlert(obj4), done: false };
              obj6 = GuildBoostPurchasingUtils;
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj = closure_131_0(closure_131_2[10]);
            obj.closeApplyBoostModal();
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c5 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
let View = react_native.View;
({ AnalyticsObjects: metroImportDefault, AnalyticsObjectTypes: metroImportAll, AnalyticsPages: c9, NOOP: c10 } = Constants);
let closure_11 = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
let jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default function GuildBoostingSubscribeButton(guild) {
  let Button;
  let closure_13;
  let fractionalPremiumState;
  let handleMobileWebRedirectCheckout;
  let obj5;
  let premiumGroupRole;
  let stringResult;
  let styles;
  let tmp12Result;
  let useShortenedCTA;
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  let tmp2 = analyticsSection;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  let tmp = previousGuildSubscriptionSlot;
  let tmp3 = previousGuildSubscriptionSlot(analyticsSection[11])();
  const boostSlots = tmp3;
  const tmp4 = guild;
  const obj = guild(analyticsSection[12]);
  navigation = obj.useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[13])().analyticsLocations;
  let obj2 = guild(analyticsSection[14]);
  let items = [boostSlots];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const keys = Object.keys(boostSlots.boostSlots);
    return keys.some((item) => {
      const tmp = null == boostSlots.boostSlots[item].premiumGuildSubscription && !boostSlots.boostSlots[item].isOnCooldown();
      return tmp;
    });
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = intent.useCallback((guildId, arg1) => {
    let tmp2;
    if (null != onAvailableSlotPress) {
      return tmp(guildId, arg1);
    } else {
      const obj2 = { guildId, guildBoostSlots: tmp2, location, intent, onResult: View };
      tmp2 = undefined;
      const push = navigation.push;
      const CONFIRMATION = shouldUseMobileWebRedirectCheckout.CONFIRMATION;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      location = { page: stateFromStores.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: metroImportDefault.BUTTON_CTA, objectType: metroImportAll.BUY };
      push(CONFIRMATION, obj2);
    }
  }, items1);
  let tmp8 = !stateFromStores;
  const obj3 = intent;
  if (tmp8) {
    let tmp9 = handleMobileWebRedirectCheckout;
    tmp8 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[15]).PremiumSubscriptionGroupRole.MEMBER;
    const tmp10 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[15]).PremiumSubscriptionGroupRole.MEMBER;
  }
  const tmp11 = tmp(tmp2[16])("guild_boost_subscribe_button");
  const shouldUseMobileWebRedirectCheckout = tmp11.shouldUseMobileWebRedirectCheckout;
  handleMobileWebRedirectCheckout = tmp11.handleMobileWebRedirectCheckout;
  const items2 = [tmp3, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, guild.id, analyticsSection, stateFromStores, previousGuildSubscriptionSlot, analyticsLocations, callback];
  jsx = obj3.useCallback(() => {
    let tmp9;
    function handleBoostPress() {
      return closure_1_14(...arguments);
    }
    const tmp = boostSlots;
    if (tmp) {
      tmp9 = authStore;
    } else {
      const tmp2 = stateFromStores;
      if (tmp2) {
        tmp9 = callback(guild.id, previousGuildSubscriptionSlot);
      } else {
        const tmp3 = shouldUseMobileWebRedirectCheckout;
        if (tmp3) {
          if (null != guild.id) {
            tmp9 = handleMobileWebRedirectCheckout(analyticsLocations, tmp4.id);
          }
        }
        tmp9 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
      }
    }
    return tmp9;
  }, items2);
  const obj4 = { style: styles, children: jsx(Button, obj5) };
  obj5 = {
    loading: tmp3,
    variant: "primary",
    onPress() {
      return closure_13();
    },
    disabled: tmp8,
    text: stringResult,
    icon: tmp12Result
  };
  Button = tmp4(tmp2[17]).Button;
  const intl = tmp4(tmp2[18]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[18]).t;
  const tmp13 = View;
  if (useShortenedCTA) {
    stringResult = string(t.Uj0md3);
  } else {
    stringResult = string(t.gKmQ1G);
  }
  tmp12Result = undefined;
  if (tmp8) {
    tmp12Result = tmp12(tmp4(tmp2[19]).LockIcon, { size: "xs", color: "white" });
  }
  return jsx(tmp13, obj4);
};
