// Module ID: 8202
// Function ID: 8203
// Dependencies: [8203, 8204, 8206, 8207, 8208, 8212, 8213, 8214, 8215, 8200]

// Module 8202
import _mod8200 from "module_8200" /* 8200 */;
import _modDef8203 from "module_8203" /* 8203 */;
import _modDef8204 from "module_8204" /* 8204 */;
import _modDef8206 from "module_8206" /* 8206 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8207 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8208 */;
import _modDef8212 from "module_8212" /* 8212 */;
import _modDef8213 from "module_8213" /* 8213 */;
import _modDef8214 from "module_8214" /* 8214 */;
import _modDef8215 from "module_8215" /* 8215 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8203.USE_TIFF) {
      const tmpResult = _modDef8204;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8204;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8200;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8203.USE_JPEG) {
      const tmpResult17 = _modDef8206;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8206;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8200;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8203.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8200;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8203.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8200;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8203.USE_AVIF) {
      const tmpResult23 = _modDef8212;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8212;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8200;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8203.USE_WEBP) {
      const tmpResult25 = _modDef8213;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8213;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8200;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8203.USE_GIF) {
      const tmpResult27 = _modDef8214;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8214;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8200;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8203.USE_XMP) {
      const tmpResult29 = _modDef8215;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8215;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8200;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
