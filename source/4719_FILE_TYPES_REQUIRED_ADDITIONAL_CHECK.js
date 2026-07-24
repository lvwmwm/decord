// Module ID: 4719
// Function ID: 41057
// Name: FILE_TYPES_REQUIRED_ADDITIONAL_CHECK
// Dependencies: [6, 7, 4717, 4720, 4726, 4727, 4728, 4729, 4730]

// Module 4719 (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK)
import _classCallCheck from "VideoTypes";
import _defineProperties from "CompressedTypes";

let tmp2 = (() => {
  class FileTypes {
    constructor() {
      tmp = outer1_2(this, FileTypes);
      return;
    }
  }
  let obj = {
    key: "getInfoByName",
    value: function getInfoByName(key10027) {
      return FileTypes(outer1_1[2]).fetchFromObject(FileTypes, key10027.toUpperCase());
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getSignaturesByName",
    value: function getSignaturesByName(item10070) {
      return FileTypes(outer1_1[2]).fetchFromObject(FileTypes, item10070.toUpperCase()).signatures;
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
          do {
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
          } while (fileChunk[tmp2 + num3] === tmp17.sequence[num3 - num2]);
          flag = false;
        }
        let tmp16 = flag;
        if (flag) {
          iter.return();
          return nextResult;
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
        const items = ["m4v", "flv", "mp4", "heic"];
        return items.includes(arg0);
      })) {
        let str5 = "heic";
        if (!mapped.includes("heic")) {
          let str6 = "flv";
          if (!FileTypes(outer1_1[3]).isFLV(fileChunk)) {
            let str8 = "mp4";
            if (FileTypes(outer1_1[3]).isM4V(fileChunk)) {
              str8 = "mp4";
              if (!FileTypes(outer1_1[3]).isHEIC(fileChunk)) {
                str8 = "m4v";
              }
            }
            str6 = str8;
          }
          str5 = str6;
        }
        return str5;
      } else if (mapped.some((arg0) => {
        const items = ["mkv", "webm"];
        return items.includes(arg0);
      })) {
        const result = FileTypes(outer1_1[2]).findMatroskaDocTypeElements(fileChunk);
        let str2 = "mkv";
        if ("mkv" !== result) {
          let str4;
          if ("webm" === result) {
            if (FileTypes(outer1_1[3]).isWEBM(fileChunk)) {
              str4 = "webm";
            }
          }
          str2 = str4;
        }
        return str2;
      } else {
        let str;
        if (mapped.some((arg0) => {
          const items = ["avif"];
          return items.includes(arg0);
        })) {
          if (FileTypes(outer1_1[2]).isAvifStringIncluded(fileChunk)) {
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
          do {
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
          } while (fileChunk[tmp2 + num2] === tmp22.sequence[num2 - num3]);
          flag = false;
        }
        let tmp21 = flag;
        if (flag) {
          iter.return();
          return nextResult;
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
  return _defineProperties(FileTypes, null, items);
})();
tmp2.AAC = require("AudioTypes").AudioTypes.AAC;
tmp2.AMR = require("AudioTypes").AudioTypes.AMR;
tmp2.FLAC = require("AudioTypes").AudioTypes.FLAC;
tmp2.M4A = require("AudioTypes").AudioTypes.M4A;
tmp2.MP3 = require("AudioTypes").AudioTypes.MP3;
tmp2.WAV = require("AudioTypes").AudioTypes.WAV;
tmp2.AVIF = require("ImageTypes").ImageTypes.AVIF;
tmp2.BMP = require("ImageTypes").ImageTypes.BMP;
tmp2.BPG = require("ImageTypes").ImageTypes.BPG;
tmp2.CR2 = require("ImageTypes").ImageTypes.CR2;
tmp2.EXR = require("ImageTypes").ImageTypes.EXR;
tmp2.GIF = require("ImageTypes").ImageTypes.GIF;
tmp2.ICO = require("ImageTypes").ImageTypes.ICO;
tmp2.JPEG = require("ImageTypes").ImageTypes.JPEG;
tmp2.PBM = require("ImageTypes").ImageTypes.PBM;
tmp2.PGM = require("ImageTypes").ImageTypes.PGM;
tmp2.PNG = require("ImageTypes").ImageTypes.PNG;
tmp2.PPM = require("ImageTypes").ImageTypes.PPM;
tmp2.PSD = require("ImageTypes").ImageTypes.PSD;
tmp2.WEBP = require("ImageTypes").ImageTypes.WEBP;
tmp2.HEIC = require("ImageTypes").ImageTypes.HEIC;
tmp2.AVI = require("VideoTypes").VideoTypes.AVI;
tmp2.FLV = require("VideoTypes").VideoTypes.FLV;
tmp2.M4V = require("VideoTypes").VideoTypes.M4V;
tmp2.MKV = require("VideoTypes").VideoTypes.MKV;
tmp2.MOV = require("VideoTypes").VideoTypes.MOV;
tmp2.MP4 = require("VideoTypes").VideoTypes.MP4;
tmp2.OGG = require("VideoTypes").VideoTypes.OGG;
tmp2.SWF = require("VideoTypes").VideoTypes.SWF;
tmp2.WEBM = require("VideoTypes").VideoTypes.WEBM;
tmp2._7Z = require("CompressedTypes").CompressedTypes._7Z;
tmp2.LZH = require("CompressedTypes").CompressedTypes.LZH;
tmp2.RAR = require("CompressedTypes").CompressedTypes.RAR;
tmp2.ZIP = require("CompressedTypes").CompressedTypes.ZIP;
tmp2.BLEND = require("OtherTypes").OtherTypes.BLEND;
tmp2.DOC = require("OtherTypes").OtherTypes.DOC;
tmp2.ELF = require("OtherTypes").OtherTypes.ELF;
tmp2.EXE = require("OtherTypes").OtherTypes.EXE;
tmp2.INDD = require("OtherTypes").OtherTypes.INDD;
tmp2.MACHO = require("OtherTypes").OtherTypes.MACHO;
tmp2.ORC = require("OtherTypes").OtherTypes.ORC;
tmp2.PARQUET = require("OtherTypes").OtherTypes.PARQUET;
tmp2.PCAP = require("OtherTypes").OtherTypes.PCAP;
tmp2.PDF = require("OtherTypes").OtherTypes.PDF;
tmp2.PS = require("OtherTypes").OtherTypes.PS;
tmp2.RTF = require("OtherTypes").OtherTypes.RTF;
tmp2.SQLITE = require("OtherTypes").OtherTypes.SQLITE;
tmp2.STL = require("OtherTypes").OtherTypes.STL;
tmp2.TTF = require("OtherTypes").OtherTypes.TTF;

export const FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
export const FileTypes = tmp2;
