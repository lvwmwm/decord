// Module ID: 8060
// Function ID: 8061
// Dependencies: [8045]

// Module 8060
import _mod8045 from "module_8045" /* 8045 */;

let obj = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      const obj = _mod8045;
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
