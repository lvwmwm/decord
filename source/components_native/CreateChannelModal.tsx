// Module ID: 8401
// Function ID: 66850
// Name: ChannelTypeRow
// Dependencies: []
// Exports: default

// Module 8401 (ChannelTypeRow)
function ChannelTypeRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  let isBeta;
  let isPrivate;
  selected = selected.selected;
  const arg1 = selected;
  const channelType = selected.channelType;
  const importDefault = channelType;
  const dependencyMap = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  const tmp = callback4();
  let obj = arg1(dependencyMap[30]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (ChannelTypes.GUILD_TEXT === channelType) {
    obj = {};
    const intl9 = arg1(dependencyMap[26]).intl;
    obj.label = intl9.string(arg1(dependencyMap[26]).t.pnuRXC);
    const intl10 = arg1(dependencyMap[26]).intl;
    obj.description = intl10.string(arg1(dependencyMap[26]).t.oG6WsM);
    let tmp5 = obj;
  } else if (ChannelTypes.GUILD_VOICE === channelType) {
    obj = {};
    const intl7 = arg1(dependencyMap[26]).intl;
    obj.label = intl7.string(arg1(dependencyMap[26]).t.Sx55Oh);
    const intl8 = arg1(dependencyMap[26]).intl;
    obj.description = intl8.string(arg1(dependencyMap[26]).t.pqfkoF);
    tmp5 = obj;
  } else if (ChannelTypes.GUILD_FORUM === channelType) {
    const obj1 = {};
    const intl5 = arg1(dependencyMap[26]).intl;
    obj1.label = intl5.string(arg1(dependencyMap[26]).t.eAVID5);
    const intl6 = arg1(dependencyMap[26]).intl;
    obj1.description = intl6.string(arg1(dependencyMap[26]).t.iZ5pgg);
    tmp5 = obj1;
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === channelType) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[26]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[26]).t.qr9dEP);
    const intl4 = arg1(dependencyMap[26]).intl;
    obj2.description = intl4.string(arg1(dependencyMap[26]).t.gBkfzu);
    tmp5 = obj2;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === channelType) {
    const obj3 = {};
    const intl = arg1(dependencyMap[26]).intl;
    obj3.label = intl.string(arg1(dependencyMap[26]).t.pNWst0);
    const intl2 = arg1(dependencyMap[26]).intl;
    obj3.description = intl2.string(arg1(dependencyMap[26]).t.VPAwgo);
    tmp5 = obj3;
  } else if (ChannelTypes.GUILD_MEDIA === channelType) {
    const obj4 = {};
    const intl11 = arg1(dependencyMap[26]).intl;
    obj4.label = intl11.string(arg1(dependencyMap[26]).t.6x6fVg);
    const obj5 = {};
    const obj6 = {};
    const intl12 = arg1(dependencyMap[26]).intl;
    obj6.children = intl12.string(arg1(dependencyMap[26]).t.JyCrwS);
    const items = [callback2(arg1(dependencyMap[27]).Text, obj6), ];
    const obj7 = { variant: "text-xs/normal" };
    const intl13 = arg1(dependencyMap[26]).intl;
    const obj8 = {};
    let obj13 = importDefault(dependencyMap[29]);
    obj8.hcArticleUrl = obj13.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL);
    obj7.children = intl13.format(arg1(dependencyMap[26]).t.2Sapx1, obj8);
    items[1] = callback2(arg1(dependencyMap[28]).TextWithIOSLinkWorkaround, obj7);
    obj5.children = items;
    obj4.description = callback3(closure_22, obj5);
    tmp5 = obj4;
  }
  const label = tmp5.label;
  const obj9 = {
    onPress() {
      if (!selected) {
        onPress(channelType);
      }
    },
    accessibilityRole,
    accessibilityState
  };
  const obj10 = { style: tmp.flexRow, children: callback2(isPrivate ? obj8 : obj1[channelType].IconComponent, {}) };
  obj9.icon = callback2(closure_6, obj10);
  obj9.trailing = callback2(arg1(dependencyMap[32]).FormRadio, { selected });
  let tmp15 = label;
  if (true === isBeta) {
    const obj11 = { style: tmp.horizontalContainer };
    const obj12 = { text: label };
    const items1 = [callback2(arg1(dependencyMap[33]).FormLabel, obj12), ];
    obj13 = { size: arg1(dependencyMap[34]).BetaSizes.SMALL };
    items1[1] = callback2(arg1(dependencyMap[34]).BetaTag, obj13);
    obj11.children = items1;
    tmp15 = callback3(closure_6, obj11);
  }
  obj9.label = tmp15;
  obj9.subLabel = tmp5.description;
  return callback2(arg1(dependencyMap[31]).TableRow, obj9);
}
class CreateChannel {
  constructor(arg0) {
    categoryId = global.categoryId;
    arg1 = categoryId;
    ({ channelType, cloneChannelId: closure_1, createMode } = global);
    dependencyMap = createMode;
    guildId = global.guildId;
    onChannelCreated = global.onChannelCreated;
    importAll = onChannelCreated;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    f66856 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    updateName = function updateName(arg0, arg1) {
      let result = arg0;
      if (canResult1.has(arg1)) {
        result = categoryId(createMode[49]).sanitizeGuildTextChannelName(arg0);
        const obj = categoryId(createMode[49]);
      }
      closure_9(result);
    };
    handleTypeChange = function handleTypeChange(arg0) {
      guild(arg0);
      updateName(first, arg0);
    };
    tmp = closure_24();
    obj = arg1(dependencyMap[36]);
    items = [];
    items[0] = closure_11;
    stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
    obj2 = arg1(dependencyMap[36]);
    items1 = [];
    items1[0] = closure_10;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let channel = null;
      if (null != closure_1) {
        channel = first1.getChannel(closure_1);
      }
      return channel;
    });
    ScrollView = stateFromStores1;
    hasItem = null != stateFromStores;
    if (hasItem) {
      features = stateFromStores.features;
      tmp5 = closure_16;
      hasItem = features.has(closure_16.COMMUNITY);
    }
    canResult = closure_12.can(updateName.VIEW_CHANNEL, stateFromStores);
    closure_6 = canResult;
    canResult1 = closure_12.can(updateName.CONNECT, stateFromStores);
    closure_7 = canResult1;
    currentUser = f66856.getCurrentUser();
    tmp9 = importDefault(dependencyMap[37])(null != currentUser, "CreateChannel: user cannot be undefined");
    tmp10 = importDefault(dependencyMap[38])(stateFromStores1);
    str = "";
    tmp11 = importAll;
    if (null != tmp10) {
      str = tmp10;
    }
    tmp12 = guildId(importAll.useState(str), 2);
    first = tmp12[0];
    closure_8 = first;
    closure_9 = tmp12[1];
    tmp14 = importAll;
    if (null == channelType) {
      tmp15 = closure_15;
      channelType = closure_15.GUILD_TEXT;
    }
    tmp16 = guildId(importAll.useState(channelType), 2);
    first1 = tmp16[0];
    closure_10 = first1;
    closure_11 = tmp16[1];
    obj3 = arg1(dependencyMap[39]);
    canCreateStageChannelByGuild = obj3.useCanCreateStageChannelByGuild(guildId);
    obj4 = arg1(dependencyMap[40]);
    guildEligibleForMediaChannels = obj4.useGuildEligibleForMediaChannels(stateFromStores);
    obj5 = arg1(dependencyMap[41]);
    navigation = obj5.useNavigation();
    closure_12 = navigation;
    tmp21 = guildId(importDefault(dependencyMap[42])(onChannelCreated), 3);
    first2 = tmp21[0];
    closure_13 = first2;
    tmp23 = tmp21[1];
    tmp24 = tmp21[2];
    f66856 = tmp24;
    tmp25 = guildId(importAll.useState(false), 2);
    first3 = tmp25[0];
    closure_15 = first3;
    closure_16 = tmp25[1];
    effect = importAll.useEffect(() => {
      callback(createMode[43]).trackWithMetadata(constants.OPEN_MODAL, { type: "Create Channel" });
    }, []);
    items2 = [, , , , , , , , , , , , ];
    items2[0] = navigation;
    items2[1] = first1;
    items2[2] = stateFromStores1;
    items2[3] = canResult;
    items2[4] = canResult1;
    items2[5] = first3;
    items2[6] = first;
    items2[7] = first2;
    items2[8] = guildId;
    items2[9] = tmp24;
    items2[10] = categoryId;
    items2[11] = createMode;
    items2[12] = onChannelCreated;
    effect1 = importAll.useEffect(() => {
      const obj = {
        headerLeft: categoryId(createMode[44]).getHeaderCloseButton(callback(createMode[45]).close),
        headerRight() {
          if (closure_13) {
            let tmpResult = tmp(callback(closure_2[44]).HeaderSubmittingIndicator, {});
          } else {
            const obj = {};
            if (!constants) {
              if (closure_10 !== constants.GUILD_STAGE_VOICE) {
                const intl = callback(closure_2[26]).intl;
                let stringResult = intl.string(callback(closure_2[26]).t.CumH4u);
              }
              obj.text = stringResult;
              let tmp14 = "" === closure_8;
              if (!tmp14) {
                let tmp15 = constants;
                if (constants) {
                  tmp15 = !callback(closure_2[47]).canCreatePrivateChannel(closure_10, closure_6, closure_7);
                  const obj2 = callback(closure_2[47]);
                }
                tmp14 = tmp15;
              }
              obj.disabled = tmp14;
              obj.onPress = function onPress() {
                let obj = {};
                if (null != closure_5) {
                  let items = callback(closure_2[48]).values(closure_5.permissionOverwrites);
                  const obj2 = callback(closure_2[48]);
                } else {
                  items = [];
                }
                obj.overwrites = items;
                let bitrate;
                if (null != closure_5) {
                  bitrate = closure_5.bitrate;
                }
                obj.bitrate = bitrate;
                let userLimit;
                if (null != closure_5) {
                  userLimit = closure_5.userLimit;
                }
                obj.userLimit = userLimit;
                obj.createMode = closure_2;
                obj.guildId = closure_3;
                obj.name = closure_8;
                obj.channelType = closure_10;
                obj.categoryId = closure_0;
                obj.onChannelCreated = closure_4;
                if (constants) {
                  obj = { guildId: closure_3, channelType: closure_10, name: closure_8, categoryId: closure_0, onChannelCreated: closure_4 };
                  let arr = arr.push(constants2.ADD_MEMBERS, obj);
                } else if (closure_10 === constants.GUILD_STAGE_VOICE) {
                  arr = arr.push(constants2.ADD_MODERATORS, obj);
                } else {
                  callback2(obj);
                }
              };
              tmpResult = tmp(tmp4, obj);
            }
            const intl2 = callback(closure_2[26]).intl;
            stringResult = intl2.string(callback(closure_2[26]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: callback3(first1, stateFromStores1)
      };
      navigation.setOptions(obj);
    }, items2);
    obj = { keyboardShouldPersistTaps: "always" };
    obj1 = { padding: importDefault(dependencyMap[14]).space.PX_16, paddingBottom: importDefault(dependencyMap[14]).space.PX_16 + importDefault(dependencyMap[35])().insets.bottom };
    tmp29 = jsx;
    tmp30 = ScrollView;
    obj.contentContainerStyle = obj1;
    tmp31 = jsxs;
    obj2 = {};
    obj2.spacing = importDefault(dependencyMap[14]).space.PX_16;
    tmp32 = jsx;
    obj3 = {};
    if (first1 === closure_15.GUILD_CATEGORY) {
      tmp36 = arg1;
      tmp37 = dependencyMap;
      num2 = 26;
      intl2 = arg1(dependencyMap[26]).intl;
      stringResult = intl2.string(arg1(dependencyMap[26]).t.OCAkGP);
    } else {
      tmp33 = arg1;
      tmp34 = dependencyMap;
      num = 26;
      intl = arg1(dependencyMap[26]).intl;
      stringResult = intl.string(arg1(dependencyMap[26]).t.PVbHDl);
    }
    obj3.label = stringResult;
    name = tmp23.name;
    first4 = undefined;
    if (null != name) {
      first4 = name[0];
    }
    obj3.errorMessage = first4;
    if (first1 === closure_15.GUILD_FORUM) {
      tmp46 = arg1;
      tmp47 = dependencyMap;
      num4 = 26;
      intl4 = arg1(dependencyMap[26]).intl;
      stringResult1 = intl4.string(arg1(dependencyMap[26]).t.qBvLY4);
    } else if (null != stateFromStores1) {
      tmp40 = arg1;
      tmp41 = dependencyMap;
      num3 = 26;
      intl3 = arg1(dependencyMap[26]).intl;
      obj4 = {};
      obj11 = arg1(dependencyMap[38]);
      tmp42 = f66856;
      tmp43 = closure_13;
      flag = true;
      tmp44 = obj11;
      tmp45 = stateFromStores1;
      obj4.name = obj11.computeChannelName(stateFromStores1, f66856, closure_13, true);
      stringResult1 = intl3.format(arg1(dependencyMap[26]).t.s2ZzZZ, obj4);
    }
    obj3.description = stringResult1;
    tmp48 = jsx;
    obj5 = { "Null": null, "Null": null };
    obj5.value = first;
    obj5.onChange = function onChange(arg0) {
      if (first !== arg0) {
        updateName(arg0, first1);
      }
    };
    if (first1 === closure_15.GUILD_CATEGORY) {
      tmp54 = arg1;
      tmp55 = dependencyMap;
      num7 = 26;
      intl7 = arg1(dependencyMap[26]).intl;
      stringResult2 = intl7.string(arg1(dependencyMap[26]).t.eTVbtx);
    } else {
      tmp = closure_15;
      if (first1 === closure_15.GUILD_FORUM) {
        tmp52 = arg1;
        tmp53 = dependencyMap;
        num6 = 26;
        intl6 = arg1(dependencyMap[26]).intl;
        stringResult2 = intl6.string(arg1(dependencyMap[26]).t.5z1Xat);
      } else {
        tmp49 = arg1;
        tmp50 = dependencyMap;
        num5 = 26;
        intl5 = arg1(dependencyMap[26]).intl;
        stringResult2 = intl5.string(arg1(dependencyMap[26]).t.bw/b8E);
      }
    }
    obj5.placeholder = stringResult2;
    obj3.children = tmp48(arg1(dependencyMap[52]).TextField, obj5);
    items3 = [, , ];
    items3[0] = tmp32(arg1(dependencyMap[51]).Input, obj3);
    tmp57Result = null;
    if (null == stateFromStores1) {
      obj6 = {};
      tmp59 = closure_15;
      tmpResult = null;
      tmp57 = jsxs;
      tmp58 = Fragment;
      if (first1 !== closure_15.GUILD_CATEGORY) {
        tmp = arg1;
        tmp = dependencyMap;
        num18 = 53;
        tmp = jsxs;
        obj7 = {};
        num19 = 26;
        intl12 = arg1(dependencyMap[26]).intl;
        obj7.title = intl12.string(arg1(dependencyMap[26]).t.7ZcXG2);
        obj7.hasIcons = true;
        tmp = jsx;
        tmp = ChannelTypeRow;
        obj8 = {};
        tmp = closure_15;
        obj8.channelType = closure_15.GUILD_TEXT;
        tmp = closure_15;
        obj8.selected = first1 === closure_15.GUILD_TEXT;
        obj8.isPrivate = first3;
        obj8.onPress = handleTypeChange;
        items4 = [, , , , , ];
        items4[0] = jsx(ChannelTypeRow, obj8);
        tmp = jsx;
        obj9 = {};
        tmp = closure_15;
        obj9.channelType = closure_15.GUILD_VOICE;
        tmp = closure_15;
        obj9.selected = first1 === closure_15.GUILD_VOICE;
        obj9.isPrivate = first3;
        obj9.onPress = handleTypeChange;
        items4[1] = jsx(ChannelTypeRow, obj9);
        tmp = jsx;
        obj10 = {};
        tmp = closure_15;
        obj10.channelType = closure_15.GUILD_FORUM;
        tmp = closure_15;
        obj10.selected = first1 === closure_15.GUILD_FORUM;
        obj10.isPrivate = first3;
        obj10.onPress = handleTypeChange;
        items4[2] = jsx(ChannelTypeRow, obj10);
        tmp65 = null;
        if (guildEligibleForMediaChannels) {
          tmp61 = jsx;
          tmp62 = ChannelTypeRow;
          obj11 = {};
          tmp63 = closure_15;
          obj11.channelType = closure_15.GUILD_MEDIA;
          tmp64 = closure_15;
          obj11.selected = first1 === closure_15.GUILD_MEDIA;
          obj11.isPrivate = first3;
          obj11.isBeta = true;
          obj11.onPress = handleTypeChange;
          tmp65 = jsx(ChannelTypeRow, obj11);
        }
        items4[3] = tmp65;
        tmp66 = null;
        if (hasItem) {
          tmp67 = arg1;
          tmp68 = dependencyMap;
          tmp66 = null;
          if (createMode !== arg1(dependencyMap[42]).CreateChannelMode.PREMIUM_CHANNEL) {
            tmp69 = jsx;
            tmp70 = ChannelTypeRow;
            obj12 = {};
            tmp71 = closure_15;
            obj12.channelType = closure_15.GUILD_ANNOUNCEMENT;
            tmp72 = closure_15;
            obj12.selected = first1 === closure_15.GUILD_ANNOUNCEMENT;
            obj12.isPrivate = first3;
            obj12.onPress = handleTypeChange;
            tmp66 = jsx(ChannelTypeRow, obj12);
          }
        }
        items4[4] = tmp66;
        tmp73 = null;
        if (canCreateStageChannelByGuild) {
          tmp73 = null;
          if (!first3) {
            tmp74 = jsx;
            tmp75 = ChannelTypeRow;
            obj13 = {};
            tmp76 = closure_15;
            obj13.channelType = closure_15.GUILD_STAGE_VOICE;
            tmp77 = closure_15;
            obj13.selected = first1 === closure_15.GUILD_STAGE_VOICE;
            obj13.isPrivate = first3;
            obj13.onPress = handleTypeChange;
            tmp73 = jsx(ChannelTypeRow, obj13);
          }
        }
        items4[5] = tmp73;
        obj7.children = items4;
        tmpResult = tmp(arg1(dependencyMap[53]).TableRowGroup, obj7);
      }
      items5 = [, , ];
      items5[0] = tmpResult;
      tmp78 = jsx;
      tmp79 = importDefault;
      tmp80 = dependencyMap;
      num8 = 54;
      obj14 = {};
      obj14.guildId = guildId;
      obj14.channelType = first1;
      items5[1] = jsx(importDefault(dependencyMap[54]), obj14);
      tmp81 = closure_15;
      tmpResult1 = null;
      if (first1 !== closure_15.GUILD_STAGE_VOICE) {
        tmp = arg1;
        tmp = dependencyMap;
        tmpResult1 = null;
        if (createMode !== arg1(dependencyMap[42]).CreateChannelMode.PREMIUM_CHANNEL) {
          obj15 = {};
          tmp = arg1;
          tmp = dependencyMap;
          num20 = 53;
          tmp = jsxs;
          tmp = Fragment;
          tmp = jsx;
          obj16 = {};
          tmp = closure_15;
          if (first1 === closure_15.GUILD_CATEGORY) {
            tmp88 = arg1;
            tmp89 = dependencyMap;
            num10 = 26;
            intl9 = arg1(dependencyMap[26]).intl;
            stringResult3 = intl9.string(arg1(dependencyMap[26]).t.RQUk61);
          } else {
            tmp83 = closure_8;
            tmp85 = arg1;
            tmp86 = dependencyMap;
            num9 = 26;
            tmp84 = closure_8(first1);
            intl8 = arg1(dependencyMap[26]).intl;
            string = intl8.string;
            t = arg1(dependencyMap[26]).t;
            if (tmp84) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          obj16.description = stringResult3;
          obj16.hasIcons = true;
          tmp91 = arg1;
          tmp92 = dependencyMap;
          num11 = 55;
          tmp90 = jsx;
          obj17 = {};
          tmp93 = closure_15;
          if (first1 === closure_15.GUILD_CATEGORY) {
            tmp97 = arg1;
            tmp98 = dependencyMap;
            num13 = 26;
            intl11 = arg1(dependencyMap[26]).intl;
            stringResult4 = intl11.string(arg1(dependencyMap[26]).t.lEPAZ5);
          } else {
            tmp94 = arg1;
            tmp95 = dependencyMap;
            num12 = 26;
            intl10 = arg1(dependencyMap[26]).intl;
            stringResult4 = intl10.string(arg1(dependencyMap[26]).t.aUI70g);
          }
          obj17.label = stringResult4;
          tmp99 = jsx;
          tmp = arg1;
          tmp = dependencyMap;
          num14 = 56;
          obj17.icon = jsx(arg1(dependencyMap[56]).LockIcon, {});
          obj17.value = first3;
          obj17.onValueChange = function onValueChange(arg0) {
            callback2(arg0);
          };
          obj16.children = tmp90(arg1(dependencyMap[55]).TableSwitchRow, obj17);
          items6 = [, ];
          items6[0] = tmp(arg1(dependencyMap[53]).TableRowGroup, obj16);
          tmp = null;
          if (first3) {
            tmp = arg1;
            tmp = dependencyMap;
            num15 = 47;
            obj19 = arg1(dependencyMap[47]);
            tmp = null;
            if (!obj19.canCreatePrivateChannel(first1, canResult, canResult1)) {
              tmp = jsx;
              tmp = closure_6;
              obj18 = {};
              obj18.style = tmp.errorMessage;
              tmp = jsx;
              tmp = arg1;
              tmp = dependencyMap;
              num16 = 34;
              obj19 = {};
              obj19.messageType = arg1(dependencyMap[34]).HelpMessageTypes.ERROR;
              obj22 = arg1(dependencyMap[47]);
              obj19.children = obj22.getPrivateChannelHintText(first1);
              obj18.children = jsx(arg1(dependencyMap[34]).HelpMessage, obj19);
              tmp = jsx(closure_6, obj18);
            }
          }
          items6[1] = tmp;
          obj15.children = items6;
          tmpResult1 = tmp(tmp, obj15);
        }
      }
      items5[2] = tmpResult1;
      obj6.children = items5;
      tmp57Result = tmp57(tmp58, obj6);
    }
    items3[1] = tmp57Result;
    tmp = null;
    if (null != tmp23.message) {
      tmp = jsx;
      tmp = closure_6;
      obj20 = {};
      obj20.style = tmp.errorMessage;
      tmp = jsx;
      tmp = arg1;
      tmp = dependencyMap;
      num17 = 34;
      obj21 = {};
      obj21.messageType = arg1(dependencyMap[34]).HelpMessageTypes.ERROR;
      obj21.children = tmp23.message;
      obj20.children = jsx(arg1(dependencyMap[34]).HelpMessage, obj21);
      tmp = jsx(closure_6, obj20);
    }
    items3[2] = tmp;
    obj2.children = items3;
    obj.children = tmp31(arg1(dependencyMap[50]).Stack, obj2);
    return tmp29(tmp30, obj);
  }
}
function AddMembers(guildId) {
  const arg1 = guildId;
  const tmp = callback4();
  const importDefault = React.useRef(guildId);
  let obj = arg1(dependencyMap[41]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const guild = guild.getGuild(guildId.guildId);
  importDefault(dependencyMap[37])(null != guild, "Guild must not be null");
  const currentUser = authStore.getCurrentUser();
  let callback = currentUser;
  importDefault(dependencyMap[37])(null != currentUser, "AddMembers: user cannot be undefined");
  const canResult = closure_12.can(constants2.ADMINISTRATOR, guild);
  const React = canResult;
  const tmp8 = isGuildOwner(guild, currentUser);
  const tmp9 = callback(React.useState({}), 2);
  const first = tmp9[0];
  const tmp11 = callback(importDefault(dependencyMap[42])(guildId.onChannelCreated), 3);
  const first1 = tmp11[0];
  const tmp14 = tmp11[2];
  const effect = React.useEffect(() => {
    closure_1.current = arg0;
  });
  const items = [canResult, tmp8, navigation, tmp14, first, currentUser.id];
  callback = React.useCallback(() => {
    let categoryId;
    let channelType;
    let flags;
    let guildId;
    let name;
    let onChannelCreated;
    const current = result.current;
    ({ guildId, channelType } = current);
    const arg0 = channelType;
    ({ name, categoryId, onChannelCreated, flags } = current);
    let obj = arg0(navigation[49]);
    const result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === constants.ROLE) {
          result.push(channelType(closure_2[49]).permissionOverwriteForRole(row.id, channelType));
          const obj = channelType(closure_2[49]);
        } else if (row.rowType === constants.MEMBER) {
          result.push(channelType(closure_2[49]).permissionOverwriteForUser(row.id, channelType));
          const obj2 = channelType(closure_2[49]);
        }
      }
    });
    let tmp2 = canResult;
    if (!canResult) {
      tmp2 = tmp8;
    }
    if (!tmp2) {
      result.push(arg0(navigation[49]).permissionOverwriteForUser(currentUser.id, channelType));
      const obj2 = arg0(navigation[49]);
    }
    obj = { overwrites: result, guildId, channelType, name, categoryId, flags };
    if (channelType === constants.GUILD_STAGE_VOICE) {
      obj = {};
      const merged = Object.assign(obj);
      obj["guildId"] = guildId;
      obj["onChannelCreated"] = onChannelCreated;
      navigation.push(constants2.ADD_MODERATORS, obj);
    } else {
      const tmp8 = tmp14(obj);
    }
  }, items);
  const isGuildOwner = callback;
  const items1 = [navigation, first, first1, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    const intl = arg0(navigation[26]).intl;
    let arg0 = intl.string(arg0(navigation[26]).t.5Wxrcd);
    if (Object.keys(first).length <= 0) {
      const obj = { headerRight: first1 ? () => callback(stringResult(closure_2[44]).HeaderSubmittingIndicator, {}) : () => callback(stringResult(closure_2[46]).HeaderActionButton, { text: stringResult, onPress: closure_9 }) };
      navigation.setOptions(obj);
    } else {
      if (ref.current.channelType === constants.GUILD_STAGE_VOICE) {
        const intl3 = arg0(navigation[26]).intl;
        let stringResult = intl3.string(arg0(navigation[26]).t.PDTjLN);
      } else {
        const intl2 = arg0(navigation[26]).intl;
        stringResult = intl2.string(arg0(navigation[26]).t.CumH4u);
      }
      arg0 = stringResult;
    }
  }, items1);
  obj = { style: tmp.addMembersContainer };
  let tmp20 = null;
  if (null != tmp11[1].message) {
    tmp20 = null;
    if ("" !== tmp13.message) {
      obj = { style: tmp.errorMessage };
      const obj1 = { messageType: arg1(dependencyMap[34]).HelpMessageTypes.ERROR, children: tmp13.message };
      obj.children = callback2(arg1(dependencyMap[34]).HelpMessage, obj1);
      tmp20 = callback2(first, obj);
    }
  }
  const items2 = [tmp20, callback2(arg1(dependencyMap[57]).AddMembersBody, { channel: null, guild, pendingAdditions: first, setPendingAdditions: tmp9[1] })];
  obj.children = items2;
  return closure_23(first, obj);
}
function getSceneTitle(arg0, arg1) {
  if (null != arg1) {
    const intl3 = arg1(dependencyMap[26]).intl;
    return intl3.string(arg1(dependencyMap[26]).t.dEaPc4);
  } else {
    if (null !== arg0) {
      if (ChannelTypes.GUILD_TEXT !== arg0) {
        if (ChannelTypes.GUILD_VOICE !== arg0) {
          if (ChannelTypes.GUILD_STAGE_VOICE !== arg0) {
            if (ChannelTypes.GUILD_ANNOUNCEMENT !== arg0) {
              if (ChannelTypes.GUILD_FORUM !== arg0) {
                if (ChannelTypes.GUILD_MEDIA !== arg0) {
                  if (ChannelTypes.GUILD_CATEGORY === arg0) {
                    const intl = arg1(dependencyMap[26]).intl;
                    return intl.string(arg1(dependencyMap[26]).t.ISN+NM);
                  } else {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const error = new Error("Unsupported channelType: " + arg0);
                    throw error;
                  }
                }
              }
            }
          }
        }
      }
    }
    const intl2 = arg1(dependencyMap[26]).intl;
    return intl2.string(arg1(dependencyMap[26]).t.fUYU+j);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: closure_7, isGuildVocalChannelType: closure_8 } = arg1(dependencyMap[3]));
