// Module ID: 16088
// Function ID: 123615
// Name: close
// Dependencies: []
// Exports: default

// Module 16088 (close)
function close() {
  importDefault(dependencyMap[6]).terminate();
  const obj = importDefault(dependencyMap[6]);
  importDefault(dependencyMap[7]).close();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ GuildSettingsSections: closure_7, WebhookTypes: closure_8 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[53]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  const bottom = importDefault(dependencyMap[49])().bottom;
  const arg1 = bottom;
  const tmp = importDefault(dependencyMap[50])(() => store.getGuildId());
  const importDefault = tmp;
  let obj = arg1(dependencyMap[51]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(tmp));
  const dependencyMap = stateFromStores;
  const items1 = [bottom, tmp];
  const memo = React.useMemo(() => {
    let tmp;
    if (null != tmp) {
      tmp = function getScreens(arg0, bottom) {
        let obj = { paddingBottom: 16 + bottom };
        let closure_1 = { contentContainerStyle: obj };
        obj = {};
        obj = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_LANDING };
        const intl = arg0(closure_2[9]).intl;
        obj.title = intl.string(arg0(closure_2[9]).t.154/bL);
        let obj3 = arg0(closure_2[10]);
        obj.headerLeft = obj3.getHeaderCloseButton(closure_10);
        obj.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[11]), { guildId: arg0 });
        };
        obj[constants.LANDING] = obj;
        const obj1 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_OVERVIEW };
        const intl2 = arg0(closure_2[9]).intl;
        obj1.title = intl2.string(arg0(closure_2[9]).t./dp6yY);
        obj1.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[12]), {});
        };
        obj[constants.OVERVIEW] = obj1;
        const obj2 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_MODERATION };
        const intl3 = arg0(closure_2[9]).intl;
        obj2.title = intl3.string(arg0(closure_2[9]).t.5tbTdV);
        obj2.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[13]), {});
        };
        obj[constants.MODERATION] = obj2;
        obj3 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_AUDIT_LOG };
        const intl4 = arg0(closure_2[9]).intl;
        obj3.title = intl4.string(arg0(closure_2[9]).t.SPWLyT);
        obj3.postponeRender = true;
        obj3.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[14]), { guildId: arg0 });
        };
        obj[constants.AUDIT_LOG] = obj3;
        const obj4 = {};
        const intl5 = arg0(closure_2[9]).intl;
        obj4.title = intl5.string(arg0(closure_2[9]).t.pEasFX);
        obj4.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[15]), { guildId: arg0 });
        };
        obj[constants.AUDIT_LOG_FILTER] = obj4;
        const obj5 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_INTEGRATION };
        const intl6 = arg0(closure_2[9]).intl;
        obj5.title = intl6.string(arg0(closure_2[9]).t.CIsNZw);
        obj5.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[16]), {});
        };
        obj[constants.INTEGRATIONS] = obj5;
        const obj6 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_EMOJI };
        const intl7 = arg0(closure_2[9]).intl;
        obj6.title = intl7.string(arg0(closure_2[9]).t.sMOuuS);
        obj6.postponeRender = true;
        obj6.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[17]), { guildId: arg0 });
        };
        obj[constants.EMOJI] = obj6;
        const obj7 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_STICKERS };
        const intl8 = arg0(closure_2[9]).intl;
        obj7.title = intl8.string(arg0(closure_2[9]).t.R5nQkS);
        obj7.postponeRender = true;
        obj7.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[18]), { guildId: arg0 });
        };
        obj[constants.STICKERS] = obj7;
        const obj8 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_TAG };
        const intl9 = arg0(closure_2[9]).intl;
        obj8.title = intl9.string(arg0(closure_2[9]).t.2QmKZ2);
        obj8.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[19]), { guildId: arg0 });
        };
        obj[constants.TAG] = obj8;
        const obj9 = {};
        const intl10 = arg0(closure_2[9]).intl;
        obj9.title = intl10.string(arg0(closure_2[9]).t.r4R7mm);
        obj9.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[20]), { guildId: arg0 });
        };
        obj[constants.TAG_CUSTOMIZE] = obj9;
        const obj10 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_WEBHOOKS };
        const intl11 = arg0(closure_2[9]).intl;
        obj10.title = intl11.string(arg0(closure_2[9]).t.jp25Id);
        obj10.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[21]), { guildId: arg0, webhookType: constants.INCOMING });
        };
        obj[constants.WEBHOOKS] = obj10;
        const obj11 = {};
        const intl12 = arg0(closure_2[9]).intl;
        obj11.title = intl12.string(arg0(closure_2[9]).t.6SE3L3);
        obj11.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[22]), {});
        };
        obj[constants.EDIT_WEBHOOK] = obj11;
        const obj12 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_WEBHOOKS };
        const intl13 = arg0(closure_2[9]).intl;
        obj12.title = intl13.string(arg0(closure_2[9]).t.OrV60r);
        obj12.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[21]), { guildId: arg0, webhookType: constants.CHANNEL_FOLLOWER });
        };
        obj[constants.CHANNELS_FOLLOWED] = obj12;
        const obj13 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_INTEGRATION };
        const intl14 = arg0(closure_2[9]).intl;
        obj13.title = intl14.string(arg0(closure_2[9]).t.sE5hSZ);
        obj13.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[23]), {});
        };
        obj[constants.INTEGRATION_SETTINGS] = obj13;
        const obj14 = {};
        const intl15 = arg0(closure_2[9]).intl;
        obj14.title = intl15.string(arg0(closure_2[9]).t.CIsNZw);
        obj14.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["closeGuildSettings"] = closure_10;
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[24]), obj);
        };
        obj[constants.INTEGRATION_PLATFORM] = obj14;
        const obj15 = {};
        const intl16 = arg0(closure_2[9]).intl;
        obj15.title = intl16.string(arg0(closure_2[9]).t.tqtDXC);
        obj15.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[25]), { guildId: arg0 });
        };
        obj[constants.LOBBIES_LINKED] = obj15;
        const obj16 = {};
        const intl17 = arg0(closure_2[9]).intl;
        obj16.title = intl17.string(arg0(closure_2[9]).t.OJknhi);
        obj16.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[26]), {});
        };
        obj[constants.EDIT_LINKED_LOBBY] = obj16;
        const obj17 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_CHANNELS };
        const intl18 = arg0(closure_2[9]).intl;
        obj17.title = intl18.string(arg0(closure_2[9]).t.OGiMXJ);
        obj17.postponeRender = true;
        obj17.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[27]), { guildId: arg0 });
        };
        obj[constants.CHANNELS] = obj17;
        const obj18 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_SECURITY };
        const intl19 = arg0(closure_2[9]).intl;
        obj18.title = intl19.string(arg0(closure_2[9]).t.Am9YHi);
        obj18.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[28]), { guildId: arg0 });
        };
        obj[constants.SECURITY] = obj18;
        const obj19 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_ROLES };
        const intl20 = arg0(closure_2[9]).intl;
        obj19.title = intl20.string(arg0(closure_2[9]).t.LPJmL/);
        obj19.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[29]), { guildId: arg0 });
        };
        obj[constants.ROLES] = obj19;
        const obj20 = {};
        const intl21 = arg0(closure_2[9]).intl;
        obj20.title = intl21.string(arg0(closure_2[9]).t.LPJmL/);
        obj20.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[30]), { guildId: arg0 });
        };
        obj[constants.ROLE_EDIT_REFRESH] = obj20;
        const obj21 = {};
        const intl22 = arg0(closure_2[9]).intl;
        obj21.title = intl22.string(arg0(closure_2[9]).t.5XZKy/);
        obj21.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[31]), { guildId: arg0 });
        };
        obj[constants.VANITY_URL] = obj21;
        const obj22 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_INVITES };
        const intl23 = arg0(closure_2[9]).intl;
        obj22.title = intl23.string(arg0(closure_2[9]).t.ngRFjZ);
        obj22.postponeRender = true;
        obj22.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[32]), { guildId: arg0 });
        };
        obj[constants.INSTANT_INVITES] = obj22;
        const obj23 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_MEMBERS };
        const intl24 = arg0(closure_2[9]).intl;
        obj23.title = intl24.string(arg0(closure_2[9]).t.9Oq93m);
        obj23.postponeRender = true;
        obj23.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[33]), { guildId: arg0 });
        };
        obj[constants.MEMBERS] = obj23;
        obj[constants.MEMBER_EDIT] = {
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(closure_1);
            return callback2(arg0(closure_2[34]).GuildSettingsModalMemberEditScene, { guildId: arg0 });
          }
        };
        obj[constants.MEMBER_KICK] = {
          headerTitle() {
            return null;
          },
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(callback);
            return callback2(callback(closure_2[35]), { guildId: arg0 });
          }
        };
        obj[constants.MEMBER_BAN] = {
          headerTitle() {
            return null;
          },
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(callback);
            return callback2(callback(closure_2[36]), { guildId: arg0 });
          }
        };
        const obj24 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_BANS };
        const intl25 = arg0(closure_2[9]).intl;
        obj24.title = intl25.string(arg0(closure_2[9]).t.ZbeITS);
        obj24.postponeRender = true;
        obj24.render = function render() {
          const merged = Object.assign(callback);
          return callback2(callback(closure_2[37]), { guildId: arg0 });
        };
        obj[constants.BANS] = obj24;
        const obj25 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW };
        const intl26 = arg0(closure_2[9]).intl;
        obj25.title = intl26.string(arg0(closure_2[9]).t.nRtNqn);
        obj25.postponeRender = true;
        obj25.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = arg0;
          return callback2(callback(closure_2[38]), obj);
        };
        obj[constants.COMMUNITY] = obj25;
        const obj26 = { impressionName: arg0(closure_2[8]).ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME };
        const intl27 = arg0(closure_2[9]).intl;
        obj26.title = intl27.string(arg0(closure_2[9]).t.ElKTeb);
        obj26.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return callback2(callback(closure_2[39]), { guildId: arg0 });
        };
        obj[constants.COMMUNITY_INTRO] = obj26;
        const obj27 = {};
        const intl28 = arg0(closure_2[9]).intl;
        obj27.title = intl28.string(arg0(closure_2[9]).t.KzCF/6);
        obj27.render = function render() {
          return callback2(callback(closure_2[40]), { guildId: arg0 });
        };
        obj[constants.ROLE_SUBSCRIPTIONS] = obj27;
        const obj28 = {};
        const intl29 = arg0(closure_2[9]).intl;
        obj28.title = intl29.string(arg0(closure_2[9]).t.KzCF/6);
        obj28.render = function render() {
          return callback2(callback(closure_2[41]), { guildId: arg0 });
        };
        obj[constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj28;
        const obj29 = {};
        const intl30 = arg0(closure_2[9]).intl;
        obj29.title = intl30.string(arg0(closure_2[9]).t./CfKoD);
        obj29.render = function render() {
          return callback2(callback(closure_2[42]), { guildId: arg0 });
        };
        obj[constants.ROLE_SUBSCRIPTIONS_BASIC] = obj29;
        const obj30 = {};
        const intl31 = arg0(closure_2[9]).intl;
        obj30.title = intl31.string(arg0(closure_2[9]).t.pXbGYc);
        obj30.render = function render() {
          return callback2(callback(closure_2[43]), { guildId: arg0 });
        };
        obj[constants.ROLE_SUBSCRIPTIONS_TIERS] = obj30;
        const obj31 = {};
        const intl32 = arg0(closure_2[9]).intl;
        obj31.title = intl32.string(arg0(closure_2[9]).t.KzCF/6);
        obj31.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = arg0;
          return callback2(callback(closure_2[44]), obj);
        };
        obj[constants.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj31;
        const obj32 = {};
        const intl33 = arg0(closure_2[9]).intl;
        obj32.title = intl33.string(arg0(closure_2[9]).t.p2Rsdl);
        obj32.render = function render() {
          return callback2(callback(closure_2[45]), { guildId: arg0 });
        };
        obj[constants.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj32;
        const obj33 = {};
        const intl34 = arg0(closure_2[9]).intl;
        obj33.title = intl34.string(arg0(closure_2[9]).t.C5Dbwn);
        obj33.render = function render() {
          return callback2(callback(closure_2[46]), { guildId: arg0 });
        };
        obj[constants.ROLE_SUBSCRIPTIONS_EMOJIS] = obj33;
        const obj34 = {};
        const intl35 = arg0(closure_2[9]).intl;
        obj34.title = intl35.string(arg0(closure_2[9]).t.KzCF/6);
        obj34.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = arg0;
          return callback2(callback(closure_2[47]), obj);
        };
        obj[constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj34;
        const obj35 = {};
        const intl36 = arg0(closure_2[9]).intl;
        obj35.title = intl36.string(arg0(closure_2[9]).t.xHEzFh);
        obj35.render = function render() {
          return callback2(callback(closure_2[48]), { guildId: arg0 });
        };
        obj[constants.OFFICIAL_MESSAGES] = obj35;
        return obj;
      }(tmp, bottom);
    }
    return tmp;
  }, items1);
  const items2 = [stateFromStores, tmp];
  const effect = React.useEffect(() => {
    let tmp = null != tmp;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (!tmp) {
      tmp(stateFromStores[7]).close();
      const obj = tmp(stateFromStores[7]);
    }
  }, items2);
  const first = callback(React.useState(() => store.getSavedRouteState()), 1)[0];
  let tmp8Result = null;
  if (null != memo) {
    obj = { onWillFocus: tmp6 };
    let LANDING;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    obj.initialRouteName = LANDING;
    let tmp13;
    if (null != first) {
      tmp13 = first;
    }
    obj.initialRouteState = tmp13;
    obj.screens = memo;
    tmp8Result = jsx(arg1(dependencyMap[52]).Navigator, obj);
    const tmp8 = jsx;
  }
  return tmp8Result;
};
