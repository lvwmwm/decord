// Module ID: 1672
// Function ID: 18561
// Name: SequencedTransition
// Dependencies: []

// Module 1672 (SequencedTransition)
arg5.SequencedTransition = function SequencedTransition(name) {
  let reversed;
  let scaleX;
  let scaleY;
  let translateX;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY, reversed } = arg1);
  let obj = { name };
  obj = {};
  obj = {};
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj.transform = items;
  obj[0] = obj;
  const obj2 = {};
  const obj3 = {};
  let str = "0px";
  let str2 = "0px";
  if (reversed) {
    const _HermesInternal = HermesInternal;
    str2 = "" + translateX + "px";
  }
  obj3.translateX = str2;
  if (!reversed) {
    const _HermesInternal2 = HermesInternal;
    str = "" + translateY + "px";
  }
  obj3.translateY = str;
  if (reversed) {
    let combined = concat(scaleX);
  } else {
    combined = concat(scaleY, ",1");
  }
  obj3.scale = combined;
  const items1 = [obj3];
  obj2.transform = items1;
  obj[50] = obj2;
  const items2 = [{ "Null": "construct", "Null": "isArray", marginBottom: "isArray" }];
  obj[100] = { transform: items2 };
  obj.style = obj;
  obj.duration = 300;
  return obj;
};
