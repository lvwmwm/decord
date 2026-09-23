// Module ID: 13533
// Function ID: 13534
// Name: AvatarDecorationProductPreview
// Dependencies: [19, 17, 21, 4827, 8522, 8515, 1115, 1177, 2]
// Exports: default

// Module 13533 (AvatarDecorationProductPreview)
import useShopProductItems from "useShopProductItems" /* 8515 */;
import useCurrentUser from "useCurrentUser" /* 8522 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_4 = createStyles.createStyles({ fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  const tmp = closure_4();
  const currentUser = useCurrentUser.useCurrentUser();
  const firstAvatarDecoration = useShopProductItems.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    const obj3 = { style: tmp.fullSizePreview, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
    const intl = tmp2(1115).intl;
    const obj4 = { a11y_text: firstAvatarDecoration.label };
    obj3.accessibilityLabel = intl.formatToPlainString(tmp2(1115).t.Do2lxE, obj4);
    const obj5 = { user: currentUser, guildId: "r", size: tmp2(1177).AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: null };
    obj3.children = jsx(tmp2(1177).Avatar, { user: currentUser, guildId: "r", size: tmp2(1177).AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: null });
    tmp5 = <View style={tmp.fullSizePreview} pointerEvents="box-none" accessibilityLabel={null} accessibilityRole="image" accessible>{null}</View>;
  }
  return tmp5;
};
