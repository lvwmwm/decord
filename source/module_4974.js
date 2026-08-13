// Module ID: 4974
// Function ID: 4975
// Dependencies: [4975, 4976, 4978, 4979, 4980, 4984, 4985, 4986, 4987, 4972]

// Module 4974
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  parseAppMarkers(byteLength, flag2) {
    if (module(4975).USE_TIFF) {
      let tmpResult = tmp(4976);
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = tmp(4976);
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: null };
        obj[0] = { value: "tiff", description: "TIFF" };
        return require(4972) /* getDataView */.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (module(4975).USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = tmp(4978);
        const findJpegOffsetsResult = tmp(4978).findJpegOffsets(byteLength);
        obj = { fileType: null };
        obj[0] = { value: "jpeg", description: "JPEG" };
        return require(4972) /* getDataView */.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = tmp(4978);
    }
    if (module(4975).USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = tmp(4979);
        const findPngOffsetsResult = tmp(4979).findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: null };
        obj1[0] = { value: "png", description: "PNG" };
        return require(4972) /* getDataView */.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = tmp(4979);
    }
    if (module(4975).USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = tmp(4980);
        const findHeicOffsetsResult = tmp(4980).findHeicOffsets(byteLength);
        const obj2 = { fileType: null };
        obj2[0] = { value: "heic", description: "HEIC" };
        return require(4972) /* getDataView */.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = tmp(4980);
    }
    if (module(4975).USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = tmp(4984);
        const findAvifOffsetsResult = tmp(4984).findAvifOffsets(byteLength);
        const obj3 = { fileType: null };
        obj3[0] = { value: "avif", description: "AVIF" };
        return require(4972) /* getDataView */.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = tmp(4984);
    }
    if (module(4975).USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = tmp(4985);
        const findOffsetsResult = tmp(4985).findOffsets(byteLength);
        const obj4 = { fileType: null };
        obj4[0] = { value: "webp", description: "WebP" };
        return require(4972) /* getDataView */.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = tmp(4985);
    }
    if (module(4975).USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = tmp(4986);
        const findOffsetsResult1 = tmp(4986).findOffsets(byteLength);
        const obj5 = { fileType: null };
        obj5[0] = { value: "gif", description: "GIF" };
        return require(4972) /* getDataView */.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = tmp(4986);
    }
    if (module(4975).USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = tmp(4987);
        const findOffsetsResult2 = tmp(4987).findOffsets(byteLength);
        const obj6 = { fileType: null };
        obj6[0] = { value: "xml", description: "XML" };
        return require(4972) /* getDataView */.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = tmp(4987);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
