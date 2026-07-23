// Module ID: 12907
// Function ID: 100152
// Name: getAttachmentsRestriction
// Dependencies: [5, 57, 31, 27, 1352, 1348, 3758, 653, 9875, 8818, 33, 4130, 689, 477, 1212, 12908, 7089, 1327, 12909, 4370, 675, 9878, 4138, 8333, 9907, 1934, 4472, 12910, 12911, 5094, 9122, 1553, 5087, 9883, 12912, 2]
// Exports: default

// Module 12907 (getAttachmentsRestriction)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import isMetaQuest from "isMetaQuest";
import { View } from "ShareAttachments";
import _callSuper from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { MAX_DESTINATION_COUNT } from "MAX_DESTINATION_COUNT";
import { UserRowModes } from "UserRowModes";
import jsxProd from "SearchableDestinationList";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "result";

let closure_11;
let closure_12;
let closure_13;
let closure_16;
let closure_17;
let closure_18;
let closure_7;
let closure_8;
const require = arg1;
function getAttachmentsRestriction(type) {
  if (type instanceof closure_7) {
    if (callback2(type.type)) {
      let tmp4;
      if (!closure_10.can(constants.ATTACH_FILES, type)) {
        const obj = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.label = intl.string(require(1212) /* getSystemLocale */.t.P7yvbm);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
({ ChannelRecordBase: closure_7, isGuildChannelType: closure_8 } = _callSuper);
({ AnalyticEvents: closure_11, Permissions: closure_12, MAX_UPLOAD_COUNT: closure_13 } = ME);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = {};
let num = 0;
if (set.isIOS()) {
  num = require("_createForOfIteratorHelperLoose").space.PX_16;
}
obj1.paddingHorizontal = num;
let num2 = 0;
if (set.isIOS()) {
  num2 = require("_createForOfIteratorHelperLoose").space.PX_8;
}
obj1.paddingVertical = num2;
_createForOfIteratorHelperLoose.headerContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(sharedContent) {
  let View;
  let tmp6;
  sharedContent = sharedContent.sharedContent;
  const onClose = sharedContent.onClose;
  let first1;
  let embed;
  let isLoading;
  const tmp = _createForOfIteratorHelperLoose();
  let items = [sharedContent];
  const tmp2 = length(React.useState(React.useMemo(() => {
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
  let callback = tmp2[1];
  length = first.length;
  React = tmp3;
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  [tmp6, View] = length(React.useState(false), 2);
  let closure_7 = React.useRef(tmp6);
  if (length <= 1) {
    let intl2 = sharedContent(first[14]).intl;
    let stringResult = intl2.string(sharedContent(first[14]).t.TXNS7S);
  } else {
    let intl = sharedContent(first[14]).intl;
    let obj = { count: length };
    stringResult = intl.formatToPlainString(sharedContent(first[14]).t.jWtYUm, obj);
  }
  const text = sharedContent.text;
  let str = "";
  if (null != text) {
    str = text;
  }
  const tmp13 = length(React.useState(str), 2);
  first1 = tmp13[0];
  const tmp15 = onClose(first[15])(first1);
  embed = tmp15.embed;
  isLoading = tmp15.isLoading;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [onClose, first, sharedContent.attachments, first1];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = React.useCallback(callback(onClose), items1);
  obj = { style: tmp.container };
  obj = { style: tmp.headerContainer };
  const memo = React.useMemo(() => {
    if (null != embed) {
      let obj = {};
      obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [outer1_16(onClose(first[27]), obj), ];
      obj = {};
      embed = undefined;
      if (null != embed) {
        embed = embed.embed;
      }
      obj.embed = embed;
      obj.isLoadingEmbed = isLoading;
      obj.isRevamp = true;
      items[1] = outer1_16(onClose(first[28]), obj);
      obj.children = items;
      let tmp3Result = outer1_18(outer1_17, obj);
      const tmp3 = outer1_18;
      const tmp4 = outer1_17;
      const tmp5 = outer1_16;
      const tmp9 = onClose(first[28]);
    } else {
      tmp3Result = null;
    }
    return tmp3Result;
  }, items2);
  const obj1 = {};
  const intl3 = sharedContent(first[14]).intl;
  obj1.title = intl3.string(sharedContent(first[14]).t["MR7/kg"]);
  obj1.headerTitle = function headerTitle(children) {
    if (isMetaQuest) {
      const intl2 = sharedContent(first[14]).intl;
      let obj = { limit: outer1_13 };
      let formatToPlainStringResult = intl2.formatToPlainString(sharedContent(first[14]).t["qqyp/e"], obj);
    } else if (length >= outer1_14) {
      const intl = sharedContent(first[14]).intl;
      obj = { count: outer1_14 };
      formatToPlainStringResult = intl.formatToPlainString(sharedContent(first[14]).t["3Fbkir"], obj);
    }
    obj = { title: children.children, subtitle: formatToPlainStringResult, subtitleColor: "text-feedback-warning", variant: "redesign/heading-18/bold" };
    return outer1_16(sharedContent(first[30]).GenericHeaderTitle, obj);
  };
  obj1.headerTitleAlign = "center";
  const tmp18 = closure_18;
  let tmp5 = length(React.useState(false), 2);
  let headerCloseButton;
  if (!obj5.isMetaQuest()) {
    headerCloseButton = sharedContent(first[32]).getHeaderCloseButton(onClose);
    const obj6 = sharedContent(first[32]);
  }
  obj1.headerLeft = headerCloseButton;
  obj5 = sharedContent(first[31]);
  let num4;
  if (obj7.isIOS()) {
    num4 = 0;
  }
  obj1.headerStatusBarHeight = num4;
  obj.children = closure_16(sharedContent(first[29]).Header, obj1);
  const items3 = [closure_16(View, obj), , ];
  const obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: first, onSelectedDestinationChange: callback };
  let tmp26;
  obj7 = sharedContent(first[13]);
  const tmp24 = closure_16;
  if (sharedContent.attachments.length > 0) {
    tmp26 = getAttachmentsRestriction;
  }
  obj2.getRowIsUnavailable = tmp26;
  obj2.insetEnd = 0;
  obj2.disableGradient = true;
  obj2.disableStickySections = true;
  obj2.disableSelection = length >= MAX_DESTINATION_COUNT || sharedContent.attachments.length > closure_13;
  const tmp25 = onClose(first[33]);
  obj2.disableLongPress = sharedContent(first[13]).isAndroid();
  items3[1] = tmp24(tmp25, obj2);
  const obj3 = { text: first1, setText: tmp13[1], preview: memo, sendLabel: stringResult };
  let tmp29 = length > 0;
  const obj9 = sharedContent(first[13]);
  const tmp27 = closure_16;
  if (tmp29) {
    tmp29 = !tmp3;
  }
  obj3.canSend = tmp29;
  obj3.isSending = tmp6;
  obj3.onSend = callback1;
  obj3.disabled = sharedContent.attachments.length > closure_13;
  obj3.appEntryKey = sharedContent.appEntryKey;
  items3[2] = tmp27(onClose(first[34]), obj3);
  obj.children = items3;
  return tmp18(View, obj);
};
