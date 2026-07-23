// Module ID: 8408
// Function ID: 66910
// Name: ChannelTypeRow
// Dependencies: [57, 31, 27, 1352, 1391, 1348, 1838, 3758, 3767, 1849, 653, 7485, 33, 4130, 689, 4638, 4645, 4658, 4654, 4651, 4644, 4636, 4643, 4655, 4653, 4650, 1212, 4126, 5459, 1920, 3848, 5165, 7520, 7495, 1273, 5160, 566, 44, 4320, 4948, 8409, 1456, 8410, 4324, 5087, 8412, 5788, 8413, 22, 4312, 4541, 7505, 5773, 5503, 8416, 5504, 4652, 8420, 480, 8434, 5450, 5519, 2]
// Exports: default

// Module 8408 (ChannelTypeRow)
import _toPropertyKey from "_toPropertyKey";
import TableRowInner from "TableRowInner";
import get_ActivityIndicator from "Text";
import _callSuper from "_callSuper";
import { isGuildOwner } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { RowType } from "RowType";
import jsxProd from "Form";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_23;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ChannelTypeRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  let isBeta;
  let isPrivate;
  selected = selected.selected;
  const channelType = selected.channelType;
  const onPress = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = selected(onPress[30]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (ChannelTypes.GUILD_TEXT === channelType) {
    obj = {};
    const intl9 = selected(onPress[26]).intl;
    obj.label = intl9.string(selected(onPress[26]).t.pnuRXC);
    const intl10 = selected(onPress[26]).intl;
    obj.description = intl10.string(selected(onPress[26]).t.oG6WsM);
    let tmp5 = obj;
  } else if (ChannelTypes.GUILD_VOICE === channelType) {
    obj = {};
    const intl7 = selected(onPress[26]).intl;
    obj.label = intl7.string(selected(onPress[26]).t.Sx55Oh);
    const intl8 = selected(onPress[26]).intl;
    obj.description = intl8.string(selected(onPress[26]).t.pqfkoF);
    tmp5 = obj;
  } else if (ChannelTypes.GUILD_FORUM === channelType) {
    const obj1 = {};
    const intl5 = selected(onPress[26]).intl;
    obj1.label = intl5.string(selected(onPress[26]).t.eAVID5);
    const intl6 = selected(onPress[26]).intl;
    obj1.description = intl6.string(selected(onPress[26]).t.iZ5pgg);
    tmp5 = obj1;
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === channelType) {
    const obj2 = {};
    const intl3 = selected(onPress[26]).intl;
    obj2.label = intl3.string(selected(onPress[26]).t.qr9dEP);
    const intl4 = selected(onPress[26]).intl;
    obj2.description = intl4.string(selected(onPress[26]).t.gBkfzu);
    tmp5 = obj2;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === channelType) {
    const obj3 = {};
    const intl = selected(onPress[26]).intl;
    obj3.label = intl.string(selected(onPress[26]).t.pNWst0);
    const intl2 = selected(onPress[26]).intl;
    obj3.description = intl2.string(selected(onPress[26]).t.VPAwgo);
    tmp5 = obj3;
  } else if (ChannelTypes.GUILD_MEDIA === channelType) {
    const obj4 = {};
    const intl11 = selected(onPress[26]).intl;
    obj4.label = intl11.string(selected(onPress[26]).t["6x6fVg"]);
    const obj5 = {};
    const obj6 = { variant: "text-xs/normal", color: "text-muted" };
    const intl12 = selected(onPress[26]).intl;
    obj6.children = intl12.string(selected(onPress[26]).t.JyCrwS);
    const items = [callback(selected(onPress[27]).Text, obj6), ];
    const obj7 = { variant: "text-xs/normal" };
    const intl13 = selected(onPress[26]).intl;
    const obj8 = {};
    let obj13 = channelType(onPress[29]);
    obj8.hcArticleUrl = obj13.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL);
    obj7.children = intl13.format(selected(onPress[26]).t["2Sapx1"], obj8);
    items[1] = callback(selected(onPress[28]).TextWithIOSLinkWorkaround, obj7);
    obj5.children = items;
    obj4.description = callback2(closure_22, obj5);
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
  const obj10 = { style: tmp.flexRow, children: callback(isPrivate ? obj8 : obj1[channelType].IconComponent, {}) };
  obj9.icon = callback(closure_6, obj10);
  obj9.trailing = callback(selected(onPress[32]).FormRadio, { selected });
  let tmp15 = label;
  if (true === isBeta) {
    const obj11 = { style: tmp.horizontalContainer };
    const obj12 = { text: label };
    const items1 = [callback(selected(onPress[33]).FormLabel, obj12), ];
    obj13 = { size: selected(onPress[34]).BetaSizes.SMALL };
    items1[1] = callback(selected(onPress[34]).BetaTag, obj13);
    obj11.children = items1;
    tmp15 = callback2(closure_6, obj11);
  }
  obj9.label = tmp15;
  obj9.subLabel = tmp5.description;
  return callback(selected(onPress[31]).TableRow, obj9);
}
class CreateChannel {
  constructor(arg0) {
    categoryId = global.categoryId;
    ({ channelType, cloneChannelId, createMode } = global);
    guildId = global.guildId;
    onChannelCreated = global.onChannelCreated;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    useState = undefined;
    c12 = undefined;
    c13 = undefined;
    f66916 = undefined;
    c15 = undefined;
    c16 = undefined;
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
    tmp = c24();
    obj = require("initialize");
    items = [];
    items[0] = useState;
    stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c10;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let channel = null;
      if (null != closure_1) {
        channel = first1.getChannel(closure_1);
      }
      return channel;
    });
    useStateFromStores = stateFromStores1;
    hasItem = null != stateFromStores;
    if (hasItem) {
      features = stateFromStores.features;
      tmp5 = c16;
      hasItem = features.has(c16.COMMUNITY);
    }
    canResult = c12.can(updateName.VIEW_CHANNEL, stateFromStores);
    c6 = canResult;
    canResult1 = c12.can(updateName.CONNECT, stateFromStores);
    c7 = canResult1;
    currentUser = f66916.getCurrentUser();
    tmp9 = require("invariant")(null != currentUser, "CreateChannel: user cannot be undefined");
    tmp10 = require("computeDefaultGroupDmNameFromUserIds")(stateFromStores1);
    str = "";
    tmp11 = onChannelCreated;
    if (null != tmp10) {
      str = tmp10;
    }
    tmp12 = guildId(onChannelCreated.useState(str), 2);
    first = tmp12[0];
    c8 = first;
    c9 = tmp12[1];
    tmp14 = onChannelCreated;
    if (null == channelType) {
      tmp15 = c15;
      channelType = c15.GUILD_TEXT;
    }
    tmp16 = guildId(onChannelCreated.useState(channelType), 2);
    first1 = tmp16[0];
    c10 = first1;
    useState = tmp16[1];
    obj3 = require("createOrUpdateModeratorOverwrite");
    canCreateStageChannelByGuild = obj3.useCanCreateStageChannelByGuild(guildId);
    obj4 = require("useGuildEligibleForMediaChannels");
    guildEligibleForMediaChannels = obj4.useGuildEligibleForMediaChannels(stateFromStores);
    obj5 = require("useNavigation");
    navigation = obj5.useNavigation();
    c12 = navigation;
    tmp21 = guildId(require("useCreateChannelSubmit")(onChannelCreated), 3);
    first2 = tmp21[0];
    c13 = first2;
    tmp23 = tmp21[1];
    tmp24 = tmp21[2];
    f66916 = tmp24;
    tmp25 = guildId(onChannelCreated.useState(false), 2);
    first3 = tmp25[0];
    c15 = first3;
    c16 = tmp25[1];
    effect = onChannelCreated.useEffect(() => {
      outer1_1(createMode[43]).trackWithMetadata(outer1_18.OPEN_MODAL, { type: "Create Channel" });
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
    effect1 = onChannelCreated.useEffect(() => {
      let obj = {
        headerLeft: categoryId(createMode[44]).getHeaderCloseButton(outer1_1(createMode[45]).close),
        headerRight() {
          if (outer1_13) {
            let tmpResult = tmp(categoryId(createMode[44]).HeaderSubmittingIndicator, {});
          } else {
            let obj = {};
            if (!outer1_15) {
              if (outer1_10 !== first3.GUILD_STAGE_VOICE) {
                const intl = categoryId(createMode[26]).intl;
                let stringResult = intl.string(categoryId(createMode[26]).t.CumH4u);
              }
              obj.text = stringResult;
              let tmp14 = "" === outer1_8;
              if (!tmp14) {
                let tmp15 = outer1_15;
                if (outer1_15) {
                  tmp15 = !categoryId(createMode[47]).canCreatePrivateChannel(outer1_10, outer1_6, outer1_7);
                  let obj2 = categoryId(createMode[47]);
                }
                tmp14 = tmp15;
              }
              obj.disabled = tmp14;
              obj.onPress = function onPress() {
                let obj = {};
                if (null != outer2_5) {
                  let items = outer3_1(createMode[48]).values(outer2_5.permissionOverwrites);
                  const obj2 = outer3_1(createMode[48]);
                } else {
                  items = [];
                }
                obj.overwrites = items;
                let bitrate;
                if (null != outer2_5) {
                  bitrate = outer2_5.bitrate;
                }
                obj.bitrate = bitrate;
                let userLimit;
                if (null != outer2_5) {
                  userLimit = outer2_5.userLimit;
                }
                obj.userLimit = userLimit;
                obj.createMode = outer2_2;
                obj.guildId = outer2_3;
                obj.name = outer2_8;
                obj.channelType = outer2_10;
                obj.categoryId = outer2_0;
                obj.onChannelCreated = outer2_4;
                if (outer2_15) {
                  obj = { guildId: outer2_3, channelType: outer2_10, name: outer2_8, categoryId: outer2_0, onChannelCreated: outer2_4 };
                  outer2_12.push(outer3_27.ADD_MEMBERS, obj);
                } else if (outer2_10 === first3.GUILD_STAGE_VOICE) {
                  outer2_12.push(outer3_27.ADD_MODERATORS, obj);
                } else {
                  outer2_14(obj);
                }
              };
              tmpResult = tmp(tmp4, obj);
            }
            const intl2 = categoryId(createMode[26]).intl;
            stringResult = intl2.string(categoryId(createMode[26]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: outer1_31(first1, stateFromStores1)
      };
      navigation.setOptions(obj);
    }, items2);
    obj = { keyboardShouldPersistTaps: "always" };
    obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 + require("useSafeAreaInsetsKeyboardAware")().insets.bottom };
    tmp29 = jsx;
    tmp30 = useStateFromStores;
    obj.contentContainerStyle = obj1;
    tmp31 = jsxs;
    obj2 = {};
    obj2.spacing = require("_createForOfIteratorHelperLoose").space.PX_16;
    tmp32 = jsx;
    obj3 = {};
    if (first1 === c15.GUILD_CATEGORY) {
      tmp36 = categoryId;
      tmp37 = createMode;
      num2 = 26;
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t.OCAkGP);
    } else {
      tmp33 = categoryId;
      tmp34 = createMode;
      num = 26;
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t.PVbHDl);
    }
    obj3.label = stringResult;
    name = tmp23.name;
    first4 = undefined;
    if (null != name) {
      first4 = name[0];
    }
    obj3.errorMessage = first4;
    if (first1 === c15.GUILD_FORUM) {
      tmp46 = categoryId;
      tmp47 = createMode;
      num4 = 26;
      intl4 = require("getSystemLocale").intl;
      stringResult1 = intl4.string(require("getSystemLocale").t.qBvLY4);
    } else if (null != stateFromStores1) {
      tmp40 = categoryId;
      tmp41 = createMode;
      num3 = 26;
      intl3 = require("getSystemLocale").intl;
      obj4 = {};
      obj11 = require("computeDefaultGroupDmNameFromUserIds");
      tmp42 = f66916;
      tmp43 = c13;
      flag = true;
      tmp44 = obj11;
      tmp45 = stateFromStores1;
      obj4.name = obj11.computeChannelName(stateFromStores1, f66916, c13, true);
      stringResult1 = intl3.format(require("getSystemLocale").t.s2ZzZZ, obj4);
    }
    obj3.description = stringResult1;
    tmp48 = jsx;
    obj5 = { autoFocus: true, enableAndroidSanitizedInputWorkaround: true };
    obj5.value = first;
    obj5.onChange = function onChange(arg0) {
      if (first !== arg0) {
        updateName(arg0, first1);
      }
    };
    if (first1 === c15.GUILD_CATEGORY) {
      tmp54 = categoryId;
      tmp55 = createMode;
      num7 = 26;
      intl7 = require("getSystemLocale").intl;
      stringResult2 = intl7.string(require("getSystemLocale").t.eTVbtx);
    } else {
      tmp = c15;
      if (first1 === c15.GUILD_FORUM) {
        tmp52 = categoryId;
        tmp53 = createMode;
        num6 = 26;
        intl6 = require("getSystemLocale").intl;
        stringResult2 = intl6.string(require("getSystemLocale").t["5z1Xat"]);
      } else {
        tmp49 = categoryId;
        tmp50 = createMode;
        num5 = 26;
        intl5 = require("getSystemLocale").intl;
        stringResult2 = intl5.string(require("getSystemLocale").t["bw/b8E"]);
      }
    }
    obj5.placeholder = stringResult2;
    obj3.children = tmp48(require("TextField").TextField, obj5);
    items3 = [, , ];
    items3[0] = tmp32(require("Input").Input, obj3);
    tmp57Result = null;
    if (null == stateFromStores1) {
      obj6 = {};
      tmp59 = c15;
      tmpResult = null;
      tmp57 = jsxs;
      tmp58 = Fragment;
      if (first1 !== c15.GUILD_CATEGORY) {
        tmp = categoryId;
        tmp = createMode;
        num18 = 53;
        tmp = jsxs;
        obj7 = {};
        num19 = 26;
        intl12 = require("getSystemLocale").intl;
        obj7.title = intl12.string(require("getSystemLocale").t["7ZcXG2"]);
        obj7.hasIcons = true;
        tmp = jsx;
        tmp = ChannelTypeRow;
        obj8 = {};
        tmp = c15;
        obj8.channelType = c15.GUILD_TEXT;
        tmp = c15;
        obj8.selected = first1 === c15.GUILD_TEXT;
        obj8.isPrivate = first3;
        obj8.onPress = handleTypeChange;
        items4 = [, , , , , ];
        items4[0] = jsx(ChannelTypeRow, obj8);
        tmp = jsx;
        obj9 = {};
        tmp = c15;
        obj9.channelType = c15.GUILD_VOICE;
        tmp = c15;
        obj9.selected = first1 === c15.GUILD_VOICE;
        obj9.isPrivate = first3;
        obj9.onPress = handleTypeChange;
        items4[1] = jsx(ChannelTypeRow, obj9);
        tmp = jsx;
        obj10 = {};
        tmp = c15;
        obj10.channelType = c15.GUILD_FORUM;
        tmp = c15;
        obj10.selected = first1 === c15.GUILD_FORUM;
        obj10.isPrivate = first3;
        obj10.onPress = handleTypeChange;
        items4[2] = jsx(ChannelTypeRow, obj10);
        tmp65 = null;
        if (guildEligibleForMediaChannels) {
          tmp61 = jsx;
          tmp62 = ChannelTypeRow;
          obj11 = {};
          tmp63 = c15;
          obj11.channelType = c15.GUILD_MEDIA;
          tmp64 = c15;
          obj11.selected = first1 === c15.GUILD_MEDIA;
          obj11.isPrivate = first3;
          obj11.isBeta = true;
          obj11.onPress = handleTypeChange;
          tmp65 = jsx(ChannelTypeRow, obj11);
        }
        items4[3] = tmp65;
        tmp66 = null;
        if (hasItem) {
          tmp67 = categoryId;
          tmp68 = createMode;
          tmp66 = null;
          if (createMode !== require("useCreateChannelSubmit").CreateChannelMode.PREMIUM_CHANNEL) {
            tmp69 = jsx;
            tmp70 = ChannelTypeRow;
            obj12 = {};
            tmp71 = c15;
            obj12.channelType = c15.GUILD_ANNOUNCEMENT;
            tmp72 = c15;
            obj12.selected = first1 === c15.GUILD_ANNOUNCEMENT;
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
            tmp76 = c15;
            obj13.channelType = c15.GUILD_STAGE_VOICE;
            tmp77 = c15;
            obj13.selected = first1 === c15.GUILD_STAGE_VOICE;
            obj13.isPrivate = first3;
            obj13.onPress = handleTypeChange;
            tmp73 = jsx(ChannelTypeRow, obj13);
          }
        }
        items4[5] = tmp73;
        obj7.children = items4;
        tmpResult = tmp(require("TableRowGroupTitle").TableRowGroup, obj7);
      }
      items5 = [, , ];
      items5[0] = tmpResult;
      tmp78 = jsx;
      tmp79 = cloneChannelId;
      tmp80 = createMode;
      num8 = 54;
      obj14 = {};
      obj14.guildId = guildId;
      obj14.channelType = first1;
      items5[1] = jsx(require("CreateChannelTypeDescription"), obj14);
      tmp81 = c15;
      tmpResult1 = null;
      if (first1 !== c15.GUILD_STAGE_VOICE) {
        tmp = categoryId;
        tmp = createMode;
        tmpResult1 = null;
        if (createMode !== require("useCreateChannelSubmit").CreateChannelMode.PREMIUM_CHANNEL) {
          obj15 = {};
          tmp = categoryId;
          tmp = createMode;
          num20 = 53;
          tmp = jsxs;
          tmp = Fragment;
          tmp = jsx;
          obj16 = {};
          tmp = c15;
          if (first1 === c15.GUILD_CATEGORY) {
            tmp88 = categoryId;
            tmp89 = createMode;
            num10 = 26;
            intl9 = require("getSystemLocale").intl;
            stringResult3 = intl9.string(require("getSystemLocale").t.RQUk61);
          } else {
            tmp83 = c8;
            tmp85 = categoryId;
            tmp86 = createMode;
            num9 = 26;
            tmp84 = c8(first1);
            intl8 = require("getSystemLocale").intl;
            string = intl8.string;
            t = require("getSystemLocale").t;
            if (tmp84) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          obj16.description = stringResult3;
          obj16.hasIcons = true;
          tmp91 = categoryId;
          tmp92 = createMode;
          num11 = 55;
          tmp90 = jsx;
          obj17 = {};
          tmp93 = c15;
          if (first1 === c15.GUILD_CATEGORY) {
            tmp97 = categoryId;
            tmp98 = createMode;
            num13 = 26;
            intl11 = require("getSystemLocale").intl;
            stringResult4 = intl11.string(require("getSystemLocale").t.lEPAZ5);
          } else {
            tmp94 = categoryId;
            tmp95 = createMode;
            num12 = 26;
            intl10 = require("getSystemLocale").intl;
            stringResult4 = intl10.string(require("getSystemLocale").t.aUI70g);
          }
          obj17.label = stringResult4;
          tmp99 = jsx;
          tmp = categoryId;
          tmp = createMode;
          num14 = 56;
          obj17.icon = jsx(require("LockIcon").LockIcon, {});
          obj17.value = first3;
          obj17.onValueChange = function onValueChange(arg0) {
            callback(arg0);
          };
          obj16.children = tmp90(require("TableSwitchRow").TableSwitchRow, obj17);
          items6 = [, ];
          items6[0] = tmp(require("TableRowGroupTitle").TableRowGroup, obj16);
          tmp = null;
          if (first3) {
            tmp = categoryId;
            tmp = createMode;
            num15 = 47;
            obj19 = require("isAdmin");
            tmp = null;
            if (!obj19.canCreatePrivateChannel(first1, canResult, canResult1)) {
              tmp = jsx;
              tmp = c6;
              obj18 = {};
              obj18.style = tmp.errorMessage;
              tmp = jsx;
              tmp = categoryId;
              tmp = createMode;
              num16 = 34;
              obj19 = {};
              obj19.messageType = require("Button").HelpMessageTypes.ERROR;
              obj22 = require("isAdmin");
              obj19.children = obj22.getPrivateChannelHintText(first1);
              obj18.children = jsx(require("Button").HelpMessage, obj19);
              tmp = jsx(c6, obj18);
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
      tmp = c6;
      obj20 = {};
      obj20.style = tmp.errorMessage;
      tmp = jsx;
      tmp = categoryId;
      tmp = createMode;
      num17 = 34;
      obj21 = {};
      obj21.messageType = require("Button").HelpMessageTypes.ERROR;
      obj21.children = tmp23.message;
      obj20.children = jsx(require("Button").HelpMessage, obj21);
      tmp = jsx(c6, obj20);
    }
    items3[2] = tmp;
    obj2.children = items3;
    obj.children = tmp31(require("Stack").Stack, obj2);
    return tmp29(tmp30, obj);
  }
}
function AddMembers(guildId) {
  const _require = guildId;
  let tmp = _createForOfIteratorHelperLoose();
  const importDefault = canResult.useRef(guildId);
  let obj = _require(navigation[41]);
  navigation = obj.useNavigation();
  guild = guild.getGuild(guildId.guildId);
  importDefault(navigation[37])(null != guild, "Guild must not be null");
  const currentUser = authStore.getCurrentUser();
  importDefault(navigation[37])(null != currentUser, "AddMembers: user cannot be undefined");
  canResult = closure_12.can(constants2.ADMINISTRATOR, guild);
  const tmp8 = callback(guild, currentUser);
  let closure_5 = tmp8;
  const tmp9 = currentUser(canResult.useState({}), 2);
  const first = tmp9[0];
  const tmp11 = currentUser(importDefault(navigation[42])(guildId.onChannelCreated), 3);
  const first1 = tmp11[0];
  let closure_8 = tmp14;
  const effect = canResult.useEffect(() => {
    closure_1.current = closure_0;
  });
  const items = [canResult, tmp8, navigation, tmp11[2], first, currentUser.id];
  callback = canResult.useCallback(() => {
    let categoryId;
    let channelType;
    let flags;
    let guildId;
    let name;
    let onChannelCreated;
    const current = result.current;
    ({ guildId, channelType } = current);
    ({ name, categoryId, onChannelCreated, flags } = current);
    let obj = guildId(navigation[49]);
    result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === outer2_20.ROLE) {
          arr = arr.push(channelType(navigation[49]).permissionOverwriteForRole(row.id, channelType));
          const obj = channelType(navigation[49]);
        } else if (row.rowType === outer2_20.MEMBER) {
          arr = arr.push(channelType(navigation[49]).permissionOverwriteForUser(row.id, channelType));
          const obj2 = channelType(navigation[49]);
        }
      }
    });
    let tmp2 = TableRowInner;
    if (!TableRowInner) {
      tmp2 = closure_5;
    }
    if (!tmp2) {
      result.push(guildId(navigation[49]).permissionOverwriteForUser(currentUser.id, channelType));
      let obj2 = guildId(navigation[49]);
    }
    obj = { overwrites: result, guildId, channelType, name, categoryId, flags };
    if (channelType === outer1_15.GUILD_STAGE_VOICE) {
      obj = {};
      const merged = Object.assign(obj);
      obj["guildId"] = guildId;
      obj["onChannelCreated"] = onChannelCreated;
      navigation.push(outer1_27.ADD_MODERATORS, obj);
    } else {
      tmp14(obj);
    }
  }, items);
  const items1 = [navigation, first, first1, callback];
  const layoutEffect = canResult.useLayoutEffect(() => {
    const intl = guildId(navigation[26]).intl;
    guildId = intl.string(guildId(navigation[26]).t["5Wxrcd"]);
    if (Object.keys(first).length <= 0) {
      const obj = { headerRight: first1 ? (() => outer2_21(stringResult(navigation[44]).HeaderSubmittingIndicator, {})) : (() => outer2_21(stringResult(navigation[46]).HeaderActionButton, { text: stringResult, onPress: outer1_9 })) };
      navigation.setOptions(obj);
    } else {
      if (ref.current.channelType === outer1_15.GUILD_STAGE_VOICE) {
        const intl3 = guildId(navigation[26]).intl;
        let stringResult = intl3.string(guildId(navigation[26]).t.PDTjLN);
      } else {
        const intl2 = guildId(navigation[26]).intl;
        stringResult = intl2.string(guildId(navigation[26]).t.CumH4u);
      }
      guildId = stringResult;
    }
  }, items1);
  obj = { style: tmp.addMembersContainer };
  let tmp20 = null;
  if (null != tmp11[1].message) {
    tmp20 = null;
    if ("" !== tmp13.message) {
      obj = { style: tmp.errorMessage };
      const obj1 = { messageType: _require(navigation[34]).HelpMessageTypes.ERROR, children: tmp13.message };
      obj.children = callback(_require(navigation[34]).HelpMessage, obj1);
      tmp20 = callback(first, obj);
    }
  }
  const items2 = [tmp20, callback(_require(navigation[57]).AddMembersBody, { channel: null, guild, pendingAdditions: first, setPendingAdditions: tmp9[1] })];
  obj.children = items2;
  return closure_23(first, obj);
}
function getSceneTitle(arg0, arg1) {
  if (null != arg1) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.dEaPc4);
  } else {
    if (null !== arg0) {
      if (ChannelTypes.GUILD_TEXT !== arg0) {
        if (ChannelTypes.GUILD_VOICE !== arg0) {
          if (ChannelTypes.GUILD_STAGE_VOICE !== arg0) {
            if (ChannelTypes.GUILD_ANNOUNCEMENT !== arg0) {
              if (ChannelTypes.GUILD_FORUM !== arg0) {
                if (ChannelTypes.GUILD_MEDIA !== arg0) {
                  if (ChannelTypes.GUILD_CATEGORY === arg0) {
                    const intl = require(1212) /* getSystemLocale */.intl;
                    return intl.string(require(1212) /* getSystemLocale */.t["ISN+NM"]);
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
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["fUYU+j"]);
  }
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: closure_7, isGuildVocalChannelType: closure_8 } = _callSuper);
const ChannelTypes = ME.ChannelTypes;
({ GuildFeatures: closure_16, Permissions: closure_17, AnalyticEvents: closure_18, HelpdeskArticles: closure_19 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.addMembersContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.errorMessage = { marginBottom: 0 };
_createForOfIteratorHelperLoose.flexRow = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.horizontalContainer = { flex: 1, flexDirection: "row" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
obj1[ChannelTypes.GUILD_TEXT] = { IconComponent: require("TextIcon").TextIcon };
let obj2 = { IconComponent: require("TextIcon").TextIcon };
obj1[ChannelTypes.GUILD_FORUM] = { IconComponent: require("ForumIcon").ForumIcon };
let obj3 = { IconComponent: require("ForumIcon").ForumIcon };
obj1[ChannelTypes.GUILD_VOICE] = { IconComponent: require("VoiceNormalIcon").VoiceNormalIcon };
let obj4 = { IconComponent: require("VoiceNormalIcon").VoiceNormalIcon };
obj1[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: require("StageIcon").StageIcon };
let obj5 = { IconComponent: require("StageIcon").StageIcon };
obj1[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: require("AnnouncementsIcon").AnnouncementsIcon };
let obj6 = { IconComponent: require("AnnouncementsIcon").AnnouncementsIcon };
obj1[ChannelTypes.GUILD_MEDIA] = { IconComponent: require("ImageIcon").ImageIcon };
let obj8 = {};
let obj7 = { IconComponent: require("ImageIcon").ImageIcon };
obj8[ChannelTypes.GUILD_TEXT] = { IconComponent: require("TextLockIcon").TextLockIcon };
let obj9 = { IconComponent: require("TextLockIcon").TextLockIcon };
obj8[ChannelTypes.GUILD_FORUM] = { IconComponent: require("ForumLockIcon").ForumLockIcon };
let obj10 = { IconComponent: require("ForumLockIcon").ForumLockIcon };
obj8[ChannelTypes.GUILD_VOICE] = { IconComponent: require("VoiceLockIcon").VoiceLockIcon };
let obj11 = { IconComponent: require("VoiceLockIcon").VoiceLockIcon };
obj8[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: require("StageLockIcon").StageLockIcon };
let obj12 = { IconComponent: require("StageLockIcon").StageLockIcon };
obj8[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: require("AnnouncementsLockIcon").AnnouncementsLockIcon };
let obj13 = { IconComponent: require("AnnouncementsLockIcon").AnnouncementsLockIcon };
obj8[ChannelTypes.GUILD_MEDIA] = { IconComponent: require("ImageIcon").ImageIcon };
let closure_27 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
let obj14 = { IconComponent: require("ImageIcon").ImageIcon };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  let initialStack;
  let screens;
  const _require = arg0;
  ({ screens, initialStack } = importDefault(5450)(() => {
    let obj = { name: outer1_27.CREATE_CHANNEL };
    obj = {};
    let merged = Object.assign(callback);
    obj.params = obj;
    const items = [obj];
    obj = {};
    const obj1 = {};
    const obj2 = {
      impressionName: callback(outer1_2[58]).ImpressionNames.CHANNEL_ADD_INFO,
      impressionProperties: { impression_group: callback(outer1_2[58]).ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const merged = Object.assign(arg0);
        return outer2_21(outer2_29, {});
      }
    };
    obj1[outer1_27.CREATE_CHANNEL] = obj2;
    const obj4 = {};
    const intl = callback(outer1_2[26]).intl;
    obj4.headerTitle = intl.string(callback(outer1_2[26]).t.dMJ3Y6);
    obj4.impressionName = callback(outer1_2[58]).ImpressionNames.CHANNEL_ADD_MEMBERS;
    const obj3 = { impression_group: callback(outer1_2[58]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4.impressionProperties = { impression_group: callback(outer1_2[58]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return outer2_21(outer2_30, {});
    };
    obj1[outer1_27.ADD_MEMBERS] = obj4;
    const obj6 = {};
    const intl2 = callback(outer1_2[26]).intl;
    obj6.headerTitle = intl2.string(callback(outer1_2[26]).t.n3bcy8);
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return outer2_21(outer2_1(outer2_2[59]), {});
    };
    obj1[outer1_27.ADD_MODERATORS] = obj6;
    obj.screens = obj1;
    obj.initialStack = items;
    return obj;
  }));
  return callback(_require(5519).Navigator, { screens, initialRouteStack });
};
export { CreateChannel };
