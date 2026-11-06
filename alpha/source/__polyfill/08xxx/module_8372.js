// Module ID: 8372
// Function ID: 8373
// Dependencies: [8373, 8374, 8376, 8377, 8378, 8382, 8383, 8384, 8385, 8370]

// Module 8372
import _mod8370 from "module_8370" /* 8370 */;
import _modDef8373 from "module_8373" /* 8373 */;
import _modDef8374 from "module_8374" /* 8374 */;
import _modDef8376 from "module_8376" /* 8376 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8377 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8378 */;
import _modDef8382 from "module_8382" /* 8382 */;
import _modDef8383 from "module_8383" /* 8383 */;
import _modDef8384 from "module_8384" /* 8384 */;
import _modDef8385 from "module_8385" /* 8385 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8373.USE_TIFF) {
      const tmpResult = _modDef8374;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8374;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8370;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8373.USE_JPEG) {
      const tmpResult17 = _modDef8376;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8376;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8370;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8373.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8370;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8373.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8370;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8373.USE_AVIF) {
      const tmpResult23 = _modDef8382;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8382;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8370;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8373.USE_WEBP) {
      const tmpResult25 = _modDef8383;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8383;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8370;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8373.USE_GIF) {
      const tmpResult27 = _modDef8384;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8384;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8370;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8373.USE_XMP) {
      const tmpResult29 = _modDef8385;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8385;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8370;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
