// Module ID: 4723
// Function ID: 41114
// Name: AudioTypes
// Dependencies: []

// Module 4723 (AudioTypes)
const _module = require(dependencyMap[0]);
let closure_0 = require(dependencyMap[1]);
class AudioTypes {
  constructor() {
    tmp = closure_0(this, AudioTypes);
    return;
  }
}
const _moduleResult = _module(AudioTypes);
const items = [{ sequence: [], description: "MPEG-4 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }, { sequence: [], description: "MPEG-2 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }];
_moduleResult.AAC = { signatures: items };
const items1 = [{ sequence: [] }];
_moduleResult.AMR = { signatures: items1 };
const items2 = [{ sequence: [] }];
_moduleResult.FLAC = { signatures: items2 };
const items3 = [{ sequence: [], offset: 4, compatibleExtensions: [] }];
_moduleResult.M4A = { signatures: items3 };
const items4 = [{ sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MP3 file with an ID3v2 container" }];
_moduleResult.MP3 = { signatures: items4 };
const items5 = [{ sequence: ["<string:2013265920>", "<string:1761607680>", "<string:1711276032>", "isArray", "<string:2046820352>", 14155776, 16711680, 15204352, 5439488, 5242880, 4784128, 4587520], skippedBytes: ["<string:77320448>", "<string:3733213440>", "<string:1369907281>", "<string:1129440336>"] }];
_moduleResult.WAV = { signatures: items5 };

export const AudioTypes = _moduleResult;
