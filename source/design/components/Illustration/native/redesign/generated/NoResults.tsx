// Module ID: 8496
// Function ID: 67839
// Name: getNoResultsSource
// Dependencies: []
// Exports: NoResults

// Module 8496 (getNoResultsSource)
function getNoResultsSource(theme) {
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
function useNoResultsSource() {
  return getNoResultsSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export { getNoResultsSource };
export { useNoResultsSource };
export const NoResults = function NoResults(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoResultsSource();
  return <Image {...obj} />;
};
