// Module ID: 8486
// Function ID: 67752
// Name: InformationTable
// Dependencies: []

// Module 8486 (InformationTable)
function InformationTable(speedBumpType) {
  let obj = { icon: importDefault(dependencyMap[11]) };
  const intl = arg1(dependencyMap[12]).intl;
  obj.text = intl.string(arg1(dependencyMap[12]).t.kcuWva);
  const items = [obj, ];
  obj = { icon: importDefault(dependencyMap[11]) };
  if ("block" === speedBumpType.speedBumpType) {
    const intl3 = arg1(dependencyMap[12]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[12]).t.QxrDY1);
  } else {
    const intl2 = arg1(dependencyMap[12]).intl;
    stringResult = intl2.string(arg1(dependencyMap[12]).t.W6fjkS);
  }
  obj.text = stringResult;
  items[1] = obj;
  const arg1 = items;
  obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: items.length === arg1 };
      obj = { size: items(closure_2[15]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = callback(items(closure_2[15]).Icon, obj);
      obj.label = icon.text;
      return callback(items(closure_2[14]).TableRow, obj, arg1);
    })
  };
  return callback2(arg1(dependencyMap[13]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const UserProfileAnalyticsTypes = arg1(dependencyMap[6]).UserProfileAnalyticsTypes;
({ AnalyticEvents: closure_10, EMPTY_STRING_SNOWFLAKE_ID: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, paddingBottom: 56 };
obj.button = obj;
obj1 = { marginBottom: importDefault(dependencyMap[10]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
obj.tableContainer = obj1;
const tmp3 = arg1(dependencyMap[8]);
obj.header = { marginBottom: importDefault(dependencyMap[10]).space.PX_24, marginHorizontal: importDefault(dependencyMap[10]).space.PX_16, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.bodyText = { textAlign: "center" };
obj.headerText = { textAlign: "center" };
obj.avatar = { alignSelf: "center" };
const obj3 = { 0: "content", 9223372036854775807: "a", marginTop: importDefault(dependencyMap[10]).space.PX_16 };
obj.avatarContainer = obj3;
const obj4 = { "Null": "text-lg/normal", "Null": null, "Null": "mobile-text-heading-primary", padding: importDefault(dependencyMap[10]).space.PX_4, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[10]).radii.round };
obj.avatarIconContainer = obj4;
const obj2 = { marginBottom: importDefault(dependencyMap[10]).space.PX_24, marginHorizontal: importDefault(dependencyMap[10]).space.PX_16, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.suppress = { alignSelf: "center", marginTop: importDefault(dependencyMap[10]).space.PX_16 };
let closure_14 = obj1.createStyles(obj);
const obj5 = { alignSelf: "center", marginTop: importDefault(dependencyMap[10]).space.PX_16 };
const memoResult = importAllResult.memo(function UserProfileSpeedBumpActionSheet(userId) {
  let messageId;
  let openedAt;
  let roleId;
  let sessionId;
  let sourceAnalyticsLocations;
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  const onClose = userId.onClose;
  const dependencyMap = onClose;
  ({ location: closure_3, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  let importAllResult;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let constants;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  let tmp15;
  function handleShowProfileActionSheet() {
    const merged = Object.assign(createUserProfileAnalyticsContext);
    channelId(onClose[26])({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: closure_3 });
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[16]);
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => first.getUser(userId));
  importAllResult = stateFromStores;
  let obj2 = arg1(dependencyMap[18]);
  const items1 = [closure_6];
  const items2 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores2.getChannel(channelId), items2);
  let guild_id;
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  View = guild_id;
  let obj3 = arg1(dependencyMap[18]);
  const items3 = [closure_7];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = tmp7Result.getMember(guild_id, userId);
    }
    return member;
  });
  closure_6 = stateFromStores2;
  let id;
  const isThemeLightResult = obj.isThemeLight(importDefault(dependencyMap[17])());
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  if (null == id) {
    id = createUserProfileAnalyticsContext;
  }
  const tmp7Result = importDefault(dependencyMap[19])(id, guild_id);
  closure_7 = tmp7Result;
  const tmp10 = callback(importAllResult.useState(false), 2);
  const first = tmp10[0];
  closure_8 = first;
  constants = tmp10[1];
  const items4 = [];
  const tmp7 = importDefault(dependencyMap[19]);
  const tmp12 = importDefault(dependencyMap[20]);
  items4[HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0)] = importDefault(dependencyMap[21]).IGNORED_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp12(items4).analyticsLocations;
  let obj4 = arg1(dependencyMap[22]);
  createUserProfileAnalyticsContext = obj4.useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, channelId, messageId, roleId });
  obj = { userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp7Result, guildMember: stateFromStores2, type: constants.IGNORED_USER_SHEET };
  tmp15 = importDefault(dependencyMap[23])(obj);
  const items5 = [tmp15, tmp7Result, guild_id, first, stateFromStores2];
  const effect = importAllResult.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = null == tmp7Result;
    }
    if (!tmp) {
      let tmp6 = null == guild_id;
      if (!tmp6) {
        let prop;
        if (null != stateFromStores2) {
          prop = stateFromStores2.fullProfileLoadedTimestamp;
        }
        tmp6 = null != prop;
      }
      if (tmp6) {
        channelId(onClose[24]).track(analyticsLocations.OPEN_POPOUT, tmp15);
        callback(true);
        const obj = channelId(onClose[24]);
      }
    }
  }, items5);
  const items6 = [onClose];
  const effect1 = importAllResult.useEffect(() => () => {
    if (null != callback) {
      callback();
    }
  }, items6);
  const items7 = [stateFromStores, userId];
  const effect2 = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(onClose[25]).getUser(userId);
      const obj = userId(onClose[25]);
    }
  }, items7);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: analyticsLocations };
    obj1 = { value: createUserProfileAnalyticsContext, openedAt };
    let fetchStartedAt;
    if (null != tmp7Result) {
      fetchStartedAt = tmp7Result.fetchStartedAt;
    }
    obj1.fetchStartedAt = fetchStartedAt;
    let fetchEndedAt;
    if (null != tmp7Result) {
      fetchEndedAt = tmp7Result.fetchEndedAt;
    }
    obj1.fetchEndedAt = fetchEndedAt;
    let isLoaded;
    if (null != tmp7Result) {
      isLoaded = tmp7Result.isLoaded;
    }
    obj1.isLoaded = isLoaded;
    obj2 = { startExpanded: true };
    obj3 = {};
    obj4 = { style: tmp.header };
    const obj5 = { style: tmp.avatarContainer };
    const obj6 = { user: stateFromStores, guildId: guild_id, animate: false, size: arg1(dependencyMap[15]).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [tmp15(arg1(dependencyMap[15]).Avatar, obj6), ];
    const obj7 = { style: tmp.avatarIconContainer };
    const obj8 = { size: arg1(dependencyMap[15]).Icon.Sizes.MEDIUM };
    if ("block" === speedBumpType) {
      obj8.source = tmp32(tmp31[29]);
      let tmp33 = obj8;
    } else {
      obj8.source = tmp32(tmp31[30]);
      tmp33 = obj8;
    }
    obj7.children = tmp15(arg1(dependencyMap[15]).Icon, tmp33);
    items8[1] = tmp15(View, obj7);
    obj5.children = items8;
    const items9 = [handleShowProfileActionSheet(View, obj5), , ];
    const obj9 = { style: tmp.headerText };
    const intl = arg1(dependencyMap[12]).intl;
    obj9.children = intl.string(arg1(dependencyMap[12]).t.b33pLD);
    items9[1] = tmp15(arg1(dependencyMap[31]).Text, obj9);
    const obj10 = { "Null": -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, "Null": 0.158, style: tmp.bodyText };
    const intl2 = arg1(dependencyMap[12]).intl;
    const t = arg1(dependencyMap[12]).t;
    const obj11 = {};
    let obj16 = importDefault(dependencyMap[32]);
    obj11.username = obj16.getName(guild_id, channelId, stateFromStores);
    obj10.children = intl2.format("block" === speedBumpType ? t.8F+WNz : t./cZp5s, obj11);
    items9[2] = tmp15(arg1(dependencyMap[31]).Text, obj10);
    obj4.children = items9;
    const items10 = [handleShowProfileActionSheet(View, obj4), , ];
    const obj12 = { style: tmp.tableContainer };
    const obj13 = { speedBumpType };
    obj12.children = tmp15(InformationTable, obj13);
    items10[1] = tmp15(View, obj12);
    const obj14 = { style: tmp.button };
    const obj15 = {};
    let str = "secondary";
    if (isThemeLightResult) {
      str = "tertiary";
    }
    obj15.variant = str;
    obj15.size = "lg";
    const intl3 = arg1(dependencyMap[12]).intl;
    obj15.text = intl3.string(arg1(dependencyMap[12]).t.UJKH/l);
    obj15.onPress = handleShowProfileActionSheet;
    const items11 = [tmp15(arg1(dependencyMap[33]).Button, obj15), ];
    let tmp52 = null;
    if ("ignore" === speedBumpType) {
      obj16 = {
        style: tmp.suppress,
        accessibilityRole: "button",
        onPress() {
              const IgnoreProfileSpeedbumpDisabled = userId(onClose[35]).IgnoreProfileSpeedbumpDisabled;
              IgnoreProfileSpeedbumpDisabled.updateSetting(true);
              handleShowProfileActionSheet();
            }
      };
      const obj17 = {};
      const intl4 = arg1(dependencyMap[12]).intl;
      obj17.children = intl4.string(arg1(dependencyMap[12]).t.QbcRCJ);
      obj16.children = tmp15(arg1(dependencyMap[31]).Text, obj17);
      tmp52 = tmp15(arg1(dependencyMap[34]).PressableOpacity, obj16);
    }
    items11[1] = tmp52;
    obj14.children = items11;
    items10[2] = handleShowProfileActionSheet(View, obj14);
    obj3.children = items10;
    obj2.children = handleShowProfileActionSheet(arg1(dependencyMap[28]).BottomSheetView, obj3);
    obj1.children = tmp15(arg1(dependencyMap[27]).BottomSheet, obj2);
    obj.children = tmp15(arg1(dependencyMap[22]).UserProfileAnalyticsProvider, obj1);
    return tmp15(arg1(dependencyMap[20]).AnalyticsLocationProvider, obj);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0);
});
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default memoResult;
