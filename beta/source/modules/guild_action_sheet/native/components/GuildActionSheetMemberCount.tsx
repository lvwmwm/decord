// Module ID: 12849
// Function ID: 12850
// Name: GuildActionSheetMemberCount
// Dependencies: [19, 17, 21, 4836, 576, 1365, 1115, 4832, 2]

// Module 12849 (GuildActionSheetMemberCount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let num;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, dot: size, dotContainer: { alignItems: "center", justifyContent: "center", marginRight: 4 }, onlineDot: obj2, offlineDot: obj3, refreshText: { textAlignVertical: "center", lineHeight: num } };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj3 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let closure_5 = createStyles(obj);
const memoResult = react.memo(function MemberCount(arg0) {
  let color;
  let count;
  let dotContainerWidth;
  let items1;
  let items2;
  let stringResult;
  let textVariant;
  let tmp4;
  let type;
  ({ type, count, color, dotContainerWidth, textVariant } = arg0);
  if (null == count) {
    let v3DzP7x;
    const intl2 = intl3.intl;
    const string = intl2.string;
    if ("online" === type) {
      v3DzP7x = tmp5(1115).t["3DzP7x"];
    } else {
      v3DzP7x = tmp5(1115).t["5SWsJX"];
    }
    stringResult = string(v3DzP7x);
    tmp4 = tmp5;
  } else {
    let etqpUG;
    const intl = intl3.intl;
    const format = intl.format;
    if ("online" === type) {
      etqpUG = tmp(1115).t.PIikks;
    } else {
      etqpUG = tmp(1115).t.etqpUG;
    }
    const obj = { count };
    stringResult = format(etqpUG, obj);
    tmp4 = tmp;
  }
  const tmp8 = closure_5();
  const items = [tmp8.dotContainer, ];
  let tmp12 = null != dotContainerWidth;
  const obj2 = { style: tmp8.wrapper, children: items2 };
  const tmp9 = React3;
  if (tmp12) {
    tmp12 = { width: dotContainerWidth };
    const obj3 = { width: dotContainerWidth };
  }
  items[1] = tmp12;
  const obj4 = { style: items, children: _false(View, { style: items1 }) };
  items1 = [tmp8.dot, "online" === type ? tmp8.onlineDot : tmp8.offlineDot];
  items2 = [_false(View, obj4), ];
  const Text = tmp4(4832).Text;
  if (textVariant == null) {
    textVariant = "text-sm/normal";
  }
  const obj5 = { variant: textVariant, color, lineClamp: 1, style: tmp8.refreshText, children: stringResult };
  if (color == null) {
    color = "text-default";
  }
  items2[1] = _false(Text, obj5);
  return tmp9(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;
