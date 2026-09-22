// Module ID: 5313
// Function ID: 5314
// Dependencies: [5299, 5314, 5315, 5294]

// Module 5313
import _modDef5299 from "module_5299" /* 5299 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5314 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5315 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const byteOrder = _modDef5299.getByteOrder(getUint16, c5);
    const obj2 = get0thIfdOffset;
    const ifd = obj2.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_0TH, c5, get0thIfdOffset.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result6 = tmp3(5314);
      objectAssignResult = tmp3(5294).objectAssign(ifd, tmp3Result6.readIfd(getUint16, tmp3(5315).IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2));
      const tmp3Result = tmp3(5294);
    }
    let objectAssignResult3 = objectAssignResult;
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result8 = tmp3(5314);
      objectAssignResult3 = tmp3(5294).objectAssign(objectAssignResult, tmp3Result8.readIfd(getUint16, tmp3(5315).IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result7 = tmp3(5294);
    }
    let objectAssignResult4 = objectAssignResult3;
    if (undefined !== objectAssignResult3[c5]) {
      const tmp3Result10 = tmp3(5314);
      objectAssignResult4 = tmp3(5294).objectAssign(objectAssignResult3, tmp3Result10.readIfd(getUint16, tmp3(5315).IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssignResult3[tmp19].value, byteOrder, arg2));
      const tmp3Result9 = tmp3(5294);
    }
    return { tags: objectAssignResult4, byteOrder };
  }
};
