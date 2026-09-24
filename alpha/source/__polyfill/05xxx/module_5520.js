// Module ID: 5520
// Function ID: 5521
// Dependencies: [5521, 5522, 5524, 5525, 5526, 5530, 5531, 5532, 5533, 5518]

// Module 5520
import _mod5518 from "module_5518" /* 5518 */;
import _modDef5521 from "module_5521" /* 5521 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5521.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5522);
        const findTiffOffsetsResult = tmp(5522).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5518.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5522);
    }
    if (_modDef5521.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5524);
        const findJpegOffsetsResult = tmp(5524).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5518.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5524);
    }
    if (_modDef5521.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5525);
        const findPngOffsetsResult = tmp(5525).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5518.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5525);
    }
    if (_modDef5521.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5526);
        const findHeicOffsetsResult = tmp(5526).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5518.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5526);
    }
    if (_modDef5521.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5530);
        const findAvifOffsetsResult = tmp(5530).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5518.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5530);
    }
    if (_modDef5521.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5531);
        const findOffsetsResult = tmp(5531).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5518.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5531);
    }
    if (_modDef5521.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5532);
        const findOffsetsResult1 = tmp(5532).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5518.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5532);
    }
    if (_modDef5521.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5533);
        const findOffsetsResult2 = tmp(5533).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5518.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5533);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
