// Module ID: 14586
// Function ID: 111253
// Name: toggle
// Dependencies: [1838, 14580, 7751, 10128, 13778, 14587, 3803, 4470, 1212, 4561, 5793, 14588, 10127, 2]

// Module 14586 (toggle)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";

let closure_4;
let closure_5;
const require = arg1;
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: closure_5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = require(14588) /* useAllowFriendsFromMutualGuildsOnly */.useAllowFriendsFromMutualGuildsOnly();
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = require(14588) /* useAllowFriendsFromMutualGuildsOnly */.useAllowFriendsFromMutualGuildsOnly();
    if (callback2().selectedGuildId === closure_6) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const string2 = intl2.string;
      let XXGmuB = require(1212) /* getSystemLocale */.t;
      if (allowFriendsFromMutualGuildsOnly) {
        XXGmuB = XXGmuB.XXGmuB;
        let string2Result = string2(XXGmuB);
      } else {
        string2Result = string2(XXGmuB.wbYDfT);
      }
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      const string = intl.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (allowFriendsFromMutualGuildsOnly) {
        let stringResult = string(t.F9WY3f);
      } else {
        stringResult = string(t.G7c3Xo);
      }
      return stringResult;
    }
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const obj = require(14587) /* useDefaultGuildsRestricted */;
    const RestrictedGuildIds = require(3803) /* explicitContentFromProto */.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let tmp2 = !setting.includes(selectedGuildId);
    if (selectedGuildId === closure_6) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const tmp = callback();
    if (tmp === closure_6) {
      (function showGuildRestrictionModal(arg0) {
        let closure_0 = arg0;
        let obj = outer1_1(outer1_2[7]);
        obj = {};
        const intl = outer1_0(outer1_2[8]).intl;
        obj.title = intl.string(outer1_0(outer1_2[8]).t.Hq4ApA);
        const intl2 = outer1_0(outer1_2[8]).intl;
        obj.body = intl2.string(outer1_0(outer1_2[8]).t.qTCYun);
        const intl3 = outer1_0(outer1_2[8]).intl;
        obj.confirmText = intl3.string(outer1_0(outer1_2[8]).t.p89ACt);
        const intl4 = outer1_0(outer1_2[8]).intl;
        obj.cancelText = intl4.string(outer1_0(outer1_2[8]).t.gm1Vej);
        obj.confirmColor = outer1_1(outer1_2[9]).Colors.RED;
        obj.onConfirm = function onConfirm() {
          const DefaultGuildsRestrictedV2 = outer2_0(outer2_2[6]).DefaultGuildsRestrictedV2;
          DefaultGuildsRestrictedV2.updateSetting(closure_0);
          const RestrictedGuildIds = outer2_0(outer2_2[6]).RestrictedGuildIds;
          if (closure_0) {
            let guildIds = outer2_3.getGuildIds();
          } else {
            guildIds = [];
          }
          RestrictedGuildIds.updateSetting(guildIds);
        };
        obj.onCancel = function onCancel() {
          const DefaultGuildsRestrictedV2 = outer2_0(outer2_2[6]).DefaultGuildsRestrictedV2;
          DefaultGuildsRestrictedV2.updateSetting(closure_0);
        };
        obj.show(obj);
      })(!arg0);
    } else {
      const sanitizedRestrictedGuilds = require(5793) /* getSanitizedRestrictedGuilds */.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = require(3803) /* explicitContentFromProto */.RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      let obj = require(5793) /* getSanitizedRestrictedGuilds */;
    }
  },
  useIsDisabled() {
    let isParentallyControlled = require(13778) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default createToggle;
