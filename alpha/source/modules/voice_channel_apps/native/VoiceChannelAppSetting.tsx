// Module ID: 18890
// Function ID: 18891
// Name: VoiceChannelAppSetting
// Dependencies: [19, 21, 18891, 18892, 1113, 3966, 7060, 6975, 18894, 5258, 18895, 1994, 18895, 2]
// Exports: default

// Module 18890 (VoiceChannelAppSetting)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 18891 */;
import VoiceChannelAppActionSheet from "VoiceChannelAppActionSheet" /* 18895 */;
import react from "react" /* 19 */;
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
  let obj = guildId(application_id[3]);
  const options = obj.useVoiceChannelAppSettingOptions(guildId, application_id).options;
  const found = options.find((applicationId) => applicationId.applicationId === application_id);
  const intl = guildId(application_id[4]).intl;
  const stringResult = intl.string(onChange(application_id[5]).AdT7SZ);
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = tmp2(tmp3[4]).intl;
    name = intl2.string(tmp5(tmp3[5]).KEB4Rm);
  }
  const TableRowGroup = tmp2(tmp3[6]).TableRowGroup;
  const intl3 = tmp2(tmp3[4]).intl;
  ({
    label: name,
    accessibilityLabel: "" + stringResult + " " + name,
    icon: tmp8Result,
    onPress: function handlePress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { guildId, selectedApplicationId: application_id, onChange };
      const tmp2 = asyncRequire(18895, dependencyMap.paths);
      openLazy(tmp2, VoiceChannelAppActionSheet.VOICE_CHANNEL_APP_ACTION_SHEET_KEY, obj);
    },
    arrow: true
  });
  const TableRow = tmp2(tmp3[7]).TableRow;
  tmp8Result = null;
  if (null != found) {
    const obj7 = { applicationId: null, name: null, iconApplication: null };
    ({ applicationId: obj4.applicationId, name: obj4.name, iconApplication: obj4.iconApplication } = found);
    tmp8Result = tmp8(tmp5(tmp3[8]), obj7);
  }
  return <TableRowGroup title={stringResult} description={intl3.string(onChange(application_id[5])["wKSjL/"])} hasIcons={null != found}>{null}</TableRowGroup>;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSetting.tsx");

export default function VoiceChannelAppSetting(channel) {
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
};
