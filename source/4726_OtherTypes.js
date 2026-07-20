// Module ID: 4726
// Function ID: 41065
// Name: OtherTypes
// Dependencies: []

// Module 4726 (OtherTypes)
const _module = require(dependencyMap[0]);
let closure_0 = require(dependencyMap[1]);
class OtherTypes {
  constructor() {
    tmp = closure_0(this, OtherTypes);
    return;
  }
}
const _moduleResult = _module(OtherTypes);
const items = [{ sequence: [] }];
_moduleResult.BLEND = { signatures: items };
const items1 = [{ sequence: [1946157617, 254, 237, 250, 206, 52852, 64000, 60672], compatibleExtensions: [], description: "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications" }, { sequence: [], description: "Microsoft Word 2.0 file format" }];
_moduleResult.DOC = { signatures: items1 };
let obj = { getNewMemberActionIconURL: true, application_commands: true, goBackToLanding: true };
const items2 = [{ sequence: [] }];
obj.signatures = items2;
_moduleResult.ELF = obj;
obj = { getNewMemberActionIconURL: "isArray", application_commands: "key", goBackToLanding: "bottom" };
const items3 = [{ sequence: [], compatibleExtensions: [] }, { sequence: [], description: "DOS ZM executable (rare)" }];
obj.signatures = items3;
_moduleResult.EXE = obj;
obj = { getNewMemberActionIconURL: true, application_commands: true, goBackToLanding: true };
const items4 = [{ sequence: [], compatibleExtensions: ["isArray"] }];
obj.signatures = items4;
_moduleResult.INDD = obj;
const obj1 = { getNewMemberActionIconURL: false, application_commands: false, goBackToLanding: false };
const items5 = [{ sequence: [], description: "32-bit" }, { sequence: [], description: "32-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [false, false, false, false], description: "64-bit" }, { sequence: [], description: "64-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [], description: "Mach-O Fat Binary" }];
obj1.signatures = items5;
_moduleResult.MACHO = obj1;
const items6 = [{ sequence: [] }];
_moduleResult.PDF = { signatures: items6 };
const items7 = [{ sequence: [] }];
_moduleResult.ORC = { signatures: items7 };
const obj2 = { getNewMemberActionIconURL: null, application_commands: null, goBackToLanding: null };
const items8 = [{ sequence: ["isArray", "message", "values", "r"] }];
obj2.signatures = items8;
_moduleResult.PARQUET = obj2;
const items9 = [{ sequence: [] }];
_moduleResult.PS = { signatures: items9 };
const items10 = [{ sequence: [] }];
_moduleResult.RTF = { signatures: items10 };
const obj3 = { getNewMemberActionIconURL: "<string:1572995073>", application_commands: "<string:554893313>", goBackToLanding: "<string:2029191169>" };
const items11 = [{ sequence: ["<string:2889940993>", "<string:1174405712>", "426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465", "<string:1658101329>", "<string:2673380200>", null, null, null, null, null, null] }];
obj3.signatures = items11;
_moduleResult.SQLITE = obj3;
const obj4 = { getNewMemberActionIconURL: 1842544641, application_commands: 1981349889, goBackToLanding: 2140930050 };
const items12 = [{ sequence: [true, true, true, true, true] }];
obj4.signatures = items12;
_moduleResult.STL = obj4;
const items13 = [{ sequence: ["<string:3435973836>", "<string:1246052332>", "<string:3120562677>", "<string:3724542291>", "<string:1107296711>"] }, { sequence: [680568770041389000000000000000000000000, null, null, null, null], compatibleExtensions: ["<string:2919236084>"] }];
_moduleResult.TTF = { signatures: items13 };
const items14 = [{ sequence: ["<string:2744996352>", "<string:42019149>", "<string:76644608>", "<string:18080768>"] }, { sequence: [], description: "Nanosecond resolution" }];
_moduleResult.PCAP = { signatures: items14 };

export const OtherTypes = _moduleResult;
