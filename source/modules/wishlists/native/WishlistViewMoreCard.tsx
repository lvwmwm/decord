// Module ID: 9790
// Function ID: 76112
// Name: WishlistViewMoreCard
// Dependencies: [31, 27, 33, 4130, 689, 1212, 9785, 4126, 2]
// Exports: default

// Module 9790 (WishlistViewMoreCard)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Pressable: closure_3, StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["borderRadius"] = importDefault(689).radii.lg;
  obj["backgroundColor"] = importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj["justifyContent"] = "center";
  obj["alignItems"] = "center";
  obj.moreOverlay = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  let onPress;
  let overflowCount;
  let size;
  let sku;
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  let obj = { onPress };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["8uYD+I"], { username: recipientName });
  const items = [callback(importDefault(9785), { accessibilityHidden: true, sku, size, recipientName }), ];
  obj = { style: callback3().moreOverlay };
  obj = { variant: "text-md/semibold", color: "text-overlay-light" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.format(require(1212) /* getSystemLocale */.t.F6iMs4, { count: overflowCount });
  obj.children = callback(require(4126) /* Text */.Text, obj);
  items[1] = callback(closure_5, obj);
  obj.children = items;
  return callback2(closure_3, obj);
};
