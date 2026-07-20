// Module ID: 16224
// Function ID: 125416
// Name: getChannelSetupSource
// Dependencies: []
// Exports: ChannelSetup

// Module 16224 (getChannelSetupSource)
function getChannelSetupSource(theme) {
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
function useChannelSetupSource() {
  return getChannelSetupSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export { getChannelSetupSource };
export { useChannelSetupSource };
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useChannelSetupSource();
  return <Image {...obj} />;
};
