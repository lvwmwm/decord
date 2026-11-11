// Module ID: 18848
// Function ID: 18849
// Name: useIsGuildEligibleForRoleSubscriptionsUpsell
// Dependencies: [5110, 5114, 1385, 1072, 504, 7213, 2]
// Exports: default

// Module 18848 (useIsGuildEligibleForRoleSubscriptionsUpsell)
import Constants from "Constants" /* 1072 */;
import GuildRecord from "GuildRecord" /* 5110 */;
import GuildStore from "GuildStore" /* 5114 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isGuildOwner = GuildRecord.isGuildOwner;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx");

export default function useIsGuildEligibleForRoleSubscriptionsUpsell(arg0) {
  let closure_0;
  let currentUser;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  require("get initialized");
  [][0] = UserStore;
  let tmp6 = null != stateFromStores;
  const tmp = _require;
  if (tmp6) {
    tmp6 = isGuildOwner(stateFromStores, tmp5);
  }
  const tmpResult = tmp(7213);
  const isUserInCreatorMonetizationEligibleCountry = tmpResult.useIsUserInCreatorMonetizationEligibleCountry();
  if (tmp6) {
    let flag;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      flag = features.has(GuildFeatures.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    tmp6 = flag;
  }
  if (tmp6) {
    tmp6 = isUserInCreatorMonetizationEligibleCountry;
  }
  if (tmp6) {
    let hasItem;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    }
    if (!hasItem) {
      let hasItem1;
      if (stateFromStores != null) {
        const features3 = stateFromStores.features;
        hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      hasItem = hasItem1;
    }
    if (!hasItem) {
      let hasItem2;
      if (stateFromStores != null) {
        const features4 = stateFromStores.features;
        hasItem2 = features4.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      }
      hasItem = hasItem2;
    }
    tmp6 = !hasItem;
  }
  return tmp6;
};
