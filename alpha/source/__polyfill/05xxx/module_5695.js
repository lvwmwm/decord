// Module ID: 5695
// Function ID: 5696
// Dependencies: [5696, 5697, 5699, 5700, 5701, 5705, 5706, 5707, 5708, 5693]

// Module 5695
import _mod5693 from "module_5693" /* 5693 */;
import _modDef5696 from "module_5696" /* 5696 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5696.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5697);
        const findTiffOffsetsResult = tmp(5697).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5693.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5697);
    }
    if (_modDef5696.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5699);
        const findJpegOffsetsResult = tmp(5699).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5693.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5699);
    }
    if (_modDef5696.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5700);
        const findPngOffsetsResult = tmp(5700).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5693.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5700);
    }
    if (_modDef5696.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5701);
        const findHeicOffsetsResult = tmp(5701).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5693.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5701);
    }
    if (_modDef5696.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5705);
        const findAvifOffsetsResult = tmp(5705).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5693.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5705);
    }
    if (_modDef5696.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5706);
        const findOffsetsResult = tmp(5706).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5693.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5706);
    }
    if (_modDef5696.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5707);
        const findOffsetsResult1 = tmp(5707).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5693.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5707);
    }
    if (_modDef5696.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5708);
        const findOffsetsResult2 = tmp(5708).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5693.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5708);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
