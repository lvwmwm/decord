// Module ID: 10970
// Function ID: 85349
// Name: _callSuper
// Dependencies: []
// Exports: default

// Module 10970 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_6(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class GuildSettingsModalMemberEditScene {
  constructor(arg0) {
    guildId = global.guildId;
    arg1 = guildId;
    userId = global.userId;
    importDefault = userId;
    ({ onClose, contentContainerStyle } = global);
    obj = arg1(dependencyMap[40]);
    navigation = obj.useNavigation();
    importAll = navigation;
    obj2 = arg1(dependencyMap[41]);
    items = [];
    items[0] = closure_16;
    stateFromStores = obj2.useStateFromStores(items, () => guild.getGuild(guildId));
    dependencyMap = stateFromStores;
    obj3 = arg1(dependencyMap[41]);
    items1 = [];
    items1[0] = closure_15;
    stateFromStores1 = obj3.useStateFromStores(items1, () => sortedRoles.getSortedRoles(guildId));
    obj4 = arg1(dependencyMap[41]);
    items2 = [];
    items2[0] = closure_18;
    stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
      const currentUser = authStore.getCurrentUser();
      userId(stateFromStores[42])(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      return { user: authStore.getUser(userId), currentUser };
    });
    user = stateFromStoresObject.user;
    currentUser = stateFromStoresObject.currentUser;
    effect = closure_9.useEffect(() => {
      userId(stateFromStores[26]).startEditingNickname();
      return () => {
        callback(closure_3[26]).stopEditingRoles();
      };
    }, []);
    obj5 = arg1(dependencyMap[41]);
    items3 = [, , , , ];
    items3[0] = closure_19;
    items3[1] = closure_14;
    items3[2] = closure_17;
    items3[3] = closure_18;
    items3[4] = closure_16;
    stateFromStoresObject1 = obj5.useStateFromStoresObject(items3, () => {
      const obj = { member: member.getMember(guildId, userId), nicknameError: closure_19.nicknameError, editRoles: closure_19.roles, isEditing: closure_19.isEditing, submitting: closure_19.isSubmitting };
      let canManageUserResult = null != stateFromStores;
      if (canManageUserResult) {
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        canManageUserResult = closure_17.canManageUser(constants.MANAGE_NICKNAMES, user, stateFromStores);
      }
      obj.canChangeNick = canManageUserResult;
      obj.canManageRoles = closure_17.can(constants.MANAGE_ROLES, stateFromStores);
      let canManageUserResult1 = null != stateFromStores;
      if (canManageUserResult1) {
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        canManageUserResult1 = closure_17.canManageUser(constants.KICK_MEMBERS, user, stateFromStores);
      }
      obj.canKick = canManageUserResult1;
      let canManageUserResult2 = null != stateFromStores;
      if (canManageUserResult2) {
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        canManageUserResult2 = closure_17.canManageUser(constants.BAN_MEMBERS, user, stateFromStores);
      }
      obj.canBan = canManageUserResult2;
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      let id1;
      if (null != user) {
        id1 = user.id;
      }
      const items = [closure_18, closure_16, closure_17];
      obj.canDisableCommunication = guildId(stateFromStores[43]).canToggleCommunicationDisableOnUser(id, id1, items);
      return obj;
    });
    obj6 = arg1(dependencyMap[44]);
    items4 = [];
    items4[0] = userId;
    subscribeGuildMembers = obj6.useSubscribeGuildMembers({ [guildId]: items4 }, "GuildSettingsModalMemberEdit");
    [][0] = navigation;
    tmp9 = null;
    if (null != currentUser) {
      tmp9 = null;
      if (null != stateFromStores) {
        tmp9 = null;
        if (null != user) {
          tmp10 = jsxs;
          tmp11 = Fragment;
          obj = {};
          tmp12 = jsx;
          tmp13 = PureComponent;
          obj1 = {};
          tmp14 = obj1;
          tmp15 = stateFromStoresObject1;
          merged = Object.assign(stateFromStoresObject1);
          str = "onClose";
          obj1["onClose"] = onClose;
          str2 = "handleSuccessfulRemoval";
          obj1["handleSuccessfulRemoval"] = tmp8;
          str3 = "guild";
          obj1["guild"] = stateFromStores;
          str4 = "sortedGuildRoles";
          obj1["sortedGuildRoles"] = stateFromStores1;
          str5 = "currentUser";
          obj1["currentUser"] = currentUser;
          str6 = "user";
          obj1["user"] = user;
          str7 = "navigation";
          obj1["navigation"] = navigation;
          str8 = "contentContainerStyle";
          obj1["contentContainerStyle"] = contentContainerStyle;
          items5 = [, ];
          items5[0] = jsx(PureComponent, obj1);
          tmp17 = jsx;
          tmp18 = arg1;
          tmp19 = dependencyMap;
          num = 45;
          items5[1] = jsx(arg1(dependencyMap[45]).NavScrim, {});
          obj.children = items5;
          tmp9 = jsxs(Fragment, obj);
        }
      }
    }
    return tmp9;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const View = arg1(dependencyMap[6]).View;
