// Module ID: 7012
// Function ID: 7013
// Dependencies: [19, 17, 21, 1498]
// Exports: Background

// Module 7012
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1498 */;
import react from "react" /* 19 */;

const Animated = react_native.Animated;
const jsx = Fragment.jsx;

export function Background(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = Link;
  const colors = obj.useTheme().colors;
  const View = Animated.View;
  const merged1 = Object.assign(merged);
  const items = [, ];
  const obj3 = { flex: 1, backgroundColor: colors.background };
  items[0] = obj3;
  items[1] = style;
  return <View style={items} />;
}
