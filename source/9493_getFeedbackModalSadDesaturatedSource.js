// Module ID: 9493
// Function ID: 73983
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: []
// Exports: FeedbackModalSadDesaturated

// Module 9493 (getFeedbackModalSadDesaturatedSource)
function getFeedbackModalSadDesaturatedSource(theme) {
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
function useFeedbackModalSadDesaturatedSource() {
  return getFeedbackModalSadDesaturatedSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export { getFeedbackModalSadDesaturatedSource };
export { useFeedbackModalSadDesaturatedSource };
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useFeedbackModalSadDesaturatedSource();
  return <Image {...obj} />;
};
