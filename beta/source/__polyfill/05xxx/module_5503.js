// Module ID: 5503
// Function ID: 5504
// Dependencies: [32, 5464, 5481, 5504]

// Module 5503
import _mod5464 from "module_5464" /* 5464 */;
import _modDef5481 from "module_5481" /* 5481 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getTagName(dataView, sum1) {
  const tmp = _slicedToArray(_mod5464.getPascalStringFromDataView(dataView, sum1), 2);
  const first = tmp[0];
  const obj2 = { tagName: tmp[1], tagNameSize: null };
  let num = 0;
  const sum = 1 + first;
  if (first % 2 === 0) {
    num = 1;
  }
  obj2.tagNameSize = sum + num;
  return obj2;
}
let c4 = "8BIM";
let c5 = 2;
let c6 = 4;
({ length, length: closure_7 } = "8BIM");

export default {
  read(arg0, arg1) {
    const uint8Array = new Uint8Array(arg0);
    const dataView = _mod5464.getDataView(uint8Array.buffer);
    const obj2 = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + React5;
      const stringFromDataView = _mod5464.getStringFromDataView(dataView, num, React5);
      const shortAt = _modDef5481.getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp15 = getTagName(dataView, sum1);
      let name = tmp15.tagName;
      const sum2 = sum1 + tmp15.tagNameSize;
      const longAt = _modDef5481.getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        const dataView1 = tmp5(5464).getDataView(dataView.buffer, sum3, longAt);
        const obj7 = { id: shortAt, value: null };
        const tmp5Result = tmp5(5464);
        obj7.value = tmp5(5464).getStringFromDataView(dataView1, 0, longAt);
        if (tmp10(5504)[shortAt]) {
          try {
            obj7.description = tmp10(5504)[shortAt].description(dataView1);
            if (!name) {
              name = tmp10(5504)[shortAt].name;
            }
            obj2[name] = obj7;
            const obj6 = tmp10(5504)[shortAt];
          } catch (err) {
            tmp.description = tmp2;
          }
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj2["undefined-" + shortAt] = obj7;
        }
        const tmp5Result2 = tmp5(5464);
      }
      num = sum3 + (longAt + longAt % 2);
    }
    return obj2;
  }
};
