// Module ID: 6670
// Function ID: 6671
// Name: useHasRoleSubscriptionInGuild
// Dependencies: [502, 2108, 2102, 2067, 1074, 504, 2]
// Exports: default

// Module 6670 (useHasRoleSubscriptionInGuild)
import Constants from "Constants" /* 1074 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function computeHasRoleSubscriptionsInGuild(c0, arg1) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    let member = null;
    if (null != c0) {
      member = GuildMemberStore.getMember(c0, AuthenticationStore.getId());
    }
    tmp = member;
  }
  let tmp5 = arg3;
  if (arg3 === undefined) {
    const items = [GuildStore];
    tmp5 = items;
  }
  [obj] = tmp5;
  const guild = obj.getGuild(c0);
  if (null != guild) {
    if (null != tmp) {
      const features = guild.features;
      if (features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const roles = tmp.roles;
        for (const item10028 of roles) {
          let tmp11;
          if (arg1 != null) {
            tmp11 = arg1[tmp10];
          }
          let prop;
          if (tmp11 != null) {
            let tags = tmp11.tags;
            if (tags != null) {
              prop = tags.subscription_listing_id;
            }
          }
          if (null != prop) {
            obj2.return();
            let flag = true;
            return true;
          }
        }
        return false;
      }
    }
  }
  return false;
}
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default function useHasRoleSubscriptionInGuild(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let items = [AuthenticationStore, GuildMemberStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != closure_0) {
      member = GuildMemberStore.getMember(tmp, AuthenticationStore.getId());
    }
    return member;
  });
  const items1 = [GuildStore, GuildRoleStore];
  const items2 = [arg0, stateFromStores];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => {
    let rolesSnapshot;
    const tmp = computeHasRoleSubscriptionsInGuild;
    if (null != closure_0) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp2);
    }
    const items = [GuildStore];
    return tmp(closure_0, rolesSnapshot, stateFromStores, items);
  }, items2);
};
export { computeHasRoleSubscriptionsInGuild };
