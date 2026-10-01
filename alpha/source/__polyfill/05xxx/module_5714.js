// Module ID: 5714
// Function ID: 5715
// Dependencies: [5715, 5716, 5718, 5719, 5720, 5724, 5725, 5726, 5727, 5712]

// Module 5714
import _mod5712 from "module_5712" /* 5712 */;
import _modDef5715 from "module_5715" /* 5715 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5715.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5716);
        const findTiffOffsetsResult = tmp(5716).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5712.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5716);
    }
    if (_modDef5715.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5718);
        const findJpegOffsetsResult = tmp(5718).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5712.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5718);
    }
    if (_modDef5715.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5719);
        const findPngOffsetsResult = tmp(5719).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5712.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5719);
    }
    if (_modDef5715.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5720);
        const findHeicOffsetsResult = tmp(5720).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5712.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5720);
    }
    if (_modDef5715.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5724);
        const findAvifOffsetsResult = tmp(5724).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5712.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5724);
    }
    if (_modDef5715.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5725);
        const findOffsetsResult = tmp(5725).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5712.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5725);
    }
    if (_modDef5715.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5726);
        const findOffsetsResult1 = tmp(5726).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5712.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5726);
    }
    if (_modDef5715.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5727);
        const findOffsetsResult2 = tmp(5727).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5712.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5727);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
