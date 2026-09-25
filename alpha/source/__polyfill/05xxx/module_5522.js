// Module ID: 5522
// Function ID: 5523
// Dependencies: [5523, 5524, 5526, 5527, 5528, 5532, 5533, 5534, 5535, 5520]

// Module 5522
import _mod5520 from "module_5520" /* 5520 */;
import _modDef5523 from "module_5523" /* 5523 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5523.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5524);
        const findTiffOffsetsResult = tmp(5524).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5520.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5524);
    }
    if (_modDef5523.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5526);
        const findJpegOffsetsResult = tmp(5526).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5520.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5526);
    }
    if (_modDef5523.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5527);
        const findPngOffsetsResult = tmp(5527).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5520.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5527);
    }
    if (_modDef5523.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5528);
        const findHeicOffsetsResult = tmp(5528).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5520.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5528);
    }
    if (_modDef5523.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5532);
        const findAvifOffsetsResult = tmp(5532).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5520.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5532);
    }
    if (_modDef5523.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5533);
        const findOffsetsResult = tmp(5533).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5520.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5533);
    }
    if (_modDef5523.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5534);
        const findOffsetsResult1 = tmp(5534).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5520.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5534);
    }
    if (_modDef5523.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5535);
        const findOffsetsResult2 = tmp(5535).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5520.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5535);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
