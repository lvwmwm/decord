// Module ID: 15635
// Function ID: 15636
// Name: ChannelListLayoutSetting
// Dependencies: [7966, 2040, 1126, 9248, 11262, 2]
// Exports: useChannelListLayoutPredicate

// Module 15635 (ChannelListLayoutSetting)
import intl3 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 9248 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
