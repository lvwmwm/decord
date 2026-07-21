// Module ID: 4725
// Function ID: 41100
// Name: ImageTypes
// Dependencies: []

// Module 4725 (ImageTypes)
const _module = require(dependencyMap[0]);
let closure_0 = require(dependencyMap[1]);
class ImageTypes {
  constructor() {
    tmp = closure_0(this, ImageTypes);
    return;
  }
}
const _moduleResult = _module(ImageTypes);
const items = [{ sequence: ["TRACEPARENT_REGEXP", "spinnerVisibleStart", "namespaceURI"] }];
_moduleResult.AVIF = { signatures: items };
const items1 = [{ sequence: ["<string:1174405120>", "isArray"], compatibleExtensions: [] }];
_moduleResult.BMP = { signatures: items1 };
const items2 = [{ sequence: [] }];
_moduleResult.BPG = { signatures: items2 };
const items3 = [{ sequence: [] }];
_moduleResult.CR2 = { signatures: items3 };
const items4 = [{ sequence: [] }];
_moduleResult.EXR = { signatures: items4 };
const items5 = [{ sequence: [] }, { sequence: [] }];
_moduleResult.GIF = { signatures: items5 };
const items6 = [{ sequence: [], offset: 4 }, { sequence: [], offset: 4 }];
_moduleResult.HEIC = { signatures: items6 };
const items7 = [{ sequence: [true, true, true, true], compatibleExtensions: ["<string:1349713921>"] }];
_moduleResult.ICO = { signatures: items7 };
const items8 = [{ sequence: [], skippedBytes: ["resolveOptionalAdCreativeCdnUrl", "SPOTIFY_LISTEN_ALONG_STARTED"], description: "Digital camera JPG using Exchangeable Image File Format (EXIF)" }, { sequence: [80, 53, 10, 80, 51, 10, 80, 54, 10, 56], skippedBytes: ["resolveOptionalAdCreativeCdnUrl", "SPOTIFY_LISTEN_ALONG_STARTED"], description: "Still Picture Interchange File Format (SPIFF)" }, { sequence: [], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [], skippedBytes: ["resolveOptionalAdCreativeCdnUrl", "SPOTIFY_LISTEN_ALONG_STARTED"], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [], skippedBytes: ["resolveOptionalAdCreativeCdnUrl", "SPOTIFY_LISTEN_ALONG_STARTED"], description: "JPEG/JFIF graphics file", compatibleExtensions: [] }, { sequence: ["Array", "isArray", "create", "channelId"], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [], description: "Generic JPEGimage file", compatibleExtensions: [] }];
_moduleResult.JPEG = { signatures: items8 };
const items9 = [{ sequence: [], description: "Portable bitmap ASCII" }, { sequence: [false, false, false], description: "Portable bitmap binary" }];
_moduleResult.PBM = { signatures: items9 };
const items10 = [{ sequence: ["<string:3512209506>", "<string:1765228863>", "<string:2538668036>"], description: "Portable Gray Map ASCII" }, { sequence: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007695050217084454, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007934615274642607, 2417851877497827000000000], description: "Portable Gray Map binary" }];
_moduleResult.PGM = { signatures: items10 };
const items11 = [{ sequence: [null, null, null, null, null, null, null, null] }];
_moduleResult.PNG = { signatures: items11 };
const items12 = [{ sequence: [null, null, null], description: "Portable Pixmap ASCII" }, { sequence: [], description: "Portable Pixmap binary" }];
_moduleResult.PPM = { signatures: items12 };
const items13 = [{ sequence: [] }];
_moduleResult.PSD = { signatures: items13 };
const items14 = [{ sequence: [], skippedBytes: [false, false, false, false] }];
_moduleResult.WEBP = { signatures: items14 };

export const ImageTypes = _moduleResult;
