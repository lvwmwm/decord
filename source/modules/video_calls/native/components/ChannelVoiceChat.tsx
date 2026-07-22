// Module ID: 10197
// Function ID: 78722
// Dependencies: []

// Module 10197
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const useIsVoiceChatFocused = arg1(dependencyMap[2]).useIsVoiceChatFocused;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { borderWidth: true, width: 6, height: 117, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.chat = obj;
obj1 = { height: 44, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.chatHeaderSpacer = obj1;
const obj2 = { -9223372036854775808: "XSmallIcon", -9223372036854775808: "png", -9223372036854775808: null, 9223372036854775807: "flex", -9223372036854775808: 1, -9223372036854775808: "center", 9223372036854775807: 16, 0: 0, 9223372036854775807: "absolute", 0: 48, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.chatHeader = obj2;
obj.chatHeaderBackIconContainer = {};
obj.chatHeaderTitleContainer = {};
const tmp2 = arg1(dependencyMap[3]);
obj.safeAreaTop = { alignSelf: "stretch", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
let closure_8 = obj1.createStyles(obj);
const obj3 = { alignSelf: "stretch", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const id = channel.id;
  const arg1 = id;
  const guild_id = channel.guild_id;
  const importDefault = guild_id;
  let flag = channel.inModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  const tmp2 = useIsVoiceChatFocused();
  const items = [id, guild_id];
  const effect = importAllResult.useEffect(() => {
    let obj = guild_id(closure_2[6]);
    obj = { guildId: guild_id, channelId: id };
    const messages = obj.fetchMessages(obj);
  }, items);
  const top = importDefault(dependencyMap[7])().top;
  let obj = arg1(dependencyMap[8]);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  let openVoice;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (null == openVoice) {
    openVoice = importDefault(dependencyMap[9]).noop;
  }
  let obj1 = arg1(dependencyMap[10]);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel.channel);
  obj = {};
  let str = "no-hide-descendants";
  const ref = importAllResult.useRef(null);
  if (tmp2) {
    str = "yes";
  }
  obj.importantForAccessibility = str;
  obj.accessibilityElementsHidden = !tmp2;
  obj.style = tmp.chat;
  const items1 = [callback(importDefault(dependencyMap[12]), { "Bool(false)": null, "Bool(false)": null }), ];
  obj = { guildId: guild_id, channelId: id };
  let tmp15Result = null;
  if (!flag) {
    obj1 = { hidden: !tmp2, animated: true };
    if (isConnectedToVoiceChannel) {
      let str2 = "light-content";
    } else {
      str2 = "dark-content";
    }
    obj1.barStyle = str2;
    tmp15Result = callback(importDefault(dependencyMap[14]), obj1);
    const tmp15 = callback;
    const tmp18 = importDefault(dependencyMap[14]);
  }
  const items2 = [tmp15Result, , , , ];
  const obj2 = {};
  const items3 = [tmp.safeAreaTop, ];
  const obj3 = { height: top };
  let str4;
  if (flag) {
    str4 = "none";
  }
  obj3.display = str4;
  items3[1] = obj3;
  obj2.style = items3;
  items2[1] = callback(View, obj2);
  const obj4 = {};
  const items4 = [tmp.chatHeaderSpacer, ];
  const obj5 = {};
  let str5;
  if (flag) {
    str5 = "none";
  }
  obj5.display = str5;
  items4[1] = obj5;
  obj4.style = items4;
  items2[2] = callback(View, obj4);
  items2[3] = callback(importDefault(dependencyMap[15]), { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" });
  const obj6 = {};
  const items5 = [tmp.chatHeader, ];
  const obj7 = { top };
  let str6;
  if (flag) {
    str6 = "none";
  }
  obj7.display = str6;
  items5[1] = obj7;
  obj6.style = items5;
  const obj8 = { accessibilityRole: "button", onPress: openVoice };
  const intl = arg1(dependencyMap[17]).intl;
  obj8.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.13/7kX);
  obj8.style = tmp.chatHeaderBackIconContainer;
  const obj9 = { source: importDefault(dependencyMap[19]), size: arg1(dependencyMap[18]).Icon.Sizes.MEDIUM };
  obj8.children = callback(arg1(dependencyMap[18]).Icon, obj9);
  const items6 = [callback(arg1(dependencyMap[16]).PressableOpacity, obj8), ];
  const tmp10 = importDefault(dependencyMap[11])();
  const tmp11 = closure_7;
  const tmp12 = View;
  const tmp13 = closure_7;
  const tmp20 = callback;
  const tmp21 = View;
  const tmp22 = callback;
  const tmp23 = View;
  const tmp24 = closure_7;
  const tmp25 = View;
  items6[1] = callback(View, { style: tmp.chatHeaderTitleContainer, children: callback(arg1(dependencyMap[20]).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj6.children = items6;
  items2[4] = tmp24(tmp25, obj6);
  obj.children = items2;
  items1[1] = tmp13(arg1(dependencyMap[13]).ChannelContainer, obj);
  obj.children = items1;
  return tmp11(tmp12, obj);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default memoResult;
