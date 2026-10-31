// Module ID: 17027
// Function ID: 17028
// Name: useOrbsArcadeRewardAccentColor
// Dependencies: [32, 17011, 11385, 14483, 671, 2]
// Exports: default

// Module 17027 (useOrbsArcadeRewardAccentColor)
import _modDef671 from "module_671" /* 671 */;
import useFetchCollectiblesProduct2 from "useFetchCollectiblesProduct" /* 11385 */;
import useCollectiblesShopStylesDefault from "useCollectiblesShopStyles" /* 14483 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17011 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let c4 = "#8C1381";
const result = size.fileFinishedImporting("modules/orbs_arcade/native/useOrbsArcadeRewardAccentColor.tsx");

export default function useOrbsArcadeRewardAccentColor(type) {
  let first;
  let tmp16;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  const COLLECTIBLE = OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE;
  let skuId = null;
  const useFetchCollectiblesProduct = useFetchCollectiblesProduct2.useFetchCollectiblesProduct;
  useFetchCollectiblesProduct2;
  if (type === COLLECTIBLE) {
    skuId = type.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId).product;
  let styles;
  const tmp7 = useCollectiblesShopStylesDefault;
  if (product != null) {
    styles = product.styles;
  }
  const backgroundColors = tmp7(styles).backgroundColors;
  let type1;
  if (type != null) {
    type1 = type.type;
  }
  if (type1 === OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    return "#660066";
  } else {
    let toHexStringResult;
    if (backgroundColors != null) {
      const primary = backgroundColors.primary;
      toHexStringResult = primary.toHexString();
    }
    if (null == toHexStringResult) {
      return c4;
    } else {
      const obj3 = _modDef671(toHexStringResult);
      [first, tmp16] = obj3.hsl();
      const _Number = Number;
      if (!Number.isNaN(first)) {
        let hexResult;
        if (tmp16 >= 0.15) {
          const tmp6Result = _modDef671;
          const hslResult = tmp6Result.hsl(first, 0.72, 0.31);
          hexResult = hslResult.hex();
        }
        return hexResult;
      }
      hexResult = c4;
    }
  }
};
export const NITRO_GLOW_COLOR = "#321634";
