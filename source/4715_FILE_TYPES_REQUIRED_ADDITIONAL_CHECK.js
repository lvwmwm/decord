// Module ID: 4715
// Function ID: 40978
// Name: FILE_TYPES_REQUIRED_ADDITIONAL_CHECK
// Dependencies: []

// Module 4715 (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
const tmp2 = () => {
  class FileTypes {
    constructor() {
      tmp = closure_2(this, FileTypes);
      return;
    }
  }
  const require = FileTypes;
  let obj = {
    key: "getInfoByName",
    value: function getInfoByName(key10027) {
      return FileTypes(closure_1[2]).fetchFromObject(FileTypes, key10027.toUpperCase());
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getSignaturesByName",
    value: function getSignaturesByName(item10070) {
      return FileTypes(closure_1[2]).fetchFromObject(FileTypes, item10070.toUpperCase()).signatures;
    }
  };
  items[1] = obj;
  obj = {
    key: "detectSignature",
    value: function detectSignature(fileChunk, items1) {
      const iter = items1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp17 = nextResult;
        let flag = true;
        let offset = nextResult.offset;
        let num = offset;
        if (!offset) {
          num = 0;
        }
        let num2 = 0;
        let num3 = 0;
        let tmp3 = nextResult;
        if (0 < tmp17.sequence.length) {
          while (true) {
            let tmp4 = nextResult;
            if (tmp17.skippedBytes) {
              let tmp5 = nextResult;
              let skippedBytes = tmp17.skippedBytes;
              let tmp6 = num3;
              if (skippedBytes.includes(num3)) {
                let tmp12 = num2;
                num2 = num2 + 1;
                let tmp13 = num3;
                let sum = num3 + 1;
                num3 = sum;
                let tmp15 = nextResult;
              }
            }
            let tmp7 = fileChunk;
            let tmp8 = num;
            let tmp9 = num3;
            let tmp10 = nextResult;
            let tmp11 = num2;
            if (fileChunk[tmp2 + num3] !== tmp17.sequence[num3 - num2]) {
              break;
            }
          }
          flag = false;
        }
        let tmp16 = flag;
        if (flag) {
          iter.return();
          return nextResult;
        } else {
          // continue
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "detectTypeByAdditionalCheck",
    value: function detectTypeByAdditionalCheck(fileChunk, found) {
      const mapped = found.map((extension) => extension.extension);
      if (mapped.some((arg0) => {
        const items = [];
        return items.includes(arg0);
      })) {
        let str5 = "heic";
        if (!mapped.includes("heic")) {
          let str6 = "flv";
          if (!FileTypes(closure_1[3]).isFLV(fileChunk)) {
            let str8 = "mp4";
            if (FileTypes(closure_1[3]).isM4V(fileChunk)) {
              str8 = "mp4";
              if (!FileTypes(closure_1[3]).isHEIC(fileChunk)) {
                str8 = "m4v";
              }
            }
            str6 = str8;
          }
          str5 = str6;
        }
        return str5;
      } else if (mapped.some((arg0) => {
        const items = [];
        return items.includes(arg0);
      })) {
        const result = FileTypes(closure_1[2]).findMatroskaDocTypeElements(fileChunk);
        let str2 = "mkv";
        if ("mkv" !== result) {
          let str4;
          if ("webm" === result) {
            if (FileTypes(closure_1[3]).isWEBM(fileChunk)) {
              str4 = "webm";
            }
          }
          str2 = str4;
        }
        return str2;
      } else {
        let str;
        if (mapped.some((arg0) => {
          const items = [];
          return items.includes(arg0);
        })) {
          if (FileTypes(closure_1[2]).isAvifStringIncluded(fileChunk)) {
            str = "avif";
          }
        }
        return str;
      }
    }
  };
  items[4] = {
    key: "detectbBySignatures",
    value: function detectbBySignatures(fileChunk, signaturesByName) {
      const iter = signaturesByName[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp22 = nextResult;
        let num3 = 0;
        let flag = true;
        let offset = nextResult.offset;
        let num = offset;
        if (!offset) {
          num = 0;
        }
        let tmp3 = nextResult;
        let skippedBytes;
        let tmp2 = num;
        if (null != tmp22) {
          let tmp5 = nextResult;
          skippedBytes = tmp22.skippedBytes;
        }
        let tmp6 = nextResult;
        let length = tmp22.sequence.length;
        if (skippedBytes) {
          let sum = length + tmp22.skippedBytes.length;
        } else {
          sum = length;
        }
        let num2 = 0;
        if (0 < sum) {
          while (true) {
            let tmp9 = nextResult;
            if (tmp22.skippedBytes) {
              let tmp10 = nextResult;
              skippedBytes = tmp22.skippedBytes;
              let tmp11 = num2;
              if (skippedBytes.includes(num2)) {
                let tmp17 = num3;
                num3 = num3 + 1;
                let tmp18 = num2;
                let sum1 = num2 + 1;
                num2 = sum1;
                let tmp20 = sum;
              }
            }
            let tmp12 = fileChunk;
            let tmp13 = num;
            let tmp14 = num2;
            let tmp15 = nextResult;
            let tmp16 = num3;
            if (fileChunk[tmp2 + num2] !== tmp22.sequence[num2 - num3]) {
              break;
            }
          }
          flag = false;
        }
        let tmp21 = flag;
        if (flag) {
          iter.return();
          return nextResult;
        } else {
          // continue
        }
      }
    }
  };
  items[5] = {
    key: "checkByFileType",
    value: function checkByFileType(fileChunk, avif) {
      if (hasOwnProperty.call(FileTypes, avif.toUpperCase())) {
        if (FileTypes.detectSignature(fileChunk, FileTypes.getSignaturesByName(avif.toUpperCase()))) {
          return true;
        }
      }
      return false;
    }
  };
  return callback(FileTypes, null, items);
}();
tmp2.AAC = require(dependencyMap[4]).AudioTypes.AAC;
tmp2.AMR = require(dependencyMap[4]).AudioTypes.AMR;
tmp2.FLAC = require(dependencyMap[4]).AudioTypes.FLAC;
tmp2.M4A = require(dependencyMap[4]).AudioTypes.M4A;
tmp2.MP3 = require(dependencyMap[4]).AudioTypes.MP3;
tmp2.WAV = require(dependencyMap[4]).AudioTypes.WAV;
tmp2.AVIF = require(dependencyMap[5]).ImageTypes.AVIF;
tmp2.BMP = require(dependencyMap[5]).ImageTypes.BMP;
tmp2.BPG = require(dependencyMap[5]).ImageTypes.BPG;
tmp2.CR2 = require(dependencyMap[5]).ImageTypes.CR2;
tmp2.EXR = require(dependencyMap[5]).ImageTypes.EXR;
tmp2.GIF = require(dependencyMap[5]).ImageTypes.GIF;
tmp2.ICO = require(dependencyMap[5]).ImageTypes.ICO;
tmp2.JPEG = require(dependencyMap[5]).ImageTypes.JPEG;
tmp2.PBM = require(dependencyMap[5]).ImageTypes.PBM;
tmp2.PGM = require(dependencyMap[5]).ImageTypes.PGM;
tmp2.PNG = require(dependencyMap[5]).ImageTypes.PNG;
tmp2.PPM = require(dependencyMap[5]).ImageTypes.PPM;
tmp2.PSD = require(dependencyMap[5]).ImageTypes.PSD;
tmp2.WEBP = require(dependencyMap[5]).ImageTypes.WEBP;
tmp2.HEIC = require(dependencyMap[5]).ImageTypes.HEIC;
tmp2.AVI = require(dependencyMap[6]).VideoTypes.AVI;
tmp2.FLV = require(dependencyMap[6]).VideoTypes.FLV;
tmp2.M4V = require(dependencyMap[6]).VideoTypes.M4V;
tmp2.MKV = require(dependencyMap[6]).VideoTypes.MKV;
tmp2.MOV = require(dependencyMap[6]).VideoTypes.MOV;
tmp2.MP4 = require(dependencyMap[6]).VideoTypes.MP4;
tmp2.OGG = require(dependencyMap[6]).VideoTypes.OGG;
tmp2.SWF = require(dependencyMap[6]).VideoTypes.SWF;
tmp2.WEBM = require(dependencyMap[6]).VideoTypes.WEBM;
tmp2._7Z = require(dependencyMap[7]).CompressedTypes._7Z;
tmp2.LZH = require(dependencyMap[7]).CompressedTypes.LZH;
tmp2.RAR = require(dependencyMap[7]).CompressedTypes.RAR;
tmp2.ZIP = require(dependencyMap[7]).CompressedTypes.ZIP;
tmp2.BLEND = require(dependencyMap[8]).OtherTypes.BLEND;
tmp2.DOC = require(dependencyMap[8]).OtherTypes.DOC;
tmp2.ELF = require(dependencyMap[8]).OtherTypes.ELF;
tmp2.EXE = require(dependencyMap[8]).OtherTypes.EXE;
tmp2.INDD = require(dependencyMap[8]).OtherTypes.INDD;
tmp2.MACHO = require(dependencyMap[8]).OtherTypes.MACHO;
tmp2.ORC = require(dependencyMap[8]).OtherTypes.ORC;
tmp2.PARQUET = require(dependencyMap[8]).OtherTypes.PARQUET;
tmp2.PCAP = require(dependencyMap[8]).OtherTypes.PCAP;
tmp2.PDF = require(dependencyMap[8]).OtherTypes.PDF;
tmp2.PS = require(dependencyMap[8]).OtherTypes.PS;
tmp2.RTF = require(dependencyMap[8]).OtherTypes.RTF;
tmp2.SQLITE = require(dependencyMap[8]).OtherTypes.SQLITE;
tmp2.STL = require(dependencyMap[8]).OtherTypes.STL;
tmp2.TTF = require(dependencyMap[8]).OtherTypes.TTF;

export const FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = [];
export const FileTypes = tmp2;
