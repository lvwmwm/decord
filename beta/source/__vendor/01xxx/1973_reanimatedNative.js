// Module ID: 1973
// Function ID: 1974
// Name: reanimatedNative
// Dependencies: [1655]
// Exports: useAnimatedKeyboardHandler, useFocusedInputLayoutHandler

// Module 1973 (reanimatedNative)
import _mod1655 from "module_1655" /* 1655 */;

let closure_2 = { code: "(function pnpm_reanimatedNativeTs1(event){let[handlers,context]=this.__closure;const{onKeyboardMoveStart:onKeyboardMoveStart,onKeyboardMove:onKeyboardMove,onKeyboardMoveEnd:onKeyboardMoveEnd,onKeyboardMoveInteractive:onKeyboardMoveInteractive}=handlers;if(onKeyboardMoveStart&&event.eventName.endsWith(\"onKeyboardMoveStart\")){onKeyboardMoveStart(event,context);}if(onKeyboardMove&&event.eventName.endsWith(\"onKeyboardMove\")){onKeyboardMove(event,context);}if(onKeyboardMoveEnd&&event.eventName.endsWith(\"onKeyboardMoveEnd\")){onKeyboardMoveEnd(event,context);}if(onKeyboardMoveInteractive&&event.eventName.endsWith(\"onKeyboardMoveInteractive\")){onKeyboardMoveInteractive(event,context);}})" };
let closure_3 = { code: "(function pnpm_reanimatedNativeTs2(event){let[handlers,context]=this.__closure;const{onFocusedInputLayoutChanged:onFocusedInputLayoutChanged}=handlers;if(onFocusedInputLayoutChanged&&event.eventName.endsWith(\"onFocusedInputLayoutChanged\")){onFocusedInputLayoutChanged(event,context);}})" };

export const useAnimatedKeyboardHandler = (ChannelListLegendListTsx1, items26) => {
  let context;
  let doDependenciesDiffer;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = _mod1655;
  const handler = obj.useHandler(ChannelListLegendListTsx1, items26);
  ({ context, doDependenciesDiffer } = handler);
  const items = [closure_2, ChannelListLegendListTsx1, context];
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_reanimatedNativeTs1(eventName) {
    let onKeyboardMove;
    let onKeyboardMoveEnd;
    let onKeyboardMoveInteractive;
    let onKeyboardMoveStart;
    ({ onKeyboardMoveStart, onKeyboardMove, onKeyboardMoveEnd, onKeyboardMoveInteractive } = c0);
    let endsWithResult = onKeyboardMoveStart;
    if (endsWithResult) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onKeyboardMoveStart");
    }
    if (endsWithResult) {
      onKeyboardMoveStart(eventName, c1);
    }
    let endsWithResult1 = onKeyboardMove;
    if (endsWithResult1) {
      const eventName2 = eventName.eventName;
      endsWithResult1 = eventName2.endsWith("onKeyboardMove");
    }
    if (endsWithResult1) {
      onKeyboardMove(eventName, c1);
    }
    let endsWithResult2 = onKeyboardMoveEnd;
    if (endsWithResult2) {
      const eventName3 = eventName.eventName;
      endsWithResult2 = eventName3.endsWith("onKeyboardMoveEnd");
    }
    if (endsWithResult2) {
      onKeyboardMoveEnd(eventName, c1);
    }
    let endsWithResult3 = onKeyboardMoveInteractive;
    if (endsWithResult3) {
      const eventName4 = eventName.eventName;
      endsWithResult3 = eventName4.endsWith("onKeyboardMoveInteractive");
    }
    if (endsWithResult3) {
      const result = onKeyboardMoveInteractive(eventName, c1);
    }
  }
  const items1 = [tmp3, tmp4];
  pnpm_reanimatedNativeTs1.__closure = items1;
  pnpm_reanimatedNativeTs1.__workletHash = 16708076715733;
  pnpm_reanimatedNativeTs1.__initData = tmp2;
  const obj2 = _mod1655;
  return obj2.useEvent(pnpm_reanimatedNativeTs1, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], doDependenciesDiffer);
};
export const useFocusedInputLayoutHandler = (ChannelListLegendListTsx1, items26) => {
  let context;
  let doDependenciesDiffer;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = _mod1655;
  const handler = obj.useHandler(ChannelListLegendListTsx1, items26);
  ({ context, doDependenciesDiffer } = handler);
  const items = [closure_3, ChannelListLegendListTsx1, context];
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_reanimatedNativeTs2(eventName) {
    const onFocusedInputLayoutChanged = _undefined.onFocusedInputLayoutChanged;
    let endsWithResult = onFocusedInputLayoutChanged;
    if (endsWithResult) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onFocusedInputLayoutChanged");
    }
    if (endsWithResult) {
      const result = onFocusedInputLayoutChanged(eventName, c1);
    }
  }
  const items1 = [tmp3, tmp4];
  pnpm_reanimatedNativeTs2.__closure = items1;
  pnpm_reanimatedNativeTs2.__workletHash = 12445966948048;
  pnpm_reanimatedNativeTs2.__initData = tmp2;
  const obj2 = _mod1655;
  return obj2.useEvent(pnpm_reanimatedNativeTs2, ["onFocusedInputLayoutChanged"], doDependenciesDiffer);
};
