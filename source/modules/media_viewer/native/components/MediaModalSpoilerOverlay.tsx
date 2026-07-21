// Module ID: 12131
// Function ID: 93449
// Dependencies: []

// Module 12131
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { spoilerOverlayContainer: { no: 1946157560, name: 4, kind: 2 } };
obj = { commandId: 1308623700, accessibilityRole: 1107297016, variant: 196236, lineClamp: 223799, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.obscureContentContainer = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, borderRadius: importDefault(dependencyMap[5]).radii.lg, height: importDefault(dependencyMap[5]).space.PX_32 };
const tmp3 = arg1(dependencyMap[3]);
const obj6 = arg1(dependencyMap[6]);
const unsafe_rawColors = importDefault(dependencyMap[5]).unsafe_rawColors;
obj1.backgroundColor = arg1(dependencyMap[6]).isAndroid() ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj1.flexGrow = 0;
obj1.justifyContent = "center";
obj1.alignItems = "center";
obj1.alignSelf = "center";
obj.spoilerOverlayBackground = obj1;
let closure_8 = obj1.createStyles(obj);
const isAndroidResult = arg1(dependencyMap[6]).isAndroid();
const memoResult = importAllResult.memo(function MediaModalSpoilerOverlay(source) {
  let index;
  let style;
  source = source.source;
  ({ style, index } = source);
  let tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const token = obj.useToken(importDefault(dependencyMap[5]).colors.SPOILER_HIDDEN_BACKGROUND);
  let obj1 = arg1(dependencyMap[8]);
  if (!tmp3[0]) {
    return null;
  } else {
    obj = {};
    const items = [style, closure_4.absoluteFill, tmp4];
    obj.style = items;
    obj = {};
    if (source.obscure) {
      let str = "dark";
    } else {
      let obj4 = arg1(dependencyMap[6]);
      str = "light";
    }
    obj.blurTheme = str;
    obj.android_fallbackColor = token;
    obj.style = closure_4.absoluteFill;
    const items1 = [callback2(importDefault(dependencyMap[10]), obj), ];
    obj1 = { style: tmp.spoilerOverlayContainer };
    if (source.obscure) {
      const obj2 = { style: tmp.obscureContentContainer };
      const items2 = [callback2(arg1(dependencyMap[11]).ImageWarningIcon, {}), ];
      const obj3 = { USER_REGISTRATION: "isArray", borderColor: "isArray", borderWidth: "isArray" };
      const intl2 = arg1(dependencyMap[13]).intl;
      obj3.children = intl2.string(arg1(dependencyMap[13]).t.SpxcUR);
      tmp = callback2(arg1(dependencyMap[12]).Text, obj3);
      items2[1] = tmp;
      obj2.children = items2;
      let tmp20 = callback3(closure_5, obj2);
    } else {
      obj4 = { style: tmp.spoilerOverlayBackground };
      const obj5 = { USER_REGISTRATION: "isArray", borderColor: "isArray", borderWidth: "isArray" };
      const intl = arg1(dependencyMap[13]).intl;
      obj5.children = intl.string(arg1(dependencyMap[13]).t.F+x38C).toUpperCase();
      obj4.children = callback2(arg1(dependencyMap[12]).Text, obj5);
      tmp20 = callback2(closure_5, obj4);
      const str2 = intl.string(arg1(dependencyMap[13]).t.F+x38C);
    }
    obj1.children = tmp20;
    obj1 = callback2(closure_5, obj1);
    items1[1] = obj1;
    obj.children = items1;
    callback3(importDefault(dependencyMap[9]).View, obj);
    const tmp10 = importDefault(dependencyMap[10]);
    const tmp14 = callback2;
    const tmp15 = closure_5;
    const tmp5 = callback3;
    const tmp9 = callback2;
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default memoResult;
