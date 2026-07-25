// Module ID: 4761
// Function ID: 41340
// Name: getStringFromDataView
// Dependencies: [4746]

// Module 4761 (getStringFromDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = require(4746) /* getStringFromDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4746) /* getStringFromDataView */;
    }
    return tmp2;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
