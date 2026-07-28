// Module ID: 7324
// Function ID: 60257
// Name: NitroWordmarkLogo
// Dependencies: [27, 33, 689, 3869, 7325, 2]
// Exports: NitroWordmarkLogo

// Module 7324 (NitroWordmarkLogo)
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/mana-assets/native/generated/NitroWordmarkLogo.native.tsx");

export const NitroWordmarkLogo = function NitroWordmarkLogo(color) {
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
    num2 = 200;
  }
  let num3 = color.height;
  if (num3 === undefined) {
    num3 = 36;
  }
  let num4 = color.scale;
  if (num4 === undefined) {
    num4 = 1;
  }
  let obj = require(3869) /* map */;
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
  const obj1 = { fadeDuration: 0, source: { uri: importDefault(7325) } };
  const obj3 = { width: num2 * num4, height: num3 * num4 };
  const items = [obj3, tmp5];
  obj1.style = items;
  obj1.accessible = accessible;
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.resizeMode = resizeMode;
  return <Image fadeDuration={0} source={{ uri: importDefault(7325) }} />;
};
