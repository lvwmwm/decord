// Module ID: 12019
// Function ID: 92878
// Name: AddToWishlistGrid
// Dependencies: []
// Exports: default

// Module 12019 (AddToWishlistGrid)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_5 = arg1(dependencyMap[4]).createStyles({ itemsContainer: { gap: arg1(dependencyMap[2]).WISHLIST_SUGGESTION_CARD_GAP } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  let items;
  ({ items, wishlist: closure_0, analyticsLocations: closure_1, cardSize: closure_2 } = arg0);
  return <View style={callback().itemsContainer}>{items.map((itemSource, positionInSection) => {
    const sku = itemSource.sku;
    let obj = { newValue: obj };
    obj = { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine };
    obj = { sku };
    let id;
    if (null != lib) {
      id = lib.id;
    }
    obj.wishlistId = id;
    obj.analyticsLocations = callback;
    obj.size = closure_2;
    obj.children = closure_4(callback(closure_2[6]), obj);
    return closure_4(lib(closure_2[5]).WishlistAnalyticsProvider, obj, sku.id);
  })}</View>;
};
