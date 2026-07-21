// Module ID: 12786
// Function ID: 97963
// Name: getAttachmentsRestriction
// Dependencies: []
// Exports: default

// Module 12786 (getAttachmentsRestriction)
function getAttachmentsRestriction(type) {
  if (type instanceof closure_7) {
    if (callback3(type.type)) {
      let tmp4;
      if (!closure_10.can(constants.ATTACH_FILES, type)) {
        const obj = {};
        const intl = arg1(dependencyMap[14]).intl;
        obj.label = intl.string(arg1(dependencyMap[14]).t.P7yvbm);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ ChannelRecordBase: closure_7, isGuildChannelType: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_11, Permissions: closure_12, MAX_UPLOAD_COUNT: closure_13 } = arg1(dependencyMap[7]));
const MAX_DESTINATION_COUNT = arg1(dependencyMap[8]).MAX_DESTINATION_COUNT;
const UserRowModes = arg1(dependencyMap[9]).UserRowModes;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const obj1 = {};
const tmp4 = arg1(dependencyMap[10]);
let num = 0;
if (obj5.isIOS()) {
  num = importDefault(dependencyMap[12]).space.PX_16;
}
obj1.paddingHorizontal = num;
const obj5 = arg1(dependencyMap[13]);
let num2 = 0;
if (obj6.isIOS()) {
  num2 = importDefault(dependencyMap[12]).space.PX_8;
}
obj1.paddingVertical = num2;
obj.headerContainer = obj1;
let closure_19 = obj.createStyles(obj);
const obj6 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(sharedContent) {
  let tmp6;
  sharedContent = sharedContent.sharedContent;
  const arg1 = sharedContent;
  const onClose = sharedContent.onClose;
  const importDefault = onClose;
  let first1;
  let closure_9;
  let closure_10;
  const tmp = callback4();
  const items = [sharedContent];
  const tmp2 = callback2(React.useState(React.useMemo(() => {
    const items = [];
    if (null != sharedContent.targetUserId) {
      let obj = { type: "user", id: tmp.targetUserId };
      items.push(obj);
    }
    if (null != sharedContent.targetChannelId) {
      obj = { type: "channel", id: tmp.targetChannelId };
      items.push(obj);
    }
    return items;
  }, items)), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let callback = tmp2[1];
  const callback2 = length;
  const React = tmp3;
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  [tmp6, closure_6] = callback2(React.useState(false), 2);
  let closure_7 = React.useRef(tmp6);
  if (first.length <= 1) {
    const intl2 = arg1(dependencyMap[14]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[14]).t.TXNS7S);
  } else {
    const intl = arg1(dependencyMap[14]).intl;
    let obj = { count: length };
    stringResult = intl.formatToPlainString(arg1(dependencyMap[14]).t.jWtYUm, obj);
  }
  const text = sharedContent.text;
  let str = "";
  if (null != text) {
    str = text;
  }
  const tmp13 = callback2(React.useState(str), 2);
  first1 = tmp13[0];
  const tmp15 = importDefault(dependencyMap[15])(first1);
  const embed = tmp15.embed;
  closure_9 = embed;
  const isLoading = tmp15.isLoading;
  closure_10 = isLoading;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [onClose, first, sharedContent.attachments, first1];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = React.useCallback(callback(importDefault), items1);
  obj = { style: tmp.container };
  obj = { style: tmp.headerContainer };
  const memo = React.useMemo(() => {
    if (null != embed) {
      let obj = {};
      obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [callback2(onClose(first[27]), obj), ];
      obj = {};
      let embed;
      if (null != embed) {
        embed = embed.embed;
      }
      obj.embed = embed;
      obj.isLoadingEmbed = isLoading;
      obj.isRevamp = true;
      items[1] = callback2(onClose(first[28]), obj);
      obj.children = items;
      let tmp3Result = closure_18(closure_17, obj);
      const tmp3 = closure_18;
      const tmp4 = closure_17;
      const tmp5 = callback2;
      const tmp9 = onClose(first[28]);
    } else {
      tmp3Result = null;
    }
    return tmp3Result;
  }, items2);
  const obj1 = {};
  const intl3 = arg1(dependencyMap[14]).intl;
  obj1.title = intl3.string(arg1(dependencyMap[14]).t.MR7/kg);
  obj1.headerTitle = function headerTitle(children) {
    if (tmp3) {
      const intl2 = sharedContent(first[14]).intl;
      let obj = { limit: closure_13 };
      let formatToPlainStringResult = intl2.formatToPlainString(sharedContent(first[14]).t.qqyp/e, obj);
    } else if (length >= closure_14) {
      const intl = sharedContent(first[14]).intl;
      obj = { count: closure_14 };
      formatToPlainStringResult = intl.formatToPlainString(sharedContent(first[14]).t.3Fbkir, obj);
    }
    obj = { title: children.children, subtitle: formatToPlainStringResult, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" };
    return callback2(sharedContent(first[30]).GenericHeaderTitle, obj);
  };
  obj1.headerTitleAlign = "center";
  const tmp18 = closure_18;
  const tmp5 = callback2(React.useState(false), 2);
  let headerCloseButton;
  if (!obj5.isMetaQuest()) {
    headerCloseButton = arg1(dependencyMap[32]).getHeaderCloseButton(onClose);
    const obj6 = arg1(dependencyMap[32]);
  }
  obj1.headerLeft = headerCloseButton;
  const obj5 = arg1(dependencyMap[31]);
  let num4;
  if (obj7.isIOS()) {
    num4 = 0;
  }
  obj1.headerStatusBarHeight = num4;
  obj.children = closure_16(arg1(dependencyMap[29]).Header, obj1);
  const items3 = [closure_16(View, obj), , ];
  const obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: first, onSelectedDestinationChange: callback };
  let tmp26;
  const obj7 = arg1(dependencyMap[13]);
  const tmp24 = closure_16;
  if (sharedContent.attachments.length > 0) {
    tmp26 = getAttachmentsRestriction;
  }
  obj2.getRowIsUnavailable = tmp26;
  obj2.insetEnd = 0;
  obj2.disableGradient = true;
  obj2.disableStickySections = true;
  obj2.disableSelection = first.length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  const tmp25 = importDefault(dependencyMap[33]);
  obj2.disableLongPress = arg1(dependencyMap[13]).isAndroid();
  items3[1] = tmp24(tmp25, obj2);
  const obj3 = { text: first1, setText: tmp13[1], preview: memo, sendLabel: stringResult };
  let tmp29 = length > 0;
  const obj9 = arg1(dependencyMap[13]);
  const tmp27 = closure_16;
  if (tmp29) {
    tmp29 = !tmp3;
  }
  obj3.canSend = tmp29;
  obj3.isSending = tmp6;
  obj3.onSend = callback1;
  obj3.disabled = sharedContent.attachments.length > closure_13;
  obj3.appEntryKey = sharedContent.appEntryKey;
  items3[2] = tmp27(importDefault(dependencyMap[34]), obj3);
  obj.children = items3;
  return tmp18(View, obj);
};
