// Module ID: 15561
// Function ID: 119947
// Name: getPermissionOptions
// Dependencies: [1352, 1838, 653, 7565, 15562, 5632, 4582, 15563, 1212, 1920, 5650, 4950, 15564, 5649, 15565, 8482, 7008, 2]

// Module 15561 (getPermissionOptions)
import { VOICE_THREAD_PARENT_CHANNEL_TYPES as closure_4 } from "_callSuper";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { getChannelPermissionSpecMap as closure_11 } from "RowType";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
function getPermissionOptions(id) {
  let obj = require(15562) /* isGuildEligibleForStageChannels */;
  const result = obj.isGuildEligibleForStageChannels(id);
  const guild = store.getGuild(id);
  let result1 = null != guild;
  if (result1) {
    let obj1 = require(5632) /* isCreatorMonetizationEnabledGuild */;
    result1 = obj1.isCreatorMonetizationEnabledGuild(guild);
  }
  let obj2 = require(4582) /* getSoundmojiRenderingExperiment */;
  const soundmojiRenderingExperiment = obj2.getSoundmojiRenderingExperiment({ location: "getPermissionOptions" });
  obj = { guildId: id, location: "getPermissionOptions" };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.keybind = intl2.string(require(1212) /* getSystemLocale */.t.DkSwJ2);
  obj.PRIORITY_SPEAKER_DESCRIPTION = intl.format(require(1212) /* getSystemLocale */.t.ZuzwPz, obj1);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2 = {};
  const obj4 = require(15563) /* items */;
  obj2.helpCenterArticle = importDefault(1920).getArticleURL(constants.SOUNDBOARD);
  obj.SOUNDBOARD_DESCRIPTION = intl3.format(require(1212) /* getSystemLocale */.t.fVE8y8, obj2);
  obj.showStageChannelPermissions = result;
  obj.showExperimental = true;
  obj.showMembershipManualApprovalPermissions = true;
  obj.showCreatorMonetizationAnalyticsPermission = result1;
  obj.inSoundmojiExperiment = soundmojiRenderingExperiment;
  obj.enableHangoutWindow = obj4.getHangoutWindowExperiment(obj).enableHangoutWindow;
  return obj;
}
function conditionalPermissionSpec(enabled, arg1) {
  if (enabled) {
    const items = [arg1()];
    let items1 = items;
  } else {
    items1 = [];
  }
  return items1;
}
function filterPermissions(items3, set) {
  let closure_0 = set;
  let mapped = items3;
  if (0 !== set.size) {
    mapped = items3.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      permissions = permissions.permissions;
      obj["permissions"] = permissions.filter((flag) => !outer1_0.has(flag.flag.toString()));
      return obj;
    });
  }
  return mapped;
}
({ HelpdeskArticles: closure_6, ChannelTypes: closure_7, GuildFeatures: closure_8, Permissions: closure_9, GuildSettingsSections: closure_10 } = ME);
let result = require("ME").fileFinishedImporting("utils/PermissionSpecUtils.tsx");

