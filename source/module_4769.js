// Module ID: 4769
// Function ID: 41424
// Dependencies: [57, 4768, 4770]

// Module 4769
import _slicedToArray from "_slicedToArray";

const require = arg1;
let obj = { 34852: "SpectralSensitivity", 34855: "ISOSpeedRatings", 34858: "TimeZoneOffset", 34859: "SelfTimerMode", 34865: "StandardOutputSensitivity", 34866: "RecommendedExposureIndex", 34867: "ISOSpeed", 34868: "ISOSpeedLatitudeyyy", 34869: "ISOSpeedLatitudezzz", 36867: "DateTimeOriginal", 36868: "DateTimeDigitized", 36873: "GooglePlusUploadCode", 36880: "OffsetTime", 36881: "OffsetTimeOriginal", 36882: "OffsetTimeDigitized", 37122: "CompressedBitsPerPixel", 37379: "BrightnessValue", 37380: "ExposureBiasValue", 37393: "ImageNumber", 37395: "ImageHistory", 37520: "SubSecTime", 37521: "SubSecTimeOriginal", 37522: "SubSecTimeDigitized", 37724: "ImageSourceData", 40962: "PixelXDimension", 40963: "PixelYDimension", 40964: "RelatedSoundFile", 40965: "Interoperability IFD Pointer", 41483: "FlashEnergy", 41486: "FocalPlaneXResolution", 41487: "FocalPlaneYResolution", 41493: "ExposureIndex", 42016: "ImageUniqueID", 42032: "CameraOwnerName", 42033: "BodySerialNumber", 42035: "LensMake", 42036: "LensModel", 42037: "LensSerialNumber", 42081: "SourceImageNumberOfCompositeImage", 42082: "SourceExposureTimesOfCompositeImage", 42240: "Gamma", 59932: "Padding", 59933: "OffsetSchema", 65000: "OwnerName", 65001: "SerialNumber", 65002: "Lens", 65100: "RawFile", 65101: "Converter", 65102: "WhiteBalance", 65105: "Exposure", 65106: "Shadows", 65107: "Brightness", 65108: "Contrast", 65109: "Saturation", 65110: "Sharpness", 65111: "Smoothness", 65112: "MoireFilter" };
obj = { name: "ExposureTime", description: require("module_4768").ExposureTime };
obj[33434] = obj;
obj = { name: "FNumber", description: require("module_4768").FNumber };
obj[33437] = obj;
obj[34850] = { name: "ExposureProgram", description: require("module_4768").ExposureProgram };
obj[34856] = {
  name: "OECF",
  description() {
    return "[Raw OECF table data]";
  }
};
obj[34864] = {
  name: "SensitivityType",
  description(arg0) {
    return { 1: "Standard Output Sensitivity", 2: "Recommended Exposure Index", 3: "ISO Speed", 4: "Standard Output Sensitivity and Recommended Exposure Index", 5: "Standard Output Sensitivity and ISO Speed", 6: "Recommended Exposure Index and ISO Speed", 7: "Standard Output Sensitivity, Recommended Exposure Index and ISO Speed" }[arg0] || "Unknown";
  }
};
obj[36864] = {
  name: "ExifVersion",
  description(value) {
    return require(4770) /* getStringValue */.getStringValue(value);
  }
};
const obj1 = { name: "ExposureProgram", description: require("module_4768").ExposureProgram };
const obj2 = {
  name: "OECF",
  description() {
    return "[Raw OECF table data]";
  }
};
const obj3 = {
  name: "SensitivityType",
  description(arg0) {
    return { 1: "Standard Output Sensitivity", 2: "Recommended Exposure Index", 3: "ISO Speed", 4: "Standard Output Sensitivity and Recommended Exposure Index", 5: "Standard Output Sensitivity and ISO Speed", 6: "Recommended Exposure Index and ISO Speed", 7: "Standard Output Sensitivity, Recommended Exposure Index and ISO Speed" }[arg0] || "Unknown";
  }
};
const obj4 = {
  name: "ExifVersion",
  description(value) {
    return require(4770) /* getStringValue */.getStringValue(value);
  }
};
obj[37121] = { name: "ComponentsConfiguration", description: require("module_4768").ComponentsConfiguration };
const obj5 = { name: "ComponentsConfiguration", description: require("module_4768").ComponentsConfiguration };
obj[37377] = { name: "ShutterSpeedValue", description: require("module_4768").ShutterSpeedValue };
const obj6 = { name: "ShutterSpeedValue", description: require("module_4768").ShutterSpeedValue };
obj[37378] = { name: "ApertureValue", description: require("module_4768").ApertureValue };
obj[37381] = {
  name: "MaxApertureValue",
  description(arg0) {
    return Math.pow(Math.sqrt(2), arg0[0] / arg0[1]).toFixed(2);
  }
};
obj[37382] = {
  name: "SubjectDistance",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
const obj7 = { name: "ApertureValue", description: require("module_4768").ApertureValue };
const obj8 = {
  name: "MaxApertureValue",
  description(arg0) {
    return Math.pow(Math.sqrt(2), arg0[0] / arg0[1]).toFixed(2);
  }
};
const obj9 = {
  name: "SubjectDistance",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
obj[37383] = { name: "MeteringMode", description: require("module_4768").MeteringMode };
const obj10 = { name: "MeteringMode", description: require("module_4768").MeteringMode };
obj[37384] = { name: "LightSource", description: require("module_4768").LightSource };
obj[37385] = {
  name: "Flash",
  description(arg0) {
    let str = "Flash did not fire";
    if (0 !== arg0) {
      let str22 = "Flash fired";
      if (1 !== arg0) {
        let str21 = "Strobe return light not detected";
        if (5 !== arg0) {
          let str20 = "Strobe return light detected";
          if (7 !== arg0) {
            let str19 = "Flash fired, compulsory flash mode";
            if (9 !== arg0) {
              let str18 = "Flash fired, compulsory flash mode, return light not detected";
              if (13 !== arg0) {
                let str17 = "Flash fired, compulsory flash mode, return light detected";
                if (15 !== arg0) {
                  let str16 = "Flash did not fire, compulsory flash mode";
                  if (16 !== arg0) {
                    let str15 = "Flash did not fire, auto mode";
                    if (24 !== arg0) {
                      let str14 = "Flash fired, auto mode";
                      if (25 !== arg0) {
                        let str13 = "Flash fired, auto mode, return light not detected";
                        if (29 !== arg0) {
                          let str12 = "Flash fired, auto mode, return light detected";
                          if (31 !== arg0) {
                            let str11 = "No flash function";
                            if (32 !== arg0) {
                              let str10 = "Flash fired, red-eye reduction mode";
                              if (65 !== arg0) {
                                let str9 = "Flash fired, red-eye reduction mode, return light not detected";
                                if (69 !== arg0) {
                                  let str2 = "Flash fired, red-eye reduction mode, return light detected";
                                  if (71 !== arg0) {
                                    let str3 = "Flash fired, compulsory flash mode, red-eye reduction mode";
                                    if (73 !== arg0) {
                                      let str4 = "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
                                      if (77 !== arg0) {
                                        let str5 = "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
                                        if (79 !== arg0) {
                                          let str6 = "Flash fired, auto mode, red-eye reduction mode";
                                          if (89 !== arg0) {
                                            let str7 = "Flash fired, auto mode, return light not detected, red-eye reduction mode";
                                            if (93 !== arg0) {
                                              let str8 = "Unknown";
                                              if (95 === arg0) {
                                                str8 = "Flash fired, auto mode, return light detected, red-eye reduction mode";
                                              }
                                              str7 = str8;
                                            }
                                            str6 = str7;
                                          }
                                          str5 = str6;
                                        }
                                        str4 = str5;
                                      }
                                      str3 = str4;
                                    }
                                    str2 = str3;
                                  }
                                  str9 = str2;
                                }
                                str10 = str9;
                              }
                              str11 = str10;
                            }
                            str12 = str11;
                          }
                          str13 = str12;
                        }
                        str14 = str13;
                      }
                      str15 = str14;
                    }
                    str16 = str15;
                  }
                  str17 = str16;
                }
                str18 = str17;
              }
              str19 = str18;
            }
            str20 = str19;
          }
          str21 = str20;
        }
        str22 = str21;
      }
      str = str22;
    }
    return str;
  }
};
const obj11 = { name: "LightSource", description: require("module_4768").LightSource };
const obj12 = {
  name: "Flash",
  description(arg0) {
    let str = "Flash did not fire";
    if (0 !== arg0) {
      let str22 = "Flash fired";
      if (1 !== arg0) {
        let str21 = "Strobe return light not detected";
        if (5 !== arg0) {
          let str20 = "Strobe return light detected";
          if (7 !== arg0) {
            let str19 = "Flash fired, compulsory flash mode";
            if (9 !== arg0) {
              let str18 = "Flash fired, compulsory flash mode, return light not detected";
              if (13 !== arg0) {
                let str17 = "Flash fired, compulsory flash mode, return light detected";
                if (15 !== arg0) {
                  let str16 = "Flash did not fire, compulsory flash mode";
                  if (16 !== arg0) {
                    let str15 = "Flash did not fire, auto mode";
                    if (24 !== arg0) {
                      let str14 = "Flash fired, auto mode";
                      if (25 !== arg0) {
                        let str13 = "Flash fired, auto mode, return light not detected";
                        if (29 !== arg0) {
                          let str12 = "Flash fired, auto mode, return light detected";
                          if (31 !== arg0) {
                            let str11 = "No flash function";
                            if (32 !== arg0) {
                              let str10 = "Flash fired, red-eye reduction mode";
                              if (65 !== arg0) {
                                let str9 = "Flash fired, red-eye reduction mode, return light not detected";
                                if (69 !== arg0) {
                                  let str2 = "Flash fired, red-eye reduction mode, return light detected";
                                  if (71 !== arg0) {
                                    let str3 = "Flash fired, compulsory flash mode, red-eye reduction mode";
                                    if (73 !== arg0) {
                                      let str4 = "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
                                      if (77 !== arg0) {
                                        let str5 = "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
                                        if (79 !== arg0) {
                                          let str6 = "Flash fired, auto mode, red-eye reduction mode";
                                          if (89 !== arg0) {
                                            let str7 = "Flash fired, auto mode, return light not detected, red-eye reduction mode";
                                            if (93 !== arg0) {
                                              let str8 = "Unknown";
                                              if (95 === arg0) {
                                                str8 = "Flash fired, auto mode, return light detected, red-eye reduction mode";
                                              }
                                              str7 = str8;
                                            }
                                            str6 = str7;
                                          }
                                          str5 = str6;
                                        }
                                        str4 = str5;
                                      }
                                      str3 = str4;
                                    }
                                    str2 = str3;
                                  }
                                  str9 = str2;
                                }
                                str10 = str9;
                              }
                              str11 = str10;
                            }
                            str12 = str11;
                          }
                          str13 = str12;
                        }
                        str14 = str13;
                      }
                      str15 = str14;
                    }
                    str16 = str15;
                  }
                  str17 = str16;
                }
                str18 = str17;
              }
              str19 = str18;
            }
            str20 = str19;
          }
          str21 = str20;
        }
        str22 = str21;
      }
      str = str22;
    }
    return str;
  }
};
obj[37386] = { name: "FocalLength", description: require("module_4768").FocalLength };
obj[37394] = {
  name: "SecurityClassification",
  description(arg0) {
    return { C: "Confidential", R: "Restricted", S: "Secret", T: "Top Secret", U: "Unclassified" }[arg0] || "Unknown";
  }
};
obj[37396] = {
  name: "SubjectArea",
  description(arg0) {
    if (2 === arg0.length) {
      const _HermesInternal3 = HermesInternal;
      let str = "Location; X: " + arg0[0] + ", Y: " + arg0[1];
    } else if (3 === arg0.length) {
      const _HermesInternal2 = HermesInternal;
      str = "Circle; X: " + arg0[0] + ", Y: " + arg0[1] + ", diameter: " + arg0[2];
    } else {
      str = "Unknown";
      if (4 === arg0.length) {
        const _HermesInternal = HermesInternal;
        str = "Rectangle; X: " + arg0[0] + ", Y: " + arg0[1] + ", width: " + arg0[2] + ", height: " + arg0[3];
      }
    }
    return str;
  }
};
obj[37500] = {
  name: "MakerNote",
  description() {
    return "[Raw maker note data]";
  }
};
const obj13 = { name: "FocalLength", description: require("module_4768").FocalLength };
const obj14 = {
  name: "SecurityClassification",
  description(arg0) {
    return { C: "Confidential", R: "Restricted", S: "Secret", T: "Top Secret", U: "Unclassified" }[arg0] || "Unknown";
  }
};
const obj15 = {
  name: "SubjectArea",
  description(arg0) {
    if (2 === arg0.length) {
      const _HermesInternal3 = HermesInternal;
      let str = "Location; X: " + arg0[0] + ", Y: " + arg0[1];
    } else if (3 === arg0.length) {
      const _HermesInternal2 = HermesInternal;
      str = "Circle; X: " + arg0[0] + ", Y: " + arg0[1] + ", diameter: " + arg0[2];
    } else {
      str = "Unknown";
      if (4 === arg0.length) {
        const _HermesInternal = HermesInternal;
        str = "Rectangle; X: " + arg0[0] + ", Y: " + arg0[1] + ", width: " + arg0[2] + ", height: " + arg0[3];
      }
    }
    return str;
  }
};
const obj16 = {
  name: "MakerNote",
  description() {
    return "[Raw maker note data]";
  }
};
obj[37510] = { name: "UserComment", description: require("getStringValue").getEncodedString };
obj[37888] = {
  name: "AmbientTemperature",
  description(arg0) {
    return arg0[0] / arg0[1] + " \u00B0C";
  }
};
obj[37889] = {
  name: "Humidity",
  description(arg0) {
    return arg0[0] / arg0[1] + " %";
  }
};
obj[37890] = {
  name: "Pressure",
  description(arg0) {
    return arg0[0] / arg0[1] + " hPa";
  }
};
obj[37891] = {
  name: "WaterDepth",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
obj[37892] = {
  name: "Acceleration",
  description(arg0) {
    return arg0[0] / arg0[1] + " mGal";
  }
};
obj[37893] = {
  name: "CameraElevationAngle",
  description(arg0) {
    return arg0[0] / arg0[1] + " \u00B0";
  }
};
obj[40960] = {
  name: "FlashpixVersion",
  description(arr) {
    const mapped = arr.map((arg0) => String.fromCharCode(arg0));
    return mapped.join("");
  }
};
const obj17 = { name: "UserComment", description: require("getStringValue").getEncodedString };
const obj18 = {
  name: "AmbientTemperature",
  description(arg0) {
    return arg0[0] / arg0[1] + " \u00B0C";
  }
};
const obj19 = {
  name: "Humidity",
  description(arg0) {
    return arg0[0] / arg0[1] + " %";
  }
};
const obj20 = {
  name: "Pressure",
  description(arg0) {
    return arg0[0] / arg0[1] + " hPa";
  }
};
const obj21 = {
  name: "WaterDepth",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
const obj22 = {
  name: "Acceleration",
  description(arg0) {
    return arg0[0] / arg0[1] + " mGal";
  }
};
const obj23 = {
  name: "CameraElevationAngle",
  description(arg0) {
    return arg0[0] / arg0[1] + " \u00B0";
  }
};
const obj24 = {
  name: "FlashpixVersion",
  description(arr) {
    const mapped = arr.map((arg0) => String.fromCharCode(arg0));
    return mapped.join("");
  }
};
obj[40961] = { name: "ColorSpace", description: require("module_4768").ColorSpace };
obj[41484] = {
  name: "SpatialFrequencyResponse",
  description() {
    return "[Raw SFR table data]";
  }
};
const obj25 = { name: "ColorSpace", description: require("module_4768").ColorSpace };
const obj26 = {
  name: "SpatialFrequencyResponse",
  description() {
    return "[Raw SFR table data]";
  }
};
obj[41488] = { name: "FocalPlaneResolutionUnit", description: require("module_4768").FocalPlaneResolutionUnit };
obj[41492] = {
  name: "SubjectLocation",
  description(arg0) {
    const tmp = callback(arg0, 2);
    return "X: " + tmp[0] + ", Y: " + tmp[1];
  }
};
obj[41495] = {
  name: "SensingMethod",
  description(arg0) {
    let str = "Undefined";
    if (1 !== arg0) {
      let str2 = "One-chip color area sensor";
      if (2 !== arg0) {
        let str3 = "Two-chip color area sensor";
        if (3 !== arg0) {
          let str4 = "Three-chip color area sensor";
          if (4 !== arg0) {
            let str5 = "Color sequential area sensor";
            if (5 !== arg0) {
              let str6 = "Trilinear sensor";
              if (7 !== arg0) {
                let str7 = "Unknown";
                if (8 === arg0) {
                  str7 = "Color sequential linear sensor";
                }
                str6 = str7;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
obj[41728] = {
  name: "FileSource",
  description(arg0) {
    let str = "Unknown";
    if (3 === arg0) {
      str = "DSC";
    }
    return str;
  }
};
obj[41729] = {
  name: "SceneType",
  description(arg0) {
    let str = "Unknown";
    if (1 === arg0) {
      str = "A directly photographed image";
    }
    return str;
  }
};
obj[41730] = {
  name: "CFAPattern",
  description() {
    return "[Raw CFA pattern table data]";
  }
};
const obj27 = { name: "FocalPlaneResolutionUnit", description: require("module_4768").FocalPlaneResolutionUnit };
const obj28 = {
  name: "SubjectLocation",
  description(arg0) {
    const tmp = callback(arg0, 2);
    return "X: " + tmp[0] + ", Y: " + tmp[1];
  }
};
const obj29 = {
  name: "SensingMethod",
  description(arg0) {
    let str = "Undefined";
    if (1 !== arg0) {
      let str2 = "One-chip color area sensor";
      if (2 !== arg0) {
        let str3 = "Two-chip color area sensor";
        if (3 !== arg0) {
          let str4 = "Three-chip color area sensor";
          if (4 !== arg0) {
            let str5 = "Color sequential area sensor";
            if (5 !== arg0) {
              let str6 = "Trilinear sensor";
              if (7 !== arg0) {
                let str7 = "Unknown";
                if (8 === arg0) {
                  str7 = "Color sequential linear sensor";
                }
                str6 = str7;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
const obj30 = {
  name: "FileSource",
  description(arg0) {
    let str = "Unknown";
    if (3 === arg0) {
      str = "DSC";
    }
    return str;
  }
};
const obj31 = {
  name: "SceneType",
  description(arg0) {
    let str = "Unknown";
    if (1 === arg0) {
      str = "A directly photographed image";
    }
    return str;
  }
};
const obj32 = {
  name: "CFAPattern",
  description() {
    return "[Raw CFA pattern table data]";
  }
};
obj[41985] = { name: "CustomRendered", description: require("module_4768").CustomRendered };
const obj33 = { name: "CustomRendered", description: require("module_4768").CustomRendered };
obj[41986] = { name: "ExposureMode", description: require("module_4768").ExposureMode };
const obj34 = { name: "ExposureMode", description: require("module_4768").ExposureMode };
obj[41987] = { name: "WhiteBalance", description: require("module_4768").WhiteBalance };
obj[41988] = {
  name: "DigitalZoomRatio",
  description(arg0) {
    let str = "Digital zoom was not used";
    if (0 !== arg0[0]) {
      str = `${arg0[0] / arg0[1]}`;
    }
    return str;
  }
};
const obj35 = { name: "WhiteBalance", description: require("module_4768").WhiteBalance };
const obj36 = {
  name: "DigitalZoomRatio",
  description(arg0) {
    let str = "Digital zoom was not used";
    if (0 !== arg0[0]) {
      str = `${arg0[0] / arg0[1]}`;
    }
    return str;
  }
};
obj[41989] = { name: "FocalLengthIn35mmFilm", description: require("module_4768").FocalLengthIn35mmFilm };
const obj37 = { name: "FocalLengthIn35mmFilm", description: require("module_4768").FocalLengthIn35mmFilm };
obj[41990] = { name: "SceneCaptureType", description: require("module_4768").SceneCaptureType };
obj[41991] = {
  name: "GainControl",
  description(arg0) {
    let str = "None";
    if (0 !== arg0) {
      let str2 = "Low gain up";
      if (1 !== arg0) {
        let str3 = "High gain up";
        if (2 !== arg0) {
          let str4 = "Low gain down";
          if (3 !== arg0) {
            let str5 = "Unknown";
            if (4 === arg0) {
              str5 = "High gain down";
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
const obj38 = { name: "SceneCaptureType", description: require("module_4768").SceneCaptureType };
const obj39 = {
  name: "GainControl",
  description(arg0) {
    let str = "None";
    if (0 !== arg0) {
      let str2 = "Low gain up";
      if (1 !== arg0) {
        let str3 = "High gain up";
        if (2 !== arg0) {
          let str4 = "Low gain down";
          if (3 !== arg0) {
            let str5 = "Unknown";
            if (4 === arg0) {
              str5 = "High gain down";
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
obj[41992] = { name: "Contrast", description: require("module_4768").Contrast };
const obj40 = { name: "Contrast", description: require("module_4768").Contrast };
obj[41993] = { name: "Saturation", description: require("module_4768").Saturation };
const obj41 = { name: "Saturation", description: require("module_4768").Saturation };
obj[41994] = { name: "Sharpness", description: require("module_4768").Sharpness };
obj[41995] = {
  name: "DeviceSettingDescription",
  description() {
    return "[Raw device settings table data]";
  }
};
obj[41996] = {
  name: "SubjectDistanceRange",
  description(arg0) {
    let str = "Macro";
    if (1 !== arg0) {
      let str2 = "Close view";
      if (2 !== arg0) {
        let str3 = "Unknown";
        if (3 === arg0) {
          str3 = "Distant view";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
obj[42034] = {
  name: "LensSpecification",
  description(arg0) {
    const result = arg0[0][0] / arg0[0][1];
    const parsed = parseFloat(result.toFixed(5));
    const result1 = arg0[1][0] / arg0[1][1];
    const combined = "" + parsed + "-" + parseFloat(result1.toFixed(5)) + " mm";
    if (0 === arg0[3][1]) {
      const _HermesInternal2 = HermesInternal;
      return "" + combined + " f/?";
    } else {
      const result2 = 1 / (arg0[2][1] / arg0[2][1] / (arg0[3][0] / arg0[3][1]));
      const _parseFloat = parseFloat;
      const _HermesInternal = HermesInternal;
      return "" + combined + " f/" + parseFloat(result2.toFixed(5));
    }
  }
};
obj[42080] = {
  name: "CompositeImage",
  description(arg0) {
    return { 1: "Not a Composite Image", 2: "General Composite Image", 3: "Composite Image Captured While Shooting" }[arg0] || "Unknown";
  }
};

export default obj;
