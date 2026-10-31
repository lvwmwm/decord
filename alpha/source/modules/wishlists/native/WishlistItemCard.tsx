// Module ID: 14438
// Function ID: 14439
// Name: WishlistItemCard
// Dependencies: [19, 1072, 21, 14439, 14441, 14442, 2]
// Exports: default

// Module 14438 (WishlistItemCard)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 14439 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 14441 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 14442 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SKUProductLines = Constants.SKUProductLines;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  let isOwned;
  let sku;
  let source;
  let wishlistOwnerId;
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0 }));
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    CollectiblesWishlistItemCardDefault;
    const merged1 = Object.assign(merged);
    return <tmp20 sku={sku} isOwned={isOwned} source={source} wishlistOwnerId={wishlistOwnerId} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    PremiumWishlistItemCardDefault;
    const merged2 = Object.assign(merged);
    return <tmp13 sku={sku} source={source} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    SocialLayerStorefrontWishlistItemCardDefault;
    const merged3 = Object.assign(merged);
    return <tmp6 sku={sku} isOwned={isOwned} source={source} wishlistOwnerId={wishlistOwnerId} />;
  } else {
    return null;
  }
};
