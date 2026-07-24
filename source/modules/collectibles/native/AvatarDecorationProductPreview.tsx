// Module ID: 8790
// Function ID: 69408
// Name: AvatarDecorationProductPreview
// Dependencies: [31, 27, 33, 4130, 8708, 8251, 1212, 1273, 2]
// Exports: default

// Module 8790 (AvatarDecorationProductPreview)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  let obj = require(8708) /* useCurrentUser */;
  const currentUser = obj.useCurrentUser();
  let obj1 = require(8251) /* ItemsSortingHat */;
  const firstAvatarDecoration = obj1.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp3 = null;
  if (null != firstAvatarDecoration) {
    obj = { style: tmp.fullSizePreview, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { a11y_text: firstAvatarDecoration.label };
    obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Do2lxE, obj);
    obj1 = { user: currentUser, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: true };
    obj.children = jsx(require(1273) /* Button */.Avatar, { user: currentUser, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: true });
    tmp3 = <View a11y_text={firstAvatarDecoration.label} />;
  }
  return tmp3;
};
