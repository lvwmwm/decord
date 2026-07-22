// Module ID: 4761
// Function ID: 41338
// Name: readExifIfd
// Dependencies: []

// Module 4761 (readExifIfd)
function readExifIfd(ifd, byteLength, sum, byteOrder, arg4) {
  let objectAssignResult = ifd;
  if (undefined !== ifd[closure_3]) {
    const obj2 = byteLength(arg6[1]);
    objectAssignResult = byteLength(arg6[3]).objectAssign(ifd, obj2.readIfd(byteLength, byteLength(arg6[2]).IFD_TYPE_EXIF, sum, sum + ifd[closure_3].value, byteOrder, arg4));
    const obj = byteLength(arg6[3]);
  }
  return objectAssignResult;
}
function readGpsIfd(exifIfd, byteLength, sum, byteOrder, arg4) {
  let objectAssignResult = exifIfd;
  if (undefined !== exifIfd[closure_4]) {
    const obj2 = byteLength(arg6[1]);
    objectAssignResult = byteLength(arg6[3]).objectAssign(exifIfd, obj2.readIfd(byteLength, byteLength(arg6[2]).IFD_TYPE_GPS, sum, sum + exifIfd[closure_4].value, byteOrder, arg4));
    const obj = byteLength(arg6[3]);
  }
  return objectAssignResult;
}
let closure_3 = "Exif IFD Pointer";
let closure_4 = "GPS Info IFD Pointer";
let closure_5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, sum1) {
    let obj = arg2(arg6[0]);
    const byteOrder = obj.getByteOrder(getUint16, sum1);
    const obj2 = sum1(arg6[1]);
    obj = { tags: readInteroperabilityIfd(readGpsIfd(readExifIfd(obj2.readIfd(getUint16, sum1(arg6[2]).IFD_TYPE_0TH, sum1, sum1(arg6[1]).get0thIfdOffset(getUint16, sum1, byteOrder), byteOrder, arg2), getUint16, sum1, byteOrder, arg2), getUint16, sum1, byteOrder, arg2), getUint16, sum1, byteOrder, arg2), byteOrder };
    return obj;
  }
};
