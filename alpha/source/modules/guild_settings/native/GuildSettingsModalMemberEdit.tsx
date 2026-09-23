// Module ID: 12171
// Function ID: 12172
// Name: GuildSettingsModalMemberEdit
// Dependencies: [19, 17, 2060, 2100, 2105, 2099, 2064, 4462, 1372, 12172, 1074, 21, 4827, 576, 4467, 12, 5907, 12173, 5908, 1115, 5990, 4533, 7705, 5927, 4671, 4823, 9631, 4449, 8947, 5269, 1177, 6934, 12174, 12175, 4520, 12180, 1484, 504, 38, 9596, 7639, 7371, 12185, 12187, 5901, 7331, 2]
// Exports: default

// Module 12171 (GuildSettingsModalMemberEdit)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PermissionUtilsAll from "PermissionUtils" /* 4467 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import UserUtilsDefault from "UserUtils" /* 4671 */;
import Text_Text from "Text/Text" /* 4823 */;
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import HeaderActionButton from "HeaderActionButton" /* 7705 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 9596 */;
import GuildSettingsModalMembersActionCreatorsDefault from "GuildSettingsModalMembersActionCreators" /* 12174 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 12175 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 12180 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4462 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsModalMembersStore from "GuildSettingsModalMembersStore" /* 12172 */;

