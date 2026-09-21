// Module ID: 11269
// Function ID: 11270
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 558, 568, 4911, 4959, 5317, 4642, 10330, 11229, 2]

// Module 11269 (ChannelVoiceChatModal)
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4642 */;
import useChannelNameDefault from "useChannelName" /* 4911 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4959 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 10330 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11229 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(9);
  channel = channel.channel;
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] !== channel.id) {
    const fn = function c() {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
      return () => {
        ChannelRTCActionCreatorsDefault.updateChatOpen(id.id, false);
      };
    };
    const items = [channel.id];
    cResult[0] = channel.id;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  let str = tmp5;
  if (tmp5 == null) {
    str = "";
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = jsx(channel(5317).StageIcon, { size: "sm" });
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel) {
    const fn2 = function f() {
      let guild_id = channel.guild_id;
      if (guild_id == null) {
        guild_id = null;
      }
      return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: jsx(ChannelVoiceChatDefault, { channel, inModal: true }) });
    };
    cResult[4] = channel;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === str) {
    if (cResult[7] === tmp12) {
      let tmp13 = cResult[8];
    }
    return tmp13;
  }
  const tmp14 = jsx(ModalStackNavigatorDefault, { screenKey: "StageVoiceChat", title: str, titleIcon: tmp9, render: tmp12 });
  cResult[6] = str;
  cResult[7] = tmp12;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : ((channel) => {
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5317).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: jsx(ChannelVoiceChatDefault, { channel, inModal: true }) });
  }} />;
});
