// Module ID: 5518
// Function ID: 5519
// Dependencies: [5519, 5520, 5522, 5523, 5524, 5528, 5529, 5530, 5531, 5516]

// Module 5518
import _mod5516 from "module_5516" /* 5516 */;
import _modDef5519 from "module_5519" /* 5519 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5519.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5520);
        const findTiffOffsetsResult = tmp(5520).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5516.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5520);
    }
    if (_modDef5519.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5522);
        const findJpegOffsetsResult = tmp(5522).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5516.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5522);
    }
    if (_modDef5519.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5523);
        const findPngOffsetsResult = tmp(5523).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5516.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5523);
    }
    if (_modDef5519.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5524);
        const findHeicOffsetsResult = tmp(5524).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5516.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5524);
    }
    if (_modDef5519.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5528);
        const findAvifOffsetsResult = tmp(5528).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5516.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5528);
    }
    if (_modDef5519.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5529);
        const findOffsetsResult = tmp(5529).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5516.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5529);
    }
    if (_modDef5519.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5530);
        const findOffsetsResult1 = tmp(5530).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5516.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5530);
    }
    if (_modDef5519.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5531);
        const findOffsetsResult2 = tmp(5531).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5516.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5531);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
