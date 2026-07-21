// Module ID: 11460
// Function ID: 89272
// Dependencies: []

// Module 11460
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const JoinGuildSources = arg1(dependencyMap[4]).JoinGuildSources;
const jsx = arg1(dependencyMap[5]).jsx;
const memoResult = importAllResult.memo(function LurkerServerPreviewJoinButton(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const joinSource = guildId.joinSource;
  const importDefault = joinSource;
  const onBeforeJoin = guildId.onBeforeJoin;
  const dependencyMap = onBeforeJoin;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [guildId, joinSource, onBeforeJoin];
  const callback = stateFromStores.useCallback(() => {
    const lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(guildId);
    let type;
    if (null != lurkingSourceForGuild) {
      type = lurkingSourceForGuild.type;
    }
    if (type === constants.DIRECTORY_ENTRY) {
      const channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
      if (null != channel) {
        const guildId = channel.getGuildId();
        const result = guildId(onBeforeJoin[7]).setHubProgressActionComplete(guildId, guildId(onBeforeJoin[8]).HubProgressStep.JOIN_GUILD);
        const obj2 = guildId(onBeforeJoin[7]);
      }
    }
    const obj3 = guildId(onBeforeJoin[9]);
    obj3.trackJoinClicked(guildId, joinSource, joinSource(onBeforeJoin[10]).hasNavigatedAway(guildId));
    if (null != onBeforeJoin) {
      onBeforeJoin();
    }
    const obj4 = joinSource(onBeforeJoin[10]);
    joinSource(onBeforeJoin[11]).joinGuild(guildId, { source: joinSource });
  }, items1);
  if (null == stateFromStores) {
    obj = { 1367053286: "<string:980287489>", -1604123340: "<string:1250951169>", -1840163158: "<string:635699201>" };
    const intl = arg1(dependencyMap[13]).intl;
    obj.text = intl.string(arg1(dependencyMap[13]).t.VJlc0S);
    obj.onPress = callback;
    return jsx(arg1(dependencyMap[12]).Button, obj);
  } else {
    let obj2 = importDefault(dependencyMap[14]);
    const userAvatarSource = obj2.getUserAvatarSource(stateFromStores, false);
    const intl2 = arg1(dependencyMap[13]).intl;
    obj = {
      usernameHook() {
          return joinSource(onBeforeJoin[15]).getFormattedName(stateFromStores);
        }
    };
    const obj1 = { 1367053286: "<string:980287489>", -1604123340: "<string:1250951169>", -1840163158: "<string:635699201>", text: intl2.formatToPlainString(arg1(dependencyMap[13]).t.5qtVhX, obj) };
    obj2 = { source: userAvatarSource, variant: "entity" };
    obj1.icon = jsx(arg1(dependencyMap[12]).Button.Icon, obj2);
    obj1.onPress = callback;
    return jsx(arg1(dependencyMap[12]).Button, obj1);
  }
  const importAllResult = stateFromStores;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;
