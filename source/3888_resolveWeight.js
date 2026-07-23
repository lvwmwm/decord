// Module ID: 3888
// Function ID: 32190
// Name: resolveWeight
// Dependencies: [57, 5, 27, 3862]

// Module 3888 (resolveWeight)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";
import { Image } from "get ActivityIndicator";
import { NitroModules } from "module_3862";

function resolveWeight(arg0) {
  let num = 0;
  if ("default" !== arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
}
function loadFontByURI(arg0) {
  if (!obj.test(arg0)) {
    if (!obj2.test(arg0)) {
      let fontFromResource = closure_3.loadFontFromResource(arg0);
    }
    return fontFromResource;
  }
  fontFromResource = closure_3.loadFontFromURL(arg0);
}
let closure_3 = NitroModules.createHybridObject("RiveFontConfig");
const obj = {};
((arg0) => {
  async function _loadFont(arg0, arg1) {
    if (obj) {
      return obj.resume();
    } else {
      const _ArrayBuffer = ArrayBuffer;
      if (arg0 instanceof ArrayBuffer) {
        return outer3_3.loadFontFromBytes(arg0);
      } else if ("number" === typeof arg0) {
        const assetSource = _clearFallbackFonts.resolveAssetSource(arg0);
        if (null != assetSource) {
          if (assetSource.uri) {
            return outer3_5(assetSource.uri);
          }
        }
        const _Error2 = Error;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("Invalid font asset: could not resolve require() ID " + arg0 + ". Ensure 'ttf' is in metro.config.js assetExts.");
        throw error;
      } else {
        if ("object" === tmp2) {
          if ("name" in arg0) {
            return outer3_3.loadFontByName(arg0.name);
          }
        }
        if ("object" === tmp2) {
          if ("uri" in arg0) {
            return outer3_5(arg0.uri);
          }
        }
        if ("string" === tmp2) {
          if (!obj2.test(arg0)) {
            if (!obj3.test(arg0)) {
              let fontFromResource = outer3_3.loadFontFromResource(arg0);
            }
            return fontFromResource;
          }
          fontFromResource = outer3_3.loadFontFromURL(arg0);
          obj2 = /^https?:\/\//;
        } else {
          const _Error = Error;
          const _String = String;
          const _HermesInternal = HermesInternal;
          const error1 = new Error("Invalid font source: " + String(arg0));
          throw error1;
        }
      }
    }
  }
  async function _setFallbackFonts(arg0, arg1) {
    let tmp6;
    let tmp7;
    const entries = Object.entries(arg0);
    while (tmp2 !== undefined) {
      let tmp4 = _loadFont;
      let tmp5 = _loadFont(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      if (tmp7) {
        let tmp9 = outer3_3;
        let tmp10 = outer3_4;
        let tmp11 = tmp6;
        let tmp12 = tmp7;
        let setFontsForWeightResult = outer3_3.setFontsForWeight(outer3_4(tmp6), tmp8);
      }
      continue;
    }
    yield outer3_3.applyFallbackFonts();
  }
  async function _clearFallbackFonts() {
    if (obj) {
      return obj.resume();
    } else {
      return outer3_3.clearFallbackFonts();
    }
  }
  arg0.loadFont = function loadFont(arg0) {
    return _loadFont(...arguments);
  };
  arg0.systemFallback = function systemFallback() {
    return outer1_3.getSystemDefaultFont();
  };
  arg0.setFallbackFonts = function setFallbackFonts(arg0) {
    return _setFallbackFonts(...arguments);
  };
  arg0.clearFallbackFonts = function clearFallbackFonts() {
    return _clearFallbackFonts(...arguments);
  };
})(obj);

export const RiveFonts = obj;
