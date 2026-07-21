// Module ID: 11628
// Function ID: 90288
// Name: getNoMutualServersSource
// Dependencies: []
// Exports: NoMutualServers

// Module 11628 (getNoMutualServersSource)
function getNoMutualServersSource(theme) {
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
function useNoMutualServersSource() {
  return getNoMutualServersSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export { getNoMutualServersSource };
export { useNoMutualServersSource };
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoMutualServersSource();
  return <Image {...obj} />;
};
