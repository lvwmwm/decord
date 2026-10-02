// Module ID: 17289
// Function ID: 17290
// Name: GuildSettingsModal
// Dependencies: [32, 19, 2073, 9026, 1086, 21, 15775, 9025, 1261, 1127, 5933, 17290, 17302, 17306, 17307, 17324, 17343, 17348, 17363, 17364, 17376, 17388, 17390, 16665, 16674, 17398, 17402, 17403, 16676, 15776, 17404, 17405, 17425, 17446, 17450, 17453, 17456, 11189, 11203, 11205, 17457, 17462, 17463, 17485, 17508, 17548, 17549, 17565, 17604, 17608, 17609, 17612, 17620, 17621, 558, 576, 1619, 5907, 504, 6421, 2]

// Module 17289 (GuildSettingsModal)
import Fragment from "Fragment" /* 21 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9025 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11189 */;
import KickConfirmDefault from "KickConfirm" /* 11203 */;
import BanConfirmDefault from "BanConfirm" /* 11205 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 15775 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 15776 */;
import IntegrationsSettingsWebhooksOverviewDefault from "IntegrationsSettingsWebhooksOverview" /* 16665 */;
import IntegrationsSettingsEditWebhookDefault from "IntegrationsSettingsEditWebhook" /* 16674 */;
import IntegrationsSettingsEditLinkedLobbyDefault from "IntegrationsSettingsEditLinkedLobby" /* 16676 */;
import GuildSettingsModalLandingDefault from "GuildSettingsModalLanding" /* 17290 */;
import GuildSettingsModalOverviewDefault from "GuildSettingsModalOverview" /* 17302 */;
import GuildSettingsModalModerationDefault from "GuildSettingsModalModeration" /* 17306 */;
import GuildSettingsAutoModerationDefault from "GuildSettingsAutoModeration" /* 17307 */;
import GuildSettingsAutomodRuleDefault from "GuildSettingsAutomodRule" /* 17324 */;
import GuildSettingsModalAuditLogDefault from "GuildSettingsModalAuditLog" /* 17343 */;
import GuildSettingsModalAuditLogFilterDefault from "GuildSettingsModalAuditLogFilter" /* 17348 */;
import GuildSettingsModalIntegrationsDefault from "GuildSettingsModalIntegrations" /* 17363 */;
import GuildSettingsModalEmojiDefault from "GuildSettingsModalEmoji" /* 17364 */;
import GuildSettingsModalStickersDefault from "GuildSettingsModalStickers" /* 17376 */;
import GuildSettingsModalServerTagDefault from "GuildSettingsModalServerTag" /* 17388 */;
import GuildSettingsModalServerTagCustomizeDefault from "GuildSettingsModalServerTagCustomize" /* 17390 */;
import GuildSettingsModalIntegrationSettingsDefault from "GuildSettingsModalIntegrationSettings" /* 17398 */;
import GuildSettingsModalIntegrationPlatformDefault from "GuildSettingsModalIntegrationPlatform" /* 17402 */;
import GuildSettingsModalLobbiesLinkedDefault from "GuildSettingsModalLobbiesLinked" /* 17403 */;
import GuildSettingsModalSecurityDefault from "GuildSettingsModalSecurity" /* 17404 */;
import GuildSettingsRolesDefault from "GuildSettingsRoles" /* 17405 */;
import GuildSettingsRoleEditDefault from "GuildSettingsRoleEdit" /* 17425 */;
import GuildSettingsModalVanityURLDefault from "GuildSettingsModalVanityURL" /* 17446 */;
import GuildSettingsModalInstantInvitesDefault from "GuildSettingsModalInstantInvites" /* 17450 */;
import GuildSettingsModalTemplateDefault from "GuildSettingsModalTemplate" /* 17453 */;
import GuildSettingsModalMembersWrapperDefault from "GuildSettingsModalMembersWrapper" /* 17456 */;
import GuildSettingsModalBansDefault from "GuildSettingsModalBans" /* 17457 */;
import GuildSettingsModalCommunityDefault from "GuildSettingsModalCommunity" /* 17462 */;
import GuildSettingsModalCommunityIntroDefault from "GuildSettingsModalCommunityIntro" /* 17463 */;
import GuildSettingsModalAnalyticsDefault from "GuildSettingsModalAnalytics" /* 17485 */;
import GuildSettingsRoleSubscriptionsEmptyDefault from "GuildSettingsRoleSubscriptionsEmpty" /* 17508 */;
import GuildSettingsRoleSubscriptionsEnableMonetizationDefault from "GuildSettingsRoleSubscriptionsEnableMonetization" /* 17548 */;
import GuildSettingsRoleSubscriptionsGroupEditDefault from "GuildSettingsRoleSubscriptionsGroupEdit" /* 17549 */;
import GuildSettingsRoleSubscriptionTiersDefault from "GuildSettingsRoleSubscriptionTiers" /* 17565 */;
import GuildSettingsRoleSubscriptionTierEditDefault from "GuildSettingsRoleSubscriptionTierEdit" /* 17604 */;
import GuildSettingsRoleSubscriptionsPaymentsDefault from "GuildSettingsRoleSubscriptionsPayments" /* 17608 */;
import GuildSettingsRoleSubscriptionEmojisDefault from "GuildSettingsRoleSubscriptionEmojis" /* 17609 */;
import GuildSettingsRoleSubscriptionTierTemplateSelectionDefault from "GuildSettingsRoleSubscriptionTierTemplateSelection" /* 17612 */;
import GuildSettingsModalOfficialMessagesDefault from "GuildSettingsModalOfficialMessages" /* 17620 */;
import GuildSettingsModalGuildSpaceDefault from "GuildSettingsModalGuildSpace" /* 17621 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2073 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9026 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closeResult, importDefault, navigation, saveRouteStackResult;

let metroImportAll;
let metroImportDefault;
function close() {
  const obj = GuildSettingsModalChannelsActionCreatorsDefault;
  obj.terminate();
  const obj2 = GuildSettingsActionCreatorsDefault;
  obj2.close();
}
function getScreens(guildId, arg1) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let intl37;
  let intl38;
  let intl39;
  let intl4;
  let intl40;
  let intl41;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj2;
  let obj5;
  _require = guildId;
  let obj = { contentContainerStyle: obj2 };
  const obj3 = {};
  obj2 = { paddingBottom: 16 + arg1 };
  const LANDING = constants.LANDING;
  const obj4 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_LANDING,
    title: intl.string(require("intl").t["154/bL"]),
    headerLeft: obj5.getHeaderCloseButton(close),
    render() {
      obj = { guildId };
      GuildSettingsModalLandingDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl = require("intl").intl;
  obj3[LANDING] = obj4;
  obj5 = require("NavigatorHeader");
  const OVERVIEW = constants.OVERVIEW;
  const obj6 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    title: intl2.string(require("intl").t["/dp6yY"]),
    render() {
      obj = {};
      GuildSettingsModalOverviewDefault;
      const merged = Object.assign(obj);
      return <tmp />;
    }
  };
  intl2 = require("intl").intl;
  obj3[OVERVIEW] = obj6;
  const MODERATION = constants.MODERATION;
  const obj7 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_MODERATION,
    title: intl3.string(require("intl").t["5tbTdV"]),
    render() {
      obj = {};
      GuildSettingsModalModerationDefault;
      const merged = Object.assign(obj);
      return <tmp />;
    }
  };
  intl3 = require("intl").intl;
  obj3[MODERATION] = obj7;
  const GUILD_AUTOMOD = constants.GUILD_AUTOMOD;
  const obj8 = {
    title: intl4.string(require("intl").t.uRelgx),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsAutoModerationDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl4 = require("intl").intl;
  obj3[GUILD_AUTOMOD] = obj8;
  const GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
  const obj9 = {
    title: intl5.string(require("intl").t.uRelgx),
    render(arg0) {
      obj = { guildId };
      GuildSettingsAutomodRuleDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl5 = require("intl").intl;
  obj3[GUILD_AUTOMOD_RULE] = obj9;
  const AUDIT_LOG = constants.AUDIT_LOG;
  const obj10 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    title: intl6.string(require("intl").t.SPWLyT),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalAuditLogDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl6 = require("intl").intl;
  obj3[AUDIT_LOG] = obj10;
  const AUDIT_LOG_FILTER = constants.AUDIT_LOG_FILTER;
  const obj11 = {
    title: intl7.string(require("intl").t.pEasFX),
    render(arg0) {
      obj = { guildId };
      GuildSettingsModalAuditLogFilterDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl7 = require("intl").intl;
  obj3[AUDIT_LOG_FILTER] = obj11;
  const INTEGRATIONS = constants.INTEGRATIONS;
  const obj12 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    title: intl8.string(require("intl").t.CIsNZw),
    render() {
      obj = {};
      GuildSettingsModalIntegrationsDefault;
      const merged = Object.assign(obj);
      return <tmp />;
    }
  };
  intl8 = require("intl").intl;
  obj3[INTEGRATIONS] = obj12;
  const EMOJI = constants.EMOJI;
  const obj13 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_EMOJI,
    title: intl9.string(require("intl").t.sMOuuS),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalEmojiDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl9 = require("intl").intl;
  obj3[EMOJI] = obj13;
  const STICKERS = constants.STICKERS;
  const obj14 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_STICKERS,
    title: intl10.string(require("intl").t.R5nQkS),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalStickersDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl10 = require("intl").intl;
  obj3[STICKERS] = obj14;
  const TAG = constants.TAG;
  const obj15 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_TAG,
    title: intl11.string(require("intl").t["2QmKZ2"]),
    render() {
      obj = { guildId };
      GuildSettingsModalServerTagDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl11 = require("intl").intl;
  obj3[TAG] = obj15;
  const TAG_CUSTOMIZE = constants.TAG_CUSTOMIZE;
  const obj16 = {
    title: intl12.string(require("intl").t.r4R7mm),
    render() {
      obj = { guildId };
      GuildSettingsModalServerTagCustomizeDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl12 = require("intl").intl;
  obj3[TAG_CUSTOMIZE] = obj16;
  const WEBHOOKS = constants.WEBHOOKS;
  const obj17 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
    title: intl13.string(require("intl").t.jp25Id),
    render() {
      obj = { guildId, webhookType: metroImportAll.INCOMING };
      IntegrationsSettingsWebhooksOverviewDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} webhookType={metroImportAll.INCOMING} />;
    }
  };
  intl13 = require("intl").intl;
  obj3[WEBHOOKS] = obj17;
  const EDIT_WEBHOOK = constants.EDIT_WEBHOOK;
  const obj18 = {
    title: intl14.string(require("intl").t["6SE3L3"]),
    render(arg0) {
      obj = {};
      IntegrationsSettingsEditWebhookDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp />;
    }
  };
  intl14 = require("intl").intl;
  obj3[EDIT_WEBHOOK] = obj18;
  const CHANNELS_FOLLOWED = constants.CHANNELS_FOLLOWED;
  const obj19 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
    title: intl15.string(require("intl").t.OrV60r),
    render() {
      obj = { guildId, webhookType: metroImportAll.CHANNEL_FOLLOWER };
      IntegrationsSettingsWebhooksOverviewDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} webhookType={metroImportAll.CHANNEL_FOLLOWER} />;
    }
  };
  intl15 = require("intl").intl;
  obj3[CHANNELS_FOLLOWED] = obj19;
  const INTEGRATION_SETTINGS = constants.INTEGRATION_SETTINGS;
  const obj20 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    title: intl16.string(require("intl").t.sE5hSZ),
    render(arg0) {
      obj = {};
      GuildSettingsModalIntegrationSettingsDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp />;
    }
  };
  intl16 = require("intl").intl;
  obj3[INTEGRATION_SETTINGS] = obj20;
  const INTEGRATION_PLATFORM = constants.INTEGRATION_PLATFORM;
  const obj21 = {
    title: intl17.string(require("intl").t.CIsNZw),
    render(arg0) {
      obj = { closeGuildSettings: close };
      GuildSettingsModalIntegrationPlatformDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp closeGuildSettings={close} />;
    }
  };
  intl17 = require("intl").intl;
  obj3[INTEGRATION_PLATFORM] = obj21;
  const LOBBIES_LINKED = constants.LOBBIES_LINKED;
  const obj22 = {
    title: intl18.string(require("intl").t.tqtDXC),
    render() {
      obj = { guildId };
      GuildSettingsModalLobbiesLinkedDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl18 = require("intl").intl;
  obj3[LOBBIES_LINKED] = obj22;
  const EDIT_LINKED_LOBBY = constants.EDIT_LINKED_LOBBY;
  const obj23 = {
    title: intl19.string(require("intl").t.OJknhi),
    render(arg0) {
      obj = {};
      IntegrationsSettingsEditLinkedLobbyDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp />;
    }
  };
  intl19 = require("intl").intl;
  obj3[EDIT_LINKED_LOBBY] = obj23;
  const CHANNELS = constants.CHANNELS;
  const obj24 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_CHANNELS,
    title: intl20.string(require("intl").t.OGiMXJ),
    postponeRender: true,
    render() {
      obj = { guildId, onDone: GuildSettingsModalChannelsActionCreatorsDefault.stopReordering };
      GuildSettingsModalChannelsDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} onDone={GuildSettingsModalChannelsActionCreatorsDefault.stopReordering} />;
    }
  };
  intl20 = require("intl").intl;
  obj3[CHANNELS] = obj24;
  const SECURITY = constants.SECURITY;
  const obj25 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_SECURITY,
    title: intl21.string(require("intl").t.Am9YHi),
    render() {
      obj = { guildId };
      GuildSettingsModalSecurityDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl21 = require("intl").intl;
  obj3[SECURITY] = obj25;
  const ROLES = constants.ROLES;
  const obj26 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_ROLES,
    title: intl22.string(require("intl").t["LPJmL/"]),
    render() {
      obj = { guildId };
      GuildSettingsRolesDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl22 = require("intl").intl;
  obj3[ROLES] = obj26;
  const ROLE_EDIT_REFRESH = constants.ROLE_EDIT_REFRESH;
  const obj27 = {
    title: intl23.string(require("intl").t["LPJmL/"]),
    render(arg0) {
      obj = { guildId };
      GuildSettingsRoleEditDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl23 = require("intl").intl;
  obj3[ROLE_EDIT_REFRESH] = obj27;
  const VANITY_URL = constants.VANITY_URL;
  const obj28 = {
    title: intl24.string(require("intl").t["5XZKy/"]),
    render() {
      obj = { guildId };
      GuildSettingsModalVanityURLDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl24 = require("intl").intl;
  obj3[VANITY_URL] = obj28;
  const INSTANT_INVITES = constants.INSTANT_INVITES;
  const obj29 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INVITES,
    title: intl25.string(require("intl").t.ngRFjZ),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalInstantInvitesDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl25 = require("intl").intl;
  obj3[INSTANT_INVITES] = obj29;
  const GUILD_TEMPLATES = constants.GUILD_TEMPLATES;
  const obj30 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    title: intl26.string(require("intl").t.KUw7Ss),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalTemplateDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl26 = require("intl").intl;
  obj3[GUILD_TEMPLATES] = obj30;
  const MEMBERS = constants.MEMBERS;
  const obj31 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_MEMBERS,
    title: intl27.string(require("intl").t["9Oq93m"]),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalMembersWrapperDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl27 = require("intl").intl;
  obj3[MEMBERS] = obj31;
  obj3[constants.MEMBER_EDIT] = {
    render(arg0) {
      obj = { guildId };
      const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <GuildSettingsModalMemberEditScene guildId={guildId} />;
    }
  };
  obj3[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      obj = { guildId };
      KickConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  obj3[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      obj = { guildId };
      BanConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  const BANS = constants.BANS;
  const obj32 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_BANS,
    title: intl28.string(require("intl").t.ZbeITS),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalBansDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl28 = require("intl").intl;
  obj3[BANS] = obj32;
  const COMMUNITY = constants.COMMUNITY;
  const obj33 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
    title: intl29.string(require("intl").t.nRtNqn),
    postponeRender: true,
    render(arg0) {
      GuildSettingsModalCommunityDefault;
      const merged = Object.assign(arg0);
      return <tmp guildId={guildId} />;
    }
  };
  intl29 = require("intl").intl;
  obj3[COMMUNITY] = obj33;
  const COMMUNITY_INTRO = constants.COMMUNITY_INTRO;
  const obj34 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    title: intl30.string(require("intl").t.ElKTeb),
    render(arg0) {
      obj = { guildId };
      GuildSettingsModalCommunityIntroDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl30 = require("intl").intl;
  obj3[COMMUNITY_INTRO] = obj34;
  const ANALYTICS = constants.ANALYTICS;
  const obj35 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    title: intl31.string(require("intl").t["0wWfUG"]),
    postponeRender: true,
    render() {
      obj = { guildId };
      GuildSettingsModalAnalyticsDefault;
      const merged = Object.assign(obj);
      return <tmp guildId={guildId} />;
    }
  };
  intl31 = require("intl").intl;
  obj3[ANALYTICS] = obj35;
  const ROLE_SUBSCRIPTIONS = constants.ROLE_SUBSCRIPTIONS;
  const obj36 = {
    title: intl32.string(require("intl").t["KzCF/6"]),
    render() {
      return jsx(GuildSettingsRoleSubscriptionsEmptyDefault, { guildId });
    }
  };
  intl32 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS] = obj36;
  const ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION = constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION;
  const obj37 = {
    title: intl33.string(require("intl").t["KzCF/6"]),
    render() {
      return jsx(GuildSettingsRoleSubscriptionsEnableMonetizationDefault, { guildId });
    }
  };
  intl33 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj37;
  const ROLE_SUBSCRIPTIONS_BASIC = constants.ROLE_SUBSCRIPTIONS_BASIC;
  const obj38 = {
    title: intl34.string(require("intl").t["/CfKoD"]),
    render() {
      return jsx(GuildSettingsRoleSubscriptionsGroupEditDefault, { guildId });
    }
  };
  intl34 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_BASIC] = obj38;
  const ROLE_SUBSCRIPTIONS_TIERS = constants.ROLE_SUBSCRIPTIONS_TIERS;
  const obj39 = {
    title: intl35.string(require("intl").t.pXbGYc),
    render() {
      return jsx(GuildSettingsRoleSubscriptionTiersDefault, { guildId });
    }
  };
  intl35 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_TIERS] = obj39;
  const ROLE_SUBSCRIPTIONS_TIER_EDIT = constants.ROLE_SUBSCRIPTIONS_TIER_EDIT;
  const obj40 = {
    title: intl36.string(require("intl").t["KzCF/6"]),
    render(arg0) {
      GuildSettingsRoleSubscriptionTierEditDefault;
      const merged = Object.assign(arg0);
      return <tmp guildId={guildId} />;
    }
  };
  intl36 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj40;
  const ROLE_SUBSCRIPTIONS_PAYMENTS = constants.ROLE_SUBSCRIPTIONS_PAYMENTS;
  const obj41 = {
    title: intl37.string(require("intl").t.p2Rsdl),
    render() {
      return jsx(GuildSettingsRoleSubscriptionsPaymentsDefault, { guildId });
    }
  };
  intl37 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_PAYMENTS] = obj41;
  const ROLE_SUBSCRIPTIONS_EMOJIS = constants.ROLE_SUBSCRIPTIONS_EMOJIS;
  const obj42 = {
    title: intl38.string(require("intl").t.C5Dbwn),
    render() {
      return jsx(GuildSettingsRoleSubscriptionEmojisDefault, { guildId });
    }
  };
  intl38 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_EMOJIS] = obj42;
  const ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION = constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION;
  const obj43 = {
    title: intl39.string(require("intl").t["KzCF/6"]),
    render(arg0) {
      GuildSettingsRoleSubscriptionTierTemplateSelectionDefault;
      const merged = Object.assign(arg0);
      return <tmp guildId={guildId} />;
    }
  };
  intl39 = require("intl").intl;
  obj3[ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj43;
  const OFFICIAL_MESSAGES = constants.OFFICIAL_MESSAGES;
  const obj44 = {
    title: intl40.string(require("intl").t.xHEzFh),
    render() {
      return jsx(GuildSettingsModalOfficialMessagesDefault, { guildId });
    }
  };
  intl40 = require("intl").intl;
  obj3[OFFICIAL_MESSAGES] = obj44;
  const GUILD_SPACE = constants.GUILD_SPACE;
  const obj45 = {
    title: intl41.string(require("intl").t.OBskVU),
    render() {
      obj = {};
      GuildSettingsModalGuildSpaceDefault;
      const merged = Object.assign(obj);
      return <tmp />;
    }
  };
  intl41 = require("intl").intl;
  obj3[GUILD_SPACE] = obj45;
  return obj3;
}
({ GuildSettingsSections: metroImportDefault, WebhookTypes: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let LANDING;
  let closure_0;
  let stateFromStores;
  let tmp19;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  const bottom = stateFromStores(1619)().bottom;
  const tmp4 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    cResult[0] = I;
    tmp5 = I;
  } else {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
  }
  const tmp6 = tmp4(5907)(tmp5);
  _require = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    const items = [GuildStore];
    cResult[1] = items;
    tmp7 = items;
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
    tmp8 = tmp9;
  } else {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[4] === tmp6) {
    class I {
      constructor() {
        return closure_1_6.getGuildId();
      }
    }
    if (cResult[7] === stateFromStores) {
      let tmp15;
      class I {
        constructor() {
          return closure_1_6.getGuildId();
        }
      }
      const obj3 = react;
      class L {
        constructor() {
          tmp = null != closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp = null != closure_1;
          }
          if (!tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[7]);
            closeResult = obj.close();
          }
          return;
        }
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            return closure_1_6.getSavedRouteState();
          }
        }
        class L {
          constructor() {
            tmp = null != closure_0;
            if (tmp) {
              tmp2 = closure_1;
              tmp = null != closure_1;
            }
            if (!tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[7]);
              closeResult = obj.close();
            }
            return;
          }
        }
        tmp15 = O;
      } else {
        class O {
          constructor() {
            return closure_1_6.getSavedRouteState();
          }
        }
      }
      const first = _slicedToArray(obj3.useState(tmp15), 1)[0];
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
        class L {
          constructor() {
            tmp = null != closure_0;
            if (tmp) {
              tmp2 = closure_1;
              tmp = null != closure_1;
            }
            if (!tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[7]);
              closeResult = obj.close();
            }
            return;
          }
        }
      } else {
        class D {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
      }
      if (cResult[13] === first) {
        class D {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
        return tmp19;
      }
      let tmp22Result = null;
      if (null != tmp11) {
        class D {
          constructor(arg0) {
            navigation = arg0.navigation;
            obj = closure_1(closure_1_2[7]);
            saveRouteStackResult = obj.saveRouteStack(navigation.getState());
            return;
          }
        }
        const obj2 = { onWillFocus: null, initialRouteName: LANDING, initialRouteState: undefined, screens: tmp11 };
        class L {
          constructor() {
            tmp = null != closure_0;
            if (tmp) {
              tmp2 = closure_1;
              tmp = null != closure_1;
            }
            if (!tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[7]);
              closeResult = obj.close();
            }
            return;
          }
        }
        LANDING = undefined;
        const Navigator = tmp(6421).Navigator;
        if (null == first) {
          class D {
            constructor(arg0) {
              navigation = arg0.navigation;
              obj = closure_1(closure_1_2[7]);
              saveRouteStackResult = obj.saveRouteStack(navigation.getState());
              return;
            }
          }
          LANDING = constants.LANDING;
        }
        if (null != first) {
          class D {
            constructor(arg0) {
              navigation = arg0.navigation;
              obj = closure_1(closure_1_2[7]);
              saveRouteStackResult = obj.saveRouteStack(navigation.getState());
              return;
            }
          }
        }
        tmp22Result = tmp22(Navigator, obj2);
      }
      cResult[13] = first;
      cResult[14] = tmp11;
      cResult[15] = tmp22Result;
      tmp19 = tmp22Result;
    }
    class L {
      constructor() {
        tmp = null != closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp = null != closure_1;
        }
        if (!tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[7]);
          closeResult = obj.close();
        }
        return;
      }
    }
    const items1 = [stateFromStores, tmp6];
    cResult[7] = stateFromStores;
    cResult[8] = tmp6;
    cResult[9] = L;
    cResult[10] = items1;
  }
  if (null != tmp6) {
    class D {
      constructor(arg0) {
        navigation = arg0.navigation;
        obj = closure_1(closure_1_2[7]);
        saveRouteStackResult = obj.saveRouteStack(navigation.getState());
        return;
      }
    }
    class L {
      constructor() {
        tmp = null != closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp = null != closure_1;
        }
        if (!tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[7]);
          closeResult = obj.close();
        }
        return;
      }
    }
  }
  cResult[4] = tmp6;
  cResult[5] = bottom;
  cResult[6] = undefined;
}) : (() => {
  let LANDING;
  let closure_1;
  let stateFromStores;
  let tmp13;
  let tmp = stateFromStores;
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp2 = require("useInitialValue")(() => GuildSettingsStore.getGuildId());
  importDefault = tmp2;
  let obj = bottom(stateFromStores[58]);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_1));
  const items1 = [bottom, tmp2];
  const memo = react.useMemo(() => {
    let tmp2;
    if (null != closure_1) {
      tmp2 = getScreens(tmp, bottom);
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores, tmp2];
  const effect = react.useEffect(() => {
    const tmp = null != closure_1 && null != stateFromStores;
    if (!tmp) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.close();
    }
  }, items2);
  const first = _slicedToArray(react.useState(() => GuildSettingsStore.getSavedRouteState()), 1)[0];
  let tmp10Result = null;
  const tmp3 = bottom;
  if (null != memo) {
    const obj2 = { onWillFocus: tmp8, initialRouteName: LANDING, initialRouteState: tmp13, screens: memo };
    LANDING = undefined;
    const Navigator = tmp3(tmp[59]).Navigator;
    const tmp10 = jsx;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    tmp13 = undefined;
    if (null != first) {
      tmp13 = first;
    }
    tmp10Result = tmp10(Navigator, obj2);
  }
  return tmp10Result;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default tmp3;
