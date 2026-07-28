// Module ID: 6761
// Function ID: 59412
// Name: ModalScreen
// Dependencies: [31, 27, 33, 4165, 689, 5193, 2]
// Exports: ModalScreen

// Module 6761 (ModalScreen)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.container, ];
  obj = {};
  if (null == backgroundColor) {
    backgroundColor = tmp.container.backgroundColor;
  }
  obj.backgroundColor = backgroundColor;
  ({ left: obj2.paddingLeft, right: obj2.paddingRight, bottom: obj2.paddingBottom } = importDefault(5193)().insets);
  items[1] = obj;
  obj.style = items;
  obj.children = backgroundColor.children;
  return <View />;
};
