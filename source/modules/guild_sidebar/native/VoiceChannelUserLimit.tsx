// Module ID: 14973
// Function ID: 114126
// Dependencies: [31, 27, 33, 4130, 689, 1273, 12720, 4126, 2]

// Module 14973
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { height: 16, width: 16, marginRight: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.VOICE_CHANNEL_USER_LIMIT_ICON };
obj.videoIcon = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND, alignItems: "center", flexDirection: "row", borderRadius: 10, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden" };
obj.wrapper = _createForOfIteratorHelperLoose;
let obj2 = { height: 20, flexDirection: "row", paddingLeft: 6, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
obj.left = obj2;
let obj3 = { borderTopWidth: 20, borderBottomWidth: 0, borderTopColor: "transparent", borderBottomColor: "transparent", borderRightWidth: 6, borderRightColor: require("_createForOfIteratorHelperLoose").colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND, paddingRight: 2 };
obj.mid = obj3;
let obj4 = { height: 20, flexDirection: "row", paddingRight: 6, paddingLeft: 2, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
obj.right = obj4;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function VoiceChannelUserLimit(videoLimit) {
  let total;
  let users;
  ({ users, total } = videoLimit);
  const rect = callback2();
  let obj = { style: rect.wrapper };
  obj = { style: rect.left };
  let tmp3 = null;
  if (videoLimit.videoLimit) {
    obj = { source: importDefault(12720), size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
    tmp3 = callback(require(1273) /* Button */.Icon, obj);
  }
  const items = [tmp3, ];
  const obj1 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: users.toString().padStart(2, "0") };
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  const items1 = [closure_5(View, obj), callback(View, { style: rect.mid }), ];
  const obj3 = { style: rect.right };
  const obj4 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text" };
  const obj2 = { style: rect.mid };
  const str = users.toString();
  obj4.children = total.toString().padStart(2, "0");
  obj3.children = callback(require(4126) /* Text */.Text, obj4);
  items1[2] = callback(View, obj3);
  obj.children = items1;
  return closure_5(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default memoResult;
