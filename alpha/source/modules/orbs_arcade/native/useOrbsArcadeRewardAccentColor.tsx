// Module ID: 16313
// Function ID: 16314
// Name: useOrbsArcadeRewardAccentColor
// Dependencies: [32, 558, 576, 16299, 11015, 13884, 683, 2]

// Module 16313 (useOrbsArcadeRewardAccentColor)
import react from "react" /* 576 */;
import _modDef683 from "module_683" /* 683 */;
import useFetchCollectiblesProduct2 from "useFetchCollectiblesProduct" /* 11015 */;
import useCollectiblesShopStylesDefault from "useCollectiblesShopStyles" /* 13884 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16299 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4 = "#660066";
let c5 = "#8C1381";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOrbsArcadeRewardAccentColor(type) {
  let first1;
  let tmp22;
  const obj = react;
  const cResult = obj.c(3);
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  const COLLECTIBLE = tmp(16299).OrbsArcadeRewardType.COLLECTIBLE;
  let skuId = null;
  const useFetchCollectiblesProduct = useFetchCollectiblesProduct2.useFetchCollectiblesProduct;
  useFetchCollectiblesProduct2;
  if (type === COLLECTIBLE) {
    skuId = type.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId).product;
  let styles;
  const tmp8 = useCollectiblesShopStylesDefault;
  if (product != null) {
    styles = product.styles;
  }
  const backgroundColors = tmp8(styles).backgroundColors;
  let type1;
  if (type != null) {
    type1 = type.type;
  }
  if (type1 === OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    return c4;
  } else {
    let tmp13;
    let tmp12;
    let primary1;
    const first = cResult[0];
    if (backgroundColors != null) {
      primary1 = backgroundColors.primary;
    }
    if (first !== primary1) {
      let tmp17;
      const _Symbol = Symbol;
      let toHexStringResult;
      const forResult = Symbol.for("react.early_return_sentinel");
      if (backgroundColors != null) {
        const primary = backgroundColors.primary;
        toHexStringResult = primary.toHexString();
      }
      if (null != toHexStringResult) {
        const obj2 = _modDef683(toHexStringResult);
        [first1, tmp22] = obj2.hsl();
        const _Number = Number;
        if (!Number.isNaN(first1)) {
          if (tmp22 >= 0.15) {
            const tmp7Result = _modDef683;
            const hslResult = tmp7Result.hsl(first1, 0.72, 0.31);
            hslResult.hex();
          }
          tmp17 = forResult;
        }
      } else {
        tmp17 = c5;
      }
      let primary2;
      if (backgroundColors != null) {
        primary2 = backgroundColors.primary;
      }
      cResult[0] = primary2;
      cResult[1] = tmp18;
      cResult[2] = tmp17;
      tmp13 = tmp17;
      tmp12 = tmp18;
    } else {
      tmp12 = cResult[1];
      tmp13 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
      tmp12 = tmp13;
    }
    return tmp12;
  }
}) : (function useOrbsArcadeRewardAccentColor(type) {
  let first;
  let tmp17;
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
    return c4;
  } else {
    let toHexStringResult;
    if (backgroundColors != null) {
      const primary = backgroundColors.primary;
      toHexStringResult = primary.toHexString();
    }
    if (null == toHexStringResult) {
      return c5;
    } else {
      const obj3 = _modDef683(toHexStringResult);
      [first, tmp17] = obj3.hsl();
      const _Number = Number;
      if (!Number.isNaN(first)) {
        let hexResult;
        if (tmp17 >= 0.15) {
          const tmp6Result = _modDef683;
          const hslResult = tmp6Result.hsl(first, 0.72, 0.31);
          hexResult = hslResult.hex();
        }
        return hexResult;
      }
      hexResult = c5;
    }
  }
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/useOrbsArcadeRewardAccentColor.tsx");

export default tmp2;
