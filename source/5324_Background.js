// Module ID: 5324
// Function ID: 5325
// Name: Background
// Dependencies: [19, 17, 21, 1500]
// Exports: Background

// Module 5324 (Background)
import "noop";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;

export const Background = function Background(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = require(1500) /* createStandardNavigationFactories */;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <Animated.View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};
