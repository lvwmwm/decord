// Module ID: 9508
// Function ID: 74032
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: []
// Exports: FeedbackModalHappyDesaturated

// Module 9508 (getFeedbackModalHappyDesaturatedSource)
function getFeedbackModalHappyDesaturatedSource(theme) {
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
function useFeedbackModalHappyDesaturatedSource() {
  return getFeedbackModalHappyDesaturatedSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export { getFeedbackModalHappyDesaturatedSource };
export { useFeedbackModalHappyDesaturatedSource };
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useFeedbackModalHappyDesaturatedSource();
  return <Image {...obj} />;
};
