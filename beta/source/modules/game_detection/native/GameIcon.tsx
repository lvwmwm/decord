// Module ID: 6593
// Function ID: 6594
// Name: GameIcon
// Dependencies: [19, 17, 1374, 21, 4836, 576, 6594, 6595, 6596, 6597, 2]

// Module 6593 (GameIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import AssetRegistryDefault from "AssetRegistry" /* 6594 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6595 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 6596 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 6597 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj;

let c2;
let c3;
let obj4;
let size;
let size1;
let size2;
let size3;
class GameIcon {
  constructor(style) {
    let game;
    let skuId;
    ({ game, skuId, size } = style);
    if (size === undefined) {
      size = obj.NORMAL;
    }
    style = style.style;
    const tmp2 = closure_8();
    obj = { [closure_1_6.NORMAL]: tmp2.normal, [closure_1_6.SMALL]: tmp2.small, [closure_1_6.SIZE_24]: tmp2.size24, [closure_1_6.LARGE]: tmp2.large };
    const items = [tmp2.gameIcon, obj[size], style];
    let tmp3;
    if (null != skuId) {
      let tmp5;
      if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
        tmp5 = AssetRegistryDefault;
      } else if (PremiumSubscriptionSKUs.TIER_1 === skuId) {
        tmp5 = AssetRegistryDefault2;
      } else if (PremiumSubscriptionSKUs.TIER_2 === skuId) {
        tmp5 = AssetRegistryDefault3;
      } else {
        tmp5 = null;
      }
      tmp3 = tmp5;
    }
    let tmp12 = tmp3;
    if (null != game) {
      tmp12 = tmp3;
      if (null == tmp3) {
        const iconURL = game.getIconURL(obj2[size]);
        tmp12 = tmp3;
        if (null != iconURL) {
          obj2 = { uri: iconURL };
          tmp12 = obj2;
        }
      }
    }
    if (null == tmp12) {
      tmp12 = AssetRegistryDefault4;
      items.push(tmp2.placeholder);
    }
    const items1 = [items, tmp2.entityWrapper];
    return <_false style={items1}>{null}</_false>;
  }
}
({ Image: c2, View: c3 } = react_native);
const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
const jsx = Fragment.jsx;
const GameIconSizes = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
let obj2 = { [GameIconSizes.SIZE_24]: 24, [GameIconSizes.SMALL]: 32, [GameIconSizes.NORMAL]: 48, [GameIconSizes.LARGE]: 80 };
let createStyles = createStyles_mod;
const obj3 = { gameIcon: { justifyContent: "center", alignItems: "center" }, size24: size, small: size1, normal: size2, large: size3, placeholder: obj4, entityWrapper: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" } };
size = { width: obj2.size_24, height: obj2.size_24, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size1 = { width: obj2.small, height: obj2.small, borderRadius: nativeDefault.radii.sm };
size2 = { width: obj2.normal, height: obj2.normal, borderRadius: nativeDefault.radii.lg };
size3 = { width: obj2.large, height: obj2.large, borderRadius: nativeDefault.radii.sm };
obj4 = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
({ borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" });
const metroImportAll = createStyles(obj3);
GameIcon.Sizes = GameIconSizes;
size = size_mod;
const result = size.fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export { GameIconSizes };
export const GameIconImageSize = obj2;