export default {
  generateChannelPermissionSpec(guild_id, stateFromStores, arg2) {
    const _require = guild_id;
    const tmp = getPermissionOptions(guild_id);
    let obj = {};
    const merged = Object.assign(arg3);
    obj["enableHangoutWindow"] = tmp.enableHangoutWindow;
    const tmp3 = callback(stateFromStores, arg2, obj);
    const importDefault = tmp3;
    const VoiceInThreadsExperiment = _require(5650).VoiceInThreadsExperiment;
    obj = { guildId: guild_id, location: "3ad37d_1" };
    let enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
    if (enabled) {
      enabled = set.has(stateFromStores.type);
    }
    let obj2 = _require(4950);
    let obj3 = _require(15564);
    let result = obj3.canCurrentUserManageMessageFilters(guild_id);
    const isMediaChannelResult = stateFromStores.isMediaChannel();
    const importAll = isMediaChannelResult;
    set = new Set();
    const guild = store.getGuild(guild_id);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants3.VERIFIED);
    }
    if (hasItem) {
      let obj5 = importDefault(5649);
      obj = { guildId: guild_id, location: "generateChannelPermissionSpec" };
      hasItem = obj5.getCurrentConfig(obj).enabled;
    }
    if (!hasItem) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str2 = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    const inSoundmojiExperiment = tmp.inSoundmojiExperiment;
    const type = stateFromStores.type;
    if (constants2.GUILD_CATEGORY === type) {
      const intl21 = _require(1212).intl;
      const items = [importAll(15565).generateChannelGeneralSection(tmp3, intl21.string(_require(1212).t["AkPxc+"])), , , , , ];
      const obj34 = importAll(15565);
      const intl22 = _require(1212).intl;
      items[1] = importAll(15565).generateChannelMembershipSection(tmp3, intl22.string(_require(1212).t.Ny49TN));
      const obj35 = importAll(15565);
      const intl23 = _require(1212).intl;
      const obj1 = { showPrivateThreads: true, showCreateThreads: true, inSoundmojiExperiment };
      items[2] = importAll(15565).generateChannelTextSection(tmp3, intl23.string(_require(1212).t.cKobO5), obj1);
      const obj36 = importAll(15565);
      const intl24 = _require(1212).intl;
      items[3] = importAll(15565).generateChannelVoiceSection(tmp3, intl24.string(_require(1212).t["46Ra1b"]));
      const obj38 = importAll(15565);
      const intl25 = _require(1212).intl;
      items[4] = importAll(15565).generateChannelAppsSection(tmp3, intl25.string(_require(1212).t["rrh/W6"]));
      let arraySpreadResult = HermesBuiltin.arraySpread(conditionalPermissionSpec(tmp.showStageChannelPermissions, () => {
        const intl = guild_id(outer1_3[8]).intl;
        return isMediaChannelResult(outer1_3[14]).generateChannelStageSection(closure_1, intl.string(guild_id(outer1_3[8]).t.yniauk));
      }), 5);
      const obj39 = importAll(15565);
      const intl26 = _require(1212).intl;
      items[arraySpreadResult] = importAll(15565).generateChannelEventsSection(tmp3, intl26.string(_require(1212).t.b8lplT));
      const sum = arraySpreadResult + 1;
      let items3 = items;
      const obj40 = importAll(15565);
    } else if (constants2.GUILD_VOICE === type) {
      const intl14 = _require(1212).intl;
      obj2 = { showManageWebhooks: true };
      const items1 = [importAll(15565).generateChannelGeneralSection(tmp3, intl14.string(_require(1212).t.ouHggI), obj2), , , , , ];
      const obj25 = importAll(15565);
      const intl15 = _require(1212).intl;
      items1[1] = importAll(15565).generateChannelMembershipSection(tmp3, intl15.string(_require(1212).t.Ny49TN));
      const obj27 = importAll(15565);
      const intl16 = _require(1212).intl;
      items1[2] = importAll(15565).generateChannelVoiceSection(tmp3, intl16.string(_require(1212).t["46Ra1b"]));
      const obj28 = importAll(15565);
      const intl17 = _require(1212).intl;
      obj3 = {};
      let formatResult;
      const obj29 = importAll(15565);
      if (result) {
        const intl18 = _require(1212).intl;
        const obj4 = {
          setUpAutomod() {
                tmp3(outer1_3[15]).open(closure_0, outer1_10.GUILD_AUTOMOD);
              }
        };
        formatResult = intl18.format(_require(1212).t["4Z9Fbb"], obj4);
      }
      obj3.sectionDescription = formatResult;
      obj3.inSoundmojiExperiment = inSoundmojiExperiment;
      items1[3] = obj29.generateChannelVoiceChatSection(tmp3, intl17.string(_require(1212).t.iqlsnD), obj3);
      const stringResult = intl17.string(_require(1212).t.iqlsnD);
      const intl19 = _require(1212).intl;
      items1[4] = importAll(15565).generateChannelEventsSection(tmp3, intl19.string(_require(1212).t.b8lplT));
      const obj32 = importAll(15565);
      const intl20 = _require(1212).intl;
      items1[5] = importAll(15565).generateChannelAppsSection(tmp3, intl20.string(_require(1212).t["rrh/W6"]));
      items3 = items1;
      const obj33 = importAll(15565);
    } else if (constants2.GUILD_STAGE_VOICE === type) {
      const intl6 = _require(1212).intl;
      obj5 = { showManageWebhooks: false };
      const items2 = [importAll(15565).generateChannelGeneralSection(tmp3, intl6.string(_require(1212).t.ouHggI), obj5), , , , , , ];
      const obj14 = importAll(15565);
      const intl7 = _require(1212).intl;
      items2[1] = importAll(15565).generateChannelMembershipSection(tmp3, intl7.string(_require(1212).t.Ny49TN));
      const obj16 = importAll(15565);
      const intl8 = _require(1212).intl;
      items2[2] = importAll(15565).generateChannelStageVoiceSection(tmp3, intl8.string(_require(1212).t["46Ra1b"]), isStageVideoEnabledResult);
      const obj17 = importAll(15565);
      const intl9 = _require(1212).intl;
      items2[3] = importAll(15565).generateChannelStageSection(tmp3, intl9.string(_require(1212).t.yniauk));
      const obj18 = importAll(15565);
      const intl10 = _require(1212).intl;
      items2[4] = importAll(15565).generateChannelEventsSection(tmp3, intl10.string(_require(1212).t.b8lplT));
      const obj19 = importAll(15565);
      const intl11 = _require(1212).intl;
      const obj6 = {};
      let formatResult1;
      const obj20 = importAll(15565);
      if (result) {
        const intl12 = _require(1212).intl;
        let obj7 = {
          setUpAutomod() {
                tmp3(outer1_3[15]).open(closure_0, outer1_10.GUILD_AUTOMOD);
              }
        };
        formatResult1 = intl12.format(_require(1212).t["4Z9Fbb"], obj7);
      }
      obj6.sectionDescription = formatResult1;
      obj6.inSoundmojiExperiment = inSoundmojiExperiment;
      items2[5] = obj20.generateChannelVoiceChatSection(tmp3, intl11.string(_require(1212).t.iqlsnD), obj6);
      const stringResult1 = intl11.string(_require(1212).t.iqlsnD);
      const intl13 = _require(1212).intl;
      let obj8 = { showActivities: false };
      items2[6] = importAll(15565).generateChannelAppsSection(tmp3, intl13.string(_require(1212).t["rrh/W6"]), obj8);
      items3 = items2;
      const obj23 = importAll(15565);
    } else {
      if (constants2.GUILD_FORUM !== type) {
        if (constants2.GUILD_MEDIA !== type) {
          const intl27 = _require(1212).intl;
          items3 = [importAll(15565).generateChannelGeneralSection(tmp3, intl27.string(_require(1212).t.ouHggI)), , , ];
          const obj41 = importAll(15565);
          const intl28 = _require(1212).intl;
          items3[1] = importAll(15565).generateChannelMembershipSection(tmp3, intl28.string(_require(1212).t.Ny49TN));
          const obj42 = importAll(15565);
          const intl29 = _require(1212).intl;
          let obj9 = { showPrivateThreads: stateFromStores.type !== constants2.GUILD_ANNOUNCEMENT, showCreateThreads: true, inSoundmojiExperiment };
          items3[2] = importAll(15565).generateChannelTextSection(tmp3, intl29.string(_require(1212).t.cKobO5), obj9);
          const obj43 = importAll(15565);
          const intl30 = _require(1212).intl;
          items3[3] = importAll(15565).generateChannelAppsSection(tmp3, intl30.string(_require(1212).t["rrh/W6"]));
          arraySpreadResult = HermesBuiltin.arraySpread(conditionalPermissionSpec(enabled, () => {
            const intl = guild_id(outer1_3[8]).intl;
            return isMediaChannelResult(outer1_3[14]).generateChannelVoiceSection(closure_1, intl.string(guild_id(outer1_3[8]).t["46Ra1b"]));
          }), 4);
          const obj45 = importAll(15565);
        }
      }
      let intl = _require(1212).intl;
      const string = intl.string;
      const t = _require(1212).t;
      if (isMediaChannelResult) {
        let stringResult2 = string(t.aSjPgw);
      } else {
        stringResult2 = string(t.TS7Cnb);
      }
      const t2 = _require(1212).t;
      obj7 = importAll(15565);
      const intl2 = _require(1212).intl;
      const items4 = [obj7.generateChannelGeneralSection(tmp3, intl2.string(_require(1212).t.ouHggI)), , , ];
      obj8 = importAll(15565);
      const intl3 = _require(1212).intl;
      items4[1] = obj8.generateChannelMembershipSection(tmp3, intl3.string(_require(1212).t.Ny49TN));
      obj9 = importAll(15565);
      const obj10 = { showPrivateThreads: false, showCreateThreads: false };
      let formatResult2;
      if (result) {
        const intl4 = _require(1212).intl;
        const obj11 = {
          setUpAutomod() {
                if (!closure_2) {
                  const result = guild_id(outer1_3[16]).trackForumEnableAutomodClicked();
                  const obj = guild_id(outer1_3[16]);
                }
                tmp3(outer1_3[15]).open(guild_id, outer1_10.GUILD_AUTOMOD);
              }
        };
        formatResult2 = intl4.format(tmp20, obj11);
      }
      obj10.sectionDescription = formatResult2;
      obj10.inSoundmojiExperiment = inSoundmojiExperiment;
      items4[2] = obj9.generateChannelTextSection(tmp3, stringResult2, obj10);
      const intl5 = _require(1212).intl;
      items4[3] = importAll(15565).generateChannelAppsSection(tmp3, intl5.string(_require(1212).t["rrh/W6"]));
      HermesBuiltin.arraySpread(conditionalPermissionSpec(enabled, () => {
        const intl = guild_id(outer1_3[8]).intl;
        return isMediaChannelResult(outer1_3[14]).generateChannelVoiceSection(closure_1, intl.string(guild_id(outer1_3[8]).t["46Ra1b"]));
      }), 4);
      items3 = items4;
      const obj13 = importAll(15565);
      tmp20 = isMediaChannelResult ? t2.YjJTtH : t2["1MTnqY"];
    }
    return filterPermissions(items3, set);
  },
  generateGuildPermissionSpec(features) {
    const set = new Set();
    features = features.features;
    if (!features.has(constants3.COMMUNITY)) {
      set.add(constants4.VIEW_GUILD_ANALYTICS.toString());
      const str = constants4.VIEW_GUILD_ANALYTICS;
    }
    const features2 = features.features;
    let enabled = features2.has(constants3.VERIFIED);
    if (enabled) {
      const obj = { guildId: features.id, location: "generateGuildPermissionSpec" };
      enabled = importDefault(5649).getCurrentConfig(obj).enabled;
      const obj2 = importDefault(5649);
    }
    if (!enabled) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str3 = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    return filterPermissions(importAll(15565).generateGuildPermissionSpec(getPermissionOptions(features.id)), set);
  },
  getGuildPermissionSpecMap(id) {
    return importAll(15565).getGuildPermissionSpec(getPermissionOptions(id.id));
  }
};
