// Module ID: 1791
// Function ID: 19840
// Name: forwardRef
// Dependencies: []

// Module 1791 (forwardRef)
let forwardRef;
let closure_3 = [3607696026595468400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034564032626203364, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003976949022810932, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006402333660518855];
let closure_4 = importDefault(dependencyMap[0]);
({ useMemo: closure_5, forwardRef } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
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
  ref = num;
  const opened = offset.opened;
  let num2 = 0;
  if (undefined !== opened) {
    num2 = opened;
  }
  const importDefault = num2;
  const style = children.style;
  const dependencyMap = style;
  const enabled = children.enabled;
  let closure_3 = tmp;
  const tmp2 = callback(children, closure_3);
  const reanimatedKeyboardAnimation = ref(dependencyMap[3]).useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  const callback = height;
  const progress = reanimatedKeyboardAnimation.progress;
  const obj2 = ref(dependencyMap[3]);
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  let obj = { interpolate: ref(dependencyMap[4]).interpolate, progress, closed: num, opened: num2, enabled: undefined === enabled || enabled, height };
  pnpm_indexTsx1.__closure = obj;
  pnpm_indexTsx1.__workletHash = 13627085806149;
  pnpm_indexTsx1.__initData = closure_7;
  const items = [num, num2, undefined === enabled || enabled];
  const animatedStyle = ref(dependencyMap[4]).useAnimatedStyle(pnpm_indexTsx1, items);
  const jsx = animatedStyle;
  const items1 = [style, animatedStyle];
  const obj3 = ref(dependencyMap[4]);
  obj = {
    ref,
    style: progress(() => {
      const items = [style, animatedStyle];
      return items;
    }, items1)
  };
  return jsx(importDefault(dependencyMap[4]).View, Object.assign(obj, tmp2, { children: children.children }));
});
