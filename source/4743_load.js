// Module ID: 4743
// Function ID: 41184
// Name: load
// Dependencies: [4744, 4745, 4746, 4747, 4748, 4761, 4763, 4764, 4776, 4780, 4784, 4786, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4770]
// Exports: load

// Module 4743 (load)
let require = arg1;
function load(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    if ("string" === typeof arg0) {
      obj.async = true;
      let nextPromise = (function loadFile(arg0, arg1) {
        let obj = /^\w+:\/\//;
        if (obj.test(arg0)) {
          let _fetch = fetch;
          if ("undefined" !== typeof fetch) {
            let tmp5 = (function fetchRemoteFile(arg0, arg1) {
              if (arguments.length > 1) {
                const length = {}.length;
                let obj = { method: "GET" };
                const _Number = Number;
                let isIntegerResult = Number.isInteger(length);
                if (isIntegerResult) {
                  isIntegerResult = length >= 0;
                }
                if (isIntegerResult) {
                  obj = { range: `bytes=0-${length - 1}` };
                  obj.headers = obj;
                }
                const _fetch = fetch;
                const response = fetch(arg0, obj);
                return response.then((arrayBuffer) => arrayBuffer.arrayBuffer());
              }
            })(arg0, arg1);
          } else {
            tmp5 = (function nodeGetRemoteFile(arg0, arg1) {
              let closure_0 = arg0;
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  let obj = {};
                  let isIntegerResult = Number.isInteger(closure_1);
                  if (isIntegerResult) {
                    isIntegerResult = closure_1 >= 0;
                  }
                  if (isIntegerResult) {
                    obj = { range: `bytes=0-${closure_1 - 1}` };
                    obj.headers = obj;
                  }
                  if (obj3.test(closure_0)) {
                    let get = __non_webpack_require__("https").get;
                  } else {
                    get = __non_webpack_require__("http").get;
                  }
                  const value = get(closure_0, obj, (statusCode) => {
                    if (statusCode.statusCode >= 200) {
                      if (statusCode.statusCode <= 299) {
                        let closure_0 = [];
                        statusCode.on("data", () => { ... });
                        statusCode.on("error", () => { ... });
                        statusCode.on("end", () => { ... });
                      }
                    }
                    callback("Could not fetch file: " + statusCode.statusCode + " " + statusCode.statusMessage);
                    statusCode.resume();
                  });
                  value.on("error", (arg0) => callback(arg0));
                });
                return promise;
              }
            })(arg0, arg1);
          }
          return tmp5;
        } else {
          if (obj2.test(arg0)) {
            return Promise.resolve(obj(outer1_2[1]).dataUriToBuffer(arg0));
          } else {
            return (function loadLocalFile(arg0, arg1) {
              let closure_0 = arg0;
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  const result = globalThis.__non_webpack_require__("fs");
                  let closure_2 = result;
                  result.open(closure_0, (arg0, arg1) => {
                    let closure_0 = arg1;
                    if (arg0) {
                      callback(arg0);
                    } else {
                      closure_2.stat(closure_0, () => { ... });
                    }
                  });
                });
                return promise;
              }
            })(arg0, arg1);
          }
          obj2 = /^data:[^;,]*(;base64)?,/;
        }
      })(arg0, obj).then((arg0) => outer1_3(arg0, obj));
      const promise2 = (function loadFile(arg0, arg1) {
        let obj = /^\w+:\/\//;
        if (obj.test(arg0)) {
          let _fetch = fetch;
          if ("undefined" !== typeof fetch) {
            let tmp5 = (function fetchRemoteFile(arg0, arg1) {
              if (arguments.length > 1) {
                const length = {}.length;
                let obj = { method: "GET" };
                const _Number = Number;
                let isIntegerResult = Number.isInteger(length);
                if (isIntegerResult) {
                  isIntegerResult = length >= 0;
                }
                if (isIntegerResult) {
                  obj = { range: `bytes=0-${length - 1}` };
                  obj.headers = obj;
                }
                const _fetch = fetch;
                const response = fetch(arg0, obj);
                return response.then((arrayBuffer) => arrayBuffer.arrayBuffer());
              }
            })(arg0, arg1);
          } else {
            tmp5 = (function nodeGetRemoteFile(arg0, arg1) {
              let closure_0 = arg0;
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  let obj = {};
                  let isIntegerResult = Number.isInteger(closure_1);
                  if (isIntegerResult) {
                    isIntegerResult = closure_1 >= 0;
                  }
                  if (isIntegerResult) {
                    obj = { range: `bytes=0-${closure_1 - 1}` };
                    obj.headers = obj;
                  }
                  if (obj3.test(closure_0)) {
                    let get = __non_webpack_require__("https").get;
                  } else {
                    get = __non_webpack_require__("http").get;
                  }
                  const value = get(closure_0, obj, (statusCode) => {
                    if (statusCode.statusCode >= 200) {
                      if (statusCode.statusCode <= 299) {
                        let closure_0 = [];
                        statusCode.on("data", () => { ... });
                        statusCode.on("error", () => { ... });
                        statusCode.on("end", () => { ... });
                      }
                    }
                    callback("Could not fetch file: " + statusCode.statusCode + " " + statusCode.statusMessage);
                    statusCode.resume();
                  });
                  value.on("error", (arg0) => callback(arg0));
                });
                return promise;
              }
            })(arg0, arg1);
          }
          return tmp5;
        } else {
          if (obj2.test(arg0)) {
            return Promise.resolve(obj(outer1_2[1]).dataUriToBuffer(arg0));
          } else {
            return (function loadLocalFile(arg0, arg1) {
              let closure_0 = arg0;
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  const result = globalThis.__non_webpack_require__("fs");
                  let closure_2 = result;
                  result.open(closure_0, (arg0, arg1) => {
                    let closure_0 = arg1;
                    if (arg0) {
                      callback(arg0);
                    } else {
                      closure_2.stat(closure_0, () => { ... });
                    }
                  });
                });
                return promise;
              }
            })(arg0, arg1);
          }
          obj2 = /^data:[^;,]*(;base64)?,/;
        }
      })(arg0, obj);
    } else {
      const _File = File;
      let tmp2 = "undefined" !== typeof File;
      if (tmp2) {
        const _File2 = File;
        tmp2 = arg0 instanceof File;
      }
      if (tmp2) {
        obj.async = true;
        nextPromise = (function loadFileObject(arg0) {
          let closure_0 = arg0;
          return new Promise((closure_0) => {
            let closure_1 = arg1;
            const fileReader = new FileReader();
            fileReader.onload = (target) => callback(target.target.result);
            fileReader.onerror = () => callback2(fileReader.error);
            const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
          });
        })(arg0).then((arg0) => outer1_3(arg0, obj));
        let promise = (function loadFileObject(arg0) {
          let closure_0 = arg0;
          return new Promise((closure_0) => {
            let closure_1 = arg1;
            const fileReader = new FileReader();
            fileReader.onload = (target) => callback(target.target.result);
            fileReader.onerror = () => callback2(fileReader.error);
            const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
          });
        })(arg0);
      } else {
        nextPromise = loadFromData(arg0, obj);
      }
    }
    return nextPromise;
  }
  obj = {};
}
function loadFromData(arg0, arg1) {
  while (true) {
    let buffer = arg0;
    if (!tmp) {
      break;
    } else {
      let tmp2 = globalThis;
      let _Uint8Array = Uint8Array;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let tmp5 = arg0;
      let uint8Array = new Uint8Array(arg0);
      let tmp7 = uint8Array;
      buffer = uint8Array.buffer;
      break;
    }
    let tmp9 = buffer;
    let tmp10 = globalThis;
    let _DataView = DataView;
    let tmp11 = buffer;
    let tmp12 = new.target;
    let tmp13 = new.target;
    let tmp8 = loadView;
    let tmp14 = arg1;
    let tmp8Result = tmp8(new DataView(buffer), arg1);
  }
}
function loadView(byteLength) {
  let byteOrder;
  let fileDataOffset;
  let fileType;
  let gifHeaderOffset;
  let iccChunks;
  let iptcDataOffset;
  let jfifDataOffset;
  let mpfDataOffset;
  let pngChunkOffsets;
  let pngHeaderOffset;
  let pngTextChunks;
  let tags;
  let tiffHeaderOffset;
  let vp8xChunkOffset;
  let xmpChunks;
  function addIccTags(readResult7) {
    if (tmp3) {
      closure_1.icc = readResult7;
    } else {
      closure_1 = tmp3(addPngTextTags[1]).objectAssign({}, closure_1, readResult7);
      const obj = tmp3(addPngTextTags[1]);
    }
  }
  function addPngTextTags(readTags) {
    let obj = readTags;
    if (tmp3) {
      const iter = ["exif", "iptc"][Symbol.iterator]();
      let num2 = 1;
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp43 = nextResult;
        let _HermesInternal = HermesInternal;
        let combined = "__" + nextResult;
        let tmp45 = combined;
        let tmp46 = obj;
        if (!obj[combined]) {
          continue;
        } else {
          let tmp21 = nextResult;
          let tmp20 = closure_1;
          if (closure_1[nextResult]) {
            let tmp25 = tmp3;
            let tmp26 = addPngTextTags;
            let obj5 = tmp3(addPngTextTags[num2]);
            let tmp27 = closure_1;
            let tmp28 = obj;
            let tmp29 = combined;
            let objectAssignResult = obj5.objectAssign({}, closure_1.exif, obj[tmp45]);
          } else {
            let tmp22 = obj;
            let tmp23 = combined;
            objectAssignResult = obj[tmp45];
          }
          tmp20[tmp21] = objectAssignResult;
          tmp21 = obj;
          let tmp30 = combined;
          delete tmp3[tmp2];
        }
      }
      if (closure_1.png) {
        objectAssignResult = tmp3(addPngTextTags[num2]).objectAssign({}, closure_1.png, obj);
        const obj6 = tmp3(addPngTextTags[num2]);
      } else {
        objectAssignResult = obj;
      }
      closure_1.png = objectAssignResult;
      if (closure_1.pngText) {
        num2 = tmp3(addPngTextTags[num2]);
        obj = {};
        let objectAssignResult1 = num2.objectAssign(obj, closure_1.png, obj);
        const tmp42 = obj;
      } else {
        objectAssignResult1 = obj;
      }
      closure_1.pngText = objectAssignResult1;
      const tmp31 = closure_1;
      const tmp37 = closure_1;
    } else {
      const obj2 = tmp3(addPngTextTags[1]);
      if (obj.__exif) {
        let __exif = obj.__exif;
      } else {
        __exif = {};
      }
      if (obj.__iptc) {
        let __iptc = obj.__iptc;
      } else {
        __iptc = {};
      }
      closure_1 = obj2.objectAssign({}, tmp6, __exif, __iptc, obj);
      delete tmp.__exif;
      delete tmp.__iptc;
    }
  }
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const expanded = obj.expanded;
    const require = tmp3;
    const async = obj.async;
    const includeUnknown = obj.includeUnknown;
    const domParser = obj.domParser;
    let importDefault = {};
    const items = [];
    let obj1 = importDefault(addPngTextTags[3]);
    ({ fileType, fileDataOffset, jfifDataOffset, tiffHeaderOffset, iptcDataOffset, xmpChunks, iccChunks, mpfDataOffset, pngHeaderOffset, pngTextChunks, pngChunkOffsets, vp8xChunkOffset, gifHeaderOffset } = obj1.parseAppMarkers(byteLength, undefined !== async && async));
    let flag = false;
    if (importDefault(addPngTextTags[4]).USE_JPEG) {
      flag = false;
      if (importDefault(addPngTextTags[4]).USE_FILE) {
        flag = false;
        if (undefined !== fileDataOffset) {
          let obj2 = importDefault(addPngTextTags[5]);
          const readResult = obj2.read(byteLength, fileDataOffset);
          if (tmp3) {
            importDefault.file = readResult;
            flag = true;
          } else {
            importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult);
            flag = true;
            const obj4 = require(addPngTextTags[1]);
          }
        }
      }
    }
    let flag2 = flag;
    if (importDefault(addPngTextTags[4]).USE_JPEG) {
      flag2 = flag;
      if (importDefault(addPngTextTags[4]).USE_JFIF) {
        flag2 = flag;
        if (undefined !== jfifDataOffset) {
          const readResult1 = importDefault(addPngTextTags[6]).read(byteLength, jfifDataOffset);
          if (tmp3) {
            importDefault.jfif = readResult1;
            flag2 = true;
          } else {
            importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult1);
            flag2 = true;
            let obj6 = require(addPngTextTags[1]);
          }
          let obj5 = importDefault(addPngTextTags[6]);
        }
      }
    }
    let flag3 = flag2;
    if (importDefault(addPngTextTags[4]).USE_EXIF) {
      flag3 = flag2;
      if (undefined !== tiffHeaderOffset) {
        let readResult2 = importDefault;
        readResult2 = addPngTextTags;
        readResult2 = importDefault(addPngTextTags[7]).read(byteLength, tiffHeaderOffset, tmp5);
        ({ tags, byteOrder } = readResult2);
        if (tags.Thumbnail) {
          importDefault.Thumbnail = tags.Thumbnail;
          delete tmp.Thumbnail;
        }
        if (tmp3) {
          importDefault.exif = tags;
          if (importDefault.exif) {
            if (tmp38.exif.GPSLatitude) {
              if (tmp38.exif.GPSLatitudeRef) {
                const gps = tmp38.gps;
                obj = gps;
                if (!gps) {
                  obj = {};
                }
                tmp38.gps = obj;
                tmp38.gps.Latitude = require(addPngTextTags[22]).getCalculatedGpsValue(tmp38.exif.GPSLatitude.value);
                let value = tmp38.exif.GPSLatitudeRef.value;
                if ("S" === value.join("")) {
                  tmp38.gps.Latitude = -tmp38.gps.Latitude;
                }
                const obj9 = require(addPngTextTags[22]);
              }
            }
            while (true) {
              let tmp46 = tmp37;
              if (!tmp38.exif.GPSLongitude) {
                break;
              } else {
                let tmp47 = tmp37;
                if (!tmp38.exif.GPSLongitudeRef) {
                  break;
                } else {
                  let tmp48 = tmp37;
                  let gps2 = tmp38.gps;
                  obj = gps2;
                  if (!gps2) {
                    obj = {};
                  }
                  tmp38.gps = obj;
                  let tmp49 = tmp37;
                  let tmp50 = require;
                  let tmp51 = addPngTextTags;
                  let num6 = 22;
                  let obj11 = require(addPngTextTags[22]);
                  tmp38.gps.Longitude = obj11.getCalculatedGpsValue(tmp38.exif.GPSLongitude.value);
                  value = tmp38.exif.GPSLongitudeRef.value;
                  let str3 = "";
                  let str4 = "W";
                  if ("W" === value.join("")) {
                    let tmp52 = tmp37;
                    tmp38.gps.Longitude = -tmp38.gps.Longitude;
                  }
                  break;
                }
              }
              while (true) {
                let tmp53 = tmp37;
                if (!tmp38.exif.GPSAltitude) {
                  break;
                } else {
                  let tmp54 = tmp37;
                  if (!tmp38.exif.GPSAltitudeRef) {
                    break;
                  } else {
                    let tmp55 = tmp37;
                    let gps3 = tmp38.gps;
                    obj1 = gps3;
                    if (!gps3) {
                      obj1 = {};
                    }
                    tmp38.gps = obj1;
                    let tmp56 = tmp37;
                    let num7 = 0;
                    tmp38.gps.Altitude = tmp38.exif.GPSAltitude.value[0] / tmp38.exif.GPSAltitude.value[1];
                    if (1 === tmp38.exif.GPSAltitudeRef.value) {
                      tmp37.gps.Altitude = -tmp37.gps.Altitude;
                    }
                    break;
                  }
                }
                break;
              }
            }
          }
        } else {
          importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, tags);
          const obj7 = require(addPngTextTags[1]);
        }
        while (true) {
          let tmp57 = importDefault;
          let tmp58 = addPngTextTags;
          if (!importDefault(addPngTextTags[4]).USE_TIFF) {
            break;
          } else {
            let tmp59 = importDefault;
            let tmp60 = addPngTextTags;
            if (!importDefault(addPngTextTags[4]).USE_IPTC) {
              break;
            } else if (!tags["IPTC-NAA"]) {
              break;
            } else {
              let tmp61 = hasIptcData;
              if (hasIptcData(iptcDataOffset)) {
                break;
              } else {
                let tmp62 = importDefault;
                let tmp63 = addPngTextTags;
                let num8 = 8;
                let obj13 = importDefault(addPngTextTags[8]);
                let num9 = 0;
                let readResult3 = obj13.read(tags["IPTC-NAA"].value, 0, tmp5);
                if (tmp3) {
                  let tmp68 = importDefault;
                  importDefault.iptc = readResult3;
                  break;
                } else {
                  let tmp65 = require;
                  let tmp66 = addPngTextTags;
                  let obj14 = require(addPngTextTags[1]);
                  let tmp67 = importDefault;
                  importDefault = obj14.objectAssign({}, importDefault, readResult3);
                  break;
                }
                break;
              }
            }
          }
          let tmp69 = importDefault;
          let tmp70 = addPngTextTags;
          if (importDefault(addPngTextTags[4]).USE_TIFF) {
            let tmp71 = importDefault;
            let tmp72 = addPngTextTags;
            if (importDefault(addPngTextTags[4]).USE_XMP) {
              if (tags.ApplicationNotes) {
                let tmp73 = hasXmpData;
                if (!hasXmpData(xmpChunks)) {
                  let tmp74 = importDefault;
                  let tmp75 = addPngTextTags;
                  let num10 = 9;
                  let obj15 = importDefault(addPngTextTags[9]);
                  let tmp76 = require;
                  let obj16 = require(addPngTextTags[1]);
                  let readResult4 = obj15.read(obj16.getStringValueFromArray(tags.ApplicationNotes.value), undefined, tmp6);
                  if (tmp3) {
                    let tmp81 = importDefault;
                    importDefault.xmp = readResult4;
                  } else {
                    delete tmp2._raw;
                    let tmp78 = require;
                    let tmp79 = addPngTextTags;
                    let obj17 = require(addPngTextTags[1]);
                    let tmp80 = importDefault;
                    importDefault = obj17.objectAssign({}, importDefault, readResult4);
                  }
                }
              }
            }
          }
          let tmp82 = importDefault;
          let tmp83 = addPngTextTags;
          if (importDefault(addPngTextTags[4]).USE_PHOTOSHOP) {
            if (tags.ImageSourceData) {
              if (tags.PhotoshopSettings) {
                let tmp84 = importDefault;
                let tmp85 = addPngTextTags;
                let num11 = 10;
                let obj18 = importDefault(addPngTextTags[10]);
                let readResult5 = obj18.read(tags.PhotoshopSettings.value, tmp5);
                if (tmp3) {
                  let tmp90 = importDefault;
                  importDefault.photoshop = readResult5;
                } else {
                  let tmp87 = require;
                  let tmp88 = addPngTextTags;
                  let obj19 = require(addPngTextTags[1]);
                  let tmp89 = importDefault;
                  importDefault = obj19.objectAssign({}, importDefault, readResult5);
                }
              }
            }
          }
          let tmp91 = importDefault;
          let tmp92 = addPngTextTags;
          if (importDefault(addPngTextTags[4]).USE_TIFF) {
            let tmp93 = importDefault;
            let tmp94 = addPngTextTags;
            if (importDefault(addPngTextTags[4]).USE_ICC) {
              if (tags.ICC_Profile) {
                let tmp95 = hasIccData;
                if (!hasIccData(iccChunks)) {
                  let tmp96 = importDefault;
                  let tmp97 = addPngTextTags;
                  let num12 = 11;
                  let obj20 = importDefault(addPngTextTags[11]);
                  obj2 = { offset: 0, length: tags.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 };
                  let items1 = [obj2];
                  let readResult6 = obj20.read(tags.ICC_Profile.value, items1);
                  if (tmp3) {
                    readResult2 = importDefault;
                    importDefault.icc = readResult6;
                  } else {
                    let tmp99 = require;
                    readResult2 = addPngTextTags;
                    let obj22 = require(addPngTextTags[1]);
                    readResult2 = importDefault;
                    importDefault = obj22.objectAssign({}, importDefault, readResult6);
                  }
                }
              }
            }
          }
          readResult2 = importDefault;
          readResult2 = addPngTextTags;
          if (importDefault(addPngTextTags[4]).USE_MAKER_NOTES) {
            if (tags.MakerNote) {
              let __offset = tags.Make && tags.Make.value;
              if (__offset) {
                readResult2 = globalThis;
                let _Array = Array;
                __offset = Array.isArray(tags.Make.value);
              }
              if (__offset) {
                let num13 = 0;
                let str5 = "Canon";
                __offset = "Canon" === tags.Make.value[0];
              }
              if (__offset) {
                __offset = tags.MakerNote;
              }
              if (__offset) {
                __offset = tags.MakerNote.__offset;
              }
              if (__offset) {
                readResult2 = importDefault;
                readResult2 = addPngTextTags;
                let num16 = 12;
                let obj26 = importDefault(addPngTextTags[12]);
                readResult2 = obj26;
                readResult2 = byteLength;
                readResult2 = tiffHeaderOffset;
                readResult2 = byteOrder;
                readResult2 = tmp5;
                readResult2 = obj26.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, byteOrder, tmp5);
                if (tmp3) {
                  readResult2 = importDefault;
                  importDefault.makerNotes = readResult2;
                } else {
                  readResult2 = require;
                  readResult2 = addPngTextTags;
                  let obj27 = require(addPngTextTags[1]);
                  readResult2 = importDefault;
                  importDefault = obj27.objectAssign({}, importDefault, readResult2);
                }
              } else {
                let str6 = "PENTAX ";
                let length = "PENTAX ".length;
                let __offset2 = tags.MakerNote.value.length > "PENTAX ".length;
                if (__offset2) {
                  readResult2 = require;
                  readResult2 = addPngTextTags;
                  let obj23 = require(addPngTextTags[1]);
                  value = tags.MakerNote.value;
                  let length2 = "PENTAX ".length;
                  let num14 = 0;
                  __offset2 = obj23.getStringValueFromArray(value.slice(0, "PENTAX ".length)) === "PENTAX ";
                }
                if (__offset2) {
                  __offset2 = tags.MakerNote.__offset;
                }
                if (__offset2) {
                  readResult2 = importDefault;
                  readResult2 = addPngTextTags;
                  let num15 = 13;
                  let obj24 = importDefault(addPngTextTags[13]);
                  readResult2 = obj24;
                  readResult2 = byteLength;
                  readResult2 = tiffHeaderOffset;
                  readResult2 = tmp5;
                  readResult2 = obj24.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, tmp5);
                  if (tmp3) {
                    readResult2 = importDefault;
                    importDefault.makerNotes = readResult2;
                  } else {
                    readResult2 = require;
                    readResult2 = addPngTextTags;
                    let obj25 = require(addPngTextTags[1]);
                    readResult2 = importDefault;
                    importDefault = obj25.objectAssign({}, importDefault, readResult2);
                  }
                }
              }
            }
          }
          flag3 = true;
          if (tags.MakerNote) {
            let MakerNote = tags.MakerNote;
            delete tmp.__offset;
            flag3 = true;
          }
        }
        const obj47 = importDefault(addPngTextTags[7]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag4 = flag3;
    if (importDefault(addPngTextTags[4]).USE_JPEG) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      flag4 = flag3;
      if (importDefault(addPngTextTags[4]).USE_IPTC) {
        readResult2 = hasIptcData;
        flag4 = flag3;
        if (hasIptcData(iptcDataOffset)) {
          readResult2 = importDefault;
          readResult2 = addPngTextTags;
          readResult2 = importDefault(addPngTextTags[8]).read(byteLength, iptcDataOffset, tmp5);
          if (tmp3) {
            readResult2 = importDefault;
            importDefault.iptc = readResult2;
            flag4 = true;
          } else {
            readResult2 = require;
            readResult2 = addPngTextTags;
            readResult2 = importDefault;
            importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
            flag4 = true;
            const obj29 = require(addPngTextTags[1]);
          }
          const obj28 = importDefault(addPngTextTags[8]);
        }
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag5 = flag4;
    if (importDefault(addPngTextTags[4]).USE_XMP) {
      readResult2 = hasXmpData;
      flag5 = flag4;
      if (hasXmpData(xmpChunks)) {
        readResult2 = importDefault;
        readResult2 = addPngTextTags;
        readResult2 = importDefault(addPngTextTags[9]).read(byteLength, xmpChunks, tmp6);
        if (tmp3) {
          readResult2 = importDefault;
          importDefault.xmp = readResult2;
          flag5 = true;
        } else {
          delete tmp._raw;
          readResult2 = require;
          readResult2 = addPngTextTags;
          readResult2 = importDefault;
          importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
          flag5 = true;
          const obj31 = require(addPngTextTags[1]);
        }
        const obj30 = importDefault(addPngTextTags[9]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    if (importDefault(addPngTextTags[4]).USE_JPEG) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      let flag6 = flag5;
      if (importDefault(addPngTextTags[4]).USE_ICC) {
        readResult2 = hasIccData;
        flag6 = flag5;
        if (hasIccData(iccChunks)) {
          readResult2 = importDefault;
          readResult2 = addPngTextTags;
          const readResult7 = importDefault(addPngTextTags[11]).read(byteLength, iccChunks, tmp4);
          readResult2 = globalThis;
          if (readResult7 instanceof Promise) {
            readResult2 = items.push(readResult7.then(addIccTags));
            flag6 = true;
          } else {
            readResult2 = addIccTags(readResult7);
            flag6 = true;
          }
          const obj32 = importDefault(addPngTextTags[11]);
        }
      }
    } else {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      flag6 = flag5;
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag7 = flag6;
    if (importDefault(addPngTextTags[4]).USE_MPF) {
      flag7 = flag6;
      if (undefined !== mpfDataOffset) {
        readResult2 = importDefault;
        readResult2 = addPngTextTags;
        readResult2 = importDefault(addPngTextTags[14]).read(byteLength, mpfDataOffset, tmp5);
        if (tmp3) {
          readResult2 = importDefault;
          importDefault.mpf = readResult2;
          flag7 = true;
        } else {
          readResult2 = require;
          readResult2 = addPngTextTags;
          readResult2 = importDefault;
          importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
          flag7 = true;
          const obj34 = require(addPngTextTags[1]);
        }
        const obj33 = importDefault(addPngTextTags[14]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag8 = flag7;
    if (importDefault(addPngTextTags[4]).USE_PNG) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      flag8 = flag7;
      if (importDefault(addPngTextTags[4]).USE_PNG_FILE) {
        flag8 = flag7;
        if (undefined !== pngHeaderOffset) {
          readResult2 = importDefault;
          readResult2 = addPngTextTags;
          readResult2 = importDefault(addPngTextTags[15]).read(byteLength, pngHeaderOffset);
          if (tmp3) {
            readResult2 = importDefault;
            if (importDefault.png) {
              readResult2 = require;
              readResult2 = addPngTextTags;
              readResult2 = importDefault;
              readResult2 = require(addPngTextTags[1]).objectAssign({}, importDefault.png, readResult2);
              const obj36 = require(addPngTextTags[1]);
            }
            readResult2.png = readResult2;
            readResult2 = importDefault;
            importDefault.pngFile = readResult2;
            flag8 = true;
          } else {
            readResult2 = require;
            readResult2 = addPngTextTags;
            readResult2 = importDefault;
            importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
            flag8 = true;
            const obj35 = require(addPngTextTags[1]);
          }
          const obj48 = importDefault(addPngTextTags[15]);
        }
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag9 = flag8;
    if (importDefault(addPngTextTags[4]).USE_PNG) {
      flag9 = flag8;
      if (undefined !== pngTextChunks) {
        readResult2 = importDefault;
        readResult2 = addPngTextTags;
        const obj37 = importDefault(addPngTextTags[16]);
        readResult2 = obj37;
        readResult2 = byteLength;
        readResult2 = pngTextChunks;
        readResult2 = tmp4;
        readResult2 = tmp5;
        readResult2 = obj37.read(byteLength, pngTextChunks, tmp4, tmp5);
        readResult2 = addPngTextTags(readResult2.readTags);
        flag9 = true;
        if (readResult2.readTagsPromise) {
          readResult2 = items.push(readTagsPromise.then((arr) => arr.forEach(addPngTextTags)));
          flag9 = true;
        }
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag10 = flag9;
    if (importDefault(addPngTextTags[4]).USE_PNG) {
      flag10 = flag9;
      if (undefined !== pngChunkOffsets) {
        readResult2 = importDefault;
        readResult2 = addPngTextTags;
        readResult2 = importDefault(addPngTextTags[17]).read(byteLength, pngChunkOffsets);
        if (tmp3) {
          readResult2 = importDefault;
          if (importDefault.png) {
            readResult2 = require;
            readResult2 = addPngTextTags;
            readResult2 = importDefault;
            readResult2 = require(addPngTextTags[1]).objectAssign({}, importDefault.png, readResult2);
            const obj39 = require(addPngTextTags[1]);
          }
          readResult2.png = readResult2;
          flag10 = true;
        } else {
          readResult2 = require;
          readResult2 = addPngTextTags;
          readResult2 = importDefault;
          importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
          flag10 = true;
          const obj38 = require(addPngTextTags[1]);
        }
        const obj49 = importDefault(addPngTextTags[17]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag11 = flag10;
    if (importDefault(addPngTextTags[4]).USE_WEBP) {
      flag11 = flag10;
      if (undefined !== vp8xChunkOffset) {
        readResult2 = importDefault;
        readResult2 = addPngTextTags;
        readResult2 = importDefault(addPngTextTags[18]).read(byteLength, vp8xChunkOffset);
        if (tmp3) {
          readResult2 = importDefault;
          if (importDefault.riff) {
            readResult2 = require;
            readResult2 = addPngTextTags;
            readResult2 = importDefault;
            readResult2 = require(addPngTextTags[1]).objectAssign({}, importDefault.riff, readResult2);
            const obj41 = require(addPngTextTags[1]);
          }
          readResult2.riff = readResult2;
          flag11 = true;
        } else {
          readResult2 = require;
          readResult2 = addPngTextTags;
          readResult2 = importDefault;
          importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
          flag11 = true;
          const obj40 = require(addPngTextTags[1]);
        }
        const obj50 = importDefault(addPngTextTags[18]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let flag12 = flag11;
    if (importDefault(addPngTextTags[4]).USE_GIF) {
      flag12 = flag11;
      if (undefined !== gifHeaderOffset) {
        readResult2 = importDefault;
        readResult2 = addPngTextTags;
        readResult2 = importDefault(addPngTextTags[19]).read(byteLength, gifHeaderOffset);
        if (tmp3) {
          readResult2 = importDefault;
          if (importDefault.gif) {
            readResult2 = require;
            readResult2 = addPngTextTags;
            readResult2 = importDefault;
            readResult2 = require(addPngTextTags[1]).objectAssign({}, importDefault.gif, readResult2);
            const obj43 = require(addPngTextTags[1]);
          }
          readResult2.gif = readResult2;
          flag12 = true;
        } else {
          readResult2 = require;
          readResult2 = addPngTextTags;
          readResult2 = importDefault;
          importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
          flag12 = true;
          const obj42 = require(addPngTextTags[1]);
        }
        const obj51 = importDefault(addPngTextTags[19]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    const parseAppMarkersResult = obj1.parseAppMarkers(byteLength, undefined !== async && async);
    readResult2 = importDefault;
    readResult2 = importDefault(addPngTextTags[20]).get(importDefault, tmp3);
    if (readResult2) {
      if (tmp3) {
        readResult2 = importDefault;
        importDefault.composite = readResult2;
      } else {
        readResult2 = require;
        readResult2 = addPngTextTags;
        readResult2 = importDefault;
        importDefault = require(addPngTextTags[1]).objectAssign({}, importDefault, readResult2);
        const obj45 = require(addPngTextTags[1]);
      }
    }
    readResult2 = importDefault;
    readResult2 = addPngTextTags;
    let USE_THUMBNAIL = importDefault(addPngTextTags[4]).USE_JPEG;
    if (!USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      USE_THUMBNAIL = importDefault(addPngTextTags[4]).USE_WEBP;
    }
    if (USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      USE_THUMBNAIL = importDefault(addPngTextTags[4]).USE_EXIF;
    }
    if (USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      USE_THUMBNAIL = importDefault(addPngTextTags[4]).USE_THUMBNAIL;
    }
    if (USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      readResult2 = importDefault;
      USE_THUMBNAIL = importDefault(addPngTextTags[21]).get(byteLength, importDefault.Thumbnail, tiffHeaderOffset);
      const obj46 = importDefault(addPngTextTags[21]);
    }
    if (USE_THUMBNAIL) {
      importDefault.Thumbnail = USE_THUMBNAIL;
      flag12 = true;
    } else {
      delete tmp.Thumbnail;
    }
    if (fileType) {
      readResult2 = importDefault;
      if (tmp3) {
        if (!readResult2.file) {
          readResult2 = importDefault;
          importDefault.file = {};
        }
        readResult2 = importDefault;
        importDefault.file.FileType = fileType;
        flag12 = true;
      } else {
        readResult2.FileType = fileType;
        flag12 = true;
      }
    }
    if (flag12) {
      if (tmp4) {
        readResult2 = globalThis;
        readResult2 = Promise.all(items).then(() => closure_1);
        const allPromises = Promise.all(items);
      } else {
        readResult2 = importDefault;
      }
      return readResult2;
    } else {
      readResult2 = importDefault;
      readResult2 = addPngTextTags;
      const MetadataMissingError = importDefault(addPngTextTags[0]).MetadataMissingError;
      const prototype = MetadataMissingError.prototype;
      readResult2 = new.target;
      readResult2 = new.target;
      readResult2 = new MetadataMissingError();
      throw readResult2;
    }
    const obj44 = importDefault(addPngTextTags[20]);
  }
  obj = { expanded: false, async: false, includeUnknown: false, domParser: undefined };
}
function hasIptcData(iptcDataOffset) {
  return undefined !== iptcDataOffset;
}
function hasXmpData(xmpChunks) {
  let isArray = Array.isArray(xmpChunks);
  if (isArray) {
    isArray = xmpChunks.length > 0;
  }
  return isArray;
}
function hasIccData(iccChunks) {
  let isArray = Array.isArray(iccChunks);
  if (isArray) {
    isArray = iccChunks.length > 0;
  }
  return isArray;
}

export default { load, loadView, errors: require("error") };
export const errors = require("error");
export { load };
export { loadView };
