// Module ID: 7830
// Function ID: 7831
// Dependencies: [7831, 7832, 7834, 7835, 7836, 7840, 7841, 7842, 7843, 7828]

// Module 7830
import _mod7828 from "module_7828" /* 7828 */;
import _modDef7831 from "module_7831" /* 7831 */;
import _modDef7832 from "module_7832" /* 7832 */;
import _modDef7834 from "module_7834" /* 7834 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7835 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 7836 */;
import _modDef7840 from "module_7840" /* 7840 */;
import _modDef7841 from "module_7841" /* 7841 */;
import _modDef7842 from "module_7842" /* 7842 */;
import _modDef7843 from "module_7843" /* 7843 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7831.USE_TIFF) {
      const tmpResult = _modDef7832;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7832;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod7828;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef7831.USE_JPEG) {
      const tmpResult17 = _modDef7834;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef7834;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod7828;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef7831.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod7828;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef7831.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod7828;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef7831.USE_AVIF) {
      const tmpResult23 = _modDef7840;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7840;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod7828;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef7831.USE_WEBP) {
      const tmpResult25 = _modDef7841;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7841;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod7828;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef7831.USE_GIF) {
      const tmpResult27 = _modDef7842;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7842;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod7828;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef7831.USE_XMP) {
      const tmpResult29 = _modDef7843;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7843;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod7828;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
