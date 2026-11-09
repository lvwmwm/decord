// Module ID: 11808
// Function ID: 11809
// Name: GameOrganizationInvitePickerActionSheet
// Dependencies: [19, 17, 11504, 21, 5140, 575, 6159, 5842, 7399, 5751, 7126, 11809, 11811, 1113, 2530, 7426, 5194, 2]
// Exports: default

// Module 11808 (GameOrganizationInvitePickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2530 from "module_2530" /* 2530 */;
import UserUtilsDefault from "UserUtils" /* 5194 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11504 */;
import GameOrganizationInvitePickerRowDefault from "GameOrganizationInvitePickerRow" /* 11809 */;
import useGameOrganizationInvitePickerDefault from "useGameOrganizationInvitePicker" /* 11811 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let importDefault, organization;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp5;
const AssetRegistryDefault = tmp5(7399);
function GameSection(arg0) {
  let gameOrganizations;
  let group;
  let items;
  let items1;
  let onInvite;
  let tmp5Result;
  let userId;
  ({ group, userId: require, onInvite: importDefault } = arg0);
  const application = group.application;
  let obj = { spacing: nativeDefault.space.PX_8, children: items1 };
  const tmp = closure_7();
  const Stack = Stack_Stack.Stack;
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
  const Stack2 = Stack_Stack.Stack;
  const tmp7 = FastImageDefault;
  if (null != application.iconUrl) {
    tmp5Result = { uri: application.iconUrl };
    const obj3 = { uri: application.iconUrl };
  } else {
    tmp5Result = AssetRegistryDefault;
  }
  items = [, ];
  const obj4 = { source: tmp5Result, style: tmp.gameIcon };
  items[0] = closure_5(tmp7, obj4);
  const obj5 = { accessibilityRole: "header", variant: "body-sm/medium", color: "text-muted", children: application.name };
  items[1] = closure_5(Text_Text.Text, obj5);
  items1 = [closure_6(Stack2, obj2), ];
  const obj6 = {
    hasIcons: true,
    children: gameOrganizations.map((organization) => {
      organization = organization.organization;
      const obj = { organization, userId: require, onInvite: importDefault };
      return hasOwnProperty(GameOrganizationInvitePickerRowDefault, obj, organization.id);
    })
  };
  gameOrganizations = group.gameOrganizations;
  const TableRowGroup = tmp3(7126).TableRowGroup;
  items1[1] = closure_5(TableRowGroup, obj6);
  return closure_6(Stack, obj);
}
const ActivityIndicator = react_native.ActivityIndicator;
const days = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_EXPIRY_DAYS;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, centeredText: { textAlign: "center" }, gameIcon: size, sections: obj3, status: obj4 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx");

export default function GameOrganizationInvitePickerActionSheet(userId) {
  let Stack2;
  let c1;
  let formatToPlainString;
  let groups;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj6;
  let obj9;
  let onInvite;
  let tmp15;
  let tmp5;
  let tmp7;
  let txHfjn;
  userId = userId.userId;
  importDefault = undefined;
  const tmp = closure_7();
  const tmp4 = useGameOrganizationInvitePickerDefault(userId);
  ({ groups, handleInvite: c1 } = tmp4);
  const user = tmp4.user;
  if (null == groups) {
    let tmp12;
    let tmp10;
    if (null != tmp4.error) {
      const obj2 = { variant: "body-sm/medium", color: "text-muted", style: items, children: intl2.string(userId(1113).t.fEptJP) };
      items = [, ];
      ({ centeredText: arr2[0], status: arr2[1] } = tmp);
      const Text2 = userId(5751).Text;
      intl2 = userId(1113).intl;
      tmp12 = closure_5(Text2, obj2);
      tmp10 = closure_5;
    } else {
      tmp10 = closure_5;
      const obj3 = { style: tmp.status };
      tmp12 = closure_5(ActivityIndicator, obj3);
    }
    tmp5 = tmp10;
    tmp7 = tmp12;
  } else if (0 === groups.length) {
    const obj4 = { variant: "body-sm/medium", color: "text-muted", style: items1, children: intl.string(_modDef2530.v7A3HG) };
    items1 = [, ];
    ({ centeredText: arr[0], status: arr[1] } = tmp);
    const Text = userId(5751).Text;
    intl = userId(1113).intl;
    tmp7 = closure_5(Text, obj4);
    tmp5 = closure_5;
  } else {
    tmp5 = closure_5;
    let obj = {
      spacing: nativeDefault.space.PX_24,
      style: tmp.sections,
      children: groups.map((group) => {
          const obj = { group, userId, onInvite };
          return hasOwnProperty(GameSection, obj, group.application.id);
        })
    };
    const Stack = userId(6159).Stack;
    tmp7 = closure_5(Stack, obj);
  }
  const obj5 = { scrollable: true, dismissAccessibilityLabel: intl3.string(userId(1113).t.cpT0Cq), header: tmp15(Stack2, obj6), children: tmp7 };
  const ActionSheet = userId(7426).ActionSheet;
  intl3 = userId(1113).intl;
  obj6 = { spacing: nativeDefault.space.PX_4, style: tmp.header, children: items2 };
  Stack2 = userId(6159).Stack;
  const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl4.string(_modDef2530["v5/qxX"]) };
  const Heading = userId(5751).Heading;
  intl4 = userId(1113).intl;
  items2 = [tmp5(Heading, obj7), ];
  const obj8 = { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainString(txHfjn, obj9) };
  const Text3 = userId(5751).Text;
  const intl5 = userId(1113).intl;
  formatToPlainString = intl5.formatToPlainString;
  txHfjn = tmp2(2530).txHfjn;
  const tmp2Result = UserUtilsDefault;
  let str = tmp2Result.getName(user);
  tmp15 = closure_6;
  if (str == null) {
    str = "";
  }
  obj9 = { username: str, days };
  items2[1] = tmp5(Text3, obj8);
  return tmp5(ActionSheet, obj5);
};
