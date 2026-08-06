// Module ID: 4927
// Function ID: 4928
// Name: getDataView
// Dependencies: [4912]

// Module 4927 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4912) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4912) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
