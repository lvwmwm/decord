// Module ID: 12349
// Function ID: 94467
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: []
// Exports: GuildSubscriptionNoGuilds

// Module 12349 (getGuildSubscriptionNoGuildsSource)
function getGuildSubscriptionNoGuildsSource(theme) {
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
function useGuildSubscriptionNoGuildsSource() {
  return getGuildSubscriptionNoGuildsSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export { getGuildSubscriptionNoGuildsSource };
export { useGuildSubscriptionNoGuildsSource };
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useGuildSubscriptionNoGuildsSource();
  return <Image {...obj} />;
};
