// Module ID: 10239
// Function ID: 78985
// Dependencies: [31, 27, 10240, 33, 4130, 689, 9910, 1557, 10245, 22, 10244, 4066, 4662, 10246, 7530, 10415, 4660, 1212, 1273, 10037, 11832, 2]

// Module 10239
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { useIsVoiceChatFocused } from "resetFocusTimer";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
obj.chat = obj;
_createForOfIteratorHelperLoose = { height: 44, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.chatHeaderSpacer = _createForOfIteratorHelperLoose;
let obj2 = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj.chatHeader = obj2;
obj.chatHeaderBackIconContainer = { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" };
obj.chatHeaderTitleContainer = { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 };
obj.safeAreaTop = { alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let flag = channel.inModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  const tmp2 = useIsVoiceChatFocused();
  const items = [id, guild_id];
  const effect = importAllResult.useEffect(() => {
    let obj = guild_id(outer1_2[6]);
    obj = { guildId: guild_id, channelId: id };
    const messages = obj.fetchMessages(obj);
  }, items);
  const top = guild_id(1557)().top;
  let obj = id(10245);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  let openVoice;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (null == openVoice) {
    openVoice = guild_id(22).noop;
  }
  let obj1 = id(10244);
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
  const items1 = [callback(guild_id(4662), { absolute: true, tall: true }), ];
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
    tmp15Result = callback(guild_id(7530), obj1);
    const tmp15 = callback;
    const tmp18 = guild_id(7530);
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
  items2[3] = callback(guild_id(10415), { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" });
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
  const intl = id(1212).intl;
  obj8.accessibilityLabel = intl.string(id(1212).t["13/7kX"]);
  obj8.style = tmp.chatHeaderBackIconContainer;
  const obj9 = { source: guild_id(10037), size: id(1273).Icon.Sizes.MEDIUM };
  obj8.children = callback(id(1273).Icon, obj9);
  const items6 = [callback(id(4660).PressableOpacity, obj8), ];
  const tmp10 = guild_id(4066)();
  const tmp11 = closure_7;
  const tmp12 = View;
  const tmp13 = closure_7;
  const tmp20 = callback;
  const tmp21 = View;
  const tmp22 = callback;
  const tmp23 = View;
  const tmp24 = closure_7;
  const tmp25 = View;
  items6[1] = callback(View, { style: tmp.chatHeaderTitleContainer, children: callback(id(11832).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj6.children = items6;
  items2[4] = tmp24(tmp25, obj6);
  obj.children = items2;
  items1[1] = tmp13(id(10246).ChannelContainer, obj);
  obj.children = items1;
  return tmp11(tmp12, obj);
});
const result = require("resetFocusTimer").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default memoResult;
