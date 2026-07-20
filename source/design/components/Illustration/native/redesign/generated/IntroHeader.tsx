// Module ID: 16212
// Function ID: 125363
// Name: getIntroHeaderSource
// Dependencies: []
// Exports: IntroHeader

// Module 16212 (getIntroHeaderSource)
function getIntroHeaderSource(theme) {
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
function useIntroHeaderSource() {
  return getIntroHeaderSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export { getIntroHeaderSource };
export { useIntroHeaderSource };
export const IntroHeader = function IntroHeader(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useIntroHeaderSource();
  return <Image {...obj} />;
};
