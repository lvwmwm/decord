// Module ID: 11585
// Function ID: 11586
// Name: useMemberListAction
// Dependencies: [32, 19, 17, 4858, 4941, 4951, 1384, 10714, 1072, 21, 5009, 563, 11586, 9022, 7211, 11589, 11598, 11599, 1114, 10959, 10958, 5039, 4842, 11601, 11606, 7555, 11607, 1889, 9099, 6022, 8171, 9707, 11611, 2405, 2]
// Exports: default

// Module 11585 (useMemberListAction)
import react_native from "react-native" /* 17 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10714 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11589 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore_mod from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let constants, importDefault;

let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
let PermissionStore = PermissionStore_mod;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ Permissions: unpackModuleId, AnalyticsSections: closure_12, InstantInviteSources: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = { listActionRenderer: "color", listActionHeight: "Error" };
let obj = { wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } };
let closure_17 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  let c4;
  let closure_1;
  let closure_7;
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let recipientId;
  react = undefined;
  let c5;
  let closure_6;
  PermissionStore = undefined;
  let c8;
  let flag2;
  let flag3;
  let id;
  constants = undefined;
  let first;
  let closure_14;
  let onLayout;
  let callback1;
  let tmp = closure_17();
  importDefault = tmp;
  let tmp2 = channel;
  let tmp3 = stateFromStores;
  let obj = channel(stateFromStores[11]);
  let items = [flag2];
  const tmp4 = flag2;
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
  let isDMResult;
  if (channel != null) {
    isDMResult = channel.isDM();
  }
  recipientId = null;
  if (true === isDMResult) {
    recipientId = channel.getRecipientId();
  }
  const items1 = [tmp4, ];
  let obj3 = c8;
  items1[1] = c8;
  const tmp2Result = tmp2(tmp3[11]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    if (null == recipientId) {
      return false;
    } else {
      const user = UserStore.getUser(tmp);
      const tmp3 = null != user && !user.bot && !user.isSystemUser() && !RelationshipStore.isBlocked(tmp);
      return tmp3;
    }
  });
  const tmp9 = importDefault;
  let obj4 = PermissionStore;
  let tmp10 = require("useCanInviteToAnyLinkedGameOrganization")("dm_member_list");
  let canResult = PermissionStore.can(id.MANAGE_ROLES, channel);
  const tmp11 = id;
  if (canResult) {
    const tmp2Result2 = tmp2(tmp3[13]);
    canResult = tmp2Result2.isPrivateGuildChannel(channel);
  }
  react = canResult;
  let tmp13 = null != channel && !flag;
  if (tmp13) {
    let tmp14 = canResult;
    if (!tmp14) {
      let isFriendResult;
      if (channel.isDM()) {
        isFriendResult = obj3.isFriend(channel.getRecipientId());
      } else {
        isFriendResult = channel.isMultiUserDM() || obj4.can(tmp11.CREATE_INSTANT_INVITE, channel);
      }
      tmp14 = isFriendResult;
    }
    tmp13 = tmp14;
  }
  c5 = tmp13;
  closure_6 = tmp16;
  PermissionStore = tmp17;
  let num = 0;
  if (tmp13) {
    num = 1;
  }
  let num2 = 0;
  if (!flag && stateFromStores1 && tmp10) {
    num2 = 1;
  }
  const sum = num + num2;
  c8 = sum;
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
  const tmp20 = tmp9(tmp3[14])();
  constants = tmp20;
  const tmp21 = recipientId(react.useState(undefined), 2);
  first = tmp21[0];
  closure_14 = tmp21[1];
  const items2 = [sum];
  onLayout = react.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = closure_14((arg0) => {
      let tmp = arg0;
      let actionCount;
      if (arg0 != null) {
        actionCount = tmp.actionCount;
      }
      if (actionCount !== c8) {
        tmp = { actionCount: tmp3, height };
        const obj = { actionCount: tmp3, height };
      }
      return tmp;
    });
  }, items2);
  const items3 = [id];
  callback1 = react.useCallback(() => {
    if (null != id) {
      openGroupDMAddMembersDefault(tmp, constants.MEMBER_LIST);
    }
  }, items3);
  const items4 = [sum, canResult, id, callback1, flag2, flag3, first, onLayout, recipientId, stateFromStores, tmp20, tmp17, tmp16, tmp13, tmp];
  return react.useMemo(() => {
    let Icon;
    let IconComponent;
    let Stack;
    let formatToPlainStringResult;
    let handlePress;
    let height;
    let iconSource;
    let intl4;
    let intl6;
    let items;
    let label;
    let obj5;
    let obj7;
    let obj9;
    let onClick;
    let sublabel;
    let tmp46;
    if (null != id) {
      const tmp73 = closure_7;
      if (tmp73) {
        let tmp12;
        let tmp = flag2;
        if (tmp) {
          let obj2 = { iconSource: height(stateFromStores[16]), IconComponent: channel(stateFromStores[17]).ChatPlusIcon, label: intl4.string(channel(stateFromStores[18]).t["3hF1W4"]), sublabel: formatToPlainStringResult, handlePress: callback1 };
          intl4 = channel(stateFromStores[18]).intl;
          formatToPlainStringResult = undefined;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[18]).intl;
            let obj3 = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[18]).t["Sh/xNN"], obj3);
          }
          tmp12 = obj2;
        } else {
          let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = height(stateFromStores[19]);
            obj.IconComponent = channel(stateFromStores[20]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[18]).intl;
            obj.label = intl3.string(channel(stateFromStores[18]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              const tmp = id;
              if (null != closure_6.getChannel(id)) {
                const obj4 = channel(stateFromStores[15]);
                const groupDMAddMembersAction = obj4.getGroupDMAddMembersAction(tmp, constants.MEMBER_LIST);
                const tmp10 = constants;
                if ("open" === groupDMAddMembersAction) {
                  const tmp8Result = channel(stateFromStores[21]);
                  if (tmp8Result.UNSAFE_isDismissibleContentDismissed(channel(stateFromStores[22]).DismissibleContent.GDM_INVITE_REMINDER)) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    height(stateFromStores[23])(obj);
                  }
                } else {
                  const tmp8Result2 = channel(stateFromStores[15]);
                  const result = tmp8Result2.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp10.MEMBER_LIST);
                }
              }
            };
            tmp12 = obj;
          } else if (c4) {
            obj.iconSource = height(stateFromStores[24]);
            obj.IconComponent = channel(stateFromStores[25]).SettingsIcon;
            const intl2 = channel(stateFromStores[18]).intl;
            obj.label = intl2.string(channel(stateFromStores[18]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(id);
              if (null != channel) {
                const obj = channel(stateFromStores[26]);
                const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = height(stateFromStores[19]);
            obj.IconComponent = channel(stateFromStores[20]).GroupPlusIcon;
            const intl = channel(stateFromStores[18]).intl;
            let tmp10 = channel;
            obj.label = intl.string(channel(stateFromStores[18]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(id);
              if (null != channel) {
                const obj = channel(stateFromStores[27]);
                const result = obj.dismissGlobalKeyboard();
                const obj3 = { source: first.CHAT_SIDEBAR };
                const obj2 = channel(stateFromStores[28]);
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            };
            tmp12 = obj;
          }
        }
        let obj4 = { style: height.wrapper, onLayout, children: tmp46(Stack, obj5) };
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        let tmp42Result = null;
        obj5 = { spacing: flag3, children: items };
        Stack = channel(stateFromStores[29]).Stack;
        const tmp43 = c5;
        const tmp44 = height;
        tmp46 = onLayout;
        const tmp49 = flag3;
        if (c5) {
          const obj6 = { icon: closure_14(channel(stateFromStores[30]).RowButton.Icon, obj7), onPress: handlePress, label, subLabel: sublabel, arrow: true };
          const RowButton = channel(stateFromStores[30]).RowButton;
          obj7 = { source: iconSource, IconComponent };
          tmp42Result = tmp42(RowButton, obj6);
        }
        items = [tmp42Result, ];
        let tmp42Result2 = null;
        if (closure_6) {
          tmp42Result2 = null;
          if (null != recipientId) {
            const obj8 = {
              icon: closure_14(Icon, obj9),
              onPress() {
                        return height(stateFromStores[32])(recipientId);
                      },
              label: intl6.string(height(stateFromStores[33])["wkSug+"]),
              arrow: true
            };
            const RowButton2 = channel(stateFromStores[30]).RowButton;
            obj9 = { IconComponent: channel(stateFromStores[31]).GameControllerIcon };
            Icon = channel(stateFromStores[30]).RowButton.Icon;
            intl6 = channel(stateFromStores[18]).intl;
            tmp42Result2 = tmp42(RowButton2, obj8);
          }
        }
        items[1] = tmp42Result2;
        let closure_0 = tmp42(tmp43, obj4);
        height = c8 * constants + (c8 - 1) * tmp49 + tmp44.wrapper.paddingTop;
        let actionCount;
        const tmp69 = c8;
        if (first != null) {
          actionCount = tmp71.actionCount;
        }
        if (actionCount === tmp69) {
          height = tmp71.height;
        }
        return {
          listActionRenderer() {
                return closure_0;
              },
          listActionHeight() {
                return height;
              }
        };
      }
    }
    return callback1;
  }, items4);
};
