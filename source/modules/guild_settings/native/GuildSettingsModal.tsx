// Module ID: 16252
// Function ID: 126112
// Name: close
// Dependencies: [57, 31, 1838, 8483, 653, 33, 16253, 8482, 480, 1212, 5087, 16254, 16267, 16271, 16272, 16282, 16297, 16298, 16310, 16322, 16324, 15572, 15581, 16332, 16336, 16338, 15583, 16339, 16344, 16345, 16365, 16384, 16388, 16391, 11008, 11021, 11023, 16392, 16397, 16398, 16420, 16460, 16461, 16477, 16516, 16520, 16521, 16524, 16532, 1557, 5450, 566, 5517, 2]
// Exports: default

// Module 16252 (close)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "module_16391";

let closure_7;
let closure_8;
const require = arg1;
function close() {
  importDefault(16253).terminate();
  const obj = importDefault(16253);
  importDefault(8482).close();
}
({ GuildSettingsSections: closure_7, WebhookTypes: closure_8 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  const bottom = importDefault(stateFromStores[49])().bottom;
  let tmp = importDefault(stateFromStores[50])(() => outer1_6.getGuildId());
  importDefault = tmp;
  let obj = bottom(stateFromStores[51]);
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(closure_1));
  const items1 = [bottom, tmp];
  const memo = React.useMemo(() => {
    let tmp;
    if (null != closure_1) {
      tmp = (function getScreens(closure_1, bottom) {
        let closure_0 = closure_1;
        let obj = { paddingBottom: 16 + bottom };
        closure_1 = { contentContainerStyle: obj };
        obj = {};
        obj = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_LANDING };
        const intl = bottom(stateFromStores[9]).intl;
        obj.title = intl.string(bottom(stateFromStores[9]).t["154/bL"]);
        let obj3 = bottom(stateFromStores[10]);
        obj.headerLeft = obj3.getHeaderCloseButton(outer2_10);
        obj.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[11]), { guildId: closure_0 });
        };
        obj[outer2_7.LANDING] = obj;
        const obj1 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_OVERVIEW };
        const intl2 = bottom(stateFromStores[9]).intl;
        obj1.title = intl2.string(bottom(stateFromStores[9]).t["/dp6yY"]);
        obj1.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[12]), {});
        };
        obj[outer2_7.OVERVIEW] = obj1;
        const obj2 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_MODERATION };
        const intl3 = bottom(stateFromStores[9]).intl;
        obj2.title = intl3.string(bottom(stateFromStores[9]).t["5tbTdV"]);
        obj2.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[13]), {});
        };
        obj[outer2_7.MODERATION] = obj2;
        obj3 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_AUDIT_LOG };
        const intl4 = bottom(stateFromStores[9]).intl;
        obj3.title = intl4.string(bottom(stateFromStores[9]).t.SPWLyT);
        obj3.postponeRender = true;
        obj3.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[14]), { guildId: closure_0 });
        };
        obj[outer2_7.AUDIT_LOG] = obj3;
        const obj4 = {};
        const intl5 = bottom(stateFromStores[9]).intl;
        obj4.title = intl5.string(bottom(stateFromStores[9]).t.pEasFX);
        obj4.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[15]), { guildId: closure_0 });
        };
        obj[outer2_7.AUDIT_LOG_FILTER] = obj4;
        const obj5 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_INTEGRATION };
        const intl6 = bottom(stateFromStores[9]).intl;
        obj5.title = intl6.string(bottom(stateFromStores[9]).t.CIsNZw);
        obj5.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[16]), {});
        };
        obj[outer2_7.INTEGRATIONS] = obj5;
        const obj6 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_EMOJI };
        const intl7 = bottom(stateFromStores[9]).intl;
        obj6.title = intl7.string(bottom(stateFromStores[9]).t.sMOuuS);
        obj6.postponeRender = true;
        obj6.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[17]), { guildId: closure_0 });
        };
        obj[outer2_7.EMOJI] = obj6;
        const obj7 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_STICKERS };
        const intl8 = bottom(stateFromStores[9]).intl;
        obj7.title = intl8.string(bottom(stateFromStores[9]).t.R5nQkS);
        obj7.postponeRender = true;
        obj7.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[18]), { guildId: closure_0 });
        };
        obj[outer2_7.STICKERS] = obj7;
        const obj8 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_TAG };
        const intl9 = bottom(stateFromStores[9]).intl;
        obj8.title = intl9.string(bottom(stateFromStores[9]).t["2QmKZ2"]);
        obj8.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[19]), { guildId: closure_0 });
        };
        obj[outer2_7.TAG] = obj8;
        const obj9 = {};
        const intl10 = bottom(stateFromStores[9]).intl;
        obj9.title = intl10.string(bottom(stateFromStores[9]).t.r4R7mm);
        obj9.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[20]), { guildId: closure_0 });
        };
        obj[outer2_7.TAG_CUSTOMIZE] = obj9;
        const obj10 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_WEBHOOKS };
        const intl11 = bottom(stateFromStores[9]).intl;
        obj10.title = intl11.string(bottom(stateFromStores[9]).t.jp25Id);
        obj10.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[21]), { guildId: closure_0, webhookType: outer3_8.INCOMING });
        };
        obj[outer2_7.WEBHOOKS] = obj10;
        const obj11 = {};
        const intl12 = bottom(stateFromStores[9]).intl;
        obj11.title = intl12.string(bottom(stateFromStores[9]).t["6SE3L3"]);
        obj11.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[22]), {});
        };
        obj[outer2_7.EDIT_WEBHOOK] = obj11;
        const obj12 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_WEBHOOKS };
        const intl13 = bottom(stateFromStores[9]).intl;
        obj12.title = intl13.string(bottom(stateFromStores[9]).t.OrV60r);
        obj12.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[21]), { guildId: closure_0, webhookType: outer3_8.CHANNEL_FOLLOWER });
        };
        obj[outer2_7.CHANNELS_FOLLOWED] = obj12;
        const obj13 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_INTEGRATION };
        const intl14 = bottom(stateFromStores[9]).intl;
        obj13.title = intl14.string(bottom(stateFromStores[9]).t.sE5hSZ);
        obj13.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[23]), {});
        };
        obj[outer2_7.INTEGRATION_SETTINGS] = obj13;
        const obj14 = {};
        const intl15 = bottom(stateFromStores[9]).intl;
        obj14.title = intl15.string(bottom(stateFromStores[9]).t.CIsNZw);
        obj14.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["closeGuildSettings"] = outer3_10;
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[24]), obj);
        };
        obj[outer2_7.INTEGRATION_PLATFORM] = obj14;
        const obj15 = {};
        const intl16 = bottom(stateFromStores[9]).intl;
        obj15.title = intl16.string(bottom(stateFromStores[9]).t.tqtDXC);
        obj15.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[25]), { guildId: closure_0 });
        };
        obj[outer2_7.LOBBIES_LINKED] = obj15;
        const obj16 = {};
        const intl17 = bottom(stateFromStores[9]).intl;
        obj16.title = intl17.string(bottom(stateFromStores[9]).t.OJknhi);
        obj16.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[26]), {});
        };
        obj[outer2_7.EDIT_LINKED_LOBBY] = obj16;
        const obj17 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_CHANNELS };
        const intl18 = bottom(stateFromStores[9]).intl;
        obj17.title = intl18.string(bottom(stateFromStores[9]).t.OGiMXJ);
        obj17.postponeRender = true;
        obj17.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[27]), { guildId: closure_0 });
        };
        obj[outer2_7.CHANNELS] = obj17;
        const obj18 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_SECURITY };
        const intl19 = bottom(stateFromStores[9]).intl;
        obj18.title = intl19.string(bottom(stateFromStores[9]).t.Am9YHi);
        obj18.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[28]), { guildId: closure_0 });
        };
        obj[outer2_7.SECURITY] = obj18;
        const obj19 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_ROLES };
        const intl20 = bottom(stateFromStores[9]).intl;
        obj19.title = intl20.string(bottom(stateFromStores[9]).t["LPJmL/"]);
        obj19.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[29]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLES] = obj19;
        const obj20 = {};
        const intl21 = bottom(stateFromStores[9]).intl;
        obj20.title = intl21.string(bottom(stateFromStores[9]).t["LPJmL/"]);
        obj20.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[30]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_EDIT_REFRESH] = obj20;
        const obj21 = {};
        const intl22 = bottom(stateFromStores[9]).intl;
        obj21.title = intl22.string(bottom(stateFromStores[9]).t["5XZKy/"]);
        obj21.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[31]), { guildId: closure_0 });
        };
        obj[outer2_7.VANITY_URL] = obj21;
        const obj22 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_INVITES };
        const intl23 = bottom(stateFromStores[9]).intl;
        obj22.title = intl23.string(bottom(stateFromStores[9]).t.ngRFjZ);
        obj22.postponeRender = true;
        obj22.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[32]), { guildId: closure_0 });
        };
        obj[outer2_7.INSTANT_INVITES] = obj22;
        const obj23 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_MEMBERS };
        const intl24 = bottom(stateFromStores[9]).intl;
        obj23.title = intl24.string(bottom(stateFromStores[9]).t["9Oq93m"]);
        obj23.postponeRender = true;
        obj23.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[33]), { guildId: closure_0 });
        };
        obj[outer2_7.MEMBERS] = obj23;
        obj[outer2_7.MEMBER_EDIT] = {
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(closure_1);
            return outer3_9(bottom(stateFromStores[34]).GuildSettingsModalMemberEditScene, { guildId: closure_0 });
          }
        };
        obj[outer2_7.MEMBER_KICK] = {
          headerTitle() {
            return null;
          },
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(callback);
            return outer3_9(callback(stateFromStores[35]), { guildId: closure_0 });
          }
        };
        obj[outer2_7.MEMBER_BAN] = {
          headerTitle() {
            return null;
          },
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(callback);
            return outer3_9(callback(stateFromStores[36]), { guildId: closure_0 });
          }
        };
        const obj24 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_BANS };
        const intl25 = bottom(stateFromStores[9]).intl;
        obj24.title = intl25.string(bottom(stateFromStores[9]).t.ZbeITS);
        obj24.postponeRender = true;
        obj24.render = function render() {
          const merged = Object.assign(callback);
          return outer3_9(callback(stateFromStores[37]), { guildId: closure_0 });
        };
        obj[outer2_7.BANS] = obj24;
        const obj25 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW };
        const intl26 = bottom(stateFromStores[9]).intl;
        obj25.title = intl26.string(bottom(stateFromStores[9]).t.nRtNqn);
        obj25.postponeRender = true;
        obj25.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          return outer3_9(callback(stateFromStores[38]), obj);
        };
        obj[outer2_7.COMMUNITY] = obj25;
        const obj26 = { impressionName: bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME };
        const intl27 = bottom(stateFromStores[9]).intl;
        obj26.title = intl27.string(bottom(stateFromStores[9]).t.ElKTeb);
        obj26.render = function render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(callback);
          return outer3_9(callback(stateFromStores[39]), { guildId: closure_0 });
        };
        obj[outer2_7.COMMUNITY_INTRO] = obj26;
        const obj27 = {};
        const intl28 = bottom(stateFromStores[9]).intl;
        obj27.title = intl28.string(bottom(stateFromStores[9]).t["KzCF/6"]);
        obj27.render = function render() {
          return outer3_9(callback(stateFromStores[40]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS] = obj27;
        const obj28 = {};
        const intl29 = bottom(stateFromStores[9]).intl;
        obj28.title = intl29.string(bottom(stateFromStores[9]).t["KzCF/6"]);
        obj28.render = function render() {
          return outer3_9(callback(stateFromStores[41]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj28;
        const obj29 = {};
        const intl30 = bottom(stateFromStores[9]).intl;
        obj29.title = intl30.string(bottom(stateFromStores[9]).t["/CfKoD"]);
        obj29.render = function render() {
          return outer3_9(callback(stateFromStores[42]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_BASIC] = obj29;
        const obj30 = {};
        const intl31 = bottom(stateFromStores[9]).intl;
        obj30.title = intl31.string(bottom(stateFromStores[9]).t.pXbGYc);
        obj30.render = function render() {
          return outer3_9(callback(stateFromStores[43]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_TIERS] = obj30;
        const obj31 = {};
        const intl32 = bottom(stateFromStores[9]).intl;
        obj31.title = intl32.string(bottom(stateFromStores[9]).t["KzCF/6"]);
        obj31.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          return outer3_9(callback(stateFromStores[44]), obj);
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj31;
        const obj32 = {};
        const intl33 = bottom(stateFromStores[9]).intl;
        obj32.title = intl33.string(bottom(stateFromStores[9]).t.p2Rsdl);
        obj32.render = function render() {
          return outer3_9(callback(stateFromStores[45]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj32;
        const obj33 = {};
        const intl34 = bottom(stateFromStores[9]).intl;
        obj33.title = intl34.string(bottom(stateFromStores[9]).t.C5Dbwn);
        obj33.render = function render() {
          return outer3_9(callback(stateFromStores[46]), { guildId: closure_0 });
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_EMOJIS] = obj33;
        const obj34 = {};
        const intl35 = bottom(stateFromStores[9]).intl;
        obj34.title = intl35.string(bottom(stateFromStores[9]).t["KzCF/6"]);
        obj34.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          return outer3_9(callback(stateFromStores[47]), obj);
        };
        obj[outer2_7.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj34;
        const obj35 = {};
        const intl36 = bottom(stateFromStores[9]).intl;
        obj35.title = intl36.string(bottom(stateFromStores[9]).t.xHEzFh);
        obj35.render = function render() {
          return outer3_9(callback(stateFromStores[48]), { guildId: closure_0 });
        };
        obj[outer2_7.OFFICIAL_MESSAGES] = obj35;
        return obj;
      })(closure_1, bottom);
    }
    return tmp;
  }, items1);
  const items2 = [stateFromStores, tmp];
  const effect = React.useEffect(() => {
    tmp = null != tmp;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (!tmp) {
      tmp(stateFromStores[7]).close();
      const obj = tmp(stateFromStores[7]);
    }
  }, items2);
  const first = callback(React.useState(() => outer1_6.getSavedRouteState()), 1)[0];
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
    tmp8Result = jsx(bottom(stateFromStores[52]).Navigator, { onWillFocus: tmp6 });
    const tmp8 = jsx;
  }
  return tmp8Result;
};