({ isGuildOwner: closure_11, isGuildOwnerWithRequiredMfaLevel: closure_12 } = arg1(dependencyMap[7]));
const isEveryoneRole = arg1(dependencyMap[8]).isEveryoneRole;
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
let closure_18 = importDefault(dependencyMap[13]);
let closure_19 = importDefault(dependencyMap[14]);
const tmp3 = arg1(dependencyMap[7]);
({ Permissions: closure_20, GuildFeatures: closure_21, GuildSettingsSections: closure_22 } = arg1(dependencyMap[15]));
const tmp4 = arg1(dependencyMap[15]);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = arg1(dependencyMap[16]));
let obj = arg1(dependencyMap[17]);
obj = { form: { flex: 1 }, formContent: { paddingTop: 16 } };
obj = { paddingHorizontal: importDefault(dependencyMap[18]).modules.mobile.TABLE_ROW_PADDING };
obj.stackPadding = obj;
obj.userInfo = { height: 63 };
obj.avatar = {};
obj.rowLabel = { flexDirection: "row" };
obj.ctaButton = {};
obj.actionButtonLeft = {};
obj.actionButtonRight = { "Null": null, "Bool(false)": 1, "Bool(false)": null, "Bool(false)": 47 };
obj.actionButtonContainer = { flexBasis: "auto" };
let closure_26 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (PureComponent) => {
  class RolesList {
    constructor(arg0) {
      tmp = closure_4(this, RolesList);
      items = [];
      items[0] = PureComponent;
      tmp2 = closure_29(this, RolesList, items);
      tmp2.state = { isEditingProp: PureComponent.isEditing };
      return tmp2;
    }
  }
  const arg1 = RolesList;
  callback3(RolesList, PureComponent);
  let obj = {
    key: "render",
    value() {
      let currentUserId;
      let sortedGuildRoles;
      const props = this.props;
      const guild = props.guild;
      const RolesList = guild;
      ({ sortedGuildRoles, roles: closure_1, currentUserId } = props);
      const onToggleRole = props.onToggleRole;
      if (props.isEditing) {
        const highestRole = currentUserId(onToggleRole[19]).getHighestRole(guild, currentUserId);
        const obj2 = currentUserId(onToggleRole[19]);
        const found = callback(onToggleRole[20])(sortedGuildRoles).filter((arg0) => !callback(arg0));
        const found1 = found.filter((managed) => !managed.managed);
        const found2 = found1.filter((role) => currentUserId(onToggleRole[19]).isRoleHigher(guild, currentUserId, closure_4, role));
        const arr4 = callback(onToggleRole[20])(sortedGuildRoles);
        let valueResult = found2.map((id) => {
          const guild = id;
          const tmp = -1 !== tmp.indexOf(id.id);
          let obj = { checked: tmp };
          obj = { variant: "text-md/semibold" };
          let tmp4;
          if (null != id.colorString) {
            obj = { color: id.colorString };
            tmp4 = obj;
          }
          obj.style = tmp4;
          obj.children = id.name;
          obj.label = closure_23(guild(onToggleRole[22]).Text, obj);
          obj.onPress = function onPress() {
            return callback(arg0.id, !tmp);
          };
          return closure_23(guild(onToggleRole[21]).TableCheckboxRow, obj, id.id);
        }).value();
        const iter2 = found2.map((id) => {
          const guild = id;
          const tmp = -1 !== tmp.indexOf(id.id);
          let obj = { checked: tmp };
          obj = { variant: "text-md/semibold" };
          let tmp4;
          if (null != id.colorString) {
            obj = { color: id.colorString };
            tmp4 = obj;
          }
          obj.style = tmp4;
          obj.children = id.name;
          obj.label = closure_23(guild(onToggleRole[22]).Text, obj);
          obj.onPress = function onPress() {
            return callback(arg0.id, !tmp);
          };
          return closure_23(guild(onToggleRole[21]).TableCheckboxRow, obj, id.id);
        });
      } else {
        let arr = callback(onToggleRole[20])(sortedGuildRoles);
        const found3 = arr.filter((id) => closure_1.includes(id.id));
        valueResult = found3.map((colorString) => {
          let obj = {};
          obj = { variant: "text-md/semibold" };
          let tmp3;
          if (null != colorString.colorString) {
            obj = { color: colorString.colorString };
            tmp3 = obj;
          }
          obj.style = tmp3;
          obj.children = colorString.name;
          obj.label = closure_23(guild(onToggleRole[22]).Text, obj);
          return closure_23(guild(onToggleRole[23]).TableRow, obj, colorString.id);
        }).value();
        let obj = {};
        const intl = RolesList(onToggleRole[24]).intl;
        obj.label = intl.string(RolesList(onToggleRole[24]).t.+riKdA);
        obj.onPress = tmp;
        arr = valueResult.push(callback3(RolesList(onToggleRole[23]).TableRow, obj, "addition"));
        const iter = found3.map((colorString) => {
          let obj = {};
          obj = { variant: "text-md/semibold" };
          let tmp3;
          if (null != colorString.colorString) {
            obj = { color: colorString.colorString };
            tmp3 = obj;
          }
          obj.style = tmp3;
          obj.children = colorString.name;
          obj.label = closure_23(guild(onToggleRole[22]).Text, obj);
          return closure_23(guild(onToggleRole[23]).TableRow, obj, colorString.id);
        });
      }
      obj = {};
      const intl2 = RolesList(onToggleRole[24]).intl;
      obj.title = intl2.string(RolesList(onToggleRole[24]).t.LPJmL/);
      obj.hasIcons = false;
      obj.children = valueResult;
      return callback3(RolesList(onToggleRole[25]).TableRowGroup, obj);
    }
  };
  const items = [obj];
  obj = {
    key: "getDerivedStateFromProps",
    value(isEditing, isEditingProp) {
      isEditing = isEditing.isEditing;
      let tmp = null;
      if (isEditingProp.isEditingProp !== isEditing) {
        const obj = { isEditingProp: isEditing };
        tmp = obj;
      }
      return tmp;
    }
  };
  const items1 = [obj];
  return callback(RolesList, items, items1);
}(importAllResult.PureComponent);
tmp6.defaultProps = { roles: [] };
const tmp7 = (PureComponent) => {
  class GuildSettingsModalMemberEdit {
    constructor(arg0) {
      items = [...arguments];
      nick = undefined;
      tmp2 = closure_4(this, GuildSettingsModalMemberEdit);
      items1 = [...items];
      tmp3 = closure_29(this, GuildSettingsModalMemberEdit, items1);
      GuildSettingsModalMemberEdit = tmp3;
      obj = {};
      member = tmp3.props.member;
      if (null != member) {
        nick = member.nick;
      }
      obj.nick = nick;
      tmp3.state = obj;
      tmp3.handleChangeNickname = (nick) => {
        tmp3.setState({ nick });
      };
      tmp3.handleSaveNickname = () => {
        if (null != tmp3.state.nick) {
          let id = null;
          if (tmp3.props.currentUser.id !== tmp3.props.user.id) {
            id = tmp3.props.user.id;
          }
          callback(closure_3[26]).changeNickname(tmp3.props.guild.id, id, tmp3.state.nick);
          const obj = callback(closure_3[26]);
        }
      };
      tmp3.handleStartEditingRoles = () => {
        callback(closure_3[26]).startEditingRoles(tmp3.props.guild.id, tmp3.props.user.id);
      };
      tmp3.handleToggleRole = (arg0, arg1) => {
        callback(closure_3[26]).toggleRole(arg0, arg1);
      };
      tmp3.handleSetCommunicationDisabled = () => {
        let guild;
        let user;
        ({ guild, user } = tmp3.props);
        let obj = tmp3(closure_3[27]);
        obj = { guildId: guild.id, userId: user.id };
        const result = obj.openDisableCommunication(obj);
      };
      tmp3.handleClearCommunicationDisabled = () => {
        let guild;
        let user;
        ({ guild, user } = tmp3.props);
        let obj = tmp3(closure_3[27]);
        obj = { guildId: guild.id, userId: user.id };
        const result = obj.openEnableCommunication(obj);
      };
      tmp3.handleKick = () => {
        const props = tmp3.props;
        const navigation = props.navigation;
        navigation.push(constants2.MEMBER_KICK, { userId: props.user.id, onKick: props.handleSuccessfulRemoval });
      };
      tmp3.handleBan = () => {
        const props = tmp3.props;
        const navigation = props.navigation;
        navigation.push(constants2.MEMBER_BAN, { userId: props.user.id, onBan: props.handleSuccessfulRemoval });
      };
      tmp3.handleTransferOwnership = () => {
        const props = tmp3.props;
        const guild = props.guild;
        const features = guild.features;
        if (!features.has(constants.VERIFIED)) {
          const features2 = guild.features;
          if (!features2.has(constants.PARTNERED)) {
            callback(closure_3[29]).open(guild, props.user);
            const obj = callback(closure_3[29]);
          }
        }
        const result = tmp3(closure_3[28]).transferOwnershipProtected();
      };
      tmp3.handleSaveMemberRoles = () => {
        if (null != tmp3.props.editRoles) {
          callback(closure_3[26]).updateMemberRoles(tmp3.props.guild.id, tmp3.props.user.id, tmp3.props.editRoles);
          const obj = callback(closure_3[26]);
        }
      };
      tmp3.handleCancelEditMemberRoles = () => {
        callback(closure_3[26]).stopEditingRoles();
      };
      return tmp3;
    }
  }
  const arg1 = GuildSettingsModalMemberEdit;
  callback3(GuildSettingsModalMemberEdit, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigator();
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0) {
      this.updateNavigator(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigator",
    value(submitting) {
      let isEditing;
      let navigation;
      let onClose;
      const GuildSettingsModalMemberEdit = this;
      ({ submitting, isEditing, navigation, onClose } = this.props);
      if (!tmp) {
        let setOptionsResult = {};
        if (submitting) {
          let fn = () => null;
        } else if (isEditing) {
          fn = () => {
            const obj = {};
            const intl = self(closure_3[24]).intl;
            obj.text = intl.string(self(closure_3[24]).t.ETE/oC);
            obj.onPress = self.handleCancelEditMemberRoles;
            return callback2(self(closure_3[30]).HeaderActionButton, obj);
          };
        } else if (null != onClose) {
          fn = GuildSettingsModalMemberEdit(closure_3[31]).getHeaderCloseButton(onClose);
          const obj2 = GuildSettingsModalMemberEdit(closure_3[31]);
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => callback2(self(closure_3[31]).HeaderSubmittingIndicator, {});
        } else if (isEditing) {
          fn2 = () => {
            const obj = {};
            const intl = self(closure_3[24]).intl;
            obj.text = intl.string(self(closure_3[24]).t.R3BPH+);
            obj.onPress = self.handleSaveMemberRoles;
            return callback2(self(closure_3[30]).HeaderActionButton, obj);
          };
        }
        setOptionsResult.headerRight = fn2;
        setOptionsResult.headerTitle = function headerTitle() {
          let obj = {};
          const intl = self(closure_3[24]).intl;
          obj = { user: callback(closure_3[32]).getName(self.props.user) };
          obj.title = intl.formatToPlainString(self(closure_3[24]).t.v7odxj, obj);
          return callback2(self(closure_3[31]).NavigatorHeader, obj);
        };
        setOptionsResult = navigation.setOptions(setOptionsResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let canBan;
      let canChangeNick;
      let canDisableCommunication;
      let canKick;
      let canManageRoles;
      let currentUser;
      let editRoles;
      let guild;
      let isEditing;
      let member;
      let user;
      const self = this;
      const tmp = callback6(this.context);
      const nick = this.state.nick;
      ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
      if (null == member) {
        return null;
      } else {
        let obj = { style: tmp.rowLabel };
        obj = { variant: "text-sm/medium", children: callback(closure_3[32]).getUserTag(user) };
        const items = [callback5(GuildSettingsModalMemberEdit(closure_3[22]).Text, obj), ];
        let tmp8 = null;
        if (user.bot) {
          obj = { verified: user.isVerifiedBot() };
          tmp8 = callback5(callback(closure_3[33]), obj);
          const tmp7 = callback(closure_3[33]);
        }
        items[1] = tmp8;
        obj.children = items;
        if (null == member) {
          let bot = callback3(guild, user);
          if (!bot) {
            bot = !callback4(guild, currentUser);
          }
          if (!bot) {
            bot = user.bot;
          }
          let tmp24;
          if (!bot) {
            let obj1 = { hasIcons: false };
            const obj2 = { variant: "danger" };
            const intl2 = GuildSettingsModalMemberEdit(closure_3[24]).intl;
            obj2.label = intl2.string(GuildSettingsModalMemberEdit(closure_3[24]).t.Z5s7PM);
            obj2.onPress = self.handleTransferOwnership;
            obj1.children = callback5(GuildSettingsModalMemberEdit(closure_3[23]).TableRow, obj2);
            tmp24 = callback5(GuildSettingsModalMemberEdit(closure_3[25]).TableRowGroup, obj1);
          }
          const obj3 = { style: tmp.form };
          const items1 = [tmp.formContent, self.props.contentContainerStyle];
          obj3.contentContainerStyle = items1;
          const obj4 = { style: tmp.stackPadding, spacing: callback(closure_3[18]).space.PX_24 };
          let obj5 = { hasIcons: true };
          const obj6 = {};
          let obj7 = { style: tmp.avatar, user, guildId: guild.id };
          obj6.icon = callback5(GuildSettingsModalMemberEdit(closure_3[37]).Avatar, obj7);
          obj6.label = tmp9;
          obj5.children = callback5(GuildSettingsModalMemberEdit(closure_3[23]).TableRow, obj6);
          const items2 = [callback5(GuildSettingsModalMemberEdit(closure_3[25]).TableRowGroup, obj5), , , , , , ];
          if (!canChangeNick) {
            canChangeNick = currentUser.id === user.id;
          }
          if (canChangeNick) {
            const obj8 = {};
            const intl3 = GuildSettingsModalMemberEdit(closure_3[24]).intl;
            obj8.label = intl3.string(GuildSettingsModalMemberEdit(closure_3[24]).t.621LJD);
            let str3 = "";
            if (null != nick) {
              str3 = nick;
            }
            obj8.value = str3;
            const intl4 = GuildSettingsModalMemberEdit(closure_3[24]).intl;
            obj8.placeholder = intl4.string(GuildSettingsModalMemberEdit(closure_3[24]).t.h7UKXj);
            ({ handleChangeNickname: obj16.onChange, handleSaveNickname: obj16.onBlur } = self);
            obj8.maxLength = 32;
            obj8.errorMessage = tmp3;
            canChangeNick = callback5(GuildSettingsModalMemberEdit(closure_3[38]).TextInput, obj8);
            const tmp37 = callback5;
          }
          items2[1] = canChangeNick;
          if (canManageRoles) {
            const obj9 = { guild, sortedGuildRoles: tmp2 };
            if (!isEditing) {
              editRoles = member.roles;
            }
            if (null == editRoles) {
              editRoles = [];
            }
            obj9.roles = editRoles;
            obj9.currentUserId = currentUser.id;
            obj9.isEditing = isEditing;
            ({ handleToggleRole: obj17.onToggleRole, handleStartEditingRoles: obj17.onStartEditing } = self);
            canManageRoles = callback5(closure_27, obj9);
            const tmp42 = callback5;
            const tmp43 = closure_27;
          }
          items2[2] = canManageRoles;
          if (canDisableCommunication) {
            canDisableCommunication = null;
          }
          items2[3] = canDisableCommunication;
          if (canKick) {
            const obj10 = { hasIcons: false };
            const obj11 = { variant: "danger" };
            const intl5 = GuildSettingsModalMemberEdit(closure_3[24]).intl;
            const obj12 = { user: callback(closure_3[32]).getName(user) };
            obj11.label = intl5.formatToPlainString(GuildSettingsModalMemberEdit(closure_3[24]).t.yOiJHB, obj12);
            obj11.onPress = self.handleKick;
            obj10.children = callback5(GuildSettingsModalMemberEdit(closure_3[23]).TableRow, obj11);
            canKick = callback5(GuildSettingsModalMemberEdit(closure_3[25]).TableRowGroup, obj10);
            const obj21 = callback(closure_3[32]);
          }
          items2[4] = canKick;
          if (canBan) {
            const obj13 = { hasIcons: false };
            const obj14 = { variant: "danger" };
            const intl6 = GuildSettingsModalMemberEdit(closure_3[24]).intl;
            const obj15 = { user: callback(closure_3[32]).getName(user) };
            obj14.label = intl6.formatToPlainString(GuildSettingsModalMemberEdit(closure_3[24]).t.TuAZuW, obj15);
            obj14.onPress = self.handleBan;
            obj13.children = callback5(GuildSettingsModalMemberEdit(closure_3[23]).TableRow, obj14);
            canBan = callback5(GuildSettingsModalMemberEdit(closure_3[25]).TableRowGroup, obj13);
            const obj25 = callback(closure_3[32]);
          }
          items2[5] = canBan;
          items2[6] = tmp24;
          obj4.children = items2;
          obj3.children = closure_24(GuildSettingsModalMemberEdit(closure_3[36]).Stack, obj4);
          return callback5(GuildSettingsModalMemberEdit(closure_3[35]).Form, obj3);
        } else {
          obj1 = GuildSettingsModalMemberEdit(closure_3[34]);
          let name = closure_3;
          const result = obj1.isMemberCommunicationDisabled(member);
          const TableRowGroup = GuildSettingsModalMemberEdit(closure_3[25]).TableRowGroup;
          const obj16 = { hasIcons: false };
          const TableRow = GuildSettingsModalMemberEdit(closure_3[23]).TableRow;
          let obj17 = { variant: "danger" };
          const intl = GuildSettingsModalMemberEdit(closure_3[24]).intl;
          const formatToPlainString = intl.formatToPlainString;
          let handleClearCommunicationDisabled = GuildSettingsModalMemberEdit(closure_3[24]).t;
          if (result) {
            const obj18 = {};
            obj7 = callback(name[32]);
            name = obj7.getName(user);
            obj18.user = name;
            obj17.label = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj18);
            handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
            obj17.onPress = handleClearCommunicationDisabled;
            obj17 = tmp17(TableRow, obj17);
            obj16.children = obj17;
            let tmp14Result = tmp14(TableRowGroup, obj16);
          } else {
            const obj19 = {};
            obj5 = callback(name[32]);
            obj19.user = obj5.getName(user);
            obj17.label = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj19);
            obj17.onPress = self.handleSetCommunicationDisabled;
            obj16.children = tmp17(TableRow, obj17);
            tmp14Result = tmp14(TableRowGroup, obj16);
          }
        }
        const obj28 = callback(closure_3[32]);
      }
    }
  };
  return callback(GuildSettingsModalMemberEdit, items);
}(importAllResult.PureComponent);
tmp7.contextType = arg1(dependencyMap[39]).ThemeContext;
const tmp5 = arg1(dependencyMap[16]);
const result = arg1(dependencyMap[50]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  let guildId;
  let userId;
  onClose = onClose.onClose;
  const arg1 = onClose;
  const onRemove = onClose.onRemove;
  const importDefault = onRemove;
  ({ guildId, userId } = onClose);
  const tmp = importDefault(dependencyMap[48])(guildId);
  const importAll = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = importAllResult.useMemo(() => function getScreens(arg0, onClose, onRemove) {
    let obj = {
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onClose"] = arg1;
        obj["guildId"] = arg0;
        return callback(closure_31, obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["guildId"] = arg0;
        obj["onKick"] = arg2;
        return callback(arg1(closure_3[46]), obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["guildId"] = arg0;
        obj["onBan"] = arg2;
        return callback(arg1(closure_3[47]), obj);
      }
    };
    return { [closure_22.MEMBER_EDIT]: obj, [closure_22.MEMBER_KICK]: obj, [closure_22.MEMBER_BAN]: obj };
  }(tmp, onClose, onRemove), items);
  let obj = { screens: memo, initialRouteName: constants.MEMBER_EDIT, initialRouteStack: items1 };
  obj = { name: constants.MEMBER_EDIT, params: { userId } };
  const items1 = [obj];
  return callback4(arg1(dependencyMap[49]).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };
