// Module ID: 8566
// Function ID: 68083
// Name: ImageGraphic
// Dependencies: []
// Exports: Graphic

// Module 8566 (ImageGraphic)
function ImageGraphic(source) {
  const tmp = callback();
  return jsx(importDefault(dependencyMap[4]), { source: source.src, style: callback().image, resizeMode: "contain", accessibilityElementsHidden: true });
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
  obj.children = jsx(riveProps.rive, obj);
  return <View {...obj} />;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { width: false, height: false, backgroundColor: false, opacity: false, width: false };
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {}, image: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = function Graphic(aspectRatio) {
  let str = aspectRatio.aspectRatio;
  if (str === undefined) {
    str = "16/9";
  }
  let obj = Object.create(null);
  obj.aspectRatio = 0;
  obj.style = 0;
  const merged = Object.assign(aspectRatio, obj);
  const arg1 = merged;
  const items = [merged];
  obj = {
    style: items1,
    children: React.useMemo(() => {
      let obj = merged(closure_2[5]);
      if (obj.isImage(merged)) {
        obj = {};
        const merged = Object.assign(merged);
        let tmp4 = callback(closure_8, obj);
      } else {
        tmp4 = null;
        if (obj2.isRive(merged)) {
          obj = {};
          const merged1 = Object.assign(merged);
          tmp4 = callback(closure_9, obj);
        }
        const obj2 = merged(closure_2[6]);
      }
      return tmp4;
    }, items)
  };
  const items1 = [callback().container, , ];
  obj = { aspectRatio: closure_6[str] };
  items1[1] = obj;
  items1[2] = aspectRatio.style;
  return <View {...obj} />;
};
