// Module ID: 8215
// Function ID: 8216
// Dependencies: [8200]

// Module 8215
import _mod8200 from "module_8200" /* 8200 */;

let obj = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      const obj = _mod8200;
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
