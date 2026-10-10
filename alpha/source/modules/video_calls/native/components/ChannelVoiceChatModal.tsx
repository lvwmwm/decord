// Module ID: 10351
// Function ID: 10352
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 558, 576, 4972, 10352, 4827, 5421, 5106, 8224, 5002, 9635, 2]

// Module 10351 (ChannelVoiceChatModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4972 */;
import reactDefault from "react" /* 5002 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5106 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp4;
const native = tmp(4827);
const ModalStackNavigatorDefault = tmp4(9635);
const ChannelVoiceChatDefault = tmp4(10352);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedChannelVoiceChat(channel) {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  channel = channel.channel;
  const tmp5 = useColorThemeBackgroundDefault();
  if (cResult[0] !== channel) {
    const tmp8 = jsx(ChannelVoiceChatDefault, { channel, inModal: true });
    cResult[0] = channel;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp9;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = jsx(native.ThemeContextProvider, { gradient: tmp5, children: tmp6 });
  cResult[2] = tmp5;
  cResult[3] = tmp6;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function ThemedChannelVoiceChat(channel) {
  channel = channel.channel;
  const ThemeContextProvider = native.ThemeContextProvider;
  return <ThemeContextProvider gradient={useColorThemeBackgroundDefault()}>{null}</ThemeContextProvider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelVoiceChatModal(channel) {
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(9);
  const tmp = channel;
  channel = channel.channel;
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] !== channel.id) {
    const fn = function o() {
      let id;
      let obj = ChannelRTCActionCreatorsDefault;
      obj.updateChatOpen(channel.id, true);
      return () => {
        const obj = ChannelRTCActionCreatorsDefault;
        obj.updateChatOpen(id.id, false);
      };
    };
    const items = [channel.id];
    cResult[0] = channel.id;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  let str = tmp5;
  if (tmp5 == null) {
    str = "";
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = jsx(tmp(8224).StageIcon, { size: "sm" });
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel) {
    const fn2 = function f() {
      let guild_id = channel.guild_id;
      const Provider = reactDefault.Provider;
      const tmp2 = channel;
      if (guild_id == null) {
        guild_id = null;
      }
      return <Provider value={guild_id}><closure_5 channel={tmp2} /></Provider>;
    };
    cResult[4] = channel;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === str) {
    let tmp13;
    if (cResult[7] === tmp12) {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const tmp14 = jsx(ModalStackNavigatorDefault, { screenKey: "StageVoiceChat", title: str, titleIcon: tmp9, render: tmp12 });
  cResult[6] = str;
  cResult[7] = tmp12;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : (function ChannelVoiceChatModal(channel) {
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={tmp4(channel(8224).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    const Provider = reactDefault.Provider;
    const tmp2 = channel;
    if (guild_id == null) {
      guild_id = null;
    }
    return <Provider value={guild_id}><closure_5 channel={tmp2} /></Provider>;
  }} />;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default tmp2;
