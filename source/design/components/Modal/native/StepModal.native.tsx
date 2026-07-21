// Module ID: 12963
// Function ID: 98625
// Name: StepModal
// Dependencies: []
// Exports: StepModal

// Module 12963 (StepModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { height: "100%" } };
obj = { count: false, space: false, push: false, sk: false, borderRadius: false, type: false, height: arg1(dependencyMap[5]).NAV_BAR_HEIGHT };
obj.stepContainer = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const arg1 = steps;
  const onWillFocus = steps.onWillFocus;
  const importDefault = onWillFocus;
  let obj = Object.create(null);
  obj.steps = 0;
  obj.onWillFocus = 0;
  const merged = Object.assign(steps, obj);
  const tmp3 = callback3();
  const tmp4 = importDefault(closure_2[6])();
  const tmp5 = callback(React.useState(0), 2);
  closure_2 = tmp5[1];
  const items = [onWillFocus, steps];
  obj = { style: tmp3.container };
  const callback = React.useCallback((route) => {
    let index;
    if (null != steps) {
      index = steps.indexOf(tmp.name);
    }
    let num = 0;
    if (null != index) {
      num = index;
    }
    closure_2(num);
    if (null != onWillFocus) {
      onWillFocus(route);
    }
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onWillFocus"] = callback;
  obj["headerStyle"] = { height: arg1(closure_2[5]).NAV_BAR_HEIGHT + tmp4.top };
  obj["hideTitle"] = true;
  const items1 = [callback2(arg1(closure_2[7]).Modal, obj), ];
  const obj2 = { style: items2, pointerEvents: "box-none" };
  const items2 = [tmp3.stepContainer, { marginTop: tmp4.top }];
  const obj3 = { currentStep: tmp5[0] };
  let length;
  if (null != steps) {
    length = steps.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  obj3.totalSteps = num;
  obj2.children = callback2(arg1(closure_2[8]).ModalStepIndicator, obj3);
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  return closure_7(View, obj);
};
