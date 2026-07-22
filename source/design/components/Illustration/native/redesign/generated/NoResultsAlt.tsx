// Module ID: 8424
// Function ID: 67134
// Name: getNoResultsAltSource
// Dependencies: []
// Exports: NoResultsAlt

// Module 8424 (getNoResultsAltSource)
function getNoResultsAltSource(theme) {
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
function useNoResultsAltSource() {
  return getNoResultsAltSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export { getNoResultsAltSource };
export { useNoResultsAltSource };
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoResultsAltSource();
  return <Image {...obj} />;
};
