// Module ID: 10980
// Function ID: 10981
// Name: ChannelVoiceChat
// Dependencies: [19, 17, 10981, 21, 5009, 575, 9809, 1626, 10987, 12, 10985, 5248, 10716, 10988, 11193, 5016, 11195, 6974, 1114, 1188, 11572, 14334, 2]

// Module 10980 (ChannelVoiceChat)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import MessageManagerDefault from "MessageManager" /* 9809 */;
import ChannelCallStore from "ChannelCallStore" /* 10981 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
const View = react_native.View;
const useIsVoiceChatFocused = ChannelCallStore.useIsVoiceChatFocused;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { chat: obj2, chatHeaderSpacer: obj3, chatHeader: rect, chatHeaderBackIconContainer: { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" }, chatHeaderTitleContainer: { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 }, safeAreaTop: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj4 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function ChannelVoice(channel) {
  let Icon;
  let intl;
  let items1;
  let items2;
  let items3;
  let items7;
  let left;
  let obj11;
  let right;
  let str2;
  let str3;
  let str5;
  channel = channel.channel;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let flag = channel.inModal;
  const channel2 = channel.channel;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const tmp2 = useIsVoiceChatFocused();
  let obj = react;
  const items = [id, guild_id];
  const effect = react.useEffect(() => {
    const obj = MessageManagerDefault;
    const obj2 = { guildId: guild_id, channelId: id };
    const messages = obj.fetchMessages(obj2);
  }, items);
  const tmp6 = guild_id(1626)();
  const top = tmp6.top;
  ({ left, right } = tmp6);
  let obj2 = id(10987);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = tmp4(12).noop;
  }
  const tmp7Result = id(10985);
  const isConnectedToVoiceChannel = tmp7Result.useIsConnectedToVoiceChannel(channel2);
  let str = "no-hide-descendants";
  const ref = obj.useRef(null);
  guild_id(5248)();
  if (tmp2) {
    str = "yes";
  }
  const obj3 = { importantForAccessibility: str, accessibilityElementsHidden: !tmp2, style: items1, children: items2 };
  items1 = [tmp.chat, ];
  let tmp15;
  if (!flag) {
    tmp15 = { paddingLeft: left, paddingRight: right };
    const obj4 = { paddingLeft: left, paddingRight: right };
  }
  items1[1] = tmp15;
  items2 = [closure_6(guild_id(10716), { absolute: true, tall: true }), ];
  let tmp16Result = null;
  const obj5 = { guildId: guild_id, channelId: id, children: items3 };
  const ChannelContainer = tmp7(10988).ChannelContainer;
  if (!flag) {
    const tmp19 = !tmp2;
    const obj6 = { hidden: tmp19, animated: true, barStyle: str2 };
    const tmp4Result = guild_id(11193);
    if (isConnectedToVoiceChannel) {
      str2 = "light-content";
    } else {
      str2 = "dark-content";
      id(5016);
    }
    tmp16Result = tmp16(tmp4Result, obj6);
  }
  items3 = [tmp16Result, , , , ];
  const items4 = [tmp.safeAreaTop, ];
  const obj7 = { height: top, display: str3 };
  str3 = undefined;
  if (flag) {
    str3 = "none";
  }
  items4[1] = obj7;
  items3[1] = closure_6(View, { style: items4 });
  const items5 = [tmp.chatHeaderSpacer, ];
  let str4;
  if (flag) {
    str4 = "none";
  }
  items5[1] = { display: str4 };
  items3[2] = closure_6(View, { style: items5 });
  items3[3] = closure_6(guild_id(11195), { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" });
  const items6 = [tmp.chatHeader, ];
  const obj8 = { top, display: str5 };
  str5 = undefined;
  if (flag) {
    str5 = "none";
  }
  const obj9 = { style: items6, children: items7 };
  items6[1] = obj8;
  const obj10 = { accessibilityRole: "button", onPress: openVoice, accessibilityLabel: intl.string(id(1114).t["13/7kX"]), style: tmp.chatHeaderBackIconContainer, children: closure_6(Icon, obj11) };
  const PressableOpacity = tmp7(6974).PressableOpacity;
  intl = tmp7(1114).intl;
  obj11 = { source: guild_id(11572), size: id(1188).Icon.Sizes.MEDIUM };
  Icon = tmp7(1188).Icon;
  items7 = [closure_6(PressableOpacity, obj10), ];
  const obj12 = { style: tmp.chatHeaderTitleContainer, children: closure_6(id(14334).ChannelTitle, { guildId: guild_id, channelId: id }) };
  items7[1] = closure_6(View, obj12);
  items3[4] = closure_7(View, obj9);
  items2[1] = closure_7(ChannelContainer, obj5);
  return closure_7(View, obj3);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default memoResult;
