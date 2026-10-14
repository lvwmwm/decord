// Module ID: 7837
// Function ID: 7838
// Dependencies: [7838, 7839, 7841, 7842, 7843, 7847, 7848, 7849, 7850, 7835]

// Module 7837
import _mod7835 from "module_7835" /* 7835 */;
import _modDef7838 from "module_7838" /* 7838 */;
import _modDef7839 from "module_7839" /* 7839 */;
import _modDef7841 from "module_7841" /* 7841 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7842 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 7843 */;
import _modDef7847 from "module_7847" /* 7847 */;
import _modDef7848 from "module_7848" /* 7848 */;
import _modDef7849 from "module_7849" /* 7849 */;
import _modDef7850 from "module_7850" /* 7850 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7838.USE_TIFF) {
      const tmpResult = _modDef7839;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7839;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod7835;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef7838.USE_JPEG) {
      const tmpResult17 = _modDef7841;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef7841;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod7835;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef7838.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod7835;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef7838.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod7835;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef7838.USE_AVIF) {
      const tmpResult23 = _modDef7847;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7847;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod7835;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef7838.USE_WEBP) {
      const tmpResult25 = _modDef7848;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7848;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod7835;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef7838.USE_GIF) {
      const tmpResult27 = _modDef7849;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7849;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod7835;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef7838.USE_XMP) {
      const tmpResult29 = _modDef7850;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7850;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod7835;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
