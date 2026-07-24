// Module ID: 9598
// Function ID: 74719
// Name: ForumGuidelinesActionSheet
// Dependencies: [57, 31, 27, 5685, 33, 4130, 689, 9173, 1557, 9599, 477, 9600, 4098, 5121, 4544, 1212, 3953, 4321, 7685, 5187, 5189, 4660, 4126, 9142, 7571, 4633, 4120, 9598, 1934, 2]
// Exports: default, openForumGuidelinesActionSheet

// Module 9598 (ForumGuidelinesActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "ForumGuidelinesActionSheet";
import { FORUM_GUIDELINES_ACTION_SHEET as closure_6 } from "FORUM_GUIDELINES_ACTION_SHEET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { scrollContainer: { paddingHorizontal: 16 }, header: { alignItems: "center", paddingTop: 20, paddingBottom: 24 }, headerTitle: { marginTop: 8 } };
_createForOfIteratorHelperLoose = { padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.guidelinesContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.footer = { paddingBottom: 16 };
_createForOfIteratorHelperLoose.buttonWrapper = { marginHorizontal: 16 };
_createForOfIteratorHelperLoose.buttonPill = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj2 = { marginTop: 16, position: "absolute", left: 16, right: 16, shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.floatingButtonContainer = obj2;
_createForOfIteratorHelperLoose.editButton = { display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", top: 12, right: 0 };
_createForOfIteratorHelperLoose.editText = { marginRight: 4 };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.editIcon = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/ForumGuidelinesActionSheet.tsx");

export default function ForumGuidelinesActionSheet(channel) {
  channel = channel.channel;
  const onPress = channel.onPress;
  let c5;
  let pathname;
  let callback;
  function handlePress() {
    if (null != onPress) {
      onPress();
    }
    onPress(bottom[12]).hideActionSheet(pathname);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(bottom[7]);
  let canManageChannel = obj.useCanManageChannel(channel);
  bottom = onPress(bottom[8])().bottom;
  const tmp3 = first(React.useState(), 2);
  let num = 0;
  first = tmp3[0];
  React = tmp3[1];
  const items = [bottom, first];
  const memo = React.useMemo(() => {
    let sum;
    if (null != first) {
      let num2 = 0;
      if (obj.isAndroid()) {
        num2 = bottom;
      }
      sum = 72 + num2 + first + bottom;
      obj = channel(bottom[10]);
    }
    return sum;
  }, items);
  if (null != memo) {
    num = memo;
  }
  let tmp7 = onPress(bottom[9])() < num;
  c5 = tmp7;
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
    const intl = channel(bottom[15]).intl;
    obj.text = intl.string(channel(bottom[15]).t["NX+WJN"]);
    obj.onPress = handlePress;
    ({ buttonWrapper: obj3.style, buttonPill: obj3.pillStyle } = tmp);
    obj.children = callback(channel(bottom[14]).BaseTextButton, obj);
    tmp11 = callback(channel(bottom[13]).SafeAreaPaddingView, obj);
  }
  const items3 = [bottom, tmp7];
  const memo1 = React.useMemo(() => {
    let num = 0;
    if (c5) {
      num = bottom + 40 + 32;
    }
    return num;
  }, items3);
  let obj3 = channel(bottom[16]);
  pathname = obj3.useLocation().pathname;
  callback = React.useRef(true);
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
  let obj2 = { scrollable: true, contentHeight: tmp8, footer: tmp11, onDismiss: channel.onClose };
  obj3 = { style: tmp.scrollContainer, scrollIndicatorInsets: { bottom }, contentContainerStyle: { paddingBottom: memo1 }, onContentSizeChange: callback };
  const obj4 = { style: tmp.header };
  if (canManageChannel) {
    const obj5 = {};
    const intl2 = channel(bottom[15]).intl;
    obj5.accessibilityLabel = intl2.string(channel(bottom[15]).t.bt75uw);
    obj5.accessibilityRole = "button";
    obj5.style = tmp.editButton;
    obj5.onPress = callback1;
    const obj6 = { style: tmp.editText, variant: "text-sm/medium", color: "text-brand" };
    const intl3 = channel(bottom[15]).intl;
    obj6.children = intl3.string(channel(bottom[15]).t.bt75uw);
    const items6 = [callback(channel(bottom[22]).Text, obj6), ];
    const obj7 = { color: tmp.editIcon.color, size: "xs" };
    items6[1] = callback(channel(bottom[23]).PencilIcon, obj7);
    obj5.children = items6;
    canManageChannel = callback2(channel(bottom[21]).PressableOpacity, obj5);
  }
  const items7 = [canManageChannel, , ];
  const obj8 = {};
  const tmp19 = closure_9;
  const tmp20 = callback;
  const tmp21 = c5;
  const tmp5 = onPress(bottom[9])();
  obj8.IconComponent = channel(bottom[25]).BookCheckIcon;
  items7[1] = callback(onPress(bottom[24]), obj8);
  const obj9 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl4 = channel(bottom[15]).intl;
  obj9.children = intl4.string(channel(bottom[15]).t["4d4T4l"]);
  items7[2] = callback(channel(bottom[22]).Text, obj9);
  obj4.children = items7;
  const items8 = [callback2(tmp21, obj4), ];
  const obj10 = { style: tmp.guidelinesContainer };
  const obj11 = { variant: "text-md/medium", color: "text-default" };
  const tmp26 = onPress(bottom[24]);
  const obj12 = { channelId: channel.id, allowHeading: true, allowList: true, allowLinks: true };
  obj11.children = onPress(bottom[26]).parseForumPostGuidelines(channel.topic, true, obj12);
  obj10.children = callback(channel(bottom[22]).Text, obj11);
  items8[1] = callback(c5, obj10);
  obj3.children = items8;
  obj2.children = callback2(channel(bottom[20]).BottomSheetScrollView, obj3);
  const items9 = [tmp20(channel(bottom[19]).BottomSheet, obj2), ];
  if (tmp7) {
    const obj13 = { grow: true };
    const items10 = [tmp.floatingButtonContainer, ];
    const obj14 = { bottom: bottom + 16 };
    items10[1] = obj14;
    obj13.style = items10;
    obj13.pillStyle = tmp.buttonPill;
    const intl5 = channel(bottom[15]).intl;
    obj13.text = intl5.string(channel(bottom[15]).t["NX+WJN"]);
    obj13.onPress = handlePress;
    tmp7 = callback(channel(bottom[14]).BaseTextButton, obj13);
  }
  items9[1] = tmp7;
  obj1.children = items9;
  return callback2(tmp19, obj1);
};
export const openForumGuidelinesActionSheet = function openForumGuidelinesActionSheet(arg0) {
  let obj = importDefault(4098);
  obj = {};
  const merged = Object.assign(arg0);
  obj.openLazy(require(1934) /* maybeLoadBundle */(9598, dependencyMap.paths), closure_6, obj);
};
