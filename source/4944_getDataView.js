// Module ID: 4944
// Function ID: 4945
// Name: getDataView
// Dependencies: [4929]

// Module 4944 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4929) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4929) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
