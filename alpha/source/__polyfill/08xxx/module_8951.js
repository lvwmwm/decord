// Module ID: 8951
// Function ID: 8952
// Dependencies: [8952, 8953, 8955, 8956, 8957, 8961, 8962, 8963, 8964, 8949]

// Module 8951
import _mod8949 from "module_8949" /* 8949 */;
import _modDef8952 from "module_8952" /* 8952 */;
import _modDef8953 from "module_8953" /* 8953 */;
import _modDef8955 from "module_8955" /* 8955 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8956 */;
import ITEM_INFO_TYPE_EXIFDefault from "ITEM_INFO_TYPE_EXIF" /* 8957 */;
import _modDef8961 from "module_8961" /* 8961 */;
import _modDef8962 from "module_8962" /* 8962 */;
import _modDef8963 from "module_8963" /* 8963 */;
import _modDef8964 from "module_8964" /* 8964 */;


export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8952.USE_TIFF) {
      const tmpResult = _modDef8953;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8953;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod8949;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef8952.USE_JPEG) {
      const tmpResult17 = _modDef8955;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef8955;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod8949;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef8952.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod8949;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef8952.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod8949;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef8952.USE_AVIF) {
      const tmpResult23 = _modDef8961;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8961;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod8949;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef8952.USE_WEBP) {
      const tmpResult25 = _modDef8962;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8962;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod8949;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef8952.USE_GIF) {
      const tmpResult27 = _modDef8963;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8963;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod8949;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef8952.USE_XMP) {
      const tmpResult29 = _modDef8964;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8964;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod8949;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
