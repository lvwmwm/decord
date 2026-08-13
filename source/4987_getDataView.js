// Module ID: 4987
// Function ID: 4988
// Name: getDataView
// Dependencies: [4972]

// Module 4987 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4972) /* getDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4972) /* getDataView */;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
