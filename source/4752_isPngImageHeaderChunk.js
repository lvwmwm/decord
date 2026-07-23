// Module ID: 4752
// Function ID: 41271
// Name: isPngImageHeaderChunk
// Dependencies: [4745, 4748]

// Module 4752 (isPngImageHeaderChunk)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function isPngImageHeaderChunk(byteLength, length) {
  return "IHDR" === require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c7, c5);
}
function isPngXmpChunk(byteLength, length) {
  let tmp = require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c7, c5) === iTXt;
  if (tmp) {
    tmp = require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c8, XMLcomadobexmp0.length) === XMLcomadobexmp0;
    const obj2 = require(4745) /* getStringFromDataView */;
  }
  return tmp;
}
function isPngTextChunk(byteLength, length, arg2) {
  const stringFromDataView = require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c7, c5);
  let tmp2 = stringFromDataView === tEXt;
  if (!tmp2) {
    tmp2 = stringFromDataView === iTXt;
  }
  if (!tmp2) {
    tmp2 = stringFromDataView === zTXt && arg2;
    const tmp5 = stringFromDataView === zTXt && arg2;
  }
  return tmp2;
}
function isPngExifChunk(byteLength, length) {
  return require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c7, c5) === eXIf;
}
function isPngIccpChunk(byteLength, length) {
  return require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c7, c5) === iCCP;
}
function isPngChunk(byteLength, length) {
  const items = [pHYs, tIME];
  return items.includes(require(4745) /* getStringFromDataView */.getStringFromDataView(byteLength, length + c7, c5));
}
function getPngXmpDataOffset(byteLength, length) {
  const sum = length + (c8 + XMLcomadobexmp0.length + 1 + 1);
  let tmp2 = sum;
  let num = 0;
  let tmp3 = sum;
  let num2 = 0;
  if (sum < byteLength.byteLength) {
    while (true) {
      let tmp4 = tmp2;
      let sum1 = num;
      if (0 === byteLength.getUint8(tmp2)) {
        sum1 = num + 1;
      }
      let sum2 = tmp2 + 1;
      tmp3 = sum2;
      num2 = sum1;
      if (sum1 >= 2) {
        break;
      } else {
        tmp2 = sum2;
        num = sum1;
        num2 = sum1;
        tmp3 = sum2;
        if (sum2 >= byteLength.byteLength) {
          break;
        }
      }
    }
  }
  return num2 < 2 ? undefined : tmp3;
}
function parseIccHeader(getUint8, sum) {
  let obj = require(4745) /* getStringFromDataView */;
  const nullTerminatedStringFromDataView = obj.getNullTerminatedStringFromDataView(getUint8, sum);
  sum = sum + (nullTerminatedStringFromDataView.length + 1);
  obj = { profileName: nullTerminatedStringFromDataView, compressionMethod: getUint8.getUint8(sum), compressedProfileOffset: sum + 1 };
  return obj;
}
let c3 = "\u0089PNG\r\n\u001A\n";
let c4 = 4;
let c5 = 4;
let c6 = 0;
let c7 = 4;
let c8 = 8;
let c9 = "XML:com.adobe.xmp\0";
const tEXt = "tEXt";
const iTXt = "iTXt";
const zTXt = "zTXt";
const pHYs = "pHYs";
const tIME = "tIME";
const eXIf = "eXIf";
const iCCP = "iCCP";
arg5.default = {
  isPngFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = require(4745) /* getStringFromDataView */.getStringFromDataView(dataView, 0, u0089PNGrnu001An.length) === u0089PNGrnu001An;
      const obj = require(4745) /* getStringFromDataView */;
    }
    return tmp2;
  },
  findPngOffsets(byteLength, arg1) {
    let compressedProfileOffset;
    let compressionMethod;
    let profileName;
    let obj = { hasAppMarkers: false };
    let length = u0089PNGrnu001An.length;
    if (length + c4 + c5 <= byteLength.byteLength) {
      while (true) {
        let tmp8 = module;
        let tmp9 = dependencyMap;
        if (module(4748).USE_PNG_FILE) {
          let tmp10 = isPngImageHeaderChunk;
          if (isPngImageHeaderChunk(byteLength, length)) {
            obj.hasAppMarkers = true;
            let tmp47 = c8;
            obj.pngHeaderOffset = length + c8;
            let tmp20 = tmp;
            let tmp21 = tmp2;
            let tmp22 = tmp3;
            let tmp23 = tmp4;
            let tmp24 = tmp5;
            let tmp25 = tmp6;
            let tmp26 = tmp7;
            let tmp48 = c6;
            let tmp49 = c4;
            let tmp50 = c5;
            length = length + (byteLength.getUint32(length + c6) + c4 + c5 + 4);
            let tmp51 = c4;
            let tmp52 = c5;
            tmp = tmp20;
            tmp2 = tmp21;
            tmp3 = tmp22;
            tmp4 = tmp23;
            tmp5 = tmp24;
            tmp6 = tmp25;
            tmp7 = tmp26;
            if (length + c4 + c5 > byteLength.byteLength) {
              break;
            }
          }
        }
        let tmp11 = module;
        let tmp12 = dependencyMap;
        if (module(4748).USE_XMP) {
          let tmp13 = isPngXmpChunk;
          if (isPngXmpChunk(byteLength, length)) {
            let tmp45 = getPngXmpDataOffset;
            let tmp46 = getPngXmpDataOffset(byteLength, length);
            tmp21 = tmp2;
            tmp22 = tmp3;
            tmp23 = tmp4;
            tmp24 = tmp5;
            tmp25 = tmp6;
            tmp26 = tmp7;
            tmp20 = tmp46;
            if (undefined !== tmp46) {
              obj.hasAppMarkers = true;
              obj = { dataOffset: tmp46 };
              let tmp53 = c6;
              let tmp54 = c8;
              obj.length = byteLength.getUint32(length + c6) - (tmp46 - (length + c8));
              let items = [obj];
              obj.xmpChunks = items;
              tmp20 = tmp46;
              tmp21 = tmp2;
              tmp22 = tmp3;
              tmp23 = tmp4;
              tmp24 = tmp5;
              tmp25 = tmp6;
              tmp26 = tmp7;
            }
          }
        }
        let tmp14 = isPngTextChunk;
        if (isPngTextChunk(byteLength, length, arg1)) {
          obj.hasAppMarkers = true;
          let tmp37 = require;
          let tmp38 = dependencyMap;
          let obj3 = require(4745) /* getStringFromDataView */;
          let tmp39 = c7;
          let tmp40 = c5;
          let stringFromDataView = obj3.getStringFromDataView(byteLength, length + c7, c5);
          if (!obj.pngTextChunks) {
            obj.pngTextChunks = [];
          }
          let pngTextChunks = obj.pngTextChunks;
          obj = {};
          let tmp42 = c6;
          obj.length = byteLength.getUint32(length + c6);
          obj.type = stringFromDataView;
          let tmp43 = c8;
          obj.offset = length + c8;
          let arr = pngTextChunks.push(obj);
          tmp20 = tmp;
          tmp21 = stringFromDataView;
          tmp22 = tmp3;
          tmp23 = tmp4;
          tmp24 = tmp5;
          tmp25 = tmp6;
          tmp26 = tmp7;
        } else {
          let tmp15 = isPngExifChunk;
          if (isPngExifChunk(byteLength, length)) {
            obj.hasAppMarkers = true;
            let tmp36 = c8;
            obj.tiffHeaderOffset = length + c8;
            tmp20 = tmp;
            tmp21 = tmp2;
            tmp22 = tmp3;
            tmp23 = tmp4;
            tmp24 = tmp5;
            tmp25 = tmp6;
            tmp26 = tmp7;
          } else {
            let tmp16 = module;
            let tmp17 = dependencyMap;
            if (module(4748).USE_ICC) {
              if (arg1) {
                let tmp18 = isPngIccpChunk;
                if (isPngIccpChunk(byteLength, length)) {
                  obj.hasAppMarkers = true;
                  let tmp29 = c6;
                  let uint32 = byteLength.getUint32(length + c6);
                  let tmp31 = c8;
                  let sum = length + c8;
                  let tmp33 = parseIccHeader;
                  let tmp34 = parseIccHeader(byteLength, sum);
                  ({ profileName, compressionMethod, compressedProfileOffset } = tmp34);
                  if (!obj.iccChunks) {
                    obj.iccChunks = [];
                  }
                  let iccChunks = obj.iccChunks;
                  let obj1 = { offset: compressedProfileOffset, length: uint32 - (compressedProfileOffset - sum), chunkNumber: 1, chunksTotal: 1, profileName, compressionMethod };
                  arr = iccChunks.push(obj1);
                  tmp20 = tmp;
                  tmp21 = tmp2;
                  tmp22 = uint32;
                  tmp23 = sum;
                  tmp24 = profileName;
                  tmp25 = compressionMethod;
                  tmp26 = compressedProfileOffset;
                }
              }
            }
            let tmp19 = isPngChunk;
            tmp20 = tmp;
            tmp21 = tmp2;
            tmp22 = tmp3;
            tmp23 = tmp4;
            tmp24 = tmp5;
            tmp25 = tmp6;
            tmp26 = tmp7;
            if (isPngChunk(byteLength, length)) {
              obj.hasAppMarkers = true;
              if (!obj.pngChunkOffsets) {
                obj.pngChunkOffsets = [];
              }
              let pngChunkOffsets = obj.pngChunkOffsets;
              let tmp27 = c6;
              let arr1 = pngChunkOffsets.push(length + c6);
              tmp20 = tmp;
              tmp21 = tmp2;
              tmp22 = tmp3;
              tmp23 = tmp4;
              tmp24 = tmp5;
              tmp25 = tmp6;
              tmp26 = tmp7;
            }
          }
        }
      }
    }
    return obj;
  }
};
arg5.PNG_CHUNK_TYPE_SIZE = 4;
arg5.PNG_CHUNK_LENGTH_OFFSET = 0;
arg5.PNG_CHUNK_TYPE_OFFSET = 4;
arg5.PNG_CHUNK_DATA_OFFSET = 8;
arg5.TYPE_TEXT = "tEXt";
arg5.TYPE_ITXT = "iTXt";
arg5.TYPE_ZTXT = "zTXt";
arg5.TYPE_PHYS = "pHYs";
arg5.TYPE_TIME = "tIME";
arg5.TYPE_EXIF = "eXIf";
arg5.TYPE_ICCP = "iCCP";
