// Module ID: 5466
// Function ID: 5467
// Dependencies: [5467, 5468, 5470, 5471, 5472, 5476, 5477, 5478, 5479, 5464]

// Module 5466
import _mod5464 from "module_5464" /* 5464 */;
import _modDef5467 from "module_5467" /* 5467 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5467.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5468);
        const findTiffOffsetsResult = tmp(5468).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5464.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5468);
    }
    if (_modDef5467.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5470);
        const findJpegOffsetsResult = tmp(5470).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5464.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5470);
    }
    if (_modDef5467.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5471);
        const findPngOffsetsResult = tmp(5471).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5464.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5471);
    }
    if (_modDef5467.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5472);
        const findHeicOffsetsResult = tmp(5472).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5464.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5472);
    }
    if (_modDef5467.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5476);
        const findAvifOffsetsResult = tmp(5476).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5464.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5476);
    }
    if (_modDef5467.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5477);
        const findOffsetsResult = tmp(5477).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5464.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5477);
    }
    if (_modDef5467.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5478);
        const findOffsetsResult1 = tmp(5478).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5464.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5478);
    }
    if (_modDef5467.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5479);
        const findOffsetsResult2 = tmp(5479).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5464.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5479);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
