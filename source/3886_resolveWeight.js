// Module ID: 3886
// Function ID: 32185
// Name: resolveWeight
// Dependencies: []

// Module 3886 (resolveWeight)
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const Image = arg1(dependencyMap[2]).Image;
const NitroModules = arg1(dependencyMap[3]).NitroModules;
let closure_3 = NitroModules.createHybridObject("RiveFontConfig");
const obj = {};
(arg0) => {
  async function _loadFont(name, arg1) {
    if (obj) {
      return obj.resume();
    } else {
      const _ArrayBuffer = ArrayBuffer;
      if (name instanceof ArrayBuffer) {
        return closure_3.loadFontFromBytes(name);
      } else if ("number" === typeof name) {
        const assetSource = closure_2.resolveAssetSource(name);
        if (null != assetSource) {
          if (assetSource.uri) {
            return callback(assetSource.uri);
          }
        }
        const _Error2 = Error;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("Invalid font asset: could not resolve require() ID " + name + ". Ensure 'ttf' is in metro.config.js assetExts.");
        throw error;
      } else {
        if ("object" === tmp2) {
          if ("name" in name) {
            return closure_3.loadFontByName(name.name);
          }
        }
        if ("object" === tmp2) {
          if ("uri" in name) {
            return callback(name.uri);
          }
        }
        if ("string" === tmp2) {
          if (!obj2.test(name)) {
            if (!obj3.test(name)) {
              let fontFromResource = closure_3.loadFontFromResource(name);
            }
            return fontFromResource;
          }
          fontFromResource = closure_3.loadFontFromURL(name);
          const obj2 = /^https?:\/\//;
        } else {
          const _Error = Error;
          const _String = String;
          const _HermesInternal = HermesInternal;
          const error1 = new Error("Invalid font source: " + String(name));
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
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      if (tmp7) {
        let tmp9 = fontsForWeight;
        let tmp10 = callback2;
        let tmp11 = tmp6;
        let tmp12 = tmp7;
        let setFontsForWeightResult = fontsForWeight.setFontsForWeight(callback2(tmp6), tmp8);
      }
      // continue
    }
    yield closure_3.applyFallbackFonts();
  }
  async function _clearFallbackFonts() {
    if (obj) {
      return obj.resume();
    } else {
      return closure_3.clearFallbackFonts();
    }
  }
  arg0.loadFont = function loadFont(arg0) {
    return _loadFont(...arguments);
  };
  arg0.systemFallback = function systemFallback() {
    return systemDefaultFont.getSystemDefaultFont();
  };
  arg0.setFallbackFonts = function setFallbackFonts(arg0) {
    return _setFallbackFonts(...arguments);
  };
  arg0.clearFallbackFonts = function clearFallbackFonts() {
    return _clearFallbackFonts(...arguments);
  };
}(obj);

export const RiveFonts = obj;
