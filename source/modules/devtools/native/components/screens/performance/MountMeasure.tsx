// Module ID: 14591
// Function ID: 109955
// Name: MountMeasure
// Dependencies: []
// Exports: default

// Module 14591 (MountMeasure)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default function MountMeasure(arg0) {
  let children;
  let style;
  ({ batchKey: closure_0, onMeasure: closure_1, onCancel: closure_2 } = arg0);
  ({ style, children } = arg0);
  let obj = arg1(dependencyMap[3]);
  const unmountEffect = obj.useUnmountEffect(() => callback2(closure_0));
  obj = {
    style,
    onLayout() {
      return callback(closure_0);
    },
    children
  };
  return <View {...obj} />;
};
