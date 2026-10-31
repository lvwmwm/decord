// Module ID: 18300
// Function ID: 18301
// Name: OnboardingV2Utils
// Dependencies: [4881, 4885, 1383, 1072, 504, 7434, 2]
// Exports: canSeeCreatorMonetizationOnboardingV2Upsell, useCanSeeCreatorMonetizationOnboardingV2Upsell

// Module 18300 (OnboardingV2Utils)
import Constants from "Constants" /* 1072 */;
import GuildRecord from "GuildRecord" /* 4881 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7434 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isGuildOwner = GuildRecord.isGuildOwner;
let items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = Constants.GuildFeatures);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export function useCanSeeCreatorMonetizationOnboardingV2Upsell(id) {
  let currentUser;
  let stateFromStores;
  _require = id;
  items = [GuildStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(id));
  const items1 = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj3 = require("GuildRoleSubscriptionSettingUtils");
  const guildRoleSubscriptionSettingsVisibility = obj3.useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
  if (null == stateFromStores) {
    return false;
  } else {
    let tmp5 = guildRoleSubscriptionSettingsVisibility === tmp4;
    const tmp7 = isGuildOwner(stateFromStores, stateFromStores1);
    const everyResult = items.every((item) => {
      const features = stateFromStores.features;
      return !features.has(item);
    });
    if (tmp5) {
      tmp5 = tmp7;
    }
    if (tmp5) {
      tmp5 = everyResult;
    }
    return tmp5;
  }
}
export function canSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
  const guild = GuildStore.getGuild(arg0);
  if (null == guild) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const obj = GuildRoleSubscriptionSettingUtils;
      const guildRoleSubscriptionSettingsVisibility = obj.getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === GuildRoleSubscriptionSettingUtils.GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const tmp7 = isGuildOwner(guild, currentUser);
      const everyResult = items.every((item) => {
        const features = guild.features;
        return !features.has(item);
      });
      if (tmp5) {
        tmp5 = tmp7;
      }
      if (tmp5) {
        tmp5 = everyResult;
      }
      return tmp5;
    }
  }
}
