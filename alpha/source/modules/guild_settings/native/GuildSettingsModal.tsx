// Module ID: 19644
// Function ID: 19645
// Name: GuildSettingsModal
// Dependencies: [32, 19, 4885, 9075, 1072, 21, 18193, 9074, 1260, 1113, 6998, 19645, 19655, 19663, 19664, 19683, 19702, 19707, 19722, 19723, 19735, 19747, 19749, 18922, 18931, 19757, 19761, 19762, 18933, 18194, 19763, 19764, 19784, 19805, 19809, 19812, 19815, 13248, 13262, 13266, 19816, 19821, 19822, 19844, 19866, 19932, 19933, 19947, 19984, 19987, 19988, 19991, 19999, 20000, 1625, 5612, 504, 7169, 2]
// Exports: default

// Module 19644 (GuildSettingsModal)
import Fragment from "Fragment" /* 21 */;
import intl42 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 18193 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
function close() {
  const obj = GuildSettingsModalChannelsActionCreatorsDefault;
  obj.terminate();
  const obj2 = GuildSettingsActionCreatorsDefault;
  obj2.close();
}
let _slicedToArray = _slicedToArray_mod;
({ GuildSettingsSections: metroImportDefault, WebhookTypes: metroImportAll } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  let LANDING;
  let closure_3;
  let left;
  let right;
  let stateFromStores;
  let tmp14;
  let tmp = right;
  let rect = left(right[54])();
  const bottom = rect.bottom;
  left = rect.left;
  right = rect.right;
  const items = [left, right];
  const memo = stateFromStores.useMemo(() => {
    const rect = { left, right };
    return rect;
  }, items);
  const tmp3 = left(right[55])(() => GuildSettingsStore.getGuildId());
  _slicedToArray = tmp3;
  let obj = bottom(right[56]);
  const items1 = [GuildStore];
  stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(closure_3));
  const items2 = [bottom, tmp3];
  const memo1 = stateFromStores.useMemo(() => {
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
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let obj2;
    let obj5;
    let tmp;
    let tmp2;
    if (null != closure_3) {
      let closure_0 = tmp;
      let obj = { contentContainerStyle: obj2 };
      const obj3 = {};
      obj2 = { paddingBottom: 16 + bottom };
      const LANDING = metroImportDefault.LANDING;
      const obj4 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_LANDING,
        title: intl.string(intl42.t["154/bL"]),
        headerLeft: obj5.getHeaderCloseButton(close),
        render() {
            obj = { guildId };
            const tmp = left(right[11]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl = intl42.intl;
      obj3[LANDING] = obj4;
      obj5 = NavigatorHeader;
      const OVERVIEW = metroImportDefault.OVERVIEW;
      const obj6 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
        title: intl2.string(intl42.t["/dp6yY"]),
        render() {
            obj = {};
            const tmp = left(right[12]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl2 = intl42.intl;
      obj3[OVERVIEW] = obj6;
      const MODERATION = metroImportDefault.MODERATION;
      const obj7 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MODERATION,
        title: intl3.string(intl42.t["5tbTdV"]),
        render() {
            obj = {};
            const tmp = left(right[13]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl3 = intl42.intl;
      obj3[MODERATION] = obj7;
      const GUILD_AUTOMOD = metroImportDefault.GUILD_AUTOMOD;
      const obj8 = {
        title: intl4.string(intl42.t.uRelgx),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[14]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl4 = intl42.intl;
      obj3[GUILD_AUTOMOD] = obj8;
      const GUILD_AUTOMOD_RULE = metroImportDefault.GUILD_AUTOMOD_RULE;
      const obj9 = {
        title: intl5.string(intl42.t.uRelgx),
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[15]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl5 = intl42.intl;
      obj3[GUILD_AUTOMOD_RULE] = obj9;
      const AUDIT_LOG = metroImportDefault.AUDIT_LOG;
      const obj10 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
        title: intl6.string(intl42.t.SPWLyT),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[16]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl6 = intl42.intl;
      obj3[AUDIT_LOG] = obj10;
      const AUDIT_LOG_FILTER = metroImportDefault.AUDIT_LOG_FILTER;
      const obj11 = {
        title: intl7.string(intl42.t.pEasFX),
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[17]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl7 = intl42.intl;
      obj3[AUDIT_LOG_FILTER] = obj11;
      const INTEGRATIONS = metroImportDefault.INTEGRATIONS;
      const obj12 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
        title: intl8.string(intl42.t.CIsNZw),
        render() {
            obj = {};
            const tmp = left(right[18]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl8 = intl42.intl;
      obj3[INTEGRATIONS] = obj12;
      const EMOJI = metroImportDefault.EMOJI;
      const obj13 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_EMOJI,
        title: intl9.string(intl42.t.sMOuuS),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[19]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl9 = intl42.intl;
      obj3[EMOJI] = obj13;
      const STICKERS = metroImportDefault.STICKERS;
      const obj14 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_STICKERS,
        title: intl10.string(intl42.t.R5nQkS),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[20]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl10 = intl42.intl;
      obj3[STICKERS] = obj14;
      const TAG = metroImportDefault.TAG;
      const obj15 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TAG,
        title: intl11.string(intl42.t["2QmKZ2"]),
        render() {
            obj = { guildId };
            const tmp = left(right[21]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl11 = intl42.intl;
      obj3[TAG] = obj15;
      const TAG_CUSTOMIZE = metroImportDefault.TAG_CUSTOMIZE;
      const obj16 = {
        title: intl12.string(intl42.t.r4R7mm),
        render() {
            obj = { guildId };
            const tmp = left(right[22]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl12 = intl42.intl;
      obj3[TAG_CUSTOMIZE] = obj16;
      const WEBHOOKS = metroImportDefault.WEBHOOKS;
      const obj17 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
        title: intl13.string(intl42.t.jp25Id),
        render() {
            obj = { guildId, webhookType: constants.INCOMING };
            const tmp = left(right[23]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl13 = intl42.intl;
      obj3[WEBHOOKS] = obj17;
      const EDIT_WEBHOOK = metroImportDefault.EDIT_WEBHOOK;
      const obj18 = {
        title: intl14.string(intl42.t["6SE3L3"]),
        render(arg0) {
            obj = {};
            const tmp = left(right[24]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl14 = intl42.intl;
      obj3[EDIT_WEBHOOK] = obj18;
      const CHANNELS_FOLLOWED = metroImportDefault.CHANNELS_FOLLOWED;
      const obj19 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
        title: intl15.string(intl42.t.OrV60r),
        render() {
            obj = { guildId, webhookType: constants.CHANNEL_FOLLOWER };
            const tmp = left(right[23]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl15 = intl42.intl;
      obj3[CHANNELS_FOLLOWED] = obj19;
      const INTEGRATION_SETTINGS = metroImportDefault.INTEGRATION_SETTINGS;
      const obj20 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
        title: intl16.string(intl42.t.sE5hSZ),
        render(arg0) {
            obj = {};
            const tmp = left(right[25]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl16 = intl42.intl;
      obj3[INTEGRATION_SETTINGS] = obj20;
      const INTEGRATION_PLATFORM = metroImportDefault.INTEGRATION_PLATFORM;
      const obj21 = {
        title: intl17.string(intl42.t.CIsNZw),
        render(arg0) {
            obj = { closeGuildSettings };
            const tmp = left(right[26]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl17 = intl42.intl;
      obj3[INTEGRATION_PLATFORM] = obj21;
      const LOBBIES_LINKED = metroImportDefault.LOBBIES_LINKED;
      const obj22 = {
        title: intl18.string(intl42.t.tqtDXC),
        render() {
            obj = { guildId };
            const tmp = left(right[27]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl18 = intl42.intl;
      obj3[LOBBIES_LINKED] = obj22;
      const EDIT_LINKED_LOBBY = metroImportDefault.EDIT_LINKED_LOBBY;
      const obj23 = {
        title: intl19.string(intl42.t.OJknhi),
        render(arg0) {
            obj = {};
            const tmp = left(right[28]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl19 = intl42.intl;
      obj3[EDIT_LINKED_LOBBY] = obj23;
      const CHANNELS = metroImportDefault.CHANNELS;
      const obj24 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_CHANNELS,
        title: intl20.string(intl42.t.OGiMXJ),
        postponeRender: true,
        render() {
            obj = { guildId, onDone: left(right[6]).stopReordering };
            const tmp = left(right[29]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl20 = intl42.intl;
      obj3[CHANNELS] = obj24;
      const SECURITY = metroImportDefault.SECURITY;
      const obj25 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SECURITY,
        title: intl21.string(intl42.t.Am9YHi),
        render() {
            obj = { guildId };
            const tmp = left(right[30]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl21 = intl42.intl;
      obj3[SECURITY] = obj25;
      const ROLES = metroImportDefault.ROLES;
      const obj26 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ROLES,
        title: intl22.string(intl42.t["LPJmL/"]),
        render() {
            obj = { guildId };
            const tmp = left(right[31]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl22 = intl42.intl;
      obj3[ROLES] = obj26;
      const ROLE_EDIT_REFRESH = metroImportDefault.ROLE_EDIT_REFRESH;
      const obj27 = {
        title: intl23.string(intl42.t["LPJmL/"]),
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[32]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl23 = intl42.intl;
      obj3[ROLE_EDIT_REFRESH] = obj27;
      const VANITY_URL = metroImportDefault.VANITY_URL;
      const obj28 = {
        title: intl24.string(intl42.t["5XZKy/"]),
        render() {
            obj = { guildId };
            const tmp = left(right[33]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl24 = intl42.intl;
      obj3[VANITY_URL] = obj28;
      const INSTANT_INVITES = metroImportDefault.INSTANT_INVITES;
      const obj29 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INVITES,
        title: intl25.string(intl42.t.ngRFjZ),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[34]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl25 = intl42.intl;
      obj3[INSTANT_INVITES] = obj29;
      const GUILD_TEMPLATES = metroImportDefault.GUILD_TEMPLATES;
      const obj30 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
        title: intl26.string(intl42.t.KUw7Ss),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[35]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl26 = intl42.intl;
      obj3[GUILD_TEMPLATES] = obj30;
      const MEMBERS = metroImportDefault.MEMBERS;
      const obj31 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MEMBERS,
        title: intl27.string(intl42.t["9Oq93m"]),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[36]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl27 = intl42.intl;
      obj3[MEMBERS] = obj31;
      const obj32 = {
        render(arg0) {
            obj = { guildId };
            const GuildSettingsModalMemberEditScene = bottom(right[37]).GuildSettingsModalMemberEditScene;
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(GuildSettingsModalMemberEditScene, obj);
          }
      };
      obj3[metroImportDefault.MEMBER_EDIT] = obj32;
      const obj33 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[38]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      obj3[metroImportDefault.MEMBER_KICK] = obj33;
      const obj34 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[39]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      obj3[metroImportDefault.MEMBER_BAN] = obj34;
      const BANS = metroImportDefault.BANS;
      const obj35 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_BANS,
        title: intl28.string(intl42.t.ZbeITS),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[40]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl28 = intl42.intl;
      obj3[BANS] = obj35;
      const COMMUNITY = metroImportDefault.COMMUNITY;
      const obj36 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
        title: intl29.string(intl42.t.nRtNqn),
        postponeRender: true,
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[41]);
            const merged = Object.assign(arg0);
            return closure_2_9(tmp, obj);
          }
      };
      intl29 = intl42.intl;
      obj3[COMMUNITY] = obj36;
      const COMMUNITY_INTRO = metroImportDefault.COMMUNITY_INTRO;
      const obj37 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
        title: intl30.string(intl42.t.ElKTeb),
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[42]);
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl30 = intl42.intl;
      obj3[COMMUNITY_INTRO] = obj37;
      const ANALYTICS = metroImportDefault.ANALYTICS;
      const obj38 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
        title: intl31.string(intl42.t["0wWfUG"]),
        postponeRender: true,
        render() {
            obj = { guildId };
            const tmp = left(right[43]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl31 = intl42.intl;
      obj3[ANALYTICS] = obj38;
      const ROLE_SUBSCRIPTIONS = metroImportDefault.ROLE_SUBSCRIPTIONS;
      const obj39 = {
        title: intl32.string(intl42.t["KzCF/6"]),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[44]), obj);
          }
      };
      intl32 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS] = obj39;
      const ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION = metroImportDefault.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION;
      const obj40 = {
        title: intl33.string(intl42.t["KzCF/6"]),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[45]), obj);
          }
      };
      intl33 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj40;
      const ROLE_SUBSCRIPTIONS_BASIC = metroImportDefault.ROLE_SUBSCRIPTIONS_BASIC;
      const obj41 = {
        title: intl34.string(intl42.t["/CfKoD"]),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[46]), obj);
          }
      };
      intl34 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_BASIC] = obj41;
      const ROLE_SUBSCRIPTIONS_TIERS = metroImportDefault.ROLE_SUBSCRIPTIONS_TIERS;
      const obj42 = {
        title: intl35.string(intl42.t.pXbGYc),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[47]), obj);
          }
      };
      intl35 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_TIERS] = obj42;
      const ROLE_SUBSCRIPTIONS_TIER_EDIT = metroImportDefault.ROLE_SUBSCRIPTIONS_TIER_EDIT;
      const obj43 = {
        title: intl36.string(intl42.t["KzCF/6"]),
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[48]);
            const merged = Object.assign(arg0);
            return closure_2_9(tmp, obj);
          }
      };
      intl36 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj43;
      const ROLE_SUBSCRIPTIONS_PAYMENTS = metroImportDefault.ROLE_SUBSCRIPTIONS_PAYMENTS;
      const obj44 = {
        title: intl37.string(intl42.t.p2Rsdl),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[49]), obj);
          }
      };
      intl37 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_PAYMENTS] = obj44;
      const ROLE_SUBSCRIPTIONS_EMOJIS = metroImportDefault.ROLE_SUBSCRIPTIONS_EMOJIS;
      const obj45 = {
        title: intl38.string(intl42.t.C5Dbwn),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[50]), obj);
          }
      };
      intl38 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_EMOJIS] = obj45;
      const ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION = metroImportDefault.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION;
      const obj46 = {
        title: intl39.string(intl42.t["KzCF/6"]),
        render(arg0) {
            obj = { guildId };
            const tmp = left(right[51]);
            const merged = Object.assign(arg0);
            return closure_2_9(tmp, obj);
          }
      };
      intl39 = intl42.intl;
      obj3[ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj46;
      const OFFICIAL_MESSAGES = metroImportDefault.OFFICIAL_MESSAGES;
      const obj47 = {
        title: intl40.string(intl42.t.xHEzFh),
        render() {
            obj = { guildId };
            return closure_2_9(left(right[52]), obj);
          }
      };
      intl40 = intl42.intl;
      obj3[OFFICIAL_MESSAGES] = obj47;
      const GUILD_SPACE = metroImportDefault.GUILD_SPACE;
      const obj48 = {
        title: intl41.string(intl42.t.OBskVU),
        render() {
            obj = {};
            const tmp = left(right[53]);
            const merged = Object.assign(obj);
            return closure_2_9(tmp, obj);
          }
      };
      intl41 = intl42.intl;
      obj3[GUILD_SPACE] = obj48;
      tmp2 = obj3;
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
    let obj2 = { onWillFocus: tmp9, initialRouteName: LANDING, initialRouteState: tmp14, screens: memo1, viewStyle: memo };
    LANDING = undefined;
    const Navigator = tmp4(tmp[57]).Navigator;
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
};