const isGuildOwner = arg1(dependencyMap[4]).isGuildOwner;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
const tmp4 = arg1(dependencyMap[10]);
const ChannelTypes = tmp4.ChannelTypes;
({ GuildFeatures: closure_16, Permissions: closure_17, AnalyticEvents: closure_18, HelpdeskArticles: closure_19 } = tmp4);
const RowType = arg1(dependencyMap[11]).RowType;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = arg1(dependencyMap[12]));
let obj = arg1(dependencyMap[13]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.addMembersContainer = obj;
obj.errorMessage = { marginBottom: 0 };
obj.flexRow = {};
obj.horizontalContainer = {};
let closure_24 = obj.createStyles(obj);
const obj1 = {};
const tmp5 = arg1(dependencyMap[12]);
obj1[ChannelTypes.GUILD_TEXT] = { IconComponent: arg1(dependencyMap[15]).TextIcon };
const obj2 = { IconComponent: arg1(dependencyMap[15]).TextIcon };
obj1[ChannelTypes.GUILD_FORUM] = { IconComponent: arg1(dependencyMap[16]).ForumIcon };
const obj3 = { IconComponent: arg1(dependencyMap[16]).ForumIcon };
obj1[ChannelTypes.GUILD_VOICE] = { IconComponent: arg1(dependencyMap[17]).VoiceNormalIcon };
const obj4 = { IconComponent: arg1(dependencyMap[17]).VoiceNormalIcon };
obj1[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: arg1(dependencyMap[18]).StageIcon };
const obj5 = { IconComponent: arg1(dependencyMap[18]).StageIcon };
obj1[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: arg1(dependencyMap[19]).AnnouncementsIcon };
const obj6 = { IconComponent: arg1(dependencyMap[19]).AnnouncementsIcon };
obj1[ChannelTypes.GUILD_MEDIA] = { IconComponent: arg1(dependencyMap[20]).ImageIcon };
const obj8 = {};
const obj7 = { IconComponent: arg1(dependencyMap[20]).ImageIcon };
obj8[ChannelTypes.GUILD_TEXT] = { IconComponent: arg1(dependencyMap[21]).TextLockIcon };
const obj9 = { IconComponent: arg1(dependencyMap[21]).TextLockIcon };
obj8[ChannelTypes.GUILD_FORUM] = { IconComponent: arg1(dependencyMap[22]).ForumLockIcon };
const obj10 = { IconComponent: arg1(dependencyMap[22]).ForumLockIcon };
obj8[ChannelTypes.GUILD_VOICE] = { IconComponent: arg1(dependencyMap[23]).VoiceLockIcon };
const obj11 = { IconComponent: arg1(dependencyMap[23]).VoiceLockIcon };
obj8[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: arg1(dependencyMap[24]).StageLockIcon };
const obj12 = { IconComponent: arg1(dependencyMap[24]).StageLockIcon };
obj8[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: arg1(dependencyMap[25]).AnnouncementsLockIcon };
const obj13 = { IconComponent: arg1(dependencyMap[25]).AnnouncementsLockIcon };
obj8[ChannelTypes.GUILD_MEDIA] = { IconComponent: arg1(dependencyMap[20]).ImageIcon };
let closure_27 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
const obj14 = { IconComponent: arg1(dependencyMap[20]).ImageIcon };
const result = arg1(dependencyMap[62]).fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  let initialStack;
  let screens;
  const arg1 = arg0;
  ({ screens, initialStack } = importDefault(dependencyMap[60])(() => {
    let obj = { name: constants.CREATE_CHANNEL };
    obj = {};
    const merged = Object.assign(arg0);
    obj.params = obj;
    const items = [obj];
    obj = {};
    const obj1 = {};
    const obj2 = {
      impressionName: arg0(closure_2[58]).ImpressionNames.CHANNEL_ADD_INFO,
      impressionProperties: { impression_group: arg0(closure_2[58]).ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(closure_29, {});
      }
    };
    obj1[constants.CREATE_CHANNEL] = obj2;
    const obj4 = {};
    const intl = arg0(closure_2[26]).intl;
    obj4.headerTitle = intl.string(arg0(closure_2[26]).t.dMJ3Y6);
    obj4.impressionName = arg0(closure_2[58]).ImpressionNames.CHANNEL_ADD_MEMBERS;
    const obj3 = { impression_group: arg0(closure_2[58]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4.impressionProperties = { impression_group: arg0(closure_2[58]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(closure_30, {});
    };
    obj1[constants.ADD_MEMBERS] = obj4;
    const obj6 = {};
    const intl2 = arg0(closure_2[26]).intl;
    obj6.headerTitle = intl2.string(arg0(closure_2[26]).t.n3bcy8);
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[59]), {});
    };
    obj1[constants.ADD_MODERATORS] = obj6;
    obj.screens = obj1;
    obj.initialStack = items;
    return obj;
  }));
  return callback2(arg1(dependencyMap[61]).Navigator, { screens, initialRouteStack });
};
export { CreateChannel };
