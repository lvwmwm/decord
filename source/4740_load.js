// Module ID: 4740
// Function ID: 41162
// Name: load
// Dependencies: []
// Exports: load

// Module 4740 (load)
function load(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const arg1 = obj;
    if ("string" === typeof arg0) {
      obj.async = true;
      let nextPromise = function loadFile(arg0, arg1) {
        const obj = /^\w+:\/\//;
        if (obj.test(arg0)) {
          const _fetch = fetch;
          if ("undefined" !== typeof fetch) {
            let tmp5 = function fetchRemoteFile(arg0, arg1) {
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
            }(arg0, arg1);
          } else {
            tmp5 = function nodeGetRemoteFile(arg0, arg1) {
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  let obj = {};
                  let isIntegerResult = Number.isInteger(length);
                  if (isIntegerResult) {
                    isIntegerResult = length >= 0;
                  }
                  if (isIntegerResult) {
                    obj = { range: `bytes=0-${closure_1 - 1}` };
                    obj.headers = obj;
                  }
                  if (obj3.test(arg0)) {
                    let get = __non_webpack_require__("https").get;
                  } else {
                    get = __non_webpack_require__("http").get;
                  }
                  const value = get(arg0, obj, (statusCode) => {
                    if (statusCode.statusCode >= 200) {
                      if (statusCode.statusCode <= 299) {
                        let closure_0 = [];
                        statusCode.on("data", () => { ... });
                        statusCode.on("error", () => { ... });
                        statusCode.on("end", () => { ... });
                      }
                    }
                    arg1("Could not fetch file: " + statusCode.statusCode + " " + statusCode.statusMessage);
                    statusCode.resume();
                  });
                  value.on("error", (arg0) => arg1(arg0));
                });
                return promise;
              }
            }(arg0, arg1);
          }
          return tmp5;
        } else {
          if (obj2.test(arg0)) {
            return Promise.resolve(obj(closure_2[1]).dataUriToBuffer(arg0));
          } else {
            return function loadLocalFile(arg0, arg1) {
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  const result = globalThis.__non_webpack_require__("fs");
                  result.open(arg0, (arg0, arg1) => {
                    arg0 = arg1;
                    if (arg0) {
                      arg1(arg0);
                    } else {
                      result.stat(arg0, () => { ... });
                    }
                  });
                });
                return promise;
              }
            }(arg0, arg1);
          }
          const obj2 = /^data:[^;,]*(;base64)?,/;
        }
      }(arg0, obj).then((arg0) => callback(arg0, obj));
      const promise2 = function loadFile(arg0, arg1) {
        const obj = /^\w+:\/\//;
        if (obj.test(arg0)) {
          const _fetch = fetch;
          if ("undefined" !== typeof fetch) {
            let tmp5 = function fetchRemoteFile(arg0, arg1) {
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
            }(arg0, arg1);
          } else {
            tmp5 = function nodeGetRemoteFile(arg0, arg1) {
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  let obj = {};
                  let isIntegerResult = Number.isInteger(length);
                  if (isIntegerResult) {
                    isIntegerResult = length >= 0;
                  }
                  if (isIntegerResult) {
                    obj = { range: `bytes=0-${closure_1 - 1}` };
                    obj.headers = obj;
                  }
                  if (obj3.test(arg0)) {
                    let get = __non_webpack_require__("https").get;
                  } else {
                    get = __non_webpack_require__("http").get;
                  }
                  const value = get(arg0, obj, (statusCode) => {
                    if (statusCode.statusCode >= 200) {
                      if (statusCode.statusCode <= 299) {
                        let closure_0 = [];
                        statusCode.on("data", () => { ... });
                        statusCode.on("error", () => { ... });
                        statusCode.on("end", () => { ... });
                      }
                    }
                    arg1("Could not fetch file: " + statusCode.statusCode + " " + statusCode.statusMessage);
                    statusCode.resume();
                  });
                  value.on("error", (arg0) => arg1(arg0));
                });
                return promise;
              }
            }(arg0, arg1);
          }
          return tmp5;
        } else {
          if (obj2.test(arg0)) {
            return Promise.resolve(obj(closure_2[1]).dataUriToBuffer(arg0));
          } else {
            return function loadLocalFile(arg0, arg1) {
              if (arguments.length > 1) {
                const promise = new Promise((arg0, arg1) => {
                  const result = globalThis.__non_webpack_require__("fs");
                  result.open(arg0, (arg0, arg1) => {
                    arg0 = arg1;
                    if (arg0) {
                      arg1(arg0);
                    } else {
                      result.stat(arg0, () => { ... });
                    }
                  });
                });
                return promise;
              }
            }(arg0, arg1);
          }
          const obj2 = /^data:[^;,]*(;base64)?,/;
        }
      }(arg0, obj);
    } else {
      const _File = File;
      let tmp2 = "undefined" !== typeof File;
      if (tmp2) {
        const _File2 = File;
        tmp2 = arg0 instanceof File;
      }
      if (tmp2) {
        obj.async = true;
        nextPromise = function loadFileObject(arg0) {
          return new Promise((data) => {
            const fileReader = new FileReader();
            fileReader.onload = (target) => target(target.target.result);
            fileReader.onerror = () => arg1(fileReader.error);
            const asArrayBuffer = fileReader.readAsArrayBuffer(data);
          });
        }(arg0).then((arg0) => callback(arg0, obj));
        const promise = function loadFileObject(arg0) {
          return new Promise((data) => {
            const fileReader = new FileReader();
            fileReader.onload = (target) => target(target.target.result);
            fileReader.onerror = () => arg1(fileReader.error);
            const asArrayBuffer = fileReader.readAsArrayBuffer(data);
          });
        }(arg0);
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
      // break
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
    if (readResult2) {
      closure_1.icc = readResult7;
    } else {
      closure_1 = readResult2(addPngTextTags[1]).objectAssign({}, closure_1, readResult7);
      const obj = readResult2(addPngTextTags[1]);
    }
  }
  function addPngTextTags(readTags) {
    let obj = readTags;
    if (readResult2) {
      const iter = [246074271579590630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 3107350519075593000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000][Symbol.iterator]();
      let num2 = 1;
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp40 = nextResult;
        let _HermesInternal = HermesInternal;
        let combined = "__" + nextResult;
        let tmp42 = combined;
        let tmp43 = obj;
        if (!obj[combined]) {
          // continue
        } else {
          let tmp18 = nextResult;
          let tmp17 = closure_1;
          if (closure_1[nextResult]) {
            let tmp22 = readResult2;
            let tmp23 = addPngTextTags;
            let obj5 = readResult2(addPngTextTags[num2]);
            let tmp24 = closure_1;
            let tmp25 = obj;
            let tmp26 = combined;
            let objectAssignResult = obj5.objectAssign({}, closure_1.exif, obj[tmp42]);
          } else {
            let tmp19 = obj;
            let tmp20 = combined;
            objectAssignResult = obj[tmp42];
          }
          tmp17[tmp18] = objectAssignResult;
          tmp18 = obj;
          let tmp27 = combined;
          delete r12[r11];
        }
      }
      if (closure_1.png) {
        objectAssignResult = readResult2(addPngTextTags[num2]).objectAssign({}, closure_1.png, obj);
        const obj6 = readResult2(addPngTextTags[num2]);
      } else {
        objectAssignResult = obj;
      }
      closure_1.png = objectAssignResult;
      if (closure_1.pngText) {
        num2 = readResult2(addPngTextTags[num2]);
        obj = {};
        let objectAssignResult1 = num2.objectAssign(obj, closure_1.png, obj);
        const tmp39 = obj;
      } else {
        objectAssignResult1 = obj;
      }
      closure_1.pngText = objectAssignResult1;
      const tmp28 = closure_1;
      const tmp34 = closure_1;
    } else {
      const obj2 = readResult2(addPngTextTags[1]);
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
      closure_1 = obj2.objectAssign({}, tmp3, __exif, __iptc, obj);
      delete r1.__exif;
      delete r1.__iptc;
    }
  }
  const dependencyMap = addPngTextTags;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const expanded = obj.expanded;
    let readResult2 = undefined !== expanded && expanded;
    const arg1 = readResult2;
    const async = obj.async;
    const includeUnknown = obj.includeUnknown;
    const domParser = obj.domParser;
    let importDefault = {};
    const items = [];
    let obj1 = importDefault(dependencyMap[3]);
    ({ fileType, fileDataOffset, jfifDataOffset, tiffHeaderOffset, iptcDataOffset, xmpChunks, iccChunks, mpfDataOffset, pngHeaderOffset, pngTextChunks, pngChunkOffsets, vp8xChunkOffset, gifHeaderOffset } = obj1.parseAppMarkers(byteLength, undefined !== async && async));
    let flag = false;
    if (importDefault(dependencyMap[4]).USE_JPEG) {
      flag = false;
      if (importDefault(dependencyMap[4]).USE_FILE) {
        flag = false;
        if (undefined !== fileDataOffset) {
          let obj2 = importDefault(dependencyMap[5]);
          const readResult = obj2.read(byteLength, fileDataOffset);
          if (readResult2) {
            importDefault.file = readResult;
            flag = true;
          } else {
            importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult);
            flag = true;
            const obj4 = arg1(dependencyMap[1]);
          }
        }
      }
    }
    let flag2 = flag;
    if (importDefault(dependencyMap[4]).USE_JPEG) {
      flag2 = flag;
      if (importDefault(dependencyMap[4]).USE_JFIF) {
        flag2 = flag;
        if (undefined !== jfifDataOffset) {
          const readResult1 = importDefault(dependencyMap[6]).read(byteLength, jfifDataOffset);
          if (readResult2) {
            importDefault.jfif = readResult1;
            flag2 = true;
          } else {
            importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult1);
            flag2 = true;
            const obj6 = arg1(dependencyMap[1]);
          }
          const obj5 = importDefault(dependencyMap[6]);
        }
      }
    }
    let flag3 = flag2;
    if (importDefault(dependencyMap[4]).USE_EXIF) {
      flag3 = flag2;
      if (undefined !== tiffHeaderOffset) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        readResult2 = importDefault(dependencyMap[7]).read(byteLength, tiffHeaderOffset, tmp3);
        ({ tags, byteOrder } = readResult2);
        if (tags.Thumbnail) {
          importDefault.Thumbnail = tags.Thumbnail;
          delete r6.Thumbnail;
        }
        if (readResult2) {
          importDefault.exif = tags;
          if (importDefault.exif) {
            if (tmp36.exif.GPSLatitude) {
              if (tmp36.exif.GPSLatitudeRef) {
                const gps = tmp36.gps;
                obj = gps;
                if (!gps) {
                  obj = {};
                }
                tmp36.gps = obj;
                tmp36.gps.Latitude = arg1(dependencyMap[22]).getCalculatedGpsValue(tmp36.exif.GPSLatitude.value);
                let value = tmp36.exif.GPSLatitudeRef.value;
                if ("S" === value.join("")) {
                  tmp36.gps.Latitude = -tmp36.gps.Latitude;
                }
                const obj9 = arg1(dependencyMap[22]);
              }
            }
            while (true) {
              let tmp44 = tmp35;
              if (!tmp36.exif.GPSLongitude) {
                break;
              } else {
                let tmp45 = tmp35;
                if (!tmp36.exif.GPSLongitudeRef) {
                  break;
                } else {
                  let tmp46 = tmp35;
                  let gps2 = tmp36.gps;
                  obj = gps2;
                  if (!gps2) {
                    obj = {};
                  }
                  tmp36.gps = obj;
                  let tmp47 = tmp35;
                  let tmp48 = arg1;
                  let tmp49 = dependencyMap;
                  let num6 = 22;
                  let obj11 = arg1(dependencyMap[22]);
                  tmp36.gps.Longitude = obj11.getCalculatedGpsValue(tmp36.exif.GPSLongitude.value);
                  value = tmp36.exif.GPSLongitudeRef.value;
                  let str3 = "";
                  let str4 = "W";
                  if ("W" === value.join("")) {
                    let tmp50 = tmp35;
                    tmp36.gps.Longitude = -tmp36.gps.Longitude;
                  }
                  // break
                }
              }
              while (true) {
                let tmp51 = tmp35;
                if (!tmp36.exif.GPSAltitude) {
                  break;
                } else {
                  let tmp52 = tmp35;
                  if (!tmp36.exif.GPSAltitudeRef) {
                    break;
                  } else {
                    let tmp53 = tmp35;
                    let gps3 = tmp36.gps;
                    obj1 = gps3;
                    if (!gps3) {
                      obj1 = {};
                    }
                    tmp36.gps = obj1;
                    let tmp54 = tmp35;
                    let num7 = 0;
                    tmp36.gps.Altitude = tmp36.exif.GPSAltitude.value[0] / tmp36.exif.GPSAltitude.value[1];
                    if (1 === tmp36.exif.GPSAltitudeRef.value) {
                      tmp35.gps.Altitude = -tmp35.gps.Altitude;
                    }
                    // break
                  }
                }
                break;
              }
            }
          }
        } else {
          importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, tags);
          const obj7 = arg1(dependencyMap[1]);
        }
        while (true) {
          let tmp55 = importDefault;
          let tmp56 = dependencyMap;
          if (!importDefault(dependencyMap[4]).USE_TIFF) {
            break;
          } else {
            let tmp57 = importDefault;
            let tmp58 = dependencyMap;
            if (!importDefault(dependencyMap[4]).USE_IPTC) {
              break;
            } else if (!tags.IPTC-NAA) {
              break;
            } else {
              let tmp59 = hasIptcData;
              if (hasIptcData(iptcDataOffset)) {
                break;
              } else {
                let tmp60 = importDefault;
                let tmp61 = dependencyMap;
                let num8 = 8;
                let obj13 = importDefault(dependencyMap[8]);
                let num9 = 0;
                let readResult3 = obj13.read(tags.IPTC-NAA.value, 0, tmp3);
                if (readResult2) {
                  let tmp66 = importDefault;
                  importDefault.iptc = readResult3;
                  // break
                } else {
                  let tmp63 = arg1;
                  let tmp64 = dependencyMap;
                  let obj14 = arg1(dependencyMap[1]);
                  let tmp65 = importDefault;
                  importDefault = obj14.objectAssign({}, importDefault, readResult3);
                  // break
                }
                break;
              }
            }
          }
          let tmp67 = importDefault;
          let tmp68 = dependencyMap;
          if (importDefault(dependencyMap[4]).USE_TIFF) {
            let tmp69 = importDefault;
            let tmp70 = dependencyMap;
            if (importDefault(dependencyMap[4]).USE_XMP) {
              if (tags.ApplicationNotes) {
                let tmp71 = hasXmpData;
                if (!hasXmpData(xmpChunks)) {
                  let tmp72 = importDefault;
                  let tmp73 = dependencyMap;
                  let num10 = 9;
                  let obj15 = importDefault(dependencyMap[9]);
                  let tmp74 = arg1;
                  let obj16 = arg1(dependencyMap[1]);
                  let readResult4 = obj15.read(obj16.getStringValueFromArray(tags.ApplicationNotes.value), undefined, tmp4);
                  if (readResult2) {
                    let tmp79 = importDefault;
                    importDefault.xmp = readResult4;
                  } else {
                    delete r27._raw;
                    let tmp76 = arg1;
                    let tmp77 = dependencyMap;
                    let obj17 = arg1(dependencyMap[1]);
                    let tmp78 = importDefault;
                    importDefault = obj17.objectAssign({}, importDefault, readResult4);
                  }
                }
              }
            }
          }
          let tmp80 = importDefault;
          let tmp81 = dependencyMap;
          if (importDefault(dependencyMap[4]).USE_PHOTOSHOP) {
            if (tags.ImageSourceData) {
              if (tags.PhotoshopSettings) {
                let tmp82 = importDefault;
                let tmp83 = dependencyMap;
                let num11 = 10;
                let obj18 = importDefault(dependencyMap[10]);
                let readResult5 = obj18.read(tags.PhotoshopSettings.value, tmp3);
                if (readResult2) {
                  let tmp88 = importDefault;
                  importDefault.photoshop = readResult5;
                } else {
                  let tmp85 = arg1;
                  let tmp86 = dependencyMap;
                  let obj19 = arg1(dependencyMap[1]);
                  let tmp87 = importDefault;
                  importDefault = obj19.objectAssign({}, importDefault, readResult5);
                }
              }
            }
          }
          let tmp89 = importDefault;
          let tmp90 = dependencyMap;
          if (importDefault(dependencyMap[4]).USE_TIFF) {
            let tmp91 = importDefault;
            let tmp92 = dependencyMap;
            if (importDefault(dependencyMap[4]).USE_ICC) {
              if (tags.ICC_Profile) {
                let tmp93 = hasIccData;
                if (!hasIccData(iccChunks)) {
                  let tmp94 = importDefault;
                  let tmp95 = dependencyMap;
                  let num12 = 11;
                  let obj20 = importDefault(dependencyMap[11]);
                  obj2 = { length: tags.ICC_Profile.value.length };
                  let items1 = [obj2];
                  let readResult6 = obj20.read(tags.ICC_Profile.value, items1);
                  if (readResult2) {
                    readResult2 = importDefault;
                    importDefault.icc = readResult6;
                  } else {
                    let tmp97 = arg1;
                    let tmp98 = dependencyMap;
                    let obj22 = arg1(dependencyMap[1]);
                    let tmp99 = importDefault;
                    importDefault = obj22.objectAssign({}, importDefault, readResult6);
                  }
                }
              }
            }
          }
          readResult2 = importDefault;
          readResult2 = dependencyMap;
          if (importDefault(dependencyMap[4]).USE_MAKER_NOTES) {
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
                readResult2 = dependencyMap;
                let num16 = 12;
                let obj26 = importDefault(dependencyMap[12]);
                readResult2 = obj26;
                readResult2 = byteLength;
                readResult2 = tiffHeaderOffset;
                readResult2 = byteOrder;
                readResult2 = tmp3;
                readResult2 = obj26.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, byteOrder, tmp3);
                if (readResult2) {
                  readResult2 = importDefault;
                  importDefault.makerNotes = readResult2;
                } else {
                  readResult2 = arg1;
                  readResult2 = dependencyMap;
                  let obj27 = arg1(dependencyMap[1]);
                  readResult2 = importDefault;
                  importDefault = obj27.objectAssign({}, importDefault, readResult2);
                }
              } else {
                let str6 = "PENTAX ";
                let length = "PENTAX ".length;
                let __offset2 = tags.MakerNote.value.length > "PENTAX ".length;
                if (__offset2) {
                  readResult2 = arg1;
                  readResult2 = dependencyMap;
                  let obj23 = arg1(dependencyMap[1]);
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
                  readResult2 = dependencyMap;
                  let num15 = 13;
                  let obj24 = importDefault(dependencyMap[13]);
                  readResult2 = obj24;
                  readResult2 = byteLength;
                  readResult2 = tiffHeaderOffset;
                  readResult2 = tmp3;
                  readResult2 = obj24.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, tmp3);
                  if (readResult2) {
                    readResult2 = importDefault;
                    importDefault.makerNotes = readResult2;
                  } else {
                    readResult2 = arg1;
                    readResult2 = dependencyMap;
                    let obj25 = arg1(dependencyMap[1]);
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
            delete r6.__offset;
            flag3 = true;
          }
        }
        const obj47 = importDefault(dependencyMap[7]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag4 = flag3;
    if (importDefault(dependencyMap[4]).USE_JPEG) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      flag4 = flag3;
      if (importDefault(dependencyMap[4]).USE_IPTC) {
        readResult2 = hasIptcData;
        flag4 = flag3;
        if (hasIptcData(iptcDataOffset)) {
          readResult2 = importDefault;
          readResult2 = dependencyMap;
          readResult2 = importDefault(dependencyMap[8]).read(byteLength, iptcDataOffset, tmp3);
          if (readResult2) {
            readResult2 = importDefault;
            importDefault.iptc = readResult2;
            flag4 = true;
          } else {
            readResult2 = arg1;
            readResult2 = dependencyMap;
            readResult2 = importDefault;
            importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
            flag4 = true;
            const obj29 = arg1(dependencyMap[1]);
          }
          const obj28 = importDefault(dependencyMap[8]);
        }
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag5 = flag4;
    if (importDefault(dependencyMap[4]).USE_XMP) {
      readResult2 = hasXmpData;
      flag5 = flag4;
      if (hasXmpData(xmpChunks)) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        readResult2 = importDefault(dependencyMap[9]).read(byteLength, xmpChunks, tmp4);
        if (readResult2) {
          readResult2 = importDefault;
          importDefault.xmp = readResult2;
          flag5 = true;
        } else {
          delete r6._raw;
          readResult2 = arg1;
          readResult2 = dependencyMap;
          readResult2 = importDefault;
          importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
          flag5 = true;
          const obj31 = arg1(dependencyMap[1]);
        }
        const obj30 = importDefault(dependencyMap[9]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    if (importDefault(dependencyMap[4]).USE_JPEG) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      let flag6 = flag5;
      if (importDefault(dependencyMap[4]).USE_ICC) {
        readResult2 = hasIccData;
        flag6 = flag5;
        if (hasIccData(iccChunks)) {
          readResult2 = importDefault;
          readResult2 = dependencyMap;
          const readResult7 = importDefault(dependencyMap[11]).read(byteLength, iccChunks, tmp2);
          readResult2 = globalThis;
          if (readResult7 instanceof Promise) {
            readResult2 = items.push(readResult7.then(addIccTags));
            flag6 = true;
          } else {
            readResult2 = addIccTags(readResult7);
            flag6 = true;
          }
          const obj32 = importDefault(dependencyMap[11]);
        }
      }
    } else {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      flag6 = flag5;
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag7 = flag6;
    if (importDefault(dependencyMap[4]).USE_MPF) {
      flag7 = flag6;
      if (undefined !== mpfDataOffset) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        readResult2 = importDefault(dependencyMap[14]).read(byteLength, mpfDataOffset, tmp3);
        if (readResult2) {
          readResult2 = importDefault;
          importDefault.mpf = readResult2;
          flag7 = true;
        } else {
          readResult2 = arg1;
          readResult2 = dependencyMap;
          readResult2 = importDefault;
          importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
          flag7 = true;
          const obj34 = arg1(dependencyMap[1]);
        }
        const obj33 = importDefault(dependencyMap[14]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag8 = flag7;
    if (importDefault(dependencyMap[4]).USE_PNG) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      flag8 = flag7;
      if (importDefault(dependencyMap[4]).USE_PNG_FILE) {
        flag8 = flag7;
        if (undefined !== pngHeaderOffset) {
          readResult2 = importDefault;
          readResult2 = dependencyMap;
          readResult2 = importDefault(dependencyMap[15]).read(byteLength, pngHeaderOffset);
          if (readResult2) {
            readResult2 = importDefault;
            if (importDefault.png) {
              readResult2 = arg1;
              readResult2 = dependencyMap;
              readResult2 = importDefault;
              readResult2 = arg1(dependencyMap[1]).objectAssign({}, importDefault.png, readResult2);
              const obj36 = arg1(dependencyMap[1]);
            }
            readResult2.png = readResult2;
            readResult2 = importDefault;
            importDefault.pngFile = readResult2;
            flag8 = true;
          } else {
            readResult2 = arg1;
            readResult2 = dependencyMap;
            readResult2 = importDefault;
            importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
            flag8 = true;
            const obj35 = arg1(dependencyMap[1]);
          }
          const obj48 = importDefault(dependencyMap[15]);
        }
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag9 = flag8;
    if (importDefault(dependencyMap[4]).USE_PNG) {
      flag9 = flag8;
      if (undefined !== pngTextChunks) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        const obj37 = importDefault(dependencyMap[16]);
        readResult2 = obj37;
        readResult2 = byteLength;
        readResult2 = pngTextChunks;
        readResult2 = tmp2;
        readResult2 = tmp3;
        readResult2 = obj37.read(byteLength, pngTextChunks, tmp2, tmp3);
        readResult2 = addPngTextTags(readResult2.readTags);
        flag9 = true;
        if (readResult2.readTagsPromise) {
          readResult2 = items.push(readTagsPromise.then((arr) => arr.forEach(addPngTextTags)));
          flag9 = true;
        }
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag10 = flag9;
    if (importDefault(dependencyMap[4]).USE_PNG) {
      flag10 = flag9;
      if (undefined !== pngChunkOffsets) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        readResult2 = importDefault(dependencyMap[17]).read(byteLength, pngChunkOffsets);
        if (readResult2) {
          readResult2 = importDefault;
          if (importDefault.png) {
            readResult2 = arg1;
            readResult2 = dependencyMap;
            readResult2 = importDefault;
            readResult2 = arg1(dependencyMap[1]).objectAssign({}, importDefault.png, readResult2);
            const obj39 = arg1(dependencyMap[1]);
          }
          readResult2.png = readResult2;
          flag10 = true;
        } else {
          readResult2 = arg1;
          readResult2 = dependencyMap;
          readResult2 = importDefault;
          importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
          flag10 = true;
          const obj38 = arg1(dependencyMap[1]);
        }
        const obj49 = importDefault(dependencyMap[17]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag11 = flag10;
    if (importDefault(dependencyMap[4]).USE_WEBP) {
      flag11 = flag10;
      if (undefined !== vp8xChunkOffset) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        readResult2 = importDefault(dependencyMap[18]).read(byteLength, vp8xChunkOffset);
        if (readResult2) {
          readResult2 = importDefault;
          if (importDefault.riff) {
            readResult2 = arg1;
            readResult2 = dependencyMap;
            readResult2 = importDefault;
            readResult2 = arg1(dependencyMap[1]).objectAssign({}, importDefault.riff, readResult2);
            const obj41 = arg1(dependencyMap[1]);
          }
          readResult2.riff = readResult2;
          flag11 = true;
        } else {
          readResult2 = arg1;
          readResult2 = dependencyMap;
          readResult2 = importDefault;
          importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
          flag11 = true;
          const obj40 = arg1(dependencyMap[1]);
        }
        const obj50 = importDefault(dependencyMap[18]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let flag12 = flag11;
    if (importDefault(dependencyMap[4]).USE_GIF) {
      flag12 = flag11;
      if (undefined !== gifHeaderOffset) {
        readResult2 = importDefault;
        readResult2 = dependencyMap;
        readResult2 = importDefault(dependencyMap[19]).read(byteLength, gifHeaderOffset);
        if (readResult2) {
          readResult2 = importDefault;
          if (importDefault.gif) {
            readResult2 = arg1;
            readResult2 = dependencyMap;
            readResult2 = importDefault;
            readResult2 = arg1(dependencyMap[1]).objectAssign({}, importDefault.gif, readResult2);
            const obj43 = arg1(dependencyMap[1]);
          }
          readResult2.gif = readResult2;
          flag12 = true;
        } else {
          readResult2 = arg1;
          readResult2 = dependencyMap;
          readResult2 = importDefault;
          importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
          flag12 = true;
          const obj42 = arg1(dependencyMap[1]);
        }
        const obj51 = importDefault(dependencyMap[19]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    const parseAppMarkersResult = obj1.parseAppMarkers(byteLength, undefined !== async && async);
    readResult2 = importDefault;
    readResult2 = importDefault(dependencyMap[20]).get(importDefault, readResult2);
    if (readResult2) {
      if (readResult2) {
        readResult2 = importDefault;
        importDefault.composite = readResult2;
      } else {
        readResult2 = arg1;
        readResult2 = dependencyMap;
        readResult2 = importDefault;
        importDefault = arg1(dependencyMap[1]).objectAssign({}, importDefault, readResult2);
        const obj45 = arg1(dependencyMap[1]);
      }
    }
    readResult2 = importDefault;
    readResult2 = dependencyMap;
    let USE_THUMBNAIL = importDefault(dependencyMap[4]).USE_JPEG;
    if (!USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      USE_THUMBNAIL = importDefault(dependencyMap[4]).USE_WEBP;
    }
    if (USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      USE_THUMBNAIL = importDefault(dependencyMap[4]).USE_EXIF;
    }
    if (USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      USE_THUMBNAIL = importDefault(dependencyMap[4]).USE_THUMBNAIL;
    }
    if (USE_THUMBNAIL) {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      readResult2 = importDefault;
      USE_THUMBNAIL = importDefault(dependencyMap[21]).get(byteLength, importDefault.Thumbnail, tiffHeaderOffset);
      const obj46 = importDefault(dependencyMap[21]);
    }
    if (USE_THUMBNAIL) {
      importDefault.Thumbnail = USE_THUMBNAIL;
      flag12 = true;
    } else {
      delete r6.Thumbnail;
    }
    if (fileType) {
      readResult2 = importDefault;
      if (readResult2) {
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
      if (tmp2) {
        readResult2 = globalThis;
        readResult2 = Promise.all(items).then(() => closure_1);
        const allPromises = Promise.all(items);
      } else {
        readResult2 = importDefault;
      }
      return readResult2;
    } else {
      readResult2 = importDefault;
      readResult2 = dependencyMap;
      const MetadataMissingError = importDefault(dependencyMap[0]).MetadataMissingError;
      const prototype = MetadataMissingError.prototype;
      readResult2 = new.target;
      readResult2 = new.target;
      readResult2 = new MetadataMissingError();
      throw readResult2;
    }
    const obj44 = importDefault(dependencyMap[20]);
  }
  obj = { domParser: undefined };
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

export default { load, loadView, errors: importDefault(dependencyMap[0]) };
export const errors = importDefault(dependencyMap[0]);
export { load };
export { loadView };
