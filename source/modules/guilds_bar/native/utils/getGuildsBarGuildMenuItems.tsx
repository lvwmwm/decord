// Module ID: 14699
// Function ID: 110863
// Name: getGuildsBarGuildMenuItems
// Dependencies: []
// Exports: default

// Module 14699 (getGuildsBarGuildMenuItems)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticsSections = arg1(dependencyMap[4]).AnalyticsSections;
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(id) {
  const arg1 = id;
  if (lurking.isLurking(id)) {
    let obj = { IconComponent: tmp(tmp2[5]).DoorExitIcon };
    const intl6 = tmp(tmp2[6]).intl;
    obj.label = intl6.string(tmp(tmp2[6]).t.2vl7qn);
    obj.variant = "destructive";
    obj.action = function action() {
      const result = arg0(closure_2[7]).trackLongPressLeaveClicked(arg0);
      const obj = arg0(closure_2[7]);
      arg0(closure_2[8]).stopLurkingForGuild(arg0);
    };
    const items = [obj];
    return items;
  } else {
    const result = tmp(tmp2[9]).shouldShowUseNewNotificationSystem("GuildPopoutMenu");
    obj = {};
    const tmpResult = tmp(tmp2[9]);
    obj.IconComponent = tmp(tmp2[10]).EnvelopeIcon;
    const intl = tmp(tmp2[6]).intl;
    obj.label = intl.string(tmp(tmp2[6]).t.e6RscS);
    obj.action = function action() {
      // CreateGeneratorClosureLongIndex (0x67)
      return callback2(tmp)();
    };
    const items1 = [obj, , ];
    const obj1 = { IconComponent: tmp(tmp2[13]).BellIcon };
    const intl2 = tmp(tmp2[6]).intl;
    obj1.label = intl2.string(tmp(tmp2[6]).t.HcoRu0);
    obj1.action = function action() {
      callback(closure_2[14]).open(arg0);
    };
    items1[1] = obj1;
    const obj2 = { IconComponent: tmp(tmp2[15]).SettingsIcon };
    const intl3 = tmp(tmp2[6]).intl;
    obj2.label = intl3.string(tmp(tmp2[6]).t.PdRCRg);
    obj2.action = function action() {
      const guild = guild.getGuild(arg0);
      if (null != guild) {
        callback(closure_2[16])(guild);
      }
    };
    items1[2] = obj2;
    if (result) {
      const splice = items1.splice;
      const obj3 = {};
      if (isMutedResult) {
        obj3.iconSource = tmp6(tmp7[20]);
        const intl5 = arg1(tmp7[6]).intl;
        obj3.label = intl5.string(arg1(tmp7[6]).t.De0BTC);
        obj3.action = function action() {
          if (null != arg0) {
            let obj = callback(closure_2[14]);
            obj = { muted: false };
            const result = obj.updateGuildNotificationSettings(arg0, obj, arg0(closure_2[21]).NotificationLabels.Unmuted);
          }
        };
        splice(1, 0, obj3);
      } else {
        obj3.iconSource = tmp6(tmp7[17]);
        const intl4 = arg1(tmp7[6]).intl;
        obj3.label = intl4.string(arg1(tmp7[6]).t.vRzp7P);
        obj3.action = function action() {
          let obj = callback(paths[18]);
          obj = { guildId: arg0 };
          obj.openLazy(arg0(paths[12])(paths[19], paths.paths), "muteSettings" + arg0, obj);
        };
        splice(1, 0, obj3);
      }
    }
    return items1;
  }
};
