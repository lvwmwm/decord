// Module ID: 7775
// Function ID: 61668
// Name: NativeLottieView
// Dependencies: [31, 27, 33, 477, 7776, 116, 2]
// Exports: default

// Module 7775 (NativeLottieView)
import result from "result";
import closure_2 from "result";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

let closure_0;
let closure_1;
({ useEffect: closure_0, useRef: closure_1 } = result);
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = require("get ActivityIndicator").requireNativeComponent("NativeLottieNode");
}
let closure_5 = require("codegenNativeCommands")({ supportedCommands: ["setup"] });
const obj = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
result = set.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

export default function NativeLottieView(renderMode) {
  let asset;
  let height;
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
  let ref;
  let style;
  let jsx;
  ref = style.useRef(null);
  style = { asset, url, width, height, animating: flag, accessibilityLabel: renderMode.accessibilityLabel };
  jsx = ref(style);
  LOOP(() => {
    closure_3.current = style;
  });
  const items = [LOOP];
  LOOP(() => {
    let accessibilityLabel;
    let animating;
    let asset;
    let height;
    let renderMode;
    let url;
    let width;
    const current = ref.current;
    ({ asset, url, width, height, renderMode, animating, accessibilityLabel } = { asset: current.asset, url: current.url, width: current.width, height: current.height, renderMode: LOOP, animating: current.animating, accessibilityLabel: current.accessibilityLabel });
    let tmp = "" !== url;
    if (tmp) {
      tmp = 0 !== width;
    }
    if (tmp) {
      tmp = 0 !== height;
    }
    if (tmp) {
      outer1_5.setup(ref.current, asset, url, width, height, renderMode, animating, accessibilityLabel);
    }
  }, items);
  style = { width, height, opacity };
  return <closure_4 ref={ref} style={style} />;
};
export const NativeLottieRenderMode = obj;
