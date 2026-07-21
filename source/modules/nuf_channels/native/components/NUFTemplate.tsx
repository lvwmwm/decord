// Module ID: 12586
// Function ID: 96772
// Name: NUFActionSheetTemplate
// Dependencies: []
// Exports: default

// Module 12586 (NUFActionSheetTemplate)
importAll(dependencyMap[0]);
({ View: closure_2, Image: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { overflow: "center", flex: "center", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.title = { collapsable: "absolute", preventClipping: 0 };
obj.description = { <string:4142373395>: true, <string:3898509951>: true, <string:121045902>: true };
obj.image = { marginBottom: 24 };
let closure_6 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let imageSrc;
  let onCTAPress;
  let title;
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title, children: title };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), , , ];
  obj = { style: tmp.description, children: description };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj);
  items[2] = callback(closure_3, { source: imageSrc, style: tmp.image });
  items[3] = callback(arg1(dependencyMap[6]).Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  obj.children = items;
  return callback2(closure_2, obj);
};
