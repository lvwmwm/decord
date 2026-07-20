// Module ID: 1288
// Function ID: 15048
// Name: onRead
// Dependencies: []

// Module 1288 (onRead)
UnknownFieldHandler.UnknownFieldHandler = undefined;
UnknownFieldHandler.mergeBinaryOptions = undefined;
UnknownFieldHandler.WireType = undefined;
UnknownFieldHandler = UnknownFieldHandler.UnknownFieldHandler;
if (!UnknownFieldHandler) {
  let obj = {};
  UnknownFieldHandler.UnknownFieldHandler = obj;
  UnknownFieldHandler = obj;
}
(UnknownFieldHandler) => {
  UnknownFieldHandler.symbol = Symbol.for("protobuf-ts/unknown");
  UnknownFieldHandler.onRead = (arg0, arg1, no, wireType, data) => {
    const symbol = arg0.symbol;
    if (is(arg1)) {
      let items = arg1[symbol];
    } else {
      items = [];
      arg1[symbol] = items;
    }
    items.push({ no, wireType, data });
  };
  UnknownFieldHandler.onWrite = (arg0, arg1, tag) => {
    for (const item10008 of listResult) {
      let tmp2 = arg2;
      let tagResult = arg2.tag(item10008.no, item10008.wireType);
      let rawResult = tagResult.raw(item10008.data);
    }
  };
  UnknownFieldHandler.list = (arg0, arg1) => {
    arg0 = arg1;
    if (is(arg0)) {
      let found = arr;
      if (arg1) {
        found = arr.filter((no) => no.no == arg1);
      }
      return found;
    } else {
      return [];
    }
  };
  UnknownFieldHandler.last = (arg0, arg1) => arg0.list(arg0, arg1).slice(-1)[0];
  function is(arg0) {
    let isArray = arg0;
    if (arg0) {
      const _Array = Array;
      isArray = Array.isArray(arg0[closure_0.symbol]);
    }
    return isArray;
  }
}(UnknownFieldHandler);
UnknownFieldHandler.mergeBinaryOptions = function mergeBinaryOptions(arg0, arg1) {
  return Object.assign(Object.assign({}, arg0), arg1);
};
let WireType = UnknownFieldHandler.WireType;
if (!WireType) {
  obj = {};
  UnknownFieldHandler.WireType = obj;
  WireType = obj;
}
WireType.Varint = 0;
WireType[0] = "Varint";
WireType.Bit64 = 1;
WireType[1] = "Bit64";
WireType.LengthDelimited = 2;
WireType[2] = "LengthDelimited";
WireType.StartGroup = 3;
WireType[3] = "StartGroup";
WireType.EndGroup = 4;
WireType[4] = "EndGroup";
WireType.Bit32 = 5;
WireType[5] = "Bit32";
