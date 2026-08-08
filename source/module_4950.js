// Module ID: 4950
// Function ID: 4951
// Dependencies: [4936, 4951, 4952, 4931]

// Module 4950
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, sum) {
    const byteOrder = module(4936).getByteOrder(getUint16, sum);
    const obj = module(4936);
    const obj2 = require(4951) /* readTag */;
    const ifd = obj2.readIfd(getUint16, require(4952) /* importDefaultResult1 */.IFD_TYPE_0TH, sum, require(4951) /* readTag */.get0thIfdOffset(getUint16, sum, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      let tmp3Result = tmp3(4931);
      tmp3Result = tmp3(4951);
      objectAssignResult = tmp3Result.objectAssign(ifd, tmp3Result.readIfd(getUint16, tmp3(4952).IFD_TYPE_EXIF, sum, sum + ifd[tmp5].value, byteOrder, arg2));
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = tmp3(4951);
      objectAssignResult = tmp3(4931).objectAssign(objectAssignResult, tmp3Result2.readIfd(getUint16, tmp3(4952).IFD_TYPE_GPS, sum, sum + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result1 = tmp3(4931);
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = tmp3(4951);
      objectAssignResult1 = tmp3(4931).objectAssign(objectAssignResult, tmp3Result4.readIfd(getUint16, tmp3(4952).IFD_TYPE_INTEROPERABILITY, sum, sum + objectAssignResult[tmp19].value, byteOrder, arg2));
      const tmp3Result3 = tmp3(4931);
    }
    return { tags: objectAssignResult1, byteOrder };
  }
};
