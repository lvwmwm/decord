// Module ID: 5296
// Function ID: 5297
// Dependencies: [5297, 5298, 5300, 5301, 5302, 5306, 5307, 5308, 5309, 5294]

// Module 5296
import _mod5294 from "module_5294" /* 5294 */;
import _modDef5297 from "module_5297" /* 5297 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5297.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5298);
        const findTiffOffsetsResult = tmp(5298).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5294.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5298);
    }
    if (_modDef5297.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5300);
        const findJpegOffsetsResult = tmp(5300).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5294.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5300);
    }
    if (_modDef5297.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5301);
        const findPngOffsetsResult = tmp(5301).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5294.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5301);
    }
    if (_modDef5297.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5302);
        const findHeicOffsetsResult = tmp(5302).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5294.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5302);
    }
    if (_modDef5297.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5306);
        const findAvifOffsetsResult = tmp(5306).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5294.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5306);
    }
    if (_modDef5297.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5307);
        const findOffsetsResult = tmp(5307).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5294.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5307);
    }
    if (_modDef5297.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5308);
        const findOffsetsResult1 = tmp(5308).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5294.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5308);
    }
    if (_modDef5297.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5309);
        const findOffsetsResult2 = tmp(5309).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5294.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5309);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
