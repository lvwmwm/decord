// Module ID: 7843
// Function ID: 7844
// Dependencies: [7828]

// Module 7843
import _mod7828 from "module_7828" /* 7828 */;

let obj = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      const obj = _mod7828;
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
