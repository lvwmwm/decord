// Module ID: 16209
// Function ID: 125318
// Name: getInviteEmptySource
// Dependencies: []
// Exports: InviteEmpty

// Module 16209 (getInviteEmptySource)
function getInviteEmptySource(theme) {
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
function useInviteEmptySource() {
  return getInviteEmptySource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export { getInviteEmptySource };
export { useInviteEmptySource };
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useInviteEmptySource();
  return <Image {...obj} />;
};
