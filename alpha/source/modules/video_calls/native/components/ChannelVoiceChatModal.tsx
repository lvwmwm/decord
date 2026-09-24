// Module ID: 11319
// Function ID: 11320
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 4682, 4535, 10423, 4982, 5030, 11276, 5403, 4712, 2]
// Exports: default

// Module 11319 (ChannelVoiceChatModal)
import native from "native" /* 4535 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4682 */;
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4712 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5030 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 10423 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11276 */;
import noop from "module_19" /* 19 */;

require = fn;
function ThemedChannelVoiceChat(channel) {
  const tmp = useColorThemeBackgroundDefault();
  return jsx(native.ThemeContextProvider, { gradient: useColorThemeBackgroundDefault(), children: jsx(ChannelVoiceChatDefault, { channel: channel.channel, inModal: true }) });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const items = [channel.id];
  const effect = noop.useEffect(() => {
    ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
    return () => {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5403).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: <ThemedChannelVoiceChat channel={channel} /> });
  }} />;
};
