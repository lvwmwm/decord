// Module ID: 11008
// Function ID: 11009
// Dependencies: [19, 17, 21, 1493, 11009, 2]

// Module 11008
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(() => {
  let obj = require(11009) /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: require(11009) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1493)().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={require(11009) /* RaisedHandIcon */.getTileWidthStyle(importDefault(1493)().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
