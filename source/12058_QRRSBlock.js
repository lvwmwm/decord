// Module ID: 12058
// Function ID: 93112
// Name: QRRSBlock
// Dependencies: []

// Module 12058 (QRRSBlock)
class QRRSBlock {
  constructor(arg0, arg1) {
    this.totalCount = global;
    this.dataCount = require;
    return;
  }
}
const items = [[true, true, true], [], [], [17390468047850335000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000003385324533113998, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036273701800815205], [], ["cuadrado", "s\u00EDmbolo borrar", "bot\u00F3n COOL"], [], ["<string:1084424193>", "<string:3594715139>", "<string:805307049>"], [null, null, null], [], [], [], [], [null, null, null], [], [], [], [], [null, null, null, "Array", "isLiveStreaming", "r"], [true, true, true, true, true, true], [-428794306875013460000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021811564632432437, 0.00000000000000000000000000000000000000000008971637964201954], [null, null, null], [], [null, null, null], [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000201286292464907, -161940520632556290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012343414226503674], [-1119813628, 1090520178, 8599263496.125008], [], [], [true, true, true], [], [], [], ["top", "body", "fill"], [], [], [], [], [], [], [], [-0.000000000000000000000000000000000000000000000000000000005735152384125307, 8599153024.00233, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000617258867805373], ["<string:1107296574>", "fastnet", "telefon", "<string:46429506>", "<string:53291520>", "<string:2486321920>"], [], [false, false, false, false, false, null], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["person_pouting", "person_with_pouting_face", 2982], [], [], [], [], ["<string:308281345>", "<string:2770403330>", "<string:2621767682>", "<string:2923692033>", "<string:1342177709>", "<string:1040187757>"], [], ["space", "waning", "crescent", "moon", "ramadan", "space"], [], [], [], [], [], ["SENTRY_BAGGAGE_KEY_PREFIX", "onOptionViewLayout", "velocity", 1, 1, 1], [], [null, null, null, null, null, null], [], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [], [], [], [], [null, null, null, null, null, null], [true, true, true], [true, true, true, true, true, true], [true, true, true], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["<string:1600094079>", "<string:24199151>", "<string:1090519040>", "155", "<string:1544637785>", "<string:756183836>"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["enabled", "unicodeVersion", "style", "width", "jsxs", "useCallback"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [true, true, true, true, true, true], [], [], [true, true, true, true, true, true], [], [], [], [], [], [], [], []];
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
