// Module ID: 4925
// Function ID: 4926
// Name: getDataView
// Dependencies: [4910]

// Module 4925 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4910) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4910) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
