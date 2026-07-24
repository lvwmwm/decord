// Module ID: 1676
// Function ID: 18578
// Name: addTransformToKeepPosition
// Dependencies: [57, 1638]
// Exports: EntryExitTransition

// Module 1676 (addTransformToKeepPosition)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function addTransformToKeepPosition(style, style2, arg2, arg3) {
  let tmp19;
  let tmp20;
  const entries = Object.entries(style2);
  while (tmp2 !== undefined) {
    let tmp17 = callback;
    let tmp18 = callback(tmp3, 2);
    [tmp19, tmp20] = tmp18;
    let tmp21 = tmp20;
    if (undefined !== tmp20.transform) {
      let tmp6 = tmp20;
      let transform = tmp21.transform;
      let tmp7 = arg2;
      let arr = transform.unshift(arg2);
    } else {
      let tmp4 = tmp20;
      let tmp5 = arg2;
      let items = [arg2];
      tmp21.transform = items;
    }
    let _parseInt = parseInt;
    let tmp9 = tmp19;
    let result = parseInt(tmp19) / 2;
    let tmp11 = style;
    let tmp12 = arg3;
    if (arg3) {
      let _Math = Math;
      let tmp15 = result;
      let bound = Math.min(result, 49);
    } else {
      let tmp13 = result;
      bound = result + 50;
    }
    let _HermesInternal = HermesInternal;
    let tmp16 = tmp20;
    style["" + bound] = tmp21;
    continue;
  }
}

export const EntryExitTransition = function EntryExitTransition(name, translateX) {
  let obj = {};
  const structuredCloneResult = structuredClone(require(1638) /* TransitionType */.AnimationsData[translateX.exiting]);
  obj.translateX = "" + translateX.translateX + "px";
  obj.translateY = "" + translateX.translateY + "px";
  obj.scale = "" + translateX.scaleX + "," + translateX.scaleY;
  obj = { name, style: {}, duration: 300 };
  addTransformToKeepPosition(obj.style, structuredCloneResult.style, obj, true);
  addTransformToKeepPosition(obj.style, structuredClone(require(1638) /* TransitionType */.AnimationsData[translateX.entering]).style, { translateX: "0px", translateY: "0px", scale: "1,1" }, false);
  const style = obj.style;
  const map = new Map();
  if (undefined === style[0].opacity) {
    const result = map.set(48, 1);
    const result1 = map.set(49, 0);
  }
  if (undefined === style[50].opacity) {
    const result2 = map.set(50, 0);
    const result3 = map.set(51, 1);
  }
  const structuredCloneResult1 = structuredClone(require(1638) /* TransitionType */.AnimationsData[translateX.entering]);
  while (tmp10 !== undefined) {
    let tmp12 = callback;
    let tmp13 = callback(tmp11, 2);
    let first = tmp13[0];
    let tmp15 = style;
    let _Object = Object;
    obj = { opacity: tmp13[1] };
    tmp5[first] = Object.assign({}, tmp5[first], obj);
    continue;
  }
  return obj;
};
