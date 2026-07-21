// Module ID: 12577
// Function ID: 96749
// Name: NUFActionSheetTemplate
// Dependencies: []
// Exports: default

// Module 12577 (NUFActionSheetTemplate)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: { overflow: "center", flex: "center" }, title: { collapsable: "absolute", preventClipping: 0 }, description: {}, illustration: { CHANNEL_LINK: 0, el-CY: "100%", GUILD_ROOM: 106 } });
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
  obj = { style: tmp.title, children: title };
  items[1] = callback(arg1(dependencyMap[4]).Text, obj);
  items[2] = callback(arg1(dependencyMap[4]).Text, { style: tmp.description, variant: "text-md/medium", children: description });
  items[3] = callback(arg1(dependencyMap[5]).Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  obj.children = items;
  return callback2(View, obj);
};
