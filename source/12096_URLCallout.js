// Module ID: 12096
// Function ID: 93258
// Name: URLCallout
// Dependencies: []
// Exports: URLCallout

// Module 12096 (URLCallout)
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
({ jsxs: closure_3, jsx: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { maxWidth: null, includeFontPadding: 0.3, nativePaymentsConnected: "-100vw", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.linkCalloutContainer = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.linkCalloutContainerText = { padding: importDefault(dependencyMap[4]).space.PX_8, paddingVertical: importDefault(dependencyMap[4]).space.PX_12, textAlign: "center" };
let closure_5 = obj.createStyles(obj);
const obj1 = { padding: importDefault(dependencyMap[4]).space.PX_8, paddingVertical: importDefault(dependencyMap[4]).space.PX_12, textAlign: "center" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const urlParts = obj.useUrlParts(url.url);
  obj = { style: tmp.linkCalloutContainer };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  obj = { style: tmp.linkCalloutContainerText, variant: "text-md/normal" };
  const items = [protocol, "//"];
  const items1 = [callback(arg1(dependencyMap[6]).Text, { children: items }), callback2(arg1(dependencyMap[6]).Text, { children: hostname }), callback2(arg1(dependencyMap[6]).Text, { children: theRestOfTheUrl })];
  obj.children = items1;
  obj.children = callback(arg1(dependencyMap[6]).Text, obj);
  return callback2(ScrollView, obj);
};
