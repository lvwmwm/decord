// Module ID: 8160
// Function ID: 8161
// Dependencies: [8161, 8162, 8164, 8165, 8166, 8170, 8171, 8172, 8173, 8158]

// Module 8160
import _mod8158 from "module_8158" /* 8158 */;
import _modDef8161 from "module_8161" /* 8161 */;
import _modDef8162 from "module_8162" /* 8162 */;
import _modDef8164 from "module_8164" /* 8164 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8165 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8166 */;
import _modDef8170 from "module_8170" /* 8170 */;
import _modDef8171 from "module_8171" /* 8171 */;
import _modDef8172 from "module_8172" /* 8172 */;
import _modDef8173 from "module_8173" /* 8173 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8161.USE_TIFF) {
      const tmpResult = _modDef8162;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8162;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8158;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8161.USE_JPEG) {
      const tmpResult17 = _modDef8164;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8164;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8158;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8161.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8158;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8161.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8158;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8161.USE_AVIF) {
      const tmpResult23 = _modDef8170;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8170;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8158;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8161.USE_WEBP) {
      const tmpResult25 = _modDef8171;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8171;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8158;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8161.USE_GIF) {
      const tmpResult27 = _modDef8172;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8172;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8158;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8161.USE_XMP) {
      const tmpResult29 = _modDef8173;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8173;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8158;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
