// Module ID: 4780
// Function ID: 41557
// Name: fraction
// Dependencies: []

// Module 4780 (fraction)
function fraction(ApertureValue, str) {
  let tmp = str;
  if (isFraction(str)) {
    tmp = ApertureValue(str.split("/"));
  }
  return tmp;
}
function isFraction(arg0) {
  return /^-?\d+\/-?\d+$/.test(arg0);
}
function calculateGPSValue(str) {
  const tmp = callback(str.split(","), 2);
  const first = tmp[0];
  if (undefined !== first) {
    if (undefined !== str) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(first);
      const _parseFloat2 = parseFloat;
      const parsed1 = parseFloat(str);
      const _Number = Number;
      if (!Number.isNaN(parsed)) {
        const _Number2 = Number;
        if (!Number.isNaN(parsed1)) {
          return "" + (parsed + parsed1 / 60) + charAtResult;
        }
      }
      const charAtResult = str.charAt(str.length - 1);
    }
  }
  return str;
}
let closure_2 = importDefault(dependencyMap[0]);

export default {
  tiff:Orientation: function tiffOrientation(arg0) {
    let str = "Horizontal (normal)";
    if ("1" !== arg0) {
      let str14 = "Mirror horizontal";
      if ("2" !== arg0) {
        let str2 = "Rotate 180";
        if ("3" !== arg0) {
          let str4 = "Mirror vertical";
          if ("4" !== arg0) {
            let str6 = "Mirror horizontal and rotate 270 CW";
            if ("5" !== arg0) {
              let str8 = "Rotate 90 CW";
              if ("6" !== arg0) {
                let str10 = "Mirror horizontal and rotate 90 CW";
                if ("7" !== arg0) {
                  let str12 = "Rotate 270 CW";
                  if ("8" !== arg0) {
                    str12 = arg0;
                  }
                  str10 = str12;
                }
                str8 = str10;
              }
              str6 = str8;
            }
            str4 = str6;
          }
          str2 = str4;
        }
        str14 = str2;
      }
      str = str14;
    }
    return str;
  },
  tiff:ResolutionUnit: function tiffResolutionUnit(replaced) {
    return importDefault(dependencyMap[1]).ResolutionUnit(parseInt(replaced, 10));
  },
  tiff:XResolution: function tiffXResolution(arg0) {
    return fraction(importDefault(dependencyMap[1]).XResolution, arg0);
  },
  tiff:YResolution: function tiffYResolution(arg0) {
    return fraction(importDefault(dependencyMap[1]).YResolution, arg0);
  },
  exif:ApertureValue: function exifApertureValue(arg0) {
    return fraction(importDefault(dependencyMap[1]).ApertureValue, arg0);
  },
  exif:GPSLatitude: calculateGPSValue,
  exif:GPSLongitude: calculateGPSValue,
  exif:FNumber: function exifFNumber(arg0) {
    return fraction(importDefault(dependencyMap[1]).FNumber, arg0);
  },
  exif:FocalLength: function exifFocalLength(arg0) {
    return fraction(importDefault(dependencyMap[1]).FocalLength, arg0);
  },
  exif:FocalPlaneResolutionUnit: function exifFocalPlaneResolutionUnit(replaced) {
    return importDefault(dependencyMap[1]).FocalPlaneResolutionUnit(parseInt(replaced, 10));
  },
  exif:ColorSpace: function exifColorSpace(replaced) {
    if ("0x" === replaced.substring(0, 2)) {
      const _parseInt2 = parseInt;
      let parsed = parseInt(replaced.substring(2), 16);
    } else {
      const _parseInt = parseInt;
      parsed = parseInt(replaced, 10);
    }
    return importDefault(dependencyMap[1]).ColorSpace(parsed);
  },
  exif:ComponentsConfiguration: function exifComponentsConfiguration(arg0, str) {
    if (obj.test(str)) {
      const parts = str.split(", ");
      const mapped = parts.map((str) => str.charCodeAt(0));
      return importDefault(dependencyMap[1]).ComponentsConfiguration(mapped);
    } else {
      return str;
    }
    const obj = /^\d, \d, \d, \d$/;
  },
  exif:Contrast: function exifContrast(replaced) {
    return importDefault(dependencyMap[1]).Contrast(parseInt(replaced, 10));
  },
  exif:CustomRendered: function exifCustomRendered(replaced) {
    return importDefault(dependencyMap[1]).CustomRendered(parseInt(replaced, 10));
  },
  exif:ExposureMode: function exifExposureMode(replaced) {
    return importDefault(dependencyMap[1]).ExposureMode(parseInt(replaced, 10));
  },
  exif:ExposureProgram: function exifExposureProgram(replaced) {
    return importDefault(dependencyMap[1]).ExposureProgram(parseInt(replaced, 10));
  },
  exif:ExposureTime: function exifExposureTime(str) {
    let ExposureTimeResult = str;
    if (isFraction(str)) {
      const parts = str.split("/");
      ExposureTimeResult = importDefault(dependencyMap[1]).ExposureTime(parts.map((replaced) => parseInt(replaced, 10)));
      const obj = importDefault(dependencyMap[1]);
    }
    return ExposureTimeResult;
  },
  exif:MeteringMode: function exifMeteringMode(replaced) {
    return importDefault(dependencyMap[1]).MeteringMode(parseInt(replaced, 10));
  },
  exif:Saturation: function exifSaturation(replaced) {
    return importDefault(dependencyMap[1]).Saturation(parseInt(replaced, 10));
  },
  exif:SceneCaptureType: function exifSceneCaptureType(replaced) {
    return importDefault(dependencyMap[1]).SceneCaptureType(parseInt(replaced, 10));
  },
  exif:Sharpness: function exifSharpness(replaced) {
    return importDefault(dependencyMap[1]).Sharpness(parseInt(replaced, 10));
  },
  exif:ShutterSpeedValue: function exifShutterSpeedValue(arg0) {
    return fraction(importDefault(dependencyMap[1]).ShutterSpeedValue, arg0);
  },
  exif:WhiteBalance: function exifWhiteBalance(replaced) {
    return importDefault(dependencyMap[1]).WhiteBalance(parseInt(replaced, 10));
  }
};
