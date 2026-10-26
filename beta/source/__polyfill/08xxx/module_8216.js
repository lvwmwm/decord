// Module ID: 8216
// Function ID: 8217
// Dependencies: [8217, 8218, 8220, 8221, 8222, 8226, 8227, 8228, 8229, 8214]

// Module 8216
import _mod8214 from "module_8214" /* 8214 */;
import _modDef8217 from "module_8217" /* 8217 */;
import _modDef8218 from "module_8218" /* 8218 */;
import _modDef8220 from "module_8220" /* 8220 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8221 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8222 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _modDef8229 from "module_8229" /* 8229 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8217.USE_TIFF) {
      const tmpResult = _modDef8218;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8218;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8214;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8217.USE_JPEG) {
      const tmpResult17 = _modDef8220;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8220;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8214;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8217.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8214;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8217.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8214;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8217.USE_AVIF) {
      const tmpResult23 = _modDef8226;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8226;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8214;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8217.USE_WEBP) {
      const tmpResult25 = _modDef8227;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8227;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8214;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8217.USE_GIF) {
      const tmpResult27 = _modDef8228;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8228;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8214;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8217.USE_XMP) {
      const tmpResult29 = _modDef8229;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8229;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8214;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
