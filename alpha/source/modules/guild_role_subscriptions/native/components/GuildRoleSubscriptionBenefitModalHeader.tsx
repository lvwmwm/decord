// Module ID: 19967
// Function ID: 19968
// Name: GuildRoleSubscriptionBenefitModalHeader
// Dependencies: [32, 19, 17, 21, 5014, 575, 17203, 7292, 9109, 5624, 1113, 6998, 2]
// Exports: default

// Module 19967 (GuildRoleSubscriptionBenefitModalHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9109 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { headerContainer: obj2, headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 }, headerButtonStart: { alignItems: "flex-start" }, headerButtonEnd: { alignItems: "flex-end" }, titleContainer: { flex: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let listingId;
  let obj4;
  let obj7;
  let onClose;
  let onSave;
  let title;
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useName(listingId), 1)[0];
  const obj2 = { top: true, style: tmp.headerContainer, children: items1 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj3 = { style: items, accessibilityRole: "button", onPress: onClose, children: metroRequire(Text, obj4) };
  items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj4 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(intl3.t["ETE/oC"]) };
  const tmp7 = TouchableHitBoxDefault;
  Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [metroRequire(tmp7, obj3), , ];
  const obj5 = { style: tmp.titleContainer, children: metroRequire(NavigatorHeader.NavigatorHeader, { title, subtitle: first }) };
  items1[1] = metroRequire(View, obj5);
  const obj6 = { style: items2, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: metroRequire(Text2, obj7) };
  items2 = [, ];
  ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp);
  let str = "text-muted";
  const tmp8 = TouchableHitBoxDefault;
  Text2 = Text_Text.Text;
  const tmp4 = metroImportDefault;
  if (canSave) {
    str = "interactive-text-active";
  }
  obj7 = { variant: "text-md/medium", color: str, children: intl2.string(intl3.t["R3BPH+"]) };
  intl2 = tmp5(1113).intl;
  items1[2] = metroRequire(tmp8, obj6);
  return tmp4(SafeAreaPaddingView, obj2);
};
