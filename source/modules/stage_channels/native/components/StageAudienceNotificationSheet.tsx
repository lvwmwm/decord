// Module ID: 7572
// Function ID: 60563
// Name: handleDismiss
// Dependencies: []
// Exports: default

// Module 7572 (handleDismiss)
function handleDismiss() {
  importDefault(dependencyMap[8]).hideActionSheet(closure_5);
}
function BulletIcon(source) {
  const tmp = callback2();
  let obj = { style: tmp.headerBulletIconContainer };
  obj = { source: source.source, size: arg1(dependencyMap[9]).Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent };
  obj.children = callback(arg1(dependencyMap[9]).Icon, obj);
  return callback(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).STAGE_AUDIENCE_NOTICE_SHEET_KEY;
let closure_6 = arg1(dependencyMap[4]).GuildScheduledEventPrivacyLevel;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: { padding: 16 }, header: { "Null": 52881784.83212474, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 }, headerImage: {}, headerTitle: {} };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.headerBulletIconContainer = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.headerBulletIconComponent = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.headerBulletList = {};
obj.headerBullet = { lineHeight: 20 };
obj.startButton = { marginTop: 0 };
let closure_9 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default function StageAudienceNotificationSheet(channelId) {
  const arg1 = channelId.channelId;
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => stageInstanceByChannel.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (null != stateFromStores) {
    privacy_level = stateFromStores.privacy_level;
  }
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { style: tmp.header };
  const obj2 = {};
  const tmp4 = callback;
  const tmp5 = importDefault(dependencyMap[11]);
  const tmp7 = View;
  const tmp8 = View;
  obj2.source = importDefault(dependencyMap[13]);
  obj2.style = tmp.headerImage;
  const items1 = [callback(importDefault(dependencyMap[12]), obj2), , ];
  const obj3 = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.headerTitle };
  const intl = arg1(dependencyMap[15]).intl;
  obj3.children = intl.string(arg1(dependencyMap[15]).t.UVuXCs);
  items1[1] = callback(arg1(dependencyMap[14]).Text, obj3);
  const obj4 = { style: tmp.headerBulletList };
  const obj5 = {};
  const obj6 = { source: importDefault(dependencyMap[17]) };
  obj5.leading = callback(BulletIcon, obj6);
  const obj7 = { style: tmp.headerBullet };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj7.children = intl2.string(arg1(dependencyMap[15]).t.sBDfo6);
  obj5.label = callback(arg1(dependencyMap[14]).Text, obj7);
  const items2 = [callback(arg1(dependencyMap[16]).FormRow, obj5), , , ];
  const obj8 = {};
  const obj9 = { source: importDefault(dependencyMap[18]) };
  obj8.leading = callback(BulletIcon, obj9);
  const obj10 = { style: tmp.headerBullet };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj10.children = intl3.string(arg1(dependencyMap[15]).t.x58YtH);
  obj8.label = callback(arg1(dependencyMap[14]).Text, obj10);
  items2[1] = callback(arg1(dependencyMap[16]).FormRow, obj8);
  const obj11 = {};
  const obj12 = { source: importDefault(dependencyMap[19]) };
  obj11.leading = callback(BulletIcon, obj12);
  const obj13 = { style: tmp.headerBullet };
  const intl4 = arg1(dependencyMap[15]).intl;
  obj13.children = intl4.string(arg1(dependencyMap[15]).t.XtVqla);
  obj11.label = callback(arg1(dependencyMap[14]).Text, obj13);
  items2[2] = callback(arg1(dependencyMap[16]).FormRow, obj11);
  let tmp11 = null;
  if (privacy_level === constants.PUBLIC) {
    const obj14 = {};
    const obj15 = { source: importDefault(dependencyMap[20]) };
    obj14.leading = callback(BulletIcon, obj15);
    const obj16 = { style: tmp.headerBullet };
    const intl6 = arg1(dependencyMap[15]).intl;
    obj16.children = intl6.string(arg1(dependencyMap[15]).t.nDsbJg);
    obj14.label = callback(arg1(dependencyMap[14]).Text, obj16);
    tmp11 = callback(arg1(dependencyMap[16]).FormRow, obj14);
  }
  items2[3] = tmp11;
  obj4.children = items2;
  items1[2] = closure_8(View, obj4);
  obj1.children = items1;
  const items3 = [closure_8(tmp8, obj1), ];
  const obj17 = { style: tmp.startButton };
  const obj18 = {};
  const intl5 = arg1(dependencyMap[15]).intl;
  obj18.text = intl5.string(arg1(dependencyMap[15]).t.obLqZ8);
  obj18.onPress = handleDismiss;
  obj17.children = callback(arg1(dependencyMap[21]).Button, obj18);
  items3[1] = callback(View, obj17);
  obj.children = items3;
  obj.children = closure_8(tmp7, obj);
  return tmp4(tmp5, obj);
};
