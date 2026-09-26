// Module ID: 10499
// Function ID: 10500
// Name: WishlistItemCard
// Dependencies: [19, 1074, 21, 10500, 10502, 10503, 2]
// Exports: default

// Module 10499 (WishlistItemCard)
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 10500 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 10502 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 10503 */;
import noop from "module_19" /* 19 */;

const SKUProductLines = fn(1074).SKUProductLines;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0 }));
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    const obj2 = { sku, isOwned, source, wishlistOwnerId };
    const merged1 = Object.assign(merged);
    return jsx(CollectiblesWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else if (tmp2.PREMIUM === productLine) {
    const obj3 = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku, source });
  } else if (tmp2.SOCIAL_LAYER_GAME_ITEM === productLine) {
    const obj = { sku, isOwned, source, wishlistOwnerId };
    const merged3 = Object.assign(merged);
    return jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else {
    return null;
  }
};
