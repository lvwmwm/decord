// Module ID: 12579
// Function ID: 96749
// Name: NUFActionSheetTemplate
// Dependencies: []
// Exports: default

// Module 12579 (NUFActionSheetTemplate)
importAll(dependencyMap[0]);
({ View: closure_2, Image: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { channelId: "center", allowHeading: "center", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.title = { person_pouting: -0.0014069081515246523, cv: -0.0001058445630777106 };
obj.description = { -253708205: true, 1406739929: true, -936371871: true };
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
  obj = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title, children: title };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), , , ];
  obj = { style: tmp.description, children: description };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj);
  items[2] = callback(closure_3, { source: imageSrc, style: tmp.image });
  items[3] = callback(arg1(dependencyMap[6]).Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  obj.children = items;
  return callback2(closure_2, obj);
};
