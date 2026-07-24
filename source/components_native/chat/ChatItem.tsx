// Module ID: 9329
// Function ID: 72813
// Name: DCDChatItem
// Dependencies: [57, 31, 27, 4122, 653, 7711, 33, 3994, 9330, 9331, 9332, 663, 5651, 4130, 689, 477, 7899, 3834, 666, 4554, 2]
// Exports: default

// Module 9329 (DCDChatItem)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MessageTypes } from "ME";
import Changeset from "Changeset";
import jsxProd from "jsxProd";
import isFabric from "isFabric";
import isFabric from "isFabric";
import isFabric from "isFabric";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_8;
let closure_9;
let requireNativeComponent;
const require = arg1;
function DCDChatItem(message) {
  message = message.message;
  let obj = Object.create(null);
  obj.message = 0;
  const merged = Object.assign(message, obj);
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    obj = {};
    const merged1 = Object.assign(merged);
    let tmp5Result = callback(_default3, obj);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = require(663) /* set */.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      const obj1 = {};
      const merged2 = Object.assign(merged);
      tmp5Result = callback(_default, obj1);
    } else if (importDefault(5651)(message)) {
      const obj2 = {};
      const merged3 = Object.assign(merged);
      tmp5Result = tmp5(_default2, obj2);
    } else {
      obj = {};
      const merged4 = Object.assign(merged);
      tmp5Result = tmp5(_default, obj);
    }
  }
  return tmp5Result;
}
({ requireNativeComponent, View: closure_5 } = get_ActivityIndicator);
({ RowType: closure_8, Changeset: closure_9 } = Changeset);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
if (isFabric.isFabric()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = requireNativeComponent("DCDMessageView");
}
if (isFabric.isFabric()) {
  let _default2 = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default2 = requireNativeComponent("DCDSystemMessageView");
}
if (isFabric.isFabric()) {
  let _default3 = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default3 = requireNativeComponent("DCDAutoModerationSystemMessageView");
}
let closure_15 = _createForOfIteratorHelperLoose.createStyles((marginLeft, marginTop) => {
  const offset = { marginTop: -marginTop, marginLeft: -marginLeft };
  return { container: { position: "relative", overflow: "hidden" }, offset, gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" }, itemRow: { backgroundColor: "transparent" } };
});
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/chat/ChatItem.tsx");

export default function _default(rowGenerator) {
  let backgroundColor;
  let c6;
  let maxHeight;
  let modifyRow;
  let pointerEvents;
  let tmp4;
  rowGenerator = rowGenerator.rowGenerator;
  const message = rowGenerator.message;
  let num = rowGenerator.horizontalOffset;
  if (num === undefined) {
    num = 8;
  }
  ({ maxHeight, modifyRow } = rowGenerator);
  const onLayout = rowGenerator.onLayout;
  const messageSizeCacheRef = rowGenerator.messageSizeCacheRef;
  ({ backgroundColor, pointerEvents } = rowGenerator);
  if (backgroundColor === undefined) {
    backgroundColor = message(modifyRow[14]).colors.BACKGROUND_BASE_LOWER;
  }
  const gradientColors = rowGenerator.gradientColors;
  let roleStyle;
  let first;
  let closure_8;
  roleStyle = undefined;
  let rawRow;
  let token;
  [tmp4, c6] = onLayout(messageSizeCacheRef.useState(0), 2);
  const tmp5 = onLayout(messageSizeCacheRef.useState(undefined), 2);
  first = tmp5[0];
  closure_8 = tmp5[1];
  roleStyle = roleStyle.roleStyle;
  let items = [first, roleStyle, message, modifyRow, rowGenerator];
  const memo = messageSizeCacheRef.useMemo(() => {
    let obj = { constrainedWidth: first };
    rowGenerator.setOptions(obj);
    obj = { roleStyle, rowType: lib.MESSAGE, changeType: roleStyle.NOOP, message, isFirst: true, canShowImages: true, canAddNewReactions: false };
    const generateResult = rowGenerator.generate(obj);
    if (null != modifyRow) {
      modifyRow(generateResult);
    }
    obj = { rawRow: generateResult };
    let json = generateResult;
    if (obj4.isFabric()) {
      const _JSON = JSON;
      const obj1 = { index: 0 };
      const merged = Object.assign(generateResult);
      json = JSON.stringify(obj1);
    }
    obj.row = json;
    return obj;
  }, items);
  rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const memo1 = messageSizeCacheRef.useMemo(() => {
    let num = 0;
    if (!obj.isAndroid()) {
      let num2 = 16;
      if (rawRow.contextType === rowGenerator(modifyRow[16]).MessageContextType.SEARCH) {
        num2 = 12;
      }
      num = num2;
    }
    return num;
  }, items1);
  const tmp9 = callback2(num, memo1);
  const items2 = [onLayout];
  const items3 = [messageSizeCacheRef, message.id];
  const callback = messageSizeCacheRef.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.width);
    if (null != onLayout) {
      onLayout(nativeEvent);
    }
  }, items2);
  let tmp12 = null != maxHeight;
  const callback1 = messageSizeCacheRef.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      if (null != messageSizeCacheRef) {
        if (messageSizeCacheRef.current[message.id] !== height) {
          messageSizeCacheRef.current[message.id] = height;
        }
      }
      _undefined(height);
    }
  }, items3);
  if (tmp12) {
    tmp12 = tmp4 - memo1 >= maxHeight;
  }
  let tmp13;
  if (null != messageSizeCacheRef) {
    const current = messageSizeCacheRef.current;
    if (null != current) {
      tmp13 = current[message.id];
    }
  }
  if (tmp12) {
    tmp13 = maxHeight;
  }
  obj = { style: tmp9.offset, onLayout: callback1, children: rawRow(DCDChatItem, obj) };
  obj = { message, row: memo.row, style: tmp9.itemRow };
  const tmp14 = gradientColors;
  const tmp3 = onLayout(messageSizeCacheRef.useState(0), 2);
  let obj2 = rowGenerator(modifyRow[17]);
  token = obj2.useToken(backgroundColor);
  const items4 = [gradientColors, token];
  obj = { style: items5, onLayout: callback, pointerEvents };
  items5 = [tmp9.container, rowGenerator.style, ];
  let obj1 = { height: tmp13 };
  items5[2] = obj1;
  let tmp19 = null != first;
  const memo2 = messageSizeCacheRef.useMemo(() => {
    if (null != gradientColors) {
      let items = gradientColors;
    } else {
      const obj = message(modifyRow[18])(token);
      items = [message(modifyRow[18])(token).alpha(0).hex(), token];
      const alphaResult = message(modifyRow[18])(token).alpha(0);
    }
    return items;
  }, items4);
  if (tmp19) {
    tmp19 = tmp15;
  }
  const items6 = [tmp19, ];
  if (tmp12) {
    obj2 = { colors: memo2 };
    const items7 = [tmp9.gradient, rowGenerator.gradientStyles];
    obj2.style = items7;
    tmp12 = rawRow(message(modifyRow[19]), obj2);
  }
  items6[1] = tmp12;
  obj.children = items6;
  return token(tmp14, obj);
};
export const DCDMessageView = _default;
export const DCDSystemMessageView = _default2;
export const DCDAutoModerationSystemMessageView = _default3;
