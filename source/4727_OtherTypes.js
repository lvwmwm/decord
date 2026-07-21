// Module ID: 4727
// Function ID: 41113
// Name: OtherTypes
// Dependencies: []

// Module 4727 (OtherTypes)
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
let obj = { compileArgument: true, getForumTimestampFormatter: true, separatorProps: true };
const items1 = [{ sequence: [false, false, false, false, false, false, false, false], compatibleExtensions: [], description: "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications" }, { sequence: [], description: "Microsoft Word 2.0 file format" }];
obj.signatures = items1;
_moduleResult.DOC = obj;
obj = { compileArgument: "isArray", getForumTimestampFormatter: "k", separatorProps: "borderRadius" };
const items2 = [{ sequence: [] }];
obj.signatures = items2;
_moduleResult.ELF = obj;
obj = { compileArgument: "errExpectingATEXT", getForumTimestampFormatter: "j", separatorProps: "MiniaturesSpotIllustration" };
const items3 = [{ sequence: [], compatibleExtensions: [] }, { sequence: [], description: "DOS ZM executable (rare)" }];
obj.signatures = items3;
_moduleResult.EXE = obj;
const obj1 = { compileArgument: false, getForumTimestampFormatter: false, separatorProps: false };
const items4 = [{ sequence: [], compatibleExtensions: ["isArray"] }];
obj1.signatures = items4;
_moduleResult.INDD = obj1;
const items5 = [{ sequence: [], description: "32-bit" }, { sequence: [], description: "32-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: ["rangeErrorContainer", "rejectWithError", "isArray", "now"], description: "64-bit" }, { sequence: [], description: "64-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [], description: "Mach-O Fat Binary" }];
_moduleResult.MACHO = { signatures: items5 };
const obj2 = { compileArgument: 175323522330780740000000, getForumTimestampFormatter: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000628106510184449, separatorProps: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000142016690356209 };
const items6 = [{ sequence: ["<string:2032205826>", "<string:4144037890>", "<string:229048321>", "<string:511967233>", "<string:2566586370>"] }];
obj2.signatures = items6;
_moduleResult.PDF = obj2;
const items7 = [{ sequence: [] }];
_moduleResult.ORC = { signatures: items7 };
const obj3 = { compileArgument: "Compression", getForumTimestampFormatter: "PhotometricInterpretation", separatorProps: "CellWidth" };
const items8 = [{ sequence: [] }];
obj3.signatures = items8;
_moduleResult.PARQUET = obj3;
const obj4 = { compileArgument: null, getForumTimestampFormatter: null, separatorProps: null };
const items9 = [{ sequence: [] }];
obj4.signatures = items9;
_moduleResult.PS = obj4;
const obj5 = { compileArgument: 364314281085437700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, getForumTimestampFormatter: 342883277653841200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, separatorProps: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017349230217216044 };
const items10 = [{ sequence: [] }];
obj5.signatures = items10;
_moduleResult.RTF = obj5;
const obj6 = { compileArgument: true, getForumTimestampFormatter: true, separatorProps: true };
const items11 = [{ sequence: [] }];
obj6.signatures = items11;
_moduleResult.SQLITE = obj6;
const items12 = [{ sequence: ["cancelFriendRequest", "edgeWidth", "idNodeMap", "linkRootNode", "a"] }];
_moduleResult.STL = { signatures: items12 };
const items13 = [{ sequence: [] }, { sequence: [], compatibleExtensions: [] }];
_moduleResult.TTF = { signatures: items13 };
const obj7 = { compileArgument: null, getForumTimestampFormatter: null, separatorProps: null };
const items14 = [{ sequence: ["<string:4095279105>", "<string:3389849601>", "<string:2706505730>", "<string:1377008291>"] }, { sequence: ["needsPointerData", "manualActivation", "minForce", "maxForce"], description: "Nanosecond resolution" }];
obj7.signatures = items14;
_moduleResult.PCAP = obj7;

export const OtherTypes = _moduleResult;
