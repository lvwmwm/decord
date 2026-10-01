// Module ID: 9693
// Function ID: 9694
// Name: Graphic
// Dependencies: [19, 17, 21, 4836, 5899, 4540, 4651, 2]
// Exports: Graphic

// Module 9693 (Graphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4540 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tmp;
const GraphicTypes = tmp(4651);
function ImageGraphic(src) {
  src = src.src;
  return jsx(FastImageDefault, { source: src, style: closure_7().image, resizeMode: "contain", accessibilityElementsHidden: true });
}
function RiveGraphic(riveProps) {
  riveProps = riveProps.riveProps;
  const rive = riveProps.rive;
  if (riveProps === undefined) {
    riveProps = {};
  }
  const tmp = closure_7();
  const merged = Object.assign(riveProps);
  return <View style={tmp.image}>{null}</View>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
let closure_7 = createStyles.createStyles({ container: { width: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }, image: { width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = function Graphic(aspectRatio) {
  let str = aspectRatio.aspectRatio;
  if (str === undefined) {
    str = "16/9";
  }
  const style = aspectRatio.style;
  let merged = Object.assign(aspectRatio, Object.assign({ aspectRatio: 0, style: 0 }));
  const items = [merged];
  const items1 = [closure_7().container, , ];
  const obj2 = { aspectRatio: closure_6[str] };
  items1[1] = obj2;
  items1[2] = style;
  const tmp2 = closure_7();
  return <View style={items1}>{react.useMemo(() => {
    let tmp4;
    const obj = native;
    if (obj.isImage(merged)) {
      merged = Object.assign(tmp3);
      tmp4 = <ImageGraphic />;
    } else {
      tmp4 = null;
      const tmpResult = GraphicTypes;
      if (tmpResult.isRive(merged)) {
        const merged1 = Object.assign(tmp3);
        tmp4 = <RiveGraphic />;
      }
    }
    return tmp4;
  }, items)}</View>;
};
