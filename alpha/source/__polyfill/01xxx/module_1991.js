// Module ID: 1991
// Function ID: 1992
// Dependencies: [19, 21, 1976, 1655]

// Module 1991
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1976 from "module_1976" /* 1976 */;
import react_mod from "react" /* 19 */;

const _modDef1655 = _mod1655;

let c3;
let forwardRef;
let react = react_mod;
({ useMemo: c3, forwardRef } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_5 = { code: "(function pnpm_indexTsx1(){let[interpolate,progress,closed,opened,enabled,height]=this.__closure;const offset=interpolate(progress.value,[0,1],[closed,opened]);return{transform:[{translateY:enabled?height.value+offset:closed}]};})" };

export default forwardRef((offset, ref) => {
  let height;
  let progress;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const f86133 = () => {
    const items = [style, animatedStyle];
    return items;
  };
  offset = offset.offset;
  const children = offset.children;
  if (offset === undefined) {
    offset = {};
  }
  let num = offset.closed;
  if (num === undefined) {
    num = 0;
  }
  let num2 = offset.opened;
  if (num2 === undefined) {
    num2 = 0;
  }
  const style = offset.style;
  let flag = offset.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(offset, Object.assign({ children: 0, offset: 0, style: 0, enabled: 0 }));
  const tmp2 = dependencyMap;
  const obj2 = _mod1976;
  const reanimatedKeyboardAnimation = obj2.useReanimatedKeyboardAnimation();
  ({ height, progress } = reanimatedKeyboardAnimation);
  let items = [closure_5, , , , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  items[1] = _mod1655.interpolate;
  items[2] = progress;
  items[3] = num;
  items[4] = num2;
  items[5] = flag;
  items[6] = height;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  function pnpm_indexTsx1() {
    let items1;
    let sum = c2;
    const items = [c2, c3];
    const tmp3 = c4;
    if (tmp3) {
      sum = _undefined.value + tmp2;
    }
    const obj = { transform: items1 };
    items1 = [{ translateY: sum }];
    return obj;
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 10955093481628;
  pnpm_indexTsx1.__initData = tmp5;
  const items2 = [num, num2, flag];
  const animatedStyle = useAnimatedStyle(pnpm_indexTsx1, items2);
  const items3 = [style, animatedStyle];
  _false(f86133, items3);
  const View = _modDef1655.View;
  const merged1 = Object.assign(merged);
  return <View ref={arg1} style={_false(f86133, items3)}>{children}</View>;
});
