// Module ID: 5464
// Function ID: 5465
// Dependencies: [5465, 5466, 5468, 5469, 5470, 5474, 5475, 5476, 5477, 5462]

// Module 5464
import _mod5462 from "module_5462" /* 5462 */;
import _modDef5465 from "module_5465" /* 5465 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5465.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5466);
        const findTiffOffsetsResult = tmp(5466).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5462.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5466);
    }
    if (_modDef5465.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5468);
        const findJpegOffsetsResult = tmp(5468).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5462.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5468);
    }
    if (_modDef5465.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5469);
        const findPngOffsetsResult = tmp(5469).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5462.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5469);
    }
    if (_modDef5465.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5470);
        const findHeicOffsetsResult = tmp(5470).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5462.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5470);
    }
    if (_modDef5465.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5474);
        const findAvifOffsetsResult = tmp(5474).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5462.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5474);
    }
    if (_modDef5465.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5475);
        const findOffsetsResult = tmp(5475).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5462.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5475);
    }
    if (_modDef5465.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5476);
        const findOffsetsResult1 = tmp(5476).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5462.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5476);
    }
    if (_modDef5465.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5477);
        const findOffsetsResult2 = tmp(5477).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5462.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5477);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
