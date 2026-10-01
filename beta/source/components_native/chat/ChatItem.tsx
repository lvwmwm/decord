// Module ID: 8112
// Function ID: 8113
// Name: ChatItem
// Dependencies: [32, 19, 17, 4825, 1074, 7375, 21, 576, 8113, 1090, 8114, 6688, 8115, 4836, 1364, 7583, 4531, 672, 5293, 2]
// Exports: default

// Module 8112 (ChatItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import MessageTypes2 from "MessageTypes" /* 1090 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import isSystemMessageDefault from "isSystemMessage" /* 6688 */;
import AutoModerationSystemMessageViewNativeComponent from "AutoModerationSystemMessageViewNativeComponent" /* 8113 */;
import MessageViewNativeComponent from "MessageViewNativeComponent" /* 8114 */;
import SystemMessageViewNativeComponent from "SystemMessageViewNativeComponent" /* 8115 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4825 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7375 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let tmp;
let unpackModuleId;
const RowGeneratorTypes = tmp(7583);
function DCDChatItem(message) {
  let tmp3Result;
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    const obj2 = {};
    const _default4 = AutoModerationSystemMessageViewNativeComponent.default;
    const merged1 = Object.assign(merged);
    tmp3Result = authStore(_default4, obj2);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = MessageTypes2.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      const obj3 = {};
      const _default3 = MessageViewNativeComponent.default;
      const merged2 = Object.assign(merged);
      tmp3Result = authStore(_default3, obj3);
    } else if (isSystemMessageDefault(message)) {
      const obj4 = {};
      const _default2 = SystemMessageViewNativeComponent.default;
      const merged3 = Object.assign(merged);
      tmp3Result = tmp3(_default2, obj4);
    } else {
      const obj = {};
      const _default = MessageViewNativeComponent.default;
      const merged4 = Object.assign(merged);
      tmp3Result = tmp3(_default, obj);
    }
  }
  return tmp3Result;
}
const View = react_native.View;
let AccessibilityStore = AccessibilityStore_mod;
const MessageTypes = Constants.MessageTypes;
({ RowType: metroImportAll, Changeset: c9 } = RowGeneratorConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
let closure_14 = createStyles.createStyles((marginLeft, marginTop, paddingTop) => {
  const obj = { container: obj2, offset: obj3, gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" }, itemRow: { backgroundColor: "transparent" } };
  return obj;
});
const result = size.fileFinishedImporting("components_native/chat/ChatItem.tsx");

export default function _default(rowGenerator) {
  let _undefined;
  let backgroundColor;
  let c6;
  let items5;
  let items6;
  let items7;
  let maxHeight;
  let modifyRow;
  let obj3;
  let pointerEvents;
  let tmp4;
  rowGenerator = rowGenerator.rowGenerator;
  const message = rowGenerator.message;
  let num = rowGenerator.horizontalOffset;
  const style = rowGenerator.style;
  if (num === undefined) {
    num = 8;
  }
  ({ maxHeight, modifyRow } = rowGenerator);
  const onLayout = rowGenerator.onLayout;
  const messageSizeCacheRef = rowGenerator.messageSizeCacheRef;
  ({ backgroundColor, pointerEvents } = rowGenerator);
  if (backgroundColor === undefined) {
    let tmp = message;
    backgroundColor = message(modifyRow[7]).colors.BACKGROUND_BASE_LOWER;
  }
  const gradientColors = rowGenerator.gradientColors;
  AccessibilityStore = undefined;
  let token;
  let obj = messageSizeCacheRef;
  const gradientStyles = rowGenerator.gradientStyles;
  const tmp3 = onLayout(messageSizeCacheRef.useState(0), 2);
  [tmp4, c6] = tmp3;
  const tmp5 = onLayout(messageSizeCacheRef.useState(undefined), 2);
  const constrainedWidth = tmp5[0];
  let closure_8 = tmp5[1];
  const roleStyle = AccessibilityStore.roleStyle;
  let items = [constrainedWidth, roleStyle, message, modifyRow, rowGenerator];
  const memo = messageSizeCacheRef.useMemo(() => {
    let obj4;
    let stringify;
    const obj = { constrainedWidth };
    rowGenerator.setOptions(obj);
    const obj2 = { roleStyle, rowType: metroImportAll.MESSAGE, changeType: roleStyle.NOOP, message, isFirst: true, canShowImages: true, canAddNewReactions: false };
    const generateResult = rowGenerator.generate(obj2);
    if (null != modifyRow) {
      tmp3(generateResult);
    }
    const obj3 = { rawRow: generateResult, row: stringify(obj4) };
    stringify = JSON.stringify;
    obj4 = { index: 0 };
    const merged = Object.assign(generateResult);
    return obj3;
  }, items);
  const rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const row = memo.row;
  const memo1 = messageSizeCacheRef.useMemo(() => {
    let num = 0;
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      let num2 = 16;
      if (rawRow.contextType === RowGeneratorTypes.MessageContextType.SEARCH) {
        num2 = 12;
      }
      num = num2;
    }
    return num;
  }, items1);
  let num2 = 0;
  const tmp11 = rawRow.contextType !== rowGenerator(modifyRow[15]).MessageContextType.SEARCH && null != rawRow.message && "avatarDecorationURL" in rawRow.message && null != rawRow.message.avatarDecorationURL;
  if (tmp11) {
    const tmp9Result = rowGenerator(modifyRow[14]);
    num2 = tmp9Result.isAndroid() ? tmp14 - 2 : tmp14;
  }
  const tmp15 = closure_14(num, memo1, num2);
  const items2 = [onLayout];
  const items3 = [messageSizeCacheRef, message.id];
  const callback = obj.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
    if (onLayout != null) {
      onLayout(nativeEvent);
    }
  }, items2);
  let tmp21Result = null != maxHeight;
  const callback1 = obj.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      if (null != messageSizeCacheRef) {
        if (messageSizeCacheRef.current[message.id] !== height) {
          messageSizeCacheRef.current[tmp3.id] = height;
        }
      }
      _undefined(height);
    }
  }, items3);
  if (tmp21Result) {
    tmp21Result = tmp4 - memo1 >= maxHeight;
  }
  let tmp19;
  if (messageSizeCacheRef != null) {
    const current = messageSizeCacheRef.current;
    if (current != null) {
      tmp19 = current[message.id];
    }
  }
  let sum = tmp19;
  if (tmp21Result) {
    sum = tmp19;
    if (null != maxHeight) {
      sum = maxHeight + num2;
    }
  }
  let obj2 = { style: tmp15.offset, onLayout: callback1, children: rawRow(DCDChatItem, obj3) };
  obj3 = { message, row, style: tmp15.itemRow };
  const tmp23 = rawRow(gradientColors, obj2);
  const tmp9Result2 = rowGenerator(modifyRow[16]);
  token = tmp9Result2.useToken(backgroundColor);
  const items4 = [gradientColors, token];
  let obj4 = { style: items5, onLayout: callback, pointerEvents, children: items6 };
  items5 = [tmp15.container, style, { height: sum }];
  let tmp27 = null != constrainedWidth;
  const memo2 = obj.useMemo(() => {
    let tmp = gradientColors;
    if (gradientColors == null) {
      const items = [, ];
      const obj = _modDef672(token);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      items[1] = token;
      tmp = items;
    }
    return tmp;
  }, items4);
  const tmp21 = rawRow;
  const tmp22 = gradientColors;
  const tmp26 = token;
  if (tmp27) {
    tmp27 = tmp23;
  }
  items6 = [tmp27, ];
  if (tmp21Result) {
    const obj5 = { colors: memo2, style: items7 };
    items7 = [tmp15.gradient, gradientStyles];
    tmp21Result = tmp21(message(tmp10[18]), obj5);
  }
  items6[1] = tmp21Result;
  return tmp26(tmp22, obj4);
};
export const DCDMessageView = MessageViewNativeComponent.default;
export const DCDSystemMessageView = SystemMessageViewNativeComponent.default;
export const DCDAutoModerationSystemMessageView = AutoModerationSystemMessageViewNativeComponent.default;
