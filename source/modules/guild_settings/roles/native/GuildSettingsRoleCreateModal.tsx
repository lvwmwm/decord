// Module ID: 16178
// Function ID: 124836
// Name: logTransitionEvent
// Dependencies: []
// Exports: default

// Module 16178 (logTransitionEvent)
function logTransitionEvent(from_step, FLOW_DISMISSED, skip, guildId) {
  let obj = importDefault(dependencyMap[14]);
  obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step, to_step: FLOW_DISMISSED, skip };
  const merged = Object.assign(FLOW_DISMISSED(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  obj.track(constants.USER_FLOW_TRANSITION, obj);
}
function closeModal(from_step, guildId) {
  logTransitionEvent(from_step, constants4.FLOW_DISMISSED, false, guildId);
  importDefault(dependencyMap[18]).close();
}
function useGuildSettingsStoreGuild() {
  const items = [closure_12];
  const stateFromStores = arg1(dependencyMap[19]).useStateFromStores(items, () => props.getProps().guild);
  importDefault(dependencyMap[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  return stateFromStores;
}
function useGuildSettingsStoreGuildWithRole() {
  const items = [closure_12];
  const stateFromStoresObject = arg1(dependencyMap[19]).useStateFromStoresObject(items, () => props.getProps());
  const guild = stateFromStoresObject.guild;
  const arg1 = guild;
  const importDefault = stateFromStoresObject.selectedRoleId;
  importDefault(dependencyMap[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  const obj = arg1(dependencyMap[19]);
  const items1 = [closure_10];
  const role = arg1(dependencyMap[19]).useStateFromStores(items1, () => {
    let role;
    if (null != selectedRoleId) {
      role = role.getRole(guild.id, selectedRoleId);
    }
    return role;
  });
  importDefault(dependencyMap[20])(null != role, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  return { guild, role };
}
function shouldSkipPermissions() {
  const guild = props.getProps().guild;
  importDefault(dependencyMap[20])(null != guild, "shouldSkipPermissions: Guild cannot be null");
  const currentUser = currentUser.getCurrentUser();
  let obj = importAll(dependencyMap[21]);
  obj = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp3 = isGuildOwner(guild, currentUser);
  return !isGuildOwner(guild, currentUser) && !obj.can(obj);
}
function RoleCreateScene() {
  let tmp8;
  const tmp = callback6();
  let obj = arg1(dependencyMap[22]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp3 = useGuildSettingsStoreGuild();
  const importDefault = tmp3;
  const intl = arg1(dependencyMap[17]).intl;
  const tmp4 = callback3(importAllResult.useState(intl.string(arg1(dependencyMap[17]).t.QBMHvB)), 2);
  const importAll = str;
  const tmp5 = callback3(importAllResult.useState(closure_17), 2);
  const first = tmp5[0];
  const dependencyMap = first;
  let callback2 = tmp5[1];
  [tmp8, closure_5] = callback3(importAllResult.useState(false), 2);
  let nextButtonFloating = importDefault(dependencyMap[23])();
  const items = [navigation, tmp3];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(first[24]).getHeaderCloseButton(() => {
        callback2(closure_26[closure_25.STEP_DISPLAY], id.id);
      }),
      headerTitle() {
        return callback(closure_27, { step: constants.STEP_DISPLAY });
      }
    };
    navigation.setOptions(obj);
  }, items);
  const items1 = [];
  const callback = importAllResult.useCallback((arg0) => {
    callback(arg0);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [first, tmp3.id, tmp4[0], navigation];
  const items3 = [first, callback];
  const callback1 = importAllResult.useCallback(callback2(items1), items2);
  obj = {};
  callback2 = importAllResult.useCallback(() => {
    closure_8.dismiss();
    let obj = tmp3(first[28]);
    obj = { color: first, onSelect: callback };
    obj.openLazy(navigation(first[30])(first[29], first.paths), "RoleColorPicker", obj);
  }, items3);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj.title = intl2.string(arg1(dependencyMap[17]).t.8pxAPp);
  const intl3 = arg1(dependencyMap[17]).intl;
  obj.subtitle = intl3.string(arg1(dependencyMap[17]).t.JubQz/);
  obj = { spacing: importDefault(dependencyMap[13]).space.PX_24, style: tmp.sceneInner };
  const obj1 = {};
  const intl4 = arg1(dependencyMap[17]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[17]).t.dLbkBk);
  const intl5 = arg1(dependencyMap[17]).intl;
  obj1.description = intl5.string(arg1(dependencyMap[17]).t.m4j44b);
  obj1.required = true;
  obj1.value = tmp4[0];
  obj1.onChange = tmp4[1];
  obj1.maxLength = closure_16;
  obj1.autoFocus = true;
  obj1.autoComplete = "off";
  const items4 = [callback4(arg1(dependencyMap[32]).TextInput, obj1), ];
  const obj2 = {};
  const intl6 = arg1(dependencyMap[17]).intl;
  obj2.helperText = intl6.string(arg1(dependencyMap[17]).t.9TMIgc);
  obj2.hasIcons = false;
  const obj3 = {};
  const intl7 = arg1(dependencyMap[17]).intl;
  obj3.label = intl7.string(arg1(dependencyMap[17]).t.5NC5YW);
  obj3.onPress = callback2;
  obj3.arrow = true;
  const obj4 = { style: tmp.colorTrailing };
  const items5 = [callback4(importDefault(dependencyMap[35]), { color: first, style: tmp.colorBlock }), ];
  const obj6 = { variant: "text-sm/medium" };
  const obj5 = { color: first, style: tmp.colorBlock };
  const tmp13 = callback5;
  const tmp14 = ModalScene;
  const tmp7 = callback3(importAllResult.useState(false), 2);
  obj6.children = arg1(dependencyMap[36]).int2hex(first);
  items5[1] = callback4(arg1(dependencyMap[16]).Text, obj6);
  obj4.children = items5;
  obj3.trailing = callback5(closure_7, obj4);
  obj2.children = callback4(arg1(dependencyMap[34]).TableRow, obj3);
  items4[1] = callback4(arg1(dependencyMap[33]).TableRowGroup, obj2);
  obj.children = items4;
  const items6 = [callback5(arg1(dependencyMap[31]).Stack, obj), ];
  const obj7 = {};
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items7[1] = nextButtonFloating;
  obj7.style = items7;
  const obj8 = { loading: tmp8 };
  if (!tmp8) {
    tmp8 = "" === str.trim();
  }
  obj8.disabled = tmp8;
  const intl8 = arg1(dependencyMap[17]).intl;
  obj8.text = intl8.string(arg1(dependencyMap[17]).t.CumH4u);
  obj8.onPress = callback1;
  obj7.children = callback4(arg1(dependencyMap[37]).Button, obj8);
  items6[1] = callback4(closure_7, obj7);
  obj.children = items6;
  return tmp13(tmp14, obj);
}
function RolePermissionTemplate() {
  let obj = arg1(dependencyMap[22]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp3 = useGuildSettingsStoreGuildWithRole();
  const role = tmp3.role;
  const importDefault = role;
  const guild = tmp3.guild;
  const importAll = guild;
  const items = [navigation, guild.id];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(callback[24]).getHeaderCloseButton(() => {
        callback2(closure_26[closure_25.STEP_PERMISSIONS], id.id);
      }),
      headerTitle() {
        return callback(closure_27, { step: constants.STEP_PERMISSIONS });
      }
    };
    navigation.setOptions(obj);
  }, items);
  const items1 = [guild.id, navigation, role.id];
  const callback = importAllResult.useCallback((arg0) => {
    const result = role(callback[25]).updateRolePermissions(guild.id, role.id, arg0);
    navigation.push(constants.STEP_MEMBERS);
    callback(closure_26[closure_25.STEP_PERMISSIONS], closure_26[closure_25.STEP_MEMBERS], false, guild.id);
  }, items1);
  const dependencyMap = callback;
  const items2 = [callback];
  obj = { hasSkipButton: false };
  const callback1 = importAllResult.useCallback(() => {
    callback(closure_13[closure_14].permissions);
  }, items2);
  const intl = arg1(dependencyMap[17]).intl;
  obj.title = intl.string(arg1(dependencyMap[17]).t.p0IwNA);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[17]).t.G529Hk);
  obj = { onSelect: callback, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
  const items3 = [callback4(importDefault(dependencyMap[38]), obj), ];
  const obj1 = { style: callback6().sceneFooter };
  const obj2 = {};
  const intl3 = arg1(dependencyMap[17]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[17]).t.CJm5V5);
  obj2.onPress = callback1;
  obj1.children = callback4(arg1(dependencyMap[37]).Button, obj2);
  items3[1] = callback4(closure_7, obj1);
  obj.children = items3;
  return callback5(ModalScene, obj);
}
function RoleMembers() {
  const tmp = callback6();
  let obj = arg1(dependencyMap[22]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp3 = useGuildSettingsStoreGuildWithRole();
  const role = tmp3.role;
  const importDefault = role;
  const guild = tmp3.guild;
  const importAll = guild;
  importDefault(dependencyMap[20])(null != role, "Role cannot be null");
  const items = [navigation, guild.id];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(first[24]).getHeaderCloseButton(() => {
        callback2(closure_26[closure_25.STEP_MEMBERS], id.id);
      }),
      headerTitle() {
        return callback(closure_27, { step: constants.STEP_MEMBERS });
      }
    };
    return navigation.setOptions(obj);
  }, items);
  let nextButtonFloating = importDefault(dependencyMap[23])();
  const items1 = [role.id];
  const callback = importAllResult.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items1);
  let obj1 = arg1(dependencyMap[39]);
  const guildMembers = obj1.useGuildMembers(guild.id, callback);
  const tmp8 = callback3(importAllResult.useState({}), 2);
  const first = tmp8[0];
  const dependencyMap = first;
  const tmp10 = callback3(importAllResult.useState(false), 2);
  let closure_4 = tmp11;
  const items2 = [tmp10[1], guild.id, role.id, first];
  const items3 = [first];
  const callback1 = importAllResult.useCallback(() => {
    const keys = Object.keys(first);
    if (keys.length > 0) {
      tmp11(true);
      role(first[40]).bulkAddMemberRoles(guild.id, role.id, keys);
      tmp11(false);
      const obj = role(first[40]);
    }
    callback(constants[closure_25.STEP_MEMBERS], constants.FLOW_COMPLETED, false, guild.id);
    role(first[18]).close();
  }, items2);
  const memo = importAllResult.useMemo(() => Object.keys(first).length, items3);
  obj = { hasSkipButton: !nextButtonFloating };
  const intl = arg1(dependencyMap[17]).intl;
  obj.title = intl.string(arg1(dependencyMap[17]).t.+gWHtA);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj = { numMembers: closure_15 };
  obj.subtitle = intl2.formatToPlainString(arg1(dependencyMap[17]).t.yZW3oh, obj);
  obj1 = { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions: first, role, setPendingAdditions: tmp8[1], maxCount: closure_15 };
  const items4 = [callback4(arg1(dependencyMap[41]).AddMembersBody, obj1), ];
  const obj2 = {};
  const items5 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items5[1] = nextButtonFloating;
  obj2.style = items5;
  const obj3 = { loading: tmp10[0] };
  const intl3 = arg1(dependencyMap[17]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[17]).t.XcPHfw);
  obj3.onPress = callback1;
  let tmp19 = 0 === memo;
  if (!tmp19) {
    tmp19 = memo > closure_15;
  }
  obj3.disabled = tmp19;
  obj2.children = callback4(arg1(dependencyMap[37]).Button, obj3);
  items4[1] = callback4(closure_7, obj2);
  obj.children = items4;
  return closure_22(ModalScene, obj);
}
function ModalScene(hasSkipButton) {
  let children;
  let subtitle;
  let title;
  hasSkipButton = hasSkipButton.hasSkipButton;
  ({ children, title, subtitle } = hasSkipButton);
  const tmp = callback6();
  const insets = importDefault(dependencyMap[42])().insets;
  let obj = arg1(dependencyMap[22]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp3 = useGuildSettingsStoreGuild();
  const importDefault = tmp3;
  let obj1 = arg1(dependencyMap[43]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const importAll = isScreenReaderEnabled;
  const ref = importAllResult.useRef(null);
  const dependencyMap = ref;
  const items = [isScreenReaderEnabled];
  const effect = importAllResult.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = navigation(ref[44]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [navigation, tmp3.id];
  if (null == navigator) {
    let tmp17Result = callback4(arg1(dependencyMap[45]).SceneLoadingIndicator, {});
  } else {
    obj = {};
    obj = {};
    const merged = Object.assign(tmp.container);
    obj["paddingTop"] = insets.top;
    obj["paddingBottom"] = tmp.container.paddingBottom + insets.bottom;
    obj.style = obj;
    obj1 = { style: tmp.sceneHeader };
    const obj2 = { ref, children: title };
    const items2 = [callback4(arg1(dependencyMap[16]).Heading, obj2), ];
    const obj3 = { style: tmp.sceneSubtitle, children: subtitle };
    items2[1] = callback4(arg1(dependencyMap[16]).Text, obj3);
    obj1.children = items2;
    const items3 = [callback5(closure_7, obj1), , ];
    const obj4 = { style: tmp.sceneContent, children };
    items3[1] = callback4(closure_7, obj4);
    if (hasSkipButton) {
      const obj5 = { style: tmp.sceneFooter };
      const obj6 = {};
      const intl = arg1(dependencyMap[17]).intl;
      obj6.text = intl.string(arg1(dependencyMap[17]).t.CJm5V5);
      obj6.onPress = tmp7;
      obj5.children = callback4(arg1(dependencyMap[37]).Button, obj6);
      hasSkipButton = callback4(closure_7, obj5);
    }
    items3[2] = hasSkipButton;
    obj.children = items3;
    tmp17Result = callback5(closure_7, obj);
    const tmp17 = callback5;
    const tmp18 = closure_7;
  }
  return tmp17Result;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_7, Keyboard: closure_8 } = arg1(dependencyMap[3]));
const isGuildOwner = arg1(dependencyMap[4]).isGuildOwner;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[3]);
({ PermissionTemplates: closure_13, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[10]));
let closure_23 = { titleContainer: {}, title: { "Null": null, "Null": null } };
let obj1 = arg1(dependencyMap[11]);
let obj = {};
obj = { marginTop: arg1(dependencyMap[12]).NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: importDefault(dependencyMap[13]).space.PX_16 };
obj.container = obj;
obj.sceneHeader = {};
obj.sceneSubtitle = { showInactive: false, GiftCardStack3dIllustration: false, FITNESS: false };
obj.sceneContent = { flex: 1 };
obj1 = { flex: 1, paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
obj.sceneInner = obj1;
obj.colorTrailing = { "Null": 7, "Null": 370 };
obj.colorBlock = {};
const tmp5 = arg1(dependencyMap[10]);
obj.sceneFooter = { paddingBottom: 8, paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
obj.nextButton = {};
const obj2 = { paddingBottom: 8, paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
obj.nextButtonFloating = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
let closure_24 = obj1.createStyles(obj);
const obj4 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj4.STEP_DISPLAY]: "Role Display", [obj4.STEP_PERMISSIONS]: "Role Permissions", [obj4.STEP_MEMBERS]: "Role Members", ["FLOW_INITIALIZED"]: "Flow Initialized", ["FLOW_DISMISSED"]: "Flow Dismissed", ["FLOW_COMPLETED"]: "Flow Completed" };
let closure_27 = importAllResult.memo((step) => {
  const keys = Object.keys(obj4);
  let obj = { style: closure_23.titleContainer };
  const sum = keys.indexOf(step.step) + 1;
  obj = { Opened: "guild", marginVertical: "2026-02_past_vc_activity_messages", marginStart: "Past VC Activity Messages", marginEnd: "guild", style: closure_23.title };
  const intl = arg1(dependencyMap[17]).intl;
  obj.children = intl.format(arg1(dependencyMap[17]).t.8v/u0i, { number: sum, total: keys.length });
  obj.children = callback4(arg1(dependencyMap[16]).Text, obj);
  return callback4(closure_7, obj);
});
let closure_28 = {
  [obj4.STEP_DISPLAY]: {
    fullscreen: true,
    render() {
      return callback4(RoleCreateScene, {});
    }
  },
  [obj4.STEP_PERMISSIONS]: {
    fullscreen: true,
    render() {
      return callback4(RolePermissionTemplate, {});
    }
  },
  [obj4.STEP_MEMBERS]: {
    fullscreen: true,
    render() {
      return callback4(RoleMembers, {});
    }
  }
};
const obj3 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
const obj5 = {
  fullscreen: true,
  render() {
    return callback4(RoleCreateScene, {});
  }
};
const obj6 = {
  fullscreen: true,
  render() {
    return callback4(RolePermissionTemplate, {});
  }
};
const obj7 = {
  fullscreen: true,
  render() {
    return callback4(RoleMembers, {});
  }
};
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default function GuildSettingsRoleCreateModal() {
  const callback = useGuildSettingsStoreGuild();
  importDefault(dependencyMap[46])(() => {
    callback(constants.FLOW_INITIALIZED, constants[closure_25.STEP_DISPLAY], false, id.id);
  });
  return callback4(callback(dependencyMap[47]).Navigator, { screens: closure_28, initialRouteName: obj4.STEP_DISPLAY });
};
