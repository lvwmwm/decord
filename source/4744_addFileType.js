// Module ID: 4744
// Function ID: 41228
// Name: addFileType
// Dependencies: []

// Module 4744 (addFileType)
function addFileType(offsets, avif, AVIF) {
  let fileType = avif(arg6[9]);
  fileType = { value: avif, description: AVIF };
  return fileType.objectAssign({}, offsets, { fileType });
}
arg5.default = {
  parseAppMarkers(byteLength, arg1) {
    if (arg2(arg6[0]).USE_TIFF) {
      if (obj.isTiffFile(byteLength)) {
        return addFileType(arg2(arg6[1]).findTiffOffsets(), "tiff", "TIFF");
      }
      const obj = arg2(arg6[1]);
    }
    if (arg2(arg6[0]).USE_JPEG) {
      if (obj2.isJpegFile(byteLength)) {
        return addFileType(arg2(arg6[2]).findJpegOffsets(byteLength), "jpeg", "JPEG");
      }
      const obj2 = arg2(arg6[2]);
    }
    if (arg2(arg6[0]).USE_PNG) {
      if (obj3.isPngFile(byteLength)) {
        return addFileType(arg2(arg6[3]).findPngOffsets(byteLength, arg1), "png", "PNG");
      }
      const obj3 = arg2(arg6[3]);
    }
    if (arg2(arg6[0]).USE_HEIC) {
      if (obj4.isHeicFile(byteLength)) {
        return addFileType(arg2(arg6[4]).findHeicOffsets(byteLength), "heic", "HEIC");
      }
      const obj4 = arg2(arg6[4]);
    }
    if (arg2(arg6[0]).USE_AVIF) {
      if (obj5.isAvifFile(byteLength)) {
        return addFileType(arg2(arg6[5]).findAvifOffsets(byteLength), "avif", "AVIF");
      }
      const obj5 = arg2(arg6[5]);
    }
    if (arg2(arg6[0]).USE_WEBP) {
      if (obj6.isWebpFile(byteLength)) {
        return addFileType(arg2(arg6[6]).findOffsets(byteLength), "webp", "WebP");
      }
      const obj6 = arg2(arg6[6]);
    }
    if (arg2(arg6[0]).USE_GIF) {
      if (obj7.isGifFile(byteLength)) {
        return addFileType(arg2(arg6[7]).findOffsets(byteLength), "gif", "GIF");
      }
      const obj7 = arg2(arg6[7]);
    }
    if (arg2(arg6[0]).USE_XMP) {
      if (obj8.isXMLFile(byteLength)) {
        return addFileType(arg2(arg6[8]).findOffsets(byteLength), "xml", "XML");
      }
      const obj8 = arg2(arg6[8]);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
