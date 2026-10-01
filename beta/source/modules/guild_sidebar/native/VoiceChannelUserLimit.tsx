// Module ID: 15752
// Function ID: 15753
// Name: VoiceChannelUserLimit
// Dependencies: [19, 17, 21, 4836, 576, 1177, 13335, 4832, 2]

// Module 15752 (VoiceChannelUserLimit)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 13335 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let rect = { videoIcon: size, wrapper: obj, left: obj2, mid: obj3, right: obj4 };
size = { height: 16, width: 16, marginRight: 4, tintColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ICON };
createStyles = createStyles.createStyles;
obj = { backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND, alignItems: "center", flexDirection: "row", borderRadius: 10, borderWidth: nativeDefault.modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj2 = { height: 20, flexDirection: "row", paddingLeft: 6, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
obj3 = { borderTopWidth: 20, borderBottomWidth: 0, borderTopColor: "transparent", borderBottomColor: "transparent", borderRightWidth: 6, borderRightColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND, paddingRight: 2 };
obj4 = { height: 20, flexDirection: "row", paddingRight: 6, paddingLeft: 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
let closure_6 = createStyles(rect);
const memoResult = react.memo(function VoiceChannelUserLimit(videoLimit) {
  let Text2;
  let items;
  let items1;
  let obj7;
  let str;
  let str1;
  let total;
  let users;
  ({ users, total } = videoLimit);
  videoLimit = videoLimit.videoLimit;
  const rect = closure_6();
  let tmp3 = null;
  const obj = { style: rect.wrapper, children: items1 };
  const obj2 = { style: rect.left, children: items };
  if (videoLimit) {
    const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
    const Icon = native.Icon;
    tmp3 = React3(Icon, obj3);
  }
  items = [tmp3, ];
  const obj4 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: str.padStart(2, "0") };
  const Text = Text_Text.Text;
  str = users.toString();
  items[1] = React3(Text, obj4);
  items1 = [hasOwnProperty(View, obj2), , ];
  const obj5 = { style: rect.mid };
  items1[1] = React3(View, obj5);
  const obj6 = { style: rect.right, children: React3(Text2, obj7) };
  obj7 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: str1.padStart(2, "0") };
  Text2 = Text_Text.Text;
  str1 = total.toString();
  items1[2] = React3(View, obj6);
  return hasOwnProperty(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default memoResult;
