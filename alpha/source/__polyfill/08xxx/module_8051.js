// Module ID: 8051
// Function ID: 8052
// Dependencies: [8052, 8053, 8055, 8056, 8057, 8061, 8062, 8063, 8064, 8049]

// Module 8051
import _mod8049 from "module_8049" /* 8049 */;
import _modDef8052 from "module_8052" /* 8052 */;
import _modDef8053 from "module_8053" /* 8053 */;
import _modDef8055 from "module_8055" /* 8055 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8056 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8057 */;
import _modDef8061 from "module_8061" /* 8061 */;
import _modDef8062 from "module_8062" /* 8062 */;
import _modDef8063 from "module_8063" /* 8063 */;
import _modDef8064 from "module_8064" /* 8064 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8052.USE_TIFF) {
      const tmpResult = _modDef8053;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8053;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8049;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8052.USE_JPEG) {
      const tmpResult17 = _modDef8055;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8055;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8049;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8052.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8049;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8052.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8049;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8052.USE_AVIF) {
      const tmpResult23 = _modDef8061;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8061;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8049;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8052.USE_WEBP) {
      const tmpResult25 = _modDef8062;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8062;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8049;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8052.USE_GIF) {
      const tmpResult27 = _modDef8063;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8063;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8049;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8052.USE_XMP) {
      const tmpResult29 = _modDef8064;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8064;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8049;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
