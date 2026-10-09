// Module ID: 16200
// Function ID: 16201
// Name: SafetyGuildSettingMessageRequests
// Dependencies: [2086, 16190, 7974, 10630, 558, 576, 16201, 15014, 2041, 5298, 1126, 5395, 16202, 7497, 5916, 6682, 16193, 10629, 2]

// Module 16200 (SafetyGuildSettingMessageRequests)
import react from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import AlertDefault from "Alert" /* 5395 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6682 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingRendererConstants from "SettingRendererConstants" /* 10630 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15014 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 16193 */;
import useShouldDisableMessageRequestSettings from "useShouldDisableMessageRequestSettings" /* 16201 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16202 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 16190 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  const obj = react;
  const cResult = obj.c(3);
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const tmp2 = closure_8();
  const obj2 = useShouldDisableMessageRequestSettings;
  const shouldDisableMessageRequestSettings = obj2.useShouldDisableMessageRequestSettings();
  const obj3 = useParentalControlSettings;
  const isParentallyControlled = obj3.useIsParentallyControlled();
  const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
  let tmp5 = !MessageRequestRestrictedDefault.useSetting();
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    let tmp6;
    if (cResult[1] === setting) {
      tmp6 = cResult[2];
    }
    let tmp8 = shouldDisableMessageRequestSettings;
    if (!tmp8) {
      let tmp11;
      if (selectedGuildId !== closure_6) {
        let tmp12 = !tmp2;
        if (tmp12) {
          if (selectedGuildId !== closure_6) {
            tmp5 = !tmp6;
          }
          tmp12 = tmp5;
        }
        tmp11 = tmp12;
      } else {
        tmp11 = tmp5;
      }
      tmp8 = tmp11;
    }
    return tmp8;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp6 = hasItem;
}) : (function useValue() {
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const tmp = closure_8();
  const obj = useShouldDisableMessageRequestSettings;
  const shouldDisableMessageRequestSettings = obj.useShouldDisableMessageRequestSettings();
  const obj2 = useParentalControlSettings;
  const isParentallyControlled = obj2.useIsParentallyControlled();
  const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
  const tmp4 = !MessageRequestRestrictedDefault.useSetting();
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  let tmp5 = !setting.includes(selectedGuildId);
  let tmp6 = shouldDisableMessageRequestSettings;
  if (!tmp6) {
    let tmp9;
    if (selectedGuildId !== closure_6) {
      let tmp10 = !tmp;
      if (tmp10) {
        if (selectedGuildId === closure_6) {
          tmp5 = tmp4;
        }
        tmp10 = tmp5;
      }
      tmp9 = tmp10;
    } else {
      tmp9 = tmp4;
    }
    tmp6 = tmp9;
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsDisabled() {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = DefultGuildsRestrictedSetting;
  const defaultGuildsRestricted = obj2.useDefaultGuildsRestricted();
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    let tmp5;
    if (cResult[1] === setting) {
      tmp5 = cResult[2];
    }
    const tmpResult = useParentalControlSettings;
    const isParentallyControlled = tmpResult.useIsParentallyControlled();
    const tmpResult2 = useShouldDisableMessageRequestSettings;
    let shouldDisableMessageRequestSettings = tmpResult2.useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings) {
      let tmp10 = selectedGuildId !== closure_6;
      const tmp9 = closure_6;
      if (!tmp10) {
        tmp10 = !isParentallyControlled;
      }
      let tmp11 = !tmp10;
      if (tmp10) {
        if (selectedGuildId === tmp9) {
          tmp5 = defaultGuildsRestricted;
        }
        tmp11 = tmp5;
      }
      shouldDisableMessageRequestSettings = tmp11;
    }
    return shouldDisableMessageRequestSettings;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp5 = hasItem;
}) : (function useIsDisabled() {
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
});
let closure_8 = tmp4;
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
  useValue: tmp3,
  useIsDisabled: tmp4,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const tmp = arg0;
    if (!tmp) {
      const obj = DefaultDMSettingsExperiment;
      const tmp2 = require;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        const obj2 = { entryPoint: tmp2(5916).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
      const MessageRequestRestrictedGuildIds = tmp8(2041).MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
    }
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default toggle;
export { showMessageRequestRestrictionModal };
