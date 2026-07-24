// Module ID: 4788
// Function ID: 41651
// Name: getAutoRotateDescription
// Dependencies: [4765, 4766, 4745]

// Module 4788 (getAutoRotateDescription)
const require = arg1;
const dependencyMap = arg6;
function getAutoRotateDescription(arg0) {
  let str = "None";
  if (0 !== arg0) {
    let str2 = "Rotate 90 CW";
    if (1 !== arg0) {
      let str3 = "Rotate 180";
      if (2 !== arg0) {
        let str4 = "Unknown";
        if (3 === arg0) {
          str4 = "Rotate 270 CW";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
arg5.default = {
  read(byteLength, sum, arg2, byteOrder) {
    let obj = require(4765) /* readTag */;
    const ifd = obj.readIfd(byteLength, require(4766) /* IFD_TYPE_0TH */.IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp3 = ifd;
    if (ifd.ShotInfo) {
      const value = ifd.ShotInfo.value;
      obj = {};
      if (undefined !== value[27]) {
        obj = { value: value[27], description: getAutoRotateDescription(value[27]) };
        obj.AutoRotate = obj;
      }
      const obj2 = require(4745) /* getStringFromDataView */;
      delete tmp.ShotInfo;
      tmp3 = require(4745) /* getStringFromDataView */.objectAssign({}, ifd, obj);
      const objectAssignResult = require(4745) /* getStringFromDataView */.objectAssign({}, ifd, obj);
    }
    return tmp3;
  },
  SHOT_INFO_AUTO_ROTATE: 27
};
