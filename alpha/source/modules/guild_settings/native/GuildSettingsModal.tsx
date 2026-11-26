// Module ID: 19901
// Function ID: 19902
// Name: GuildSettingsModal
// Dependencies: [32, 19, 4914, 8574, 1071, 21, 17871, 8573, 1264, 1112, 7191, 19902, 19913, 19920, 19921, 19940, 19959, 19964, 19979, 19984, 19996, 20009, 20024, 20026, 19181, 19190, 20034, 20038, 20039, 19192, 17872, 20040, 20041, 20061, 20082, 20086, 20089, 20092, 12488, 12502, 12509, 20093, 20098, 20099, 20121, 20143, 20209, 20210, 20224, 20261, 20264, 20265, 20268, 20276, 20277, 1629, 5622, 504, 7355, 2]
// Exports: default

// Module 19901 (GuildSettingsModal)
import Fragment from "Fragment" /* 21 */;
import intl43 from "intl" /* 1112 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8573 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 17871 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8574 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportAll;
let metroImportDefault;
function close() {
  const obj = GuildSettingsModalChannelsActionCreatorsDefault;
  obj.terminate();
  const obj2 = GuildSettingsActionCreatorsDefault;
  obj2.close();
}
({ GuildSettingsSections: metroImportDefault, WebhookTypes: metroImportAll } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  let LANDING;
  let closure_1;
  let stateFromStores;
  let tmp13;
  let tmp = stateFromStores;
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp2 = require("react")(() => GuildSettingsStore.getGuildId());
  importDefault = tmp2;
  let obj = bottom(stateFromStores[57]);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_1));
  const items1 = [bottom, tmp2];
  const memo = react.useMemo(() => {
    let closeGuildSettings;
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
    let intl42;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let obj2;
    let obj5;
    let tmp;
    let tmp2;
    if (null != closure_1) {
      let closure_0 = tmp;
      let obj = { contentContainerStyle: obj2 };
      const obj3 = {};
      obj2 = { paddingBottom: 16 + bottom };
      const LANDING = metroImportDefault.LANDING;
      const obj4 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_LANDING,
        title: intl.string(intl43.t["154/bL"]),
        headerLeft: obj5.getHeaderCloseButton(close),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[11]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl = intl43.intl;
      obj3[LANDING] = obj4;
      obj5 = NavigatorHeader;
      const OVERVIEW = metroImportDefault.OVERVIEW;
      const obj6 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
        title: intl2.string(intl43.t["/dp6yY"]),
        render() {
            obj = {};
            const tmp = closure_2_1(stateFromStores[12]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl2 = intl43.intl;
      obj3[OVERVIEW] = obj6;
      const MODERATION = metroImportDefault.MODERATION;
      const obj7 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MODERATION,
        title: intl3.string(intl43.t["5tbTdV"]),
        render() {
            obj = {};
            const tmp = closure_2_1(stateFromStores[13]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl3 = intl43.intl;
      obj3[MODERATION] = obj7;
      const GUILD_AUTOMOD = metroImportDefault.GUILD_AUTOMOD;
      const obj8 = {
        title: intl4.string(intl43.t.uRelgx),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[14]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl4 = intl43.intl;
      obj3[GUILD_AUTOMOD] = obj8;
      const GUILD_AUTOMOD_RULE = metroImportDefault.GUILD_AUTOMOD_RULE;
      const obj9 = {
        title: intl5.string(intl43.t.uRelgx),
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[15]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl5 = intl43.intl;
      obj3[GUILD_AUTOMOD_RULE] = obj9;
      const AUDIT_LOG = metroImportDefault.AUDIT_LOG;
      const obj10 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
        title: intl6.string(intl43.t.SPWLyT),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[16]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl6 = intl43.intl;
      obj3[AUDIT_LOG] = obj10;
      const AUDIT_LOG_FILTER = metroImportDefault.AUDIT_LOG_FILTER;
      const obj11 = {
        title: intl7.string(intl43.t.pEasFX),
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[17]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl7 = intl43.intl;
      obj3[AUDIT_LOG_FILTER] = obj11;
      const INTEGRATIONS = metroImportDefault.INTEGRATIONS;
      const obj12 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
        title: intl8.string(intl43.t.CIsNZw),
        render() {
            obj = {};
            const tmp = closure_2_1(stateFromStores[18]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl8 = intl43.intl;
      obj3[INTEGRATIONS] = obj12;
      const EMOJI = metroImportDefault.EMOJI;
      const obj13 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_EMOJI,
        title: intl9.string(intl43.t.sMOuuS),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[19]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl9 = intl43.intl;
      obj3[EMOJI] = obj13;
      const STICKERS = metroImportDefault.STICKERS;
      const obj14 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_STICKERS,
        title: intl10.string(intl43.t.R5nQkS),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[20]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl10 = intl43.intl;
      obj3[STICKERS] = obj14;
      const SOUNDBOARD = metroImportDefault.SOUNDBOARD;
      const obj15 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
        title: intl11.string(intl43.t.OWQNYr),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[21]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl11 = intl43.intl;
      obj3[SOUNDBOARD] = obj15;
      const TAG = metroImportDefault.TAG;
      const obj16 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TAG,
        title: intl12.string(intl43.t["2QmKZ2"]),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[22]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl12 = intl43.intl;
      obj3[TAG] = obj16;
      const TAG_CUSTOMIZE = metroImportDefault.TAG_CUSTOMIZE;
      const obj17 = {
        title: intl13.string(intl43.t.r4R7mm),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[23]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl13 = intl43.intl;
      obj3[TAG_CUSTOMIZE] = obj17;
      const WEBHOOKS = metroImportDefault.WEBHOOKS;
      const obj18 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
        title: intl14.string(intl43.t.jp25Id),
        render() {
            obj = { guildId, webhookType: constants.INCOMING };
            const tmp = closure_2_1(stateFromStores[24]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl14 = intl43.intl;
      obj3[WEBHOOKS] = obj18;
      const EDIT_WEBHOOK = metroImportDefault.EDIT_WEBHOOK;
      const obj19 = {
        title: intl15.string(intl43.t["6SE3L3"]),
        render(arg0) {
            obj = {};
            const tmp = closure_2_1(stateFromStores[25]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl15 = intl43.intl;
      obj3[EDIT_WEBHOOK] = obj19;
      const CHANNELS_FOLLOWED = metroImportDefault.CHANNELS_FOLLOWED;
      const obj20 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
        title: intl16.string(intl43.t.OrV60r),
        render() {
            obj = { guildId, webhookType: constants.CHANNEL_FOLLOWER };
            const tmp = closure_2_1(stateFromStores[24]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl16 = intl43.intl;
      obj3[CHANNELS_FOLLOWED] = obj20;
      const INTEGRATION_SETTINGS = metroImportDefault.INTEGRATION_SETTINGS;
      const obj21 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
        title: intl17.string(intl43.t.sE5hSZ),
        render(arg0) {
            obj = {};
            const tmp = closure_2_1(stateFromStores[26]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl17 = intl43.intl;
      obj3[INTEGRATION_SETTINGS] = obj21;
      const INTEGRATION_PLATFORM = metroImportDefault.INTEGRATION_PLATFORM;
      const obj22 = {
        title: intl18.string(intl43.t.CIsNZw),
        render(arg0) {
            obj = { closeGuildSettings };
            const tmp = closure_2_1(stateFromStores[27]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl18 = intl43.intl;
      obj3[INTEGRATION_PLATFORM] = obj22;
      const LOBBIES_LINKED = metroImportDefault.LOBBIES_LINKED;
      const obj23 = {
        title: intl19.string(intl43.t.tqtDXC),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[28]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl19 = intl43.intl;
      obj3[LOBBIES_LINKED] = obj23;
      const EDIT_LINKED_LOBBY = metroImportDefault.EDIT_LINKED_LOBBY;
      const obj24 = {
        title: intl20.string(intl43.t.OJknhi),
        render(arg0) {
            obj = {};
            const tmp = closure_2_1(stateFromStores[29]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl20 = intl43.intl;
      obj3[EDIT_LINKED_LOBBY] = obj24;
      const CHANNELS = metroImportDefault.CHANNELS;
      const obj25 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_CHANNELS,
        title: intl21.string(intl43.t.OGiMXJ),
        postponeRender: true,
        render() {
            obj = { guildId, onDone: closure_2_1(stateFromStores[6]).stopReordering };
            const tmp = closure_2_1(stateFromStores[30]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl21 = intl43.intl;
      obj3[CHANNELS] = obj25;
      const SECURITY = metroImportDefault.SECURITY;
      const obj26 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SECURITY,
        title: intl22.string(intl43.t.Am9YHi),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[31]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl22 = intl43.intl;
      obj3[SECURITY] = obj26;
      const ROLES = metroImportDefault.ROLES;
      const obj27 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ROLES,
        title: intl23.string(intl43.t["LPJmL/"]),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[32]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl23 = intl43.intl;
      obj3[ROLES] = obj27;
      const ROLE_EDIT_REFRESH = metroImportDefault.ROLE_EDIT_REFRESH;
      const obj28 = {
        title: intl24.string(intl43.t["LPJmL/"]),
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[33]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl24 = intl43.intl;
      obj3[ROLE_EDIT_REFRESH] = obj28;
      const VANITY_URL = metroImportDefault.VANITY_URL;
      const obj29 = {
        title: intl25.string(intl43.t["5XZKy/"]),
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[34]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl25 = intl43.intl;
      obj3[VANITY_URL] = obj29;
      const INSTANT_INVITES = metroImportDefault.INSTANT_INVITES;
      const obj30 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INVITES,
        title: intl26.string(intl43.t.ngRFjZ),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[35]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl26 = intl43.intl;
      obj3[INSTANT_INVITES] = obj30;
      const GUILD_TEMPLATES = metroImportDefault.GUILD_TEMPLATES;
      const obj31 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
        title: intl27.string(intl43.t.KUw7Ss),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[36]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl27 = intl43.intl;
      obj3[GUILD_TEMPLATES] = obj31;
      const MEMBERS = metroImportDefault.MEMBERS;
      const obj32 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MEMBERS,
        title: intl28.string(intl43.t["9Oq93m"]),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[37]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl28 = intl43.intl;
      obj3[MEMBERS] = obj32;
      const obj33 = {
        render(arg0) {
            obj = { guildId };
            const GuildSettingsModalMemberEditScene = bottom(stateFromStores[38]).GuildSettingsModalMemberEditScene;
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(GuildSettingsModalMemberEditScene, obj);
          }
      };
      obj3[metroImportDefault.MEMBER_EDIT] = obj33;
      const obj34 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[39]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      obj3[metroImportDefault.MEMBER_KICK] = obj34;
      const obj35 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[40]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      obj3[metroImportDefault.MEMBER_BAN] = obj35;
      const BANS = metroImportDefault.BANS;
      const obj36 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_BANS,
        title: intl29.string(intl43.t.ZbeITS),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[41]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl29 = intl43.intl;
      obj3[BANS] = obj36;
      const COMMUNITY = metroImportDefault.COMMUNITY;
      const obj37 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
        title: intl30.string(intl43.t.nRtNqn),
        postponeRender: true,
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[42]);
            const merged = Object.assign(arg0);
            return closure_2_9(tmp, obj);
          }
      };
      intl30 = intl43.intl;
      obj3[COMMUNITY] = obj37;
      const COMMUNITY_INTRO = metroImportDefault.COMMUNITY_INTRO;
      const obj38 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
        title: intl31.string(intl43.t.ElKTeb),
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[43]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl31 = intl43.intl;
      obj3[COMMUNITY_INTRO] = obj38;
      const ANALYTICS = metroImportDefault.ANALYTICS;
      const obj39 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
        title: intl32.string(intl43.t["0wWfUG"]),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[44]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl32 = intl43.intl;
      obj3[ANALYTICS] = obj39;
      const ROLE_SUBSCRIPTIONS = metroImportDefault.ROLE_SUBSCRIPTIONS;
      const obj40 = {
        title: intl33.string(intl43.t["KzCF/6"]),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[45]), obj);
          }
      };
      intl33 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS] = obj40;
      const ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION = metroImportDefault.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION;
      const obj41 = {
        title: intl34.string(intl43.t["KzCF/6"]),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[46]), obj);
          }
      };
      intl34 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj41;
      const ROLE_SUBSCRIPTIONS_BASIC = metroImportDefault.ROLE_SUBSCRIPTIONS_BASIC;
      const obj42 = {
        title: intl35.string(intl43.t["/CfKoD"]),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[47]), obj);
          }
      };
      intl35 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_BASIC] = obj42;
      const ROLE_SUBSCRIPTIONS_TIERS = metroImportDefault.ROLE_SUBSCRIPTIONS_TIERS;
      const obj43 = {
        title: intl36.string(intl43.t.pXbGYc),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[48]), obj);
          }
      };
      intl36 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_TIERS] = obj43;
      const ROLE_SUBSCRIPTIONS_TIER_EDIT = metroImportDefault.ROLE_SUBSCRIPTIONS_TIER_EDIT;
      const obj44 = {
        title: intl37.string(intl43.t["KzCF/6"]),
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[49]);
            const merged = Object.assign(arg0);
            return closure_2_9(tmp, obj);
          }
      };
      intl37 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj44;
      const ROLE_SUBSCRIPTIONS_PAYMENTS = metroImportDefault.ROLE_SUBSCRIPTIONS_PAYMENTS;
      const obj45 = {
        title: intl38.string(intl43.t.p2Rsdl),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[50]), obj);
          }
      };
      intl38 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_PAYMENTS] = obj45;
      const ROLE_SUBSCRIPTIONS_EMOJIS = metroImportDefault.ROLE_SUBSCRIPTIONS_EMOJIS;
      const obj46 = {
        title: intl39.string(intl43.t.C5Dbwn),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[51]), obj);
          }
      };
      intl39 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_EMOJIS] = obj46;
      const ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION = metroImportDefault.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION;
      const obj47 = {
        title: intl40.string(intl43.t["KzCF/6"]),
        render(arg0) {
            obj = { guildId };
            const tmp = closure_2_1(stateFromStores[52]);
            const merged = Object.assign(arg0);
            return closure_2_9(tmp, obj);
          }
      };
      intl40 = intl43.intl;
      obj3[ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj47;
      const OFFICIAL_MESSAGES = metroImportDefault.OFFICIAL_MESSAGES;
      const obj48 = {
        title: intl41.string(intl43.t.xHEzFh),
        render() {
            obj = { guildId };
            return closure_2_9(closure_2_1(stateFromStores[53]), obj);
          }
      };
      intl41 = intl43.intl;
      obj3[OFFICIAL_MESSAGES] = obj48;
      const GUILD_SPACE = metroImportDefault.GUILD_SPACE;
      const obj49 = {
        title: intl42.string(intl43.t.OBskVU),
        render() {
            obj = {};
            const tmp = closure_2_1(stateFromStores[54]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl42 = intl43.intl;
      obj3[GUILD_SPACE] = obj49;
      tmp2 = obj3;
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
    let obj2 = { onWillFocus: tmp8, initialRouteName: LANDING, initialRouteState: tmp13, screens: memo };
    LANDING = undefined;
    const Navigator = tmp3(tmp[58]).Navigator;
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
};
