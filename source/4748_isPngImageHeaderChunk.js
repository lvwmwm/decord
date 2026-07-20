// Module ID: 4748
// Function ID: 41196
// Name: isPngImageHeaderChunk
// Dependencies: []

// Module 4748 (isPngImageHeaderChunk)
function isPngImageHeaderChunk(byteLength, length) {
  return "IHDR" === length(arg6[0]).getStringFromDataView(byteLength, length + closure_7, closure_5);
}
function isPngXmpChunk(byteLength, length) {
  let tmp = length(arg6[0]).getStringFromDataView(byteLength, length + closure_7, closure_5) === closure_11;
  if (tmp) {
    tmp = length(arg6[0]).getStringFromDataView(byteLength, length + closure_8, XMLcomadobexmp0.length) === XMLcomadobexmp0;
    const obj2 = length(arg6[0]);
  }
  return tmp;
}
function isPngTextChunk(byteLength, length, arg2) {
  const stringFromDataView = length(arg6[0]).getStringFromDataView(byteLength, length + closure_7, closure_5);
  let tmp2 = stringFromDataView === closure_10;
  if (!tmp2) {
    tmp2 = stringFromDataView === closure_11;
  }
  if (!tmp2) {
    tmp2 = stringFromDataView === closure_12 && arg2;
    const tmp5 = stringFromDataView === closure_12 && arg2;
  }
  return tmp2;
}
function isPngExifChunk(byteLength, length) {
  return length(arg6[0]).getStringFromDataView(byteLength, length + closure_7, closure_5) === closure_15;
}
function isPngIccpChunk(byteLength, length) {
  return length(arg6[0]).getStringFromDataView(byteLength, length + closure_7, closure_5) === closure_16;
}
function isPngChunk(byteLength, length) {
  const items = [closure_13, closure_14];
  return items.includes(length(arg6[0]).getStringFromDataView(byteLength, length + closure_7, closure_5));
}
function getPngXmpDataOffset(byteLength, length) {
  const sum = length + (closure_8 + XMLcomadobexmp0.length + 1 + 1);
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
  let obj = sum(arg6[0]);
  const nullTerminatedStringFromDataView = obj.getNullTerminatedStringFromDataView(getUint8, sum);
  sum = sum + (nullTerminatedStringFromDataView.length + 1);
  obj = { profileName: nullTerminatedStringFromDataView, compressionMethod: getUint8.getUint8(sum), compressedProfileOffset: sum + 1 };
  return obj;
}
let closure_3 = "\u0089PNG\r\n\u001A\n";
let closure_4 = 4;
let closure_5 = 4;
let closure_6 = 0;
let closure_7 = 4;
let closure_8 = 8;
let closure_9 = "XML:com.adobe.xmp\0";
let closure_10 = "tEXt";
let closure_11 = "iTXt";
let closure_12 = "zTXt";
let closure_13 = "pHYs";
let closure_14 = "tIME";
let closure_15 = "eXIf";
let closure_16 = "iCCP";
arg5.default = {
  isPngFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = arg1(arg6[0]).getStringFromDataView(dataView, 0, u0089PNGrnu001An.length) === u0089PNGrnu001An;
      const obj = arg1(arg6[0]);
    }
    return tmp2;
  },
  findPngOffsets(byteLength, arg1) {
    let compressedProfileOffset;
    let compressionMethod;
    let profileName;
    let obj = { hasAppMarkers: false };
    let length = u0089PNGrnu001An.length;
    if (length + closure_4 + closure_5 <= byteLength.byteLength) {
      while (true) {
        let tmp8 = arg2;
        let tmp9 = arg6;
        if (arg2(arg6[1]).USE_PNG_FILE) {
          let tmp10 = isPngImageHeaderChunk;
          if (isPngImageHeaderChunk(byteLength, length)) {
            obj.hasAppMarkers = true;
            let tmp47 = closure_8;
            obj.pngHeaderOffset = length + closure_8;
            let tmp20 = tmp;
            let tmp21 = tmp2;
            let tmp22 = tmp3;
            let tmp23 = tmp4;
            let tmp24 = tmp5;
            let tmp25 = tmp6;
            let tmp26 = tmp7;
            let tmp48 = closure_6;
            let tmp49 = closure_4;
            let tmp50 = closure_5;
            length = length + (byteLength.getUint32(length + closure_6) + closure_4 + closure_5 + 4);
            let tmp51 = closure_4;
            let tmp52 = closure_5;
            let tmp = tmp20;
            let tmp2 = tmp21;
            let tmp3 = tmp22;
            let tmp4 = tmp23;
            let tmp5 = tmp24;
            let tmp6 = tmp25;
            let tmp7 = tmp26;
            if (length + closure_4 + closure_5 > byteLength.byteLength) {
              break;
            }
          }
        }
        let tmp11 = arg2;
        let tmp12 = arg6;
        if (arg2(arg6[1]).USE_XMP) {
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
              let tmp53 = closure_6;
              let tmp54 = closure_8;
              obj.length = byteLength.getUint32(length + closure_6) - (tmp46 - (length + closure_8));
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
          let tmp37 = arg1;
          let tmp38 = arg6;
          let obj3 = arg1(arg6[0]);
          let tmp39 = closure_7;
          let tmp40 = closure_5;
          let stringFromDataView = obj3.getStringFromDataView(byteLength, length + closure_7, closure_5);
          if (!obj.pngTextChunks) {
            obj.pngTextChunks = [];
          }
          let pngTextChunks = obj.pngTextChunks;
          obj = {};
          let tmp42 = closure_6;
          obj.length = byteLength.getUint32(length + closure_6);
          obj.type = stringFromDataView;
          let tmp43 = closure_8;
          obj.offset = length + closure_8;
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
            let tmp36 = closure_8;
            obj.tiffHeaderOffset = length + closure_8;
            tmp20 = tmp;
            tmp21 = tmp2;
            tmp22 = tmp3;
            tmp23 = tmp4;
            tmp24 = tmp5;
            tmp25 = tmp6;
            tmp26 = tmp7;
          } else {
            let tmp16 = arg2;
            let tmp17 = arg6;
            if (arg2(arg6[1]).USE_ICC) {
              if (arg1) {
                let tmp18 = isPngIccpChunk;
                if (isPngIccpChunk(byteLength, length)) {
                  obj.hasAppMarkers = true;
                  let tmp29 = closure_6;
                  let uint32 = byteLength.getUint32(length + closure_6);
                  let tmp31 = closure_8;
                  let sum = length + closure_8;
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
              let tmp27 = closure_6;
              let arr1 = pngChunkOffsets.push(length + closure_6);
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
