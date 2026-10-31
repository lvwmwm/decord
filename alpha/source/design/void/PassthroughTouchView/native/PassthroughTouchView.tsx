// Module ID: 15815
// Function ID: 15816
// Name: PassthroughTouchView
// Dependencies: [19, 21, 15816, 2]
// Exports: default

// Module 15815 (PassthroughTouchView)
import Fragment from "Fragment" /* 21 */;
import PassthroughTouchNativeComponentDefault from "PassthroughTouchNativeComponent" /* 15816 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  onTouchDown = onTouchDown.onTouchDown;
  const merged = Object.assign(onTouchDown, Object.assign({ onTouchDown: 0 }));
  PassthroughTouchNativeComponentDefault;
  const merged1 = Object.assign(merged);
  return <tmp2 onTouchDown={onTouchDown} pointerEvents="box-none" />;
};
