// Module ID: 4786
// Function ID: 41613
// Name: getAutoRotateDescription
// Dependencies: []

// Module 4786 (getAutoRotateDescription)
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
    let obj = sum(arg6[0]);
    const ifd = obj.readIfd(byteLength, sum(arg6[1]).IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp2 = ifd;
    if (ifd.ShotInfo) {
      const value = ifd.ShotInfo.value;
      obj = {};
      if (undefined !== value[27]) {
        obj = { value: value[27], description: getAutoRotateDescription(value[27]) };
        obj.AutoRotate = obj;
      }
      const obj2 = sum(arg6[2]);
      delete r1.ShotInfo;
      tmp2 = sum(arg6[2]).objectAssign({}, ifd, obj);
      const objectAssignResult = sum(arg6[2]).objectAssign({}, ifd, obj);
    }
    return tmp2;
  },
  SHOT_INFO_AUTO_ROTATE: 27
};
