// Module ID: 12710
// Function ID: 12711
// Name: AvatarDecorationProductPreview
// Dependencies: [19, 17, 21, 4836, 7623, 7616, 1115, 1177, 2]
// Exports: default

// Module 12710 (AvatarDecorationProductPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import useCurrentUser from "useCurrentUser" /* 7623 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  product = product.product;
  const tmp = closure_4();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = useShopProductItems;
  const firstAvatarDecoration = obj2.useShopProductItems(product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    const intl = tmp2(1115).intl;
    const obj4 = { a11y_text: firstAvatarDecoration.label };
    ({ user: currentUser, guildId: "r", size: native.AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: null });
    const Avatar = tmp2(1177).Avatar;
    tmp5 = <View style={tmp.fullSizePreview} pointerEvents="box-none" accessibilityLabel={intl.formatToPlainString(intl2.t.Do2lxE, obj4)} accessibilityRole="image" accessible>{null}</View>;
  }
  return tmp5;
};
