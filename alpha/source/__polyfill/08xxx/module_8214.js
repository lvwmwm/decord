// Module ID: 8214
// Function ID: 8215
// Dependencies: [8215, 8216, 8218, 8219, 8220, 8224, 8225, 8226, 8227, 8212]

// Module 8214
import _mod8212 from "module_8212" /* 8212 */;
import _modDef8215 from "module_8215" /* 8215 */;
import _modDef8216 from "module_8216" /* 8216 */;
import _modDef8218 from "module_8218" /* 8218 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8219 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8220 */;
import _modDef8224 from "module_8224" /* 8224 */;
import _modDef8225 from "module_8225" /* 8225 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8215.USE_TIFF) {
      const tmpResult = _modDef8216;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8216;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8212;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8215.USE_JPEG) {
      const tmpResult17 = _modDef8218;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8218;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8212;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8215.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8212;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8215.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8212;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8215.USE_AVIF) {
      const tmpResult23 = _modDef8224;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8224;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8212;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8215.USE_WEBP) {
      const tmpResult25 = _modDef8225;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8225;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8212;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8215.USE_GIF) {
      const tmpResult27 = _modDef8226;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8226;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8212;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8215.USE_XMP) {
      const tmpResult29 = _modDef8227;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8227;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8212;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
