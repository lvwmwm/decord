// Module ID: 15386
// Function ID: 117369
// Name: getPermissionOptions
// Dependencies: [31, 33, 689, 3831, 15396, 2, 6, 7, 15, 17, 18, 5, 31, 27, 1348, 1907, 1838, 3756]

// Module 15386 (getPermissionOptions)
import { VOICE_THREAD_PARENT_CHANNEL_TYPES as closure_4 } from "module_31";
import module_33 from "module_33";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { getChannelPermissionSpecMap as closure_11 } from "BaseIconImage";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function getPermissionOptions(id) {
  let obj = require(dependencyMap[4]);
  const result = obj.isGuildEligibleForStageChannels(id);
  const guild = store.getGuild(id);
  let result1 = null != guild;
  if (result1) {
    let obj1 = require(dependencyMap[5]);
    result1 = obj1.isCreatorMonetizationEnabledGuild(guild);
  }
  let obj2 = require(dependencyMap[6]);
  const soundmojiRenderingExperiment = obj2.getSoundmojiRenderingExperiment({ location: "getPermissionOptions" });
  obj = { guildId: id, location: "getPermissionOptions" };
  obj = {};
  const intl = require(dependencyMap[8]).intl;
  obj1 = {};
  const intl2 = require(dependencyMap[8]).intl;
  obj1.keybind = intl2.string(require(dependencyMap[8]).t.DkSwJ2);
  obj.PRIORITY_SPEAKER_DESCRIPTION = intl.format(require(dependencyMap[8]).t.ZuzwPz, obj1);
  const intl3 = require(dependencyMap[8]).intl;
  obj2 = {};
  const obj4 = require(dependencyMap[7]);
  obj2.helpCenterArticle = importDefault(dependencyMap[9]).getArticleURL(constants.SOUNDBOARD);
  obj.SOUNDBOARD_DESCRIPTION = intl3.format(require(dependencyMap[8]).t.fVE8y8, obj2);
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
  const require = set;
  let mapped = items3;
  if (0 !== set.size) {
    mapped = items3.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      permissions = permissions.permissions;
      obj["permissions"] = permissions.filter((flag) => !set.has(flag.flag.toString()));
      return obj;
    });
  }
  return mapped;
}
({ HelpdeskArticles: closure_6, ChannelTypes: closure_7, GuildFeatures: closure_8, Permissions: closure_9, GuildSettingsSections: closure_10 } = _createForOfIteratorHelperLoose);
const result = _isNativeReflectConstruct.fileFinishedImporting("utils/PermissionSpecUtils.tsx");

