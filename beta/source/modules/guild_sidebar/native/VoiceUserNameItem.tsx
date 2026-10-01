// Module ID: 15756
// Function ID: 15757
// Name: VoiceUserNameItem
// Dependencies: [32, 19, 17, 21, 4836, 5084, 9188, 4832, 4678, 1115, 15757, 2]
// Exports: default

// Module 15756 (VoiceUserNameItem)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5084 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9188 */;
import VoiceGuildTagDefault from "VoiceGuildTag" /* 15757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { marginLeft: 8, flex: 1, flexDirection: "row" }, tag: { flexDirection: "row", alignItems: "center", paddingLeft: 8 }, measuringTag: { opacity: 0 } });
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default function VoiceUserNameItem(arg0) {
  let c0;
  let c1;
  let c2;
  let c3;
  let color;
  let guildId;
  let isGuest;
  let items;
  let items1;
  let items2;
  let items3;
  let member;
  let obj8;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp20;
  let tmp8;
  let user;
  let variant;
  ({ member, user, isGuest } = arg0);
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  ({ guildId, color, variant } = arg0);
  const tmp = closure_8();
  const obj = { userId: user.id, guildId };
  const tmp4 = useDisplayNameStylesDefault(obj);
  const obj2 = useDisplayNameStylesFont;
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: tmp4 });
  [tmp8, c0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp10, c1] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp12, c2] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  [tmp14, c3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj3 = { onLayout: callback, style: items, children: items3 };
  items = [tmp.container, ];
  let measuringTag = tmp12;
  const callback2 = react.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
    _undefined3(false);
  }, []);
  if (tmp12) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  const obj4 = { variant, color, lineClamp: 1, onLayout: callback1, style: tmp20, children: items1 };
  tmp20 = null != displayNameStylesFont;
  const Text = tmp5(4832).Text;
  if (tmp20) {
    tmp20 = { fontFamily: displayNameStylesFont };
    const obj5 = { fontFamily: displayNameStylesFont };
  }
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    const tmp2Result = UserUtilsDefault;
    nick = tmp2Result.getName(user);
  }
  items1 = [nick, ];
  if (isGuest) {
    const obj6 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: items2 };
    const Text2 = tmp5(4832).Text;
    const intl = tmp5(1115).intl;
    items2 = ["\u00A0", intl.string(intl2.t["pFO/Ph"])];
    isGuest = tmp18(Text2, obj6);
  }
  items1[1] = isGuest;
  items3 = [metroRequire(Text, obj4), ];
  if (!tmp12) {
    tmp12 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
  }
  if (tmp12) {
    const obj7 = { onLayout: callback2, style: tmp.tag, children: metroImportDefault(VoiceGuildTagDefault, obj8) };
    obj8 = { userId: user.id };
    tmp12 = metroImportDefault(tmp19, obj7);
  }
  items3[1] = tmp12;
  return metroRequire(View, obj3);
};
