// Module ID: 12283
// Function ID: 94167
// Name: Header
// Dependencies: []
// Exports: default

// Module 12283 (Header)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { <string:3814666730>: 8, <string:1280564396>: 18 }, headerText: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback2();
  let obj = { style: items };
  const items = [tmp.container, style.style];
  obj = { GAMES_YOU_PLAY: "r", v: "BackgroundGradientPresetId", decorationCutout: "Array" };
  const tmp2 = importDefault(dependencyMap[4])();
  const tmp3 = closure_5;
  const tmp4 = View;
  const tmp5 = callback;
  const intl = arg1(dependencyMap[6]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[6]).t.lpNrPu);
  const tmp6 = importDefault(dependencyMap[5]);
  if (obj3.isThemeDark(tmp2)) {
    let tmp7Result = tmp7(tmp8[8]);
  } else {
    tmp7Result = tmp7(tmp8[9]);
  }
  obj.source = tmp7Result;
  const items1 = [tmp5(tmp6, obj), ];
  obj = { style: tmp.headerText };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.children = intl2.string(arg1(dependencyMap[6]).t.SD5MJW);
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj);
  obj.children = items1;
  return tmp3(tmp4, obj);
};
