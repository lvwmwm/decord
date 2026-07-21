// Module ID: 13582
// Function ID: 102962
// Name: getBlockedSource
// Dependencies: []
// Exports: Blocked

// Module 13582 (getBlockedSource)
function getBlockedSource(theme) {
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
function useBlockedSource() {
  return getBlockedSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export { getBlockedSource };
export { useBlockedSource };
export const Blocked = function Blocked(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useBlockedSource();
  return <Image {...obj} />;
};
