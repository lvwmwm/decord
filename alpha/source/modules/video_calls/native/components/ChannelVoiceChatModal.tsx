// Module ID: 10938
// Function ID: 10939
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 5425, 5314, 10939, 5891, 6003, 10844, 7952, 5455, 2]
// Exports: default

// Module 10938 (ChannelVoiceChatModal)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 5314 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5425 */;
import reactDefault from "react" /* 5455 */;
import useChannelNameDefault from "useChannelName" /* 5891 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10844 */;
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={tmp4(channel(7952).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    const Provider = reactDefault.Provider;
    const tmp2 = channel;
    if (guild_id == null) {
      guild_id = null;
    }
    return <Provider value={guild_id}><ThemedChannelVoiceChat channel={tmp2} /></Provider>;
  }} />;
};
