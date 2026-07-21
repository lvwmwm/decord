// Module ID: 4723
// Function ID: 41105
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
let obj = { compileArgument: null, getForumTimestampFormatter: null, separatorProps: null };
const items = [{ sequence: [], description: "MPEG-4 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }, { sequence: [], description: "MPEG-2 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }];
obj.signatures = items;
_moduleResult.AAC = obj;
obj = { compileArgument: "r", getForumTimestampFormatter: "isArray", separatorProps: "sk" };
const items1 = [{ sequence: [] }];
obj.signatures = items1;
_moduleResult.AMR = obj;
obj = { compileArgument: null, getForumTimestampFormatter: null, separatorProps: null };
const items2 = [{ sequence: [] }];
obj.signatures = items2;
_moduleResult.FLAC = obj;
const obj1 = { compileArgument: null, getForumTimestampFormatter: "<string:1635516417>", separatorProps: "<string:3998285825>" };
const items3 = [{ sequence: [], offset: 4, compatibleExtensions: [] }];
obj1.signatures = items3;
_moduleResult.M4A = obj1;
const obj2 = { compileArgument: true, getForumTimestampFormatter: true, separatorProps: true };
const items4 = [{ sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MP3 file with an ID3v2 container" }];
obj2.signatures = items4;
_moduleResult.MP3 = obj2;
const obj3 = { compileArgument: true, getForumTimestampFormatter: true, separatorProps: true };
const items5 = [{ sequence: ["<string:2013265920>", "<string:1761607680>", "<string:1711276032>", "isArray", "<string:2046820352>", 14155776, 16711680, 15204352, 5439488, 5242880, 4784128, 4587520], skippedBytes: [null, true, true, true] }];
obj3.signatures = items5;
_moduleResult.WAV = obj3;

export const AudioTypes = _moduleResult;
