// Module ID: 8050
// Function ID: 8051
// Name: StageAudienceNotificationSheet
// Dependencies: [19, 17, 2050, 5726, 2051, 21, 4836, 576, 4800, 1177, 504, 8051, 5899, 8052, 4832, 1115, 8053, 8074, 8075, 8076, 8077, 5281, 2]
// Exports: default

// Module 8050 (StageAudienceNotificationSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8051 */;
import AssetRegistryDefault from "AssetRegistry" /* 8052 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8074 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8075 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8076 */;
import react from "react" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let tmp7;
const AssetRegistryDefault5 = tmp7(8077);
function handleDismiss() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(closure_5);
}
function BulletIcon(source) {
  let Icon;
  let obj2;
  source = source.source;
  const tmp = closure_9();
  const obj = { style: tmp.headerBulletIconContainer, children: metroImportDefault(Icon, obj2) };
  obj2 = { source, size: native.Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent };
  Icon = native.Icon;
  return metroImportDefault(View, obj);
}
const View = react_native.View;
let closure_5 = StageChannelsConstants.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
const constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, header: { alignItems: "center", paddingVertical: 16 }, headerImage: {}, headerTitle: { marginTop: 16, marginBottom: 8 }, headerBulletIconContainer: size, headerBulletIconComponent: obj2, headerBulletList: { flexDirection: "column", alignItems: "flex-start" }, headerBullet: { lineHeight: 20 }, startButton: { marginTop: 0 } };
size = { alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default function StageAudienceNotificationSheet(channelId) {
  let Button;
  let Text2;
  let Text3;
  let Text4;
  let Text5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj21;
  let obj8;
  let obj9;
  channelId = channelId.channelId;
  const tmp = closure_9();
  const items = [StageInstanceStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  const PUBLIC = constants.PUBLIC;
  const obj2 = { style: tmp.container, children: items3 };
  const obj3 = { style: tmp.header, children: items1 };
  const obj4 = { source: AssetRegistryDefault, style: tmp.headerImage };
  const tmp8 = ScrollHandlingActionSheetDefault;
  const tmp11 = FastImageDefault;
  items1 = [closure_7(tmp11, obj4), , ];
  const obj5 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(channelId(1115).t.UVuXCs) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items1[1] = closure_7(Text, obj5);
  const obj6 = { style: tmp.headerBulletList, children: items2 };
  const obj7 = { leading: closure_7(BulletIcon, obj8), label: closure_7(Text2, obj9) };
  obj8 = { source: AssetRegistryDefault2 };
  const FormRow = tmp2(8053).FormRow;
  obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl2.string(channelId(1115).t.sBDfo6) };
  Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items2 = [closure_7(FormRow, obj7), , , ];
  const obj10 = { leading: closure_7(BulletIcon, obj11), label: closure_7(Text3, obj12) };
  obj11 = { source: AssetRegistryDefault3 };
  const FormRow2 = tmp2(8053).FormRow;
  obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl3.string(channelId(1115).t.x58YtH) };
  Text3 = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items2[1] = closure_7(FormRow2, obj10);
  const obj13 = { leading: closure_7(BulletIcon, obj14), label: closure_7(Text4, obj15) };
  obj14 = { source: AssetRegistryDefault4 };
  const FormRow3 = tmp2(8053).FormRow;
  obj15 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl4.string(channelId(1115).t.XtVqla) };
  Text4 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items2[2] = closure_7(FormRow3, obj13);
  let tmp6Result = null;
  const tmp12 = BulletIcon;
  if (privacy_level === PUBLIC) {
    const obj16 = { leading: closure_7(tmp12, obj17), label: closure_7(Text5, obj18) };
    obj17 = { source: AssetRegistryDefault5 };
    const FormRow4 = tmp2(8053).FormRow;
    obj18 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl6.string(channelId(1115).t.nDsbJg) };
    Text5 = tmp2(4832).Text;
    intl6 = tmp2(1115).intl;
    tmp6Result = tmp6(FormRow4, obj16);
  }
  items2[3] = tmp6Result;
  const obj19 = { children: closure_8(View, obj2) };
  items1[2] = closure_8(View, obj6);
  items3 = [closure_8(View, obj3), ];
  const obj20 = { style: tmp.startButton, children: closure_7(Button, obj21) };
  obj21 = { text: intl5.string(channelId(1115).t.obLqZ8), onPress: handleDismiss };
  Button = tmp2(5281).Button;
  intl5 = tmp2(1115).intl;
  items3[1] = closure_7(View, obj20);
  return closure_7(tmp8, obj19);
};
