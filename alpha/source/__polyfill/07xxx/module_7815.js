// Module ID: 7815
// Function ID: 7816
// Dependencies: [7800]

// Module 7815
import _mod7800 from "module_7800" /* 7800 */;

let obj = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      const obj = _mod7800;
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
