// Module ID: 5102
// Function ID: 43428
// Name: BottomSheetFooterContainer
// Dependencies: []

// Module 5102 (BottomSheetFooterContainer)
let closure_2 = { code: "function pnpm_BottomSheetFooterContainerTsx1(){const{animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE}=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;}" };
const memoResult = require(dependencyMap[0]).memo(function BottomSheetFooterContainerComponent(renderFooter) {
  let obj = require(dependencyMap[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  const require = animatedContainerHeight;
  const animatedHandleHeight = bottomSheetInternal.animatedHandleHeight;
  const dependencyMap = animatedHandleHeight;
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  let closure_2 = animatedFooterHeight;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeightInContainer = bottomSheetInternal.animatedKeyboardHeightInContainer;
  obj = {};
  /* worklet (recovered source) */ function pnpm_BottomSheetFooterContainerTsx1(){const{animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE}=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;}
  obj = { animatedHandleHeight, INITIAL_HANDLE_HEIGHT: require(dependencyMap[3]).INITIAL_HANDLE_HEIGHT, animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, KEYBOARD_STATE: require(dependencyMap[4]).KEYBOARD_STATE };
  pnpm_BottomSheetFooterContainerTsx1.__closure = obj;
  pnpm_BottomSheetFooterContainerTsx1.__workletHash = 8297656659240;
  pnpm_BottomSheetFooterContainerTsx1.__initData = closure_2;
  const items = [animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, animatedHandleHeight];
  obj.animatedFooterPosition = require(dependencyMap[2]).useDerivedValue(pnpm_BottomSheetFooterContainerTsx1, items);
  return renderFooter.renderFooter(obj);
});
memoResult.displayName = "BottomSheetFooterContainer";

export const BottomSheetFooterContainer = memoResult;
