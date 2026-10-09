// Module ID: 17446
// Function ID: 17447
// Name: VoiceChannelAppSetting
// Dependencies: [19, 21, 558, 576, 17447, 17448, 1126, 3925, 6269, 6186, 8595, 5055, 17450, 2000, 17450, 2]

// Module 17446 (VoiceChannelAppSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 17447 */;
import VoiceChannelAppActionSheet from "VoiceChannelAppActionSheet" /* 17450 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function VoiceChannelAppRow(guildId) {
  let tmp8Result;
  guildId = guildId.guildId;
  const onChange = guildId.onChange;
  let application_id = guildId.channel.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let tmp2 = guildId;
  let obj = guildId(application_id[5]);
  const options = obj.useVoiceChannelAppSettingOptions(guildId, application_id).options;
  const found = options.find((applicationId) => applicationId.applicationId === application_id);
  const intl = guildId(application_id[6]).intl;
  const stringResult = intl.string(onChange(application_id[7]).AdT7SZ);
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = tmp2(tmp3[6]).intl;
    name = intl2.string(tmp5(tmp3[7]).KEB4Rm);
  }
  const TableRowGroup = tmp2(tmp3[8]).TableRowGroup;
  const intl3 = tmp2(tmp3[6]).intl;
  ({
    label: name,
    accessibilityLabel: "" + stringResult + " " + name,
    icon: tmp8Result,
    onPress: function handlePress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { guildId, selectedApplicationId: application_id, onChange };
      const tmp2 = asyncRequire(17450, dependencyMap.paths);
      openLazy(tmp2, VoiceChannelAppActionSheet.VOICE_CHANNEL_APP_ACTION_SHEET_KEY, obj);
    },
    arrow: true
  });
  const TableRow = tmp2(tmp3[9]).TableRow;
  tmp8Result = null;
  if (null != found) {
    const obj4 = { application: found.iconApplication };
    tmp8Result = tmp8(tmp5(tmp3[10]), obj4);
  }
  return <TableRowGroup title={stringResult} description={intl3.string(onChange(application_id[7])["wKSjL/"])} hasIcons={null != found}>{null}</TableRowGroup>;
}
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppSetting(arg0) {
  let channel;
  let guildId;
  let onChange;
  const obj = react2;
  const cResult = obj.c(4);
  ({ channel, guildId, onChange } = arg0);
  let tmp2 = null;
  const obj2 = useVoiceChannelApp;
  if (obj2.useCanConfigureVoiceChannelApp(channel)) {
    if (cResult[0] === channel) {
      if (cResult[1] === guildId) {
        let tmp3;
        if (cResult[2] === onChange) {
          tmp3 = cResult[3];
        }
        tmp2 = tmp3;
      }
    }
    const tmp6 = <VoiceChannelAppRow channel={channel} guildId={guildId} onChange={onChange} />;
    cResult[0] = channel;
    cResult[1] = guildId;
    cResult[2] = onChange;
    cResult[3] = tmp6;
    tmp3 = tmp6;
  }
  return tmp2;
}) : (function VoiceChannelAppSetting(channel) {
  let guildId;
  let onChange;
  channel = channel.channel;
  ({ guildId, onChange } = channel);
  let tmp = null;
  const obj = useVoiceChannelApp;
  if (obj.useCanConfigureVoiceChannelApp(channel)) {
    tmp = <VoiceChannelAppRow channel={channel} guildId={guildId} onChange={onChange} />;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSetting.tsx");

export default tmp3;
