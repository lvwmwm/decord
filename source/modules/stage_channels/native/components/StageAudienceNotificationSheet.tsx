// Module ID: 7633
// Function ID: 60767
// Name: handleDismiss
// Dependencies: [31, 27, 1353, 4947, 1354, 33, 4130, 689, 4098, 1273, 566, 7634, 5085, 7635, 4126, 1212, 7636, 7670, 7671, 7672, 7673, 4543, 2]
// Exports: default

// Module 7633 (handleDismiss)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { STAGE_AUDIENCE_NOTICE_SHEET_KEY as closure_5 } from "MAX_STAGE_TOPIC_LENGTH";
import { GuildScheduledEventPrivacyLevel as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function handleDismiss() {
  importDefault(4098).hideActionSheet(closure_5);
}
function BulletIcon(source) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.headerBulletIconContainer };
  obj = { source: source.source, size: require(1273) /* Button */.Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  return callback(View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, header: { alignItems: "center", paddingVertical: 16 }, headerImage: {}, headerTitle: { marginTop: 16, marginBottom: 8 } };
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.headerBulletIconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerBulletIconComponent = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.headerBulletList = { flexDirection: "column", alignItems: "flex-start" };
_createForOfIteratorHelperLoose.headerBullet = { lineHeight: 20 };
_createForOfIteratorHelperLoose.startButton = { marginTop: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default function StageAudienceNotificationSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (null != stateFromStores) {
    privacy_level = stateFromStores.privacy_level;
  }
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { style: tmp.header };
  const obj2 = {};
  const tmp4 = callback;
  const tmp5 = importDefault(7634);
  const tmp7 = View;
  const tmp8 = View;
  obj2.source = importDefault(7635);
  obj2.style = tmp.headerImage;
  const items1 = [callback(importDefault(5085), obj2), , ];
  const obj3 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = channelId(1212).intl;
  obj3.children = intl.string(channelId(1212).t.UVuXCs);
  items1[1] = callback(channelId(4126).Text, obj3);
  const obj4 = { style: tmp.headerBulletList };
  const obj5 = {};
  const obj6 = { source: importDefault(7670) };
  obj5.leading = callback(BulletIcon, obj6);
  const obj7 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default" };
  const intl2 = channelId(1212).intl;
  obj7.children = intl2.string(channelId(1212).t.sBDfo6);
  obj5.label = callback(channelId(4126).Text, obj7);
  const items2 = [callback(channelId(7636).FormRow, obj5), , , ];
  const obj8 = {};
  const obj9 = { source: importDefault(7671) };
  obj8.leading = callback(BulletIcon, obj9);
  const obj10 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default" };
  const intl3 = channelId(1212).intl;
  obj10.children = intl3.string(channelId(1212).t.x58YtH);
  obj8.label = callback(channelId(4126).Text, obj10);
  items2[1] = callback(channelId(7636).FormRow, obj8);
  const obj11 = {};
  const obj12 = { source: importDefault(7672) };
  obj11.leading = callback(BulletIcon, obj12);
  const obj13 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default" };
  const intl4 = channelId(1212).intl;
  obj13.children = intl4.string(channelId(1212).t.XtVqla);
  obj11.label = callback(channelId(4126).Text, obj13);
  items2[2] = callback(channelId(7636).FormRow, obj11);
  let tmp11 = null;
  if (privacy_level === constants.PUBLIC) {
    const obj14 = {};
    const obj15 = { source: importDefault(7673) };
    obj14.leading = callback(BulletIcon, obj15);
    const obj16 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default" };
    const intl6 = channelId(1212).intl;
    obj16.children = intl6.string(channelId(1212).t.nDsbJg);
    obj14.label = callback(channelId(4126).Text, obj16);
    tmp11 = callback(channelId(7636).FormRow, obj14);
  }
  items2[3] = tmp11;
  obj4.children = items2;
  items1[2] = closure_8(View, obj4);
  obj1.children = items1;
  const items3 = [closure_8(tmp8, obj1), ];
  const obj17 = { style: tmp.startButton };
  const obj18 = {};
  const intl5 = channelId(1212).intl;
  obj18.text = intl5.string(channelId(1212).t.obLqZ8);
  obj18.onPress = handleDismiss;
  obj17.children = callback(channelId(4543).Button, obj18);
  items3[1] = callback(View, obj17);
  obj.children = items3;
  obj.children = closure_8(tmp7, obj);
  return tmp4(tmp5, obj);
};
