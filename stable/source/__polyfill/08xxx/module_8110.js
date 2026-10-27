// Module ID: 8110
// Function ID: 8111
// Dependencies: [8095]

// Module 8110
import _mod8095 from "module_8095" /* 8095 */;

let obj = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      const obj = _mod8095;
      tmp = obj.getStringFromDataView(dataView, c2, length.length) === length;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    const obj = { dataOffset, length: byteLength.byteLength };
    xmpChunks.push(obj);
    return { xmpChunks };
  }
};
let c2 = 0;
let c3 = "<?xpacket begin";

export default obj;
