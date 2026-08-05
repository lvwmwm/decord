// Module ID: 9690
// Function ID: 9691
// Name: Timestamp
// Dependencies: [19, 21, 4255, 712, 9691, 1297, 3956, 2]
// Exports: default

// Module 9690 (Timestamp)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { timestamp: null };
createCacheKey = { color: require("Themes").colors.TEXT_DEFAULT, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const tmp = createCacheKey();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = importDefault(9691)(node);
  const tmp3 = jsx;
  return tmp3(node(1297).LegacyText, {
    style,
    onPress() {
      let obj = outer1_1(outer1_2[6]);
      obj = { key: "TIMESTAMP", content: node.full };
      obj.open(obj);
    },
    children: importDefault(9691)(node)
  });
};
