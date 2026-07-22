// Module ID: 11671
// Function ID: 90560
// Name: useIsHubRealNamePromptShowing
// Dependencies: []
// Exports: default

// Module 11671 (useIsHubRealNamePromptShowing)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
const GuildPrompts = arg1(dependencyMap[6]).GuildPrompts;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  const arg1 = arg0;
  const items = [closure_6, closure_4, closure_7, closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === closure_4.hasViewedPrompt(constants2.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = currentUser.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        const member = member.getMember(guild.id, id);
        let nick;
        if (null != member) {
          nick = member.nick;
        }
        return null == nick;
      }
    }
  });
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!stateFromStores) {
        stateFromStores(closure_2[8]).viewPrompt(constants2.REAL_NAME_PROMPT, arg0);
        const obj = stateFromStores(closure_2[8]);
      }
    }
  }, items1);
  return true === stateFromStores;
};
