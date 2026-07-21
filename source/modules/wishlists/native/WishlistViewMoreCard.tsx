// Module ID: 9748
// Function ID: 75846
// Name: WishlistViewMoreCard
// Dependencies: []
// Exports: default

// Module 9748 (WishlistViewMoreCard)
importAll(dependencyMap[0]);
({ Pressable: closure_3, StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = {};
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["borderRadius"] = importDefault(dependencyMap[4]).radii.lg;
  obj["backgroundColor"] = importDefault(dependencyMap[4]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj["justifyContent"] = "center";
  obj["alignItems"] = "center";
  obj.moreOverlay = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  let onPress;
  let overflowCount;
  let size;
  let sku;
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  let obj = { onPress };
  const intl = arg1(dependencyMap[5]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[5]).t.8uYD+I, { username: recipientName });
  const items = [callback(importDefault(dependencyMap[6]), { accessibilityHidden: true, sku, size, recipientName }), ];
  obj = { style: callback3().moreOverlay };
  obj = { hasMaxConnections: "<string:3362914305>", isBoostOnlySubscription: "<string:2018574337>" };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.children = intl2.format(arg1(dependencyMap[5]).t.F6iMs4, { count: overflowCount });
  obj.children = callback(arg1(dependencyMap[7]).Text, obj);
  items[1] = callback(closure_5, obj);
  obj.children = items;
  return callback2(closure_3, obj);
};
