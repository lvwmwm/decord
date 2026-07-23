// Module ID: 1873
// Function ID: 20868
// Name: getNameplateData
// Dependencies: [1874, 482, 1877, 1879, 1212, 2]
// Exports: getBackgroundGradientColors, getNameplateDataFromProductRecord, getNameplateSampleUsers, parseFirstFrame

// Module 1873 (getNameplateData)
import { isNameplateRecord } from "_isNativeReflectConstruct";
import { ThemeTypes } from "sum";

function getNameplateData(nameplate) {
  let tmp = null;
  if (null != nameplate) {
    const obj = {};
    ({ skuId: obj.skuId, asset: obj.src, label: obj.imgAlt } = nameplate);
    obj.palette = getNameplatePalette(nameplate.palette);
    tmp = obj;
  }
  return tmp;
}
function isValidPalette(name) {
  let tmp = name.name !== require(1877) /* NAMEPLATE_PALETTES */.INVALID_PALETTE_KEY;
  if (tmp) {
    let tmp4 = name.name !== require(1877) /* NAMEPLATE_PALETTES */.CUSTOM_PALETTE_KEY;
    if (!tmp4) {
      let tmp6 = isValidHex(name.darkBackground);
      if (tmp6) {
        tmp6 = isValidHex(name.lightBackground);
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
}
function isValidHex(arg0) {
  return /^#([0-9a-fA-F]{6})$/.test(arg0);
}
function getNameplatePalette(palette) {
  let INVALID_NAMEPLATE_PALETTE = require(1877) /* NAMEPLATE_PALETTES */.NAMEPLATE_PALETTES[palette];
  if (null == INVALID_NAMEPLATE_PALETTE) {
    INVALID_NAMEPLATE_PALETTE = require(1877) /* NAMEPLATE_PALETTES */.INVALID_NAMEPLATE_PALETTE;
  }
  return INVALID_NAMEPLATE_PALETTE;
}
const result = require("NAMEPLATE_PALETTES").fileFinishedImporting("modules/collectibles/nameplates/utils.tsx");

export { getNameplateData };
export const getNameplateDataFromProductRecord = function getNameplateDataFromProductRecord(product) {
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let tmp3 = null;
    if (isNameplateRecord(first)) {
      tmp3 = getNameplateData(first);
    }
    return tmp3;
  }
};
export const getBackgroundGradientColors = function getBackgroundGradientColors(palette, arg1) {
  if (isValidPalette(palette)) {
    const tmp3 = arg1 === ThemeTypes.LIGHT ? palette.lightBackground : palette.darkBackground;
    const obj = {};
    const _HermesInternal = HermesInternal;
    obj.left = "" + tmp3 + "00";
    const _HermesInternal2 = HermesInternal;
    obj.right = "" + tmp3 + "4D";
    return obj;
  }
};
export { isValidPalette };
export { getNameplatePalette };
export const parseFirstFrame = function parseFirstFrame(arg0) {
  const size = importDefault(1879).decode(arg0);
  const obj = importDefault(1879);
  const element = <canvas />;
  ({ width: obj3.width, height: obj3.height } = size);
  const context = element.getContext("2d");
  const uint8ClampedArray = new Uint8ClampedArray(importDefault(1879).toRGBA8(size)[0]);
  const imageData = new globalThis.ImageData(uint8ClampedArray, size.width, size.height);
  context.putImageData(imageData, 0, 0);
  return element.toDataURL("image/png");
};
export const getNameplateSampleUsers = function getNameplateSampleUsers() {
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.SbKDHi);
  obj.avatarSrc = "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png";
  obj.mallow = obj;
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl2.string(require(1212) /* getSystemLocale */.t["LMSo+F"]);
  obj.avatarSrc = "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png";
  obj.phibi = obj;
  const obj1 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.name = intl3.string(require(1212) /* getSystemLocale */.t.g5Dumi);
  obj1.avatarSrc = "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png";
  obj.locke = obj1;
  const obj2 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.name = intl4.string(require(1212) /* getSystemLocale */.t.p5Z3Ol);
  obj2.avatarSrc = "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png";
  obj.cherry = obj2;
  const obj3 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj3.name = intl5.string(require(1212) /* getSystemLocale */.t.ncslie);
  obj3.avatarSrc = "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png";
  obj.boom = obj3;
  return obj;
};
