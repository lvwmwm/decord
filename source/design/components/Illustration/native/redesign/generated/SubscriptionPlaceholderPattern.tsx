// Module ID: 12307
// Function ID: 94343
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: []
// Exports: SubscriptionPlaceholderPattern

// Module 12307 (getSubscriptionPlaceholderPatternSource)
function getSubscriptionPlaceholderPatternSource(theme) {
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
function useSubscriptionPlaceholderPatternSource() {
  return getSubscriptionPlaceholderPatternSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export { getSubscriptionPlaceholderPatternSource };
export { useSubscriptionPlaceholderPatternSource };
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useSubscriptionPlaceholderPatternSource();
  return <Image {...obj} />;
};
