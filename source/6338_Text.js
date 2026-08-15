// Module ID: 6338
// Function ID: 6339
// Name: Text
// Dependencies: [17, 21, 1501]
// Exports: Text

// Module 6338 (Text)
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export const Text = function Text(style) {
  let colors;
  let fonts;
  const merged = Object.assign(style, Object.create(null));
  let obj = require(1501) /* createStandardNavigationFactories */;
  const theme = obj.useTheme();
  obj = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  obj = { color: colors.text };
  const items = [obj, fonts.regular, style.style];
  obj.style = items;
  return <Text color={colors.text} />;
};
