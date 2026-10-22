// Module ID: 17158
// Function ID: 17159
// Name: PinotSettingsLazy
// Dependencies: [8317, 11172, 2]
// Exports: usePinotDataPrivacySections

// Module 17158 (PinotSettingsLazy)
import SettingsConstants from "SettingsConstants" /* 8317 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
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
const result = size.fileFinishedImporting("modules/pinot/native/PinotSettingsLazy.tsx");

export const PinotMemberSetting = toggle;
export function usePinotDataPrivacySections() {
  return [];
}
