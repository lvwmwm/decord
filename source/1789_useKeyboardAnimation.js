// Module ID: 1789
// Function ID: 19819
// Name: useKeyboardAnimation
// Dependencies: []
// Exports: useKeyboardAnimation, useTranslateAnimation

// Module 1789 (useKeyboardAnimation)
const useLayoutEffect = require(dependencyMap[0]).useLayoutEffect;
const Platform = require(dependencyMap[1]).Platform;
let closure_3 = { code: "function pnpm_hooksTs1(e){const{isClosed,heightWhenOpened}=this.__closure;if(e.height>0){isClosed.value=false;heightWhenOpened.value=e.height;}}" };
let closure_4 = { code: "function pnpm_hooksTs2(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}" };
let closure_5 = { code: "function pnpm_hooksTs3(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}" };
let closure_6 = { code: "function pnpm_hooksTs4(e){const{isClosed,height,progress}=this.__closure;isClosed.value=e.height===0;height.value=e.height;progress.value=e.progress;}" };
let closure_7 = { code: "function pnpm_hooksTs5(e){const{padding,OS,translate}=this.__closure;if(e.height===0){padding.value=0;}if(OS===\"ios\"){translate.value=e.progress;}}" };
let closure_8 = { code: "function pnpm_hooksTs6(e){const{OS,translate}=this.__closure;if(OS!==\"ios\"){translate.value=e.progress;}}" };
let closure_9 = { code: "function pnpm_hooksTs7(e){const{padding,translate}=this.__closure;padding.value=0;translate.value=e.progress;}" };
let closure_10 = { code: "function pnpm_hooksTs8(e){const{padding,OS,translate}=this.__closure;padding.value=e.progress;if(OS!==\"ios\"){translate.value=e.progress;}}" };

export const useKeyboardAnimation = function useKeyboardAnimation() {
  const require = require(dependencyMap[2]).useKeyboardContext().reanimated;
  const obj = require(dependencyMap[2]);
  const heightWhenOpened = require(dependencyMap[3]).useSharedValue(0);
  const dependencyMap = heightWhenOpened;
  const obj2 = require(dependencyMap[3]);
  const height = require(dependencyMap[3]).useSharedValue(0);
  const useLayoutEffect = height;
  const obj3 = require(dependencyMap[3]);
  const progress = require(dependencyMap[3]).useSharedValue(0);
  let closure_3 = progress;
  const obj4 = require(dependencyMap[3]);
  const isClosed = require(dependencyMap[3]).useSharedValue(true);
  let closure_4 = isClosed;
  useLayoutEffect(() => {
    const value = reanimated.progress.value;
    heightWhenOpened.value = -reanimated.height.value;
    height.value = -reanimated.height.value;
    progress.value = value;
    isClosed.value = 0 === value;
  }, []);
  const obj5 = require(dependencyMap[3]);
  /* worklet (recovered source) */ function pnpm_hooksTs1(e){const{isClosed,heightWhenOpened}=this.__closure;if(e.height>0){isClosed.value=false;heightWhenOpened.value=e.height;}}
  pnpm_hooksTs1.__closure = { isClosed, heightWhenOpened };
  pnpm_hooksTs1.__workletHash = 12249381939606;
  pnpm_hooksTs1.__initData = closure_3;
  /* worklet (recovered source) */ function pnpm_hooksTs2(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}
  pnpm_hooksTs2.__closure = { progress, height };
  pnpm_hooksTs2.__workletHash = 6522928191084;
  pnpm_hooksTs2.__initData = closure_4;
  /* worklet (recovered source) */ function pnpm_hooksTs3(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}
  pnpm_hooksTs3.__closure = { progress, height };
  pnpm_hooksTs3.__workletHash = 4743203414413;
  pnpm_hooksTs3.__initData = closure_5;
  /* worklet (recovered source) */ function pnpm_hooksTs4(e){const{isClosed,height,progress}=this.__closure;isClosed.value=e.height===0;height.value=e.height;progress.value=e.progress;}
  pnpm_hooksTs4.__closure = { isClosed, height, progress };
  pnpm_hooksTs4.__workletHash = 7189399485148;
  pnpm_hooksTs4.__initData = closure_6;
  require(dependencyMap[4]).useKeyboardHandler({ onStart: pnpm_hooksTs1, onMove: pnpm_hooksTs2, onInteractive: pnpm_hooksTs3, onEnd: pnpm_hooksTs4 }, []);
  return { height, progress, heightWhenOpened, isClosed };
};
export const useTranslateAnimation = function useTranslateAnimation() {
  const require = require(dependencyMap[2]).useKeyboardContext().reanimated;
  const obj = require(dependencyMap[2]);
  const padding = require(dependencyMap[3]).useSharedValue(0);
  const dependencyMap = padding;
  const obj2 = require(dependencyMap[3]);
  const translate = require(dependencyMap[3]).useSharedValue(0);
  const useLayoutEffect = translate;
  useLayoutEffect(() => {
    padding.value = reanimated.progress.value;
  }, []);
  const obj3 = require(dependencyMap[3]);
  /* worklet (recovered source) */ function pnpm_hooksTs5(e){const{padding,OS,translate}=this.__closure;if(e.height===0){padding.value=0;}if(OS==="ios"){translate.value=e.progress;}}
  pnpm_hooksTs5.__closure = { padding, OS: "android", translate };
  pnpm_hooksTs5.__workletHash = 12261942243858;
  pnpm_hooksTs5.__initData = closure_7;
  /* worklet (recovered source) */ function pnpm_hooksTs6(e){const{OS,translate}=this.__closure;if(OS!=="ios"){translate.value=e.progress;}}
  pnpm_hooksTs6.__closure = { OS: "android", translate };
  pnpm_hooksTs6.__workletHash = 4704193858755;
  pnpm_hooksTs6.__initData = closure_8;
  /* worklet (recovered source) */ function pnpm_hooksTs7(e){const{padding,translate}=this.__closure;padding.value=0;translate.value=e.progress;}
  pnpm_hooksTs7.__closure = { padding, translate };
  pnpm_hooksTs7.__workletHash = 3250463859117;
  pnpm_hooksTs7.__initData = closure_9;
  /* worklet (recovered source) */ function pnpm_hooksTs8(e){const{padding,OS,translate}=this.__closure;padding.value=e.progress;if(OS!=="ios"){translate.value=e.progress;}}
  pnpm_hooksTs8.__closure = { padding, OS: "android", translate };
  pnpm_hooksTs8.__workletHash = 14425204766932;
  pnpm_hooksTs8.__initData = closure_10;
  require(dependencyMap[4]).useKeyboardHandler({ onStart: pnpm_hooksTs5, onMove: pnpm_hooksTs6, onInteractive: pnpm_hooksTs7, onEnd: pnpm_hooksTs8 }, []);
  return { translate, padding };
};
