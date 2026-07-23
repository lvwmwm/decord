// Module ID: 8147
// Function ID: 64434
// Name: ExplicitMediaFalsePositivePreviewEmbed
// Dependencies: [31, 27, 33, 4674, 8148, 4130, 689, 1273, 4098, 3831, 8172, 8173, 1212, 3830, 6835, 5187, 4126, 4543, 2]
// Exports: ExplicitMediaFalsePositiveActionSheet, handleError, handleSuccess

// Module 8147 (ExplicitMediaFalsePositivePreviewEmbed)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      let url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url };
      tmp = callback(ExplicitMediaFalsePositivePreview, obj);
    }
    return tmp;
  }
  const thumbnail = embed.thumbnail;
  if (null != thumbnail) {
    url = thumbnail.url;
  }
}
function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const url = attachment.attachment.url;
  let tmp = null;
  if (null != url) {
    const obj = { url };
    tmp = callback(ExplicitMediaFalsePositivePreview, obj);
  }
  return tmp;
}
function ExplicitMediaFalsePositivePreview(url) {
  url = url.url;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4674) /* openImagePickerUnhandled */;
  obj = { style: items };
  items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  if (obj.isVideo(url)) {
    obj = { volume: 0, resizeMode: "cover", repeat: true, style: tmp.media, source: null, controls: true, paused: true };
    const obj1 = { uri: url };
    obj.source = obj1;
    let tmp4Result = tmp4(importDefault(8148), obj);
  } else {
    const obj2 = {};
    const items1 = [, ];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj2.style = items1;
    const obj3 = { uri: url };
    obj2.source = obj3;
    tmp4Result = tmp4(closure_5, obj2);
  }
  obj.children = tmp4Result;
  return closure_7(closure_4, obj);
}
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { justifyContent: "center", textAlign: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.heading = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.mediaContainer = { width: "100%", padding: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, aspectRatio: "4 / 3" };
_createForOfIteratorHelperLoose.elevationShadow = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
_createForOfIteratorHelperLoose.image = { resizeMode: "contain" };
let obj2 = { width: "100%", padding: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, aspectRatio: "4 / 3" };
_createForOfIteratorHelperLoose.media = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
let obj3 = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.footer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("jsxProd").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export const handleSuccess = function handleSuccess(arg0) {
  let obj = importDefault(4098);
  obj.hideActionSheet(arg0);
  obj = { key: "explicit_media_report_false_positive_success", icon: importDefault(8172), IconComponent: require(8173) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.gFsTKu);
  importDefault(3831).open(obj);
};
export const handleError = function handleError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  require(3830) /* presentAddedFriendToast */.presentError(intl.string(require(1212) /* getSystemLocale */.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = function ExplicitMediaFalsePositiveActionSheet(channelId) {
  let attachmentPreview;
  let embedPreview;
  let isReportFalsePositiveLoading;
  let onConfirmPress;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
    messageId(onConfirmPress[8]).hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (null != onConfirmPress) {
      onConfirmPress();
    }
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  let obj = { startExpanded: true };
  obj = {};
  obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer };
  const obj1 = { style: tmp.heading, variant: "heading-lg/bold" };
  const intl = channelId(onConfirmPress[12]).intl;
  obj1.children = intl.string(channelId(onConfirmPress[12]).t.TPpVkI);
  const items3 = [callback(channelId(onConfirmPress[16]).Text, obj1), , , ];
  const obj2 = { variant: "text-sm/normal" };
  const intl2 = channelId(onConfirmPress[12]).intl;
  obj2.children = intl2.string(channelId(onConfirmPress[12]).t["z4du/I"]);
  items3[1] = callback(channelId(onConfirmPress[16]).Text, obj2);
  let tmp9 = null != attachmentPreview;
  if (tmp9) {
    const obj3 = { attachment: attachmentPreview };
    tmp9 = callback(ExplicitMediaFalsePositivePreviewAttachment, obj3);
  }
  items3[2] = tmp9;
  let tmp12 = null != embedPreview;
  if (tmp12) {
    const obj4 = { embed: embedPreview };
    tmp12 = callback(ExplicitMediaFalsePositivePreviewEmbed, obj4);
  }
  items3[3] = tmp12;
  obj.children = items3;
  const items4 = [callback2(closure_6, obj), ];
  const obj5 = { style: tmp.footer };
  const obj6 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading };
  const intl3 = channelId(onConfirmPress[12]).intl;
  obj6.text = intl3.string(channelId(onConfirmPress[12]).t["cY+Oob"]);
  obj6.onPress = callback1;
  const items5 = [callback(channelId(onConfirmPress[17]).Button, obj6), ];
  const obj7 = { variant: "secondary", size: "md" };
  const intl4 = channelId(onConfirmPress[12]).intl;
  obj7.text = intl4.string(channelId(onConfirmPress[12]).t["ETE/oC"]);
  obj7.onPress = callback;
  items5[1] = callback(channelId(onConfirmPress[17]).Button, obj7);
  obj5.children = items5;
  items4[1] = callback2(closure_4, obj5);
  obj.children = items4;
  obj.children = callback2(closure_4, obj);
  return callback(channelId(onConfirmPress[15]).BottomSheet, obj);
};
