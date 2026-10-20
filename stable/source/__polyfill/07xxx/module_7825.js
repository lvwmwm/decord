// Module ID: 7825
// Function ID: 7826
// Dependencies: [7826, 7827, 7829, 7830, 7831, 7835, 7836, 7837, 7838, 7823]

// Module 7825
import _mod7823 from "module_7823" /* 7823 */;
import _modDef7826 from "module_7826" /* 7826 */;
import _modDef7827 from "module_7827" /* 7827 */;
import _modDef7829 from "module_7829" /* 7829 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7830 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 7831 */;
import _modDef7835 from "module_7835" /* 7835 */;
import _modDef7836 from "module_7836" /* 7836 */;
import _modDef7837 from "module_7837" /* 7837 */;
import _modDef7838 from "module_7838" /* 7838 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7826.USE_TIFF) {
      const tmpResult = _modDef7827;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7827;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod7823;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef7826.USE_JPEG) {
      const tmpResult17 = _modDef7829;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef7829;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod7823;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef7826.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod7823;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef7826.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod7823;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef7826.USE_AVIF) {
      const tmpResult23 = _modDef7835;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7835;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod7823;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef7826.USE_WEBP) {
      const tmpResult25 = _modDef7836;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7836;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod7823;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef7826.USE_GIF) {
      const tmpResult27 = _modDef7837;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7837;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod7823;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef7826.USE_XMP) {
      const tmpResult29 = _modDef7838;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7838;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod7823;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
