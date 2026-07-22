// Module ID: 8141
// Function ID: 64397
// Name: ExplicitMediaFalsePositivePreviewEmbed
// Dependencies: []
// Exports: ExplicitMediaFalsePositiveActionSheet, handleError, handleSuccess

// Module 8141 (ExplicitMediaFalsePositivePreviewEmbed)
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
  const tmp = callback3();
  let obj = arg1(dependencyMap[3]);
  obj = { style: items };
  const items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  if (obj.isVideo(url)) {
    obj = { style: tmp.media };
    const obj1 = { uri: url };
    obj.source = obj1;
    let tmp4Result = tmp4(importDefault(dependencyMap[4]), obj);
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
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.content = obj;
obj.contentContainer = { withSpring: 2, r: "notify_friends_on_go_live", body: "message" };
const tmp3 = arg1(dependencyMap[2]);
obj.heading = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj1 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.mediaContainer = { width: "100%", padding: importDefault(dependencyMap[6]).space.PX_16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.xs, marginTop: importDefault(dependencyMap[6]).space.PX_8, aspectRatio: "4 / 3" };
const obj2 = { width: "100%", padding: importDefault(dependencyMap[6]).space.PX_16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.xs, marginTop: importDefault(dependencyMap[6]).space.PX_8, aspectRatio: "4 / 3" };
obj.elevationShadow = arg1(dependencyMap[7]).generateBoxShadowStyle(arg1(dependencyMap[7]).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj.image = { resizeMode: "contain" };
const obj6 = arg1(dependencyMap[7]);
obj.media = { flex: 1, borderRadius: importDefault(dependencyMap[6]).radii.xs };
const obj3 = { flex: 1, borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.footer = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: importDefault(dependencyMap[6]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: importDefault(dependencyMap[6]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export const handleSuccess = function handleSuccess(arg0) {
  let obj = importDefault(dependencyMap[8]);
  obj.hideActionSheet(arg0);
  obj = { key: "explicit_media_report_false_positive_success", icon: importDefault(dependencyMap[10]), IconComponent: arg1(dependencyMap[11]).ShieldIcon, iconColor: "text-brand" };
  const intl = arg1(dependencyMap[12]).intl;
  obj.content = intl.string(arg1(dependencyMap[12]).t.gFsTKu);
  importDefault(dependencyMap[9]).open(obj);
};
export const handleError = function handleError() {
  const intl = arg1(dependencyMap[12]).intl;
  arg1(dependencyMap[13]).presentError(intl.string(arg1(dependencyMap[12]).t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = function ExplicitMediaFalsePositiveActionSheet(channelId) {
  let attachmentPreview;
  let embedPreview;
  let isReportFalsePositiveLoading;
  let onConfirmPress;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const dependencyMap = onConfirmPress;
  const analyticsContext = channelId.analyticsContext;
  const React = analyticsContext;
  const tmp = callback3();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = React.useCallback(() => {
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
    messageId(onConfirmPress[8]).hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = React.useCallback(() => {
    if (null != onConfirmPress) {
      onConfirmPress();
    }
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const effect = React.useEffect(() => {
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  let obj = { startExpanded: true };
  obj = {};
  obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer };
  const obj1 = { style: tmp.heading, variant: "heading-lg/bold" };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.string(arg1(dependencyMap[12]).t.TPpVkI);
  const items3 = [callback(arg1(dependencyMap[16]).Text, obj1), , , ];
  const obj2 = { variant: "text-sm/normal" };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[12]).t.z4du/I);
  items3[1] = callback(arg1(dependencyMap[16]).Text, obj2);
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
  const obj6 = { disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[12]).t.cY+Oob);
  obj6.onPress = callback1;
  const items5 = [callback(arg1(dependencyMap[17]).Button, obj6), ];
  const obj7 = {};
  const intl4 = arg1(dependencyMap[12]).intl;
  obj7.text = intl4.string(arg1(dependencyMap[12]).t.ETE/oC);
  obj7.onPress = callback;
  items5[1] = callback(arg1(dependencyMap[17]).Button, obj7);
  obj5.children = items5;
  items4[1] = callback2(closure_4, obj5);
  obj.children = items4;
  obj.children = callback2(closure_4, obj);
  return callback(arg1(dependencyMap[15]).BottomSheet, obj);
};
