// Module ID: 4786
// Function ID: 41623
// Name: getOrientationDescription
// Dependencies: []

// Module 4786 (getOrientationDescription)
function getOrientationDescription(int8) {
  let str = "Horizontal (normal)";
  if (0 !== int8) {
    let str2 = "Rotate 270 CW";
    if (1 !== int8) {
      let str3 = "Rotate 180";
      if (2 !== int8) {
        let str4 = "Rotate 90 CW";
        if (3 !== int8) {
          let str5 = "Upwards";
          if (4 !== int8) {
            let str6 = "Unknown";
            if (5 === int8) {
              str6 = "Downwards";
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
function getRollAngleDescription(int16) {
  return "" + -0.5 * int16;
}
function getPitchAngleDescription(int161) {
  return "" + -0.5 * int161;
}
let obj = { K3_III: 78420 };
obj = {};
obj = {
  read(byteLength) {
    let obj = arg2(arg6[0]);
    const byteOrder = obj.getByteOrder(byteLength, arg1 + arg2 + 8);
    const sum = arg1 + arg2;
    let obj1 = arg1(arg6[1]);
    const ifd = obj1.readIfd(byteLength, arg1(arg6[2]).IFD_TYPE_PENTAX, sum, sum + 10, byteOrder, arg3, true);
    let LevelInfo = ifd.PentaxModelID;
    if (LevelInfo) {
      LevelInfo = ifd.PentaxModelID.value === obj.K3_III;
    }
    if (LevelInfo) {
      LevelInfo = ifd.LevelInfo;
    }
    let tmp5 = ifd;
    if (LevelInfo) {
      let obj2 = arg1(arg6[3]);
      const sum1 = sum + ifd.LevelInfo.__offset;
      obj = {};
      if (sum1 + 7 <= byteLength.byteLength) {
        const int8 = byteLength.getInt8(sum1 + obj.CAMERA_ORIENTATION);
        obj = { value: int8, description: getOrientationDescription(int8) };
        obj.CameraOrientation = obj;
        const sum2 = sum1 + obj.ROLL_ANGLE;
        const int16 = byteLength.getInt16(sum2, byteOrder === arg2(arg6[0]).LITTLE_ENDIAN);
        obj1 = { value: int16, description: getRollAngleDescription(int16) };
        obj.RollAngle = obj1;
        const sum3 = sum1 + obj.PITCH_ANGLE;
        const int161 = byteLength.getInt16(sum3, byteOrder === arg2(arg6[0]).LITTLE_ENDIAN);
        obj2 = { value: int161, description: getPitchAngleDescription(int161) };
        obj.PitchAngle = obj2;
      }
      delete r1.LevelInfo;
      tmp5 = obj2.objectAssign({}, ifd, obj);
      const objectAssignResult = obj2.objectAssign({}, ifd, obj);
    }
    return tmp5;
  },
  PENTAX_IFD_OFFSET: 10,
  MODEL_ID: obj,
  LIK3III: obj
};
arg5.default = obj;
