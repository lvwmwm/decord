// Module ID: 8573
// Function ID: 68123
// Name: ImageGraphic
// Dependencies: [31, 27, 33, 4130, 5085, 3842, 3940, 2]
// Exports: Graphic

// Module 8573 (ImageGraphic)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function ImageGraphic(source) {
  const tmp = callback();
  return jsx(importDefault(5085), { source: source.src, style: callback().image, resizeMode: "contain", accessibilityElementsHidden: true });
}
function RiveGraphic(riveProps) {
  riveProps = riveProps.riveProps;
  if (riveProps === undefined) {
    riveProps = {};
  }
  const tmp = callback();
  let obj = { style: tmp.image };
  obj = {};
  const merged = Object.assign(riveProps);
  obj["style"] = tmp.image;
  obj.children = jsx(riveProps.rive, {});
  return <View />;
}
let closure_6 = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { width: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }, image: { width: "100%", height: "100%" } });
const result = require("jsxProd").fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = function Graphic(aspectRatio) {
  let str = aspectRatio.aspectRatio;
  if (str === undefined) {
    str = "16/9";
  }
  let obj = Object.create(null);
  obj.aspectRatio = 0;
  obj.style = 0;
  let merged = Object.assign(aspectRatio, obj);
  const items = [merged];
  obj = {
    style: items1,
    children: React.useMemo(() => {
      let obj = merged(outer1_2[5]);
      if (obj.isImage(merged)) {
        obj = {};
        merged = Object.assign(merged);
        let tmp4 = outer1_5(outer1_8, obj);
      } else {
        tmp4 = null;
        if (obj2.isRive(merged)) {
          obj = {};
          const merged1 = Object.assign(merged);
          tmp4 = outer1_5(outer1_9, obj);
        }
        obj2 = merged(outer1_2[6]);
      }
      return tmp4;
    }, items)
  };
  items1 = [callback().container, , ];
  obj = { aspectRatio: table[str] };
  items1[1] = obj;
  items1[2] = aspectRatio.style;
  return <View aspectRatio={table[str]} />;
};
