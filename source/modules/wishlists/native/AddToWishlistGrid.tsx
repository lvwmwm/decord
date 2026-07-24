// Module ID: 12160
// Function ID: 95269
// Name: AddToWishlistGrid
// Dependencies: [31, 27, 5510, 33, 4130, 12159, 12161, 2]
// Exports: default

// Module 12160 (AddToWishlistGrid)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { flexDirection: "row", flexWrap: "wrap", gap: require("ARBITRARY_LARGE_OFFSET").WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" };
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ itemsContainer: _createForOfIteratorHelperLoose });
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  let dependencyMap;
  let importDefault;
  let items;
  let require;
  ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
  return <View style={callback().itemsContainer}>{items.map((itemSource, positionInSection) => {
    const sku = itemSource.sku;
    obj = { newValue: obj };
    obj = { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine };
    obj = { sku };
    let id;
    if (null != id) {
      id = id.id;
    }
    obj.wishlistId = id;
    obj.analyticsLocations = closure_1;
    obj.size = closure_2;
    obj.children = outer1_4(outer1_1(outer1_2[6]), obj);
    return outer1_4(outer1_0(outer1_2[5]).WishlistAnalyticsProvider, obj, sku.id);
  })}</View>;
};
