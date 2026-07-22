// Module ID: 13591
// Function ID: 103017
// Name: getBlockedSource
// Dependencies: [0, 0, 4294967295, 4294967295, 4294967295]
// Exports: Blocked

// Module 13591 (getBlockedSource)
import "__exportStarResult1";
import { Image } from "__exportStarResult1";

function getBlockedSource(theme) {
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
function useBlockedSource() {
  return getBlockedSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export { getBlockedSource };
export { useBlockedSource };
export const Blocked = function Blocked(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useBlockedSource();
  return <Image {...obj} />;
};
