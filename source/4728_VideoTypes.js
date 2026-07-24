// Module ID: 4728
// Function ID: 41140
// Name: VideoTypes
// Dependencies: [7, 6]

// Module 4728 (VideoTypes)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";

class VideoTypes {
  constructor() {
    tmp = c0(this, VideoTypes);
    return;
  }
}
const _moduleResult = _defineProperties(VideoTypes);
let obj = { extension: "avi", mimeType: "video/x-msvideo", description: "Audio Video Interleave video format" };
const items = [{ sequence: [82, 73, 70, 70, 65, 86, 73, 32, 76, 73, 83, 84], skippedBytes: [4, 5, 6, 7] }];
obj.signatures = items;
_moduleResult.AVI = obj;
obj = { extension: "flv", mimeType: "video/x-flv", description: "Flash Video file" };
const items1 = [{ sequence: [70, 76, 86, 1] }, ];
obj = { sequence: [102, 116, 121, 112, 77, 52, 86, 32], description: "ISO Media, MPEG v4 system, or iTunes AVC-LC file", offset: 4, compatibleExtensions: ["mp4", "m4v"] };
items1[1] = obj;
obj.signatures = items1;
_moduleResult.FLV = obj;
const obj1 = { extension: "m4v", mimeType: "video/x-m4v", description: "Apple's video container format, very similar to MP4" };
const obj2 = { sequence: [102, 116, 121, 112, 109, 112, 52, 50], description: "MPEG-4 video | QuickTime file", offset: 4, compatibleExtensions: ["mp4"] };
const items2 = [obj2, ];
const obj3 = { sequence: [102, 116, 121, 112, 77, 52, 86, 32], description: "ISO Media, MPEG v4 system, or iTunes AVC-LC file", offset: 4, compatibleExtensions: ["mp4", "flv"] };
items2[1] = obj3;
obj1.signatures = items2;
_moduleResult.M4V = obj1;
const obj4 = { extension: "mkv", mimeType: "video/x-matroska", description: "MKV (Matroska Video) is a flexible, open-source media container format that supports multiple audio, video, and subtitle streams in a single file" };
const items3 = [{ sequence: [26, 69, 223, 163], description: "EBML identifier", compatibleExtensions: ["webm", "mka", "mks", "mk3d"] }];
obj4.signatures = items3;
_moduleResult.MKV = obj4;
const obj5 = { extension: "mov", mimeType: "video/quicktime", description: "QuickTime movie file" };
const items4 = [{ sequence: [102, 116, 121, 112, 113, 116, 32, 32], offset: 4 }, { sequence: [109, 111, 111, 118], offset: 4 }];
obj5.signatures = items4;
_moduleResult.MOV = obj5;
const obj6 = { extension: "mp4", mimeType: "video/mp4", description: "A multimedia container format widely used for storing audio, video, and other data, and is known for its high compression efficiency and compatibility with many devices" };
const obj7 = { sequence: [102, 116, 121, 112, 77, 83, 78, 86], description: "MPEG-4 video file", offset: 4 };
const items5 = [obj7, , ];
const obj8 = { sequence: [102, 116, 121, 112, 105, 115, 111, 109], description: "ISO Base Media file (MPEG-4) v1", offset: 4 };
items5[1] = obj8;
const obj9 = { sequence: [102, 116, 121, 112, 77, 52, 86, 32], description: "ISO Media, MPEG v4 system, or iTunes AVC-LC file", offset: 4, compatibleExtensions: ["m4v", "flv"] };
items5[2] = obj9;
obj6.signatures = items5;
_moduleResult.MP4 = obj6;
const obj10 = { extension: "ogg", mimeType: "video/ogg", description: "Ogg Vorbis Codec compressed Multimedia file" };
const items6 = [{ sequence: [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], compatibleExtensions: ["oga", "ogv", "ogx"] }];
obj10.signatures = items6;
_moduleResult.OGG = obj10;
const obj11 = { extension: "swf", mimeType: "application/x-shockwave-flash", description: "SWF (Shockwave Flash) is a file format for multimedia, vector graphics, and ActionScript, used for creating and delivering animations, games, and other interactive web-based content" };
const items7 = [{ sequence: [67, 87, 83], description: "Macromedia Shockwave Flash player file (zlib compressed, SWF 6 and later)" }, { sequence: [70, 87, 83], description: "Macromedia Shockwave Flash player file (uncompressed)" }, { sequence: [90, 87, 83], description: "Macromedia Shockwave Flash player file (uncompressed)" }];
obj11.signatures = items7;
_moduleResult.SWF = obj11;
const obj12 = { extension: "webm", mimeType: "video/webm", description: "WebM is a royalty-free, open-source media file format optimized for web delivery, using efficient VP8 video and Vorbis audio codecs" };
const items8 = [{ sequence: [26, 69, 223, 163], description: "EBML identifier", compatibleExtensions: ["mkv"] }];
obj12.signatures = items8;
_moduleResult.WEBM = obj12;

export const VideoTypes = _moduleResult;
