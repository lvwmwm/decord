// Module ID: 8426
// Function ID: 8427
// Dependencies: [8427, 8428, 8430, 8431, 8432, 8436, 8437, 8438, 8439, 8424]

// Module 8426
import _mod8424 from "module_8424" /* 8424 */;
import _modDef8427 from "module_8427" /* 8427 */;
import _modDef8428 from "module_8428" /* 8428 */;
import _modDef8430 from "module_8430" /* 8430 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8431 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8432 */;
import _modDef8436 from "module_8436" /* 8436 */;
import _modDef8437 from "module_8437" /* 8437 */;
import _modDef8438 from "module_8438" /* 8438 */;
import _modDef8439 from "module_8439" /* 8439 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8427.USE_TIFF) {
      const tmpResult = _modDef8428;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8428;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8424;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8427.USE_JPEG) {
      const tmpResult17 = _modDef8430;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8430;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8424;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8427.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8424;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8427.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8424;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8427.USE_AVIF) {
      const tmpResult23 = _modDef8436;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8436;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8424;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8427.USE_WEBP) {
      const tmpResult25 = _modDef8437;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8437;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8424;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8427.USE_GIF) {
      const tmpResult27 = _modDef8438;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8438;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8424;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8427.USE_XMP) {
      const tmpResult29 = _modDef8439;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8439;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8424;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