require = fn;
class GuildSettingsModalMemberEditScene {
  constructor(arg0) {
    guildId = global.guildId;
    userId = global.userId;
    closure_2 = undefined;
    closure_3 = undefined;
    user = undefined;
    ({ onClose, contentContainerStyle } = global);
    tmp = guildId;
    tmp2 = closure_3;
    obj = guildId(closure_3[36]);
    navigation = obj.useNavigation();
    closure_2 = navigation;
    obj2 = guildId(closure_3[37]);
    items = [];
    items[0] = closure_11;
    stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
    closure_3 = stateFromStores;
    obj3 = guildId(closure_3[37]);
    items1 = [];
    items1[0] = closure_10;
    stateFromStores1 = obj3.useStateFromStores(items1, () => GuildRoleStore.getSortedRoles(guildId));
    obj4 = guildId(closure_3[37]);
    items2 = [];
    items2[0] = closure_13;
    stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
      const currentUser = UserStore.getCurrentUser();
      _modDef38(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      return { user: UserStore.getUser(userId), currentUser };
    });
    user = stateFromStoresObject.user;
    currentUser = stateFromStoresObject.currentUser;
    effect = user.useEffect(() => {
      userId(stateFromStores[32]).startEditingNickname();
      return () => {
        userId(stateFromStores[32]).stopEditingRoles();
      };
    }, []);
    obj5 = guildId(closure_3[37]);
    items3 = [, , , , ];
    items3[0] = closure_14;
    items3[1] = closure_9;
    items3[2] = closure_12;
    items3[3] = closure_13;
    items3[4] = closure_11;
    stateFromStoresObject1 = obj5.useStateFromStoresObject(items3, () => {
      const obj = { member: GuildMemberStore.getMember(guildId, userId), nicknameError: GuildSettingsModalMembersStore.nicknameError, editRoles: GuildSettingsModalMembersStore.roles, isEditing: GuildSettingsModalMembersStore.isEditing, submitting: GuildSettingsModalMembersStore.isSubmitting, canChangeNick: null, canManageRoles: null, canKick: null, canBan: null, canDisableCommunication: null };
      let canManageUserResult = null != stateFromStores;
      if (canManageUserResult) {
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        canManageUserResult = PermissionStore.canManageUser(constants.MANAGE_NICKNAMES, user, tmp);
      }
      obj.canChangeNick = canManageUserResult;
      obj.canManageRoles = PermissionStore.can(constants.MANAGE_ROLES, stateFromStores);
      let canManageUserResult1 = null != tmp;
      if (canManageUserResult1) {
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        canManageUserResult1 = obj2.canManageUser(tmp7.KICK_MEMBERS, user, tmp);
      }
      obj.canKick = canManageUserResult1;
      let canManageUserResult2 = null != tmp;
      if (canManageUserResult2) {
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        canManageUserResult2 = obj2.canManageUser(tmp7.BAN_MEMBERS, user, tmp);
      }
      obj.canBan = canManageUserResult2;
      let id;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      let id1;
      if (user != null) {
        id1 = user.id;
      }
      const items = [UserStore, GuildStore, PermissionStore];
      obj.canDisableCommunication = useCanToggleCommunicationDisableOnUser.canToggleCommunicationDisableOnUser(id, id1, items);
      return obj;
    });
    obj6 = guildId(closure_3[40]);
    items4 = [];
    items4[0] = userId;
    subscribeGuildMembers = obj6.useSubscribeGuildMembers({ [guildId]: items4 }, "GuildSettingsModalMemberEdit");
    [][0] = navigation;
    tmp11 = null;
    if (null != currentUser) {
      tmp11 = null;
      if (null != stateFromStores) {
        tmp11 = null;
        if (null != user) {
          tmp12 = jsxs;
          tmp13 = Fragment;
          obj1 = { children: null };
          tmp14 = jsx;
          tmp15 = GuildSettingsModalMemberEdit;
          obj9 = {};
          tmp16 = obj9;
          tmp17 = stateFromStoresObject1;
          merged = Object.assign(stateFromStoresObject1);
          obj9.onClose = onClose;
          obj9.handleSuccessfulRemoval = tmp10;
          obj9.guild = stateFromStores;
          obj9.sortedGuildRoles = stateFromStores1;
          obj9.currentUser = currentUser;
          obj9.user = user;
          obj9.navigation = navigation;
          obj9.contentContainerStyle = contentContainerStyle;
          items5 = [, ];
          items5[0] = jsx(GuildSettingsModalMemberEdit, obj9);
          items5[1] = jsx(tmp(tmp2[41]).NavScrim, {});
          obj1.children = items5;
          tmp11 = jsxs(Fragment, obj1);
        }
      }
    }
    return tmp11;
  }
}
const View = fn(17).View;
const GuildRecord = fn(2060);
({ isGuildOwner: metroRequire, isGuildOwnerWithRequiredMfaLevel: closure_7 } = GuildRecord);
const isEveryoneRole = fn(2100).isEveryoneRole;
const Constants = fn(1074);
({ Permissions: closure_15, GuildFeatures: closure_16, GuildSettingsSections: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { form: { flex: 1 }, formContent: { paddingTop: 16 }, stackPadding: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING }, userInfo: { height: 63 }, avatar: { width: 40, height: 40 }, rowLabel: { flexDirection: "row" }, ctaButton: { marginTop: 8, marginBottom: 8 }, actionButtonLeft: { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 }, actionButtonRight: { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 }, actionButtonContainer: { flexBasis: "auto" } };
let closure_21 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class RolesList extends PureComponent {
  constructor(arg0) {
    tmp = new RolesList(global, new.target);
    tmp.state = { isEditingProp: global.isEditing };
    return tmp;
  }
}
RolesList["getDerivedStateFromProps"] = function getDerivedStateFromProps(isEditing, isEditingProp) {
  isEditing = isEditing.isEditing;
  let tmp = null;
  if (isEditingProp.isEditingProp !== isEditing) {
    const obj = { isEditingProp: isEditing };
    tmp = obj;
  }
  return tmp;
};
RolesList.prototype["render"] = function render() {
  const props = this.props;
  const guild = props.guild;
  ({ sortedGuildRoles, roles: importDefault, currentUserId } = props);
  const onToggleRole = props.onToggleRole;
  if (props.isEditing) {
    const highestRole = currentUserId(onToggleRole[14]).getHighestRole(guild, currentUserId);
    const obj2 = currentUserId(onToggleRole[14]);
    const found = require("module_12")(sortedGuildRoles).filter((item) => !isEveryoneRole(item));
    const found1 = found.filter((managed) => !managed.managed);
    const found2 = found1.filter((item) => PermissionUtilsAll.isRoleHigher(guild, currentUserId, closure_4, item));
    const arr4 = require("module_12")(sortedGuildRoles);
    let valueResult = found2.map((id) => {
      const tmp = -1 !== closure_1.indexOf(id.id);
      closure_1 = tmp;
      const obj = {
        checked: tmp,
        label: closure_1_18(require("RoleName"), { role: id, textVariant: "text-md/semibold", dotBackground: true, children: id.name }),
        onPress() {
          return onToggleRole(id.id, !closure_1);
        }
      };
      return closure_1_18(guild(onToggleRole[16]).TableCheckboxRow, obj, id.id);
    }).value();
    let tmp3 = onToggleRole;
    const iter2 = found2.map((id) => {
      const tmp = -1 !== closure_1.indexOf(id.id);
      closure_1 = tmp;
      const obj = {
        checked: tmp,
        label: closure_1_18(require("RoleName"), { role: id, textVariant: "text-md/semibold", dotBackground: true, children: id.name }),
        onPress() {
          return onToggleRole(id.id, !closure_1);
        }
      };
      return closure_1_18(guild(onToggleRole[16]).TableCheckboxRow, obj, id.id);
    });
  } else {
    tmp3 = onToggleRole;
    const found3 = require("module_12")(sortedGuildRoles).filter((id) => importDefault.includes(id.id));
    const arr = require("module_12")(sortedGuildRoles);
    const valueResult2 = found3.map((role) => {
      const obj = { label: closure_1_18(require("RoleName"), { role, textVariant: "text-md/semibold", dotBackground: true, children: role.name }) };
      return closure_1_18(guild(onToggleRole[18]).TableRow, obj, role.id);
    }).value();
    let obj = { label: null, onPress: null };
    const intl = guild(onToggleRole[19]).intl;
    obj.label = intl.string(guild(onToggleRole[19]).t["+riKdA"]);
    obj.onPress = tmp;
    valueResult2.push(closure_18(guild(onToggleRole[18]).TableRow, obj, "addition"));
    valueResult = valueResult2;
    const iter = found3.map((role) => {
      const obj = { label: closure_1_18(require("RoleName"), { role, textVariant: "text-md/semibold", dotBackground: true, children: role.name }) };
      return closure_1_18(guild(onToggleRole[18]).TableRow, obj, role.id);
    });
  }
  const obj3 = { title: null, hasIcons: false, children: null };
  const intl2 = guild(tmp3[19]).intl;
  obj3.title = intl2.string(guild(tmp3[19]).t["LPJmL/"]);
  obj3.children = valueResult;
  return closure_18(guild(tmp3[20]).TableRowGroup, obj3);
};
RolesList.defaultProps = { roles: [] };
const PureComponent2 = noop.PureComponent;
class GuildSettingsModalMemberEdit extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    member = applyArgumentsResult.props.member;
    nick = undefined;
    if (member != null) {
      nick = member.nick;
    }
    applyArgumentsResult.state = { nick };
    applyArgumentsResult.handleChangeNickname = function handleChangeNickname(nick) {
      applyArgumentsResult.setState({ nick });
    };
    applyArgumentsResult.handleSaveNickname = function handleSaveNickname() {
      if (null != applyArgumentsResult.state.nick) {
        let id = null;
        if (tmp.props.currentUser.id !== tmp.props.user.id) {
          id = tmp.props.user.id;
        }
        GuildSettingsModalMembersActionCreatorsDefault.changeNickname(tmp.props.guild.id, id, tmp.state.nick);
      }
    };
    applyArgumentsResult.handleStartEditingRoles = function handleStartEditingRoles() {
      GuildSettingsModalMembersActionCreatorsDefault.startEditingRoles(applyArgumentsResult.props.guild.id, applyArgumentsResult.props.user.id);
    };
    applyArgumentsResult.handleToggleRole = function handleToggleRole(roleId, state) {
      GuildSettingsModalMembersActionCreatorsDefault.toggleRole(roleId, state);
    };
    applyArgumentsResult.handleSetCommunicationDisabled = function handleSetCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      const result = GuildDisableCommunicationActionCreators.openDisableCommunication({ guildId: guild.id, userId: user.id });
    };
    applyArgumentsResult.handleClearCommunicationDisabled = function handleClearCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      const result = GuildDisableCommunicationActionCreators.openEnableCommunication({ guildId: guild.id, userId: user.id });
    };
    applyArgumentsResult.handleKick = function handleKick() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(constants3.MEMBER_KICK, { userId: props.user.id, onKick: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleBan = function handleBan() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(constants3.MEMBER_BAN, { userId: props.user.id, onBan: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleTransferOwnership = function handleTransferOwnership() {
      const props = applyArgumentsResult.props;
      const guild = props.guild;
      const features = guild.features;
      if (!features.has(constants2.VERIFIED)) {
        const features2 = guild.features;
        if (!features2.has(constants2.PARTNERED)) {
          TransferOwnershipModalActionCreatorsDefault.open(guild, props.user);
        }
      }
      const result = ToastUtils.transferOwnershipProtected();
    };
    applyArgumentsResult.handleSaveMemberRoles = function handleSaveMemberRoles() {
      if (null != applyArgumentsResult.props.editRoles) {
        GuildSettingsModalMembersActionCreatorsDefault.updateMemberRoles(tmp.props.guild.id, tmp.props.user.id, tmp.props.editRoles);
      }
    };
    applyArgumentsResult.handleCancelEditMemberRoles = function handleCancelEditMemberRoles() {
      GuildSettingsModalMembersActionCreatorsDefault.stopEditingRoles();
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalMemberEdit.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigator();
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
  this.updateNavigator(arg0);
};
prototype["updateNavigator"] = function updateNavigator(submitting) {
  const self = this;
  ({ submitting, isEditing, navigation, onClose } = this.props);
  if (!tmp) {
    if (submitting) {
      let fn = () => null;
    } else if (isEditing) {
      fn = () => {
        const obj = { text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["ETE/oC"]);
        obj.onPress = self.handleCancelEditMemberRoles;
        return collapsedCategories(HeaderActionButton.HeaderActionButton, obj);
      };
    } else if (null != onClose) {
      fn = self(5927).getHeaderCloseButton(onClose);
      let obj = self(5927);
    }
    let obj2 = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (submitting) {
      let fn2 = () => closure_1_18(self(dependencyMap[23]).HeaderSubmittingIndicator, {});
    } else if (isEditing) {
      fn2 = () => {
        const obj = { text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        obj.onPress = self.handleSaveMemberRoles;
        return collapsedCategories(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    obj2.headerTitle = function headerTitle() {
      const obj = { title: null };
      const intl = util.intl;
      const obj2 = { user: UserUtilsDefault.getName(self.props.user) };
      obj.title = intl.formatToPlainString(util.t.v7odxj, obj2);
      return collapsedCategories(NavigatorHeader.NavigatorHeader, obj);
    };
    obj2 = navigation.setOptions(obj2);
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_21(this.context);
  let str = this.state.nick;
  ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
  if (null == member) {
    return null;
  } else {
    const obj2 = { style: tmp.rowLabel, children: null };
    const obj3 = { variant: "text-sm/medium", children: UserUtilsDefault.getUserTag(user) };
    const items = [collapsedCategories(Text_Text.Text, obj3), ];
    let tmp17Result = null;
    if (user.bot) {
      const obj = { verified: user.isVerifiedBot() };
      tmp17Result = tmp17(tmp20(9631), obj);
      const tmp20Result = tmp20(9631);
    }
    items[1] = tmp17Result;
    obj2.children = items;
    if (null == member) {
      let bot = timestampProducer(guild, user);
      if (!bot) {
        bot = !React5(guild, currentUser);
      }
      if (!bot) {
        bot = user.bot;
      }
      let tmp17Result3;
      if (!bot) {
        const obj4 = { hasIcons: false, children: null };
        const obj5 = { variant: "danger", label: null, onPress: null };
        const intl2 = tmp18(1115).intl;
        obj5.label = intl2.string(tmp18(1115).t.Z5s7PM);
        obj5.onPress = self.handleTransferOwnership;
        obj4.children = tmp17(tmp18(5908).TableRow, obj5);
        tmp17Result3 = tmp17(tmp18(5990).TableRowGroup, obj4);
      }
      const obj6 = { style: tmp.form, contentContainerStyle: null, children: null };
      const items1 = [tmp.formContent, self.props.contentContainerStyle];
      obj6.contentContainerStyle = items1;
      const obj7 = { style: tmp.stackPadding, spacing: tmp20(576).space.PX_24, children: null };
      const obj8 = { hasIcons: true, children: null };
      const obj9 = { icon: null, label: null };
      const obj10 = { style: tmp.avatar, user, guildId: guild.id };
      obj9.icon = tmp17(tmp18(1177).Avatar, obj10);
      obj9.label = tmp6;
      obj8.children = tmp17(tmp18(5908).TableRow, obj9);
      const items2 = [tmp17(tmp18(5990).TableRowGroup, obj8), , , , , , ];
      if (!canChangeNick) {
        canChangeNick = currentUser.id === user.id;
      }
      if (canChangeNick) {
        const obj11 = { label: null, value: null, placeholder: null, onChange: null, onBlur: null, maxLength: 32, errorMessage: null };
        const intl3 = tmp18(1115).intl;
        obj11.label = intl3.string(tmp18(1115).t["621LJD"]);
        if (str == null) {
          str = "";
        }
        obj11.value = str;
        const intl4 = tmp18(1115).intl;
        obj11.placeholder = intl4.string(tmp18(1115).t.h7UKXj);
        ({ handleChangeNickname: obj16.onChange, handleSaveNickname: obj16.onBlur } = self);
        obj11.errorMessage = tmp3;
        canChangeNick = tmp17(tmp18(6934).TextInput, obj11);
      }
      items2[1] = canChangeNick;
      if (canManageRoles) {
        const obj12 = { guild, sortedGuildRoles: tmp2, roles: null, currentUserId: null, isEditing: null, onToggleRole: null, onStartEditing: null };
        if (!isEditing) {
          editRoles = member.roles;
        }
        if (editRoles == null) {
          editRoles = [];
        }
        obj12.roles = editRoles;
        obj12.currentUserId = currentUser.id;
        obj12.isEditing = isEditing;
        ({ handleToggleRole: obj17.onToggleRole, handleStartEditingRoles: obj17.onStartEditing } = self);
        canManageRoles = tmp17(RolesList, obj12);
      }
      items2[2] = canManageRoles;
      if (canDisableCommunication) {
        canDisableCommunication = null;
      }
      items2[3] = canDisableCommunication;
      if (canKick) {
        const obj13 = { hasIcons: false, children: null };
        const obj14 = { variant: "danger", label: null, onPress: null };
        const intl5 = tmp18(1115).intl;
        const obj15 = { user: tmp20(4671).getName(user) };
        obj14.label = intl5.formatToPlainString(tmp18(1115).t.yOiJHB, obj15);
        obj14.onPress = self.handleKick;
        obj13.children = tmp17(tmp18(5908).TableRow, obj14);
        canKick = tmp17(tmp18(5990).TableRowGroup, obj13);
        const tmp20Result5 = tmp20(4671);
      }
      items2[4] = canKick;
      if (canBan) {
        const obj18 = { hasIcons: false, children: null };
        const obj19 = { variant: "danger", label: null, onPress: null };
        const intl6 = tmp18(1115).intl;
        const obj20 = { user: tmp20(4671).getName(user) };
        obj19.label = intl6.formatToPlainString(tmp18(1115).t.TuAZuW, obj20);
        obj19.onPress = self.handleBan;
        obj18.children = tmp17(tmp18(5908).TableRow, obj19);
        canBan = tmp17(tmp18(5990).TableRowGroup, obj18);
        const tmp20Result6 = tmp20(4671);
      }
      items2[5] = canBan;
      items2[6] = tmp17Result3;
      obj7.children = items2;
      obj6.children = tmp15(tmp18(5269).Stack, obj7);
      return tmp17(tmp18(8947).Form, obj6);
    } else {
      const result = tmp18(4449).isMemberCommunicationDisabled(member);
      const TableRowGroup = tmp18(5990).TableRowGroup;
      const obj21 = { hasIcons: false, children: null };
      const TableRow = tmp18(5908).TableRow;
      let obj22 = { variant: "danger", label: null, onPress: null };
      const intl = tmp18(1115).intl;
      const formatToPlainString = intl.formatToPlainString;
      let handleClearCommunicationDisabled = tmp18(1115).t;
      if (result) {
        const obj23 = { user: tmp20(4671).getName(user) };
        obj22.label = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj23);
        handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
        obj22.onPress = handleClearCommunicationDisabled;
        obj22 = tmp17(TableRow, obj22);
        obj21.children = obj22;
        let tmp17Result4 = tmp17(TableRowGroup, obj21);
        const tmp20Result7 = tmp20(4671);
      } else {
        const obj24 = { user: tmp20(4671).getName(user) };
        obj22[1] = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj24);
        obj22[2] = self.handleSetCommunicationDisabled;
        obj21.children = tmp17(TableRow, obj22);
        tmp17Result4 = tmp17(TableRowGroup, obj21);
        const tmp20Result8 = tmp20(4671);
      }
      const tmp18Result = tmp18(4449);
    }
    tmp15 = closure_1_19;
  }
};
GuildSettingsModalMemberEdit.contextType = fn(4533).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  ({ guildId, userId } = onClose);
  const tmp = onRemove(5901)(guildId);
  closure_2 = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = noop.useMemo(() => {
    const guildId = closure_2;
    closure_2 = onRemove;
    return {
      [closure_2_17.MEMBER_EDIT]: {
        render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onClose = onClose;
          obj.guildId = guildId;
          return closure_2_18(GuildSettingsModalMemberEditScene, obj);
        }
      },
      [closure_2_17.MEMBER_KICK]: {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.onKick = onKick;
          return closure_2_18(onRemove(12185), obj);
        }
      },
      [closure_2_17.MEMBER_BAN]: {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.onBan = onBan;
          return closure_2_18(onRemove(12187), obj);
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants3.MEMBER_EDIT, initialRouteStack: null };
  const items1 = [{ name: constants3.MEMBER_EDIT, params: { userId } }];
  obj.initialRouteStack = items1;
  return closure_18(onClose(7331).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };
