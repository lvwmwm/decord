// Module ID: 4799
// Function ID: 41488
// Name: readExifIfd
// Dependencies: [4785, 4800, 4801, 4780]

// Module 4799 (readExifIfd)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function readExifIfd(ifd, byteLength, sum, byteOrder, arg4) {
  let objectAssignResult = ifd;
  if (undefined !== ifd[c3]) {
    const obj2 = require(4800) /* readTag */;
    objectAssignResult = require(4780) /* getStringFromDataView */.objectAssign(ifd, obj2.readIfd(byteLength, require(4801) /* IFD_TYPE_0TH */.IFD_TYPE_EXIF, sum, sum + ifd[c3].value, byteOrder, arg4));
    const obj = require(4780) /* getStringFromDataView */;
  }
  return objectAssignResult;
}
function readGpsIfd(exifIfd, byteLength, sum, byteOrder, arg4) {
  let objectAssignResult = exifIfd;
  if (undefined !== exifIfd[c4]) {
    const obj2 = require(4800) /* readTag */;
    objectAssignResult = require(4780) /* getStringFromDataView */.objectAssign(exifIfd, obj2.readIfd(byteLength, require(4801) /* IFD_TYPE_0TH */.IFD_TYPE_GPS, sum, sum + exifIfd[c4].value, byteOrder, arg4));
    const obj = require(4780) /* getStringFromDataView */;
  }
  return objectAssignResult;
}
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, sum1) {
    let obj = module(4785);
    const byteOrder = obj.getByteOrder(getUint16, sum1);
    const obj2 = require(4800) /* readTag */;
    obj = { tags: readInteroperabilityIfd(readGpsIfd(readExifIfd(obj2.readIfd(getUint16, require(4801) /* IFD_TYPE_0TH */.IFD_TYPE_0TH, sum1, require(4800) /* readTag */.get0thIfdOffset(getUint16, sum1, byteOrder), byteOrder, arg2), getUint16, sum1, byteOrder, arg2), getUint16, sum1, byteOrder, arg2), getUint16, sum1, byteOrder, arg2), byteOrder };
    return obj;
  }
};
