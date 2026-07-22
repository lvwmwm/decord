// Module ID: 4727
// Function ID: 41122
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
const items1 = [{ sequence: ["Boolean", "r", "isArray", "content", "withTiming", "isArray", "isArray", "isArray"], compatibleExtensions: [], description: "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications" }, { sequence: [], description: "Microsoft Word 2.0 file format" }];
_moduleResult.DOC = { signatures: items1 };
const items2 = [{ sequence: [] }];
_moduleResult.ELF = { signatures: items2 };
const items3 = [{ sequence: [], compatibleExtensions: [] }, { sequence: [], description: "DOS ZM executable (rare)" }];
_moduleResult.EXE = { signatures: items3 };
const items4 = [{ sequence: [], compatibleExtensions: ["isArray"] }];
_moduleResult.INDD = { signatures: items4 };
const items5 = [{ sequence: [], description: "32-bit" }, { sequence: [], description: "32-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: ["__startAnimationIfNative", "rejectWithError", "isArray", "no"], description: "64-bit" }, { sequence: [], description: "64-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [], description: "Mach-O Fat Binary" }];
_moduleResult.MACHO = { signatures: items5 };
const items6 = [{ sequence: ["<string:1303511041>", "<string:505610241>", "<string:2584215554>", "<string:1326972929>", "<string:3180789761>"] }];
_moduleResult.PDF = { signatures: items6 };
const items7 = [{ sequence: [-4239071882314759500000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010512531741523042, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013454339694273655] }];
_moduleResult.ORC = { signatures: items7 };
const items8 = [{ sequence: [null, null, null, null] }];
_moduleResult.PARQUET = { signatures: items8 };
const items9 = [{ sequence: [] }];
_moduleResult.PS = { signatures: items9 };
const items10 = [{ sequence: [true, true, true, true, true, -274079013560965740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000] }];
_moduleResult.RTF = { signatures: items10 };
const items11 = [{ sequence: ["y", "isArray", "tiktok.com", "instagram.com", "426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465", "trackedActionData", 20, 147, 117, 4, 148] }];
_moduleResult.SQLITE = { signatures: items11 };
const items12 = [{ sequence: [] }];
_moduleResult.STL = { signatures: items12 };
const items13 = [{ sequence: [0, 8, "geometrisk", "orange", "ruder"] }, { sequence: [], compatibleExtensions: [] }];
_moduleResult.TTF = { signatures: items13 };
const items14 = [{ sequence: [] }, { sequence: ["<string:2006274624>", "<string:2186419447>", "<string:1360227597>", "<string:3108045801>"], description: "Nanosecond resolution" }];
_moduleResult.PCAP = { signatures: items14 };

export const OtherTypes = _moduleResult;
