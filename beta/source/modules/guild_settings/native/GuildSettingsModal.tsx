// Module ID: 17935
// Function ID: 17936
// Name: GuildSettingsModal
// Dependencies: [32, 19, 2067, 9866, 1078, 21, 16493, 9865, 1253, 1119, 5871, 17936, 17948, 17952, 17953, 17970, 17989, 17994, 18009, 18010, 18022, 18034, 18036, 17323, 17332, 18044, 18048, 18049, 17334, 16494, 18050, 18051, 18071, 18092, 18096, 18099, 12002, 12016, 12018, 18100, 18105, 18106, 18128, 18151, 18191, 18192, 18208, 18247, 18251, 18252, 18255, 18263, 558, 568, 1616, 5845, 504, 7278, 2]

// Module 17935 (GuildSettingsModal)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9865 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 12002 */;
import KickConfirmDefault from "KickConfirm" /* 12016 */;
import BanConfirmDefault from "BanConfirm" /* 12018 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16493 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16494 */;
import IntegrationsSettingsWebhooksOverviewDefault from "IntegrationsSettingsWebhooksOverview" /* 17323 */;
import IntegrationsSettingsEditWebhookDefault from "IntegrationsSettingsEditWebhook" /* 17332 */;
import IntegrationsSettingsEditLinkedLobbyDefault from "IntegrationsSettingsEditLinkedLobby" /* 17334 */;
import GuildSettingsModalLandingDefault from "GuildSettingsModalLanding" /* 17936 */;
import GuildSettingsModalOverviewDefault from "GuildSettingsModalOverview" /* 17948 */;
import GuildSettingsModalModerationDefault from "GuildSettingsModalModeration" /* 17952 */;
import GuildSettingsAutoModerationDefault from "GuildSettingsAutoModeration" /* 17953 */;
import GuildSettingsAutomodRuleDefault from "GuildSettingsAutomodRule" /* 17970 */;
import GuildSettingsModalAuditLogDefault from "GuildSettingsModalAuditLog" /* 17989 */;
import GuildSettingsModalAuditLogFilterDefault from "GuildSettingsModalAuditLogFilter" /* 17994 */;
import GuildSettingsModalIntegrationsDefault from "GuildSettingsModalIntegrations" /* 18009 */;
import GuildSettingsModalEmojiDefault from "GuildSettingsModalEmoji" /* 18010 */;
import GuildSettingsModalStickersDefault from "GuildSettingsModalStickers" /* 18022 */;
import GuildSettingsModalServerTagDefault from "GuildSettingsModalServerTag" /* 18034 */;
import GuildSettingsModalServerTagCustomizeDefault from "GuildSettingsModalServerTagCustomize" /* 18036 */;
import GuildSettingsModalIntegrationSettingsDefault from "GuildSettingsModalIntegrationSettings" /* 18044 */;
import GuildSettingsModalIntegrationPlatformDefault from "GuildSettingsModalIntegrationPlatform" /* 18048 */;
import GuildSettingsModalLobbiesLinkedDefault from "GuildSettingsModalLobbiesLinked" /* 18049 */;
import GuildSettingsModalSecurityDefault from "GuildSettingsModalSecurity" /* 18050 */;
import GuildSettingsRolesDefault from "GuildSettingsRoles" /* 18051 */;
import GuildSettingsRoleEditDefault from "GuildSettingsRoleEdit" /* 18071 */;
import GuildSettingsModalVanityURLDefault from "GuildSettingsModalVanityURL" /* 18092 */;
import GuildSettingsModalInstantInvitesDefault from "GuildSettingsModalInstantInvites" /* 18096 */;
import GuildSettingsModalMembersWrapperDefault from "GuildSettingsModalMembersWrapper" /* 18099 */;
import GuildSettingsModalBansDefault from "GuildSettingsModalBans" /* 18100 */;
import GuildSettingsModalCommunityDefault from "GuildSettingsModalCommunity" /* 18105 */;
import GuildSettingsModalCommunityIntroDefault from "GuildSettingsModalCommunityIntro" /* 18106 */;
import GuildSettingsModalAnalyticsDefault from "GuildSettingsModalAnalytics" /* 18128 */;
import GuildSettingsRoleSubscriptionsEmptyDefault from "GuildSettingsRoleSubscriptionsEmpty" /* 18151 */;
import GuildSettingsRoleSubscriptionsEnableMonetizationDefault from "GuildSettingsRoleSubscriptionsEnableMonetization" /* 18191 */;
import GuildSettingsRoleSubscriptionsGroupEditDefault from "GuildSettingsRoleSubscriptionsGroupEdit" /* 18192 */;
import GuildSettingsRoleSubscriptionTiersDefault from "GuildSettingsRoleSubscriptionTiers" /* 18208 */;
import GuildSettingsRoleSubscriptionTierEditDefault from "GuildSettingsRoleSubscriptionTierEdit" /* 18247 */;
import GuildSettingsRoleSubscriptionsPaymentsDefault from "GuildSettingsRoleSubscriptionsPayments" /* 18251 */;
import GuildSettingsRoleSubscriptionEmojisDefault from "GuildSettingsRoleSubscriptionEmojis" /* 18252 */;
import GuildSettingsRoleSubscriptionTierTemplateSelectionDefault from "GuildSettingsRoleSubscriptionTierTemplateSelection" /* 18255 */;
import GuildSettingsModalOfficialMessagesDefault from "GuildSettingsModalOfficialMessages" /* 18263 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9866 */;

