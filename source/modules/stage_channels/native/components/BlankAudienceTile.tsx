// Module ID: 10955
// Function ID: 10956
// Dependencies: [19, 17, 21, 1493, 10956, 2]

// Module 10955
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(() => {
  let obj = require(10956) /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: require(10956) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1493)().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={require(10956) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1493)().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
