// Module ID: 12433
// Function ID: 12434
// Name: useMemberListAction
// Dependencies: [32, 19, 17, 5092, 5175, 5185, 1385, 10509, 1072, 21, 5243, 563, 12434, 12435, 8066, 12438, 12442, 7758, 12444, 12453, 12454, 1113, 10913, 10912, 5285, 5076, 12456, 12461, 10500, 12462, 2017, 8394, 6274, 8043, 7374, 12466, 2549, 2]
// Exports: default

// Module 12433 (useMemberListAction)
import react_native from "react-native" /* 17 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10509 */;
import isGameOrganizationInviteRecipientDefault from "isGameOrganizationInviteRecipient" /* 12434 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 12444 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ Permissions: unpackModuleId, AnalyticsSections: closure_12, InstantInviteSources: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = { listActionRenderer: "Array", listActionHeight: "flexDirection" };
let closure_17 = [];
let obj = { wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } };
let closure_18 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  let c4;
  let closure_1;
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
  let invitableGameOrganizationsFullSubLabel;
  let closure_8;
  let c9;
  let combined;
  let flag2;
  let flag3;
  let id;
  let closure_14;
  let first;
  closure_16 = undefined;
  let onLayout;
  let callback1;
  let tmp = callback1();
  importDefault = tmp;
  let tmp2 = channel;
  const tmp3 = stateFromStores;
  let obj = channel(stateFromStores[11]);
  let items = [c9];
  const tmp4 = c9;
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
  let obj3 = closure_8;
  items1[1] = closure_8;
  const tmp9 = importDefault;
  const tmp2Result = tmp2(tmp3[11]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    let tmp5Result = null != recipientId;
    if (tmp5Result) {
      const tmp5 = isGameOrganizationInviteRecipientDefault;
      const user = UserStore.getUser(tmp);
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp5Result = tmp5(user, id, RelationshipStore);
    }
    return tmp5Result;
  });
  let arr3 = require("useCanInviteGuildIds")("dm_member_list");
  let obj4 = invitableGameOrganizationsFullSubLabel;
  let tmp10 = flag2;
  let canResult = invitableGameOrganizationsFullSubLabel.can(flag2.MANAGE_ROLES, channel);
  if (canResult) {
    const tmp2Result4 = tmp2(tmp3[14]);
    canResult = tmp2Result4.isPrivateGuildChannel(channel);
  }
  react = canResult;
  let tmp12 = null != channel && !flag;
  if (tmp12) {
    let tmp13 = canResult;
    if (!tmp13) {
      let isFriendResult;
      if (channel.isDM()) {
        isFriendResult = obj3.isFriend(channel.getRecipientId());
      } else {
        isFriendResult = channel.isMultiUserDM() || obj4.can(tmp10.CREATE_INSTANT_INVITE, channel);
      }
      tmp13 = isFriendResult;
    }
    tmp12 = tmp13;
  }
  c5 = tmp12;
  let tmp15 = !flag && stateFromStores1;
  if (tmp15) {
    tmp15 = arr3.length > 0;
  }
  closure_6 = tmp15;
  const useInvitableGameOrganizationsFetch = tmp2(tmp3[15]).useInvitableGameOrganizationsFetch;
  tmp2(tmp3[15]);
  if (!tmp15) {
    arr3 = onLayout;
  }
  const data = useInvitableGameOrganizationsFetch(arr3).data;
  const tmp2Result6 = tmp2(tmp3[16]);
  invitableGameOrganizationsFullSubLabel = tmp2Result6.getInvitableGameOrganizationsFullSubLabel(tmp9(tmp3[16])(data));
  closure_8 = tmp18;
  let num2 = 0;
  if (tmp12) {
    num2 = 1;
  }
  let num3 = 0;
  if (tmp15) {
    num3 = 1;
  }
  const sum = num2 + num3;
  c9 = sum;
  combined = "" + sum + ":" + null != invitableGameOrganizationsFullSubLabel;
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
  const tmp22 = tmp9(tmp3[17])();
  closure_14 = tmp22;
  const tmp23 = recipientId(react.useState(undefined), 2);
  first = tmp23[0];
  closure_16 = tmp23[1];
  const items2 = [combined];
  onLayout = react.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = closure_16((arg0) => {
      let tmp = arg0;
      let layoutKey;
      if (arg0 != null) {
        layoutKey = tmp.layoutKey;
      }
      if (layoutKey !== combined) {
        tmp = { layoutKey: tmp3, height };
        const obj = { layoutKey: tmp3, height };
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
  const items4 = [sum, canResult, id, combined, callback1, flag2, flag3, invitableGameOrganizationsFullSubLabel, first, onLayout, recipientId, stateFromStores, tmp22, tmp18, tmp15, tmp12, tmp];
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
      const tmp75 = closure_8;
      if (tmp75) {
        let tmp12;
        let tmp = flag2;
        if (tmp) {
          let obj2 = { iconSource: height(stateFromStores[19]), IconComponent: channel(stateFromStores[20]).ChatPlusIcon, label: intl4.string(channel(stateFromStores[21]).t["3hF1W4"]), sublabel: formatToPlainStringResult, handlePress: callback1 };
          intl4 = channel(stateFromStores[21]).intl;
          formatToPlainStringResult = undefined;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[21]).intl;
            let obj3 = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[21]).t["Sh/xNN"], obj3);
          }
          tmp12 = obj2;
        } else {
          let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = height(stateFromStores[22]);
            obj.IconComponent = channel(stateFromStores[23]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[21]).intl;
            obj.label = intl3.string(channel(stateFromStores[21]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              const tmp = id;
              if (null != closure_6.getChannel(id)) {
                const obj4 = channel(stateFromStores[18]);
                const groupDMAddMembersAction = obj4.getGroupDMAddMembersAction(tmp, flag3.MEMBER_LIST);
                const tmp10 = flag3;
                if ("open" === groupDMAddMembersAction) {
                  const tmp8Result = channel(stateFromStores[24]);
                  if (tmp8Result.UNSAFE_isDismissibleContentDismissed(channel(stateFromStores[25]).DismissibleContent.GDM_INVITE_REMINDER)) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    height(stateFromStores[26])(obj);
                  }
                } else {
                  const tmp8Result2 = channel(stateFromStores[18]);
                  const result = tmp8Result2.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp10.MEMBER_LIST);
                }
              }
            };
            tmp12 = obj;
          } else if (c4) {
            obj.iconSource = height(stateFromStores[27]);
            obj.IconComponent = channel(stateFromStores[28]).SettingsIcon;
            const intl2 = channel(stateFromStores[21]).intl;
            obj.label = intl2.string(channel(stateFromStores[21]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(id);
              if (null != channel) {
                const obj = channel(stateFromStores[29]);
                const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = height(stateFromStores[22]);
            obj.IconComponent = channel(stateFromStores[23]).GroupPlusIcon;
            const intl = channel(stateFromStores[21]).intl;
            let tmp10 = channel;
            obj.label = intl.string(channel(stateFromStores[21]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(closure_1_13);
              if (null != channel) {
                const obj = channel(stateFromStores[30]);
                const result = obj.dismissGlobalKeyboard();
                const obj3 = { source: id.CHAT_SIDEBAR };
                const obj2 = channel(stateFromStores[31]);
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            };
            tmp12 = obj;
          }
        }
        let obj4 = { style: height.wrapper, onLayout, children: tmp46(Stack, obj5) };
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        let tmp42Result = null;
        obj5 = { spacing: combined, children: items };
        Stack = channel(stateFromStores[32]).Stack;
        const tmp43 = c5;
        const tmp44 = height;
        tmp46 = first;
        const tmp49 = combined;
        if (c5) {
          const obj6 = { icon: closure_14(channel(stateFromStores[33]).RowButton.Icon, obj7), onPress: handlePress, label, subLabel: sublabel, arrow: true };
          const RowButton = channel(stateFromStores[33]).RowButton;
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
                        return height(stateFromStores[35])(recipientId);
                      },
              label: intl6.string(height(stateFromStores[36])["wkSug+"]),
              subLabel: invitableGameOrganizationsFullSubLabel,
              disabled: null != invitableGameOrganizationsFullSubLabel,
              arrow: true
            };
            const RowButton2 = channel(stateFromStores[33]).RowButton;
            obj9 = { IconComponent: channel(stateFromStores[34]).GameControllerIcon };
            Icon = channel(stateFromStores[33]).RowButton.Icon;
            intl6 = channel(stateFromStores[21]).intl;
            tmp42Result2 = tmp42(RowButton2, obj8);
          }
        }
        items[1] = tmp42Result2;
        let closure_0 = tmp42(tmp43, obj4);
        height = c9 * closure_14 + (c9 - 1) * tmp49 + tmp44.wrapper.paddingTop;
        let layoutKey;
        if (first != null) {
          layoutKey = tmp72.layoutKey;
        }
        if (layoutKey === combined) {
          height = tmp72.height;
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
    return closure_16;
  }, items4);
};
