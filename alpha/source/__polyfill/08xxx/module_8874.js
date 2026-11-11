// Module ID: 8874
// Function ID: 8875
// Dependencies: [8875, 8876, 8878, 8879, 8880, 8884, 8885, 8886, 8887, 8872]

// Module 8874
import _mod8872 from "module_8872" /* 8872 */;
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8876 from "module_8876" /* 8876 */;
import _modDef8878 from "module_8878" /* 8878 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8879 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8880 */;
import _modDef8884 from "module_8884" /* 8884 */;
import _modDef8885 from "module_8885" /* 8885 */;
import _modDef8886 from "module_8886" /* 8886 */;
import _modDef8887 from "module_8887" /* 8887 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8875.USE_TIFF) {
      const tmpResult = _modDef8876;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8876;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8872;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8875.USE_JPEG) {
      const tmpResult17 = _modDef8878;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8878;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8872;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8875.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8872;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8875.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8872;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8875.USE_AVIF) {
      const tmpResult23 = _modDef8884;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8884;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8872;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8875.USE_WEBP) {
      const tmpResult25 = _modDef8885;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8885;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8872;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8875.USE_GIF) {
      const tmpResult27 = _modDef8886;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8886;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8872;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8875.USE_XMP) {
      const tmpResult29 = _modDef8887;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8887;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8872;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
