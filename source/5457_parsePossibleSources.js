// Module ID: 5457
// Function ID: 46642
// Name: parsePossibleSources
// Dependencies: [27]
// Exports: parsePossibleSources

// Module 5457 (parsePossibleSources)
import { Image } from "get ActivityIndicator";


export const parsePossibleSources = function parsePossibleSources(uri) {
  uri = uri.uri;
  if ("string" === typeof uri) {
    let obj = { sourceName: uri };
  } else {
    if ("object" === tmp) {
      if (!uri) {
        obj = {};
        const _JSON = JSON;
        obj.sourceJson = JSON.stringify(uri);
      }
    }
    if ("object" !== tmp) {
      let tmp3;
      if ("number" === tmp) {
        obj = { sourceDotLottieURI: Image.resolveAssetSource(uri).uri };
        tmp3 = obj;
      }
    }
    const obj1 = {};
    if (uri.includes(".lottie")) {
      obj1.sourceDotLottieURI = uri;
      let tmp5 = obj1;
    } else {
      obj1.sourceURL = uri;
      tmp5 = obj1;
    }
  }
  return obj;
};
