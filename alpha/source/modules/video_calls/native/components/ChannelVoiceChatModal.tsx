// Module ID: 11142
// Function ID: 11143
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 5340, 5229, 11143, 5806, 5915, 10281, 8761, 5370, 2]
// Exports: default

// Module 11142 (ChannelVoiceChatModal)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 5229 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5340 */;
import reactDefault from "react" /* 5370 */;
import useChannelNameDefault from "useChannelName" /* 5806 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5915 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10281 */;
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={tmp4(channel(8761).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    const Provider = reactDefault.Provider;
    const tmp2 = channel;
    if (guild_id == null) {
      guild_id = null;
    }
    return <Provider value={guild_id}><ThemedChannelVoiceChat channel={tmp2} /></Provider>;
  }} />;
};
