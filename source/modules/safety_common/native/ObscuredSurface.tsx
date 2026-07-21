// Module ID: 8619
// Function ID: 68308
// Name: ObscuredSurface
// Dependencies: []
// Exports: default

// Module 8619 (ObscuredSurface)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {}, content: {} };
obj = { 1373108677: -2042506376, -1570659259: 318767510, 1675377233: 5718289, backgroundColor: importDefault(dependencyMap[4]).colors.SPOILER_HIDDEN_BACKGROUND };
obj.cover = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.warning = { gap: importDefault(dependencyMap[4]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_12, paddingVertical: importDefault(dependencyMap[4]).space.PX_8 };
let closure_6 = obj.createStyles(obj);
const obj1 = { gap: importDefault(dependencyMap[4]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_12, paddingVertical: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default function ObscuredSurface(obscured) {
  let children;
  let description;
  let heading;
  ({ heading, description, children } = obscured);
  const tmp = callback2();
  let tmp3Result = children;
  if (obscured.obscured) {
    let obj = { value: arg1(dependencyMap[5]).OBSCURED_VALUE };
    obj = { style: tmp.container };
    obj = { canSort: "none", GameDepthTier1SmallBadge: "contain", _monthsRegex: "password", marginVertical: "default", animatedScrollableContentOffsetY: true, style: tmp.content, children };
    const items = [callback(View, obj), , ];
    const obj1 = { style: tmp.cover };
    items[1] = callback(View, obj1);
    const obj2 = { style: tmp.warning };
    const obj3 = { size: "lg", color: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT };
    const items1 = [callback(arg1(dependencyMap[6]).ImageWarningIcon, obj3), , ];
    const obj4 = { hasMaxConnections: null, isBoostOnlySubscription: null };
    if (null == heading) {
      const intl = arg1(dependencyMap[8]).intl;
      heading = intl.string(arg1(dependencyMap[8]).t.xC8Saf);
    }
    obj4.children = heading;
    items1[1] = callback(arg1(dependencyMap[7]).Text, obj4);
    const obj5 = {};
    if (null == description) {
      const intl2 = arg1(dependencyMap[8]).intl;
      description = intl2.string(arg1(dependencyMap[8]).t.0fc/DG);
    }
    obj5.children = description;
    items1[2] = callback(arg1(dependencyMap[7]).Text, obj5);
    obj2.children = items1;
    items[2] = closure_5(View, obj2);
    obj.children = items;
    obj.children = closure_5(View, obj);
    tmp3Result = tmp3(arg1(dependencyMap[5]).ObscuredSurfaceContext.Provider, obj);
    const tmp12 = callback;
  }
  return tmp3Result;
};
