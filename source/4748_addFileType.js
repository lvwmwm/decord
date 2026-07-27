// Module ID: 4748
// Function ID: 41263
// Name: addFileType
// Dependencies: [4749, 4750, 4752, 4753, 4754, 4758, 4759, 4760, 4761, 4746]

// Module 4748 (addFileType)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function addFileType(offsets, avif, AVIF) {
  let fileType = require(4746) /* getStringFromDataView */;
  fileType = { value: avif, description: AVIF };
  return fileType.objectAssign({}, offsets, { fileType });
}
arg5.default = {
  parseAppMarkers(byteLength, arg1) {
    if (module(4749).USE_TIFF) {
      if (obj.isTiffFile(byteLength)) {
        return addFileType(module(4750).findTiffOffsets(), "tiff", "TIFF");
      }
      obj = module(4750);
    }
    if (module(4749).USE_JPEG) {
      if (obj2.isJpegFile(byteLength)) {
        return addFileType(module(4752).findJpegOffsets(byteLength), "jpeg", "JPEG");
      }
      obj2 = module(4752);
    }
    if (module(4749).USE_PNG) {
      if (obj3.isPngFile(byteLength)) {
        return addFileType(module(4753).findPngOffsets(byteLength, arg1), "png", "PNG");
      }
      obj3 = module(4753);
    }
    if (module(4749).USE_HEIC) {
      if (obj4.isHeicFile(byteLength)) {
        return addFileType(module(4754).findHeicOffsets(byteLength), "heic", "HEIC");
      }
      obj4 = module(4754);
    }
    if (module(4749).USE_AVIF) {
      if (obj5.isAvifFile(byteLength)) {
        return addFileType(module(4758).findAvifOffsets(byteLength), "avif", "AVIF");
      }
      obj5 = module(4758);
    }
    if (module(4749).USE_WEBP) {
      if (obj6.isWebpFile(byteLength)) {
        return addFileType(module(4759).findOffsets(byteLength), "webp", "WebP");
      }
      obj6 = module(4759);
    }
    if (module(4749).USE_GIF) {
      if (obj7.isGifFile(byteLength)) {
        return addFileType(module(4760).findOffsets(byteLength), "gif", "GIF");
      }
      obj7 = module(4760);
    }
    if (module(4749).USE_XMP) {
      if (obj8.isXMLFile(byteLength)) {
        return addFileType(module(4761).findOffsets(byteLength), "xml", "XML");
      }
      obj8 = module(4761);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
