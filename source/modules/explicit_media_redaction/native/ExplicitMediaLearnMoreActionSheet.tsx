// Module ID: 11021
// Function ID: 85727
// Name: ExplicitMediaLearnMoreActionSheet
// Dependencies: [31, 27, 6836, 653, 33, 4130, 689, 11022, 4347, 6835, 1212, 5796, 4098, 3827, 1920, 7536, 7538, 9868, 1934, 5187, 5807, 4126, 4543, 5459, 2]
// Exports: default

// Module 11021 (ExplicitMediaLearnMoreActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.art = { alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.infoHeader = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.info = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
_createForOfIteratorHelperLoose.infoDesc = { textAlign: "center" };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
_createForOfIteratorHelperLoose.buttonsContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.linkSubtext = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("USER_SETTING_ACTION_SHEET_KEY").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const attachmentId = channelId.attachmentId;
  const embedId = channelId.embedId;
  let callback;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp3 = messageId(attachmentId[7])();
  let obj = channelId(attachmentId[8]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj1 = channelId(attachmentId[9]);
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let intl = channelId(attachmentId[10]).intl;
  let intl2 = channelId(attachmentId[10]).intl;
  const items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
  const stringResult = intl.string(channelId(attachmentId[10]).t["9KiIz6"]);
  const tmp2 = attachmentId;
  const tmp4 = channelId;
  const memo = embedId.useMemo(() => {
    let tmp = isVerifiedTeen;
    if (isVerifiedTeen) {
      tmp = shouldAgeVerifyForExplicitMedia;
    }
    return tmp;
  }, items);
  const items1 = [channelId, messageId];
  callback = embedId.useCallback((action) => {
    let obj = channelId(attachmentId[9]);
    obj = { action, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const items2 = [channelId, messageId];
  const effect = embedId.useEffect(() => {
    let obj = channelId(attachmentId[9]);
    obj = { action: channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  const items3 = [memo, shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const callback1 = embedId.useCallback(() => {
    if (memo) {
      const intl2 = channelId(attachmentId[10]).intl;
      let obj = {
        handleOnHelpUrlHook() {
            const obj = messageId(attachmentId[15]);
            obj.openUrl(messageId(attachmentId[14]).getArticleURL(memo.TIGGER_PAWTECT_LEARN_MORE));
            outer1_7(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
          }
      };
      let formatResult = intl2.format(channelId(attachmentId[10]).t["TGqx+i"], obj);
    } else {
      formatResult = null;
      if (!shouldAgeVerifyForExplicitMedia) {
        const intl = channelId(attachmentId[10]).intl;
        obj = {
          handleFalsePositiveHook() {
                let obj = messageId(attachmentId[12]);
                obj.hideActionSheet();
                outer1_7(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                obj = { channelId: outer1_0, messageId: outer1_1, attachmentId: outer1_2, embedId: outer1_3 };
                messageId(attachmentId[12]).openLazy(channelId(attachmentId[18])(attachmentId[17], attachmentId.paths), shouldAgeVerifyForExplicitMedia, obj);
              }
        };
        formatResult = intl.format(channelId(attachmentId[10]).t.Ge0HUi, obj);
      }
    }
    return formatResult;
  }, items3);
  obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj1 = { style: tmp.art, children: callback(channelId(attachmentId[20]).ShieldSpotIllustration, { height: 120, width: 120 }) };
  const items4 = [callback(isVerifiedTeen, obj1), , ];
  const obj2 = { style: tmp.info };
  const obj3 = { style: tmp.infoHeader, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl3 = channelId(attachmentId[10]).intl;
  obj3.children = intl3.string(channelId(attachmentId[10]).t.sGW77l);
  const items5 = [callback(channelId(attachmentId[21]).Text, obj3), ];
  const obj4 = { style: tmp.infoDesc, variant: "text-md/medium", color: "text-default" };
  if (memo) {
    let stringResult3 = stringResult1;
  } else {
    const intl4 = channelId(attachmentId[10]).intl;
    const intl5 = channelId(attachmentId[10]).intl;
    stringResult3 = intl5.string(channelId(attachmentId[10]).t["E/oQYL"]);
    if (tmp3) {
      stringResult3 = stringResult2;
    }
    stringResult2 = intl4.string(channelId(attachmentId[10]).t.RUw0ZC);
  }
  obj4.children = stringResult3;
  items5[1] = callback(channelId(attachmentId[21]).Text, obj4);
  obj2.children = items5;
  items4[1] = closure_9(isVerifiedTeen, obj2);
  const obj5 = { style: tmp.buttonsContainer };
  const obj6 = { variant: "primary", size: "md" };
  if (memo) {
    obj6.text = stringResult;
    obj6.onPress = function handleAgeVerifyButtonPress() {
      callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY);
      let obj = messageId(attachmentId[15]);
      obj = { entryPoint: channelId(attachmentId[16]).AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
      messageId(attachmentId[12]).hideActionSheet();
    };
    let tmp22 = obj6;
  } else {
    const intl6 = channelId(attachmentId[10]).intl;
    const string = intl6.string;
    const t = channelId(attachmentId[10]).t;
    if (tmp3) {
      obj6.text = string(t["9D+zGX"]);
      obj6.onPress = function handleNavigateToSettingsButtonPress() {
        callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
        let obj = channelId(attachmentId[11]);
        obj = { screen: callback.CONTENT_AND_SOCIAL };
        obj.openUserSettings(obj);
        messageId(attachmentId[12]).hideActionSheet();
      };
      tmp22 = obj6;
    } else {
      obj6.text = string(t.hvVgAZ);
      obj6.onPress = function handleNavigateToHelpCenterLearnMore() {
        const obj = messageId(attachmentId[13]);
        obj.openURL(messageId(attachmentId[14]).getArticleURL(memo.EXPLICIT_MEDIA_REDACTION));
      };
      tmp22 = obj6;
    }
  }
  const items6 = [callback(tmp4(tmp2[22]).Button, tmp22), , ];
  const obj7 = { variant: "secondary", size: "md" };
  const intl7 = channelId(attachmentId[10]).intl;
  obj7.text = intl7.string(channelId(attachmentId[10]).t.bmbHPA);
  obj7.onPress = function onPress() {
    callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    messageId(attachmentId[12]).hideActionSheet();
  };
  items6[1] = callback(channelId(attachmentId[22]).Button, obj7);
  const obj8 = { style: tmp.linkSubtext, variant: "text-sm/medium", color: "text-muted", children: callback1() };
  items6[2] = callback(channelId(attachmentId[23]).TextWithIOSLinkWorkaround, obj8);
  obj5.children = items6;
  items4[2] = closure_9(isVerifiedTeen, obj5);
  obj.children = items4;
  obj.children = closure_9(isVerifiedTeen, obj);
  return callback(channelId(attachmentId[19]).BottomSheet, obj);
};
