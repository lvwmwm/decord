// Module ID: 11634
// Function ID: 90312
// Name: getNoMutualFriendsSource
// Dependencies: []
// Exports: NoMutualFriends

// Module 11634 (getNoMutualFriendsSource)
function getNoMutualFriendsSource(theme) {
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
function useNoMutualFriendsSource() {
  return getNoMutualFriendsSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export { getNoMutualFriendsSource };
export { useNoMutualFriendsSource };
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoMutualFriendsSource();
  return <Image {...obj} />;
};
