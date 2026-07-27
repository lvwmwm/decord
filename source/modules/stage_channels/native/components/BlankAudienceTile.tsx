// Module ID: 10797
// Function ID: 83754
// Dependencies: [31, 27, 33, 1450, 10798, 2]

// Module 10797
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(() => {
  let obj = require(10798) /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = {};
  const items = [audienceTileStyles.container, ];
  obj = { width: require(10798) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1450)().width) };
  items[1] = obj;
  obj.style = items;
  return <View width={require(10798) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1450)().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
