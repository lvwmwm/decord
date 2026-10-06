// Module ID: 12712
// Function ID: 12713
// Name: AvatarDecorationProductPreview
// Dependencies: [19, 17, 21, 4837, 558, 576, 7627, 7620, 1127, 1189, 2]

// Module 12712 (AvatarDecorationProductPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import native from "native" /* 1189 */;
import useShopProductItems from "useShopProductItems" /* 7620 */;
import useCurrentUser from "useCurrentUser" /* 7627 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let product;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const obj = react2;
  const cResult = obj.c(9);
  product = product.product;
  const tmp4 = closure_4();
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  const obj3 = useShopProductItems;
  const firstAvatarDecoration = obj3.useShopProductItems(product).firstAvatarDecoration;
  if (null == firstAvatarDecoration) {
    return null;
  } else {
    let tmp6;
    const fullSizePreview = tmp4.fullSizePreview;
    if (cResult[0] !== firstAvatarDecoration.label) {
      const intl = tmp(1127).intl;
      const obj4 = { a11y_text: firstAvatarDecoration.label };
      const formatToPlainStringResult = intl.formatToPlainString(intl2.t.Do2lxE, obj4);
      cResult[0] = firstAvatarDecoration.label;
      cResult[1] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === firstAvatarDecoration) {
      let tmp8;
      if (cResult[3] === currentUser) {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp4.fullSizePreview) {
        if (cResult[6] === tmp6) {
          let tmp11;
          if (cResult[7] === tmp8) {
            tmp11 = cResult[8];
          }
          return tmp11;
        }
      }
      const tmp14 = <View style={fullSizePreview} pointerEvents="box-none" accessibilityLabel={tmp6} accessibilityRole="image" accessible>{tmp8}</View>;
      cResult[5] = tmp4.fullSizePreview;
      cResult[6] = tmp6;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const Avatar = tmp(1189).Avatar;
    const tmp10 = <Avatar user={currentUser} guildId="r" size={native.AvatarSizes.GIFT_START} avatarDecoration={firstAvatarDecoration} animate={null} />;
    cResult[2] = firstAvatarDecoration;
    cResult[3] = currentUser;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  }
}) : ((product) => {
  product = product.product;
  const tmp = closure_4();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = useShopProductItems;
  const firstAvatarDecoration = obj2.useShopProductItems(product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    const intl = tmp2(1127).intl;
    const obj4 = { a11y_text: firstAvatarDecoration.label };
    ({ user: currentUser, guildId: "r", size: native.AvatarSizes.GIFT_START, avatarDecoration: firstAvatarDecoration, animate: null });
    const Avatar = tmp2(1189).Avatar;
    tmp5 = <View style={tmp.fullSizePreview} pointerEvents="box-none" accessibilityLabel={intl.formatToPlainString(intl2.t.Do2lxE, obj4)} accessibilityRole="image" accessible>{null}</View>;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default tmp3;
