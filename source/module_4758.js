// Module ID: 4758
// Function ID: 41290
// Dependencies: []

// Module 4758
let closure_2 = 0;
let closure_3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = arg1(arg6[0]).getStringFromDataView(dataView, closure_2, length.length) === length;
      const obj = arg1(arg6[0]);
    }
    return tmp2;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: closure_2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};
