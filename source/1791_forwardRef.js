// Module ID: 1791
// Function ID: 19841
// Name: forwardRef
// Dependencies: [29, 31, 33, 1776, 1582]

// Module 1791 (forwardRef)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_5;
let forwardRef;
const require = arg1;
let closure_3 = ["children", "offset", "style", "enabled"];
({ useMemo: closure_5, forwardRef } = result);
let closure_7 = { code: "function pnpm_indexTsx1(){const{interpolate,progress,closed,opened,enabled,height}=this.__closure;const offset=interpolate(progress.value,[0,1],[closed,opened]);return{transform:[{translateY:enabled?height.value+offset:closed}]};}" };

export default forwardRef((children, ref) => {
  let offset = children.offset;
  if (undefined === offset) {
    offset = {};
  }
  const closed = offset.closed;
  let num = 0;
  if (undefined !== closed) {
    num = closed;
  }
  const opened = offset.opened;
  let num2 = 0;
  if (undefined !== opened) {
    num2 = opened;
  }
  const style = children.style;
  const enabled = children.enabled;
  let closure_3 = tmp;
  const tmp2 = height(children, closure_3);
  const reanimatedKeyboardAnimation = num(style[3]).useReanimatedKeyboardAnimation();
  height = reanimatedKeyboardAnimation.height;
  const progress = reanimatedKeyboardAnimation.progress;
  const obj2 = num(style[3]);
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  let obj = { interpolate: num(style[4]).interpolate, progress, closed: num, opened: num2, enabled: undefined === enabled || enabled, height };
  pnpm_indexTsx1.__closure = obj;
  pnpm_indexTsx1.__workletHash = 13627085806149;
  pnpm_indexTsx1.__initData = closure_7;
  let items = [num, num2, undefined === enabled || enabled];
  const animatedStyle = num(style[4]).useAnimatedStyle(pnpm_indexTsx1, items);
  let items1 = [style, animatedStyle];
  const obj3 = num(style[4]);
  obj = {
    ref,
    style: progress(() => {
      const items = [style, animatedStyle];
      return items;
    }, items1)
  };
  return animatedStyle(num2(style[4]).View, Object.assign(obj, tmp2, { children: children.children }));
});
