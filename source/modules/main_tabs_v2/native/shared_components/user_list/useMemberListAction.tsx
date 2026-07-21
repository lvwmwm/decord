// Module ID: 10857
// Function ID: 84505
// Name: useMemberListAction
// Dependencies: []
// Exports: default

// Module 10857 (useMemberListAction)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ Permissions: closure_10, AnalyticsSections: closure_11, InstantInviteSources: closure_12 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
let closure_14 = { listActionRenderer: undefined, listActionHeight: undefined };
const tmp2 = arg1(dependencyMap[8]);
let closure_15 = arg1(dependencyMap[10]).createStyles({ wrapper: { paddingTop: arg1(dependencyMap[7]).USERS_LIST_PADDING_BETWEEN_SECTIONS } });
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  let View;
  let closure_6;
  let closure_7;
  let friend;
  let closure_9;
  let first;
  let closure_11;
  callback = undefined;
  let jsx;
  const tmp = callback2();
  importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[11])("useMemberListAction");
  dependencyMap = tmp2;
  const items = [closure_9];
  const stateFromStores = arg1(dependencyMap[12]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != channel) {
      tmp = null;
      if (channel.isDM()) {
        const user = tmp20.getUser(channel.getRecipientId());
        let username;
        if (null != user) {
          username = user.username;
        }
        tmp = username;
      }
    }
    return tmp;
  });
  callback = stateFromStores;
  let canResult = closure_7.can(first.MANAGE_ROLES, channel);
  if (canResult) {
    canResult = arg1(dependencyMap[13]).isPrivateGuildChannel(channel);
    const obj2 = arg1(dependencyMap[13]);
  }
  React = canResult;
  let tmp7 = null != channel && !flag;
  if (tmp7) {
    if (canResult) {
      tmp7 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = friend.isFriend(channel.getRecipientId());
    } else {
      const tmp9 = !channel.isMultiUserDM();
      isFriendResult = !tmp9;
      if (tmp9) {
        isFriendResult = closure_7.can(first.CREATE_INSTANT_INVITE, channel);
      }
    }
  }
  View = tmp7;
  let isDMResult;
  if (null != channel) {
    isDMResult = channel.isDM();
  }
  closure_6 = tmp16;
  let isMultiUserDMResult;
  if (null != channel) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  closure_7 = tmp18;
  let id;
  if (null != channel) {
    id = channel.id;
  }
  friend = id;
  const tmp20 = importDefault(dependencyMap[14])();
  closure_9 = tmp20;
  const tmp21 = callback(React.useState(undefined), 2);
  first = tmp21[0];
  closure_11 = tmp21[1];
  callback = React.useCallback((nativeEvent) => {
    const channel = nativeEvent.nativeEvent.layout.height;
    lib((arg0) => {
      let tmp = arg0;
      if (null == arg0) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  const items1 = [id];
  const callback1 = React.useCallback(() => {
    if (null != id) {
      channel(tmp2[15]).navigateToNewGroupDM(id, lib.MEMBER_LIST);
      const obj = channel(tmp2[15]);
    }
  }, items1);
  jsx = callback1;
  const items2 = [canResult, id, callback1, null != isDMResult && isDMResult, null != isMultiUserDMResult && isMultiUserDMResult, tmp2, first, callback, stateFromStores, tmp20, tmp7, tmp];
  return React.useMemo(() => {
    let IconComponent;
    let handlePress;
    let iconSource;
    let label;
    let sublabel;
    if (null != id) {
      if (tmp7) {
        let tmp = tmp16;
        if (tmp16) {
          let obj = { iconSource: tmp(tmp2[16]), IconComponent: channel(tmp2[17]).ChatPlusIcon };
          const intl4 = channel(tmp2[18]).intl;
          obj.label = intl4.string(channel(tmp2[18]).t.3hF1W4);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(tmp2[18]).intl;
            obj = { recipient: stateFromStores };
            formatToPlainStringResult = intl5.formatToPlainString(channel(tmp2[18]).t.Sh/xNN, obj);
          }
          obj.sublabel = formatToPlainStringResult;
          obj.handlePress = callback1;
          let tmp7 = obj;
        } else {
          obj = {};
          if (tmp18) {
            obj.iconSource = tmp(tmp2[19]);
            obj.IconComponent = channel(tmp2[20]).GroupPlusIcon;
            const intl3 = channel(tmp2[18]).intl;
            obj.label = intl3.string(channel(tmp2[18]).t.LR+Ptf);
            obj.handlePress = function handlePress() {
              if (null != store.getChannel(closure_8)) {
                let obj = callback(closure_2[21]);
                if (obj.UNSAFE_isDismissibleContentDismissed(callback(closure_2[22]).DismissibleContent.GDM_INVITE_REMINDER)) {
                  callback2();
                } else {
                  obj = { onClick: callback2 };
                  sum(closure_2[23])(obj);
                }
              }
            };
            tmp7 = obj;
          } else if (canResult) {
            obj.iconSource = tmp4(tmp5[24]);
            obj.IconComponent = channel(tmp5[25]).SettingsIcon;
            const intl2 = channel(tmp5[18]).intl;
            obj.label = intl2.string(channel(tmp5[18]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              const channel = store.getChannel(closure_8);
              if (null != channel) {
                const result = callback(closure_2[26]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = callback(closure_2[26]);
              }
            };
            tmp7 = obj;
          } else {
            obj.iconSource = tmp4(tmp5[19]);
            obj.IconComponent = channel(tmp5[20]).GroupPlusIcon;
            const intl = channel(tmp5[18]).intl;
            obj.label = intl.string(channel(tmp5[18]).t.Ab/6S0);
            obj.handlePress = function handlePress() {
              const channel = store.getChannel(closure_8);
              if (null != channel) {
                let obj = callback(closure_2[27]);
                const result = obj.dismissGlobalKeyboard();
                obj = { source: constants.CHAT_SIDEBAR };
                const result1 = callback(closure_2[28]).showInstantInviteActionSheet(channel, obj);
                const obj2 = callback(closure_2[28]);
              }
            };
            tmp7 = obj;
          }
        }
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp7);
        const obj1 = { style: tmp.wrapper, onLayout: callback };
        if (tmp2) {
          const obj2 = {};
          const obj3 = { source: iconSource, IconComponent };
          obj2.icon = tmp26(tmp27(tmp28[29]).RowButton.Icon, obj3);
          obj2.onPress = handlePress;
          obj2.label = label;
          obj2.subLabel = sublabel;
          obj2.arrow = true;
          let tmp26Result = tmp26(tmp27(tmp28[29]).RowButton, obj2);
        } else {
          const obj4 = {};
          const obj5 = { source: iconSource, IconComponent };
          obj4.icon = tmp26(tmp27(tmp28[29]).RowButton.Icon, obj5);
          obj4.onPress = handlePress;
          obj4.label = label;
          obj4.subLabel = sublabel;
          obj4.start = true;
          obj4.end = true;
          obj4.arrow = true;
          tmp26Result = tmp26(tmp27(tmp28[30]).TableRow, obj4);
        }
        obj1.children = tmp26Result;
        const channel = callback1(tmp7, obj1);
        let sum = tmp20 + tmp.wrapper.paddingTop;
        if (null != first) {
          sum = first;
        }
        tmp = sum;
        const obj6 = {
          listActionRenderer() {
                return closure_0;
              },
          listActionHeight() {
                return sum;
              }
        };
        return obj6;
      }
    }
    return closure_14;
  }, items2);
};
