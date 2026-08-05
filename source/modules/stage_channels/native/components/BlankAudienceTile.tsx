// Module ID: 10816
// Function ID: 10817
// Dependencies: [19, 17, 21, 1474, 10817, 2]

// Module 10816
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(() => {
  let obj = require(10817) /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: require(10817) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1474)().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={require(10817) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1474)().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
