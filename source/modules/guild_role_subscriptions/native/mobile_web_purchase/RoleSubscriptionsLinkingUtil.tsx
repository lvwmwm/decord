// Module ID: 5691
// Function ID: 48990
// Name: performRoleSubscriptionUpsellRedirect
// Dependencies: [5, 653, 1355, 5692, 1934, 3, 2]

// Module 5691 (performRoleSubscriptionUpsellRedirect)
import timestamp from "timestamp";
import ME from "ME";
import { StaticChannelRoute } from "set";

let closure_4;
let closure_5;
const require = arg1;
function performRoleSubscriptionUpsellRedirect(guildId) {
  return _performRoleSubscriptionUpsellRedirect(...arguments);
}
async function _performRoleSubscriptionUpsellRedirect(arg0, arg1) {
  const CHANNELResult = outer2_5.CHANNEL(arg0, outer2_6.ROLE_SUBSCRIPTIONS);
  yield yield outer2_0(outer2_2[4])(outer2_2[3], outer2_2.paths).default.redirectWithHandoffToken(CHANNELResult, { forceExternalBrowser: true });
  return true;
}
async function _performRoleSubscriptionTeamCreationRedirect() {
  yield outer2_11(outer2_4.DEVELOPER_PORTAL_TEAMS);
}
async function _performRoleSubscriptionEditPayoutRedirect(arg0, arg1) {
  yield outer2_11(outer2_4.DEVELOPER_PORTAL_EDIT_PAYOUTS(arg0));
}
function performDeveloperPortalRedirectWithTokenHandoff() {
  return _performDeveloperPortalRedirectWithTokenHandoff(...arguments);
}
async function _performDeveloperPortalRedirectWithTokenHandoff(arg0, arg1) {
  yield yield outer2_0(outer2_2[4])(outer2_2[3], outer2_2.paths).default.redirectDeveloperPortalWithHandoffToken(arg0);
  return true;
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
