// Module ID: 5725
// Function ID: 5726
// Dependencies: [5726, 5727, 5729, 5730, 5731, 5735, 5736, 5737, 5738, 5723]

// Module 5725
import _mod5723 from "module_5723" /* 5723 */;
import _modDef5726 from "module_5726" /* 5726 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5726.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5727);
        const findTiffOffsetsResult = tmp(5727).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5723.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5727);
    }
    if (_modDef5726.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5729);
        const findJpegOffsetsResult = tmp(5729).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5723.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5729);
    }
    if (_modDef5726.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5730);
        const findPngOffsetsResult = tmp(5730).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5723.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5730);
    }
    if (_modDef5726.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5731);
        const findHeicOffsetsResult = tmp(5731).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5723.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5731);
    }
    if (_modDef5726.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5735);
        const findAvifOffsetsResult = tmp(5735).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5723.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5735);
    }
    if (_modDef5726.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5736);
        const findOffsetsResult = tmp(5736).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5723.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5736);
    }
    if (_modDef5726.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5737);
        const findOffsetsResult1 = tmp(5737).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5723.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5737);
    }
    if (_modDef5726.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5738);
        const findOffsetsResult2 = tmp(5738).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5723.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5738);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
