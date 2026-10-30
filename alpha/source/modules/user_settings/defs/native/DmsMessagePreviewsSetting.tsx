// Module ID: 17239
// Function ID: 17240
// Name: DmsMessagePreviewsSetting
// Dependencies: [19, 8424, 17240, 4834, 1114, 5687, 11505, 2]

// Module 17239 (DmsMessagePreviewsSetting)
import intl4 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5687 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useMessagePreviews from "useMessagePreviews" /* 17240 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.OAOUoQ);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    const obj = useMessagePreviews;
    return obj.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return react.useMemo(() => {
      let intl;
      let intl2;
      let intl3;
      const obj = { label: intl.string(intl4.t["8K53DF"]), value: ChannelListLayoutTypes.MessagePreviewTypes.ALL };
      intl = intl4.intl;
      const items = [obj, , ];
      const obj2 = { label: intl2.string(intl4.t.Gw11zg), value: ChannelListLayoutTypes.MessagePreviewTypes.UNREADS };
      intl2 = intl4.intl;
      items[1] = obj2;
      const obj3 = { label: intl3.string(intl4.t.R2Ok7F), value: ChannelListLayoutTypes.MessagePreviewTypes.NONE };
      intl3 = intl4.intl;
      items[2] = obj3;
      return items;
    }, []);
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;
