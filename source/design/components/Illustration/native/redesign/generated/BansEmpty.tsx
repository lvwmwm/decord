// Module ID: 16213
// Function ID: 125344
// Name: getBansEmptySource
// Dependencies: []
// Exports: BansEmpty

// Module 16213 (getBansEmptySource)
function getBansEmptySource(theme) {
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
function useBansEmptySource() {
  return getBansEmptySource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export { getBansEmptySource };
export { useBansEmptySource };
export const BansEmpty = function BansEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useBansEmptySource();
  return <Image {...obj} />;
};