const require = globalThis.__r;

require = fn;
function close() {
  GuildSettingsModalChannelsActionCreatorsDefault.terminate();
  GuildSettingsActionCreatorsDefault.close();
}
function getScreens(guildId, arg1) {
  _require = guildId;
  let obj = { contentContainerStyle: { paddingBottom: 16 + arg1 } };
  const obj3 = {};
  const obj4 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_LANDING, title: null, headerLeft: null, render: null };
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t["154/bL"]);
  obj4.headerLeft = require("NavigatorHeader").getHeaderCloseButton(close);
  obj4.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalLandingDefault, { guildId });
  };
  obj3[constants.LANDING] = obj4;
  const obj6 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_OVERVIEW, title: null, render: null };
  const intl2 = require("util").intl;
  obj6.title = intl2.string(require("util").t["/dp6yY"]);
  obj6.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalOverviewDefault, {});
  };
  obj3[constants.OVERVIEW] = obj6;
  const obj7 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_MODERATION, title: null, render: null };
  const intl3 = require("util").intl;
  obj7.title = intl3.string(require("util").t["5tbTdV"]);
  obj7.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalModerationDefault, {});
  };
  obj3[constants.MODERATION] = obj7;
  const obj8 = { title: null, postponeRender: true, render: null };
  const intl4 = require("util").intl;
  obj8.title = intl4.string(require("util").t.uRelgx);
  obj8.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsAutoModerationDefault, { guildId });
  };
  obj3[constants.GUILD_AUTOMOD] = obj8;
  const obj9 = { title: null, render: null };
  const intl5 = require("util").intl;
  obj9.title = intl5.string(require("util").t.uRelgx);
  obj9.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsAutomodRuleDefault, { guildId });
  };
  obj3[constants.GUILD_AUTOMOD_RULE] = obj9;
  const obj10 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, title: null, postponeRender: true, render: null };
  const intl6 = require("util").intl;
  obj10.title = intl6.string(require("util").t.SPWLyT);
  obj10.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalAuditLogDefault, { guildId });
  };
  obj3[constants.AUDIT_LOG] = obj10;
  const obj11 = { title: null, render: null };
  const intl7 = require("util").intl;
  obj11.title = intl7.string(require("util").t.pEasFX);
  obj11.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalAuditLogFilterDefault, { guildId });
  };
  obj3[constants.AUDIT_LOG_FILTER] = obj11;
  const obj12 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
  const intl8 = require("util").intl;
  obj12.title = intl8.string(require("util").t.CIsNZw);
  obj12.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalIntegrationsDefault, {});
  };
  obj3[constants.INTEGRATIONS] = obj12;
  const obj13 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_EMOJI, title: null, postponeRender: true, render: null };
  const intl9 = require("util").intl;
  obj13.title = intl9.string(require("util").t.sMOuuS);
  obj13.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalEmojiDefault, { guildId });
  };
  obj3[constants.EMOJI] = obj13;
  const obj14 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_STICKERS, title: null, postponeRender: true, render: null };
  const intl10 = require("util").intl;
  obj14.title = intl10.string(require("util").t.R5nQkS);
  obj14.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalStickersDefault, { guildId });
  };
  obj3[constants.STICKERS] = obj14;
  const obj15 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_TAG, title: null, render: null };
  const intl11 = require("util").intl;
  obj15.title = intl11.string(require("util").t["2QmKZ2"]);
  obj15.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalServerTagDefault, { guildId });
  };
  obj3[constants.TAG] = obj15;
  const obj16 = { title: null, render: null };
  const intl12 = require("util").intl;
  obj16.title = intl12.string(require("util").t.r4R7mm);
  obj16.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalServerTagCustomizeDefault, { guildId });
  };
  obj3[constants.TAG_CUSTOMIZE] = obj16;
  const obj17 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
  const intl13 = require("util").intl;
  obj17.title = intl13.string(require("util").t.jp25Id);
  obj17.render = function render() {
    obj = { guildId, webhookType: constants2.INCOMING };
    const merged = Object.assign(obj);
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { guildId, webhookType: constants2.INCOMING });
  };
  obj3[constants.WEBHOOKS] = obj17;
  const obj18 = { title: null, render: null };
  const intl14 = require("util").intl;
  obj18.title = intl14.string(require("util").t["6SE3L3"]);
  obj18.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(IntegrationsSettingsEditWebhookDefault, {});
  };
  obj3[constants.EDIT_WEBHOOK] = obj18;
  const obj19 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
  const intl15 = require("util").intl;
  obj19.title = intl15.string(require("util").t.OrV60r);
  obj19.render = function render() {
    obj = { guildId, webhookType: constants2.CHANNEL_FOLLOWER };
    const merged = Object.assign(obj);
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { guildId, webhookType: constants2.CHANNEL_FOLLOWER });
  };
  obj3[constants.CHANNELS_FOLLOWED] = obj19;
  const obj20 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
  const intl16 = require("util").intl;
  obj20.title = intl16.string(require("util").t.sE5hSZ);
  obj20.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalIntegrationSettingsDefault, {});
  };
  obj3[constants.INTEGRATION_SETTINGS] = obj20;
  const obj21 = { title: null, render: null };
  const intl17 = require("util").intl;
  obj21.title = intl17.string(require("util").t.CIsNZw);
  obj21.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.closeGuildSettings = close;
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalIntegrationPlatformDefault, {});
  };
  obj3[constants.INTEGRATION_PLATFORM] = obj21;
  const obj22 = { title: null, render: null };
  const intl18 = require("util").intl;
  obj22.title = intl18.string(require("util").t.tqtDXC);
  obj22.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalLobbiesLinkedDefault, { guildId });
  };
  obj3[constants.LOBBIES_LINKED] = obj22;
  const obj23 = { title: null, render: null };
  const intl19 = require("util").intl;
  obj23.title = intl19.string(require("util").t.OJknhi);
  obj23.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(IntegrationsSettingsEditLinkedLobbyDefault, {});
  };
  obj3[constants.EDIT_LINKED_LOBBY] = obj23;
  const obj24 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_CHANNELS, title: null, postponeRender: true, render: null };
  const intl20 = require("util").intl;
  obj24.title = intl20.string(require("util").t.OGiMXJ);
  obj24.render = function render() {
    obj = { guildId, onDone: GuildSettingsModalChannelsActionCreatorsDefault.stopReordering };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalChannelsDefault, { guildId, onDone: GuildSettingsModalChannelsActionCreatorsDefault.stopReordering });
  };
  obj3[constants.CHANNELS] = obj24;
  const obj25 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_SECURITY, title: null, render: null };
  const intl21 = require("util").intl;
  obj25.title = intl21.string(require("util").t.Am9YHi);
  obj25.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalSecurityDefault, { guildId });
  };
  obj3[constants.SECURITY] = obj25;
  const obj26 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_ROLES, title: null, render: null };
  const intl22 = require("util").intl;
  obj26.title = intl22.string(require("util").t["LPJmL/"]);
  obj26.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsRolesDefault, { guildId });
  };
  obj3[constants.ROLES] = obj26;
  const obj27 = { title: null, render: null };
  const intl23 = require("util").intl;
  obj27.title = intl23.string(require("util").t["LPJmL/"]);
  obj27.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsRoleEditDefault, { guildId });
  };
  obj3[constants.ROLE_EDIT_REFRESH] = obj27;
  const obj28 = { title: null, render: null };
  const intl24 = require("util").intl;
  obj28.title = intl24.string(require("util").t["5XZKy/"]);
  obj28.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalVanityURLDefault, { guildId });
  };
  obj3[constants.VANITY_URL] = obj28;
  const obj29 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INVITES, title: null, postponeRender: true, render: null };
  const intl25 = require("util").intl;
  obj29.title = intl25.string(require("util").t.ngRFjZ);
  obj29.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalInstantInvitesDefault, { guildId });
  };
  obj3[constants.INSTANT_INVITES] = obj29;
  const obj30 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_MEMBERS, title: null, postponeRender: true, render: null };
  const intl26 = require("util").intl;
  obj30.title = intl26.string(require("util").t["9Oq93m"]);
  obj30.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalMembersWrapperDefault, { guildId });
  };
  obj3[constants.MEMBERS] = obj30;
  obj3[constants.MEMBER_EDIT] = {
    render(arg0) {
      obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj3[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(KickConfirmDefault, { guildId });
    }
  };
  obj3[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(BanConfirmDefault, { guildId });
    }
  };
  const obj31 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_BANS, title: null, postponeRender: true, render: null };
  const intl27 = require("util").intl;
  obj31.title = intl27.string(require("util").t.ZbeITS);
  obj31.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalBansDefault, { guildId });
  };
  obj3[constants.BANS] = obj31;
  const obj32 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW, title: null, postponeRender: true, render: null };
  const intl28 = require("util").intl;
  obj32.title = intl28.string(require("util").t.nRtNqn);
  obj32.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.guildId = guildId;
    return jsx(GuildSettingsModalCommunityDefault, {});
  };
  obj3[constants.COMMUNITY] = obj32;
  const obj33 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, title: null, render: null };
  const intl29 = require("util").intl;
  obj33.title = intl29.string(require("util").t.ElKTeb);
  obj33.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalCommunityIntroDefault, { guildId });
  };
  obj3[constants.COMMUNITY_INTRO] = obj33;
  const obj34 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_ANALYTICS, title: null, postponeRender: true, render: null };
  const intl30 = require("util").intl;
  obj34.title = intl30.string(require("util").t["0wWfUG"]);
  obj34.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalAnalyticsDefault, { guildId });
  };
  obj3[constants.ANALYTICS] = obj34;
  const obj35 = { title: null, render: null };
  const intl31 = require("util").intl;
  obj35.title = intl31.string(require("util").t["KzCF/6"]);
  obj35.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsEmptyDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS] = obj35;
  const obj36 = { title: null, render: null };
  const intl32 = require("util").intl;
  obj36.title = intl32.string(require("util").t["KzCF/6"]);
  obj36.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsEnableMonetizationDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj36;
  const obj37 = { title: null, render: null };
  const intl33 = require("util").intl;
  obj37.title = intl33.string(require("util").t["/CfKoD"]);
  obj37.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsGroupEditDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_BASIC] = obj37;
  const obj38 = { title: null, render: null };
  const intl34 = require("util").intl;
  obj38.title = intl34.string(require("util").t.pXbGYc);
  obj38.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionTiersDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_TIERS] = obj38;
  const obj39 = { title: null, render: null };
  const intl35 = require("util").intl;
  obj39.title = intl35.string(require("util").t["KzCF/6"]);
  obj39.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.guildId = guildId;
    return jsx(GuildSettingsRoleSubscriptionTierEditDefault, {});
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj39;
  const obj40 = { title: null, render: null };
  const intl36 = require("util").intl;
  obj40.title = intl36.string(require("util").t.p2Rsdl);
  obj40.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsPaymentsDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj40;
  const obj41 = { title: null, render: null };
  const intl37 = require("util").intl;
  obj41.title = intl37.string(require("util").t.C5Dbwn);
  obj41.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionEmojisDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_EMOJIS] = obj41;
  const obj42 = { title: null, render: null };
  const intl38 = require("util").intl;
  obj42.title = intl38.string(require("util").t["KzCF/6"]);
  obj42.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.guildId = guildId;
    return jsx(GuildSettingsRoleSubscriptionTierTemplateSelectionDefault, {});
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj42;
  const obj43 = { title: null, render: null };
  const intl39 = require("util").intl;
  obj43.title = intl39.string(require("util").t.xHEzFh);
  obj43.render = function render() {
    return jsx(GuildSettingsModalOfficialMessagesDefault, { guildId });
  };
  obj3[constants.OFFICIAL_MESSAGES] = obj43;
  return obj3;
}
const Constants = fn(1078);
({ GuildSettingsSections: closure_7, WebhookTypes: closure_8 } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(16);
  const bottom = stateFromStores(1616)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    cResult[0] = I;
    const tmp5 = I;
  } else {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
  }
  const tmp6 = stateFromStores(5845)(tmp5);
  _require = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    const items = [GuildStore];
    cResult[1] = items;
    const tmp7 = items;
  } else {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
  }
  if (cResult[2] !== tmp6) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    cResult[2] = tmp6;
    cResult[3] = tmp9;
    const tmp8 = tmp9;
  } else {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
  if (cResult[4] === tmp6) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    if (cResult[7] === stateFromStores) {
      class I {
        constructor() {
          return closure_1_6.getGuildId();
        }
      }
      const effect = noop.useEffect(tmp13, tmp14);
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return closure_1_6.getSavedRouteState();
          }
        }
        cResult[11] = L;
        const tmp16 = L;
      } else {
        class L {
          constructor() {
            return closure_1_6.getSavedRouteState();
          }
        }
      }
      const first = _slicedToArray(noop.useState(tmp16), 1)[0];
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
        cResult[12] = U;
        const tmp19 = U;
      } else {
        class U {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
      }
      if (cResult[13] === first) {
        class U {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
        return tmp20;
      }
      let tmp23Result = null;
      if (null != tmp11) {
        class U {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
        const obj2 = { onWillFocus: tmp19, initialRouteName: null, initialRouteState: null, screens: null };
        let LANDING;
        if (null == first) {
          class U {
            constructor(arg0) {
              navigation = arg0.navigation;
              obj = closure_1(closure_1_2[7]);
              saveRouteStackResult = obj.saveRouteStack(navigation.getState());
              return;
            }
          }
          LANDING = constants.LANDING;
        }
        obj2.initialRouteName = LANDING;
        if (null != first) {
          class U {
            constructor(arg0) {
              navigation = arg0.navigation;
              obj = closure_1(closure_1_2[7]);
              saveRouteStackResult = obj.saveRouteStack(navigation.getState());
              return;
            }
          }
        }
        obj2.initialRouteState = undefined;
        obj2.screens = tmp11;
        tmp23Result = tmp23(tmp(7278).Navigator, obj2);
      }
      cResult[13] = first;
      cResult[14] = tmp11;
      cResult[15] = tmp23Result;
      tmp20 = tmp23Result;
    }
    const fn = function p() {
      let tmp = null != closure_0;
      if (tmp) {
        tmp = null != stateFromStores;
      }
      if (!tmp) {
        GuildSettingsActionCreatorsDefault.close();
      }
    };
    const items1 = [stateFromStores, tmp6];
    cResult[7] = stateFromStores;
    cResult[8] = tmp6;
    cResult[9] = fn;
    cResult[10] = items1;
    tmp13 = fn;
    tmp14 = items1;
  }
  let tmp12;
  if (null != tmp6) {
    class U {
      constructor(arg0) {
        navigation = arg0.navigation;
        obj = closure_1(closure_1_2[7]);
        saveRouteStackResult = obj.saveRouteStack(navigation.getState());
        return;
      }
    }
    tmp12 = getScreens(tmp6, bottom);
  }
  cResult[4] = tmp6;
  cResult[5] = bottom;
  cResult[6] = tmp12;
}) : (() => {
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp2 = require("useInitialValue")(() => GuildSettingsStore.getGuildId());
  importDefault = tmp2;
  const items = [GuildStore];
  stateFromStores = bottom(stateFromStores[56]).useStateFromStores(items, () => GuildStore.getGuild(closure_1));
  const items1 = [bottom, tmp2];
  const memo = noop.useMemo(() => {
    let tmp2;
    if (null != closure_1) {
      tmp2 = getScreens(tmp, bottom);
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores, tmp2];
  const effect = noop.useEffect(() => {
    let tmp = null != closure_1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (!tmp) {
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items2);
  const first = _slicedToArray(noop.useState(() => GuildSettingsStore.getSavedRouteState()), 1)[0];
  let tmp10Result = null;
  if (null != memo) {
    const obj2 = { onWillFocus: tmp8, initialRouteName: null, initialRouteState: null, screens: null };
    let LANDING;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    obj2.initialRouteName = LANDING;
    let tmp13;
    if (null != first) {
      tmp13 = first;
    }
    obj2.initialRouteState = tmp13;
    obj2.screens = memo;
    tmp10Result = jsx(bottom(stateFromStores[57]).Navigator, { onWillFocus: tmp8, initialRouteName: null, initialRouteState: null, screens: null });
  }
  return tmp10Result;
});
