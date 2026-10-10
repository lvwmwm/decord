// Module ID: 14192
// Function ID: 14193
// Name: subscriptionSettingsDeepLink
// Dependencies: [5, 4775, 1085, 7093, 14193, 5056, 1126, 1265, 5724, 2]
// Exports: openSubscriptionSettingsFromDeepLink

// Module 14192 (subscriptionSettingsDeepLink)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5724 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_0;

let hasOwnProperty;
let metroRequire;
function openNitroHome() {
  obj = openUserSettings;
  const obj2 = { screen: metroRequire.PREMIUM };
  obj.openUserSettings(obj2);
}
function openNitroManage() {
  obj = openUserSettings;
  const obj2 = { screen: metroRequire.PREMIUM_MANAGE_PLAN };
  obj.openUserSettings(obj2);
}
function openGuildManage() {
  obj = openUserSettings;
  const obj2 = { screen: metroRequire.GUILD_ROLE_SUBSCRIPTIONS };
  obj.openUserSettings(obj2);
}
function trackDeepLinkOpened(arg0) {
  let tmp2;
  const track = AnalyticsUtilsDefault.track;
  const MOBILE_SUBSCRIPTION_DEEP_LINK_OPENED = hasOwnProperty.MOBILE_SUBSCRIPTION_DEEP_LINK_OPENED;
  AnalyticsUtilsDefault;
  if (null != arg0) {
    obj = { has_premium_subscription: null, has_guild_subscription: null };
    ({ hasNitro: obj.has_premium_subscription, hasGuild: obj.has_guild_subscription } = arg0);
    tmp2 = obj;
  }
  track(MOBILE_SUBSCRIPTION_DEEP_LINK_OPENED, tmp2);
}
let obj = function _openSubscriptionSettingsFromDeepLink() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function showSubscriptionPicker() {
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj2;
      const showSimpleActionSheet = closure_0(closure_2[4]).showSimpleActionSheet;
      closure_0 = closure_0(closure_2[5]).default;
      obj = { key, hasIcons: false, header: obj2, options: items };
      obj2 = {
        title: intl.string(closure_0(closure_2[6]).t["z5YcJ+"]),
        onClose() {
          closure_0.hideActionSheet(key);
        }
      };
      intl = closure_0(closure_2[6]).intl;
      const obj3 = { label: intl2.string(closure_0(closure_2[6]).t["8jmdON"]), onPress };
      intl2 = closure_0(closure_2[6]).intl;
      items = [obj3, ];
      const obj4 = { label: intl3.string(closure_0(closure_2[6]).t["KzCF/6"]), onPress: onPress2 };
      intl3 = closure_0(closure_2[6]).intl;
      items[1] = obj4;
      const result = showSimpleActionSheet(obj);
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c3;
      try {
        let hasNitro;
        let hasGuild;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            hasNitro = undefined;
            hasGuild = undefined;
            if (!SubscriptionStore.hasFetchedSubscriptions()) {
              c3 = 1;
              let obj2 = actions_BillingActionCreators;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.fetchSubscriptions(), done: false };
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_130_11();
          closure_130_8();
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
        }
        null != closure_130_4.getPremiumTypeSubscription();
        const activeGuildSubscriptions = closure_130_4.getActiveGuildSubscriptions();
        hasNitro = activeGuildSubscriptions;
        if (activeGuildSubscriptions == null) {
          hasNitro = [];
        }
        hasGuild = hasNitro.length > 0;
        const obj6 = { hasNitro, hasGuild };
        closure_130_11(obj6);
        const tmp24 = hasNitro;
        if (tmp24) {
          const tmp26 = hasGuild;
          if (tmp26) {
            showSubscriptionPicker();
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        }
        const tmp28 = hasGuild;
        if (tmp28) {
          closure_130_10();
        } else if (hasNitro) {
          closure_130_9();
        } else {
          closure_130_8();
        }
      } catch (tmp39) {
        if (0 === c3) {
          c5 = 3;
          throw tmp39;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
let c7 = "subscription-settings-deep-link";
let result = size.fileFinishedImporting("modules/billing/native/subscriptionSettingsDeepLink.tsx");

export const openSubscriptionSettingsFromDeepLink = function openSubscriptionSettingsFromDeepLink() {
  return obj(...arguments);
};
