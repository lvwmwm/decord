// Module ID: 12624
// Function ID: 12625
// Dependencies: [19, 17, 21, 1494, 12625, 2]

// Module 12624
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(() => {
  let obj = require(12625) /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: require(12625) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1494)().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={require(12625) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1494)().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
