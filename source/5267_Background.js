// Module ID: 5267
// Function ID: 5268
// Name: Background
// Dependencies: [19, 17, 21, 1481]
// Exports: Background

// Module 5267 (Background)
import "noop";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;

export const Background = function Background(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = require(1481) /* createStandardNavigationFactories */;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <Animated.View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};
