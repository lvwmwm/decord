// Module ID: 13575
// Function ID: 102939
// Name: getBlockedSource
// Dependencies: [0, 0, 4294967295, 4294967295, 4294967295]
// Exports: Blocked

// Module 13575 (getBlockedSource)
import "result";
import { Image } from "result";

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
