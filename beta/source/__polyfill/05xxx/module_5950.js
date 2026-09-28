// Module ID: 5950
// Function ID: 5951
// Dependencies: [19, 17, 21, 1486]
// Exports: Background

// Module 5950
import Link from "Link" /* 1486 */;
import noop from "module_19" /* 19 */;

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;

export const Background = function Background(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj2 = {};
  const merged1 = Object.assign(merged);
  const items = [{ flex: 1, backgroundColor: Link.useTheme().colors.background }, style.style];
  obj2.style = items;
  return <Animated.View />;
};
