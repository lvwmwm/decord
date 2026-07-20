// Module ID: 12051
// Function ID: 93089
// Name: QRRSBlock
// Dependencies: []

// Module 12051 (QRRSBlock)
class QRRSBlock {
  constructor(arg0, arg1) {
    this.totalCount = global;
    this.dataCount = require;
    return;
  }
}
const items = [[], [], ["head_bandage", "face_with_head_bandage", "money_mouth"], [], [0.0000009536762633349796, -2197713738153374400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000005553590234016081], [], [null, null, null], [], [null, null, null], [], [false, false, false], ["<string:4131192833>", "<string:202964993>", "<string:4201185281>"], [null, null, null], [], [true, true, true], ["a", "isArray", "ophiuchus"], ["detective", "esp\u00EDa", "investigaci\u00F3n"], [], [false, false, "Array", "isJpegFile", "r", "isPNG"], [], [1124074287, 166889, 137887], ["black_medium_square", "white_medium_square", "black_large_square"], [null, null, null], [], [], [-1455357948, 1090520178, 8599262984.125008], [true, true, true, true, true, true], [], [true, true, true], [], [], [], ["processIncomingRing", "frameRateAggregated", "Array"], [], [], [], [], [], [], [], [922748102, 1107297388, 312948], [-890306559, -1338834943, -213516286, 1493172658, -687865009, 1694499291], [], [], [], [], [], [], [-0.00000000000002486905997561394, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004388690388655154, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000659013925907187], [], [], [], ["color", "outlineColor", "shadowColor", "textDecorationColor", "tintColor", "textShadowColor"], [], [], [], [], [], [], [null, null, null], [], [], [], [], ["Array", "planIds", "Array", "getStartedHeaderContainer", "AUDIO_TRACK_LOAD_ERROR", "ownerIcon"], [], ["<string:3729195009>", "<string:1498677249>", "<string:3729260546>", "<string:2974023681>", "<string:1409286439>", "r"], [], [], [], [null, null, null, null, null, null], [4, 151, 121, 5, 152, 122], [1062232653, 369, -927714560, 446676598, -755875865, 1477468749], ["fris\u00F8r", "frisyre", "h\u00E5rklipp", "kvinne", "kvinne som f\u00E5r h\u00E5rklipp", "fotgjenger"], [], [4, 75, 47, 14, 76, 48], [], [false, false, false, false, false, null], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 73, 45, 14, 74, 46], [11, 54, 24], [], [], [], [null, null, null], [null, null, null, null, null, null], [true, true, true], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["construct", "Array", "isArray", "isArray", "isArray", "LengthDelimited"], [], [], [], [], [], [true, true, true, true, true, true], [], [0, 0.84, 0, 0.082, 0, "CHANNEL_SELECT"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [true, true, true, true, true, true], [], [], [true, true, true, true, true, true], [], [], [], [], [], [], [null, null, null, null, null, null], [], []];
QRRSBlock.RS_BLOCK_TABLE = items;
QRRSBlock.getRSBlocks = (arg0, arg1) => {
  const rsBlockTable = QRRSBlock.getRsBlockTable(arg0, arg1);
  if (null == rsBlockTable) {
    const _Error = Error;
    const error = new Error("bad rs block @ typeNumber:" + arg0 + "/errorCorrectLevel:" + arg1);
    throw error;
  } else {
    const result = rsBlockTable.length / 3;
    const _Array = Array;
    const array = new Array();
    let num2 = 0;
    if (0 < result) {
      do {
        let tmp = rsBlockTable[3 * num2];
        let tmp2 = rsBlockTable[3 * num2 + 1];
        let tmp3 = rsBlockTable[3 * num2 + 2];
        for (let num = 0; num < tmp; num = num + 1) {
          let tmp4 = closure_2;
          let prototype = closure_2.prototype;
          let tmp5 = new.target;
          let tmp6 = new.target;
          let tmp7 = tmp2;
          let tmp8 = tmp3;
          let tmp9 = new closure_2(tmp2, tmp3);
          let tmp10 = tmp9;
          let arr = array.push(tmp9);
        }
        num2 = num2 + 1;
      } while (num2 < result);
    }
    return array;
  }
};
QRRSBlock.getRsBlockTable = (arg0, arg1) => {
  if (require(dependencyMap[0]).L === arg1) {
    return QRRSBlock.RS_BLOCK_TABLE[4 * (arg0 - 1)];
  } else if (require(dependencyMap[0]).M === arg1) {
    return QRRSBlock.RS_BLOCK_TABLE[4 * (arg0 - 1) + 1];
  } else if (require(dependencyMap[0]).Q === arg1) {
    return QRRSBlock.RS_BLOCK_TABLE[4 * (arg0 - 1) + 2];
  } else if (require(dependencyMap[0]).H === arg1) {
    return QRRSBlock.RS_BLOCK_TABLE[4 * (arg0 - 1) + 3];
  }
};

export default QRRSBlock;
