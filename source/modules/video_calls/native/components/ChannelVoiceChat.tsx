// Module ID: 10213
// Function ID: 78754
// Dependencies: [31, 27, 10214, 33, 4165, 689, 9877, 1557, 10219, 22, 10218, 4101, 4697, 10220, 6658, 10389, 4695, 1212, 1273, 10006, 11848, 2]

// Module 10213
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
  let left;
  let right;
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
  const tmp4 = guild_id(1557)();
  const top = tmp4.top;
  ({ left, right } = tmp4);
  let obj = id(10219);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  let openVoice;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (null == openVoice) {
    openVoice = guild_id(22).noop;
  }
  let obj1 = id(10218);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel.channel);
  obj = {};
  let str = "no-hide-descendants";
  const ref = importAllResult.useRef(null);
  if (tmp2) {
    str = "yes";
  }
  obj.importantForAccessibility = str;
  obj.accessibilityElementsHidden = !tmp2;
  const items1 = [tmp.chat, ];
  let tmp14;
  if (!flag) {
    obj = { paddingLeft: left, paddingRight: right };
    tmp14 = obj;
  }
  items1[1] = tmp14;
  obj.style = items1;
  const items2 = [callback(guild_id(4697), { absolute: true, tall: true }), ];
  obj1 = { guildId: guild_id, channelId: id };
  let tmp17Result = null;
  if (!flag) {
    const obj2 = { hidden: !tmp2, animated: true };
    if (isConnectedToVoiceChannel) {
      let str2 = "light-content";
    } else {
      str2 = "dark-content";
    }
    obj2.barStyle = str2;
    tmp17Result = callback(guild_id(6658), obj2);
    const tmp17 = callback;
    const tmp20 = guild_id(6658);
  }
  const items3 = [tmp17Result, , , , ];
  const obj3 = {};
  const items4 = [tmp.safeAreaTop, ];
  const obj4 = { height: top };
  let str4;
  if (flag) {
    str4 = "none";
  }
  obj4.display = str4;
  items4[1] = obj4;
  obj3.style = items4;
  items3[1] = callback(View, obj3);
  const obj5 = {};
  const items5 = [tmp.chatHeaderSpacer, ];
  const obj6 = {};
  let str5;
  if (flag) {
    str5 = "none";
  }
  obj6.display = str5;
  items5[1] = obj6;
  obj5.style = items5;
  items3[2] = callback(View, obj5);
  items3[3] = callback(guild_id(10389), { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" });
  const obj7 = {};
  const items6 = [tmp.chatHeader, ];
  const obj8 = { top };
  let str6;
  if (flag) {
    str6 = "none";
  }
  obj8.display = str6;
  items6[1] = obj8;
  obj7.style = items6;
  const obj9 = { accessibilityRole: "button", onPress: openVoice };
  const intl = id(1212).intl;
  obj9.accessibilityLabel = intl.string(id(1212).t["13/7kX"]);
  obj9.style = tmp.chatHeaderBackIconContainer;
  const obj10 = { source: guild_id(10006), size: id(1273).Icon.Sizes.MEDIUM };
  obj9.children = callback(id(1273).Icon, obj10);
  const items7 = [callback(id(4695).PressableOpacity, obj9), ];
  const tmp11 = guild_id(4101)();
  const tmp12 = closure_7;
  const tmp13 = View;
  const tmp15 = closure_7;
  const tmp22 = callback;
  const tmp23 = View;
  const tmp24 = callback;
  const tmp25 = View;
  const tmp26 = closure_7;
  const tmp27 = View;
  items7[1] = callback(View, { style: tmp.chatHeaderTitleContainer, children: callback(id(11848).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj7.children = items7;
  items3[4] = tmp26(tmp27, obj7);
  obj1.children = items3;
  items2[1] = tmp15(id(10220).ChannelContainer, obj1);
  obj.children = items2;
  return tmp12(tmp13, obj);
});
const result = require("resetFocusTimer").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default memoResult;
