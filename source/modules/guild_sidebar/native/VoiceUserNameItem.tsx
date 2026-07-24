// Module ID: 15024
// Function ID: 114472
// Name: VoiceUserNameItem
// Dependencies: [57, 31, 27, 33, 4130, 4361, 8561, 4126, 3969, 1212, 15025, 2]
// Exports: default

// Module 15024 (VoiceUserNameItem)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsxs: closure_6, jsx: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { marginLeft: 8, flex: 1, flexDirection: "row" }, tag: { flexDirection: "row", alignItems: "center", paddingLeft: 8 }, measuringTag: { opacity: 0 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default function VoiceUserNameItem(arg0) {
  let _slicedToArray;
  let color;
  let dependencyMap;
  let guildId;
  let importDefault;
  let isGuest;
  let member;
  let tmp11;
  let tmp7;
  let tmp9;
  let user;
  let variant;
  ({ member, user, isGuest } = arg0);
  ({ guildId, color, variant } = arg0);
  const tmp = callback4();
  let obj = { userId: user.id, guildId };
  let obj1 = _require(8561);
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: importDefault(4361)(obj) });
  const tmp4 = callback(React.useState(0), 2);
  const first = tmp4[0];
  _require = tmp4[1];
  const tmp2 = importDefault(4361)(obj);
  [tmp7, importDefault] = callback(React.useState(0), 2);
  const tmp6 = callback(React.useState(0), 2);
  [tmp9, dependencyMap] = callback(React.useState(true), 2);
  const tmp8 = callback(React.useState(true), 2);
  [tmp11, _slicedToArray] = callback(React.useState(0), 2);
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = React.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  obj = { onLayout: callback };
  const items = [tmp.container, ];
  let measuringTag = tmp9;
  const callback2 = React.useCallback((nativeEvent) => {
    callback4(nativeEvent.nativeEvent.layout.width);
    callback3(false);
  }, []);
  if (tmp9) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  obj.style = items;
  obj = { variant, color, lineClamp: 1, onLayout: callback1 };
  let tmp18 = null != displayNameStylesFont;
  if (tmp18) {
    obj1 = { fontFamily: displayNameStylesFont };
    tmp18 = obj1;
  }
  obj.style = tmp18;
  let nick;
  if (null != member) {
    nick = member.nick;
  }
  if (null == nick) {
    nick = importDefault(3969).getName(user);
    const obj6 = importDefault(3969);
  }
  const items1 = [nick, ];
  if (isGuest) {
    const obj2 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive" };
    const intl = _require(1212).intl;
    const items2 = ["\u00A0", intl.string(_require(1212).t["pFO/Ph"])];
    obj2.children = items2;
    isGuest = callback2(_require(4126).Text, obj2);
  }
  items1[1] = isGuest;
  obj.children = items1;
  const items3 = [callback2(_require(4126).Text, obj), ];
  if (!tmp9) {
    tmp9 = 0 !== first && 0 !== tmp7 && 0 !== tmp11 && first >= tmp7 + tmp11;
    const tmp25 = 0 !== first && 0 !== tmp7 && 0 !== tmp11 && first >= tmp7 + tmp11;
  }
  if (tmp9) {
    const obj3 = { onLayout: callback2, style: tmp.tag };
    const obj4 = { userId: user.id };
    obj3.children = callback3(importDefault(15025), obj4);
    tmp9 = callback3(View, obj3);
  }
  items3[1] = tmp9;
  obj.children = items3;
  return callback2(View, obj);
};
