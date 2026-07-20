// Module ID: 16408
// Function ID: 126742
// Name: StreamFullAlert
// Dependencies: []
// Exports: default

// Module 16408 (StreamFullAlert)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = { image: { dampingRatio: 6, stiffness: "focus_mode_expires_at_ms" }, body: { marginTop: 16 } };
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let obj = arg1(dependencyMap[3]);
  const errorInfo = obj.getErrorInfo(arg1(dependencyMap[3]).AVError.STREAM_FULL);
  let errorCode;
  if (null != errorInfo) {
    errorCode = errorInfo.errorCode;
  }
  const intl = arg1(dependencyMap[4]).intl;
  obj = { errorCode };
  obj = {};
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[4]).t.ejOT95, obj);
  const merged = Object.assign(arg0);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj["title"] = intl2.string(arg1(dependencyMap[4]).t.GzjdO5);
  const obj1 = { variant: "text-md/normal", style: closure_6.body };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj1.children = intl3.string(arg1(dependencyMap[4]).t.VVZDBL);
  const items = [callback(arg1(dependencyMap[6]).Text, obj1), callback(arg1(dependencyMap[6]).Text, { style: closure_6.body, children: formatToPlainStringResult }), ];
  const obj2 = { style: closure_6.body, children: formatToPlainStringResult };
  const tmp4 = importDefault(dependencyMap[5]);
  items[2] = callback(Image, { source: importDefault(dependencyMap[7]), style: closure_6.image });
  obj["children"] = items;
  return callback2(tmp4, obj);
};
