// Module ID: 5527
// Function ID: 5528
// Name: PNG_CHUNK_TYPE_SIZE
// Dependencies: [5520, 5523]

// Module 5527 (PNG_CHUNK_TYPE_SIZE)
import _mod5520 from "module_5520" /* 5520 */;
import _modDef5523 from "module_5523" /* 5523 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
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

export default {
  isPngFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod5520.getStringFromDataView(dataView, 0, u0089PNGrnu001An.length) === u0089PNGrnu001An;
    }
    return tmp;
  },
  findPngOffsets(byteLength, flag2) {
    const obj = { hasAppMarkers: false };
    let length = u0089PNGrnu001An.length;
    if (length + c4 + c5 <= byteLength.byteLength) {
      while (true) {
        let tmp = importDefault;
        if (_modDef5523.USE_PNG_FILE) {
          let obj2 = _mod5520;
          if ("IHDR" === obj2.getStringFromDataView(byteLength, length + c7, c5)) {
            obj.hasAppMarkers = true;
            obj.pngHeaderOffset = length + c8;
            let sum = length + (byteLength.getUint32(length + c6) + c4 + c5 + 4);
            length = sum;
            if (sum + c4 + c5 > byteLength.byteLength) {
              break;
            }
          }
        }
        if (tmp(5523).USE_XMP) {
          let tmp7 = require;
          let obj3 = _mod5520;
          let tmp11 = obj3.getStringFromDataView(byteLength, length + c7, c5) === iTXt;
          if (tmp11) {
            let tmp7Result = tmp7(5520);
            tmp11 = tmp7Result.getStringFromDataView(byteLength, length + c8, XMLcomadobexmp0.length) === XMLcomadobexmp0;
          }
          if (tmp11) {
            let sum1 = length + (c8 + XMLcomadobexmp0.length + 1 + 1);
            let num = 0;
            let tmp45 = sum1;
            let tmp46 = sum1;
            if (sum1 < byteLength.byteLength) {
              while (true) {
                let sum2 = num;
                if (0 === byteLength.getUint8(tmp45)) {
                  sum2 = num + 1;
                }
                let sum3 = tmp45 + 1;
                tmp46 = sum3;
                if (sum2 >= 2) {
                  break;
                } else {
                  num = sum2;
                  tmp45 = sum3;
                  tmp46 = sum3;
                  if (sum3 >= byteLength.byteLength) {
                    break;
                  }
                }
              }
            }
            if (undefined !== tmp46) {
              obj.hasAppMarkers = true;
              let obj4 = { dataOffset: tmp46, length: null };
              obj4.length = byteLength.getUint32(length + c6) - (tmp46 - (length + c8));
              let items = [obj4];
              obj.xmpChunks = items;
            }
          }
        }
        let tmp14 = require;
        let obj5 = _mod5520;
        let tmp15 = c7;
        let tmp16 = c5;
        let stringFromDataView = obj5.getStringFromDataView(byteLength, length + c7, c5);
        let tmp19 = stringFromDataView === tEXt;
        if (!tmp19) {
          tmp19 = stringFromDataView === iTXt;
        }
        if (!tmp19) {
          let tmp22 = stringFromDataView === zTXt && flag2;
          tmp19 = tmp22;
        }
        if (tmp19) {
          obj.hasAppMarkers = true;
          let tmp14Result = tmp14(5520);
          let stringFromDataView1 = tmp14Result.getStringFromDataView(byteLength, length + tmp15, tmp16);
          if (!obj.pngTextChunks) {
            obj.pngTextChunks = [];
          }
          let pngTextChunks = obj.pngTextChunks;
          let obj6 = { length: null, type: null, offset: null };
          obj6.length = byteLength.getUint32(length + c6);
          obj6.type = stringFromDataView1;
          obj6.offset = length + c8;
          let arr = pngTextChunks.push(obj6);
        } else {
          let tmp14Result5 = tmp14(5520);
          if (tmp14Result5.getStringFromDataView(byteLength, length + tmp15, tmp16) === eXIf) {
            obj.hasAppMarkers = true;
            obj.tiffHeaderOffset = length + c8;
          } else {
            if (tmp(5523).USE_ICC) {
              if (flag2) {
                let tmp14Result6 = tmp14(5520);
                if (tmp14Result6.getStringFromDataView(byteLength, length + tmp15, tmp16) === iCCP) {
                  obj.hasAppMarkers = true;
                  let sum4 = length + c8;
                  let uint32 = byteLength.getUint32(length + c6);
                  let tmp14Result7 = tmp14(5520);
                  let nullTerminatedStringFromDataView = tmp14Result7.getNullTerminatedStringFromDataView(byteLength, sum4);
                  let sum5 = sum4 + (nullTerminatedStringFromDataView.length + 1);
                  let uint8 = byteLength.getUint8(sum5);
                  if (!obj.iccChunks) {
                    obj.iccChunks = [];
                  }
                  let sum6 = sum5 + 1;
                  let iccChunks = obj.iccChunks;
                  let obj7 = { offset: sum6, length: uint32 - (sum6 - sum4), chunkNumber: 1, chunksTotal: 1, profileName: nullTerminatedStringFromDataView, compressionMethod: uint8 };
                  let arr2 = iccChunks.push(obj7);
                }
              }
            }
            let items1 = [pHYs, ];
            items1[1] = tIME;
            let tmp14Result8 = tmp14(5520);
            if (items1.includes(tmp14Result8.getStringFromDataView(byteLength, length + tmp15, tmp16))) {
              obj.hasAppMarkers = true;
              if (!obj.pngChunkOffsets) {
                obj.pngChunkOffsets = [];
              }
              let pngChunkOffsets = obj.pngChunkOffsets;
              let arr3 = pngChunkOffsets.push(length + c6);
            }
          }
        }
      }
    }
    return obj;
  }
};
export const PNG_CHUNK_TYPE_SIZE = 4;
export const PNG_CHUNK_LENGTH_OFFSET = 0;
export const PNG_CHUNK_TYPE_OFFSET = 4;
export const PNG_CHUNK_DATA_OFFSET = 8;
export const TYPE_TEXT = "tEXt";
export const TYPE_ITXT = "iTXt";
export const TYPE_ZTXT = "zTXt";
export const TYPE_PHYS = "pHYs";
export const TYPE_TIME = "tIME";
export const TYPE_EXIF = "eXIf";
export const TYPE_ICCP = "iCCP";
