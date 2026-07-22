// Module ID: 10561
// Function ID: 82492
// Name: getStreamFailedSource
// Dependencies: []
// Exports: StreamFailed

// Module 10561 (getStreamFailedSource)
function getStreamFailedSource(theme) {
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
function useStreamFailedSource() {
  return getStreamFailedSource(arg1(dependencyMap[6]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export { getStreamFailedSource };
export { useStreamFailedSource };
export const StreamFailed = function StreamFailed(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useStreamFailedSource();
  return <Image {...obj} />;
};
