// Module ID: 11168
// Function ID: 11169
// Name: WishlistShopUnpublishLabel
// Dependencies: [17, 21, 5043, 575, 11167, 6159, 2]
// Exports: default

// Module 11168 (WishlistShopUnpublishLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import WishlistShopUnpublishUtils from "WishlistShopUnpublishUtils" /* 11167 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let rect;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { label: rect };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, width: "75%", zIndex: 1, alignItems: "flex-start" };
let closure_4 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/wishlists/native/WishlistShopUnpublishLabel.tsx");

export default function WishlistShopUnpublishLabel(countdown) {
  countdown = countdown.countdown;
  const tmp = closure_4();
  const obj = WishlistShopUnpublishUtils;
  const result = obj.formatWishlistShopUnpublishLabel(countdown, "compact");
  return <View style={tmp.label} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
};
