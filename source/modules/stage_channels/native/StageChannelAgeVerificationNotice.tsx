// Module ID: 7528
// Function ID: 60220
// Name: StageChannelAgeVerificationNoticeContent
// Dependencies: []
// Exports: default

// Module 7528 (StageChannelAgeVerificationNoticeContent)
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  const arg1 = onConfirmPress.onConfirmPress;
  let closure_1 = callback2();
  let obj = arg1(dependencyMap[6]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = arg1(dependencyMap[7]).intl;
  const format = intl.format;
  const t = arg1(dependencyMap[7]).t;
  if (isVerifiedTeen) {
    obj = {
      hook(children) {
          return callback(onConfirmPress(closure_2[8]).Text, {
            style: closure_1.linkText,
            onPress() {
              const tmp = callback2(closure_2[9]);
              tmp(callback2(closure_2[10]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (null != callback) {
                callback();
              }
            },
            children
          });
        }
    };
    let formatResult = format(t.iWGjcg, obj);
  } else {
    obj = {
      hook(children) {
          return callback(onConfirmPress(closure_2[8]).Text, {
            style: closure_1.linkText,
            onPress() {
              let obj = callback2(closure_2[11]);
              obj = { entryPoint: callback(closure_2[12]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj);
              if (null != callback) {
                callback();
              }
            },
            children
          });
        }
    };
    formatResult = format(t.edpbxy, obj);
  }
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (onConfirmPress.noBackground) {
    obj = { style: tmp.noticeContainer };
    let Text = callback;
    let tmp12 = arg1;
    let tmp13 = dependencyMap;
    if (isVerifiedTeen) {
      let WarningIcon = tmp12(tmp13[13]).CircleInformationIcon;
    } else {
      WarningIcon = tmp12(tmp13[14]).WarningIcon;
    }
    obj = { size: "refresh_sm", color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT, style: tmp.icon };
    const items = [Text(WarningIcon, obj), ];
    tmp12 = callback;
    Text = arg1(dependencyMap[8]).Text;
    const obj1 = { style: tmp.contentText };
    tmp13 = callback;
    tmp = StageChannelAgeVerificationNoticeContent;
    const obj2 = { onConfirmPress };
    obj1.children = callback(StageChannelAgeVerificationNoticeContent, obj2);
    items[1] = callback(Text, obj1);
    obj.children = items;
    closure_6(View, obj);
    const tmp10 = closure_6;
    const tmp11 = View;
  } else {
    const obj3 = {};
    const HelpMessageTypes = arg1(dependencyMap[15]).HelpMessageTypes;
    obj3.messageType = isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING;
    const obj4 = { onConfirmPress };
    obj3.children = callback(StageChannelAgeVerificationNoticeContent, obj4);
    return callback(arg1(dependencyMap[15]).HelpMessage, obj3);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.containerWithDivider = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
const obj1 = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
obj.divider = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const obj2 = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.noticeContainer = { gap: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.icon = { flexShrink: 0 };
obj.linkText = { textDecorationLine: "underline" };
obj.contentText = { flex: 1 };
let closure_8 = obj.createStyles(obj);
const obj4 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
const obj3 = { gap: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default function StageChannelAgeVerificationNotice(arg0) {
  let channelId;
  let divider;
  let noBackground;
  let onConfirmPress;
  let style;
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[16]);
  let tmp2;
  if (null != channelId) {
    tmp2 = channelId;
  }
  if (obj.useShouldAgeVerifyToSpeakForCurrentUser(tmp2)) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      obj = {};
      const hasItem = divider.includes(obj4.TOP);
      let tmp10 = hasItem;
      if (hasItem) {
        obj = { style: tmp.divider };
        tmp10 = callback(View, obj);
      }
      const items = [tmp10, , ];
      const obj1 = {};
      const items1 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj1.style = items1;
      const obj2 = { noBackground, onConfirmPress };
      obj1.children = callback(StageChannelAgeVerificationNoticeWrapper, obj2);
      items[1] = callback(View, obj1);
      let hasItem1 = arr.includes(obj4.BOTTOM);
      if (hasItem1) {
        const obj3 = { style: tmp.divider };
        hasItem1 = callback(View, obj3);
      }
      items[2] = hasItem1;
      obj.children = items;
      return closure_6(closure_7, obj);
    } else if (null != divider) {
      const items2 = [divider];
      let items3 = items2;
    } else {
      items3 = [];
    }
  } else {
    return null;
  }
};
export const DividerPosition = obj4;
