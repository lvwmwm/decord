// Module ID: 14055
// Function ID: 106764
// Name: ChannelRowItem
// Dependencies: []
// Exports: default

// Module 14055 (ChannelRowItem)
let num = 0;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const StatusTypes = arg1(dependencyMap[2]).StatusTypes;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flexDirection: "row", gap: importDefault(dependencyMap[5]).space.PX_4, borderRadius: importDefault(dependencyMap[5]).radii.sm, paddingVertical: importDefault(dependencyMap[5]).space.PX_8, paddingRight: importDefault(dependencyMap[5]).space.PX_16, paddingLeft: importDefault(dependencyMap[5]).space.PX_8 };
obj.channelItemContainer = obj;
obj.channelItemLeft = {};
const tmp3 = arg1(dependencyMap[3]);
obj.channelItemUnreadIndicator = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.round, margin: importDefault(dependencyMap[5]).space.PX_8 };
const obj2 = { 9223372036854775807: false, 9223372036854775807: false, 9223372036854775807: false, marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.channelItemAvatar = obj2;
obj.channelItemContent = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.round, margin: importDefault(dependencyMap[5]).space.PX_8 };
obj.channelItemTop = { gap: importDefault(dependencyMap[5]).space.PX_4 };
let closure_6 = obj.createStyles(obj);
const obj4 = { direction: arg1(dependencyMap[6]).CutoutDirection.BOTTOM_RIGHT };
const obj3 = { gap: importDefault(dependencyMap[5]).space.PX_4 };
const statusSize = arg1(dependencyMap[6]).getStatusSize(arg1(dependencyMap[6]).AvatarSizes.LARGE_48);
if (null != statusSize) {
  num = statusSize;
}
obj4.radius = num / 2 + 4;
obj4.imageType = arg1(dependencyMap[6]).CutoutType.CIRCULAR;
obj4.inset = -4;
const obj8 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx");

export default function ChannelRowItem(isUnread) {
  let animatedStyles;
  let avatar1;
  let avatar2;
  let preview;
  let status;
  let timestamp;
  let title;
  ({ animatedStyles, preview, avatar1, avatar2, status } = isUnread);
  ({ title, timestamp } = isUnread);
  if (status === undefined) {
    status = StatusTypes.ONLINE;
  }
  let flag = isUnread.isUnread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = callback2();
  let obj = { style: tmp2.channelItemContainer };
  obj = { style: tmp2.channelItemLeft };
  obj = {};
  const items = [tmp2.channelItemUnreadIndicator, ];
  const obj1 = {};
  let num = 0;
  if (flag) {
    num = 1;
  }
  obj1.opacity = num;
  items[1] = obj1;
  obj.style = items;
  obj.children = callback(View, obj);
  const items1 = [callback(View, obj), , ];
  const obj2 = { style: tmp2.channelItemAvatar };
  if (null != avatar2) {
    const obj3 = {};
    const items2 = [avatar1, avatar2];
    obj3.sources = items2;
    obj3.size = arg1(dependencyMap[6]).AvatarSizes.LARGE_48;
    let tmp12 = callback(arg1(dependencyMap[7]).FacepileGroupDMAvatar, obj3);
  } else {
    const obj4 = { status, source: avatar1 };
    obj4.cutout = obj4;
    obj4.size = arg1(dependencyMap[6]).AvatarSizes.LARGE_48;
    tmp12 = callback(arg1(dependencyMap[6]).Avatar, obj4);
  }
  obj2.children = tmp12;
  items1[1] = callback(View, obj2);
  const obj5 = { style: tmp2.channelItemContent };
  const obj6 = { style: tmp2.channelItemTop };
  const items3 = [callback(arg1(dependencyMap[8]).Text, { style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, children: title }), ];
  const obj8 = { "Null": null, "Null": null, "Null": null, style: animatedStyles.textMuted, children: timestamp };
  items3[1] = callback(arg1(dependencyMap[8]).Text, obj8);
  obj6.children = items3;
  const items4 = [closure_5(View, obj6), ];
  if (null == preview) {
    items4[1] = null;
    obj5.children = items4;
    items1[2] = tmp16(tmp17, obj5);
    obj.children = items1;
    return closure_5(tmp4, obj);
  } else {
    const obj9 = { style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, children: preview };
    callback(arg1(dependencyMap[8]).Text, obj9);
    const tmp19 = callback;
  }
};
