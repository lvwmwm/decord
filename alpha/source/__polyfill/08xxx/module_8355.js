// Module ID: 8355
// Function ID: 8356
// Dependencies: [8356, 8357, 8359, 8360, 8361, 8365, 8366, 8367, 8368, 8353]

// Module 8355
import _mod8353 from "module_8353" /* 8353 */;
import _modDef8356 from "module_8356" /* 8356 */;
import _modDef8357 from "module_8357" /* 8357 */;
import _modDef8359 from "module_8359" /* 8359 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8360 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8361 */;
import _modDef8365 from "module_8365" /* 8365 */;
import _modDef8366 from "module_8366" /* 8366 */;
import _modDef8367 from "module_8367" /* 8367 */;
import _modDef8368 from "module_8368" /* 8368 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8356.USE_TIFF) {
      const tmpResult = _modDef8357;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8357;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8353;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8356.USE_JPEG) {
      const tmpResult17 = _modDef8359;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8359;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8353;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8356.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8353;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8356.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8353;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8356.USE_AVIF) {
      const tmpResult23 = _modDef8365;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8365;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8353;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8356.USE_WEBP) {
      const tmpResult25 = _modDef8366;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8366;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8353;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8356.USE_GIF) {
      const tmpResult27 = _modDef8367;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8367;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8353;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8356.USE_XMP) {
      const tmpResult29 = _modDef8368;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8368;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8353;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
