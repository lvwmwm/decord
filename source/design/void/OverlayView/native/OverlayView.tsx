// Module ID: 4473
// Function ID: 39555
// Name: View
// Dependencies: []
// Exports: TransitionGroupOverlayView

// Module 4473 (View)
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
let View = tmp3.View;
const StyleSheet = tmp3.StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
let FullWindowOverlay = View;
if (obj.isIOS()) {
  FullWindowOverlay = arg1(dependencyMap[4]).FullWindowOverlay;
}
const obj = arg1(dependencyMap[3]);
if (obj2.isIOS()) {
  View = importDefault(dependencyMap[5]);
}
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = function TransitionGroupOverlayView(children) {
  children = children.children;
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  let tmp3 = null;
  if (Array.isArray(children)) {
    tmp3 = null;
    if (children.length > 0) {
      obj = { style: StyleSheet.absoluteFill };
      obj = {};
      const merged1 = Object.assign(merged);
      obj["children"] = children;
      obj.children = <View {...obj} />;
      tmp3 = <FullWindowOverlay {...obj} />;
    }
  }
  return tmp3;
};
export const NonExpandingOverlayView = View;
