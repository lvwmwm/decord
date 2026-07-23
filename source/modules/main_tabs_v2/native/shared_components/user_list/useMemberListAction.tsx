// Module ID: 10868
// Function ID: 84567
// Name: useMemberListAction
// Dependencies: [57, 31, 27, 1348, 3758, 3767, 1849, 8826, 653, 33, 4130, 1324, 624, 8413, 8832, 3981, 10869, 10870, 1212, 10196, 10195, 3946, 1334, 10872, 10877, 5791, 10878, 1820, 8481, 7498, 5165, 2]
// Exports: default

// Module 10868 (useMemberListAction)
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "dismissGlobalKeyboard";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
({ Permissions: closure_10, AnalyticsSections: closure_11, InstantInviteSources: closure_12 } = ME);
let closure_14 = { listActionRenderer: undefined, listActionHeight: undefined };
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { paddingTop: require("PX_24").USERS_LIST_PADDING_BETWEEN_SECTIONS } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let stateFromStores;
  let React;
  let c5;
  let c6;
  let c7;
  let id;
  let c9;
  let first;
  let closure_11;
  let callback;
  let callback1;
  let tmp = callback();
  importDefault = tmp;
  const tmp2 = importDefault(1324)("useMemberListAction");
  dependencyMap = tmp2;
  const items = [c9];
  stateFromStores = channel(624).useStateFromStores(items, () => {
    let tmp = null;
    if (null != channel) {
      tmp = null;
      if (channel.isDM()) {
        const user = _undefined3.getUser(channel.getRecipientId());
        let username;
        if (null != user) {
          username = user.username;
        }
        tmp = username;
      }
    }
    return tmp;
  });
  let canResult = c7.can(first.MANAGE_ROLES, channel);
  if (canResult) {
    canResult = channel(8413).isPrivateGuildChannel(channel);
    let obj2 = channel(8413);
  }
  React = canResult;
  let tmp7 = null != channel && !flag;
  if (tmp7) {
    if (canResult) {
      tmp7 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = id.isFriend(channel.getRecipientId());
    } else {
      const tmp9 = !channel.isMultiUserDM();
      isFriendResult = !tmp9;
      if (tmp9) {
        isFriendResult = c7.can(first.CREATE_INSTANT_INVITE, channel);
      }
    }
  }
  c5 = tmp7;
  let isDMResult;
  if (null != channel) {
    isDMResult = channel.isDM();
  }
  c6 = tmp16;
  let isMultiUserDMResult;
  if (null != channel) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  c7 = tmp18;
  id = undefined;
  if (null != channel) {
    id = channel.id;
  }
  const tmp20 = importDefault(8832)();
  c9 = tmp20;
  const tmp21 = stateFromStores(React.useState(undefined), 2);
  first = tmp21[0];
  closure_11 = tmp21[1];
  callback = React.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    lib((arg0) => {
      let tmp = arg0;
      if (null == arg0) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  const items1 = [id];
  callback1 = React.useCallback(() => {
    if (null != id) {
      channel(_undefined2[15]).navigateToNewGroupDM(id, lib.MEMBER_LIST);
      const obj = channel(_undefined2[15]);
    }
  }, items1);
  const items2 = [canResult, id, callback1, null != isDMResult && isDMResult, null != isMultiUserDMResult && isMultiUserDMResult, tmp2, first, callback, stateFromStores, tmp20, tmp7, tmp];
  return React.useMemo(() => {
    let IconComponent;
    let handlePress;
    let iconSource;
    let label;
    let sublabel;
    if (null != id) {
      if (c5) {
        if (c6) {
          let obj = { iconSource: _undefined(_undefined2[16]), IconComponent: channel(_undefined2[17]).ChatPlusIcon };
          const intl4 = channel(_undefined2[18]).intl;
          obj.label = intl4.string(channel(_undefined2[18]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(_undefined2[18]).intl;
            obj = { recipient: stateFromStores };
            formatToPlainStringResult = intl5.formatToPlainString(channel(_undefined2[18]).t["Sh/xNN"], obj);
          }
          obj.sublabel = formatToPlainStringResult;
          obj.handlePress = callback1;
          let tmp7 = obj;
        } else {
          obj = {};
          if (c7) {
            obj.iconSource = _undefined(_undefined2[19]);
            obj.IconComponent = channel(_undefined2[20]).GroupPlusIcon;
            const intl3 = channel(_undefined2[18]).intl;
            obj.label = intl3.string(channel(_undefined2[18]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              if (null != store.getChannel(outer1_8)) {
                let obj = channel(3946);
                if (obj.UNSAFE_isDismissibleContentDismissed(channel(1334).DismissibleContent.GDM_INVITE_REMINDER)) {
                  outer1_13();
                } else {
                  obj = { onClick: outer1_13 };
                  sum(10872)(obj);
                }
              }
            };
            tmp7 = obj;
          } else if (c4) {
            obj.iconSource = tmp4(tmp5[24]);
            obj.IconComponent = channel(tmp5[25]).SettingsIcon;
            const intl2 = channel(tmp5[18]).intl;
            obj.label = intl2.string(channel(tmp5[18]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              const channel = store.getChannel(outer1_8);
              if (null != channel) {
                const result = channel(10878).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = channel(10878);
              }
            };
            tmp7 = obj;
          } else {
            obj.iconSource = tmp4(tmp5[19]);
            obj.IconComponent = channel(tmp5[20]).GroupPlusIcon;
            const intl = channel(tmp5[18]).intl;
            obj.label = intl.string(channel(tmp5[18]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              const channel = store.getChannel(outer1_8);
              if (null != channel) {
                let obj = channel(1820);
                const result = obj.dismissGlobalKeyboard();
                obj = { source: callback.CHAT_SIDEBAR };
                const result1 = channel(8481).showInstantInviteActionSheet(channel, obj);
                const obj2 = channel(8481);
              }
            };
            tmp7 = obj;
          }
        }
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp7);
        const obj1 = { style: _undefined.wrapper, onLayout: callback };
        if (_undefined2) {
          let obj2 = {};
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
        let closure_0 = callback1(c5, obj1);
        let sum = c9 + _undefined.wrapper.paddingTop;
        if (null != first) {
          sum = first;
        }
        _undefined = sum;
        const obj6 = {
          listActionRenderer() {
                return closure_0;
              },
          listActionHeight() {
                return closure_1;
              }
        };
        return obj6;
      }
    }
    return outer1_14;
  }, items2);
};
