// Module ID: 4796
// Function ID: 41708
// Name: getTagValue
// Dependencies: [4768]

// Module 4796 (getTagValue)
const module = arg2;
const dependencyMap = arg6;
function getTagValue(arg0, arg1, arg2, arg3) {
  if (arg3) {
    if (arg0[arg1]) {
      if (arg0[arg1][arg2]) {
        let value = arg0[arg1][arg2].value;
      }
      return value;
    }
  }
  if (!arg3) {
    if (arg0[arg2]) {
      value = arg0[arg2].value;
    }
  }
}
let obj = { INCHES: 2, CENTIMETERS: 3, MILLIMETERS: 4 };
arg5.default = {
  get(arg0, arg1) {
    let obj = {};
    const tmp = getTagValue(arg0, "exif", "FocalLength", arg1);
    const tmp2 = getTagValue(arg0, "exif", "FocalPlaneXResolution", arg1);
    const tmp4 = getTagValue(arg0, "exif", "FocalPlaneResolutionUnit", arg1);
    const tmp3 = getTagValue(arg0, "exif", "FocalPlaneYResolution", arg1);
    const tmp5 = getTagValue(arg0, "file", "Image Width", arg1);
    const tmp7 = getTagValue(arg0, "exif", "FocalLengthIn35mmFilm", arg1);
    if (tmp7) {
      let flag = false;
      if (tmp7) {
        obj = { value: tmp7, description: module(4768).FocalLengthIn35mmFilm(tmp7) };
        obj.FocalLength35efl = obj;
        flag = true;
        const obj3 = module(4768);
      }
      if (tmp) {
        if (tmp32) {
          const result = tmp7 / (tmp[0] / tmp[1]);
          obj = { value: result, description: result.toFixed(1) };
        }
      }
      while (true) {
        if (!tmp33) {
          break;
        } else {
          obj.ScaleFactorTo35mmEquivalent = tmp33;
          flag = true;
          break;
        }
        let tmp35 = tmp7;
        let num10 = 36;
        if (tmp7) {
          let tmp37 = globalThis;
          let _Math = Math;
          let num11 = 36;
          let num12 = 2;
          let _Math2 = Math;
          let num13 = 180;
          let result1 = 2 * Math.atan(36 / (2 * tmp7)) * (180 / Math.PI);
          let obj1 = { value: result1 };
          let num14 = 1;
          let str = " deg";
          obj1.description = `${obj6.toFixed(1)} deg`;
          let tmp36 = obj1;
        }
        while (true) {
          if (!tmp36) {
            break;
          } else {
            obj.FieldOfView = tmp36;
            flag = true;
            break;
          }
          return flag ? obj : undefined;
        }
      }
    } else {
      let first = tmp2;
      let sqrt = tmp3;
      let sqrtResult = tmp6;
      let result4 = tmp;
      let num = 43.27;
      let tmp13;
      if (tmp2) {
        if (sqrt) {
          if (tmp9) {
            if (tmp10) {
              if (sqrtResult) {
                if (result4) {
                  if (obj.INCHES === tmp9) {
                    let num2 = 25.4;
                  } else {
                    if (obj.CENTIMETERS === tmp9) {
                      num2 = 10;
                    }
                    num2 = 1;
                  }
                }
                const result2 = sqrtResult / (sqrt[0] / sqrt[1] * num2);
                const result3 = Math / (first[0] / first[1] * num2);
                sqrt = Math.sqrt;
                sqrtResult = sqrt(result3 ** 2 + result2 ** 2);
                first = result4[0];
                result4 = first / result4[1];
                num = result4 * (num / sqrtResult);
                tmp13 = num;
              }
            }
          }
        }
      }
    }
  }
};
arg5.FOCAL_PLANE_RESOLUTION_UNIT = obj;
