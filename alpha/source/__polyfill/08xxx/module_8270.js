// Module ID: 8270
// Function ID: 8271
// Dependencies: [8271, 8272, 8274, 8275, 8276, 8280, 8281, 8282, 8283, 8268]

// Module 8270
import _mod8268 from "module_8268" /* 8268 */;
import _modDef8271 from "module_8271" /* 8271 */;
import _modDef8272 from "module_8272" /* 8272 */;
import _modDef8274 from "module_8274" /* 8274 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8275 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8276 */;
import _modDef8280 from "module_8280" /* 8280 */;
import _modDef8281 from "module_8281" /* 8281 */;
import _modDef8282 from "module_8282" /* 8282 */;
import _modDef8283 from "module_8283" /* 8283 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8271.USE_TIFF) {
      const tmpResult = _modDef8272;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8272;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8268;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8271.USE_JPEG) {
      const tmpResult17 = _modDef8274;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8274;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8268;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8271.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8268;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8271.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8268;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8271.USE_AVIF) {
      const tmpResult23 = _modDef8280;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8280;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8268;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8271.USE_WEBP) {
      const tmpResult25 = _modDef8281;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8281;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8268;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8271.USE_GIF) {
      const tmpResult27 = _modDef8282;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8282;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8268;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8271.USE_XMP) {
      const tmpResult29 = _modDef8283;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8283;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8268;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
