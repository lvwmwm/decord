// Module ID: 12438
// Function ID: 94941
// Name: getGuildSubscriptionRemovalSource
// Dependencies: []
// Exports: GuildSubscriptionRemoval

// Module 12438 (getGuildSubscriptionRemovalSource)
function getGuildSubscriptionRemovalSource(theme) {
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
function useGuildSubscriptionRemovalSource() {
  return getGuildSubscriptionRemovalSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export { getGuildSubscriptionRemovalSource };
export { useGuildSubscriptionRemovalSource };
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useGuildSubscriptionRemovalSource();
  return <Image {...obj} />;
};
