// Module ID: 11648
// Function ID: 11649
// Name: GameOrganizationInvitePickerActionSheet
// Dependencies: [19, 17, 1383, 11363, 21, 5014, 575, 6027, 5717, 7338, 5624, 7060, 11649, 504, 11651, 11656, 11650, 11657, 11660, 1113, 2404, 7366, 5068, 2]
// Exports: default

// Module 11648 (GameOrganizationInvitePickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11363 */;
import GameOrganizationInvitePickerRowDefault from "GameOrganizationInvitePickerRow" /* 11649 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11650 */;
import groupInvitableGameOrganizationsByApplicationDefault from "groupInvitableGameOrganizationsByApplication" /* 11656 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11657 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11660 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;
let organization;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let tmp5;
const AssetRegistryDefault = tmp5(7338);
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
  const tmp = closure_9();
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
  items[0] = closure_7(tmp7, obj4);
  const obj5 = { accessibilityRole: "header", variant: "text-sm/medium", color: "text-muted", children: application.name };
  items[1] = closure_7(Text_Text.Text, obj5);
  items1 = [closure_8(Stack2, obj2), ];
  const obj6 = {
    hasIcons: true,
    children: gameOrganizations.map((organization) => {
      organization = organization.organization;
      const obj = { organization, userId: require, onInvite: importDefault };
      return metroImportDefault(GameOrganizationInvitePickerRowDefault, obj, organization.id);
    })
  };
  gameOrganizations = group.gameOrganizations;
  const TableRowGroup = tmp3(7060).TableRowGroup;
  items1[1] = closure_7(TableRowGroup, obj6);
  return closure_8(Stack, obj);
}
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
const days = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_EXPIRY_DAYS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, centeredText: { textAlign: "center" }, gameIcon: size, sections: obj3, status: obj4 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx");

export default function GameOrganizationInvitePickerActionSheet(userId) {
  let Stack2;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj7;
  let onInvite;
  let tmp14;
  let tmp7;
  let tmp8;
  let txHfjn;
  userId = userId.userId;
  let data;
  react = undefined;
  const tmp = closure_9();
  let tmp2 = userId;
  let obj = userId(data[13]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const tmp6 = stateFromStores(data[14])("game_organization_invite_picker");
  data = tmp6.data;
  const items1 = [data];
  const error = tmp6.error;
  const memo = react.useMemo(() => {
    let tmp2 = null;
    if (null != data) {
      tmp2 = groupInvitableGameOrganizationsByApplicationDefault(tmp);
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores];
  react = react.useCallback((organization) => {
    if (null != stateFromStores) {
      const obj = getGameOrganizationInviteSendStateKey;
      const result = obj.toLinkedGameOrganization(organization);
      const tmp7 = sendGameOrganizationInviteDefault;
      const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
      tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
    }
  }, items2);
  if (null == memo) {
    let tmp12;
    let tmp10;
    if (null != error) {
      const obj2 = { variant: "text-sm/medium", color: "text-muted", style: items3, children: intl2.string(tmp2(data[19]).t.fEptJP) };
      items3 = [, ];
      ({ centeredText: arr6[0], status: arr6[1] } = tmp);
      const Text2 = tmp2(tmp3[10]).Text;
      intl2 = tmp2(tmp3[19]).intl;
      tmp12 = closure_7(Text2, obj2);
      tmp10 = closure_7;
    } else {
      tmp10 = closure_7;
      const obj3 = { style: tmp.status };
      tmp12 = closure_7(ActivityIndicator, obj3);
    }
    tmp7 = tmp10;
    tmp8 = tmp12;
  } else if (0 === memo.length) {
    const obj4 = { variant: "text-sm/medium", color: "text-muted", style: items4, children: intl.string(stateFromStores(data[20]).v7A3HG) };
    items4 = [, ];
    ({ centeredText: arr5[0], status: arr5[1] } = tmp);
    const Text = tmp2(tmp3[10]).Text;
    intl = tmp2(tmp3[19]).intl;
    tmp8 = closure_7(Text, obj4);
    tmp7 = closure_7;
  } else {
    tmp7 = closure_7;
    const obj5 = {
      spacing: stateFromStores(data[6]).space.PX_24,
      style: tmp.sections,
      children: memo.map((group) => {
          const obj = { group, userId, onInvite };
          return metroImportDefault(GameSection, obj, group.application.id);
        })
    };
    const Stack = tmp2(tmp3[7]).Stack;
    tmp8 = closure_7(Stack, obj5);
  }
  const obj6 = { scrollable: true, dismissAccessibilityLabel: intl3.string(tmp2(data[19]).t.cpT0Cq), header: tmp14(Stack2, obj7), children: tmp8 };
  const ActionSheet = tmp2(tmp3[21]).ActionSheet;
  intl3 = tmp2(tmp3[19]).intl;
  obj7 = { spacing: stateFromStores(data[6]).space.PX_4, style: tmp.header, children: items5 };
  Stack2 = tmp2(tmp3[7]).Stack;
  const obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl4.string(stateFromStores(data[20])["v5/qxX"]) };
  const Heading = tmp2(tmp3[10]).Heading;
  intl4 = tmp2(tmp3[19]).intl;
  items5 = [tmp7(Heading, obj8), ];
  const obj9 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainString(txHfjn, obj10) };
  const Text3 = tmp2(tmp3[10]).Text;
  const intl5 = tmp2(tmp3[19]).intl;
  formatToPlainString = intl5.formatToPlainString;
  txHfjn = tmp5(tmp3[20]).txHfjn;
  const tmp5Result = stateFromStores(data[22]);
  let str = tmp5Result.getName(stateFromStores);
  tmp14 = closure_8;
  if (str == null) {
    str = "";
  }
  obj10 = { username: str, days };
  items5[1] = tmp7(Text3, obj9);
  return tmp7(ActionSheet, obj6);
};
