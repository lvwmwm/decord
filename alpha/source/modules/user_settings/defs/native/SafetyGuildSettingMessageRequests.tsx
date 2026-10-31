// Module ID: 17908
// Function ID: 17909
// Name: SafetyGuildSettingMessageRequests
// Dependencies: [4885, 17898, 8432, 11540, 17909, 16708, 4839, 5958, 1113, 6030, 17910, 7955, 6729, 7165, 17901, 11539, 2]

// Module 17908 (SafetyGuildSettingMessageRequests)
import intl5 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4839 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5958 */;
import AlertDefault from "Alert" /* 6030 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7165 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7955 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11540 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16708 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 17901 */;
import useShouldDisableMessageRequestSettings from "useShouldDisableMessageRequestSettings" /* 17909 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17910 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17898 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
function showMessageRequestRestrictionModal(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  _require = arg0;
  const obj = {
    title: intl.string(require("intl").t.yAfu1p),
    body: intl2.string(require("intl").t.Ry2z74),
    confirmText: intl3.string(require("intl").t.p89ACt),
    cancelText: intl4.string(require("intl").t.gm1Vej),
    confirmColor: AlertDefault.Colors.RED,
    onConfirm() {
      let guildIds;
      const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
      MessageRequestRestrictedDefault.updateSetting(closure_0);
      const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
      const updateSetting = MessageRequestRestrictedGuildIds.updateSetting;
      if (closure_0) {
        guildIds = GuildStore.getGuildIds();
      } else {
        guildIds = [];
      }
      updateSetting(guildIds);
    },
    onCancel() {
      const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
      MessageRequestRestrictedDefault.updateSetting(closure_0);
    },
    isDismissable: false
  };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  show(obj);
}
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_6 = SettingRendererConstants.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl5.intl;
    return intl.string(intl5.t.o5fjz6);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const obj = DefultGuildsRestrictedSetting;
    const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
    const selectedGuildId2 = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const obj3 = useParentalControlSettings;
    const isParentallyControlled = obj3.useIsParentallyControlled();
    const obj4 = useShouldDisableMessageRequestSettings;
    let shouldDisableMessageRequestSettings1 = obj4.useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings1) {
      let tmp8 = selectedGuildId2 !== closure_6;
      const tmp7 = closure_6;
      if (!tmp8) {
        tmp8 = !isParentallyControlled;
      }
      let tmp9 = !tmp8;
      if (tmp8) {
        if (selectedGuildId2 === tmp7) {
          hasItem = defaultGuildsRestricted;
        }
        tmp9 = hasItem;
      }
      shouldDisableMessageRequestSettings1 = tmp9;
    }
    const tmpResult = useShouldDisableMessageRequestSettings;
    const shouldDisableMessageRequestSettings = tmpResult.useShouldDisableMessageRequestSettings();
    const tmpResult2 = useParentalControlSettings;
    const isParentallyControlled1 = tmpResult2.useIsParentallyControlled();
    const MessageRequestRestrictedDefault = tmp(4839).MessageRequestRestrictedDefault;
    const tmp12 = !MessageRequestRestrictedDefault.useSetting();
    const MessageRequestRestrictedGuildIds = tmp(4839).MessageRequestRestrictedGuildIds;
    const setting1 = MessageRequestRestrictedGuildIds.useSetting();
    let tmp13 = !setting1.includes(selectedGuildId);
    let tmp14 = shouldDisableMessageRequestSettings;
    if (!tmp14) {
      let tmp17;
      if (selectedGuildId !== closure_6) {
        let tmp18 = !shouldDisableMessageRequestSettings1;
        if (tmp18) {
          if (selectedGuildId === closure_6) {
            tmp13 = tmp12;
          }
          tmp18 = tmp13;
        }
        tmp17 = tmp18;
      } else {
        tmp17 = tmp12;
      }
      tmp14 = tmp17;
    }
    return tmp14;
  },
  useIsDisabled() {
    const obj = DefultGuildsRestrictedSetting;
    const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
    const obj3 = useParentalControlSettings;
    const isParentallyControlled = obj3.useIsParentallyControlled();
    const obj4 = useShouldDisableMessageRequestSettings;
    let shouldDisableMessageRequestSettings = obj4.useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings) {
      let tmp6 = selectedGuildId !== closure_6;
      const tmp5 = closure_6;
      if (!tmp6) {
        tmp6 = !isParentallyControlled;
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        if (selectedGuildId === tmp5) {
          hasItem = defaultGuildsRestricted;
        }
        tmp7 = hasItem;
      }
      shouldDisableMessageRequestSettings = tmp7;
    }
    return shouldDisableMessageRequestSettings;
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const tmp = arg0;
    if (!tmp) {
      const obj = DefaultDMSettingsExperiment;
      const tmp2 = require;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        const obj2 = { entryPoint: tmp2(6729).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
        const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj2);
      }
    }
    const tmp7 = React3();
    if (tmp7 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const obj3 = UserSettingsUtils;
      const sanitizedMessageRequestRestrictedGuilds = obj3.getSanitizedMessageRequestRestrictedGuilds();
      const tmp8 = require;
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp7);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp7);
      }
      const MessageRequestRestrictedGuildIds = tmp8(4839).MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
    }
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default toggle;
export { showMessageRequestRestrictionModal };
