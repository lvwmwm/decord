// Module ID: 10298
// Function ID: 79530
// Name: Timestamp
// Dependencies: [31, 33, 4130, 689, 10299, 1273, 3831, 2]
// Exports: default

// Module 10298 (Timestamp)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.timestamp = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  let style = node.style;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const timestamp = tmp.timestamp;
  if (null != timestamp) {
    style = timestamp;
  }
  obj.style = style;
  obj.onPress = function onPress() {
    let obj = outer1_1(outer1_2[6]);
    obj = { key: "TIMESTAMP", content: node.full };
    obj.open(obj);
  };
  obj.children = importDefault(10299)(node);
  return jsx(node(1273).LegacyText, {});
};
