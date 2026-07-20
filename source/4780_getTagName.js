// Module ID: 4780
// Function ID: 41527
// Name: getTagName
// Dependencies: []

// Module 4780 (getTagName)
let length;
function getTagName(getUint8, offset) {
  let obj = offset(dependencyMap[1]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = "8BIM";
let closure_5 = 2;
let closure_6 = 4;
({ length, length: closure_7 } = "8BIM");

export default {
  read(arg0, arg1) {
    let obj = arg1(dependencyMap[1]);
    const uint8Array = new Uint8Array(arg0);
    const dataView = obj.getDataView(uint8Array.buffer);
    obj = {};
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp3 = closure_0;
        let tmp4 = closure_2;
        let obj3 = closure_0(closure_2[1]);
        let tmp5 = closure_7;
        let tmp7 = closure_7;
        let sum = num + closure_7;
        let tmp9 = closure_1;
        let stringFromDataView = obj3.getStringFromDataView(dataView, num, closure_7);
        let obj4 = closure_1(closure_2[2]);
        let shortAt = obj4.getShortAt(dataView, sum);
        let tmp11 = closure_8;
        let tmp12 = closure_5;
        let sum1 = sum + closure_5;
        let tmp14 = closure_8(dataView, sum1);
        let tagName = tmp14.tagName;
        let sum2 = sum1 + tmp14.tagNameSize;
        let obj5 = closure_1(closure_2[2]);
        let longAt = obj5.getLongAt(dataView, sum2);
        let tmp17 = closure_6;
        let sum3 = sum2 + closure_6;
        let tmp19 = closure_4;
        if (stringFromDataView === closure_4) {
          let tmp35 = closure_0;
          let tmp36 = closure_2;
          let obj7 = closure_0(closure_2[1]);
          let dataView1 = obj7.getDataView(dataView.buffer, sum3, longAt);
          obj = {};
          let tmp39 = shortAt;
          obj.id = shortAt;
          let tmp38 = dataView1;
          let obj9 = closure_0(closure_2[1]);
          obj.value = obj9.getStringFromDataView(dataView1, 0, longAt);
          let tmp40 = obj;
          let tmp41 = closure_1;
          if (closure_1(closure_2[3])[shortAt]) {
            let tmp23 = obj;
            let tmp24 = closure_1;
            let tmp25 = closure_2;
            let tmp26 = shortAt;
            let obj6 = closure_1(closure_2[3])[shortAt];
            let tmp27 = dataView1;
            tmp40.description = obj6.description(tmp38);
            while (true) {
              let tmp28 = obj;
              let tmp29 = tagName;
              let name = tagName;
              if (tagName) {
                break;
              } else {
                let tmp30 = closure_1;
                let tmp31 = closure_2;
                let tmp32 = shortAt;
                name = closure_1(closure_2[3])[shortAt].name;
                // break
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
