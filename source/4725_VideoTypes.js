// Module ID: 4725
// Function ID: 41109
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
const items = [{ sequence: [], skippedBytes: [null, true, true, true] }];
_moduleResult.AVI = { signatures: items };
let obj = { compileArgument: "<string:1849884673>", getForumTimestampFormatter: "<string:1811939797>", separatorProps: "<string:2566914517>" };
const items1 = [{ sequence: [] }, { sequence: [], compatibleExtensions: [] }];
obj.signatures = items1;
_moduleResult.FLV = obj;
obj = { onTapObscuredMediaLearnMore: 203561837078508130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, onTapObscuredMediaToggle: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023910753448734824, onTapSafetyPolicyNoticeEmbed: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007246071003940994, sequence: [], compatibleExtensions: [90] };
const items2 = [obj, { sequence: [], compatibleExtensions: [] }];
_moduleResult.M4V = { signatures: items2 };
const items3 = [{ sequence: [], description: "EBML identifier", compatibleExtensions: [45, 104, 108, 48] }];
_moduleResult.MKV = { signatures: items3 };
const items4 = [{ sequence: [false, false, false, false, false, false, false, false], offset: 4 }, { sequence: [], offset: 4 }];
_moduleResult.MOV = { signatures: items4 };
obj = { compileArgument: "<string:3074621442>", getForumTimestampFormatter: "<string:3271558175>", separatorProps: "<string:1627390289>" };
const obj1 = { onTapObscuredMediaLearnMore: "<string:954304823>", onTapObscuredMediaToggle: "r\u016F\u017Eov\u00E9 srdce", onTapSafetyPolicyNoticeEmbed: "<string:4064346112>", sequence: [] };
const items5 = [obj1, { sequence: [] }, { sequence: [], compatibleExtensions: [] }];
obj.signatures = items5;
_moduleResult.MP4 = obj;
const obj2 = { compileArgument: "<string:745489152>", getForumTimestampFormatter: "<string:3320512516>", separatorProps: "<string:57081857>" };
const items6 = [{ sequence: [], compatibleExtensions: [] }];
obj2.signatures = items6;
_moduleResult.OGG = obj2;
const obj3 = { compileArgument: 69261932127895555000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, getForumTimestampFormatter: 1328168282606818600000, separatorProps: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012364350842212779 };
const items7 = [{ sequence: [], description: "Macromedia Shockwave Flash player file (zlib compressed, SWF 6 and later)" }, { sequence: ["isArray", "acceptInviteAndTransitionToInviteChannel", "isArray"], description: "Macromedia Shockwave Flash player file (uncompressed)" }, { sequence: ["<string:1392508928>", "<string:1879048192>", "<string:1476395008>"], description: "Macromedia Shockwave Flash player file (uncompressed)" }];
obj3.signatures = items7;
_moduleResult.SWF = obj3;
const obj4 = { compileArgument: null, getForumTimestampFormatter: null, separatorProps: null };
const items8 = [{ sequence: [], description: "EBML identifier", compatibleExtensions: [] }];
obj4.signatures = items8;
_moduleResult.WEBM = obj4;

export const VideoTypes = _moduleResult;
