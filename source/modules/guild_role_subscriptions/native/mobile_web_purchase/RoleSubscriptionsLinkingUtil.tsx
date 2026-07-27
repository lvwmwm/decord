// Module ID: 11749
// Function ID: 91253
// Name: performRoleSubscriptionUpsellRedirect
// Dependencies: [5, 653, 1355, 11750, 1935, 3, 2]

// Module 11749 (performRoleSubscriptionUpsellRedirect)
import timestamp from "timestamp";
import ME from "ME";
import { StaticChannelRoute } from "set";

let closure_4;
let closure_5;
const require = arg1;
function performRoleSubscriptionUpsellRedirect(guildId) {
  return _performRoleSubscriptionUpsellRedirect(...arguments);
}
function _performRoleSubscriptionUpsellRedirect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _performRoleSubscriptionTeamCreationRedirect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _performRoleSubscriptionEditPayoutRedirect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function performDeveloperPortalRedirectWithTokenHandoff() {
  return _performDeveloperPortalRedirectWithTokenHandoff(...arguments);
}
function _performDeveloperPortalRedirectWithTokenHandoff() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ RelativeMarketingURLs: closure_4, Routes: closure_5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx");

export default {
  performRoleSubscriptionUpsellRedirect,
  performRoleSubscriptionTeamCreationRedirect() {
    return _performRoleSubscriptionTeamCreationRedirect(...arguments);
  },
  performRoleSubscriptionEditPayoutRedirect() {
    return _performRoleSubscriptionEditPayoutRedirect(...arguments);
  },
  maybePerformRoleSubscriptionUpsellRedirect(tryParseChannelPathResult) {
    const guildId = tryParseChannelPathResult.guildId;
    if (null != guildId) {
      if (tmp === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        let resolved = performRoleSubscriptionUpsellRedirect(guildId);
      }
      return resolved;
    }
    resolved = Promise.resolve(false);
  }
};
