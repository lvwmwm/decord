// Module ID: 9549
// Function ID: 74426
// Name: ForumGuidelinesActionSheet
// Dependencies: []
// Exports: default, openForumGuidelinesActionSheet

// Module 9549 (ForumGuidelinesActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = arg1(dependencyMap[3]).FORUM_GUIDELINES_ACTION_SHEET;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { scrollContainer: { paddingHorizontal: 16 }, header: {}, headerTitle: { marginTop: 8 } };
obj = { padding: 16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.guidelinesContainer = obj;
obj.footer = { paddingBottom: 16 };
obj.buttonWrapper = { marginHorizontal: 16 };
const tmp2 = arg1(dependencyMap[4]);
obj.buttonPill = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.floatingButtonContainer = { shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: { aze: 131072.00314656927, azj: 0.000000000000000000000000000000000000000000000000000000011294471302334573 }, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.editButton = {};
obj.editText = { marginRight: 4 };
const obj2 = { shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: { aze: 131072.00314656927, azj: 0.000000000000000000000000000000000000000000000000000000011294471302334573 }, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.editIcon = { color: importDefault(dependencyMap[6]).colors.TEXT_BRAND };
let closure_10 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[6]).colors.TEXT_BRAND };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/forums/native/ForumGuidelinesActionSheet.tsx");

export default function ForumGuidelinesActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const importDefault = channel.onPress;
  let View;
  let closure_6;
  let callback2;
  function handlePress() {
    if (null != onPress) {
      onPress();
    }
    onPress(bottom[12]).hideActionSheet(pathname);
  }
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  let canManageChannel = obj.useCanManageChannel(channel);
  const bottom = importDefault(dependencyMap[8])().bottom;
  const dependencyMap = bottom;
  const tmp3 = callback(React.useState(), 2);
  let num = 0;
  const first = tmp3[0];
  let callback = first;
  const React = tmp3[1];
  const items = [bottom, first];
  const memo = React.useMemo(() => {
    let sum;
    if (null != first) {
      let num2 = 0;
      if (obj.isAndroid()) {
        num2 = bottom;
      }
      sum = 72 + num2 + first + bottom;
      const obj = channel(bottom[10]);
    }
    return sum;
  }, items);
  if (null != memo) {
    num = memo;
  }
  let tmp7 = importDefault(dependencyMap[9])() < num;
  View = tmp7;
  let tmp8;
  if (!tmp7) {
    tmp8 = memo;
  }
  const items1 = [first];
  const items2 = [channel.id];
  callback = React.useCallback((arg0, arg1) => {
    if (arg1 !== first) {
      callback(arg1);
    }
  }, items1);
  const effect = React.useEffect(() => {
    onPress(bottom[11]).markAsSeen(channel.id);
  }, items2);
  let tmp11 = !tmp7;
  if (!tmp7) {
    obj = { bottom: true, style: tmp.footer };
    obj = { grow: true };
    const intl = arg1(dependencyMap[15]).intl;
    obj.text = intl.string(arg1(dependencyMap[15]).t.NX+WJN);
    obj.onPress = handlePress;
    ({ buttonWrapper: obj3.style, buttonPill: obj3.pillStyle } = tmp);
    obj.children = callback2(arg1(dependencyMap[14]).BaseTextButton, obj);
    tmp11 = callback2(arg1(dependencyMap[13]).SafeAreaPaddingView, obj);
  }
  const items3 = [bottom, tmp7];
  const memo1 = React.useMemo(() => {
    let num = 0;
    if (tmp7) {
      num = bottom + 40 + 32;
    }
    return num;
  }, items3);
  let obj3 = arg1(dependencyMap[16]);
  const pathname = obj3.useLocation().pathname;
  closure_6 = pathname;
  callback2 = React.useRef(true);
  const items4 = [pathname, channel.id];
  const effect1 = React.useEffect(() => {
    const tryParseChannelPathResult = channel(bottom[17]).tryParseChannelPath(pathname);
    if (!ref.current) {
      if (null != tryParseChannelPathResult) {
        if (tryParseChannelPathResult.channelId !== channel.id) {
          onPress(bottom[12]).hideActionSheet(pathname);
          const obj2 = onPress(bottom[12]);
        }
      }
    }
    ref.current = false;
  }, items4);
  const items5 = [channel.id];
  const obj1 = {};
  const callback1 = React.useCallback(() => {
    onPress(bottom[12]).hideActionSheet(pathname);
    const obj = onPress(bottom[12]);
    onPress(bottom[18]).open(channel.id);
  }, items5);
  const obj2 = { scrollable: true, contentHeight: tmp8, footer: tmp11, onDismiss: channel.onClose };
  obj3 = { style: tmp.scrollContainer, scrollIndicatorInsets: { bottom }, contentContainerStyle: { paddingBottom: memo1 }, onContentSizeChange: callback };
  const obj4 = { style: tmp.header };
  if (canManageChannel) {
    const obj5 = {};
    const intl2 = arg1(dependencyMap[15]).intl;
    obj5.accessibilityLabel = intl2.string(arg1(dependencyMap[15]).t.bt75uw);
    obj5.accessibilityRole = "button";
    obj5.style = tmp.editButton;
    obj5.onPress = callback1;
    const obj6 = { style: tmp.editText };
    const intl3 = arg1(dependencyMap[15]).intl;
    obj6.children = intl3.string(arg1(dependencyMap[15]).t.bt75uw);
    const items6 = [callback2(arg1(dependencyMap[22]).Text, obj6), ];
    const obj7 = { color: tmp.editIcon.color, size: "xs" };
    items6[1] = callback2(arg1(dependencyMap[23]).PencilIcon, obj7);
    obj5.children = items6;
    canManageChannel = callback3(arg1(dependencyMap[21]).PressableOpacity, obj5);
  }
  const items7 = [canManageChannel, , ];
  const obj8 = {};
  const tmp19 = closure_9;
  const tmp20 = callback2;
  const tmp21 = View;
  const tmp5 = importDefault(dependencyMap[9])();
  obj8.IconComponent = arg1(dependencyMap[25]).BookCheckIcon;
  items7[1] = callback2(importDefault(dependencyMap[24]), obj8);
  const obj9 = { style: tmp.headerTitle };
  const intl4 = arg1(dependencyMap[15]).intl;
  obj9.children = intl4.string(arg1(dependencyMap[15]).t.4d4T4l);
  items7[2] = callback2(arg1(dependencyMap[22]).Text, obj9);
  obj4.children = items7;
  const items8 = [callback3(tmp21, obj4), ];
  const obj10 = { style: tmp.guidelinesContainer };
  const obj11 = {};
  const tmp26 = importDefault(dependencyMap[24]);
  obj11.children = importDefault(dependencyMap[26]).parseForumPostGuidelines(channel.topic, true, { channelId: channel.id });
  obj10.children = callback2(arg1(dependencyMap[22]).Text, obj11);
  items8[1] = callback2(View, obj10);
  obj3.children = items8;
  obj2.children = callback3(arg1(dependencyMap[20]).BottomSheetScrollView, obj3);
  const items9 = [tmp20(arg1(dependencyMap[19]).BottomSheet, obj2), ];
  if (tmp7) {
    const obj13 = { grow: true };
    const items10 = [tmp.floatingButtonContainer, ];
    const obj14 = { bottom: bottom + 16 };
    items10[1] = obj14;
    obj13.style = items10;
    obj13.pillStyle = tmp.buttonPill;
    const intl5 = arg1(dependencyMap[15]).intl;
    obj13.text = intl5.string(arg1(dependencyMap[15]).t.NX+WJN);
    obj13.onPress = handlePress;
    tmp7 = callback2(arg1(dependencyMap[14]).BaseTextButton, obj13);
  }
  items9[1] = tmp7;
  obj1.children = items9;
  return callback3(tmp19, obj1);
};
export const openForumGuidelinesActionSheet = function openForumGuidelinesActionSheet(arg0) {
  let obj = importDefault(dependencyMap[12]);
  obj = {};
  const merged = Object.assign(arg0);
  obj.openLazy(arg1(dependencyMap[28])(dependencyMap[27], dependencyMap.paths), closure_6, obj);
};
