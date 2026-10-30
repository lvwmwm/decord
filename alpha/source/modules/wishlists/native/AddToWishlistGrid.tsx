// Module ID: 14967
// Function ID: 14968
// Name: AddToWishlistGrid
// Dependencies: [19, 17, 7371, 21, 5009, 14966, 14968, 2]
// Exports: default

// Module 14967 (AddToWishlistGrid)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 7371 */;
import WishlistAnalyticsContext from "WishlistAnalyticsContext" /* 14966 */;
import AddToWishlistItemCardDefault from "AddToWishlistItemCard" /* 14968 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const WISHLIST_SUGGESTION_CARD_GAP = Constants.WISHLIST_SUGGESTION_CARD_GAP;
const jsx = Fragment.jsx;
const obj = { itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  let analyticsLocations;
  let id;
  let items;
  ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
  return <View style={closure_5().itemsContainer}>{items.map((itemSource, positionInSection) => {
    const sku = itemSource.sku;
    const obj2 = { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine };
    const WishlistAnalyticsProvider = WishlistAnalyticsContext.WishlistAnalyticsProvider;
    require = undefined;
    AddToWishlistItemCardDefault;
    if (require != null) {
      require = require.id;
    }
    return <WishlistAnalyticsProvider key={sku.id} newValue={obj2}>{null}</WishlistAnalyticsProvider>;
  })}</View>;
};
