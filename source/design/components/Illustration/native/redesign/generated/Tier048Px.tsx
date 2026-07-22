// Module ID: 12324
// Function ID: 94419
// Name: getTier048PxSource
// Dependencies: []
// Exports: Tier048Px

// Module 12324 (getTier048PxSource)
function getTier048PxSource(theme) {
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
function useTier048PxSource() {
  return getTier048PxSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export { getTier048PxSource };
export { useTier048PxSource };
export const Tier048Px = function Tier048Px(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useTier048PxSource();
  return <Image {...obj} />;
};
