// Module ID: 9286
// Function ID: 72563
// Name: DCDChatItem
// Dependencies: []
// Exports: default

// Module 9286 (DCDChatItem)
let requireNativeComponent;
function DCDChatItem(message) {
  message = message.message;
  let obj = Object.create(null);
  obj.message = 0;
  const merged = Object.assign(message, obj);
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    obj = {};
    const merged1 = Object.assign(merged);
    let tmp5Result = callback2(_default3, obj);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = arg1(dependencyMap[11]).MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      const obj1 = {};
      const merged2 = Object.assign(merged);
      tmp5Result = callback2(_default, obj1);
    } else if (importDefault(dependencyMap[12])(message)) {
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ requireNativeComponent, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
const MessageTypes = arg1(dependencyMap[4]).MessageTypes;
const tmp2 = arg1(dependencyMap[2]);
({ RowType: closure_8, Changeset: closure_9 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
if (obj.isFabric()) {
  let _default = arg1(dependencyMap[8]).default;
} else {
  _default = requireNativeComponent("DCDMessageView");
}
const obj = arg1(dependencyMap[7]);
if (obj2.isFabric()) {
  let _default2 = arg1(dependencyMap[9]).default;
} else {
  _default2 = requireNativeComponent("DCDSystemMessageView");
}
const obj2 = arg1(dependencyMap[7]);
if (obj3.isFabric()) {
  let _default3 = arg1(dependencyMap[10]).default;
} else {
  _default3 = requireNativeComponent("DCDAutoModerationSystemMessageView");
}
const obj3 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[13]).createStyles((marginLeft, marginTop) => {
  const offset = { marginTop: -marginTop, marginLeft: -marginLeft };
  return { container: {}, offset, gradient: {}, itemRow: { backgroundColor: "transparent" } };
});
const obj4 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("components_native/chat/ChatItem.tsx");

export default function _default(rowGenerator) {
  let backgroundColor;
  let maxHeight;
  let modifyRow;
  let pointerEvents;
  let tmp4;
  rowGenerator = rowGenerator.rowGenerator;
  const arg1 = rowGenerator;
  const message = rowGenerator.message;
  const importDefault = message;
  let num = rowGenerator.horizontalOffset;
  if (num === undefined) {
    num = 8;
  }
  ({ maxHeight, modifyRow } = rowGenerator);
  const dependencyMap = modifyRow;
  const onLayout = rowGenerator.onLayout;
  let callback = onLayout;
  const messageSizeCacheRef = rowGenerator.messageSizeCacheRef;
  const React = messageSizeCacheRef;
  ({ backgroundColor, pointerEvents } = rowGenerator);
  if (backgroundColor === undefined) {
    backgroundColor = importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWER;
  }
  let closure_5;
  let roleStyle;
  let closure_7;
  roleStyle = undefined;
  let rawRow;
  let token;
  [tmp4, closure_5] = callback(React.useState(0), 2);
  const tmp5 = callback(React.useState(undefined), 2);
  const first = tmp5[0];
  roleStyle = first;
  closure_7 = tmp5[1];
  roleStyle = roleStyle.roleStyle;
  const items = [first, roleStyle, message, modifyRow, rowGenerator];
  const memo = React.useMemo(() => {
    let obj = { constrainedWidth: first };
    rowGenerator.setOptions(obj);
    obj = { roleStyle, rowType: roleStyle.MESSAGE, changeType: rawRow.NOOP, message, isFirst: true, canShowImages: true, canAddNewReactions: false };
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
  const memo1 = React.useMemo(() => {
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
  const tmp9 = callback3(num, memo1);
  const items2 = [onLayout];
  const items3 = [messageSizeCacheRef, message.id];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
    if (null != onLayout) {
      onLayout(nativeEvent);
    }
  }, items2);
  let tmp12 = null != maxHeight;
  const callback1 = React.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      if (null != messageSizeCacheRef) {
        if (messageSizeCacheRef.current[closure_1.id] !== height) {
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
  let obj = { style: tmp9.offset, onLayout: callback1, children: token(DCDChatItem, obj) };
  obj = { message, row: memo.row, style: tmp9.itemRow };
  const tmp14 = closure_5;
  const tmp3 = callback(React.useState(0), 2);
  let obj2 = arg1(dependencyMap[17]);
  token = obj2.useToken(backgroundColor);
  const items4 = [token];
  obj = { style: items5, onLayout: callback, pointerEvents };
  const items5 = [tmp9.container, rowGenerator.style, ];
  const obj1 = { height: tmp13 };
  items5[2] = obj1;
  let tmp19 = null != first;
  const memo2 = React.useMemo(() => {
    const obj = message(modifyRow[18])(token);
    const items = [message(modifyRow[18])(token).alpha(0).hex(), token];
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
    tmp12 = token(importDefault(dependencyMap[19]), obj2);
  }
  items6[1] = tmp12;
  obj.children = items6;
  return closure_11(tmp14, obj);
};
export const DCDMessageView = _default;
export const DCDSystemMessageView = _default2;
export const DCDAutoModerationSystemMessageView = _default3;
