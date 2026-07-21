// Module ID: 15443
// Function ID: 117810
// Name: getPendingSource
// Dependencies: []
// Exports: Pending

// Module 15443 (getPendingSource)
function getPendingSource(theme) {
  let obj = arg1(dependencyMap[3]);
  obj = {
    dark() {
      return callback(closure_1[4]);
    },
    darker() {
      return callback(closure_1[5]);
    },
    light() {
      return callback(closure_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function usePendingSource() {
  return getPendingSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export { getPendingSource };
export { usePendingSource };
export const Pending = function Pending(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = usePendingSource();
  return <Image {...obj} />;
};
