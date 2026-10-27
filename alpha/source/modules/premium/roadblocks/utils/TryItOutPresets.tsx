// Module ID: 15950
// Function ID: 15951
// Name: TryItOutPresets
// Dependencies: [1409, 1408, 1125, 15951, 15952, 15953, 15954, 15955, 15956, 15957, 15958, 15959, 15960, 15961, 15962, 15963, 15964, 15965, 15966, 15967, 15968, 15969, 15970, 2]
// Exports: getRandomTryItOutPreset, getTryItOutPresetConfig

// Module 15950 (TryItOutPresets)
import intl2 from "intl" /* 1125 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1408 */;
import DisplayNameFont from "DisplayNameFont" /* 1409 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getName() {
  const intl = intl2.intl;
  return intl.string(intl2.t["TFc+iF"]);
}
function getHeaderSrc() {
  return require("module_15951").default;
}
function getPreviewThumbnailSrc() {
  return require("module_15952").default;
}
function getBannerSrc(arg0) {
  let _default;
  const tmp3 = arg0;
  if (tmp3) {
    _default = tmp(15953).default;
  } else {
    _default = tmp(15954).default;
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
    return require("module_15955").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_15956").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(15957).default;
    } else {
      _default = tmp(15958).default;
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
    return require("module_15959").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_15960").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(15961).default;
    } else {
      _default = tmp(15962).default;
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
    return require("module_15963").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_15964").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(15965).default;
    } else {
      _default = tmp(15966).default;
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
    return require("module_15967").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_15968").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = tmp(15969).default;
    } else {
      _default = tmp(15970).default;
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
