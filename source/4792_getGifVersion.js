// Module ID: 4792
// Function ID: 41673
// Name: getGifVersion
// Dependencies: []

// Module 4792 (getGifVersion)
function getGifVersion(byteLength) {
  if (6 <= byteLength.byteLength) {
    let obj = arg1(arg6[0]);
    const stringFromDataView = obj.getStringFromDataView(byteLength, 3, 3);
    obj = { value: stringFromDataView, description: stringFromDataView };
    return obj;
  }
}
function getImageWidth(byteLength) {
  if (8 <= byteLength.byteLength) {
    const uint16 = byteLength.getUint16(6, true);
    const obj = { value: uint16 };
    const _HermesInternal = HermesInternal;
    obj.description = "" + uint16 + "px";
    return obj;
  }
}
function getImageHeight(byteLength) {
  if (10 <= byteLength.byteLength) {
    const uint16 = byteLength.getUint16(8, true);
    const obj = { value: uint16 };
    const _HermesInternal = HermesInternal;
    obj.description = "" + uint16 + "px";
    return obj;
  }
}
function getGlobalColorMap(byteLength) {
  if (11 <= byteLength.byteLength) {
    const tmp = (128 & byteLength.getUint8(10)) >>> 7;
    const obj = { value: tmp };
    let str = "No";
    if (1 === tmp) {
      str = "Yes";
    }
    obj.description = str;
    return obj;
  }
}
function getColorResolution(byteLength) {
  if (11 <= byteLength.byteLength) {
    const sum = 1 + ((112 & byteLength.getUint8(10)) >>> 4);
    const obj = { value: sum };
    let str = "bits";
    if (1 === sum) {
      str = "bit";
    }
    const _HermesInternal = HermesInternal;
    obj.description = "" + sum + " " + str;
    return obj;
  }
}
function getBitDepth(byteLength) {
  if (11 <= byteLength.byteLength) {
    const sum = 1 + (7 & byteLength.getUint8(10));
    const obj = { value: sum };
    let str = "bits";
    if (1 === sum) {
      str = "bit";
    }
    const _HermesInternal = HermesInternal;
    obj.description = "" + sum + " " + str;
    return obj;
  }
}
arg5.default = {
  read(byteLength) {
    return { GIF Version: getGifVersion(byteLength), Image Width: getImageWidth(byteLength), Image Height: getImageHeight(byteLength), Global Color Map: getGlobalColorMap(byteLength), Bits Per Pixel: getBitDepth(byteLength), Color Resolution Depth: getColorResolution(byteLength) };
  }
};
