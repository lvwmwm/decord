// Module ID: 15487
// Function ID: 118191
// Name: RobloxIcon
// Dependencies: []
// Exports: default, useShouldShowRobloxConnectionCoachmark

// Module 15487 (RobloxIcon)
function RobloxIcon(theme) {
  let obj = arg1(dependencyMap[24]);
  const isThemeDarkResult = obj.isThemeDark(theme.theme);
  let obj1 = importDefault(dependencyMap[25]);
  let str = "white";
  const value = obj1.get(constants.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const tmp = callback4();
  const icon = value.icon;
  obj = { style: items };
  const items = [tmp.robloxIconContainer, ];
  obj = { backgroundColor: str };
  items[1] = obj;
  const source = arg1(dependencyMap[26]).makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj1 = { size: arg1(dependencyMap[27]).IconSizes.LARGE, source, disableColor: true };
  obj.children = callback2(arg1(dependencyMap[27]).Icon, obj1);
  return callback2(View, obj);
}
class UnionIcon {
  constructor(arg0) {
    obj = arg1(dependencyMap[24]);
    str = "black";
    if (obj.isThemeDark(global.theme)) {
      str = "white";
    }
    id = importAll.useId();
    obj = { id };
    tmp2 = importDefault(dependencyMap[28]);
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[28]).Path, { flexDirection: 2, justifyContent: 32 });
    obj1 = {};
    obj2 = { 0: null, 9223372036854775807: null, 0: 8, 9223372036854775807: 8, -9223372036854775808: null, -9223372036854775808: 6 };
    obj3 = {};
    obj3.stopColor = str;
    obj3.stopOpacity = 0.3;
    items1 = [, ];
    items1[0] = jsx(arg1(dependencyMap[28]).Stop, obj3);
    obj4 = {};
    obj4.stopColor = str;
    items1[1] = jsx(arg1(dependencyMap[28]).Stop, obj4);
    obj2.children = items1;
    obj1.children = jsxs(arg1(dependencyMap[28]).LinearGradient, obj2);
    items[1] = jsx(arg1(dependencyMap[28]).Defs, obj1);
    obj.children = items;
    return jsxs(tmp2, obj);
  }
}
function UserIcon() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[29]);
  const items = [closure_7];
  obj = { style: tmp.avatarContainer };
  obj = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [callback2(View, obj), ];
  const obj1 = { size: arg1(dependencyMap[27]).AvatarSizes.NORMAL, user: stateFromStores, guildId: undefined };
  items1[1] = callback2(arg1(dependencyMap[27]).Avatar, obj1);
  obj.children = items1;
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AnalyticsLocations: closure_9, PlatformTypes: closure_10, UserSettingsSections: closure_11 } = arg1(dependencyMap[6]));
const ContentDismissActionType = arg1(dependencyMap[7]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[10]).radii.md, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.robloxIconContainer = obj;
const tmp3 = arg1(dependencyMap[8]);
obj.content = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
obj.text = { textAlign: "center" };
obj.avatarContainer = { position: "relative" };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
obj.avatarInnerBorder = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.round };
let closure_15 = obj.createStyles(obj);
const obj2 = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.round };
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default function RobloxConnectionActionSheet(markAsDismissed) {
  const arg1 = markAsDismissed.markAsDismissed;
  function handleCancel() {
    callback(closure_2[13]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(constants4.DISMISS);
    }
  }
  const tmp = callback4();
  let obj = arg1(dependencyMap[11]);
  const theme = obj.useThemeContext().theme;
  obj = { startExpanded: true, contentStyles: tmp.content };
  obj = { title: null, leading: callback2(arg1(dependencyMap[16]).ActionSheetCloseButton, { onPress: handleCancel }) };
  obj.header = callback2(arg1(dependencyMap[15]).BottomSheetTitleHeader, obj);
  obj.onDismiss = function onDismiss() {
    return markAsDismissed(constants4.DISMISS);
  };
  const obj1 = { spacing: 24, style: { paddingBottom: importDefault(dependencyMap[12])().bottom } };
  const obj2 = { "Null": 6917534905505154000, "Null": 605546228749688850000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015154482640141524 };
  const items = [callback2(RobloxIcon, { theme }), callback2(UnionIcon, { theme }), callback2(UserIcon, {})];
  obj2.children = items;
  const items1 = [callback3(arg1(dependencyMap[17]).Stack, obj2), , ];
  const obj3 = { justify: "center" };
  const obj4 = { variant: "heading-xl/bold", style: tmp.text };
  const intl = arg1(dependencyMap[19]).intl;
  obj4.children = intl.string(arg1(dependencyMap[19]).t.t3asUZ);
  const items2 = [callback2(arg1(dependencyMap[18]).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", style: tmp.text };
  const intl2 = arg1(dependencyMap[19]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[19]).t.no96NU);
  items2[1] = callback2(arg1(dependencyMap[18]).Text, obj5);
  obj3.children = items2;
  items1[1] = callback3(arg1(dependencyMap[17]).Stack, obj3);
  const obj6 = {};
  const obj7 = {};
  const intl3 = arg1(dependencyMap[19]).intl;
  obj7.text = intl3.string(arg1(dependencyMap[19]).t.ItuabN);
  const obj8 = { size: "sm", color: importDefault(dependencyMap[10]).colors.WHITE };
  obj7.icon = callback2(arg1(dependencyMap[21]).WindowLaunchIcon, obj8);
  obj7.iconPosition = "end";
  obj7.size = "lg";
  obj7.onPress = function onPress() {
    let obj = callback(closure_2[13]);
    obj.hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(constants4.PRIMARY);
    }
    obj = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
    callback(closure_2[22])(obj);
    obj = { screen: constants3.CONNECTIONS };
    markAsDismissed(closure_2[23]).openUserSettings(obj);
  };
  const items3 = [callback2(arg1(dependencyMap[20]).Button, obj7), ];
  const obj9 = { _monthsRegex: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012882297944488606, overflow: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076436369851344, messageHasObscurableMedia: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002134690713675183 };
  const intl4 = arg1(dependencyMap[19]).intl;
  obj9.text = intl4.string(arg1(dependencyMap[19]).t.DiGJy3);
  obj9.onPress = handleCancel;
  items3[1] = callback2(arg1(dependencyMap[20]).Button, obj9);
  obj6.children = items3;
  items1[2] = callback3(arg1(dependencyMap[17]).Stack, obj6);
  obj1.children = items1;
  obj.children = callback3(arg1(dependencyMap[17]).Stack, obj1);
  return callback2(arg1(dependencyMap[14]).BottomSheet, obj);
};
export { UnionIcon };
export const useShouldShowRobloxConnectionCoachmark = function useShouldShowRobloxConnectionCoachmark() {
  const items = [closure_8];
  const stateFromStores = arg1(closure_2[29]).useStateFromStores(items, () => appInstalled.isAppInstalled(stateFromStores(closure_2[30]).DetectableAppNames.ROBLOX));
  const arg1 = stateFromStores;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const importDefault = first;
  closure_2 = tmp2[1];
  const obj = arg1(closure_2[29]);
  const items1 = [closure_6];
  const stateFromStoresObject = arg1(closure_2[29]).useStateFromStoresObject(items1, () => {
    const obj = { fetchingAccounts: closure_6.isFetching() };
    const accounts = closure_6.getAccounts();
    obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
    return obj;
  });
  const hasRoloxAccount = stateFromStoresObject.hasRoloxAccount;
  const callback = hasRoloxAccount;
  const items2 = [first, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !first;
    }
    if (tmp) {
      callback(true);
      const response = first(callback[31]).fetch();
      const obj = first(callback[31]);
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = React.useEffect(() => {
    if (hasRoloxAccount) {
      let obj = stateFromStores(closure_2[32]);
      obj = { dismissAction: constants.INDIRECT_ACTION };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(stateFromStores(closure_2[33]).DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj);
    }
  }, items3);
  return !stateFromStoresObject.fetchingAccounts && stateFromStores && !hasRoloxAccount;
};
