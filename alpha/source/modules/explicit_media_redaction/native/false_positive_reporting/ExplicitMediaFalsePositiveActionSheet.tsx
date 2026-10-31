// Module ID: 13294
// Function ID: 13295
// Name: ExplicitMediaFalsePositiveActionSheet
// Dependencies: [19, 17, 21, 8220, 8874, 5717, 5014, 575, 1187, 5258, 5712, 1113, 11281, 5711, 8687, 5272, 5624, 5634, 2]
// Exports: ExplicitMediaFalsePositiveActionSheet, handleError, handleSuccess

// Module 13294 (ExplicitMediaFalsePositiveActionSheet)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import utils_UploadUtils from "utils/UploadUtils" /* 8220 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8687 */;
import ShieldIcon from "ShieldIcon" /* 11281 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import native_mod from "native" /* 1187 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  let url;
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url };
      tmp = metroRequire(ExplicitMediaFalsePositivePreview, obj);
    }
    return tmp;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
}
function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const url = attachment.attachment.url;
  let tmp = null;
  if (null != url) {
    const obj = { url };
    tmp = metroRequire(ExplicitMediaFalsePositivePreview, obj);
  }
  return tmp;
}
function ExplicitMediaFalsePositivePreview(url) {
  let items;
  let items1;
  let obj4;
  let obj6;
  let tmp3Result;
  url = url.url;
  const tmp = closure_11();
  const obj2 = { style: items, children: tmp3Result };
  items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  const obj = utils_UploadUtils;
  const tmp4 = React3;
  if (obj.isVideo(url)) {
    const obj3 = { volume: 0, resizeMode: "cover", repeat: true, style: tmp.media, source: obj4, controls: true, paused: true };
    obj4 = { uri: url };
    tmp3Result = tmp3(tmp5(8874), obj3);
  } else {
    const obj5 = { style: items1, source: obj6 };
    items1 = [, ];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj6 = { uri: url };
    tmp3Result = tmp3(tmp5(5717), obj5);
  }
  return metroRequire(tmp4, obj2);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, contentContainer: { justifyContent: "center", textAlign: "center", alignItems: "center" }, heading: obj3, mediaContainer: obj4, elevationShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), image: { resizeMode: "contain" }, media: obj5, footer: obj6 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { width: "100%", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, marginTop: nativeDefault.space.PX_8, aspectRatio: "4 / 3" };
native = native_mod;
obj5 = { flex: 1, borderRadius: nativeDefault.radii.xs };
obj6 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export function handleSuccess(arg0) {
  let intl;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(arg0);
  const obj2 = { text: intl.string(intl5.t.gFsTKu), icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl5.intl;
  open("explicit_media_report_false_positive_success", obj2);
}
export function handleError() {
  const presentError = ToastUtils.presentError;
  ToastUtils;
  const intl = intl5.intl;
  presentError(intl.string(intl5.t.R0RpRX));
}
export function ExplicitMediaFalsePositiveActionSheet(channelId) {
  let attachmentPreview;
  let embedPreview;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isReportFalsePositiveLoading;
  let items3;
  let items4;
  let items5;
  let obj7;
  let onConfirmPress;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = closure_11();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: items3 };
  BottomSheet = channelId(onConfirmPress[15]).BottomSheet;
  let obj2 = { style: tmp.heading, variant: "heading-lg/bold", children: intl.string(channelId(onConfirmPress[11]).t.TPpVkI) };
  const Text = channelId(onConfirmPress[16]).Text;
  intl = channelId(onConfirmPress[11]).intl;
  items3 = [closure_6(Text, obj2), , , ];
  let obj3 = { variant: "text-sm/normal", children: intl2.string(channelId(onConfirmPress[11]).t["z4du/I"]) };
  const Text2 = channelId(onConfirmPress[16]).Text;
  intl2 = channelId(onConfirmPress[11]).intl;
  items3[1] = closure_6(Text2, obj3);
  let tmp5Result = null != attachmentPreview;
  const tmp10 = closure_5;
  if (tmp5Result) {
    const obj4 = { attachment: attachmentPreview };
    tmp5Result = tmp5(ExplicitMediaFalsePositivePreviewAttachment, obj4);
  }
  items3[2] = tmp5Result;
  let tmp5Result2 = null != embedPreview;
  if (tmp5Result2) {
    const obj5 = { embed: embedPreview };
    tmp5Result2 = tmp5(ExplicitMediaFalsePositivePreviewEmbed, obj5);
  }
  const obj6 = { startExpanded: true, children: closure_7(closure_4, obj7) };
  obj7 = { children: items4 };
  items3[3] = tmp5Result2;
  items4 = [closure_7(tmp10, obj), ];
  const obj8 = { style: tmp.footer, children: items5 };
  const obj9 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: intl3.string(channelId(onConfirmPress[11]).t["cY+Oob"]), onPress: callback1 };
  const Button = tmp6(tmp7[17]).Button;
  intl3 = tmp6(tmp7[11]).intl;
  items5 = [closure_6(Button, obj9), ];
  const obj10 = { variant: "secondary", size: "md", text: intl4.string(channelId(onConfirmPress[11]).t["ETE/oC"]), onPress: callback };
  const Button2 = tmp6(tmp7[17]).Button;
  intl4 = tmp6(tmp7[11]).intl;
  items5[1] = closure_6(Button2, obj10);
  items4[1] = closure_7(closure_4, obj8);
  return closure_6(BottomSheet, obj6);
}
