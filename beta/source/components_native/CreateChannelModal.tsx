// Module ID: 9010
// Function ID: 9011
// Name: CreateChannelModal
// Dependencies: [32, 19, 17, 2049, 2063, 2045, 2067, 4469, 4479, 1372, 1074, 7849, 21, 4836, 576, 5394, 5402, 5415, 5411, 5408, 5401, 5374, 5392, 5400, 5412, 5410, 5407, 5399, 5375, 1115, 4832, 2111, 4548, 5917, 6001, 8053, 1177, 6402, 504, 38, 4989, 5727, 9011, 9012, 1485, 9013, 5016, 5936, 9015, 6795, 9016, 12, 9019, 5279, 6024, 5999, 9020, 9027, 6621, 5409, 4981, 9031, 1249, 9044, 5910, 6421, 2]
// Exports: default

// Module 9010 (CreateChannelModal)
import nativeDefault from "native" /* 576 */;
import intl16 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import react_native from "react-native" /* 4548 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import AppsIcon from "AppsIcon" /* 5374 */;
import AppsLockIcon from "AppsLockIcon" /* 5375 */;
import TextLockIcon from "TextLockIcon" /* 5392 */;
import TextIcon from "TextIcon" /* 5394 */;
import ImageLockIcon from "ImageLockIcon" /* 5399 */;
import ForumLockIcon from "ForumLockIcon" /* 5400 */;
import ImageIcon from "ImageIcon" /* 5401 */;
import ForumIcon from "ForumIcon" /* 5402 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5407 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5408 */;
import StageLockIcon from "StageLockIcon" /* 5410 */;
import StageIcon from "StageIcon" /* 5411 */;
import VoiceLockIcon from "VoiceLockIcon" /* 5412 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5415 */;
import reactDefault from "react" /* 5910 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import FormRadio from "FormRadio" /* 6001 */;
import HeaderActionButton from "HeaderActionButton" /* 6795 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7849 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9015 */;
import sanitizeChannelNameDefault from "sanitizeChannelName" /* 9019 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore_mod from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, constants, current, importDefault, navigation, row;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let metroRequire;
let obj2;
function ChannelTypeRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isBeta;
  let isPrivate;
  let items;
  let items1;
  let obj12;
  let obj14;
  let obj15;
  let obj9;
  let tmp6;
  let tmp9;
  let v2Sapx1;
  selected = selected.selected;
  const channelType = selected.channelType;
  const onPress = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  let tmp = closure_23();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const IconComponent = (isPrivate ? obj11 : obj3)[channelType].IconComponent;
  if (ChannelTypes.GUILD_TEXT === channelType) {
    const obj2 = { label: intl11.string(intl16.t.pnuRXC), description: intl12.string(intl16.t.oG6WsM) };
    intl11 = tmp2(1115).intl;
    intl12 = tmp2(1115).intl;
    tmp6 = obj2;
  } else if (ChannelTypes.GUILD_VOICE === channelType) {
    obj3 = { label: intl9.string(intl16.t.Sx55Oh), description: intl10.string(intl16.t.pqfkoF) };
    intl9 = tmp2(1115).intl;
    intl10 = tmp2(1115).intl;
    tmp6 = obj3;
  } else if (ChannelTypes.GUILD_FORUM === channelType) {
    const obj4 = { label: intl7.string(intl16.t.eAVID5), description: intl8.string(intl16.t.iZ5pgg) };
    intl7 = tmp2(1115).intl;
    intl8 = tmp2(1115).intl;
    tmp6 = obj4;
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === channelType) {
    const obj5 = { label: intl5.string(intl16.t.qr9dEP), description: intl6.string(intl16.t.gBkfzu) };
    intl5 = tmp2(1115).intl;
    intl6 = tmp2(1115).intl;
    tmp6 = obj5;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === channelType) {
    const obj6 = { label: intl3.string(intl16.t.pNWst0), description: intl4.string(intl16.t.VPAwgo) };
    intl3 = tmp2(1115).intl;
    intl4 = tmp2(1115).intl;
    tmp6 = obj6;
  } else if (ChannelTypes.GUILD_APP === channelType) {
    const obj7 = { label: intl.string(intl16.t["A+8d6M"]), description: intl2.string(intl16.t.LVQQ3Z) };
    intl = tmp2(1115).intl;
    intl2 = tmp2(1115).intl;
    tmp6 = obj7;
  } else if (ChannelTypes.GUILD_MEDIA === channelType) {
    const obj8 = { label: intl13.string(intl16.t["6x6fVg"]), description: authStore5(closure_21, obj9) };
    intl13 = tmp2(1115).intl;
    obj9 = { children: items };
    const obj10 = { variant: "text-xs/normal", color: "text-muted", children: intl14.string(intl16.t.JyCrwS) };
    const Text = tmp2(4832).Text;
    intl14 = tmp2(1115).intl;
    items = [closure_20(Text, obj10), ];
    obj11 = { variant: "text-xs/normal", children: format(v2Sapx1, obj12) };
    const Text2 = tmp2(4832).Text;
    const intl15 = tmp2(1115).intl;
    format = intl15.format;
    obj12 = { hcArticleUrl: obj15.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL) };
    v2Sapx1 = tmp2(1115).t["2Sapx1"];
    obj15 = HelpdeskUtilsDefault;
    items[1] = closure_20(Text2, obj11);
    tmp6 = obj8;
  }
  const label = tmp6.label;
  const description = tmp6.description;
  const obj13 = {
    onPress() {
      const tmp = !selected;
      if (tmp) {
        onPress(channelType);
      }
    },
    accessibilityRole,
    accessibilityState,
    icon: closure_20(metroRequire, obj14),
    trailing: closure_20(FormRadio.FormRadio, { selected }),
    label: tmp9,
    subLabel: description
  };
  obj14 = { style: tmp.flexRow, children: closure_20(IconComponent, {}) };
  const TableRow = tmp2(5917).TableRow;
  tmp9 = label;
  const tmp8 = metroRequire;
  if (true === isBeta) {
    const obj16 = { style: tmp.horizontalContainer, children: items1 };
    const obj17 = { text: label };
    items1 = [closure_20(tmp2(8053).FormLabel, obj17), ];
    const obj18 = { size: native.BetaSizes.SMALL };
    const BetaTag = tmp2(1177).BetaTag;
    items1[1] = closure_20(BetaTag, obj18);
    tmp9 = authStore5(tmp8, obj16);
  }
  return closure_20(TableRow, obj13);
}
class CreateChannel {
  constructor(categoryId) {
    let HelpMessage;
    let HelpMessage2;
    let Stack;
    let TableSwitchRow;
    let channelType;
    let closure_11;
    let closure_15;
    let createMode;
    let first5;
    let intl12;
    let items3;
    let items4;
    let obj20;
    let obj22;
    let obj26;
    let obj6;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let tmp4Result10;
    let tmp4Result8;
    categoryId = categoryId.categoryId;
    ({ channelType, cloneChannelId: importDefault, createMode } = categoryId);
    const guildId = categoryId.guildId;
    const onChannelCreated = categoryId.onChannelCreated;
    let c6;
    let canResult1;
    let value;
    let closure_9;
    let first1;
    PermissionStore = undefined;
    let first2;
    navigation = undefined;
    let first3;
    constants = undefined;
    let first4;
    let closure_17;
    let tmp = closure_23();
    let tmp2 = importDefault;
    let tmp3 = createMode;
    let tmp4 = categoryId;
    const insets = require("useSafeAreaInsetsKeyboardAware")().insets;
    let obj = categoryId(createMode[38]);
    let items = [first1];
    const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
    let obj2 = categoryId(createMode[38]);
    const items1 = [closure_9];
    const stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let channel = null;
      if (null != importDefault) {
        channel = ChannelStore.getChannel(tmp);
      }
      return channel;
    });
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    const canResult = PermissionStore.can(first4.VIEW_CHANNEL, stateFromStores);
    c6 = canResult;
    canResult1 = PermissionStore.can(first4.CONNECT, stateFromStores);
    let tmp11 = navigation;
    const currentUser = navigation.getCurrentUser();
    const tmp13 = tmp2(tmp3[39])(null != currentUser, "CreateChannel: user cannot be undefined");
    let str = tmp2(tmp3[40])(stateFromStores1);
    obj3 = onChannelCreated;
    const useState = onChannelCreated.useState;
    if (str == null) {
      str = "";
    }
    const tmp14 = guildId;
    const tmp15 = guildId(useState(str), 2);
    value = tmp15[0];
    closure_9 = tmp15[1];
    const useState2 = obj3.useState;
    if (null == channelType) {
      channelType = first3.GUILD_TEXT;
    }
    const tmp14Result = tmp14(useState2(channelType), 2);
    first1 = tmp14Result[0];
    PermissionStore = tmp14Result[1];
    const tmp4Result = tmp4(tmp3[41]);
    const canCreateStageChannelByGuild = tmp4Result.useCanCreateStageChannelByGuild(guildId);
    const tmp4Result6 = tmp4(tmp3[42]);
    const guildEligibleForMediaChannels = tmp4Result6.useGuildEligibleForMediaChannels(stateFromStores);
    let application_id;
    const tmp2Result = tmp2(tmp3[43]);
    const enabled = tmp2Result.useConfig({ guildId, location: "CreateChannel mobile" }).enabled;
    const useState3 = obj3.useState;
    if (stateFromStores1 != null) {
      application_id = stateFromStores1.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    const tmp14Result4 = tmp14(useState3(application_id), 2);
    first2 = tmp14Result4[0];
    const tmp25 = tmp14Result4[1];
    const tmp4Result7 = tmp4(tmp3[44]);
    navigation = tmp4Result7.useNavigation();
    const tmp14Result5 = tmp14(tmp2(tmp3[45])(onChannelCreated), 3);
    first3 = tmp14Result5[0];
    constants = tmp30;
    const tmp14Result6 = tmp14(obj3.useState(false), 2);
    first4 = tmp14Result6[0];
    closure_17 = tmp14Result6[1];
    const effect = obj3.useEffect(() => {
      const obj = require("AppAnalyticsUtils");
      obj.trackWithMetadata(closure_17.OPEN_MODAL, { type: "Create Channel" });
    }, []);
    const items2 = [navigation, first1, stateFromStores1, canResult, canResult1, first4, value, first3, guildId, tmp14Result5[2], categoryId, createMode, onChannelCreated, first2];
    const effect1 = obj3.useEffect(function() {
      let obj2;
      let stringResult;
      let obj = {
        headerLeft: obj2.getHeaderCloseButton(CreateChannelModalActionCreatorsDefault.close),
        headerRight() {
          let applicationId;
          let channelType;
          let name;
          let tmp18;
          let tmpResult;
          const tmp = closure_2_20;
          const tmp2 = categoryId;
          const tmp3 = createMode;
          if (constants) {
            tmpResult = tmp(tmp2(tmp3[47]).HeaderSubmittingIndicator, {});
          } else {
            let tmp5 = first4;
            if (!tmp5) {
              let stringResult;
              const tmp6 = first1;
              const tmp7 = first3;
              if (first1 !== first3.GUILD_STAGE_VOICE) {
                const tmp9 = createMode;
                const intl = categoryId(createMode[29]).intl;
                const tmp10 = categoryId;
                const tmp11 = createMode;
                stringResult = intl.string(categoryId(createMode[29]).t.CumH4u);
              }
              let obj = {
                text: stringResult,
                disabled: tmp18,
                onPress() {
                      let bitrate;
                      let items;
                      let userLimit;
                      if (null != closure_1_5) {
                        const obj = closure_2_1(closure_2_2[51]);
                        items = obj.values(tmp.permissionOverwrites);
                      } else {
                        items = [];
                      }
                      const obj2 = { overwrites: items, bitrate, userLimit, createMode, guildId, name, channelType, categoryId, applicationId, onChannelCreated };
                      bitrate = undefined;
                      if (closure_1_5 != null) {
                        bitrate = tmp.bitrate;
                      }
                      userLimit = undefined;
                      if (closure_1_5 != null) {
                        userLimit = tmp.userLimit;
                      }
                      const tmp12 = closure_1_16;
                      if (tmp12) {
                        obj3 = { guildId: tmp6, channelType, name: tmp7, categoryId: tmp9, applicationId: tmp10, onChannelCreated: tmp11 };
                        closure_1_13.push(constants2.ADD_MEMBERS, obj3);
                      } else if (channelType === constants.GUILD_STAGE_VOICE) {
                        closure_1_13.push(constants2.ADD_MODERATORS, obj2);
                      } else {
                        closure_1_15(obj2);
                      }
                    }
              };
              tmp18 = "" === closure_1_8;
              if (!tmp18) {
                if (tmp5) {
                  let obj2 = categoryId(createMode[50]);
                  tmp5 = !obj2.canCreatePrivateChannel(first1, closure_1_6, canResult1);
                }
                tmp18 = tmp5;
              }
              if (!tmp18) {
                tmp18 = first1 === first3.GUILD_APP && null == first2;
                const tmp26 = first1 === first3.GUILD_APP && null == first2;
              }
              tmpResult = tmp(tmp4, obj);
            }
            const intl2 = categoryId(createMode[29]).intl;
            stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: stringResult
      };
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp = navigation;
      const setOptions = navigation.setOptions;
      obj2 = NavigatorHeader;
      const tmp4 = first1;
      if (null != stateFromStores1) {
        const intl3 = intl16.intl;
        stringResult = intl3.string(intl16.t.dEaPc4);
      } else {
        if (null !== tmp4) {
          let tmp10 = ChannelTypes;
          if (ChannelTypes.GUILD_TEXT !== tmp4) {
            if (tmp10.GUILD_VOICE !== tmp4) {
              if (tmp10.GUILD_STAGE_VOICE !== tmp4) {
                if (tmp10.GUILD_ANNOUNCEMENT !== tmp4) {
                  if (tmp10.GUILD_FORUM !== tmp4) {
                    if (tmp10.GUILD_MEDIA !== tmp4) {
                      if (tmp10.GUILD_APP !== tmp4) {
                        if (tmp10.GUILD_CATEGORY === tmp4) {
                          let intl = intl16.intl;
                          stringResult = intl.string(intl16.t["ISN+NM"]);
                        } else {
                          let tmp5 = globalThis;
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          const self = this;
                          const self2 = this;
                          const error = new Error("Unsupported channelType: " + tmp4);
                          let tmp7 = error;
                          throw error;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let intl2 = intl16.intl;
        stringResult = intl2.string(intl16.t["fUYU+j"]);
      }
      setOptions(obj);
    }, items2);
    const obj4 = { keyboardShouldPersistTaps: "always", contentContainerStyle: { padding: tmp2(tmp3[14]).space.PX_16, paddingBottom: tmp2(tmp3[14]).space.PX_16 + insets.bottom }, children: closure_22(Stack, obj6) };
    obj6 = { spacing: tmp2(tmp3[14]).space.PX_16, children: items3 };
    ({ padding: tmp2(tmp3[14]).space.PX_16, paddingBottom: tmp2(tmp3[14]).space.PX_16 + insets.bottom });
    Stack = tmp4(tmp3[53]).Stack;
    const TextInput = tmp4(tmp3[54]).TextInput;
    const tmp36 = stateFromStores1;
    if (first1 === first3.GUILD_CATEGORY) {
      let intl2 = tmp4(tmp3[29]).intl;
      stringResult = intl2.string(tmp4(tmp3[29]).t.OCAkGP);
    } else {
      let intl = tmp4(tmp3[29]).intl;
      stringResult = intl.string(tmp4(tmp3[29]).t.PVbHDl);
    }
    const name = tmp29.name;
    const obj7 = {
      label: stringResult,
      errorMessage: first5,
      description: stringResult1,
      autoFocus: true,
      enableAndroidSanitizedInputWorkaround: true,
      value,
      onChange(arg0) {
        if (first !== arg0) {
          closure_9(sanitizeChannelNameDefault(arg0, first1));
        }
      },
      placeholder: stringResult2
    };
    first5 = undefined;
    if (name != null) {
      first5 = name[0];
    }
    if (first1 === first3.GUILD_FORUM) {
      const intl4 = tmp4(tmp3[29]).intl;
      stringResult1 = intl4.string(tmp4(tmp3[29]).t.qBvLY4);
    } else if (null != stateFromStores1) {
      let intl3 = tmp4(tmp3[29]).intl;
      const format = intl3.format;
      const obj8 = { name: tmp4Result8.computeChannelName(stateFromStores1, tmp11, first2, true) };
      const s2ZzZZ = tmp4(tmp3[29]).t.s2ZzZZ;
      tmp4Result8 = tmp4(tmp3[40]);
      stringResult1 = format(s2ZzZZ, obj8);
    }
    if (first1 === first3.GUILD_CATEGORY) {
      const intl7 = tmp4(tmp3[29]).intl;
      stringResult2 = intl7.string(tmp4(tmp3[29]).t.eTVbtx);
    } else if (first1 === first3.GUILD_FORUM) {
      const intl6 = tmp4(tmp3[29]).intl;
      stringResult2 = intl6.string(tmp4(tmp3[29]).t["5z1Xat"]);
    } else {
      const intl5 = tmp4(tmp3[29]).intl;
      stringResult2 = intl5.string(tmp4(tmp3[29]).t["bw/b8E"]);
    }
    items3 = [closure_20(TextInput, obj7), , ];
    let tmp37Result4 = null;
    if (null == stateFromStores1) {
      let tmp37Result = null;
      if (first1 !== first3.GUILD_CATEGORY) {
        function handleTypeChange(arg0) {
          closure_11(arg0);
          closure_9(sanitizeChannelNameDefault(first, arg0));
        }
        const obj9 = { title: intl12.string(tmp4(tmp3[29]).t["7ZcXG2"]), hasIcons: true, children: items4 };
        const TableRowGroup = tmp4(tmp3[55]).TableRowGroup;
        intl12 = tmp4(tmp3[29]).intl;
        const obj10 = { channelType: first3.GUILD_TEXT, selected: first1 === first3.GUILD_TEXT, isPrivate: first4, onPress: handleTypeChange };
        items4 = [closure_20(ChannelTypeRow, obj10), , , , , , ];
        obj11 = { channelType: first3.GUILD_VOICE, selected: first1 === first3.GUILD_VOICE, isPrivate: first4, onPress: handleTypeChange };
        items4[1] = closure_20(ChannelTypeRow, obj11);
        const obj12 = { channelType: first3.GUILD_FORUM, selected: first1 === first3.GUILD_FORUM, isPrivate: first4, onPress: handleTypeChange };
        items4[2] = closure_20(ChannelTypeRow, obj12);
        let tmp35Result = null;
        if (guildEligibleForMediaChannels) {
          const obj13 = { channelType: first3.GUILD_MEDIA, selected: first1 === first3.GUILD_MEDIA, isPrivate: first4, isBeta: true, onPress: handleTypeChange };
          tmp35Result = tmp35(tmp64, obj13);
        }
        items4[3] = tmp35Result;
        let tmp35Result7 = null;
        if (hasItem) {
          tmp35Result7 = null;
          if (createMode !== tmp4(tmp3[45]).CreateChannelMode.PREMIUM_CHANNEL) {
            const obj14 = { channelType: first3.GUILD_ANNOUNCEMENT, selected: first1 === first3.GUILD_ANNOUNCEMENT, isPrivate: first4, onPress: handleTypeChange };
            tmp35Result7 = tmp35(tmp64, obj14);
          }
        }
        items4[4] = tmp35Result7;
        let tmp35Result8 = null;
        if (canCreateStageChannelByGuild) {
          tmp35Result8 = null;
          if (!first4) {
            const obj15 = { channelType: first3.GUILD_STAGE_VOICE, selected: first1 === first3.GUILD_STAGE_VOICE, isPrivate: first4, onPress: handleTypeChange };
            tmp35Result8 = tmp35(tmp64, obj15);
          }
        }
        items4[5] = tmp35Result8;
        let tmp35Result9 = null;
        if (enabled) {
          const obj16 = { channelType: first3.GUILD_APP, selected: first1 === first3.GUILD_APP, isPrivate: first4, onPress: handleTypeChange };
          tmp35Result9 = tmp35(tmp64, obj16);
        }
        items4[6] = tmp35Result9;
        tmp37Result = tmp37(TableRowGroup, obj9);
      }
      const items5 = [tmp37Result, , , ];
      let tmp35Result10 = null;
      if (first1 === first3.GUILD_APP) {
        const obj17 = { guildId, channelId: categoryId, selectedApplicationId: first2, onChange: tmp25 };
        tmp35Result10 = tmp35(tmp2(tmp3[56]), obj17);
      }
      items5[1] = tmp35Result10;
      const obj18 = { guildId, channelType: first1 };
      items5[2] = closure_20(tmp2(tmp3[57]), obj18);
      let tmp37Result3 = null;
      if (first1 !== first3.GUILD_STAGE_VOICE) {
        tmp37Result3 = null;
        if (createMode !== tmp4(tmp3[45]).CreateChannelMode.PREMIUM_CHANNEL) {
          let stringResult3;
          let stringResult4;
          const TableRowGroup2 = tmp4(tmp3[55]).TableRowGroup;
          if (first1 === first3.GUILD_CATEGORY) {
            const intl9 = tmp4(tmp3[29]).intl;
            stringResult3 = intl9.string(tmp4(tmp3[29]).t.RQUk61);
          } else {
            const tmp57 = canResult1(first1);
            const intl8 = tmp4(tmp3[29]).intl;
            const string = intl8.string;
            const t = tmp4(tmp3[29]).t;
            if (tmp57) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          const obj19 = { description: stringResult3, hasIcons: true, children: closure_20(TableSwitchRow, obj20) };
          TableSwitchRow = tmp4(tmp3[58]).TableSwitchRow;
          if (first1 === first3.GUILD_CATEGORY) {
            const intl11 = tmp4(tmp3[29]).intl;
            stringResult4 = intl11.string(tmp4(tmp3[29]).t.lEPAZ5);
          } else {
            const intl10 = tmp4(tmp3[29]).intl;
            stringResult4 = intl10.string(tmp4(tmp3[29]).t.aUI70g);
          }
          obj20 = {
            label: stringResult4,
            icon: closure_20(tmp4(tmp3[59]).LockIcon, {}),
            value: first4,
            onValueChange(arg0) {
                    closure_17(arg0);
                  }
          };
          const items6 = [closure_20(TableRowGroup2, obj19), ];
          let tmp35Result11 = null;
          if (first4) {
            tmp35Result11 = null;
            const tmp4Result9 = tmp4(tmp3[50]);
            if (!tmp4Result9.canCreatePrivateChannel(first1, canResult, canResult1)) {
              const obj21 = { style: tmp.errorMessage, children: closure_20(HelpMessage, obj22) };
              obj22 = { messageType: tmp4(tmp3[36]).HelpMessageTypes.ERROR, children: tmp4Result10.getPrivateChannelHintText(first1) };
              HelpMessage = tmp4(tmp3[36]).HelpMessage;
              tmp4Result10 = tmp4(tmp3[50]);
              tmp35Result11 = tmp35(c6, obj21);
            }
          }
          const obj23 = { children: items6 };
          items6[1] = tmp35Result11;
          tmp37Result3 = tmp37(tmp48, obj23);
        }
      }
      const obj24 = { children: items5 };
      items5[3] = tmp37Result3;
      tmp37Result4 = tmp37(tmp48, obj24);
    }
    items3[1] = tmp37Result4;
    let tmp35Result12 = null;
    if (null != tmp14Result5[1].message) {
      const obj25 = { style: tmp.errorMessage, children: closure_20(HelpMessage2, obj26) };
      obj26 = { messageType: tmp4(tmp3[36]).HelpMessageTypes.ERROR, children: tmp14Result5[1].message };
      HelpMessage2 = tmp4(tmp3[36]).HelpMessage;
      tmp35Result12 = tmp35(c6, obj25);
    }
    items3[2] = tmp35Result12;
    return closure_20(tmp36, obj4);
  }
}
function AddMembers(guildId) {
  let HelpMessage;
  let closure_8;
  let items2;
  let obj4;
  let ref;
  _require = guildId;
  let tmp = closure_23();
  importDefault = react.useRef(guildId);
  let tmp2 = _require;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const guild = GuildStore.getGuild(guildId.guildId);
  require("module_38")(null != guild, "Guild must not be null");
  const currentUser = UserStore.getCurrentUser();
  const tmp8 = require("module_38")(null != currentUser, "AddMembers: user cannot be undefined");
  const canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
  react = canResult;
  const tmp10 = isGuildOwner(guild, currentUser);
  let closure_5 = tmp10;
  const tmp11 = currentUser(react.useState({}), 2);
  const pendingAdditions = tmp11[0];
  const tmp13 = tmp11[1];
  const tmp14 = currentUser(require("useCreateChannelSubmit")(guildId.onChannelCreated), 3);
  const first1 = tmp14[0];
  isGuildOwner = tmp17;
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const items = [canResult, tmp10, navigation, tmp14[2], pendingAdditions, currentUser.id];
  const onPress = react.useCallback(() => {
    let applicationId;
    let categoryId;
    let channelType;
    let flags;
    let guildId;
    let name;
    let onChannelCreated;
    current = ref.current;
    ({ guildId, channelType } = current);
    ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
    let tmp = require;
    const tmp2 = dependencyMap;
    let obj = ChannelUtils;
    const result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      const tmp = null != row.id && "" !== row.id;
      if (tmp) {
        if (row.rowType === constants.ROLE) {
          const push2 = result.push;
          const obj2 = current(navigation[60]);
          push2(obj2.permissionOverwriteForRole(row.id, channelType));
        } else if (row.rowType === tmp2.MEMBER) {
          const push = result.push;
          const obj = current(navigation[60]);
          push(obj.permissionOverwriteForUser(row.id, channelType));
        }
      }
    });
    const tmp4 = react || closure_5;
    if (!tmp4) {
      let push = result.push;
      const tmpResult = ChannelUtils;
      push(tmpResult.permissionOverwriteForUser(currentUser.id, channelType));
    }
    let obj2 = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
    if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
      obj3 = { guildId, onChannelCreated };
      let push2 = navigation.push;
      const ADD_MODERATORS = constants2.ADD_MODERATORS;
      const merged = Object.assign(obj2);
      push2(ADD_MODERATORS, obj3);
    } else {
      closure_8(obj2);
    }
  }, items);
  const items1 = [navigation, pendingAdditions, first1, onPress];
  const layoutEffect = react.useLayoutEffect(() => {
    const channelType = ref.current.channelType;
    const intl = current(navigation[29]).intl;
    current = intl.string(current(navigation[29]).t["5Wxrcd"]);
    if (Object.keys(first).length > 0) {
      let stringResult;
      if (channelType === constants.GUILD_STAGE_VOICE) {
        const intl3 = tmp(tmp2[29]).intl;
        stringResult = intl3.string(tmp(tmp2[29]).t.PDTjLN);
      } else {
        const intl2 = tmp(tmp2[29]).intl;
        stringResult = intl2.string(tmp(tmp2[29]).t.CumH4u);
      }
      current = stringResult;
    }
    let obj = {
      headerRight: first1 ? (() => closure_1_20(stringResult(navigation[47]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: stringResult, onPress };
        return closure_20(HeaderActionButton.HeaderActionButton, obj);
      })
    };
    navigation.setOptions(obj);
  }, items1);
  let obj2 = { style: tmp.addMembersContainer, children: items2 };
  let tmp23 = null;
  const tmp21 = closure_22;
  if (null != tmp14[1].message) {
    tmp23 = null;
    if ("" !== tmp14[1].message) {
      obj3 = { style: tmp.errorMessage, children: closure_20(HelpMessage, obj4) };
      obj4 = { messageType: tmp2(navigation[36]).HelpMessageTypes.ERROR, children: tmp14[1].message };
      HelpMessage = tmp2(tmp3[36]).HelpMessage;
      tmp23 = closure_20(tmp22, obj3);
    }
  }
  items2 = [tmp23, closure_20(tmp2(tmp3[61]).AddMembersBody, { channel: null, guild, pendingAdditions, setPendingAdditions: tmp13 })];
  return tmp21(pendingAdditions, obj2);
}
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native2);
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
let isGuildOwner = GuildRecord.isGuildOwner;
let PermissionStore = PermissionStore_mod;
const ChannelTypes = Constants.ChannelTypes;
({ GuildFeatures: closure_15, Permissions: closure_16, AnalyticEvents: closure_17, HelpdeskArticles: closure_18 } = Constants);
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let obj = { addMembersContainer: obj2, errorMessage: { marginBottom: 0 }, flexRow: { flexDirection: "row", alignItems: "center" }, horizontalContainer: { flex: 1, flexDirection: "row" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let closure_23 = createStyles.createStyles(obj);
let obj3 = {};
let obj4 = { IconComponent: TextIcon.TextIcon };
obj3[ChannelTypes.GUILD_TEXT] = obj4;
let obj5 = { IconComponent: ForumIcon.ForumIcon };
obj3[ChannelTypes.GUILD_FORUM] = obj5;
let obj6 = { IconComponent: VoiceNormalIcon.VoiceNormalIcon };
obj3[ChannelTypes.GUILD_VOICE] = obj6;
let obj7 = { IconComponent: StageIcon.StageIcon };
obj3[ChannelTypes.GUILD_STAGE_VOICE] = obj7;
let obj8 = { IconComponent: AnnouncementsIcon.AnnouncementsIcon };
obj3[ChannelTypes.GUILD_ANNOUNCEMENT] = obj8;
let obj9 = { IconComponent: ImageIcon.ImageIcon };
obj3[ChannelTypes.GUILD_MEDIA] = obj9;
let obj10 = { IconComponent: AppsIcon.AppsIcon };
obj3[ChannelTypes.GUILD_APP] = obj10;
let obj11 = {};
let obj12 = { IconComponent: TextLockIcon.TextLockIcon };
obj11[ChannelTypes.GUILD_TEXT] = obj12;
let obj13 = { IconComponent: ForumLockIcon.ForumLockIcon };
obj11[ChannelTypes.GUILD_FORUM] = obj13;
let obj14 = { IconComponent: VoiceLockIcon.VoiceLockIcon };
obj11[ChannelTypes.GUILD_VOICE] = obj14;
let obj15 = { IconComponent: StageLockIcon.StageLockIcon };
obj11[ChannelTypes.GUILD_STAGE_VOICE] = obj15;
let obj16 = { IconComponent: AnnouncementsLockIcon.AnnouncementsLockIcon };
obj11[ChannelTypes.GUILD_ANNOUNCEMENT] = obj16;
let obj17 = { IconComponent: ImageLockIcon.ImageLockIcon };
obj11[ChannelTypes.GUILD_MEDIA] = obj17;
let obj18 = { IconComponent: AppsLockIcon.AppsLockIcon };
obj11[ChannelTypes.GUILD_APP] = obj18;
let closure_29 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
let result = size.fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  let closure_0;
  let initialStack;
  let screens;
  _require = arg0;
  let tmp = reactDefault(() => {
    let intl;
    let intl2;
    let obj2;
    let obj4;
    function render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_27, obj);
    }
    let obj = { name: constants.CREATE_CHANNEL, params: obj2 };
    obj2 = {};
    let merged = Object.assign(closure_0);
    const items = [obj];
    obj3 = { screens: obj4, initialStack: items };
    obj4 = {};
    const CREATE_CHANNEL = constants.CREATE_CHANNEL;
    obj4[CREATE_CHANNEL] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW }, render };
    const obj5 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW }, render };
    const ADD_MEMBERS = constants.ADD_MEMBERS;
    const obj7 = {
      headerTitle: intl.string(intl16.t.dMJ3Y6),
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_MEMBERS,
      impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        return closure_1_20(closure_1_28, obj);
      }
    };
    ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW });
    intl = intl16.intl;
    obj4[ADD_MEMBERS] = obj7;
    const ADD_MODERATORS = constants.ADD_MODERATORS;
    const obj9 = {
      headerTitle: intl2.string(intl16.t.n3bcy8),
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(closure_1_2[63]);
        const merged = Object.assign(arg0);
        return closure_1_20(tmp, obj);
      }
    };
    ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW });
    intl2 = intl16.intl;
    obj4[ADD_MODERATORS] = obj9;
    return obj3;
  });
  ({ screens, initialStack } = tmp);
  return closure_20(require("Navigator").Navigator, { screens, initialRouteStack });
};
export { CreateChannel };
