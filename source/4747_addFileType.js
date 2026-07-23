// Module ID: 4747
// Function ID: 41246
// Name: addFileType
// Dependencies: [4748, 4749, 4751, 4752, 4753, 4757, 4758, 4759, 4760, 4745]

// Module 4747 (addFileType)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function addFileType(offsets, avif, AVIF) {
  let fileType = require(4745) /* getStringFromDataView */;
  fileType = { value: avif, description: AVIF };
  return fileType.objectAssign({}, offsets, { fileType });
}
arg5.default = {
  parseAppMarkers(byteLength, arg1) {
    if (module(4748).USE_TIFF) {
      if (obj.isTiffFile(byteLength)) {
        return addFileType(module(4749).findTiffOffsets(), "tiff", "TIFF");
      }
      obj = module(4749);
    }
    if (module(4748).USE_JPEG) {
      if (obj2.isJpegFile(byteLength)) {
        return addFileType(module(4751).findJpegOffsets(byteLength), "jpeg", "JPEG");
      }
      obj2 = module(4751);
    }
    if (module(4748).USE_PNG) {
      if (obj3.isPngFile(byteLength)) {
        return addFileType(module(4752).findPngOffsets(byteLength, arg1), "png", "PNG");
      }
      obj3 = module(4752);
    }
    if (module(4748).USE_HEIC) {
      if (obj4.isHeicFile(byteLength)) {
        return addFileType(module(4753).findHeicOffsets(byteLength), "heic", "HEIC");
      }
      obj4 = module(4753);
    }
    if (module(4748).USE_AVIF) {
      if (obj5.isAvifFile(byteLength)) {
        return addFileType(module(4757).findAvifOffsets(byteLength), "avif", "AVIF");
      }
      obj5 = module(4757);
    }
    if (module(4748).USE_WEBP) {
      if (obj6.isWebpFile(byteLength)) {
        return addFileType(module(4758).findOffsets(byteLength), "webp", "WebP");
      }
      obj6 = module(4758);
    }
    if (module(4748).USE_GIF) {
      if (obj7.isGifFile(byteLength)) {
        return addFileType(module(4759).findOffsets(byteLength), "gif", "GIF");
      }
      obj7 = module(4759);
    }
    if (module(4748).USE_XMP) {
      if (obj8.isXMLFile(byteLength)) {
        return addFileType(module(4760).findOffsets(byteLength), "xml", "XML");
      }
      obj8 = module(4760);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
