// Module ID: 14492
// Function ID: 110690
// Name: Subblocks
// Dependencies: [31, 27, 33, 689, 4130, 8666, 14493, 5464, 5484, 2]
// Exports: default

// Module 14492 (Subblocks)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    obj = { newValue: obj };
    obj = { tilePosition };
    obj = { style, children: outer1_4(outer1_1(outer1_2[6]), { subblock }) };
    obj.children = outer1_4(outer1_3, obj);
    return outer1_4(style(outer1_2[5]).CollectiblesAnalyticsProvider, obj, tilePosition);
  });
}
_createForOfIteratorHelperLoose = { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: _createForOfIteratorHelperLoose, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = callback();
  let obj = { value: importDefault(5464)(importDefault(5484).COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations };
  obj = { style: tmp.container };
  obj = { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock };
  obj.children = <Subblocks featuredBlock={arg0.featuredBlock} style={tmp.featuredSubblock} />;
  obj.children = <View featuredBlock={arg0.featuredBlock} style={tmp.featuredSubblock} />;
  return jsx(require(5464) /* mergeLocations */.AnalyticsLocationProvider, { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock });
};
