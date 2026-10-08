// Module ID: 16063
// Function ID: 16064
// Name: PinotSettingsLazy
// Dependencies: [7966, 11262, 2]
// Exports: usePinotDataPrivacySections

// Module 16063 (PinotSettingsLazy)
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders_mod from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const obj = {
  useTitle() {
    return "";
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return false;
  },
  unsearchable: true
};
let SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = {
  useValue() {
    return false;
  },
  onValueChange() {

  }
};
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createPressable = SettingBuilders.createPressable;
const obj3 = {
  onPress() {

  }
};
const merged1 = Object.assign(obj);
const pressable = createPressable(obj3);
const result = size.fileFinishedImporting("modules/pinot/native/PinotSettingsLazy.tsx");

export const PinotMemberSetting = toggle;
export const PinotMemberSettingSave = pressable;
export function usePinotDataPrivacySections() {
  return [];
}
