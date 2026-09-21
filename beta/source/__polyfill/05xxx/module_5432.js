// Module ID: 5432
// Function ID: 5433
// Dependencies: [5433, 5434, 5436, 5437, 5438, 5442, 5443, 5444, 5445, 5430]

// Module 5432
import _mod5430 from "module_5430" /* 5430 */;
import _modDef5433 from "module_5433" /* 5433 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5433.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5434);
        const findTiffOffsetsResult = tmp(5434).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5430.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5434);
    }
    if (_modDef5433.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5436);
        const findJpegOffsetsResult = tmp(5436).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5430.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5436);
    }
    if (_modDef5433.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5437);
        const findPngOffsetsResult = tmp(5437).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5430.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5437);
    }
    if (_modDef5433.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5438);
        const findHeicOffsetsResult = tmp(5438).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5430.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5438);
    }
    if (_modDef5433.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5442);
        const findAvifOffsetsResult = tmp(5442).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5430.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5442);
    }
    if (_modDef5433.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5443);
        const findOffsetsResult = tmp(5443).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5430.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5443);
    }
    if (_modDef5433.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5444);
        const findOffsetsResult1 = tmp(5444).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5430.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5444);
    }
    if (_modDef5433.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5445);
        const findOffsetsResult2 = tmp(5445).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5430.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5445);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
