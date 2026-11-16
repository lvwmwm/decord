// Module ID: 1986
// Function ID: 1987
// Name: hooks
// Dependencies: [19, 17, 1972, 1652, 1973]
// Exports: useKeyboardAnimation, useTranslateAnimation

// Module 1986 (hooks)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1972 from "module_1972" /* 1972 */;
import _mod1973 from "module_1973" /* 1973 */;

const useLayoutEffect = react.useLayoutEffect;
const Platform = react_native.Platform;
const android = "android";
let closure_4 = { code: "(function pnpm_hooksTs1(e){let[isClosed,heightWhenOpened]=this.__closure;if(e.height>0){isClosed.value=false;heightWhenOpened.value=e.height;}})" };
let closure_5 = { code: "(function pnpm_hooksTs2(e){let[progress,height]=this.__closure;progress.value=e.progress;height.value=e.height;})" };
let closure_6 = { code: "(function pnpm_hooksTs3(e){let[progress,height]=this.__closure;progress.value=e.progress;height.value=e.height;})" };
let closure_7 = { code: "(function pnpm_hooksTs4(e){let[isClosed,height,progress]=this.__closure;isClosed.value=e.height===0;height.value=e.height;progress.value=e.progress;})" };
let closure_8 = { code: "(function pnpm_hooksTs5(e){let[padding,OS,translate]=this.__closure;if(e.height===0){padding.value=0;}if(OS===\"ios\"){translate.value=e.progress;}})" };
let closure_9 = { code: "(function pnpm_hooksTs6(e){let[OS,translate]=this.__closure;if(OS!==\"ios\"){translate.value=e.progress;}})" };
let closure_10 = { code: "(function pnpm_hooksTs7(e){let[padding,translate]=this.__closure;padding.value=0;translate.value=e.progress;})" };
let closure_11 = { code: "(function pnpm_hooksTs8(e){let[padding,OS,translate]=this.__closure;padding.value=e.progress;if(OS!==\"ios\"){translate.value=e.progress;}})" };

