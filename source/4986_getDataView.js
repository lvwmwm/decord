// Module ID: 4986
// Function ID: 4987
// Name: getDataView
// Dependencies: [4971]

// Module 4986 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4971) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4971) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
