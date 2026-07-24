// Module ID: 4729
// Function ID: 41142
// Name: CompressedTypes
// Dependencies: [7, 6]

// Module 4729 (CompressedTypes)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";

class CompressedTypes {
  constructor() {
    tmp = c0(this, CompressedTypes);
    return;
  }
}
const _moduleResult = _defineProperties(CompressedTypes);
let obj = { extension: "7z", mimeType: "application/x-7z-compressed", description: "7-Zip compressed file" };
const items = [{ sequence: [55, 122, 188, 175, 39, 28] }];
obj.signatures = items;
_moduleResult._7Z = obj;
obj = { extension: "lzh", mimeType: "application/x-lzh-compressed", description: "Compressed file using Lempel-Ziv and Haruyasu (LZH) compression algorithm" };
const items1 = [{ sequence: [45, 104, 108, 48, 45], description: "Lempel Ziv Huffman archive file Method 0 (No compression)", compatibleExtensions: ["lha"] }, { sequence: [45, 104, 108, 53, 45], description: "Lempel Ziv Huffman archive file Method 5 (8KiB sliding window)", compatibleExtensions: ["lha"] }];
obj.signatures = items1;
_moduleResult.LZH = obj;
obj = { extension: "rar", mimeType: "application/x-rar-compressed", description: "Roshal ARchive compressed archive file" };
const items2 = [{ sequence: [82, 97, 114, 33, 26, 7, 0], description: "Compressed archive v5.00 onwards" }, { sequence: [82, 97, 114, 33, 26, 7, 1, 0], description: "Compressed archive v1.50 onwards" }];
obj.signatures = items2;
_moduleResult.RAR = obj;
const obj1 = { extension: "zip", mimeType: "application/zip", description: "Compressed archive file" };
const obj2 = { sequence: [87, 105, 110, 90, 105, 112], offset: 29152, description: "WinZip compressed archive" };
const items3 = [obj2, { sequence: [80, 75, 3, 4, 20, 0, 1, 0, 99, 0, 0, 0, 0, 0], description: "ZLock Pro encrypted ZIP" }, , , , , ];
const obj3 = { sequence: [80, 75, 76, 73, 84, 69], offset: 30, description: "PKLITE compressed ZIP archive (see also PKZIP)" };
items3[2] = obj3;
const obj4 = { sequence: [80, 75, 83, 112, 88], offset: 526, description: "PKSFX self-extracting executable compressed file (see also PKZIP)" };
items3[3] = obj4;
items3[4] = { sequence: [80, 75, 3, 4], description: "PKZIP archive file - zip file format and multiple formats based on it", compatibleExtensions: ["aar", "apk", "docx", "epub", "ipa", "jar", "kmz", "maff", "msix", "odp", "ods", "odt", "pk3", "pk4", "pptx", "usdz", "vsdx", "xlsx", "xpi"] };
items3[5] = { sequence: [80, 75, 5, 6], description: "PKZIP empty archive file - zip file format and multiple formats based on it", compatibleExtensions: ["aar", "apk", "docx", "epub", "ipa", "jar", "kmz", "maff", "msix", "odp", "ods", "odt", "pk3", "pk4", "pptx", "usdz", "vsdx", "xlsx", "xpi"] };
items3[6] = { sequence: [80, 75, 7, 8], description: "PKZIP multivolume archive file - zip file format and multiple formats based on it", compatibleExtensions: ["aar", "apk", "docx", "epub", "ipa", "jar", "kmz", "maff", "msix", "odp", "ods", "odt", "pk3", "pk4", "pptx", "usdz", "vsdx", "xlsx", "xpi"] };
obj1.signatures = items3;
_moduleResult.ZIP = obj1;

export const CompressedTypes = _moduleResult;
