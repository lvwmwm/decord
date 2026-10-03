// Module ID: 6027
// Function ID: 6028
// Name: Badge
// Dependencies: [109, 32, 19, 17, 21, 1491, 6028]
// Exports: Badge

// Module 6027 (Badge)
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let finished;

let Platform;
let StyleSheet;
let metroImportDefault;
let closure_3 = ["backgroundColor"];
({ Animated: metroImportDefault, Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const container = StyleSheet.create({ container: { alignSelf: "flex-end", textAlign: "center", paddingHorizontal: 4, overflow: "hidden" } });

export const Badge = function Badge(visible) {
  let children;
  let colors;
  let first1;
  let fonts;
  let items1;
  let rounded;
  let style;
  let tmp4;
  let flag = visible.visible;
  ({ children, style } = visible);
  if (flag === undefined) {
    flag = true;
  }
  let num = visible.size;
  if (num === undefined) {
    num = 18;
  }
  const merged = Object.assign(visible, Object.assign({ children: 0, style: 0, visible: 0, size: 0 }));
  first1 = undefined;
  const opacity = _slicedToArray(react.useState(() => {
    let num = 0;
    const Value = metroImportDefault.Value;
    if (flag) {
      num = 1;
    }
    const value = new Value(num);
    return value;
  }), 1)[0];
  [first1, tmp4] = react.useState(flag);
  closure_3 = tmp4;
  const obj2 = flag(first1[5]);
  const theme = obj2.useTheme();
  const items = [opacity, first1, flag];
  ({ colors, fonts } = theme);
  const effect = react.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      let num = 0;
      const timing = metroImportDefault.timing;
      const tmp3 = first;
      if (flag) {
        num = 1;
      }
      const obj = { toValue: num, duration: 150, useNativeDriver: true };
      const timingResult = timing(tmp3, obj);
      timingResult.start((finished) => {
        finished = finished.finished && !flag;
        if (finished) {
          closure_1_3(false);
        }
      });
      return () => opacity.stopAnimation();
    }
  }, items);
  if (!first1) {
    if (flag) {
      tmp4(true);
    } else {
      return null;
    }
  }
  const tmp9 = StyleSheet.flatten(style) || {};
  let notification = tmp9.backgroundColor;
  if (undefined === notification) {
    notification = colors.notification;
  }
  let str = "white";
  const tmp10 = _objectWithoutProperties(tmp9, closure_3);
  const obj3 = opacity(first1[6])(notification);
  if (obj3.isLight()) {
    str = "black";
  }
  const result = num / 2;
  const obj4 = { transform: items1, color: str, lineHeight: num - 1, height: num, minWidth: num, opacity, backgroundColor: notification, fontSize: rounded, borderRadius: result, borderCurve: "continuous" };
  const obj5 = { scale: opacity.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) };
  rounded = Math.floor(3 * num / 4);
  const Text = RN.Text;
  items1 = [obj5];
  const items2 = [obj4, fonts.regular, container.container, tmp10];
  const merged1 = Object.assign(merged);
  return <Text numberOfLines={1} style={items2}>{children}</Text>;
};
