// Module ID: 16376
// Function ID: 16377
// Name: DmsMessagePreviewsSetting
// Dependencies: [19, 8260, 558, 16377, 2044, 576, 1128, 9615, 11084, 2]

// Module 16376 (DmsMessagePreviewsSetting)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 9615 */;
import useMessagePreviews from "useMessagePreviews" /* 16377 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useDMsMessagePreviewsValue() {
  const obj = useMessagePreviews;
  return obj.useMessagePreviewSetting();
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDMsMessagePreviewsOptions() {
  let first;
  let intl;
  let intl2;
  let intl3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl4.t["8K53DF"]), value: ChannelListLayoutTypes.MessagePreviewTypes.ALL };
    intl = tmp(1128).intl;
    const items = [obj2, , ];
    const obj3 = { label: intl2.string(intl4.t.Gw11zg), value: ChannelListLayoutTypes.MessagePreviewTypes.UNREADS };
    intl2 = tmp(1128).intl;
    items[1] = obj3;
    const obj4 = { label: intl3.string(intl4.t.R2Ok7F), value: ChannelListLayoutTypes.MessagePreviewTypes.NONE };
    intl3 = tmp(1128).intl;
    items[2] = obj4;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useDMsMessagePreviewsOptions() {
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
});
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.OAOUoQ);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: useDMsMessagePreviewsValue,
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: tmp3
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;
