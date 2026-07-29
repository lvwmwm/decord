// Module ID: 6783
// Function ID: 6784
// Name: ModalScreen
// Dependencies: [19, 17, 21, 4189, 712, 5215, 2]
// Exports: ModalScreen

// Module 6783 (ModalScreen)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { container: null };
createCacheKey = { flex: 1, flexDirection: "column", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(children) {
  let backgroundColor = children.backgroundColor;
  const tmp = createCacheKey();
  const insets = importDefault(5215)().insets;
  const style = [tmp.container, ];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{arg0.children}</View>;
};
