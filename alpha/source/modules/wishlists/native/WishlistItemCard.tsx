// Module ID: 11665
// Function ID: 11666
// Name: WishlistItemCard
// Dependencies: [19, 1071, 21, 11666, 11668, 11669, 2]
// Exports: default

// Module 11665 (WishlistItemCard)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 11666 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 11668 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 11669 */;
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
