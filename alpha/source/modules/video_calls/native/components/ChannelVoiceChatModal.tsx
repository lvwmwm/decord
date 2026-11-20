// Module ID: 13751
// Function ID: 13752
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 4966, 4855, 10977, 5410, 5530, 10417, 7500, 4996, 2]
// Exports: default

// Module 13751 (ChannelVoiceChatModal)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4855 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4966 */;
import reactDefault from "react" /* 4996 */;
import useChannelNameDefault from "useChannelName" /* 5410 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5530 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10417 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ThemedChannelVoiceChat(channel) {
  channel = channel.channel;
  const ThemeContextProvider = native.ThemeContextProvider;
  return <ThemeContextProvider gradient={useColorThemeBackgroundDefault()}>{null}</ThemeContextProvider>;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  let tmp2 = useChannelNameDefault(channel);
  const items = [channel.id];
  const effect = react.useEffect(() => {
    let id;
    let obj = ChannelRTCActionCreatorsDefault;
    obj.updateChatOpen(channel.id, true);
    return () => {
      const obj = ChannelRTCActionCreatorsDefault;
      obj.updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  ModalStackNavigatorDefault;
  if (tmp2 == null) {
    str = "";
  }
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={tmp4(channel(7500).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    const Provider = reactDefault.Provider;
    const tmp2 = channel;
    if (guild_id == null) {
      guild_id = null;
    }
    return <Provider value={guild_id}><ThemedChannelVoiceChat channel={tmp2} /></Provider>;
  }} />;
};
