// Module ID: 14837
// Function ID: 111813
// Dependencies: []

// Module 14837
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).HappeningNowCardTrackingType;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const jsx = arg1(dependencyMap[6]).jsx;
const LARGE = arg1(dependencyMap[7]).AvatarSizes.LARGE;
let closure_11 = arg1(dependencyMap[8]).createStyles({ content: { "Bool(false)": "center", "Bool(false)": "r", "Bool(false)": "isArray" } });
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo((index) => {
  let activities;
  let isMobileOnline;
  let isVROnline;
  index = index.index;
  const arg1 = index;
  const userId = index.userId;
  const importDefault = userId;
  const guildId = index.guildId;
  const dependencyMap = guildId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let importAllResult;
  let View;
  let closure_5;
  const analyticsLocations = importDefault(dependencyMap[9])().analyticsLocations;
  importAllResult = analyticsLocations;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(userId), items1);
  View = stateFromStores;
  const items2 = [index, guildId, userId, stateFromStores, analyticsLocations];
  const callback = importAllResult.useCallback(() => {
    let obj = userId(guildId[11]);
    obj = { order: index, guild_id: guildId, type: constants.INDIVIDUAL_USER_CARD, highlighted_user_ids: items };
    const items = [userId];
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
    if (null != stateFromStores) {
      index(guildId[13])(guildId[12], guildId.paths).then((arg0) => arg0.default({ userId: id.id, localUser: id, sourceAnalyticsLocations: closure_3 }));
      const promise = index(guildId[13])(guildId[12], guildId.paths);
    }
  }, items2);
  let obj1 = arg1(dependencyMap[10]);
  const items3 = [closure_5];
  const items4 = [guildId, stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    if (null == stateFromStores) {
      let obj = {};
    } else {
      obj = { status: status.getStatus(stateFromStores.id, guildId), activities: status.getActivities(stateFromStores.id, guildId), isMobileOnline: status.isMobileOnline(stateFromStores.id), isVROnline: status.isVROnline(stateFromStores.id) };
    }
    return obj;
  }, items4);
  const status = stateFromStoresObject.status;
  closure_5 = status;
  const items5 = [status, stateFromStores];
  ({ activities, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (null == stateFromStores) {
    return null;
  } else {
    const items6 = [importDefault(dependencyMap[14]).getName(stateFromStores), ];
    const obj5 = importDefault(dependencyMap[14]);
    items6[1] = arg1(dependencyMap[15]).getStatusLabel(status);
    const joined = items6.join(", ");
    obj = { onPress: callback };
    let str = "small";
    const obj6 = arg1(dependencyMap[15]);
    const tmp16 = jsx;
    if (index.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.panelVariant = flag;
    obj.accessibilityLabel = joined;
    obj = { style: tmp.content };
    obj1 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId, size: LARGE, isMobileOnline, isVROnline, streaming: importDefault(dependencyMap[17])(activities), status: tmp5, autoStatusCutout: true };
    obj.children = jsx(arg1(dependencyMap[7]).Avatar, obj1);
    obj.children = <View {...obj} />;
    return tmp16(importDefault(dependencyMap[16]), obj);
  }
  const tmp = callback();
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx");

export default memoResult;
