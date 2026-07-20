// Module ID: 11428
// Function ID: 88969
// Name: DescriptionEllipsis
// Dependencies: []
// Exports: default

// Module 11428 (DescriptionEllipsis)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_1, jsxs: closure_2 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderWidth: true, shouldShow: "/assets/images/native/icons/voice_calls", title: 24, description: 24, requiredBoostCount: null, shrink: "897ada03fe806525383ec1a77806ad61", variant: "screenshare_end", lineClamp: "png", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.topicEllipsis = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.topicEllipsisDot = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
let closure_3 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[5]).fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = callback3();
  const obj = { style: items };
  const items = [tmp.topicEllipsis, dotStyle.style];
  const items1 = [tmp.topicEllipsisDot, dotStyle];
  const items2 = [callback(View, { style: items1 }), , ];
  const items3 = [tmp.topicEllipsisDot, dotStyle];
  items2[1] = callback(View, { style: items3 });
  const items4 = [tmp.topicEllipsisDot, dotStyle];
  items2[2] = callback(View, { style: items4 });
  obj.children = items2;
  return callback2(View, obj);
};
