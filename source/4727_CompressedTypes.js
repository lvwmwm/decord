// Module ID: 4727
// Function ID: 41104
// Name: CompressedTypes
// Dependencies: []

// Module 4727 (CompressedTypes)
const _module = require(dependencyMap[0]);
let closure_0 = require(dependencyMap[1]);
class CompressedTypes {
  constructor() {
    tmp = closure_0(this, CompressedTypes);
    return;
  }
}
const _moduleResult = _module(CompressedTypes);
const items = [{ sequence: [] }];
_moduleResult._7Z = { signatures: items };
const items1 = [{ sequence: [], description: "Lempel Ziv Huffman archive file Method 0 (No compression)", compatibleExtensions: [] }, { sequence: [], description: "Lempel Ziv Huffman archive file Method 5 (8KiB sliding window)", compatibleExtensions: [] }];
_moduleResult.LZH = { signatures: items1 };
const items2 = [{ sequence: [], description: "Compressed archive v5.00 onwards" }, { sequence: [], description: "Compressed archive v1.50 onwards" }];
_moduleResult.RAR = { signatures: items2 };
let obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, sequence: [] };
const items3 = [obj, { sequence: [], description: "ZLock Pro encrypted ZIP" }, , , , , ];
obj = { "Bool(true)": 0.0392156862745098, "Bool(true)": "OPACITY_YELLOW_12", "Bool(true)": 0.12156862745098039, sequence: [] };
items3[2] = obj;
obj = { "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000663123685, "Bool(true)": -1421487155216666800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 994914276763618300000000000000000000000000000000000000000000000000000000000000000000000, sequence: [] };
items3[3] = obj;
items3[4] = { sequence: [null, null, null, null], description: "PKZIP archive file - zip file format and multiple formats based on it", compatibleExtensions: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true] };
items3[5] = { sequence: [], description: "PKZIP empty archive file - zip file format and multiple formats based on it", compatibleExtensions: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true] };
items3[6] = { sequence: [], description: "PKZIP multivolume archive file - zip file format and multiple formats based on it", compatibleExtensions: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true] };
_moduleResult.ZIP = { signatures: items3 };

export const CompressedTypes = _moduleResult;
