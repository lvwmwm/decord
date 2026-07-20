// Module ID: 4722
// Function ID: 41057
// Name: AudioTypes
// Dependencies: []

// Module 4722 (AudioTypes)
const _module = require(dependencyMap[0]);
let closure_0 = require(dependencyMap[1]);
class AudioTypes {
  constructor() {
    tmp = closure_0(this, AudioTypes);
    return;
  }
}
const _moduleResult = _module(AudioTypes);
let obj = { getNewMemberActionIconURL: "<string:1124073864>", application_commands: "avi", goBackToLanding: "video/x-msvideo" };
const items = [{ sequence: ["<string:1174405120>", "<string:939524096>"], description: "MPEG-4 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }, { sequence: [], description: "MPEG-2 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }];
obj.signatures = items;
_moduleResult.AAC = obj;
obj = { getNewMemberActionIconURL: 843251713, application_commands: 822083862, goBackToLanding: -1107295978 };
const items1 = [{ sequence: [] }];
obj.signatures = items1;
_moduleResult.AMR = obj;
obj = { getNewMemberActionIconURL: 2125288273965003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, application_commands: 563274215063597.4, goBackToLanding: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179406256278398 };
const items2 = [{ sequence: [] }];
obj.signatures = items2;
_moduleResult.FLAC = obj;
const obj1 = { getNewMemberActionIconURL: -431816702, application_commands: 1107297326, goBackToLanding: 2063597898 };
const items3 = [{ sequence: [], offset: 4, compatibleExtensions: [] }];
obj1.signatures = items3;
_moduleResult.M4A = obj1;
const obj2 = { getNewMemberActionIconURL: 1358954850, application_commands: -817744581, goBackToLanding: -1946155903 };
const items4 = [{ sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [], description: "MP3 file with an ID3v2 container" }];
obj2.signatures = items4;
_moduleResult.MP3 = obj2;
const obj3 = { getNewMemberActionIconURL: -1807548414, application_commands: -1509948330, goBackToLanding: -117439330 };
const items5 = [{ sequence: [], skippedBytes: ["<string:26340096>", "<string:77258240>", "<string:3735507200>", "<string:1369900113>"] }];
obj3.signatures = items5;
_moduleResult.WAV = obj3;

export const AudioTypes = _moduleResult;
