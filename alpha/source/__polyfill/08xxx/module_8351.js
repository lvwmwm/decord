// Module ID: 8351
// Function ID: 8352
// Dependencies: [8352, 8353, 8355, 8356, 8357, 8361, 8362, 8363, 8364, 8349]

// Module 8351
import _mod8349 from "module_8349" /* 8349 */;
import _modDef8352 from "module_8352" /* 8352 */;
import _modDef8353 from "module_8353" /* 8353 */;
import _modDef8355 from "module_8355" /* 8355 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8356 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8357 */;
import _modDef8361 from "module_8361" /* 8361 */;
import _modDef8362 from "module_8362" /* 8362 */;
import _modDef8363 from "module_8363" /* 8363 */;
import _modDef8364 from "module_8364" /* 8364 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8352.USE_TIFF) {
      const tmpResult = _modDef8353;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8353;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8349;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8352.USE_JPEG) {
      const tmpResult17 = _modDef8355;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8355;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8349;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8352.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8349;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8352.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8349;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8352.USE_AVIF) {
      const tmpResult23 = _modDef8361;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8361;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8349;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8352.USE_WEBP) {
      const tmpResult25 = _modDef8362;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8362;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8349;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8352.USE_GIF) {
      const tmpResult27 = _modDef8363;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8363;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8349;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8352.USE_XMP) {
      const tmpResult29 = _modDef8364;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8364;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8349;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
