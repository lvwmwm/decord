// Module ID: 4782
// Function ID: 41378
// Name: addFileType
// Dependencies: [4783, 4784, 4786, 4787, 4788, 4792, 4793, 4794, 4795, 4780]

// Module 4782 (addFileType)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function addFileType(offsets, avif, AVIF) {
  let fileType = require(4780) /* getStringFromDataView */;
  fileType = { value: avif, description: AVIF };
  return fileType.objectAssign({}, offsets, { fileType });
}
arg5.default = {
  parseAppMarkers(byteLength, arg1) {
    if (module(4783).USE_TIFF) {
      if (obj.isTiffFile(byteLength)) {
        return addFileType(module(4784).findTiffOffsets(), "tiff", "TIFF");
      }
      obj = module(4784);
    }
    if (module(4783).USE_JPEG) {
      if (obj2.isJpegFile(byteLength)) {
        return addFileType(module(4786).findJpegOffsets(byteLength), "jpeg", "JPEG");
      }
      obj2 = module(4786);
    }
    if (module(4783).USE_PNG) {
      if (obj3.isPngFile(byteLength)) {
        return addFileType(module(4787).findPngOffsets(byteLength, arg1), "png", "PNG");
      }
      obj3 = module(4787);
    }
    if (module(4783).USE_HEIC) {
      if (obj4.isHeicFile(byteLength)) {
        return addFileType(module(4788).findHeicOffsets(byteLength), "heic", "HEIC");
      }
      obj4 = module(4788);
    }
    if (module(4783).USE_AVIF) {
      if (obj5.isAvifFile(byteLength)) {
        return addFileType(module(4792).findAvifOffsets(byteLength), "avif", "AVIF");
      }
      obj5 = module(4792);
    }
    if (module(4783).USE_WEBP) {
      if (obj6.isWebpFile(byteLength)) {
        return addFileType(module(4793).findOffsets(byteLength), "webp", "WebP");
      }
      obj6 = module(4793);
    }
    if (module(4783).USE_GIF) {
      if (obj7.isGifFile(byteLength)) {
        return addFileType(module(4794).findOffsets(byteLength), "gif", "GIF");
      }
      obj7 = module(4794);
    }
    if (module(4783).USE_XMP) {
      if (obj8.isXMLFile(byteLength)) {
        return addFileType(module(4795).findOffsets(byteLength), "xml", "XML");
      }
      obj8 = module(4795);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
