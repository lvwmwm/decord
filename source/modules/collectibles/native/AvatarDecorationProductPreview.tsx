// Module ID: 8743
// Function ID: 69129
// Name: AvatarDecorationProductPreview
// Dependencies: []
// Exports: default

// Module 8743 (AvatarDecorationProductPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ fullSizePreview: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  let obj = arg1(dependencyMap[4]);
  const currentUser = obj.useCurrentUser();
  let obj1 = arg1(dependencyMap[5]);
  const firstAvatarDecoration = obj1.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp3 = null;
  if (null != firstAvatarDecoration) {
    obj = { style: tmp.fullSizePreview };
    const intl = arg1(dependencyMap[6]).intl;
    obj = { a11y_text: firstAvatarDecoration.label };
    obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[6]).t.Do2lxE, obj);
    obj1 = { user: currentUser, guildId: undefined, size: arg1(dependencyMap[7]).AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: true };
    obj.children = jsx(arg1(dependencyMap[7]).Avatar, obj1);
    tmp3 = <View {...obj} />;
  }
  return tmp3;
};
