// Module ID: 4726
// Function ID: 41111
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
let obj = { compileArgument: "Array", getForumTimestampFormatter: "SETTINGS_APP_DMS_MENU", separatorProps: "_distance" };
const items = [{ sequence: [] }];
obj.signatures = items;
_moduleResult._7Z = obj;
const items1 = [{ sequence: [], description: "Lempel Ziv Huffman archive file Method 0 (No compression)", compatibleExtensions: [] }, { sequence: [], description: "Lempel Ziv Huffman archive file Method 5 (8KiB sliding window)", compatibleExtensions: [] }];
_moduleResult.LZH = { signatures: items1 };
obj = { compileArgument: "Particle_3", getForumTimestampFormatter: 2, separatorProps: 2 };
const items2 = [{ sequence: [], description: "Compressed archive v5.00 onwards" }, { sequence: [], description: "Compressed archive v1.50 onwards" }];
obj.signatures = items2;
_moduleResult.RAR = obj;
obj = { 0: 0, 0: 40, 9223372036854775807: 40, sequence: [] };
const items3 = [obj, { sequence: [], description: "ZLock Pro encrypted ZIP" }, , , , , ];
const obj1 = { 0: 0.0392156862745098, 0: "OPACITY_YELLOW_12", 9223372036854775807: 0.12156862745098039, sequence: [] };
items3[2] = obj1;
items3[3] = { sequence: [] };
items3[4] = { sequence: [null, null, null, null], description: "PKZIP archive file - zip file format and multiple formats based on it", compatibleExtensions: [] };
items3[5] = { sequence: [], description: "PKZIP empty archive file - zip file format and multiple formats based on it", compatibleExtensions: [] };
items3[6] = { sequence: [], description: "PKZIP multivolume archive file - zip file format and multiple formats based on it", compatibleExtensions: [] };
_moduleResult.ZIP = { signatures: items3 };

export const CompressedTypes = _moduleResult;
