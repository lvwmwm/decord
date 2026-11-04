// Module ID: 11179
// Function ID: 11180
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 5318, 5207, 11180, 5786, 5893, 10321, 8810, 5348, 2]
// Exports: default

// Module 11179 (ChannelVoiceChatModal)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 5207 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5318 */;
import reactDefault from "react" /* 5348 */;
import useChannelNameDefault from "useChannelName" /* 5786 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5893 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10321 */;
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={tmp4(channel(8810).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    const Provider = reactDefault.Provider;
    const tmp2 = channel;
    if (guild_id == null) {
      guild_id = null;
    }
    return <Provider value={guild_id}><ThemedChannelVoiceChat channel={tmp2} /></Provider>;
  }} />;
};
