// Module ID: 4795
// Function ID: 41456
// Name: getStringFromDataView
// Dependencies: [4780]

// Module 4795 (getStringFromDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = require(4780) /* getStringFromDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4780) /* getStringFromDataView */;
    }
    return tmp2;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
