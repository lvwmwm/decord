// Module ID: 6008
// Function ID: 49977
// Name: DiscordShopLockupLogo
// Dependencies: [27, 33, 689, 3834, 6009, 2]
// Exports: DiscordShopLockupLogo

// Module 6008 (DiscordShopLockupLogo)
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/mana-assets/native/generated/DiscordShopLockupLogo.native.tsx");

export const DiscordShopLockupLogo = function DiscordShopLockupLogo(color) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = importDefault(689).colors.ICON_STRONG;
  }
  let num2 = color.width;
  if (num2 === undefined) {
    num2 = 256;
  }
  let num3 = color.height;
  if (num3 === undefined) {
    num3 = 30;
  }
  let num4 = color.scale;
  if (num4 === undefined) {
    num4 = 1;
  }
  let obj = require(3834) /* map */;
  const token = obj.useToken(ICON_STRONG);
  if (null != token) {
    obj = { tintColor: token };
    let tmp5 = obj;
  } else {
    let tmp4 = null != ICON_STRONG;
    if (tmp4) {
      tmp4 = "string" === typeof ICON_STRONG;
    }
    if (tmp4) {
      obj = { tintColor: ICON_STRONG };
      tmp5 = obj;
    }
  }
  const obj1 = { fadeDuration: 0, source: { uri: importDefault(6009) } };
  const obj3 = { width: num2 * num4, height: num3 * num4 };
  const items = [obj3, tmp5];
  obj1.style = items;
  obj1.accessible = accessible;
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.resizeMode = resizeMode;
  return <Image fadeDuration={0} source={{ uri: importDefault(6009) }} />;
};
