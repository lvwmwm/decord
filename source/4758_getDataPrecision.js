// Module ID: 4758
// Function ID: 41309
// Name: getDataPrecision
// Dependencies: []

// Module 4758 (getDataPrecision)
function getDataPrecision(getUint8, sum, shortAt) {
  if (3 <= shortAt) {
    let obj = shortAt(arg6[0]);
    const byteAt = obj.getByteAt(getUint8, sum + 2);
    obj = { value: byteAt, description: "" + byteAt };
    return obj;
  }
}
function getImageHeight(dataView) {
  if (5 <= arg2) {
    let obj = arg2(arg6[0]);
    const shortAt = obj.getShortAt(dataView, arg1 + 3);
    obj = { value: shortAt };
    const _HermesInternal = HermesInternal;
    obj.description = "" + shortAt + "px";
    return obj;
  }
}
function getImageWidth(dataView) {
  if (7 <= arg2) {
    let obj = arg2(arg6[0]);
    const shortAt = obj.getShortAt(dataView, arg1 + 5);
    obj = { value: shortAt };
    const _HermesInternal = HermesInternal;
    obj.description = "" + shortAt + "px";
    return obj;
  }
}
function getSubsampling(getUint8, sum, value, shortAt) {
  if (8 + 3 * value <= shortAt) {
    const items = [];
    for (let num = 0; num < value; num = num + 1) {
      sum = sum + 8 + 3 * num;
      let tmp2 = value;
      let tmp3 = arg6;
      let obj = value(arg6[0]);
      let items1 = [obj.getByteAt(getUint8, sum), , ];
      let obj2 = value(arg6[0]);
      items1[1] = obj2.getByteAt(getUint8, sum + 1);
      let obj3 = value(arg6[0]);
      items1[2] = obj3.getByteAt(getUint8, sum + 2);
      let arr = items.push(items1);
    }
    obj = { value: items };
    let str = "";
    if (items.length > 1) {
      str = getComponentIds(items) + getSamplingType(items);
      const tmp6 = getComponentIds(items);
    }
    obj.description = str;
    return obj;
  }
}
function getComponentIds(items) {
  let closure_0 = {};
  const mapped = items.map((arg0) => closure_0[arg0[0]]);
  return mapped.join("");
}
function getSamplingType(items) {
  const obj = {};
  let str = "";
  if (0 !== items.length) {
    str = "";
    if (undefined !== items[0][1]) {
      str = "";
      if (undefined !== obj[items[0][1]]) {
        str = obj[items[0][1]];
      }
    }
  }
  return str;
}
arg5.default = {
  read(getUint8, sum) {
    let obj = arg2(arg6[0]);
    const shortAt = obj.getShortAt(getUint8, sum);
    let tmp2;
    if (8 <= shortAt) {
      const byteAt = arg2(arg6[0]).getByteAt(getUint8, sum + 7);
      obj = { value: byteAt, description: "" + byteAt };
      tmp2 = obj;
      const obj2 = arg2(arg6[0]);
    }
    obj = { Bits Per Sample: getDataPrecision(getUint8, sum, shortAt), Image Height: getImageHeight(getUint8, sum, shortAt), Image Width: getImageWidth(getUint8, sum, shortAt), Color Components: tmp2 };
    let tmp6 = tmp2;
    if (tmp2) {
      tmp6 = getSubsampling(getUint8, sum, tmp2.value, shortAt);
    }
    obj.Subsampling = tmp6;
    return obj;
  }
};
