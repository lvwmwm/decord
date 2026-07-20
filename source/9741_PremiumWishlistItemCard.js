// Module ID: 9741
// Function ID: 75809
// Name: PremiumWishlistItemCard
// Dependencies: []
// Exports: default

// Module 9741 (PremiumWishlistItemCard)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).PremiumSubscriptionSKUToPremiumType;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(arg0) {
  let size;
  let sku;
  let source;
  let wishlistOwnerId;
  ({ sku, size } = arg0);
  const arg1 = size;
  let obj = { "Bool(false)": "r", "Bool(false)": "onRequireModeratorMFAClick", "Bool(false)": "Array", "Bool(false)": "isSpamMessageRequest" };
  ({ source, wishlistOwnerId } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let isPremiumResult = id === wishlistOwnerId;
  if (isPremiumResult) {
    isPremiumResult = arg1(dependencyMap[5]).isPremium(stateFromStores, closure_5[sku.id]);
    const obj3 = arg1(dependencyMap[5]);
  }
  const items1 = [size];
  const callback = React.useCallback(() => callback(size(closure_2[6]).PremiumSKUPreview, { size }), items1);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source, isOwned: isPremiumResult, size };
  const obj2 = arg1(dependencyMap[4]);
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[7]), obj);
};
