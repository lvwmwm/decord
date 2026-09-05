// Module ID: 5650
// Function ID: 5651
// Name: Text
// Dependencies: [17, 21, 1484]
// Exports: Text

// Module 5650 (Text)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1484 */;

const Text = get_ActivityIndicator.Text;
const jsx = jsxProd.jsx;

export const Text = function Text(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  obj = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  obj = { color: colors.text };
  const items = [obj, fonts.regular, style.style];
  obj.style = items;
  return <Text color={colors.text} />;
};
