// Module ID: 5686
// Function ID: 48963
// Name: performRoleSubscriptionUpsellRedirect
// Dependencies: []

// Module 5686 (performRoleSubscriptionUpsellRedirect)
function performRoleSubscriptionUpsellRedirect(guildId) {
  return _performRoleSubscriptionUpsellRedirect(...arguments);
}
async function _performRoleSubscriptionUpsellRedirect(arg0, arg1) {
  const CHANNELResult = closure_5.CHANNEL(arg0, constants.ROLE_SUBSCRIPTIONS);
  yield yield closure_0(closure_2[4])(closure_2[3], closure_2.paths).default.redirectWithHandoffToken(CHANNELResult, { forceExternalBrowser: true });
  return true;
}
async function _performRoleSubscriptionTeamCreationRedirect() {
  yield closure_11(closure_4.DEVELOPER_PORTAL_TEAMS);
}
async function _performRoleSubscriptionEditPayoutRedirect(arg0, arg1) {
  yield closure_11(closure_4.DEVELOPER_PORTAL_EDIT_PAYOUTS(arg0));
}
function performDeveloperPortalRedirectWithTokenHandoff() {
  return _performDeveloperPortalRedirectWithTokenHandoff(...arguments);
}
async function _performDeveloperPortalRedirectWithTokenHandoff(DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, arg1) {
  yield yield closure_0(closure_2[4])(closure_2[3], closure_2.paths).default.redirectDeveloperPortalWithHandoffToken(DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
  return true;
}
let closure_3 = importDefault(dependencyMap[0]);
({ RelativeMarketingURLs: closure_4, Routes: closure_5 } = arg1(dependencyMap[1]));
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const obj = {
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
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx");

export default obj;
