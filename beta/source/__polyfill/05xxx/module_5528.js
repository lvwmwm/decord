// Module ID: 5528
// Function ID: 5529
// Dependencies: [5529, 5530, 5532, 5533, 5534, 5538, 5539, 5540, 5541, 5526]

// Module 5528
import _mod5526 from "module_5526" /* 5526 */;
import _modDef5529 from "module_5529" /* 5529 */;
import _modDef5530 from "module_5530" /* 5530 */;
import _modDef5532 from "module_5532" /* 5532 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5533 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 5534 */;
import _modDef5538 from "module_5538" /* 5538 */;
import _modDef5539 from "module_5539" /* 5539 */;
import _modDef5540 from "module_5540" /* 5540 */;
import _modDef5541 from "module_5541" /* 5541 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5529.USE_TIFF) {
      const tmpResult = _modDef5530;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5530;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod5526;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5529.USE_JPEG) {
      const tmpResult17 = _modDef5532;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef5532;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod5526;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef5529.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod5526;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef5529.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod5526;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef5529.USE_AVIF) {
      const tmpResult23 = _modDef5538;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5538;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod5526;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef5529.USE_WEBP) {
      const tmpResult25 = _modDef5539;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5539;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod5526;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef5529.USE_GIF) {
      const tmpResult27 = _modDef5540;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5540;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod5526;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef5529.USE_XMP) {
      const tmpResult29 = _modDef5541;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5541;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod5526;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
