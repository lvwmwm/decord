// Module ID: 426
// Function ID: 5946
// Name: createVirtualView
// Dependencies: []
// Exports: createHiddenVirtualView

// Module 426 (createVirtualView)
function createVirtualView(arg0) {
  const importDefault = arg0;
  let closure_1 = arg0 !== closure_7;
  return React.forwardRef(function VirtualView_withRef(arg0, ref) {
    let children;
    let nativeID;
    let style;
    ({ style, onModeChange: closure_0 } = arg0);
    ({ children, nativeID } = arg0);
    const tmp = callback(callback2(arg0), 2);
    const first = tmp[0];
    let closure_1 = tmp[1];
    let obj = { initialHidden: closure_1, nativeID, ref, renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered };
    let composeResult = style;
    if (first !== closure_7) {
      obj = {};
      const _Math = Math;
      obj.height = Math.abs(arg0(closure_1[3])(first));
      composeResult = arg0(closure_1[5]).compose(style, obj);
      const obj2 = arg0(closure_1[5]);
    }
    obj.style = composeResult;
    obj.onModeChange = function handleModeChange(nativeEvent) {
      const tmpResult = bindResult(callback[3])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      let bindResult = null;
      if (null != bindResult) {
        const obj = { mode: tmpResult, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
        bindResult = bindResult.bind(null, obj);
      }
      if (tmpResult !== globalThis.VirtualViewMode.Visible) {
        if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
          if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
            const _Error = Error;
            throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
          } else {
            const callback = nativeEvent.nativeEvent.targetRect.height;
            callback2(() => {
              height(height);
              if (null != bindResult) {
                bindResult();
              }
            });
          }
        } else {
          callback2(() => {
            height(closure_7);
            if (null != bindResult) {
              bindResult();
            }
          });
        }
      } else {
        callback(closure_7);
        if (null != bindResult) {
          bindResult();
        }
      }
    };
    let tmp9 = null;
    if (first === closure_7) {
      tmp9 = children;
    }
    obj.children = tmp9;
    return closure_6(arg0(closure_1[4]), obj);
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ startTransition: closure_4, useState: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = null;

export default createVirtualView(null);
export const createHiddenVirtualView = function createHiddenVirtualView(arg0) {
  return createVirtualView(arg0);
};
export const _logs = {};
