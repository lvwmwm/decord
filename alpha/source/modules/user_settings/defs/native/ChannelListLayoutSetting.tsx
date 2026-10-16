// Module ID: 16528
// Function ID: 16529
// Name: ChannelListLayoutSetting
// Dependencies: [8214, 2044, 1128, 9551, 11003, 2]
// Exports: useChannelListLayoutPredicate

// Module 16528 (ChannelListLayoutSetting)
import intl3 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 9551 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

function useChannelListLayoutPredicate() {
  return false;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.eY1X1e);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: UserSettings.ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(arg0) {
    const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(arg0);
  },
  useOptions: function useChannelListLayoutOptions() {
    let intl;
    let intl2;
    const obj = { label: intl.string(intl3.t.T7G4Y0), value: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { label: intl2.string(intl3.t["7iegX4"]), value: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT };
    intl2 = intl3.intl;
    items[1] = obj2;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };
