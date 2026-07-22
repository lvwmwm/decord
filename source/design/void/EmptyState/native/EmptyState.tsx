// Module ID: 12924
// Function ID: 98528
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 12924 (EmptyState)
importAll(dependencyMap[0]);
({ View: closure_2, Image: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.emptyImage = { <string:3260278625>: "<string:1358954855>", <string:3047011082>: "<string:1091667159>", <string:1006331037>: "/assets/design/components/LottieIcon/native/generated/lotties" };
obj.emptyTitle = {};
obj.emptyBody = {};
let closure_6 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  let body;
  let bodyStyle;
  let children;
  let title;
  const tmp = callback2();
  arg1(dependencyMap[5]);
  if (null != Illustration.Illustration) {
    let obj = {};
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj.style = items;
    let tmp6Result = callback(Illustration.Illustration, obj);
  } else {
    tmp6Result = null;
    if (tmp4) {
      obj = { resizeMode: "contain" };
      let obj1 = arg1(dependencyMap[5]);
      obj.source = obj1.isThemeLight(tmp3) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj.style = items1;
      tmp6Result = callback(closure_3, obj);
      const tmp6 = callback;
      const tmp7 = closure_3;
    }
    const tmp4 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  obj = { style: items2, accessible: true };
  const items2 = [tmp.container, Illustration.style];
  const items3 = [tmp6Result, , , ];
  let tmp14 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    obj1 = { 0: "EmojiSourceDataTypes", -9223372036854775808: "roleImage", 9223372036854775807: "viewBoxSize" };
    const items4 = [tmp.emptyTitle, tmp11];
    obj1.style = items4;
    obj1.children = title;
    tmp14 = callback(arg1(dependencyMap[6]).Text, obj1);
  }
  items3[1] = tmp14;
  let tmp18 = null;
  if (null != body) {
    const obj2 = { 0: "FrameEffect_02-4_Out", -9223372036854775808: 0, 9223372036854775807: 24.881 };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj2.style = items5;
    obj2.children = body;
    tmp18 = callback(arg1(dependencyMap[6]).Text, obj2);
  }
  items3[2] = tmp18;
  items3[3] = children;
  obj.children = items3;
  return closure_5(closure_2, obj);
};