export const useKeyboardAnimation = () => {
  let pnpm_hooksTs1;
  let pnpm_hooksTs2;
  let pnpm_hooksTs3;
  let pnpm_hooksTs4;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = _mod1972;
  const reanimated = obj.useKeyboardContext().reanimated;
  const obj2 = _mod1652;
  const heightWhenOpened = obj2.useSharedValue(0);
  const obj3 = _mod1652;
  const height = obj3.useSharedValue(0);
  const obj4 = _mod1652;
  const progress = obj4.useSharedValue(0);
  const obj5 = _mod1652;
  const isClosed = obj5.useSharedValue(true);
  useLayoutEffect(() => {
    const value = reanimated.progress.value;
    heightWhenOpened.value = -reanimated.height.value;
    height.value = -reanimated.height.value;
    progress.value = value;
    isClosed.value = 0 === value;
  }, []);
  const items = [closure_4, isClosed, heightWhenOpened];
  [tmp6, tmp7, tmp8] = items;
  const obj7 = { onStart: pnpm_hooksTs1, onMove: pnpm_hooksTs2, onInteractive: pnpm_hooksTs3, onEnd: pnpm_hooksTs4 };
  pnpm_hooksTs1 = function pnpm_hooksTs1(height) {
    if (height.height > 0) {
      c0.value = false;
      c1.value = height.height;
    }
  };
  const items1 = [tmp7, tmp8];
  pnpm_hooksTs1.__closure = items1;
  pnpm_hooksTs1.__workletHash = 14137564493551;
  pnpm_hooksTs1.__initData = tmp6;
  const items2 = [closure_5, progress, height];
  [tmp9, tmp10, tmp11] = items2;
  pnpm_hooksTs2 = function pnpm_hooksTs2(progress) {
    c0.value = progress.progress;
    c1.value = progress.height;
  };
  const items3 = [tmp10, tmp11];
  pnpm_hooksTs2.__closure = items3;
  pnpm_hooksTs2.__workletHash = 10302284383733;
  pnpm_hooksTs2.__initData = tmp9;
  const items4 = [closure_6, progress, height];
  [tmp12, tmp13, tmp14] = items4;
  pnpm_hooksTs3 = function pnpm_hooksTs3(progress) {
    c0.value = progress.progress;
    c1.value = progress.height;
  };
  const items5 = [tmp13, tmp14];
  pnpm_hooksTs3.__closure = items5;
  pnpm_hooksTs3.__workletHash = 13364400114228;
  pnpm_hooksTs3.__initData = tmp12;
  const items6 = [closure_7, isClosed, height, progress];
  let c0;
  let c1;
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items6;
  pnpm_hooksTs4 = function pnpm_hooksTs4(height) {
    c0.value = 0 === height.height;
    c1.value = height.height;
    c2.value = height.progress;
  };
  const items7 = [tmp16, tmp17, tmp18];
  pnpm_hooksTs4.__closure = items7;
  pnpm_hooksTs4.__workletHash = 5463524107365;
  pnpm_hooksTs4.__initData = tmp15;
  const obj6 = _mod1973;
  obj6.useKeyboardHandler(obj7, []);
  return { height, progress, heightWhenOpened, isClosed };
};
export const useTranslateAnimation = () => {
  let pnpm_hooksTs5;
  let pnpm_hooksTs6;
  let pnpm_hooksTs7;
  let pnpm_hooksTs8;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = _mod1972;
  const reanimated = obj.useKeyboardContext().reanimated;
  const obj2 = _mod1652;
  const padding = obj2.useSharedValue(0);
  const obj3 = _mod1652;
  const translate = obj3.useSharedValue(0);
  useLayoutEffect(() => {
    padding.value = reanimated.progress.value;
  }, []);
  const items = [closure_8, padding, android, translate];
  [tmp5, tmp6, tmp7, tmp8] = items;
  const obj5 = { onStart: pnpm_hooksTs5, onMove: pnpm_hooksTs6, onInteractive: pnpm_hooksTs7, onEnd: pnpm_hooksTs8 };
  pnpm_hooksTs5 = function pnpm_hooksTs5(height) {
    if (0 === height.height) {
      c0.value = 0;
    }
    if ("ios" === c1) {
      c2.value = height.progress;
    }
  };
  const items1 = [tmp6, tmp7, tmp8];
  pnpm_hooksTs5.__closure = items1;
  pnpm_hooksTs5.__workletHash = 10725823667851;
  pnpm_hooksTs5.__initData = tmp5;
  const items2 = [closure_9, android, translate];
  [tmp9, tmp10, tmp11] = items2;
  pnpm_hooksTs6 = function pnpm_hooksTs6(progress) {
    if ("ios" !== c0) {
      c1.value = progress.progress;
    }
  };
  const items3 = [tmp10, tmp11];
  pnpm_hooksTs6.__closure = items3;
  pnpm_hooksTs6.__workletHash = 11503767003962;
  pnpm_hooksTs6.__initData = tmp9;
  const items4 = [closure_10, padding, translate];
  [tmp12, tmp13, tmp14] = items4;
  pnpm_hooksTs7 = function pnpm_hooksTs7(progress) {
    c0.value = 0;
    c1.value = progress.progress;
  };
  const items5 = [tmp13, tmp14];
  pnpm_hooksTs7.__closure = items5;
  pnpm_hooksTs7.__workletHash = 4497127469172;
  pnpm_hooksTs7.__initData = tmp12;
  const items6 = [closure_11, padding, android, translate];
  let c0;
  let c1;
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items6;
  pnpm_hooksTs8 = function pnpm_hooksTs8(progress) {
    c0.value = progress.progress;
    if ("ios" !== c1) {
      c2.value = progress.progress;
    }
  };
  const items7 = [tmp16, tmp17, tmp18];
  pnpm_hooksTs8.__closure = items7;
  pnpm_hooksTs8.__workletHash = 13125145210541;
  pnpm_hooksTs8.__initData = tmp15;
  const obj4 = _mod1973;
  obj4.useKeyboardHandler(obj5, []);
  return { translate, padding };
};
