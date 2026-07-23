// Module ID: 426
// Function ID: 5946
// Name: createVirtualView
// Dependencies: [57, 31, 33, 48, 427, 253]
// Exports: createHiddenVirtualView

// Module 426 (createVirtualView)
import _slicedToArray from "_slicedToArray";
import closure_3 from "result";
import result from "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
function createVirtualView(arg0) {
  let closure_0 = arg0;
  let closure_1 = arg0 !== c7;
  return React.forwardRef(function VirtualView_withRef(arg0, ref) {
    let children;
    let closure_0;
    let nativeID;
    let style;
    ({ style, onModeChange: closure_0 } = arg0);
    ({ children, nativeID } = arg0);
    const tmp = outer1_2(outer1_5(callback), 2);
    const first = tmp[0];
    const dependencyMap = tmp[1];
    let obj = { initialHidden: dependencyMap, nativeID, ref, renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered };
    VirtualViewRenderState = globalThis.VirtualViewRenderState;
    let composeResult = style;
    if (first !== outer1_7) {
      obj = {};
      const _Math = Math;
      obj.height = Math.abs(callback(48)(first));
      composeResult = callback(253).compose(style, obj);
      const obj2 = callback(253);
    }
    obj.style = composeResult;
    obj.onModeChange = function handleModeChange(nativeEvent) {
      const tmpResult = callback(table[3])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      let bindResult = null;
      if (null != callback) {
        const obj = { mode: tmpResult, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
        bindResult = callback.bind(null, obj);
      }
      callback = bindResult;
      if (tmpResult !== globalThis.VirtualViewMode.Visible) {
        if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
          if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
            const _Error = Error;
            throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
          } else {
            const height = nativeEvent.nativeEvent.targetRect.height;
            outer2_4(() => {
              height(height);
              if (null != bindResult) {
                bindResult();
              }
            });
          }
        } else {
          outer2_4(() => {
            height(outer3_7);
            if (null != bindResult) {
              bindResult();
            }
          });
        }
      } else {
        height(outer2_7);
        if (null != bindResult) {
          bindResult();
        }
      }
    };
    let tmp9 = null;
    if (first === outer1_7) {
      tmp9 = children;
    }
    obj.children = tmp9;
    return outer1_6(callback(427), obj);
  });
}
({ startTransition: closure_4, useState: closure_5 } = result);
let c7 = null;

export default createVirtualView(null);
export const createHiddenVirtualView = function createHiddenVirtualView(arg0) {
  return createVirtualView(arg0);
};
export const _logs = {};
