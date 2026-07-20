// Module ID: 7675
// Function ID: 61311
// Name: NativeLottieView
// Dependencies: []
// Exports: default

// Module 7675 (NativeLottieView)
const _module = require(dependencyMap[0]);
({ useEffect: closure_0, useRef: closure_1 } = _module);
let closure_2 = importDefault(dependencyMap[0]);
const jsx = require(dependencyMap[2]).jsx;
const _module1 = require(dependencyMap[3]);
if (_module1.isAndroid()) {
  let importDefaultResult = importDefault(dependencyMap[4]);
} else {
  importDefaultResult = require(dependencyMap[1]).requireNativeComponent("NativeLottieNode");
}
let closure_5 = importDefault(dependencyMap[5])({ supportedCommands: [] });
const obj = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

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
  let React;
  let jsx;
  ref = React.useRef(null);
  let style = { asset, url, width, height, animating: flag, accessibilityLabel: renderMode.accessibilityLabel };
  React = style;
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
      closure_5.setup(ref.current, asset, url, width, height, renderMode, animating, accessibilityLabel);
    }
  }, items);
  style = { width, height, opacity };
  return <importDefaultResult ref={ref} style={style} />;
};
export const NativeLottieRenderMode = obj;