export default {
  generateChannelPermissionSpec(guild_id, stateFromStores, arg2) {
    const require = guild_id;
    const tmp = getPermissionOptions(guild_id);
    let obj = {};
    const merged = Object.assign(arg3);
    obj["enableHangoutWindow"] = tmp.enableHangoutWindow;
    const tmp3 = callback(stateFromStores, arg2, obj);
    const importDefault = tmp3;
    const VoiceInThreadsExperiment = require(dependencyMap[10]).VoiceInThreadsExperiment;
    obj = { guildId: guild_id, location: "3ad37d_1" };
    let enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
    if (enabled) {
      enabled = set.has(stateFromStores.type);
    }
    let obj2 = require(dependencyMap[11]);
    let obj3 = require(dependencyMap[12]);
    const result = obj3.canCurrentUserManageMessageFilters(guild_id);
    const isMediaChannelResult = stateFromStores.isMediaChannel();
    const importAll = isMediaChannelResult;
    const set = new Set();
    const guild = store.getGuild(guild_id);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants3.VERIFIED);
    }
    if (hasItem) {
      let obj5 = importDefault(dependencyMap[13]);
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
      const intl21 = require(dependencyMap[8]).intl;
      const items = [importAll(dependencyMap[14]).generateChannelGeneralSection(tmp3, intl21.string(require(dependencyMap[8]).t.AkPxc+)), , , , , ];
      const obj34 = importAll(dependencyMap[14]);
      const intl22 = require(dependencyMap[8]).intl;
      items[1] = importAll(dependencyMap[14]).generateChannelMembershipSection(tmp3, intl22.string(require(dependencyMap[8]).t.Ny49TN));
      const obj35 = importAll(dependencyMap[14]);
      const intl23 = require(dependencyMap[8]).intl;
      const obj1 = { 0: null, 0: null, inSoundmojiExperiment };
      items[2] = importAll(dependencyMap[14]).generateChannelTextSection(tmp3, intl23.string(require(dependencyMap[8]).t.cKobO5), obj1);
      const obj36 = importAll(dependencyMap[14]);
      const intl24 = require(dependencyMap[8]).intl;
      items[3] = importAll(dependencyMap[14]).generateChannelVoiceSection(tmp3, intl24.string(require(dependencyMap[8]).t.46Ra1b));
      const obj38 = importAll(dependencyMap[14]);
      const intl25 = require(dependencyMap[8]).intl;
      items[4] = importAll(dependencyMap[14]).generateChannelAppsSection(tmp3, intl25.string(require(dependencyMap[8]).t.rrh/W6));
      let arraySpreadResult = HermesBuiltin.arraySpread(conditionalPermissionSpec(tmp.showStageChannelPermissions, () => {
        const intl = arg0(closure_3[8]).intl;
        return isMediaChannelResult(closure_3[14]).generateChannelStageSection(tmp3, intl.string(arg0(closure_3[8]).t.yniauk));
      }), 5);
      const obj39 = importAll(dependencyMap[14]);
      const intl26 = require(dependencyMap[8]).intl;
      items[arraySpreadResult] = importAll(dependencyMap[14]).generateChannelEventsSection(tmp3, intl26.string(require(dependencyMap[8]).t.b8lplT));
      const sum = arraySpreadResult + 1;
      let items3 = items;
      const obj40 = importAll(dependencyMap[14]);
    } else if (constants2.GUILD_VOICE === type) {
      const intl14 = require(dependencyMap[8]).intl;
      obj2 = { showManageWebhooks: true };
      const items1 = [importAll(dependencyMap[14]).generateChannelGeneralSection(tmp3, intl14.string(require(dependencyMap[8]).t.ouHggI), obj2), , , , , ];
      const obj25 = importAll(dependencyMap[14]);
      const intl15 = require(dependencyMap[8]).intl;
      items1[1] = importAll(dependencyMap[14]).generateChannelMembershipSection(tmp3, intl15.string(require(dependencyMap[8]).t.Ny49TN));
      const obj27 = importAll(dependencyMap[14]);
      const intl16 = require(dependencyMap[8]).intl;
      items1[2] = importAll(dependencyMap[14]).generateChannelVoiceSection(tmp3, intl16.string(require(dependencyMap[8]).t.46Ra1b));
      const obj28 = importAll(dependencyMap[14]);
      const intl17 = require(dependencyMap[8]).intl;
      obj3 = {};
      let formatResult;
      const obj29 = importAll(dependencyMap[14]);
      if (result) {
        const intl18 = require(dependencyMap[8]).intl;
        const obj4 = {
          setUpAutomod() {
                tmp3(closure_3[15]).open(arg0, constants.GUILD_AUTOMOD);
              }
        };
        formatResult = intl18.format(require(dependencyMap[8]).t.4Z9Fbb, obj4);
      }
      obj3.sectionDescription = formatResult;
      obj3.inSoundmojiExperiment = inSoundmojiExperiment;
      items1[3] = obj29.generateChannelVoiceChatSection(tmp3, intl17.string(require(dependencyMap[8]).t.iqlsnD), obj3);
      const stringResult = intl17.string(require(dependencyMap[8]).t.iqlsnD);
      const intl19 = require(dependencyMap[8]).intl;
      items1[4] = importAll(dependencyMap[14]).generateChannelEventsSection(tmp3, intl19.string(require(dependencyMap[8]).t.b8lplT));
      const obj32 = importAll(dependencyMap[14]);
      const intl20 = require(dependencyMap[8]).intl;
      items1[5] = importAll(dependencyMap[14]).generateChannelAppsSection(tmp3, intl20.string(require(dependencyMap[8]).t.rrh/W6));
      items3 = items1;
      const obj33 = importAll(dependencyMap[14]);
    } else if (constants2.GUILD_STAGE_VOICE === type) {
      const intl6 = require(dependencyMap[8]).intl;
      obj5 = { showManageWebhooks: false };
      const items2 = [importAll(dependencyMap[14]).generateChannelGeneralSection(tmp3, intl6.string(require(dependencyMap[8]).t.ouHggI), obj5), , , , , , ];
      const obj14 = importAll(dependencyMap[14]);
      const intl7 = require(dependencyMap[8]).intl;
      items2[1] = importAll(dependencyMap[14]).generateChannelMembershipSection(tmp3, intl7.string(require(dependencyMap[8]).t.Ny49TN));
      const obj16 = importAll(dependencyMap[14]);
      const intl8 = require(dependencyMap[8]).intl;
      items2[2] = importAll(dependencyMap[14]).generateChannelStageVoiceSection(tmp3, intl8.string(require(dependencyMap[8]).t.46Ra1b), isStageVideoEnabledResult);
      const obj17 = importAll(dependencyMap[14]);
      const intl9 = require(dependencyMap[8]).intl;
      items2[3] = importAll(dependencyMap[14]).generateChannelStageSection(tmp3, intl9.string(require(dependencyMap[8]).t.yniauk));
      const obj18 = importAll(dependencyMap[14]);
      const intl10 = require(dependencyMap[8]).intl;
      items2[4] = importAll(dependencyMap[14]).generateChannelEventsSection(tmp3, intl10.string(require(dependencyMap[8]).t.b8lplT));
      const obj19 = importAll(dependencyMap[14]);
      const intl11 = require(dependencyMap[8]).intl;
      const obj6 = {};
      let formatResult1;
      const obj20 = importAll(dependencyMap[14]);
      if (result) {
        const intl12 = require(dependencyMap[8]).intl;
        let obj7 = {
          setUpAutomod() {
                tmp3(closure_3[15]).open(arg0, constants.GUILD_AUTOMOD);
              }
        };
        formatResult1 = intl12.format(require(dependencyMap[8]).t.4Z9Fbb, obj7);
      }
      obj6.sectionDescription = formatResult1;
      obj6.inSoundmojiExperiment = inSoundmojiExperiment;
      items2[5] = obj20.generateChannelVoiceChatSection(tmp3, intl11.string(require(dependencyMap[8]).t.iqlsnD), obj6);
      const stringResult1 = intl11.string(require(dependencyMap[8]).t.iqlsnD);
      const intl13 = require(dependencyMap[8]).intl;
      let obj8 = { showActivities: false };
      items2[6] = importAll(dependencyMap[14]).generateChannelAppsSection(tmp3, intl13.string(require(dependencyMap[8]).t.rrh/W6), obj8);
      items3 = items2;
      const obj23 = importAll(dependencyMap[14]);
    } else {
      if (constants2.GUILD_FORUM !== type) {
        if (constants2.GUILD_MEDIA !== type) {
          const intl27 = require(dependencyMap[8]).intl;
          items3 = [importAll(dependencyMap[14]).generateChannelGeneralSection(tmp3, intl27.string(require(dependencyMap[8]).t.ouHggI)), , , ];
          const obj41 = importAll(dependencyMap[14]);
          const intl28 = require(dependencyMap[8]).intl;
          items3[1] = importAll(dependencyMap[14]).generateChannelMembershipSection(tmp3, intl28.string(require(dependencyMap[8]).t.Ny49TN));
          const obj42 = importAll(dependencyMap[14]);
          const intl29 = require(dependencyMap[8]).intl;
          let obj9 = { showPrivateThreads: stateFromStores.type !== constants2.GUILD_ANNOUNCEMENT, showCreateThreads: true, inSoundmojiExperiment };
          items3[2] = importAll(dependencyMap[14]).generateChannelTextSection(tmp3, intl29.string(require(dependencyMap[8]).t.cKobO5), obj9);
          const obj43 = importAll(dependencyMap[14]);
          const intl30 = require(dependencyMap[8]).intl;
          items3[3] = importAll(dependencyMap[14]).generateChannelAppsSection(tmp3, intl30.string(require(dependencyMap[8]).t.rrh/W6));
          arraySpreadResult = HermesBuiltin.arraySpread(conditionalPermissionSpec(enabled, () => {
            const intl = arg0(closure_3[8]).intl;
            return isMediaChannelResult(closure_3[14]).generateChannelVoiceSection(tmp3, intl.string(arg0(closure_3[8]).t.46Ra1b));
          }), 4);
          const obj45 = importAll(dependencyMap[14]);
        }
      }
      const intl = require(dependencyMap[8]).intl;
      const string = intl.string;
      const t = require(dependencyMap[8]).t;
      if (isMediaChannelResult) {
        let stringResult2 = string(t.aSjPgw);
      } else {
        stringResult2 = string(t.TS7Cnb);
      }
      const t2 = require(dependencyMap[8]).t;
      obj7 = importAll(dependencyMap[14]);
      const intl2 = require(dependencyMap[8]).intl;
      const items4 = [obj7.generateChannelGeneralSection(tmp3, intl2.string(require(dependencyMap[8]).t.ouHggI)), , , ];
      obj8 = importAll(dependencyMap[14]);
      const intl3 = require(dependencyMap[8]).intl;
      items4[1] = obj8.generateChannelMembershipSection(tmp3, intl3.string(require(dependencyMap[8]).t.Ny49TN));
      obj9 = importAll(dependencyMap[14]);
      const obj10 = { 0: null, 0: null };
      let formatResult2;
      if (result) {
        const intl4 = require(dependencyMap[8]).intl;
        const obj11 = {
          setUpAutomod() {
                if (!isMediaChannelResult) {
                  const result = arg0(closure_3[16]).trackForumEnableAutomodClicked();
                  const obj = arg0(closure_3[16]);
                }
                tmp3(closure_3[15]).open(arg0, constants.GUILD_AUTOMOD);
              }
        };
        formatResult2 = intl4.format(tmp20, obj11);
      }
      obj10.sectionDescription = formatResult2;
      obj10.inSoundmojiExperiment = inSoundmojiExperiment;
      items4[2] = obj9.generateChannelTextSection(tmp3, stringResult2, obj10);
      const intl5 = require(dependencyMap[8]).intl;
      items4[3] = importAll(dependencyMap[14]).generateChannelAppsSection(tmp3, intl5.string(require(dependencyMap[8]).t.rrh/W6));
      HermesBuiltin.arraySpread(conditionalPermissionSpec(enabled, () => {
        const intl = arg0(closure_3[8]).intl;
        return isMediaChannelResult(closure_3[14]).generateChannelVoiceSection(tmp3, intl.string(arg0(closure_3[8]).t.46Ra1b));
      }), 4);
      items3 = items4;
      const obj13 = importAll(dependencyMap[14]);
      const tmp20 = isMediaChannelResult ? t2.YjJTtH : t2.1MTnqY;
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
      enabled = importDefault(dependencyMap[13]).getCurrentConfig(obj).enabled;
      const obj2 = importDefault(dependencyMap[13]);
    }
    if (!enabled) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str3 = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    return filterPermissions(importAll(dependencyMap[14]).generateGuildPermissionSpec(getPermissionOptions(features.id)), set);
  },
  getGuildPermissionSpecMap(id) {
    return importAll(dependencyMap[14]).getGuildPermissionSpec(getPermissionOptions(id.id));
  }
};
