// Module ID: 14137
// Function ID: 14138
// Name: subscriptionSettingsDeepLink
// Dependencies: [5, 4734, 1085, 7087, 14138, 5055, 1126, 5721, 2]
// Exports: openSubscriptionSettingsFromDeepLink

// Module 14137 (subscriptionSettingsDeepLink)
import Constants from "Constants" /* 1085 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5721 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import size from "module_2" /* 2 */;

let c4, closure_0;

function openNitroHome() {
  obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj2);
}
function openNitroManage() {
  obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.PREMIUM_MANAGE_PLAN };
  obj.openUserSettings(obj2);
}
function openGuildManage() {
  obj = openUserSettings;
  const obj2 = { screen: UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS };
  obj.openUserSettings(obj2);
}
let obj = function _openSubscriptionSettingsFromDeepLink() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function showSubscriptionPicker() {
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj2;
      const showSimpleActionSheet = closure_0(closure_1[4]).showSimpleActionSheet;
      closure_0 = closure_0(closure_1[5]).default;
      obj = { key, hasIcons: false, header: obj2, options: items };
      obj2 = {
        title: intl.string(closure_0(closure_1[6]).t["z5YcJ+"]),
        onClose() {
          closure_0.hideActionSheet(key);
        }
      };
      intl = closure_0(closure_1[6]).intl;
      const obj3 = { label: intl2.string(closure_0(closure_1[6]).t["8jmdON"]), onPress };
      intl2 = closure_0(closure_1[6]).intl;
      items = [obj3, ];
      const obj4 = { label: intl3.string(closure_0(closure_1[6]).t["KzCF/6"]), onPress: onPress2 };
      intl3 = closure_0(closure_1[6]).intl;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let length;
        let closure_1;
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
            length = undefined;
            closure_1 = undefined;
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
          closure_130_6();
          c5 = 3;
          return { value: "IconComponent", done: null };
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
        null != closure_130_3.getPremiumTypeSubscription();
        const activeGuildSubscriptions = closure_130_3.getActiveGuildSubscriptions();
        length = activeGuildSubscriptions;
        if (activeGuildSubscriptions == null) {
          length = [];
        }
        closure_1 = length.length > 0;
        const tmp17 = length;
        if (tmp17) {
          const tmp19 = closure_1;
          if (tmp19) {
            showSubscriptionPicker();
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
        const tmp21 = closure_1;
        if (tmp21) {
          closure_130_8();
        } else if (length) {
          closure_130_7();
        } else {
          closure_130_6();
        }
      } catch (tmp32) {
        if (0 === c3) {
          c5 = 3;
          throw tmp32;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const UserSettingsSections = Constants.UserSettingsSections;
let c5 = "subscription-settings-deep-link";
let result = size.fileFinishedImporting("modules/billing/native/subscriptionSettingsDeepLink.tsx");

export const openSubscriptionSettingsFromDeepLink = function openSubscriptionSettingsFromDeepLink() {
  return obj(...arguments);
};
