// Module ID: 7442
// Function ID: 7443
// Name: NativeLottieView
// Dependencies: [19, 17, 21, 1364, 7443, 113, 2]
// Exports: default

// Module 7442 (NativeLottieView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;
import LottieNodeNativeComponentDefault from "LottieNodeNativeComponent" /* 7443 */;
import react_mod from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let _window;
let map;
let react = react_mod;
({ useEffect: _window, useRef: map } = react);
react = react_mod;
const requireNativeComponent = react_native.requireNativeComponent;
let jsx = Fragment.jsx;
if (PlatformUtils.isAndroid()) {
  LottieNodeNativeComponentDefault;
} else {
  requireNativeComponent("NativeLottieNode");
}
let closure_5 = codegenNativeCommandsDefault({ supportedCommands: ["setup"] });
const NativeLottieRenderMode = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

export default function NativeLottieView(renderMode) {
  let asset;
  let height;
  let obj;
  let opacity;
  let url;
  let width;
  ({ width, height, opacity } = renderMode);
  ({ asset, url } = renderMode);
  if (opacity === undefined) {
    opacity = 1;
  }
  let LOOP = renderMode.renderMode;
  if (LOOP === undefined) {
    LOOP = obj.LOOP;
  }
  let flag = renderMode.animating;
  if (flag === undefined) {
    flag = true;
  }
  size = undefined;
  const accessibilityLabel = renderMode.accessibilityLabel;
  const ref = size.useRef(null);
  size = { asset, url, width, height, animating: flag, accessibilityLabel };
  jsx = ref(size);
  LOOP(() => {
    ref.current = size;
  });
  const items = [LOOP];
  LOOP(() => {
    let accessibilityLabel;
    let animating;
    let asset;
    let height;
    let url;
    let width;
    ({ asset, url, width, height, animating, accessibilityLabel } = ref.current);
    const tmp2 = "" !== url && 0 !== width && 0 !== height;
    if (tmp2) {
      closure_5.setup(ref.current, asset, url, width, height, LOOP, animating, accessibilityLabel);
    }
  }, items);
  obj = { ref, style: { width, height, opacity } };
  return <closure_4 ref={ref} style={{ width, height, opacity }} />;
};
export { NativeLottieRenderMode };
