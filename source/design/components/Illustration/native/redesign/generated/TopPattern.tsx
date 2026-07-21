// Module ID: 12330
// Function ID: 94402
// Name: getTopPatternSource
// Dependencies: []
// Exports: TopPattern

// Module 12330 (getTopPatternSource)
function getTopPatternSource(theme) {
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
function useTopPatternSource() {
  return getTopPatternSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export { getTopPatternSource };
export { useTopPatternSource };
export const TopPattern = function TopPattern(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useTopPatternSource();
  return <Image {...obj} />;
};
