// Module ID: 8164
// Function ID: 8165
// Dependencies: [8165, 8166, 8168, 8169, 8170, 8174, 8175, 8176, 8177, 8162]

// Module 8164
import _mod8162 from "module_8162" /* 8162 */;
import _modDef8165 from "module_8165" /* 8165 */;
import _modDef8166 from "module_8166" /* 8166 */;
import _modDef8168 from "module_8168" /* 8168 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8169 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8170 */;
import _modDef8174 from "module_8174" /* 8174 */;
import _modDef8175 from "module_8175" /* 8175 */;
import _modDef8176 from "module_8176" /* 8176 */;
import _modDef8177 from "module_8177" /* 8177 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8165.USE_TIFF) {
      const tmpResult = _modDef8166;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8166;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8162;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8165.USE_JPEG) {
      const tmpResult17 = _modDef8168;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8168;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8162;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8165.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8162;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8165.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8162;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8165.USE_AVIF) {
      const tmpResult23 = _modDef8174;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8174;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8162;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8165.USE_WEBP) {
      const tmpResult25 = _modDef8175;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8175;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8162;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8165.USE_GIF) {
      const tmpResult27 = _modDef8176;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8176;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8162;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8165.USE_XMP) {
      const tmpResult29 = _modDef8177;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8177;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8162;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
