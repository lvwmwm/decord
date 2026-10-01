// Module ID: 11084
// Function ID: 11085
// Name: useMemberListAction
// Dependencies: [32, 19, 17, 2045, 4469, 4479, 1372, 9674, 1074, 21, 4836, 563, 9016, 6470, 11085, 11094, 11095, 1115, 9491, 9492, 4654, 2029, 11097, 11102, 6798, 11103, 1876, 9275, 8055, 2]
// Exports: default

// Module 11084 (useMemberListAction)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import UsersFastListConstants from "UsersFastListConstants" /* 9674 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11085 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore_mod from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_1, constants, importDefault;

let c10;
let closure_12;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let RelationshipStore = RelationshipStore_mod;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ Permissions: c10, AnalyticsSections: unpackModuleId, InstantInviteSources: closure_12 } = Constants);
const jsx = Fragment.jsx;
let closure_14 = { listActionRenderer: "Array", listActionHeight: "channel" };
let obj = { wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } };
let closure_15 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  let c3;
  let c4;
  let closure_10;
  let closure_8;
  let first;
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  _slicedToArray = undefined;
  react = undefined;
  let flag2;
  let flag3;
  let id;
  RelationshipStore = undefined;
  first = undefined;
  constants = undefined;
  let onLayout;
  let callback1;
  let tmp = closure_15();
  importDefault = tmp;
  const tmp3 = stateFromStores;
  let tmp2 = channel;
  let obj = channel(stateFromStores[11]);
  const items = [first];
  stateFromStores = obj.useStateFromStores(items, () => {
    let isDMResult;
    if (channel != null) {
      isDMResult = obj.isDM();
    }
    let tmp2 = null;
    if (isDMResult) {
      const user = UserStore.getUser(obj.getRecipientId());
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  let obj2 = id;
  const tmp5 = constants;
  let canResult = id.can(constants.MANAGE_ROLES, channel);
  if (canResult) {
    const tmp2Result = tmp2(tmp3[12]);
    canResult = tmp2Result.isPrivateGuildChannel(channel);
  }
  _slicedToArray = canResult;
  let tmp7 = null != channel && !flag;
  if (tmp7) {
    let tmp8 = canResult;
    if (!tmp8) {
      let isFriendResult;
      if (channel.isDM()) {
        let tmp10 = RelationshipStore;
        isFriendResult = RelationshipStore.isFriend(channel.getRecipientId());
      } else {
        isFriendResult = channel.isMultiUserDM() || obj2.can(tmp5.CREATE_INSTANT_INVITE, channel);
      }
      tmp8 = isFriendResult;
    }
    tmp7 = tmp8;
  }
  react = tmp7;
  flag2 = undefined;
  if (channel != null) {
    flag2 = channel.isDM();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  flag3 = undefined;
  if (channel != null) {
    flag3 = channel.isMultiUserDM();
  }
  if (flag3 == null) {
    flag3 = false;
  }
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  let tmp12 = require("useScaledRowHeight")();
  RelationshipStore = tmp12;
  [first, constants] = react.useState(undefined);
  onLayout = react.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = closure_10((arg0) => {
      let tmp = arg0;
      if (arg0 == null) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  const items1 = [id];
  callback1 = react.useCallback(() => {
    if (null != id) {
      openGroupDMAddMembersDefault(tmp, unpackModuleId.MEMBER_LIST);
    }
  }, items1);
  const items2 = [canResult, id, callback1, flag2, flag3, first, onLayout, stateFromStores, tmp12, tmp7, tmp];
  return react.useMemo(() => {
    let IconComponent;
    let formatToPlainStringResult;
    let handlePress;
    let iconSource;
    let intl4;
    let label;
    let onClick;
    let sublabel;
    if (null != id) {
      const tmp51 = c4;
      if (tmp51) {
        let tmp12;
        let tmp = flag2;
        if (tmp) {
          let obj2 = { iconSource: closure_1(stateFromStores[15]), IconComponent: channel(stateFromStores[16]).ChatPlusIcon, label: intl4.string(channel(stateFromStores[17]).t["3hF1W4"]), sublabel: formatToPlainStringResult, handlePress: callback1 };
          intl4 = channel(stateFromStores[17]).intl;
          formatToPlainStringResult = undefined;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[17]).intl;
            let obj3 = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[17]).t["Sh/xNN"], obj3);
          }
          tmp12 = obj2;
        } else {
          let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = closure_1(stateFromStores[18]);
            obj.IconComponent = channel(stateFromStores[19]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[17]).intl;
            obj.label = intl3.string(channel(stateFromStores[17]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              const tmp = id;
              if (null != flag3.getChannel(id)) {
                const obj4 = channel(stateFromStores[14]);
                const groupDMAddMembersAction = obj4.getGroupDMAddMembersAction(tmp, callback.MEMBER_LIST);
                const tmp10 = callback;
                if ("open" === groupDMAddMembersAction) {
                  const tmp8Result = channel(stateFromStores[20]);
                  if (tmp8Result.UNSAFE_isDismissibleContentDismissed(channel(stateFromStores[21]).DismissibleContent.GDM_INVITE_REMINDER)) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    closure_1(stateFromStores[22])(obj);
                  }
                } else {
                  const tmp8Result2 = channel(stateFromStores[14]);
                  const result = tmp8Result2.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp10.MEMBER_LIST);
                }
              }
            };
            tmp12 = obj;
          } else if (c3) {
            obj.iconSource = closure_1(stateFromStores[23]);
            obj.IconComponent = channel(stateFromStores[24]).SettingsIcon;
            const intl2 = channel(stateFromStores[17]).intl;
            obj.label = intl2.string(channel(stateFromStores[17]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = flag3.getChannel(id);
              if (null != channel) {
                const obj = channel(stateFromStores[25]);
                const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = closure_1(stateFromStores[18]);
            obj.IconComponent = channel(stateFromStores[19]).GroupPlusIcon;
            const intl = channel(stateFromStores[17]).intl;
            let tmp10 = channel;
            obj.label = intl.string(channel(stateFromStores[17]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = flag3.getChannel(id);
              if (null != channel) {
                const obj = channel(stateFromStores[26]);
                const result = obj.dismissGlobalKeyboard();
                const obj3 = { source: callback1.CHAT_SIDEBAR };
                const obj2 = channel(stateFromStores[27]);
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            };
            tmp12 = obj;
          }
        }
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        const RowButton = channel(stateFromStores[28]).RowButton;
        let closure_0 = <flag2 style={closure_1.wrapper} onLayout={onLayout}>{null}</flag2>;
        closure_1 = closure_8 + closure_1.wrapper.paddingTop;
        return {
          listActionRenderer() {
                return closure_0;
              },
          listActionHeight() {
                let tmp = first;
                if (first == null) {
                  tmp = closure_1;
                }
                return tmp;
              }
        };
      }
    }
    return closure_1_14;
  }, items2);
};
