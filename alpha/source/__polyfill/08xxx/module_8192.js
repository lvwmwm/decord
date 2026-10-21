// Module ID: 8192
// Function ID: 8193
// Dependencies: [8193, 8194, 8196, 8197, 8198, 8202, 8203, 8204, 8205, 8190]

// Module 8192
import _mod8190 from "module_8190" /* 8190 */;
import _modDef8193 from "module_8193" /* 8193 */;
import _modDef8194 from "module_8194" /* 8194 */;
import _modDef8196 from "module_8196" /* 8196 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8197 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8198 */;
import _modDef8202 from "module_8202" /* 8202 */;
import _modDef8203 from "module_8203" /* 8203 */;
import _modDef8204 from "module_8204" /* 8204 */;
import _modDef8205 from "module_8205" /* 8205 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8193.USE_TIFF) {
      const tmpResult = _modDef8194;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8194;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8190;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8193.USE_JPEG) {
      const tmpResult17 = _modDef8196;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8196;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8190;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8193.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8190;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8193.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8190;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8193.USE_AVIF) {
      const tmpResult23 = _modDef8202;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8202;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8190;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8193.USE_WEBP) {
      const tmpResult25 = _modDef8203;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8203;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8190;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8193.USE_GIF) {
      const tmpResult27 = _modDef8204;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8204;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8190;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8193.USE_XMP) {
      const tmpResult29 = _modDef8205;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8205;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8190;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
