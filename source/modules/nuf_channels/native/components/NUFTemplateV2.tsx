// Module ID: 12584
// Function ID: 96799
// Name: NUFActionSheetTemplate
// Dependencies: []
// Exports: default

// Module 12584 (NUFActionSheetTemplate)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: {}, title: {}, description: { accessible: "<string:651624449>", rejectWithError: "<string:24313857>", "Bool(false)": "<string:1677721600>", "Bool(false)": "<string:503316480>" }, illustration: { _totalAmount: "w", borderColor: "Array", member_ids_preview: "isArray" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let illustration;
  let onCTAPress;
  let title;
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.illustration, children: illustration };
  const items = [callback(View, obj), , , ];
  obj = { 9223372036854775807: null, 0: null, 0: null, style: tmp.title, children: title };
  items[1] = callback(arg1(dependencyMap[4]).Text, obj);
  items[2] = callback(arg1(dependencyMap[4]).Text, { style: tmp.description, variant: "text-md/medium", children: description });
  items[3] = callback(arg1(dependencyMap[5]).Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  obj.children = items;
  return callback2(View, obj);
};
