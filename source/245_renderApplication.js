// Module ID: 245
// Function ID: 3301
// Name: renderApplication
// Dependencies: []
// Exports: default

// Module 245 (renderApplication)
let closure_3 = importAll(dependencyMap[0]);
arg1(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export default function renderApplication(arg0, arg1, rootTag, WrapperComponent, rootViewStyle, fabric, arg6, internal_excludeLogBox) {
  let obj = arg6;
  importDefault(dependencyMap[3])(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  if (null == arg6) {
    obj = importDefault(dependencyMap[4]);
  }
  obj = {};
  obj.value = obj;
  obj = { rootTag, fabric, WrapperComponent, rootViewStyle };
  let frozen = arg1;
  if (null == arg1) {
    const _Object = Object;
    frozen = Object.freeze({});
  }
  obj.initialProps = frozen;
  obj.internal_excludeLogBox = internal_excludeLogBox;
  obj.children = jsx(arg0, Object.assign({}, arg1, { rootTag }));
  obj.children = jsx(importDefault(dependencyMap[6]), obj);
  const tmp4Result = jsx(importDefault(dependencyMap[5]).Provider, obj);
  let tmp11Result = tmp4Result;
  if (arg10) {
    tmp11Result = tmp4Result;
    if (null != arg9) {
      const obj2 = {};
      let str = "hidden";
      if (arg9 === importDefault(dependencyMap[7]).VISIBLE) {
        str = "visible";
      }
      obj2.mode = str;
      obj2.children = tmp4Result;
      tmp11Result = <unstable_Activity.unstable_Activity {...obj2} />;
      const tmp11 = jsx;
    }
  }
  const BooleanResult = Boolean(fabric);
  obj.startTimespan("renderApplication_React_render");
  let str2 = "0";
  let str3 = "0";
  if (BooleanResult) {
    str3 = "1";
  }
  obj.setExtra("usedReactConcurrentRoot", str3);
  if (fabric) {
    str2 = "1";
  }
  obj.setExtra("usedReactFabric", str2);
  const obj1 = { rootTag };
  const tmp5 = importDefault(dependencyMap[6]);
  obj.setExtra("usedReactProfiler", importAll(dependencyMap[8]).isProfilingRenderer());
  const obj6 = importAll(dependencyMap[8]);
  const obj3 = { element: tmp11Result, rootTag, useFabric: Boolean(fabric), useConcurrentRoot: BooleanResult };
  importAll(dependencyMap[8]).renderElement(obj3);
  if (!fabric) {
    importDefault(dependencyMap[9])("[OSS][OldArchDeprecatedWarning]", "The app is running using the Legacy Architecture. The Legacy Architecture is deprecated and will be removed in a future version of React Native. Please consider migrating to the New Architecture. For more information, please see https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here");
  }
  obj.stopTimespan("renderApplication_React_render");
};
