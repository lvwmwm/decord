// Module ID: 14861
// Function ID: 113348
// Name: getGuildsBarGuildMenuItems
// Dependencies: [5, 3759, 1838, 4325, 653, 10683, 1212, 5700, 5697, 10315, 9301, 13019, 1934, 10234, 5079, 5791, 12966, 11450, 4098, 10310, 11451, 5073, 2]
// Exports: default

// Module 14861 (getGuildsBarGuildMenuItems)
import DoorExitIcon from "DoorExitIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";

const require = arg1;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(id) {
  const _require = id;
  if (lurking.isLurking(id)) {
    let obj = { IconComponent: tmp(10683).DoorExitIcon };
    const intl6 = tmp(1212).intl;
    obj.label = intl6.string(tmp(1212).t["2vl7qn"]);
    obj.variant = "destructive";
    obj.action = function action() {
      const result = id(outer1_2[7]).trackLongPressLeaveClicked(id);
      const obj = id(outer1_2[7]);
      id(outer1_2[8]).stopLurkingForGuild(id);
    };
    const items = [obj];
    return items;
  } else {
    let result = tmp(10315).shouldShowUseNewNotificationSystem("GuildPopoutMenu");
    obj = {};
    const tmpResult = tmp(10315);
    obj.IconComponent = tmp(9301).EnvelopeIcon;
    const intl = tmp(1212).intl;
    obj.label = intl.string(tmp(1212).t.e6RscS);
    obj.action = function action() {
      // CreateGeneratorClosureLongIndex (0x67)
      return outer1_3(tmp)();
    };
    const items1 = [obj, , ];
    const obj1 = { IconComponent: tmp(10234).BellIcon };
    const intl2 = tmp(1212).intl;
    obj1.label = intl2.string(tmp(1212).t.HcoRu0);
    obj1.action = function action() {
      outer1_1(outer1_2[14]).open(closure_0);
    };
    items1[1] = obj1;
    const obj2 = { IconComponent: tmp(5791).SettingsIcon };
    const intl3 = tmp(1212).intl;
    obj2.label = intl3.string(tmp(1212).t.PdRCRg);
    obj2.action = function action() {
      const guild = outer1_5.getGuild(closure_0);
      if (null != guild) {
        outer1_1(outer1_2[16])(guild);
      }
    };
    items1[2] = obj2;
    if (result) {
      const splice = items1.splice;
      const obj3 = {};
      if (isMutedResult) {
        obj3.iconSource = tmp6(11451);
        const intl5 = _require(1212).intl;
        obj3.label = intl5.string(_require(1212).t.De0BTC);
        obj3.action = function action() {
          if (null != id) {
            let obj = outer1_1(outer1_2[14]);
            obj = { muted: false };
            const result = obj.updateGuildNotificationSettings(id, obj, id(outer1_2[21]).NotificationLabels.Unmuted);
          }
        };
        splice(1, 0, obj3);
      } else {
        obj3.iconSource = tmp6(11450);
        const intl4 = _require(1212).intl;
        obj3.label = intl4.string(_require(1212).t.vRzp7P);
        obj3.action = function action() {
          let obj = outer1_1(outer1_2[18]);
          obj = { guildId: id };
          obj.openLazy(id(outer1_2[12])(outer1_2[19], outer1_2.paths), "muteSettings" + id, obj);
        };
        splice(1, 0, obj3);
      }
    }
    return items1;
  }
};
