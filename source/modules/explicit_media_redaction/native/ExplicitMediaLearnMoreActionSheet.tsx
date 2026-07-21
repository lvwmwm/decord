// Module ID: 11010
// Function ID: 85664
// Name: ExplicitMediaLearnMoreActionSheet
// Dependencies: []
// Exports: default

// Module 11010 (ExplicitMediaLearnMoreActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
({ HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[6]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_24, justifyContent: "center" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.art = { alignSelf: "center", marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { alignSelf: "center", marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.infoHeader = { marginBottom: importDefault(dependencyMap[6]).space.PX_8, alignItems: "center" };
const obj2 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8, alignItems: "center" };
obj.info = { marginBottom: importDefault(dependencyMap[6]).space.PX_24, alignItems: "center" };
obj.infoDesc = { textAlign: "center" };
const obj3 = { marginBottom: importDefault(dependencyMap[6]).space.PX_24, alignItems: "center" };
obj.buttonsContainer = { gap: importDefault(dependencyMap[6]).space.PX_8 };
const obj4 = { gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.linkSubtext = { textAlign: "center", marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
let closure_10 = obj.createStyles(obj);
const obj5 = { textAlign: "center", marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  const attachmentId = channelId.attachmentId;
  const dependencyMap = attachmentId;
  const embedId = channelId.embedId;
  const React = embedId;
  let callback;
  const tmp = callback2();
  const tmp3 = importDefault(dependencyMap[7])();
  let obj = arg1(dependencyMap[8]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const View = isVerifiedTeen;
  let obj1 = arg1(dependencyMap[9]);
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let closure_5 = shouldAgeVerifyForExplicitMedia;
  const intl = arg1(dependencyMap[10]).intl;
  const intl2 = arg1(dependencyMap[10]).intl;
  const items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
  const stringResult = intl.string(arg1(dependencyMap[10]).t.9KiIz6);
  const tmp2 = dependencyMap;
  const tmp4 = arg1;
  const memo = React.useMemo(() => {
    let tmp = isVerifiedTeen;
    if (isVerifiedTeen) {
      tmp = shouldAgeVerifyForExplicitMedia;
    }
    return tmp;
  }, items);
  const items1 = [channelId, messageId];
  callback = React.useCallback((action) => {
    let obj = channelId(attachmentId[9]);
    obj = { action, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const items2 = [channelId, messageId];
  const effect = React.useEffect(() => {
    let obj = channelId(attachmentId[9]);
    obj = { action: channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  const items3 = [memo, shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const callback1 = React.useCallback(() => {
    if (memo) {
      const intl2 = channelId(attachmentId[10]).intl;
      let obj = {
        handleOnHelpUrlHook() {
            const obj = callback2(closure_2[15]);
            obj.openUrl(callback2(closure_2[14]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
            callback3(callback(closure_2[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
          }
      };
      let formatResult = intl2.format(channelId(attachmentId[10]).t.TGqx+i, obj);
    } else {
      formatResult = null;
      if (!shouldAgeVerifyForExplicitMedia) {
        const intl = channelId(attachmentId[10]).intl;
        obj = {
          handleFalsePositiveHook() {
                let obj = callback2(paths[12]);
                obj.hideActionSheet();
                callback3(callback(paths[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                obj = { channelId: callback, messageId: callback2, attachmentId: paths, embedId: closure_3 };
                callback2(paths[12]).openLazy(callback(paths[18])(paths[17], paths.paths), closure_5, obj);
              }
        };
        formatResult = intl.format(channelId(attachmentId[10]).t.Ge0HUi, obj);
      }
    }
    return formatResult;
  }, items3);
  obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj1 = { style: tmp.art, children: callback(arg1(dependencyMap[20]).ShieldSpotIllustration, {}) };
  const items4 = [callback(View, obj1), , ];
  const obj2 = { style: tmp.info };
  const obj3 = { style: tmp.infoHeader };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[10]).t.sGW77l);
  const items5 = [callback(arg1(dependencyMap[21]).Text, obj3), ];
  const obj4 = { style: tmp.infoDesc };
  if (memo) {
    let stringResult3 = stringResult1;
  } else {
    const intl4 = arg1(dependencyMap[10]).intl;
    const intl5 = arg1(dependencyMap[10]).intl;
    stringResult3 = intl5.string(arg1(dependencyMap[10]).t.E/oQYL);
    if (tmp3) {
      stringResult3 = stringResult2;
    }
    const stringResult2 = intl4.string(arg1(dependencyMap[10]).t.RUw0ZC);
  }
  obj4.children = stringResult3;
  items5[1] = callback(arg1(dependencyMap[21]).Text, obj4);
  obj2.children = items5;
  items4[1] = closure_9(View, obj2);
  const obj5 = { style: tmp.buttonsContainer };
  const obj6 = { "Bool(true)": "rgb(0, 122, 255)", "Bool(true)": "rgb(242, 242, 242)" };
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
    const intl6 = arg1(dependencyMap[10]).intl;
    const string = intl6.string;
    const t = arg1(dependencyMap[10]).t;
    if (tmp3) {
      obj6.text = string(t.9D+zGX);
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
  const obj7 = { "Bool(true)": null, "Bool(true)": null };
  const intl7 = arg1(dependencyMap[10]).intl;
  obj7.text = intl7.string(arg1(dependencyMap[10]).t.bmbHPA);
  obj7.onPress = function onPress() {
    callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
    messageId(attachmentId[12]).hideActionSheet();
  };
  items6[1] = callback(arg1(dependencyMap[22]).Button, obj7);
  const obj8 = { style: tmp.linkSubtext, children: callback1() };
  items6[2] = callback(arg1(dependencyMap[23]).TextWithIOSLinkWorkaround, obj8);
  obj5.children = items6;
  items4[2] = closure_9(View, obj5);
  obj.children = items4;
  obj.children = closure_9(View, obj);
  return callback(arg1(dependencyMap[19]).BottomSheet, obj);
};
