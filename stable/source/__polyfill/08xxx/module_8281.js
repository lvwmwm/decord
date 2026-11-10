// Module ID: 8281
// Function ID: 8282
// Dependencies: [8282, 8283, 8285, 8286, 8287, 8291, 8292, 8293, 8294, 8279]

// Module 8281
import _mod8279 from "module_8279" /* 8279 */;
import _modDef8282 from "module_8282" /* 8282 */;
import _modDef8283 from "module_8283" /* 8283 */;
import _modDef8285 from "module_8285" /* 8285 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8286 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8287 */;
import _modDef8291 from "module_8291" /* 8291 */;
import _modDef8292 from "module_8292" /* 8292 */;
import _modDef8293 from "module_8293" /* 8293 */;
import _modDef8294 from "module_8294" /* 8294 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8282.USE_TIFF) {
      const tmpResult = _modDef8283;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8283;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8279;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8282.USE_JPEG) {
      const tmpResult17 = _modDef8285;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8285;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8279;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8282.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8279;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8282.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8279;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8282.USE_AVIF) {
      const tmpResult23 = _modDef8291;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8291;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8279;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8282.USE_WEBP) {
      const tmpResult25 = _modDef8292;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8292;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8279;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8282.USE_GIF) {
      const tmpResult27 = _modDef8293;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8293;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8279;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8282.USE_XMP) {
      const tmpResult29 = _modDef8294;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8294;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8279;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
