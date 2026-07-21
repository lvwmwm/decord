// Module ID: 14637
// Function ID: 110385
// Name: getWumpTrashSource
// Dependencies: []
// Exports: WumpTrash

// Module 14637 (getWumpTrashSource)
function getWumpTrashSource(theme) {
  let obj = arg1(dependencyMap[3]);
  obj = {
    dark() {
      return callback(closure_1[4]);
    },
    darker() {
      return callback(closure_1[5]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useWumpTrashSource() {
  return getWumpTrashSource(arg1(dependencyMap[6]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export { getWumpTrashSource };
export { useWumpTrashSource };
export const WumpTrash = function WumpTrash(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useWumpTrashSource();
  return <Image {...obj} />;
};
