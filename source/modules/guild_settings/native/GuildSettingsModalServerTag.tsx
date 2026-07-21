// Module ID: 16150
// Function ID: 124467
// Name: GuildSettingsModalServerTag
// Dependencies: []
// Exports: default

// Module 16150 (GuildSettingsModalServerTag)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const AppState = arg1(dependencyMap[3]).AppState;
const GuildProfileFetchStatus = arg1(dependencyMap[4]).GuildProfileFetchStatus;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const GuildSettingsSections = arg1(dependencyMap[7]).GuildSettingsSections;
({ BADGES: closure_11, GuildTagBadgeSize: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { container: { flex: 1 } };
obj = { paddingTop: 16, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16 };
obj.containerContent = obj;
const tmp3 = arg1(dependencyMap[9]);
obj.description = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_4 };
let closure_15 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_4 };
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTag.tsx");

export default function GuildSettingsModalServerTag(guildId) {
  let badgeColorPrimary;
  let fetchStatus;
  let guildProfile;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let GuildProfileFetchStatus;
  let closure_8;
  let closure_9;
  let GuildSettingsSections;
  let callback1;
  let tmp25;
  let callback3;
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[13]);
  const result = obj1.canUseMobileServerTagSettings(guildId);
  const dependencyMap = result;
  let obj2 = arg1(dependencyMap[14]);
  const items = [closure_8];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => result1.getGuild(guildId), items1);
  let obj3 = arg1(dependencyMap[15]);
  guildProfile = obj3.useGuildProfile(guildId);
  ({ guildProfile, fetchStatus } = guildProfile);
  let obj4 = arg1(dependencyMap[14]);
  const items2 = [closure_9];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => tmp18.getGuildProfile());
  let callback = stateFromStores1;
  let obj5 = arg1(dependencyMap[14]);
  const items3 = [closure_9];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => tmp18.getProps().originalProfile);
  let callback2 = stateFromStores2;
  const tmp8 = callback2(React.useState(false), 2);
  const first = tmp8[0];
  const React = first;
  let closure_6 = tmp8[1];
  let guildSupportsTagsResult = null != stateFromStores;
  if (guildSupportsTagsResult) {
    let obj6 = arg1(dependencyMap[16]);
    guildSupportsTagsResult = obj6.guildSupportsTags(stateFromStores);
  }
  GuildProfileFetchStatus = guildSupportsTagsResult;
  let tag;
  if (null != stateFromStores1) {
    tag = stateFromStores1.tag;
  }
  let obj7 = arg1(dependencyMap[13]);
  const result1 = obj7.isServerTagDraftDirty(stateFromStores1, stateFromStores2);
  closure_8 = result1;
  let tmp16 = null != stateFromStores1;
  if (tmp16) {
    let tmp17 = null == stateFromStores1.tag;
    if (!tmp17) {
      tmp17 = "" !== stateFromStores1.tag;
    }
    tmp16 = tmp17;
  }
  let tmp18 = result1;
  if (result1) {
    tmp18 = tmp16;
  }
  closure_9 = tmp18;
  const items4 = [guildId];
  const effect = React.useEffect(() => {
    if (!result1) {
      let obj = guildId(result[17]);
      obj = { respectBackoff: true };
      const guildProfile = obj.getGuildProfile(guildId, true, obj);
    }
  }, items4);
  const items5 = [guildId, result1];
  const effect1 = React.useEffect(() => {
    let closure_0 = closure_6.addEventListener("change", (arg0) => {
      if (!tmp) {
        let obj = lib(closure_2[17]);
        obj = { respectBackoff: true };
        const guildProfile = obj.getGuildProfile(lib, true, obj);
      }
    });
    return () => lib.remove();
  }, items5);
  const items6 = [guildId, stateFromStores2];
  callback = React.useCallback((arg0) => {
    const updateGuildProfile = navigation(result[18]).updateGuildProfile;
    if (arg0) {
      let obj = {};
      let tag;
      if (null != stateFromStores2) {
        tag = stateFromStores2.tag;
      }
      let str = "";
      if (null != tag) {
        str = tag;
      }
      obj.tag = str;
      let badge;
      if (null != stateFromStores2) {
        badge = stateFromStores2.badge;
      }
      if (null == badge) {
        badge = callback1[0];
      }
      obj.badge = badge;
      let badgeColorPrimary;
      if (null != stateFromStores2) {
        badgeColorPrimary = stateFromStores2.badgeColorPrimary;
      }
      let tmp16 = null;
      if (null != badgeColorPrimary) {
        tmp16 = badgeColorPrimary;
      }
      obj.badgeColorPrimary = tmp16;
      let badgeColorSecondary;
      if (null != stateFromStores2) {
        badgeColorSecondary = stateFromStores2.badgeColorSecondary;
      }
      let tmp20 = null;
      if (null != badgeColorSecondary) {
        tmp20 = badgeColorSecondary;
      }
      obj.badgeColorSecondary = tmp20;
      updateGuildProfile(tmp2, obj);
    } else {
      obj = { tag: null };
      updateGuildProfile(tmp2, obj);
    }
  }, items6);
  const ref = React.useRef(false);
  GuildSettingsSections = ref;
  // CreateGeneratorClosureLongIndex (0x67)
  const items7 = [stateFromStores1, guildId, tmp18, result, navigation];
  callback1 = React.useCallback(callback(ref), items7);
  const items8 = [guildId];
  tmp25 = fetchStatus === GuildProfileFetchStatus.FETCHED;
  const items9 = [navigation, result, tmp25, guildSupportsTagsResult, first, tmp18, callback1];
  callback2 = React.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: guildId(result[22]).GUILD_POWERUP_TAG_SKU_ID };
    navigation(result[21])(obj);
  }, items8);
  const effect2 = React.useEffect(() => {
    if (result) {
      if (tmp25) {
        if (guildSupportsTagsResult) {
          let setOptionsResult = {
            headerRight: first ? () => callback2(callback(closure_2[23]).HeaderSubmittingIndicator, {}) : () => {
                    const obj = {};
                    const intl = callback(closure_2[20]).intl;
                    obj.text = intl.string(callback(closure_2[20]).t.R3BPH+);
                    obj.onPress = closure_11;
                    obj.disabled = !closure_9;
                    return callback2(callback(closure_2[24]).HeaderActionButton, obj);
                  }
          };
          setOptionsResult = navigation.setOptions(setOptionsResult);
        }
      }
    }
    navigation.setOptions({ headerRight: undefined });
  }, items9);
  const items10 = [guildId, stateFromStores2];
  callback3 = React.useCallback(() => {
    let obj = navigation(result[18]);
    obj = {};
    let tag;
    if (null != stateFromStores2) {
      tag = stateFromStores2.tag;
    }
    let tmp4 = null;
    if (null != tag) {
      tmp4 = tag;
    }
    obj.tag = tmp4;
    let badge;
    if (null != stateFromStores2) {
      badge = stateFromStores2.badge;
    }
    let tmp7 = null;
    if (null != badge) {
      tmp7 = badge;
    }
    obj.badge = tmp7;
    let badgeColorPrimary;
    if (null != stateFromStores2) {
      badgeColorPrimary = stateFromStores2.badgeColorPrimary;
    }
    let tmp10 = null;
    if (null != badgeColorPrimary) {
      tmp10 = badgeColorPrimary;
    }
    obj.badgeColorPrimary = tmp10;
    let badgeColorSecondary;
    if (null != stateFromStores2) {
      badgeColorSecondary = stateFromStores2.badgeColorSecondary;
    }
    let tmp13 = null;
    if (null != badgeColorSecondary) {
      tmp13 = badgeColorSecondary;
    }
    obj.badgeColorSecondary = tmp13;
    obj.updateGuildProfile(guildId, obj);
  }, items10);
  let tmp28 = result1;
  if (result1) {
    tmp28 = !first;
  }
  importDefault(dependencyMap[25])(tmp28, (data) => {
    const guildId = data.data.action;
    let obj = navigation(result[26]);
    obj = {};
    const intl = guildId(result[20]).intl;
    obj.title = intl.string(guildId(result[20]).t.zhHtEX);
    const intl2 = guildId(result[20]).intl;
    obj.body = intl2.string(guildId(result[20]).t.BVVy6y);
    const intl3 = guildId(result[20]).intl;
    obj.confirmText = intl3.string(guildId(result[20]).t.Ywt4w9);
    obj.confirmColor = guildId(result[27]).ButtonColors.RED;
    const intl4 = guildId(result[20]).intl;
    obj.cancelText = intl4.string(guildId(result[20]).t.DmDzZB);
    obj.onConfirm = function onConfirm() {
      callback();
      closure_1.dispatch(action);
    };
    obj.show(obj);
  });
  if (result) {
    if (tmp25) {
      if (null == stateFromStores) {
        return null;
      } else if (null == guildProfile) {
        obj = {
          onRetry() {
                  return guildId(result[17]).getGuildProfile(guildId, true);
                }
        };
        return callback3(importDefault(dependencyMap[29]), obj);
      } else if (null == stateFromStores1) {
        return callback3(arg1(dependencyMap[28]).SceneLoadingIndicator, {});
      } else {
        let tmp33;
        if (tmp14) {
          if (null != stateFromStores1.tag) {
            if ("" !== stateFromStores1.tag) {
              obj = { children: stateFromStores1.tag };
              tmp33 = callback3(arg1(dependencyMap[30]).Text, obj);
            }
          }
        }
        obj1 = {};
        const intl = arg1(dependencyMap[20]).intl;
        obj1.title = intl.string(arg1(dependencyMap[20]).t.2QmKZ2);
        obj1.hasIcons = false;
        obj2 = {};
        const intl2 = arg1(dependencyMap[20]).intl;
        obj2.label = intl2.string(arg1(dependencyMap[20]).t.w/mIMw);
        obj2.value = tmp14;
        obj2.onValueChange = callback;
        obj2.disabled = !guildSupportsTagsResult;
        const items11 = [callback3(arg1(dependencyMap[32]).TableSwitchRow, obj2), ];
        obj3 = {};
        const intl3 = arg1(dependencyMap[20]).intl;
        obj3.label = intl3.string(arg1(dependencyMap[20]).t.oPzTHw);
        obj3.arrow = true;
        let tmp41 = !tmp14;
        if (tmp14) {
          tmp41 = !guildSupportsTagsResult;
        }
        obj3.disabled = tmp41;
        obj3.onPress = function onPress() {
          return navigation.navigate(ref.TAG_CUSTOMIZE);
        };
        let tmp43Result;
        if (null != tmp33) {
          obj4 = { "Bool(false)": null, "Bool(false)": 8, spacing: importDefault(dependencyMap[11]).space.PX_4 };
          let tmp48Result = null != stateFromStores1.badge;
          if (tmp48Result) {
            obj5 = {};
            ({ badge: obj14.badge, badgeColorPrimary } = stateFromStores1);
            let tmp51;
            if (null != badgeColorPrimary) {
              tmp51 = badgeColorPrimary;
            }
            obj5.primaryTintColor = tmp51;
            const badgeColorSecondary = stateFromStores1.badgeColorSecondary;
            let tmp52;
            if (null != badgeColorSecondary) {
              tmp52 = badgeColorSecondary;
            }
            obj5.secondaryTintColor = tmp52;
            ({ SIZE_16: obj14.width, SIZE_16: obj14.height } = tmp25);
            tmp48Result = callback3(arg1(dependencyMap[35]).GuildBadge, obj5);
            const tmp48 = callback3;
          }
          const items12 = [tmp48Result, tmp33];
          obj4.children = items12;
          tmp43Result = closure_14(arg1(dependencyMap[34]).Stack, obj4);
          const tmp43 = closure_14;
        }
        obj3.trailing = tmp43Result;
        items11[1] = callback3(arg1(dependencyMap[33]).TableRow, obj3);
        obj1.children = items11;
        const tmp37Result = closure_14(arg1(dependencyMap[31]).TableRowGroup, obj1);
        obj6 = { style: tmp.container };
        const items13 = [tmp.containerContent, guildId.contentContainerStyle];
        obj6.contentContainerStyle = items13;
        obj7 = { spacing: importDefault(dependencyMap[11]).space.PX_16 };
        if (guildSupportsTagsResult) {
          const obj8 = { hasMaxConnections: true, isBoostOnlySubscription: true, style: tmp.description };
          const intl4 = arg1(tmp60[20]).intl;
          obj8.children = intl4.string(arg1(tmp60[20]).t.qVCnq+);
          const items14 = [tmp61(arg1(tmp60[30]).Text, obj8), tmp37Result, , ];
          const obj9 = { style: tmp.description };
          const intl5 = arg1(tmp60[20]).intl;
          obj9.children = intl5.string(arg1(tmp60[20]).t.SKNnqq);
          items14[2] = tmp61(arg1(tmp60[30]).Text, obj9);
          const obj10 = { guildId };
          ({ tag: obj20.tag, badge: obj20.badge, badgeColorPrimary: obj20.primaryColor, badgeColorSecondary: obj20.secondaryColor } = stateFromStores1);
          obj10.isDirty = result1;
          items14[3] = tmp61(tmp59(tmp60[37]), obj10);
          obj7.children = items14;
          let tmp62 = obj7;
        } else {
          const obj11 = { guildId, onUnlockPress: callback2 };
          const items15 = [tmp61(tmp59(tmp60[38]), obj11), tmp37Result];
          obj7.children = items15;
          tmp62 = obj7;
        }
        obj6.children = closure_14(arg1(dependencyMap[34]).Stack, tmp62);
        return callback3(arg1(dependencyMap[36]).Form, obj6);
      }
    } else {
      return callback3(arg1(dependencyMap[28]).SceneLoadingIndicator, {});
    }
  } else {
    return null;
  }
  const tmp27 = importDefault(dependencyMap[25]);
};
