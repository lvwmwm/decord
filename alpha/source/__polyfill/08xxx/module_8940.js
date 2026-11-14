// Module ID: 8940
// Function ID: 8941
// Dependencies: [8941, 8942, 8944, 8945, 8946, 8950, 8951, 8952, 8953, 8938]

// Module 8940
import _mod8938 from "module_8938" /* 8938 */;
import _modDef8941 from "module_8941" /* 8941 */;
import _modDef8942 from "module_8942" /* 8942 */;
import _modDef8944 from "module_8944" /* 8944 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8945 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8946 */;
import _modDef8950 from "module_8950" /* 8950 */;
import _modDef8951 from "module_8951" /* 8951 */;
import _modDef8952 from "module_8952" /* 8952 */;
import _modDef8953 from "module_8953" /* 8953 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8941.USE_TIFF) {
      const tmpResult = _modDef8942;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8942;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8938;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8941.USE_JPEG) {
      const tmpResult17 = _modDef8944;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8944;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8938;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8941.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8938;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8941.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8938;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8941.USE_AVIF) {
      const tmpResult23 = _modDef8950;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8950;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8938;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8941.USE_WEBP) {
      const tmpResult25 = _modDef8951;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8951;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8938;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8941.USE_GIF) {
      const tmpResult27 = _modDef8952;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8952;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8938;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8941.USE_XMP) {
      const tmpResult29 = _modDef8953;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8953;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8938;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
