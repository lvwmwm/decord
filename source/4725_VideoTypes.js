// Module ID: 4725
// Function ID: 41118
// Name: VideoTypes
// Dependencies: []

// Module 4725 (VideoTypes)
const _module = require(dependencyMap[0]);
let closure_0 = require(dependencyMap[1]);
class VideoTypes {
  constructor() {
    tmp = closure_0(this, VideoTypes);
    return;
  }
}
const _moduleResult = _module(VideoTypes);
const items = [{ sequence: [], skippedBytes: ["<string:77320448>", "<string:3733213440>", "<string:1369907281>", "<string:1129440336>"] }];
_moduleResult.AVI = { signatures: items };
const items1 = [{ sequence: [] }, { sequence: [], compatibleExtensions: [] }];
_moduleResult.FLV = { signatures: items1 };
const items2 = [{ sequence: [], compatibleExtensions: [90] }, { sequence: [], compatibleExtensions: [] }];
_moduleResult.M4V = { signatures: items2 };
const items3 = [{ sequence: [], description: "EBML identifier", compatibleExtensions: [45, 104, 108, 48] }];
_moduleResult.MKV = { signatures: items3 };
const items4 = [{ sequence: [false, false, false, false, false, false, false, false], offset: 4 }, { sequence: [], offset: 4 }];
_moduleResult.MOV = { signatures: items4 };
const items5 = [{ sequence: [] }, { sequence: [] }, { sequence: [], compatibleExtensions: [] }];
_moduleResult.MP4 = { signatures: items5 };
const items6 = [{ sequence: [], compatibleExtensions: [] }];
_moduleResult.OGG = { signatures: items6 };
const items7 = [{ sequence: [], description: "Macromedia Shockwave Flash player file (zlib compressed, SWF 6 and later)" }, { sequence: ["isArray", "ChangePhoneReason", "isArray"], description: "Macromedia Shockwave Flash player file (uncompressed)" }, { sequence: ["<string:1392508928>", "<string:1879048192>", "<string:1476395008>"], description: "Macromedia Shockwave Flash player file (uncompressed)" }];
_moduleResult.SWF = { signatures: items7 };
const items8 = [{ sequence: [], description: "EBML identifier", compatibleExtensions: [] }];
_moduleResult.WEBM = { signatures: items8 };

export const VideoTypes = _moduleResult;
