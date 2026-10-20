// Module ID: 8177
// Function ID: 8178
// Dependencies: [8163, 8178, 8179, 8158]

// Module 8177
import _mod8158 from "module_8158" /* 8158 */;
import _modDef8163 from "module_8163" /* 8163 */;
import get0thIfdOffset from "get0thIfdOffset" /* 8178 */;
import IFD_TYPE_0TH2 from "IFD_TYPE_0TH" /* 8179 */;

let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const obj = _modDef8163;
    const byteOrder = obj.getByteOrder(getUint16, c5);
    const readIfd = get0thIfdOffset.readIfd;
    get0thIfdOffset;
    const IFD_TYPE_0TH = IFD_TYPE_0TH2.IFD_TYPE_0TH;
    const obj2 = get0thIfdOffset;
    const ifd = readIfd(getUint16, IFD_TYPE_0TH, c5, obj2.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const objectAssign = _mod8158.objectAssign;
      _mod8158;
      const tmp3Result6 = get0thIfdOffset;
      objectAssignResult = objectAssign(ifd, tmp3Result6.readIfd(getUint16, tmp3(8179).IFD_TYPE_EXIF, c5, c5 + ifd[tmp6].value, byteOrder, arg2));
    }
    let objectAssign1Result = objectAssignResult;
    if (undefined !== objectAssignResult[c4]) {
      const objectAssign2 = _mod8158.objectAssign;
      _mod8158;
      const tmp3Result8 = get0thIfdOffset;
      objectAssign1Result = objectAssign2(objectAssignResult, tmp3Result8.readIfd(getUint16, tmp3(8179).IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp14].value, byteOrder, arg2));
    }
    let objectAssign4Result = objectAssign1Result;
    if (undefined !== objectAssign1Result[c5]) {
      const objectAssign3 = _mod8158.objectAssign;
      _mod8158;
      const tmp3Result10 = get0thIfdOffset;
      objectAssign4Result = objectAssign3(objectAssign1Result, tmp3Result10.readIfd(getUint16, tmp3(8179).IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssign1Result[tmp22].value, byteOrder, arg2));
    }
    return { tags: objectAssign4Result, byteOrder };
  }
};
