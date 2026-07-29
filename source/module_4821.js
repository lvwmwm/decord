// Module ID: 4821
// Function ID: 4822
// Dependencies: [4807, 4822, 4823, 4802]

// Module 4821
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, sum) {
    const byteOrder = module(4807).getByteOrder(getUint16, sum);
    const obj = module(4807);
    const obj2 = require(4822) /* readTag */;
    const ifd = obj2.readIfd(getUint16, require(4823) /* importDefaultResult1 */.IFD_TYPE_0TH, sum, require(4822) /* readTag */.get0thIfdOffset(getUint16, sum, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      let tmp3Result = tmp3(4802);
      tmp3Result = tmp3(4822);
      objectAssignResult = tmp3Result.objectAssign(ifd, tmp3Result.readIfd(getUint16, tmp3(4823).IFD_TYPE_EXIF, sum, sum + ifd[tmp5].value, byteOrder, arg2));
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = tmp3(4822);
      objectAssignResult = tmp3(4802).objectAssign(objectAssignResult, tmp3Result2.readIfd(getUint16, tmp3(4823).IFD_TYPE_GPS, sum, sum + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result1 = tmp3(4802);
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = tmp3(4822);
      objectAssignResult1 = tmp3(4802).objectAssign(objectAssignResult, tmp3Result4.readIfd(getUint16, tmp3(4823).IFD_TYPE_INTEROPERABILITY, sum, sum + objectAssignResult[tmp19].value, byteOrder, arg2));
      const tmp3Result3 = tmp3(4802);
    }
    return { tags: objectAssignResult1, byteOrder };
  }
};
