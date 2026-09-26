// Module ID: 5528
// Function ID: 5529
// Dependencies: [5529, 5530, 5532, 5533, 5534, 5538, 5539, 5540, 5541, 5526]

// Module 5528
import _mod5526 from "module_5526" /* 5526 */;
import _modDef5529 from "module_5529" /* 5529 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5529.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5530);
        const findTiffOffsetsResult = tmp(5530).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5526.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5530);
    }
    if (_modDef5529.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5532);
        const findJpegOffsetsResult = tmp(5532).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5526.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5532);
    }
    if (_modDef5529.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5533);
        const findPngOffsetsResult = tmp(5533).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5526.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5533);
    }
    if (_modDef5529.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5534);
        const findHeicOffsetsResult = tmp(5534).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5526.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5534);
    }
    if (_modDef5529.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5538);
        const findAvifOffsetsResult = tmp(5538).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5526.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5538);
    }
    if (_modDef5529.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5539);
        const findOffsetsResult = tmp(5539).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5526.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5539);
    }
    if (_modDef5529.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5540);
        const findOffsetsResult1 = tmp(5540).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5526.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5540);
    }
    if (_modDef5529.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5541);
        const findOffsetsResult2 = tmp(5541).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5526.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5541);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
