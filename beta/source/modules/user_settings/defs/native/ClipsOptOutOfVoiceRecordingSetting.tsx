// Module ID: 14512
// Function ID: 14513
// Name: ClipsOptOutOfVoiceRecordingSetting
// Dependencies: [5, 7417, 2021, 573, 11006, 1115, 2]

// Module 14512 (ClipsOptOutOfVoiceRecordingSetting)
import intl2 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

let c2, c3;

let obj = function _updateClipsAllowVoiceRecording() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: ClipsAllowVoiceRecording.updateSetting(closure_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          obj = closure_129_1(closure_129_2[3]);
          obj.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const MobileUserSettings = SettingsConstants.MobileUserSettings;
obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.AGDDkH);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["wW9/zQ"]);
  },
  parent: MobileUserSettings.CLIPS,
  useValue: UserSettings.ClipsAllowVoiceRecording.useSetting,
  onValueChange: function updateClipsAllowVoiceRecording() {
    return obj(...arguments);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx");

export default toggle;
