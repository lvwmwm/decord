// Module ID: 9503
// Function ID: 74010
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: []
// Exports: FeedbackModalNeutralDesaturated

// Module 9503 (getFeedbackModalNeutralDesaturatedSource)
function getFeedbackModalNeutralDesaturatedSource(theme) {
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
function useFeedbackModalNeutralDesaturatedSource() {
  return getFeedbackModalNeutralDesaturatedSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export { getFeedbackModalNeutralDesaturatedSource };
export { useFeedbackModalNeutralDesaturatedSource };
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useFeedbackModalNeutralDesaturatedSource();
  return <Image {...obj} />;
};
