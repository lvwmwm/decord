// Module ID: 4912
// Function ID: 4913
// Name: getDataView
// Dependencies: [4897]

// Module 4912 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4897) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4897) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
