// Module ID: 12975
// Function ID: 98806
// Name: EmptyState
// Dependencies: []
// Exports: ThemedEmptyState

// Module 12975 (EmptyState)
class EmptyState {
  constructor(arg0) {
    ({ source, title, callToAction } = global);
    ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = global);
    tmp = closure_7();
    obj = { style: items };
    items = [, ];
    items[0] = tmp.container;
    items[1] = containerStyle;
    tmp4 = null;
    tmp2 = jsxs;
    tmp3 = View;
    if (null != source) {
      tmp5 = jsx;
      tmp6 = Image;
      obj = {};
      obj.source = source;
      items1 = [, ];
      items1[0] = tmp.image;
      items1[1] = imageStyle;
      obj.style = items1;
      tmp4 = jsx(Image, obj);
    }
    items2 = [, , , ];
    items2[0] = tmp4;
    tmp7 = null;
    if (null != title) {
      tmp8 = jsx;
      tmp9 = importDefault;
      tmp10 = dependencyMap;
      num = 7;
      obj1 = {};
      items3 = [, ];
      items3[0] = tmp.title;
      items3[1] = titleStyle;
      obj1.style = items3;
      obj1.children = title;
      tmp7 = jsx(importDefault(dependencyMap[7]), obj1);
    }
    items2[1] = tmp7;
    items4 = [, ];
    items4[0] = tmp.body;
    items4[1] = bodyStyle;
    items2[2] = jsx(importDefault(dependencyMap[7]), { style: items4, children: body });
    tmp11 = null;
    if (null != callToAction) {
      tmp12 = jsx;
      tmp13 = View;
      obj2 = {};
      obj2.style = tmp.cta;
      tmp14 = jsx;
      tmp15 = arg1;
      tmp16 = dependencyMap;
      num2 = 8;
      obj3 = {};
      flag = true;
      obj3.shrink = true;
      ({ label: obj5.text, onPress: obj5.onPress } = callToAction);
      str = "sm";
      obj3.size = "sm";
      obj2.children = jsx(arg1(dependencyMap[8]).Button, obj3);
      tmp11 = jsx(View, obj2);
    }
    items2[3] = tmp11;
    obj.children = items2;
    return tmp2(tmp3, obj);
  }
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const Fonts = arg1(dependencyMap[2]).Fonts;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = {};
const tmp4 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj["textAlign"] = "center";
obj["marginBottom"] = 8;
obj.title = obj;
const obj1 = {};
const importDefaultResult = importDefault(dependencyMap[5]);
const merged1 = Object.assign(importDefault(dependencyMap[5])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_SUBTLE, 14));
obj1["textAlign"] = "center";
obj.body = obj1;
obj.image = { marginBottom: 32 };
obj.cta = { dampingRatio: 52881784.83212474, stiffness: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
let closure_7 = obj.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default EmptyState;
export const ThemedEmptyState = function ThemedEmptyState(darkSource) {
  let lightSource = darkSource.darkSource;
  let obj = Object.create(null);
  obj.lightSource = 0;
  obj.darkSource = 0;
  const merged = Object.assign(darkSource, obj);
  obj = arg1(dependencyMap[9]);
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    lightSource = darkSource.lightSource;
  }
  obj = { source: lightSource };
  const merged1 = Object.assign(merged);
  return callback(EmptyState, obj);
};
