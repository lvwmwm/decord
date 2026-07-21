// Module ID: 4728
// Function ID: 41106
// Name: OtherTypes
// Dependencies: []

// Module 4728 (OtherTypes)
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
const items1 = [{ sequence: [null, null, null, null, null, null, null, null], compatibleExtensions: [], description: "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications" }, { sequence: [], description: "Microsoft Word 2.0 file format" }];
_moduleResult.DOC = { signatures: items1 };
const items2 = [{ sequence: [] }];
_moduleResult.ELF = { signatures: items2 };
const items3 = [{ sequence: [], compatibleExtensions: [] }, { sequence: [], description: "DOS ZM executable (rare)" }];
_moduleResult.EXE = { signatures: items3 };
const items4 = [{ sequence: [], compatibleExtensions: ["isArray"] }];
_moduleResult.INDD = { signatures: items4 };
const items5 = [{ sequence: [], description: "32-bit" }, { sequence: [], description: "32-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [false, false, false, false], description: "64-bit" }, { sequence: [], description: "64-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [], description: "Mach-O Fat Binary" }];
_moduleResult.MACHO = { signatures: items5 };
const items6 = [{ sequence: [true, true, true, true, true] }];
_moduleResult.PDF = { signatures: items6 };
const items7 = [{ sequence: [-13692955866479830000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009644191332658943, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844671602114993] }];
_moduleResult.ORC = { signatures: items7 };
const items8 = [{ sequence: [true, true, true, true] }];
_moduleResult.PARQUET = { signatures: items8 };
const items9 = [{ sequence: [] }];
_moduleResult.PS = { signatures: items9 };
const items10 = [{ sequence: [455866185154033700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000293784490059988, 2921114644275.2817, 0.0000000000000000000000000000000000000000000000000000000000000000000000011331713194078421, 35.078, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000322060083974601] }];
_moduleResult.RTF = { signatures: items10 };
const items11 = [{ sequence: ["y", "isArray", 35.078, "<string:1356611840>", "<string:1831993346>", "<string:4054449127>", "<string:759165906>", "<string:2817498546>", "<string:37756998>", "<string:38312448>", "<string:37862656>", "<string:37723392>", "<string:37926400>", "<string:39072512>", "<string:2932756736>", "<string:1485531234>"] }];
_moduleResult.SQLITE = { signatures: items11 };
const items12 = [{ sequence: ["items", "shapes", "useRef", "index", "np"] }];
_moduleResult.STL = { signatures: items12 };
const items13 = [{ sequence: ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY"] }, { sequence: [31, 27, 33, 4515, 31], compatibleExtensions: [false] }];
_moduleResult.TTF = { signatures: items13 };
const items14 = [{ sequence: [] }, { sequence: [false, false, null, null], description: "Nanosecond resolution" }];
_moduleResult.PCAP = { signatures: items14 };

export const OtherTypes = _moduleResult;
