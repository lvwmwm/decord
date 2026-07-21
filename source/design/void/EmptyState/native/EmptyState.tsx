// Module ID: 12915
// Function ID: 98473
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 12915 (EmptyState)
importAll(dependencyMap[0]);
({ View: closure_2, Image: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.emptyImage = { <string:4266911585>: "<string:1358954855>", <string:597500170>: "<string:1091667135>", <string:3850199709>: "/assets/design/components/LottieIcon/native/generated/lotties" };
obj.emptyTitle = { -9223372036854775808: true, 0: true };
obj.emptyBody = { "Bool(true)": "absolute", "Bool(true)": 0 };
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
    obj1 = { borderWidth: 1649, borderColor: 1368088832, overflow: 141652761 };
    const items4 = [tmp.emptyTitle, tmp11];
    obj1.style = items4;
    obj1.children = title;
    tmp14 = callback(arg1(dependencyMap[6]).Text, obj1);
  }
  items3[1] = tmp14;
  let tmp18 = null;
  if (null != body) {
    const obj2 = {};
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
