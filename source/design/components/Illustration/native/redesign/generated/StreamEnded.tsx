// Module ID: 10557
// Function ID: 82471
// Name: getStreamEndedSource
// Dependencies: []
// Exports: StreamEnded

// Module 10557 (getStreamEndedSource)
function getStreamEndedSource(theme) {
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
function useStreamEndedSource() {
  return getStreamEndedSource(arg1(dependencyMap[6]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export { getStreamEndedSource };
export { useStreamEndedSource };
export const StreamEnded = function StreamEnded(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useStreamEndedSource();
  return <Image {...obj} />;
};
