// Module ID: 245
// Function ID: 3301
// Name: renderApplication
// Dependencies: [31, 246, 33, 44, 204, 249, 250, 256, 117, 157]
// Exports: default

// Module 245 (renderApplication)
import result from "result";
import module_246 from "module_246";
import { jsx } from "jsxProd";


export default function renderApplication(arg0, arg1, rootTag, WrapperComponent, rootViewStyle, fabric, arg6, internal_excludeLogBox) {
  let obj = arg6;
  importDefault(44)(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  if (null == arg6) {
    obj = importDefault(204);
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
  obj.children = jsx(importDefault(250), { rootTag, fabric, WrapperComponent, rootViewStyle });
  const tmp4Result = jsx(importDefault(249).Provider, { rootTag, fabric, WrapperComponent, rootViewStyle });
  let tmp11Result = tmp4Result;
  if (arg10) {
    tmp11Result = tmp4Result;
    if (null != arg9) {
      const obj2 = {};
      let str = "hidden";
      if (arg9 === importDefault(256).VISIBLE) {
        str = "visible";
      }
      obj2.mode = str;
      obj2.children = tmp4Result;
      tmp11Result = <unstable_Activity.unstable_Activity />;
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
  const tmp5 = importDefault(250);
  obj.setExtra("usedReactProfiler", importAll(117).isProfilingRenderer());
  const obj6 = importAll(117);
  const obj3 = { element: tmp11Result, rootTag, useFabric: Boolean(fabric), useConcurrentRoot: BooleanResult };
  importAll(117).renderElement(obj3);
  if (!fabric) {
    importDefault(157)("[OSS][OldArchDeprecatedWarning]", "The app is running using the Legacy Architecture. The Legacy Architecture is deprecated and will be removed in a future version of React Native. Please consider migrating to the New Architecture. For more information, please see https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here");
  }
  obj.stopTimespan("renderApplication_React_render");
};
