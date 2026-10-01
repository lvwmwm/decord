// Module ID: 13328
// Function ID: 13329
// Name: VoiceMemberList
// Dependencies: [32, 5, 19, 17, 2044, 1386, 4858, 4469, 1372, 4860, 1074, 1181, 6572, 1085, 21, 4836, 13324, 9394, 504, 8053, 13006, 1115, 9491, 11085, 9275, 4832, 8895, 6583, 1876, 5723, 8826, 5043, 13329, 13330, 1479, 13337, 4692, 12, 4800, 7624, 4540, 13338, 6493, 2]

// Module 13328 (VoiceMemberList)
import Constants2 from "Constants" /* 1085 */;
import FormConstants from "FormConstants" /* 1181 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import Form from "Form" /* 8053 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 9394 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11085 */;
import GuildEventVoiceBannerDefault from "GuildEventVoiceBanner" /* 13324 */;
import VoiceMemberUser from "VoiceMemberUser" /* 13330 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import UserRecord from "UserRecord" /* 1386 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VoiceMemberUserDefault = VoiceMemberUser;
let _location, c5, c6, importDefault, set;

let closure_15;
let closure_16;
let closure_17;
let closure_21;
let closure_22;
let closure_23;
let metroImportAll;
let metroImportDefault;
let tmp;
const AssetRegistryDefault = tmp(9491);
function ItemSeparator() {
  const obj = { style: closure_24().rowFormDivider };
  return closure_21(Form.FormDivider, obj);
}
function VoiceMemberListSectionHeader(title) {
  let Text;
  let obj2;
  const str = title.title;
  const tmp = closure_24();
  const obj = { style: tmp.sectionContainer, children: closure_21(Text, obj2) };
  obj2 = { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: str.toUpperCase() };
  Text = Text_Text.Text;
  return closure_21(metroImportAll, obj);
}
function renderSectionHeader(section) {
  const title = section.section.title;
  let tmp = null;
  if (null != title) {
    const obj = { title };
    tmp = closure_21(VoiceMemberListSectionHeader, obj);
  }
  return tmp;
}
function extractKey(id) {
  if (id instanceof UserRecord) {
    id = id.id;
  } else {
    const tmp = undefined !== id.url && undefined !== id.applicationId;
    if (tmp) {
      id = id.applicationId;
    } else {
      id = id.user.id;
    }
  }
  return id;
}
function VoiceSectionRow(arg0) {
  let channelId;
  let closure_1;
  let isActionSheet;
  let item;
  let obj;
  let onPressUser;
  ({ item, isActionSheet } = arg0);
  const tmp = obj;
  ({ channelId, onPressUser } = arg0);
  obj = isActionSheet(obj[26]);
  importDefault = obj.useAnalyticsContext();
  let analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp3 = undefined !== item.url && undefined !== item.applicationId;
  if (tmp3) {
    obj = function _onItemPress() {
      obj = _asyncToGenerator(async (arg0, value, arg2) => {
        let closure_2;
        let closure_0 = arg0;
        _location = value;
        analyticsLocations = arg2;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_3;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_4 = tmp;
                closure_3 = tmp4;
                const tmp12 = null != closure_0 && null != _location && null != tmp27;
                if (tmp12) {
                  const obj3 = analyticsLocations(closure_3[28]);
                  const result = obj3.dismissGlobalKeyboard();
                  const obj4 = _location(closure_3[29]);
                  const voiceChannel = obj4.selectVoiceChannel(tmp26.id);
                  const obj6 = { applicationId: analyticsLocations.applicationId, activityChannelId: closure_0.id, locationObject: _location.location, analyticsLocations };
                  c5 = 1;
                  c6 = 1;
                  const obj7 = { value: _location(closure_3[30])(obj6), done: false };
                  return obj7;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const tmp6 = closure_132_0;
              if (tmp6) {
                obj = closure_0(closure_3[31]);
                const result1 = obj.hideVoiceChannelActionSheet(closure_0);
              }
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp22) {
            c6 = 3;
            throw tmp22;
          }
        }
      });
      return obj(...arguments);
    };
    let obj2 = {
      embeddedActivity: item,
      channelId,
      onItemPress(arg0, arg1, arg2) {
          return obj(...arguments);
        },
      isActionSheet
    };
    return closure_21(require("VoiceMemberEmbeddedActivity"), obj2);
  } else {
    const tmp4 = closure_21;
    let obj3 = { onPress: onPressUser, isActionSheet };
    let tmp6 = obj3;
    const tmp2Result = require("VoiceMemberUser");
    const merged = Object.assign(item);
    return closure_21(tmp2Result, obj3);
  }
}
let _slicedToArray = _slicedToArray_mod;
({ SectionList: metroImportDefault, View: metroImportAll } = react_native);
({ AnalyticsPages: closure_15, InstantInviteSources: closure_16, Permissions: closure_17 } = Constants);
const FORM_ROW_VERTICAL_PADDING = FormConstants.FORM_ROW_VERTICAL_PADDING;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ThemeTypes = Constants2.ThemeTypes;
let Fragment = Fragment_mod;
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = Fragment);
let closure_24 = createStyles.createStyles({ container: { flex: 1, flexShrink: 1 }, sectionContainer: { paddingTop: 16, paddingHorizontal: 16 }, sectionTitle: { lineHeight: 16 }, voiceChannelContainer: { overflow: "hidden", flexGrow: 1, flexShrink: 1, minHeight: 1 }, headerFormDivider: { marginLeft: 0 }, rowFormDivider: { marginHorizontal: 16 } });
let closure_25 = react.memo((channel) => closure_21(GuildEventVoiceBannerDefault, { channel: channel.channel }));
let closure_26 = react.memo((channel) => {
  let CircularIconButton;
  let intl;
  let intl2;
  let items;
  let obj3;
  channel = channel.channel;
  let tmp = importDefault;
  const tmp3 = useIsVoiceChannelFullDefault(channel);
  channel(504);
  [][0] = channel;
  let tmp7 = null;
  if (!tmp3) {
    tmp7 = null;
    if (tmp6) {
      let obj = { children: items };
      const Fragment = react.Fragment;
      items = [closure_21(ItemSeparator, {}), ];
      let obj2 = {
        leading: closure_21(CircularIconButton, obj3),
        label: intl2.string(tmp4(1115).t["6Qgrev"]),
        onPress() {
              if (channel.isPrivate()) {
                openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_CALL);
              } else {
                const obj2 = { source: constants2.VOICE_CHANNEL };
                const obj = instant_invite_InstantInviteUtils;
                const result = obj.showInstantInviteActionSheet(tmp, obj2);
              }
            }
      };
      const FormRow = tmp4(8053).FormRow;
      obj3 = { accessibilityLabel: intl.string(channel(1115).t["6Qgrev"]), accessibilityHidden: true, source: AssetRegistryDefault, size: channel(13006).CircularIconButton.Sizes.MEDIUM_32 };
      CircularIconButton = tmp4(13006).CircularIconButton;
      intl = tmp4(1115).intl;
      intl2 = tmp4(1115).intl;
      items[1] = closure_21(FormRow, obj2);
      tmp7 = closure_22(Fragment, obj);
    }
  }
  return tmp7;
});
const constants4 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
const forwardRefResult = react.forwardRef(function VoiceMemberList(channel, ref) {
  let arr10;
  let arr11;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj10;
  let obj16;
  let obj6;
  let reduced;
  let tmp25Result2;
  const f97841 = (user) => stateFromStoresArray.includes(user.user.id);
  channel = channel.channel;
  let flag = channel.isActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.disableFooter;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let merged = Object.assign(channel, Object.assign({ channel: 0, isActionSheet: 0, disableFooter: 0 }));
  let analyticsLocations;
  let items5;
  let callback;
  let callback1;
  const tmp2 = closure_24();
  const rowFormDivider = tmp2;
  let tmp4 = analyticsLocations;
  analyticsLocations = flag(analyticsLocations[27])().analyticsLocations;
  _slicedToArray = Math.min(flag(analyticsLocations[34])().width, ACTION_SHEET_MAX_WIDTH);
  let obj = channel(analyticsLocations[18]);
  let items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel), items1);
  const tmp6 = flag(analyticsLocations[35])(channel);
  const ownerId = tmp6;
  let obj2 = channel(analyticsLocations[18]);
  const items2 = [ApplicationStreamingStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let viewerIds;
    if (null != ownerId) {
      viewerIds = ApplicationStreamingStore.getViewerIds(tmp);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  let tmp8 = channel(analyticsLocations[36]);
  const useIsModalOpen = tmp8.useIsModalOpen;
  let obj3 = channel(analyticsLocations[31]);
  const isModalOpen = useIsModalOpen(obj3.getVoiceChannelKey(channel.id));
  const items3 = [callback];
  const obj4 = channel(analyticsLocations[18]);
  const stateFromStores1 = obj4.useStateFromStores(items3, () => EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id));
  set = new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
  const items4 = [];
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    reduced = recipients.reduce((arr, item) => {
      const user = UserStore.getUser(item);
      const hasItem = null == user || set.has(user.id);
      if (!hasItem) {
        arr.push(user);
      }
      return arr;
    }, items4);
  } else {
    reduced = items4;
  }
  items5 = [];
  if (null != tmp6) {
    if (null != stateFromStoresArray) {
      let tmp25Result;
      if (isModalOpen) {
        const found = stateFromStores.find((user) => user.user.id === ownerId.ownerId);
        let str;
        if (found != null) {
          str = found.nick;
        }
        if (str == null) {
          str = "";
        }
        const tmp3Result = flag(tmp4[37]);
        [arr10, arr11] = _slicedToArray(tmp3Result.partition(stateFromStores, f97841), 2);
        const tmp15 = _slicedToArray(tmp3Result.partition(stateFromStores, f97841), 2);
        if (arr10.length > 0) {
          const push = items5.push;
          const obj5 = { type: constants4.SPECTATING, title: intl.formatToPlainString(channel(tmp4[21]).t.Fb0eT9, obj6), data: arr10 };
          intl = tmp5(tmp4[21]).intl;
          obj6 = { username: str };
          push(obj5);
        }
        if (arr11.length > 0) {
          let tmp18 = constants4;
          const push2 = items5.push;
          const obj7 = { type: constants4.VOICE, title: intl2.string(channel(tmp4[21]).t.C7iIKB), data: stateFromStores1.concat(arr11) };
          intl2 = tmp5(tmp4[21]).intl;
          push2(obj7);
        }
        if (reduced.length > 0) {
          const push3 = items5.push;
          const obj8 = { type: constants4.DISCONNECTED, title: intl3.string(channel(tmp4[21]).t.BnSq1I), data: reduced };
          intl3 = tmp5(tmp4[21]).intl;
          push3(obj8);
        }
      }
      const items6 = [channel.id, analyticsLocations];
      callback = stateFromStoresArray.useCallback((id) => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = { userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      }, items6);
      const items7 = [channel, flag, callback];
      callback1 = stateFromStoresArray.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (constants.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof UserRecord)) {
            const obj2 = { item, channelId: channel.id, onPressUser: onPress, isActionSheet: flag };
            tmp18 = closure_21(VoiceSectionRow, obj2);
          }
          return tmp18;
        } else if (constants.SPECTATING === type) {
          const obj3 = { onPress, isSpectating: true, isActionSheet: true };
          const tmp11 = VoiceMemberUserDefault;
          const merged = Object.assign(item);
          return closure_21(tmp11, obj3);
        } else if (constants.DISCONNECTED === type) {
          const obj = { user: item, channel, isActionSheet: flag, onPress };
          return closure_21(VoiceMemberUser.DisconnectedUserRow, obj);
        }
      }, items7);
      if (flag) {
        const obj9 = { theme: ThemeTypes.DARK, children: closure_22(items5, obj10) };
        obj10 = { style: tmp2.container, children: items8 };
        const ThemeContextProvider = tmp5(tmp4[40]).ThemeContextProvider;
        const obj11 = { channel };
        items8 = [closure_21(tmp5(tmp4[41]).VoiceChannelHeader, obj11), , ];
        const obj12 = { style: tmp2.headerFormDivider };
        items8[1] = closure_21(channel(tmp4[19]).FormDivider, obj12);
        const obj13 = {
          inActionSheet: true,
          style: tmp2.voiceChannelContainer,
          renderItem: function renderRow(arg0, arg1) {
                  let items;
                  if (null == items5[arg0].data[arg1]) {
                    return null;
                  } else {
                    const obj = { item: items5[arg0].data[arg1], section: tmp[arg0] };
                    const obj2 = { children: items };
                    items = [callback1(obj), ];
                    const obj3 = { style: rowFormDivider.rowFormDivider };
                    items[1] = closure_21(Form.FormDivider, obj3);
                    return authStore5(closure_23, obj2);
                  }
                },
          itemSize: function getRowHeight(arg0, arg1) {
                  if (null == arg1) {
                    return 0;
                  } else if (null == items5[arg0].data[arg1]) {
                    return 0;
                  } else {
                    const diff = closure_4 - 2 * VoiceMemberUser.STREAM_PREVIEW_MARGIN;
                    const sum = FORM_ROW_VERTICAL_PADDING + 32;
                    let tmp4 = sum;
                    const tmp8 = closure_4;
                    const tmp9 = require;
                    if (!(items5[arg0].data[arg1] instanceof UserRecord)) {
                      let result;
                      const tmp = undefined !== items5[arg0].data[arg1].url && undefined !== items5[arg0].data[arg1].applicationId;
                      if (tmp) {
                        const tmp9Result = tmp9(13329);
                        result = tmp9Result.calculateActivityRowHeight(tmp8);
                      } else {
                        const voiceState = tmp7.voiceState;
                        let selfStream;
                        if (voiceState != null) {
                          selfStream = voiceState.selfStream;
                        }
                        result = sum;
                        if (selfStream) {
                          result = sum + tmp12;
                        }
                      }
                      tmp4 = result;
                    }
                    return tmp4;
                  }
                },
          sections: items5.map((data) => data.data.length)
        };
        const tmp3Result2 = flag(tmp4[42]);
        const merged1 = Object.assign(merged);
        items8[2] = closure_21(tmp3Result2, obj13);
        tmp25Result = tmp25(ThemeContextProvider, obj9);
      } else {
        const obj14 = { ref, sections: items5, renderSectionHeader, renderItem: callback1, keyExtractor: extractKey, ItemSeparatorComponent: ItemSeparator, ListFooterComponent: tmp25Result2, ListHeaderComponent: closure_21(closure_25, obj16), stickySectionHeadersEnabled: false };
        tmp25Result2 = null;
        const tmp27 = set;
        if (!flag2) {
          const obj15 = { channel };
          tmp25Result2 = tmp25(closure_26, obj15);
        }
        obj16 = { channel };
        const merged2 = Object.assign(merged);
        tmp25Result = tmp25(tmp27, obj14);
      }
      return tmp25Result;
    }
  }
  let tmp11 = constants4;
  const obj17 = { type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) };
  items5.push(obj17);
  if (reduced.length > 0) {
    const obj18 = { type: tmp11.DISCONNECTED, title: null, data: reduced };
    items5.push(obj18);
  }
});
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default forwardRefResult;
