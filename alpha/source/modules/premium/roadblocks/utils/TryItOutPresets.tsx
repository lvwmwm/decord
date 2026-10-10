// Module ID: 14886
// Function ID: 14887
// Name: TryItOutPresets
// Dependencies: [1410, 1409, 1126, 14887, 14888, 14889, 14890, 14891, 14892, 14893, 14894, 14895, 14896, 14897, 14898, 14899, 14900, 14901, 14902, 14903, 14904, 14905, 14906, 2]
// Exports: getRandomTryItOutPreset, getTryItOutPresetConfig

// Module 14886 (TryItOutPresets)
import intl2 from "intl" /* 1126 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1409 */;
import DisplayNameFont from "DisplayNameFont" /* 1410 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getName() {
  const intl = intl2.intl;
  return intl.string(intl2.t["TFc+iF"]);
}
function getHeaderSrc() {
  return require("module_14887").default;
}
function getPreviewThumbnailSrc() {
  return require("module_14888").default;
}
function getBannerSrc(arg0) {
  let _default;
  const tmp3 = arg0;
  if (tmp3) {
    _default = tmp(14889).default;
  } else {
    _default = tmp(14890).default;
  }
  return _default;
}
function getBannerAltText() {
  const intl = intl2.intl;
  return intl.string(intl2.t["8Q9iXo"]);
}
const TryItOutPresets = { ABOVE_THE_CLOUDS: "above_the_clouds", CYBERPUNK: "cyberpunk", STARLIT_DREAM: "starlit_dream", SHADOW_REALM: "shadow_realm", NEON_SPACE: "neon_space" };
const obj2 = {};
obj2[TryItOutPresets.ABOVE_THE_CLOUDS] = { preset: TryItOutPresets.ABOVE_THE_CLOUDS, themeColorsLegacy: [752280, 9215590], themeColors: { dark: [5600251, 6553557], light: [2790911, 10747860] }, avatarDecorationSkuId: "1144059132517826601", displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.CHICLE, effectId: DisplayNameEffect.DisplayNameEffect.POP, colors: [959694] }, getName, getHeaderSrc, getPreviewThumbnailSrc, getBannerSrc, getBannerAltText };
const obj3 = { preset: TryItOutPresets.ABOVE_THE_CLOUDS, themeColorsLegacy: [752280, 9215590], themeColors: { dark: [5600251, 6553557], light: [2790911, 10747860] }, avatarDecorationSkuId: "1144059132517826601", displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.CHICLE, effectId: DisplayNameEffect.DisplayNameEffect.POP, colors: [959694] }, getName, getHeaderSrc, getPreviewThumbnailSrc, getBannerSrc, getBannerAltText };
const obj5 = {
  preset: TryItOutPresets.CYBERPUNK,
  themeColorsLegacy: [1967991, 742532],
  themeColors: { dark: [14173883, 4395410], light: [16743094, 5028863] },
  avatarDecorationSkuId: null,
  displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.PIXELIFY, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [2949343] },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t["4g+5bq"]);
  },
  getHeaderSrc() {
    return require("module_14891").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_14892").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(14893).default;
    } else {
      _default = tmp(14894).default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.y6WngK);
  }
};
({ fontId: DisplayNameFont.DisplayNameFont.CHICLE, effectId: DisplayNameEffect.DisplayNameEffect.POP, colors: [959694] });
obj2[TryItOutPresets.CYBERPUNK] = obj5;
const obj7 = {
  preset: TryItOutPresets.SHADOW_REALM,
  themeColorsLegacy: [0, 4458504],
  themeColors: { dark: [3880879, 11353658], light: [8154109, 13058560] },
  avatarDecorationSkuId: "1144058522808614923",
  displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.NEO_CASTEL, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [16711680] },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ycg1xj);
  },
  getHeaderSrc() {
    return require("module_14895").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_14896").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(14897).default;
    } else {
      _default = tmp(14898).default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.bwRnYf);
  }
};
({ fontId: DisplayNameFont.DisplayNameFont.PIXELIFY, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [2949343] });
obj2[TryItOutPresets.SHADOW_REALM] = obj7;
const obj9 = {
  preset: TryItOutPresets.STARLIT_DREAM,
  themeColorsLegacy: [5123751, 590625],
  themeColors: { dark: [4334982, 15000275], light: [16178343, 3805885] },
  avatarDecorationSkuId: "1144058844004233369",
  displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.CHERRY_BOMB, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [3343795] },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9WLHvr"]);
  },
  getHeaderSrc() {
    return require("module_14899").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_14900").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(14901).default;
    } else {
      _default = tmp(14902).default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.emZXBr);
  }
};
({ fontId: DisplayNameFont.DisplayNameFont.NEO_CASTEL, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [16711680] });
obj2[TryItOutPresets.STARLIT_DREAM] = obj9;
const obj11 = {
  preset: TryItOutPresets.NEON_SPACE,
  themeColorsLegacy: [6094952, 1007678],
  themeColors: { dark: [14033151, 5826546], light: [583042, 15609599] },
  avatarDecorationSkuId: null,
  displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [28737] },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.UdNuqi);
  },
  getHeaderSrc() {
    return require("module_14903").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_14904").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(14905).default;
    } else {
      _default = tmp(14906).default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.si7znt);
  }
};
({ fontId: DisplayNameFont.DisplayNameFont.CHERRY_BOMB, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [3343795] });
obj2[TryItOutPresets.NEON_SPACE] = obj11;
({ fontId: DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [28737] });
const result = size.fileFinishedImporting("modules/premium/roadblocks/utils/TryItOutPresets.tsx");

export { TryItOutPresets };
export const TRY_IT_OUT_PRESET_CONFIGS = obj2;
export const getTryItOutPresetConfig = function getTryItOutPresetConfig(randomTryItOutPreset) {
  return obj2[randomTryItOutPreset];
};
export const getRandomTryItOutPreset = function getRandomTryItOutPreset(tryItOutLastPreset) {
  let closure_0 = tryItOutLastPreset;
  const values = Object.values(obj);
  let found = values;
  if (null != tryItOutLastPreset) {
    found = values.filter((item) => item !== closure_0);
  }
  return found[Math.floor(Math, Math.random(Math) * found.length)];
};
