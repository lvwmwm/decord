// Module ID: 5009
// Function ID: 5010
// Name: getDataView
// Dependencies: [4994]

// Module 5009 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4994) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4994) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
