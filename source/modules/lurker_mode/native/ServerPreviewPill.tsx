// Module ID: 8576
// Function ID: 68113
// Name: ServerPreviewPill
// Dependencies: []
// Exports: default

// Module 8576 (ServerPreviewPill)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.WHITE };
obj.pill = obj;
obj.text = { color: importDefault(dependencyMap[4]).colors.BLACK };
let closure_4 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[4]).colors.BLACK };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  const tmp = callback();
  let obj = { style: tmp.pill, accessibilityRole: "text" };
  obj = { variant: "text-xs/bold", style: tmp.text };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.KNhFgD);
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
