// Module ID: 4760
// Function ID: 41328
// Name: getStringFromDataView
// Dependencies: [4745]

// Module 4760 (getStringFromDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = require(4745) /* getStringFromDataView */.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = require(4745) /* getStringFromDataView */;
    }
    return tmp2;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
