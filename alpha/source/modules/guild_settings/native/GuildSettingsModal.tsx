// Module ID: 18148
// Function ID: 18149
// Name: GuildSettingsModal
// Dependencies: [32, 19, 2086, 8622, 1085, 21, 16488, 8621, 1273, 1126, 6205, 18149, 18161, 18166, 18167, 18186, 18205, 18210, 18225, 18226, 18238, 18250, 18252, 17475, 17484, 18260, 18264, 18265, 17486, 16489, 18266, 18267, 18287, 18308, 18312, 18315, 18318, 11351, 11365, 11390, 18319, 18324, 18325, 18347, 18370, 18410, 18411, 18425, 18464, 18468, 18469, 18472, 18480, 18481, 558, 576, 1631, 6176, 504, 6686, 2]

// Module 18148 (GuildSettingsModal)
import Fragment from "Fragment" /* 21 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8621 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11351 */;
import KickConfirmDefault from "KickConfirm" /* 11365 */;
import BanConfirmDefault from "BanConfirm" /* 11390 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16488 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16489 */;
import IntegrationsSettingsWebhooksOverviewDefault from "IntegrationsSettingsWebhooksOverview" /* 17475 */;
import IntegrationsSettingsEditWebhookDefault from "IntegrationsSettingsEditWebhook" /* 17484 */;
import IntegrationsSettingsEditLinkedLobbyDefault from "IntegrationsSettingsEditLinkedLobby" /* 17486 */;
import GuildSettingsModalLandingDefault from "GuildSettingsModalLanding" /* 18149 */;
import GuildSettingsModalOverviewDefault from "GuildSettingsModalOverview" /* 18161 */;
import GuildSettingsModalModerationDefault from "GuildSettingsModalModeration" /* 18166 */;
import GuildSettingsAutoModerationDefault from "GuildSettingsAutoModeration" /* 18167 */;
import GuildSettingsAutomodRuleDefault from "GuildSettingsAutomodRule" /* 18186 */;
import GuildSettingsModalAuditLogDefault from "GuildSettingsModalAuditLog" /* 18205 */;
import GuildSettingsModalAuditLogFilterDefault from "GuildSettingsModalAuditLogFilter" /* 18210 */;
import GuildSettingsModalIntegrationsDefault from "GuildSettingsModalIntegrations" /* 18225 */;
import GuildSettingsModalEmojiDefault from "GuildSettingsModalEmoji" /* 18226 */;
import GuildSettingsModalStickersDefault from "GuildSettingsModalStickers" /* 18238 */;
import GuildSettingsModalServerTagDefault from "GuildSettingsModalServerTag" /* 18250 */;
import GuildSettingsModalServerTagCustomizeDefault from "GuildSettingsModalServerTagCustomize" /* 18252 */;
import GuildSettingsModalIntegrationSettingsDefault from "GuildSettingsModalIntegrationSettings" /* 18260 */;
import GuildSettingsModalIntegrationPlatformDefault from "GuildSettingsModalIntegrationPlatform" /* 18264 */;
import GuildSettingsModalLobbiesLinkedDefault from "GuildSettingsModalLobbiesLinked" /* 18265 */;
import GuildSettingsModalSecurityDefault from "GuildSettingsModalSecurity" /* 18266 */;
import GuildSettingsRolesDefault from "GuildSettingsRoles" /* 18267 */;
import GuildSettingsRoleEditDefault from "GuildSettingsRoleEdit" /* 18287 */;
import GuildSettingsModalVanityURLDefault from "GuildSettingsModalVanityURL" /* 18308 */;
import GuildSettingsModalInstantInvitesDefault from "GuildSettingsModalInstantInvites" /* 18312 */;
import GuildSettingsModalTemplateDefault from "GuildSettingsModalTemplate" /* 18315 */;
import GuildSettingsModalMembersWrapperDefault from "GuildSettingsModalMembersWrapper" /* 18318 */;
import GuildSettingsModalBansDefault from "GuildSettingsModalBans" /* 18319 */;
import GuildSettingsModalCommunityDefault from "GuildSettingsModalCommunity" /* 18324 */;
import GuildSettingsModalCommunityIntroDefault from "GuildSettingsModalCommunityIntro" /* 18325 */;
import GuildSettingsModalAnalyticsDefault from "GuildSettingsModalAnalytics" /* 18347 */;
import GuildSettingsRoleSubscriptionsEmptyDefault from "GuildSettingsRoleSubscriptionsEmpty" /* 18370 */;
import GuildSettingsRoleSubscriptionsEnableMonetizationDefault from "GuildSettingsRoleSubscriptionsEnableMonetization" /* 18410 */;
import GuildSettingsRoleSubscriptionsGroupEditDefault from "GuildSettingsRoleSubscriptionsGroupEdit" /* 18411 */;
import GuildSettingsRoleSubscriptionTiersDefault from "GuildSettingsRoleSubscriptionTiers" /* 18425 */;
import GuildSettingsRoleSubscriptionTierEditDefault from "GuildSettingsRoleSubscriptionTierEdit" /* 18464 */;
import GuildSettingsRoleSubscriptionsPaymentsDefault from "GuildSettingsRoleSubscriptionsPayments" /* 18468 */;
import GuildSettingsRoleSubscriptionEmojisDefault from "GuildSettingsRoleSubscriptionEmojis" /* 18469 */;
import GuildSettingsRoleSubscriptionTierTemplateSelectionDefault from "GuildSettingsRoleSubscriptionTierTemplateSelection" /* 18472 */;
import GuildSettingsModalOfficialMessagesDefault from "GuildSettingsModalOfficialMessages" /* 18480 */;
import GuildSettingsModalGuildSpaceDefault from "GuildSettingsModalGuildSpace" /* 18481 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8622 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
let _slicedToArray = _slicedToArray_mod;
({ GuildSettingsSections: metroImportDefault, WebhookTypes: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModal() {
  let LANDING;
  let bottom;
  let closure_0;
  let left;
  let right;
  let stateFromStores;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(20);
  ({ bottom, left, right } = stateFromStores(1631)());
  stateFromStores(1631)();
  const tmp4 = stateFromStores;
  if (cResult[0] === left) {
    let tmp6;
    let tmp8;
    let tmp10;
    let tmp12;
    if (cResult[1] === right) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function p() {
        return GuildSettingsStore.getGuildId();
      };
      cResult[3] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const tmp9 = tmp4(6176)(tmp8);
    _require = tmp9;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildStore];
      cResult[4] = items;
      tmp10 = items;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp9) {
      class L {
        constructor() {
          return GuildStore.getGuild(closure_0);
        }
      }
      cResult[5] = tmp9;
      cResult[6] = L;
      tmp12 = L;
    } else {
      class L {
        constructor() {
          return GuildStore.getGuild(closure_0);
        }
      }
    }
    const tmpResult = tmp(504);
    stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
    if (cResult[7] === tmp9) {
      class L {
        constructor() {
          return GuildStore.getGuild(closure_0);
        }
      }
      if (cResult[10] === stateFromStores) {
        let tmp19;
        class L {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        const obj4 = react;
        class M {
          constructor() {
            const tmp = null != closure_0 && null != stateFromStores;
            if (!tmp) {
              const obj = GuildSettingsActionCreatorsDefault;
              obj.close();
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return GuildSettingsStore.getSavedRouteState();
            }
          }
          class M {
            constructor() {
              const tmp = null != closure_0 && null != stateFromStores;
              if (!tmp) {
                const obj = GuildSettingsActionCreatorsDefault;
                obj.close();
              }
            }
          }
          tmp19 = A;
        } else {
          class A {
            constructor() {
              return GuildSettingsStore.getSavedRouteState();
            }
          }
        }
        const first = _slicedToArray(obj4.useState(tmp19), 1)[0];
        const _Symbol4 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return GuildSettingsStore.getSavedRouteState();
            }
          }
          class M {
            constructor() {
              const tmp = null != closure_0 && null != stateFromStores;
              if (!tmp) {
                const obj = GuildSettingsActionCreatorsDefault;
                obj.close();
              }
            }
          }
        } else {
          class A {
            constructor() {
              return GuildSettingsStore.getSavedRouteState();
            }
          }
        }
        if (cResult[16] === first) {
          class A {
            constructor() {
              return GuildSettingsStore.getSavedRouteState();
            }
          }
        }
        let tmp27Result = null;
        if (null != tmp14) {
          class A {
            constructor() {
              return GuildSettingsStore.getSavedRouteState();
            }
          }
          const obj2 = { onWillFocus: null, initialRouteName: LANDING, initialRouteState: undefined, screens: tmp14, viewStyle: tmp6 };
          class M {
            constructor() {
              const tmp = null != closure_0 && null != stateFromStores;
              if (!tmp) {
                const obj = GuildSettingsActionCreatorsDefault;
                obj.close();
              }
            }
          }
          LANDING = undefined;
          const Navigator = tmp(6686).Navigator;
          if (null == first) {
            class A {
              constructor() {
                return GuildSettingsStore.getSavedRouteState();
              }
            }
            LANDING = constants.LANDING;
          }
          if (null != first) {
            class A {
              constructor() {
                return GuildSettingsStore.getSavedRouteState();
              }
            }
          }
          tmp27Result = tmp27(Navigator, obj2);
        }
        cResult[16] = first;
        cResult[17] = tmp6;
        cResult[18] = tmp14;
        cResult[19] = tmp27Result;
      }
      class M {
        constructor() {
          const tmp = null != closure_0 && null != stateFromStores;
          if (!tmp) {
            const obj = GuildSettingsActionCreatorsDefault;
            obj.close();
          }
        }
      }
      const items1 = [stateFromStores, tmp9];
      cResult[10] = stateFromStores;
      cResult[11] = tmp9;
      cResult[12] = M;
      cResult[13] = items1;
    }
    if (null != tmp9) {
      class A {
        constructor() {
          return GuildSettingsStore.getSavedRouteState();
        }
      }
      class M {
        constructor() {
          const tmp = null != closure_0 && null != stateFromStores;
          if (!tmp) {
            const obj = GuildSettingsActionCreatorsDefault;
            obj.close();
          }
        }
      }
    }
    cResult[7] = tmp9;
    cResult[8] = bottom;
    cResult[9] = undefined;
  }
  const rect = { left, right };
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = rect;
  tmp6 = rect;
}) : (function GuildSettingsModal() {
  let LANDING;
  let closure_3;
  let left;
  let right;
  let stateFromStores;
  let tmp14;
  let tmp = right;
  let rect = left(right[56])();
  const bottom = rect.bottom;
  left = rect.left;
  right = rect.right;
  const items = [left, right];
  const memo = stateFromStores.useMemo(() => {
    const rect = { left, right };
    return rect;
  }, items);
  const tmp3 = left(right[57])(() => GuildSettingsStore.getGuildId());
  _slicedToArray = tmp3;
  let obj = bottom(right[58]);
  const items1 = [GuildStore];
  stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(closure_3));
  const items2 = [bottom, tmp3];
  const memo1 = stateFromStores.useMemo(() => {
    let tmp2;
    if (null != closure_3) {
      tmp2 = getScreens(tmp, bottom);
    }
    return tmp2;
  }, items2);
  const items3 = [stateFromStores, tmp3];
  const effect = stateFromStores.useEffect(() => {
    const tmp = null != closure_3 && null != stateFromStores;
    if (!tmp) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.close();
    }
  }, items3);
  const first = _slicedToArray(stateFromStores.useState(() => GuildSettingsStore.getSavedRouteState()), 1)[0];
  let tmp11Result = null;
  const tmp4 = bottom;
  if (null != memo1) {
    const obj2 = { onWillFocus: tmp9, initialRouteName: LANDING, initialRouteState: tmp14, screens: memo1, viewStyle: memo };
    LANDING = undefined;
    const Navigator = tmp4(tmp[59]).Navigator;
    const tmp11 = jsx;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    tmp14 = undefined;
    if (null != first) {
      tmp14 = first;
    }
    tmp11Result = tmp11(Navigator, obj2);
  }
  return tmp11Result;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default tmp3;
