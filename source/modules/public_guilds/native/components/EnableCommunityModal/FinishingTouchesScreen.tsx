// Module ID: 16255
// Function ID: 125576
// Name: FinishingTouchesScreen
// Dependencies: []
// Exports: default

// Module 16255 (FinishingTouchesScreen)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ Image: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ CREATE_NEW_CHANNEL_VALUE: closure_10, MODERATOR_PERMISSIONS: closure_11, MODERATOR_PERMISSIONS_FLAG: closure_12 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ GuildFeatures: closure_13, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[7]));
const tmp5 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default function FinishingTouchesScreen() {
  let tmp11;
  let tmp12;
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[8]);
  const token = obj.useToken(importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_8];
  const guild = obj1.useStateFromStoresObject(items, () => props.getProps()).guild;
  const arg1 = guild;
  let prop;
  if (null != guild) {
    prop = guild.defaultMessageNotifications;
  }
  const first = callback(React.useState(prop), 1)[0];
  const importDefault = first;
  const tmp8 = callback(React.useState(false), 2);
  const first1 = tmp8[0];
  [tmp11, tmp12] = callback(React.useState(!closure_11.some((VIEW_CHANNEL) => callback(closure_3[11]).canEveryone(VIEW_CHANNEL, guild))), 2);
  const first2 = callback(React.useState(tmp11), 1)[0];
  let prop1;
  if (null != guild) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, first];
  const callback = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0) {
      let prop;
      if (null != guild) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== constants2.ONLY_MENTIONS) {
        let obj = { defaultMessageNotifications: constants2.ONLY_MENTIONS };
        first(closure_3[12]).updateGuild(obj);
        const obj3 = first(closure_3[12]);
      }
    }
    if (!tmp) {
      tmp = null == first;
    }
    if (!tmp) {
      obj = first(closure_3[12]);
      obj = { defaultMessageNotifications: first };
      obj.updateGuild(obj);
    }
  }, items1);
  const callback1 = React.useCallback((features) => {
    let publicUpdatesChannelId;
    let everyoneRole;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const removeResult = callback(closure_3[13]).remove(everyoneRole.permissions, closure_12);
      let obj = {};
      const merged = Object.assign(everyoneRole);
      obj["permissions"] = removeResult;
      const obj3 = callback(closure_3[13]);
      obj = { features: set };
      let rulesChannelId = features.rulesChannelId;
      if (null == rulesChannelId) {
        rulesChannelId = closure_10;
      }
      obj.rulesChannelId = rulesChannelId;
      ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = features);
      if (null == publicUpdatesChannelId) {
        publicUpdatesChannelId = closure_10;
      }
      obj.publicUpdatesChannelId = publicUpdatesChannelId;
      obj.defaultMessageNotifications = features.defaultMessageNotifications;
      first(closure_3[12]).saveGuild(features.id, obj);
      if (removeResult !== everyoneRole.permissions) {
        obj = guild(closure_3[14]);
        const items = [obj];
        obj.saveRoleSettings(features.id, items);
      }
      const obj5 = first(closure_3[12]);
    }
  }, []);
  const tmp10 = callback(React.useState(!closure_11.some((VIEW_CHANNEL) => callback(closure_3[11]).canEveryone(VIEW_CHANNEL, guild))), 2);
  let obj2 = arg1(dependencyMap[16]);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  obj = { headerRef: ref, currentStep: arg1(dependencyMap[17]).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1 };
  const intl = arg1(dependencyMap[18]).intl;
  obj.buttonText = intl.string(arg1(dependencyMap[18]).t.XGl4ba);
  obj = { style: enableCommunitySharedStyles.content };
  obj1 = { "Bool(false)": -1480503039, "Bool(false)": 1359050337, "Bool(false)": -1136523533, "Bool(false)": 989856819, ref };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj1.children = intl2.formatToPlainString(arg1(dependencyMap[18]).t.tInpJj, {});
  const items2 = [callback2(arg1(dependencyMap[19]).Text, obj1), , , ];
  obj2 = { resizeMode: "contain", source: importDefault(dependencyMap[15])().finishingTouches };
  items2[1] = callback2(closure_6, obj2);
  const obj3 = { style: enableCommunitySharedStyles.header };
  const intl3 = arg1(dependencyMap[18]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[18]).t.Pj/s/a);
  items2[2] = callback2(arg1(dependencyMap[19]).Heading, obj3);
  const obj4 = { "Null": null, "Null": 3, alignItems: null, style: enableCommunitySharedStyles.description };
  const intl4 = arg1(dependencyMap[18]).intl;
  obj4.children = intl4.string(arg1(dependencyMap[18]).t.IL7/no);
  items2[3] = callback2(arg1(dependencyMap[19]).Text, obj4);
  obj.children = items2;
  const items3 = [callback3(closure_7, obj), , ];
  const obj5 = { spacing: 24, style: { paddingHorizontal: token } };
  const obj6 = { hasIcons: false };
  const obj7 = { formSwitchDisabled: first === constants2.ONLY_MENTIONS };
  const tmp17 = importDefault(dependencyMap[15])();
  const obj8 = {};
  const intl5 = arg1(dependencyMap[18]).intl;
  obj8.label = intl5.format(arg1(dependencyMap[18]).t.K8Eg4P, {
    infoHook() {
      return null;
    }
  });
  let prop2;
  if (null != guild) {
    prop2 = guild.defaultMessageNotifications;
  }
  obj8.value = prop2 === constants2.ONLY_MENTIONS;
  obj8.disabled = first === constants2.ONLY_MENTIONS;
  obj8.onValueChange = callback;
  obj7.children = callback2(arg1(dependencyMap[23]).TableSwitchRow, obj8);
  const items4 = [callback2(importDefault(dependencyMap[22]), obj7), ];
  const obj10 = { formSwitchDisabled: first2 };
  const obj9 = {
    infoHook() {
      return null;
    }
  };
  const tmp21 = importDefault(dependencyMap[22]);
  const obj11 = {};
  const intl6 = arg1(dependencyMap[18]).intl;
  obj11.label = intl6.format(arg1(dependencyMap[18]).t.v8qCoG, {
    infoHook() {
      return null;
    }
  });
  obj11.value = tmp11;
  obj11.disabled = first2;
  obj11.onValueChange = tmp12;
  obj10.children = callback2(arg1(dependencyMap[23]).TableSwitchRow, obj11);
  items4[1] = callback2(importDefault(dependencyMap[22]), obj10);
  obj6.children = items4;
  const items5 = [callback3(arg1(dependencyMap[21]).TableRowGroup, obj6), ];
  const obj13 = {};
  const intl7 = arg1(dependencyMap[18]).intl;
  obj13.title = intl7.string(arg1(dependencyMap[18]).t.k+b2Cf);
  obj13.hasIcons = false;
  const obj14 = {};
  const intl8 = arg1(dependencyMap[18]).intl;
  obj14.label = intl8.string(arg1(dependencyMap[18]).t.9AG3wI);
  obj14.value = first1;
  obj14.onValueChange = tmp8[1];
  obj13.children = callback2(arg1(dependencyMap[23]).TableSwitchRow, obj14);
  items5[1] = callback2(arg1(dependencyMap[21]).TableRowGroup, obj13);
  obj5.children = items5;
  items3[1] = callback3(arg1(dependencyMap[20]).Stack, obj5);
  const obj15 = { "Null": null, "Null": null, alignItems: null, style: enableCommunitySharedStyles.formHint };
  const intl9 = arg1(dependencyMap[18]).intl;
  const obj16 = {};
  const obj12 = {
    infoHook() {
      return null;
    }
  };
  const tmp23 = importDefault(dependencyMap[22]);
  obj16.communityGuidelines = importDefault(dependencyMap[24]).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
  const obj22 = importDefault(dependencyMap[24]);
  obj16.typesOfGuilds = importDefault(dependencyMap[24]).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj15.children = intl9.format(arg1(dependencyMap[18]).t.BwbW/Q, obj16);
  items3[2] = callback2(arg1(dependencyMap[19]).Text, obj15);
  obj.children = items3;
  return callback3(arg1(dependencyMap[17]).EnableCommunityModalScreen, obj);
};
