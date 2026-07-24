// Module ID: 4784
// Function ID: 41606
// Name: getTagName
// Dependencies: [57, 4745, 4762, 4785]

// Module 4784 (getTagName)
import _slicedToArray from "_slicedToArray";

let closure_7;
let length;
const require = arg1;
function getTagName(getUint8, offset) {
  let obj = require(4745) /* getStringFromDataView */;
  const tmp = callback(obj.getPascalStringFromDataView(getUint8, offset), 2);
  let num = 0;
  const first = tmp[0];
  obj = { tagName: tmp[1] };
  const sum = 1 + first;
  if (first % 2 === 0) {
    num = 1;
  }
  obj.tagNameSize = sum + num;
  return obj;
}
let c4 = "8BIM";
let c5 = 2;
let c6 = 4;
({ length, length: closure_7 } = "8BIM");

export default {
  read(arg0, arg1) {
    let obj = require(4745) /* getStringFromDataView */;
    const uint8Array = new Uint8Array(arg0);
    const dataView = obj.getDataView(uint8Array.buffer);
    obj = {};
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let obj3 = require(4745) /* getStringFromDataView */;
        let tmp5 = closure_7;
        let tmp7 = closure_7;
        let sum = num + closure_7;
        let tmp9 = importDefault;
        let stringFromDataView = obj3.getStringFromDataView(dataView, num, closure_7);
        let obj4 = importDefault(4762);
        let shortAt = obj4.getShortAt(dataView, sum);
        let tmp11 = getTagName;
        let tmp12 = c5;
        let sum1 = sum + c5;
        let tmp14 = getTagName(dataView, sum1);
        let tagName = tmp14.tagName;
        let sum2 = sum1 + tmp14.tagNameSize;
        let obj5 = importDefault(4762);
        let longAt = obj5.getLongAt(dataView, sum2);
        let tmp17 = c6;
        let sum3 = sum2 + c6;
        let tmp19 = c4;
        if (stringFromDataView === c4) {
          let tmp35 = require;
          let tmp36 = dependencyMap;
          let obj7 = require(4745) /* getStringFromDataView */;
          let dataView1 = obj7.getDataView(dataView.buffer, sum3, longAt);
          obj = {};
          let tmp39 = shortAt;
          obj.id = shortAt;
          let tmp38 = dataView1;
          let obj9 = require(4745) /* getStringFromDataView */;
          obj.value = obj9.getStringFromDataView(dataView1, 0, longAt);
          let tmp40 = obj;
          let tmp41 = importDefault;
          if (importDefault(4785)[shortAt]) {
            let tmp23 = obj;
            let tmp24 = importDefault;
            let tmp25 = dependencyMap;
            let tmp26 = shortAt;
            let obj6 = importDefault(4785)[shortAt];
            let tmp27 = dataView1;
            tmp40.description = obj6.description(tmp38);
            while (true) {
              let tmp28 = obj;
              let tmp29 = tagName;
              let name = tagName;
              if (tagName) {
                break;
              } else {
                let tmp30 = importDefault;
                let tmp31 = dependencyMap;
                let tmp32 = shortAt;
                name = importDefault(4785)[shortAt].name;
                break;
              }
              let tmp33 = name;
              let tmp34 = obj;
              obj[name] = tmp40;
            }
          } else if (arg1) {
            let tmp20 = obj;
            let tmp21 = shortAt;
            let _HermesInternal = HermesInternal;
            let tmp22 = obj;
            obj["undefined-" + shortAt] = tmp40;
          }
        }
        num = sum3 + (longAt + longAt % 2);
      } while (num < arg0.length);
    }
    return obj;
  }
};
