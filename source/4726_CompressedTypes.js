// Module ID: 4726
// Function ID: 41120
// Name: CompressedTypes
// Dependencies: []

// Module 4726 (CompressedTypes)
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
const items3 = [{ sequence: [] }, { sequence: [], description: "ZLock Pro encrypted ZIP" }, { sequence: [] }, , , , ];
const obj = { 8589944864: 0, 9223372036854775807: 16, 0: 0, sequence: [] };
items3[3] = obj;
items3[4] = { sequence: ["<string:1912602925>", "ti", "_distance", "<string:397552>"], description: "PKZIP archive file - zip file format and multiple formats based on it", compatibleExtensions: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] };
items3[5] = { sequence: [], description: "PKZIP empty archive file - zip file format and multiple formats based on it", compatibleExtensions: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] };
items3[6] = { sequence: [], description: "PKZIP multivolume archive file - zip file format and multiple formats based on it", compatibleExtensions: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] };
_moduleResult.ZIP = { signatures: items3 };

export const CompressedTypes = _moduleResult;
