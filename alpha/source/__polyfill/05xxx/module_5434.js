// Module ID: 5434
// Function ID: 5435
// Dependencies: [5435, 5436, 5438, 5439, 5440, 5444, 5445, 5446, 5447, 5432]

// Module 5434
import _mod5432 from "module_5432" /* 5432 */;
import _modDef5435 from "module_5435" /* 5435 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5435.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5436);
        const findTiffOffsetsResult = tmp(5436).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5432.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5436);
    }
    if (_modDef5435.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5438);
        const findJpegOffsetsResult = tmp(5438).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5432.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5438);
    }
    if (_modDef5435.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5439);
        const findPngOffsetsResult = tmp(5439).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5432.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5439);
    }
    if (_modDef5435.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5440);
        const findHeicOffsetsResult = tmp(5440).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5432.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5440);
    }
    if (_modDef5435.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5444);
        const findAvifOffsetsResult = tmp(5444).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5432.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5444);
    }
    if (_modDef5435.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5445);
        const findOffsetsResult = tmp(5445).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5432.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5445);
    }
    if (_modDef5435.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5446);
        const findOffsetsResult1 = tmp(5446).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5432.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5446);
    }
    if (_modDef5435.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5447);
        const findOffsetsResult2 = tmp(5447).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5432.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5447);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
