// Module ID: 9980
// Function ID: 77134
// Name: DoubleTapEmojiEditNudgeInner
// Dependencies: [5, 31, 27, 4122, 1451, 653, 1852, 33, 4130, 689, 3803, 7745, 1453, 566, 1392, 9362, 675, 9375, 4126, 1212, 5151, 4660, 2]
// Exports: DoubleTapEmojiEditNudge

// Module 9980 (DoubleTapEmojiEditNudgeInner)
import ME from "ME";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";
import set from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "get ActivityIndicator";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
function DoubleTapEmojiEditNudgeInner(location) {
  const _location = location.location;
  const emoji = location.emoji;
  let obj = _location(1453);
  const dependencyMap = obj.useAppEntryKey();
  let obj1 = _location(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.useReducedMotion);
  const tmp3 = callback3(callback((arg0) => arg0.byAppEntry[closure_2].fontScale));
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = React.useMemo(() => {
    if (null != emoji.id) {
      let obj = emoji(1392);
      obj = { id: emoji.id, size: outer1_9 };
      let animated = !stateFromStores;
      if (animated) {
        animated = emoji.animated;
      }
      obj.animated = animated;
      let url = obj.getEmojiURL(obj);
    } else {
      url = emoji.url;
    }
    return url;
  }, items1);
  obj = { style: tmp3.doubleTapEmojiEditNudgeContainer };
  callback = React.useCallback(() => {
    let obj = _location(9362);
    obj = { pickerIntention: outer1_10.DEFAULT_REACT_EMOJI };
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores(tmp);
    obj.onPressEmoji = function() {
      return callback(...arguments);
    };
    obj.startExpanded = true;
    const result = obj.openEmojiPickerActionSheet(obj, "stack");
  }, items2);
  obj = { color: "text-subtle", variant: "text-sm/normal" };
  const intl = _location(1212).intl;
  obj.children = intl.string(_location(1212).t["1EUr/W"]);
  const items3 = [callback2(_location(4126).Text, obj), , ];
  obj1 = { style: tmp3.doubleTapEmojiContainer, fastImageStyle: tmp3.doubleTapCustomEmoji, textEmojiStyle: tmp3.doubleTapTextEmoji, src: memo };
  let str = "";
  const tmp = callback((arg0) => arg0.byAppEntry[closure_2].fontScale);
  const tmp6 = closure_12;
  const tmp7 = View;
  const tmp8 = callback2;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  items3[1] = tmp8(emoji(5151), obj1);
  const obj2 = { accessibilityRole: "button", onPress: callback, hitSlop: closure_13, style: tmp3.editButton };
  const obj3 = { color: "text-brand", variant: "text-sm/normal" };
  const intl2 = _location(1212).intl;
  obj3.children = intl2.string(_location(1212).t.bt75uw);
  obj2.children = callback2(_location(4126).Text, obj3);
  items3[2] = callback2(_location(4660).PressableOpacity, obj2);
  obj.children = items3;
  return tmp6(tmp7, obj);
}
({ EMOJI_URL_BASE_SIZE: closure_9, EmojiIntention: closure_10 } = set);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = { left: 8, right: 8 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { marginHorizontal: importDefault(689).space.PX_4 };
  obj.doubleTapEmojiContainer = obj;
  obj = { fontSize: 12 * arg0, color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.doubleTapTextEmoji = obj;
  obj.doubleTapCustomEmoji = { height: 16 * arg0, width: 16 * arg0 };
  const obj2 = { marginTop: importDefault(689).space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
  obj.doubleTapEmojiEditNudgeContainer = obj2;
  obj.editButton = { marginHorizontal: importDefault(689).space.PX_4 };
  return obj;
});
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  const DoubleTapReactionEmoji = setting(3803).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_2[11]).disambiguatedEmojiFromSettingsValue(setting), items);
  const memo1 = React.useMemo(() => setting(outer1_2[11]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  [][0] = setting;
  let tmp5 = null;
  if (true === setting.disableDoubleTap) {
    return null;
  } else {
    if (!tmp4) {
      if (tmp5 != memo1) {
        let obj = { location: _location, emoji: memo1 };
        let tmp8 = callback2(DoubleTapEmojiEditNudgeInner, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      obj = { location: _location, emoji: memo };
      tmp5 = callback2(DoubleTapEmojiEditNudgeInner, obj);
    }
    tmp8 = tmp5;
    tmp9 = tmp5 != memo;
  }
};
