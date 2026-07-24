// Module ID: 15389
// Function ID: 117455
// Dependencies: [31, 27, 33, 4130, 689, 2]

// Module 15389
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let obj = {};
obj = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.imageContainer = obj;
let closure_2 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((arg0) => {
  let height;
  let style;
  let width;
  ({ width, height, style } = arg0);
  const obj = {};
  const items = [{ width, height }, callback().imageContainer, style];
  obj.style = items;
  return <View />;
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;
