// Module ID: 18050
// Function ID: 18051
// Name: ChannelListLayoutSetting
// Dependencies: [9136, 5068, 1113, 5931, 12317, 2]
// Exports: useChannelListLayoutPredicate

// Module 18050 (ChannelListLayoutSetting)
import intl3 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5068 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5931 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
