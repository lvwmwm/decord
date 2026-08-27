// Module ID: 5461
// Function ID: 5462
// Name: Background
// Dependencies: [19, 17, 21, 1501]
// Exports: Background

// Module 5461 (Background)
import noopAll from "noop" /* 19 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;
import { Animated } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;

export const Background = function Background(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = createStandardNavigationFactories;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <Animated.View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};
