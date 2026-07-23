// Module ID: 8437
// Function ID: 67209
// Name: StageChannelAgeVerificationNoticeContent
// Dependencies: [31, 27, 653, 33, 4130, 689, 4347, 1212, 4126, 3821, 1920, 7536, 7538, 4086, 7576, 1273, 4955, 2]
// Exports: default

// Module 8437 (StageChannelAgeVerificationNoticeContent)
import "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let closure_1 = _createForOfIteratorHelperLoose();
  let obj = onConfirmPress(4347);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1212).intl;
  const format = intl.format;
  const t = onConfirmPress(1212).t;
  if (isVerifiedTeen) {
    obj = {
      hook(children) {
          const obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = callback(outer2_2[9]);
              tmp(callback(outer2_2[10]).getArticleURL(outer2_4.TIGGER_PAWTECT_LEARN_MORE));
              if (null != outer1_0) {
                outer1_0();
              }
            },
            children
          };
          return outer1_5(onConfirmPress(outer1_2[8]).Text, obj);
        }
    };
    let formatResult = format(t.iWGjcg, obj);
  } else {
    obj = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              let obj = callback(outer2_2[11]);
              obj = { entryPoint: onConfirmPress(outer2_2[12]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj);
              if (null != outer1_0) {
                outer1_0();
              }
            },
            children
          };
          return outer1_5(onConfirmPress(outer1_2[8]).Text, obj);
        }
    };
    formatResult = format(t.edpbxy, obj);
  }
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = require(4347) /* isReactiveCheckEnabled */;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (onConfirmPress.noBackground) {
    obj = { style: tmp.noticeContainer };
    let Text = callback;
    let tmp12 = require;
    if (isVerifiedTeen) {
      let WarningIcon = tmp12(4086).CircleInformationIcon;
    } else {
      WarningIcon = tmp12(7576).WarningIcon;
    }
    obj = { size: "refresh_sm", color: importDefault(689).colors.TEXT_DEFAULT, style: tmp.icon };
    const items = [Text(WarningIcon, obj), ];
    tmp12 = callback;
    Text = require(4126) /* Text */.Text;
    const obj1 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText };
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
    const HelpMessageTypes = require(1273) /* Button */.HelpMessageTypes;
    obj3.messageType = isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING;
    const obj4 = { onConfirmPress };
    obj3.children = callback(StageChannelAgeVerificationNoticeContent, obj4);
    return callback(require(1273) /* Button */.HelpMessage, obj3);
  }
}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerWithDivider = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.divider = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.noticeContainer = obj3;
_createForOfIteratorHelperLoose.icon = { flexShrink: 0 };
_createForOfIteratorHelperLoose.linkText = { textDecorationLine: "underline" };
_createForOfIteratorHelperLoose.contentText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
let obj2 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let result = require("ME").fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNoticeForEvent.tsx");

export default function StageChannelAgeVerificationNoticeForEvent(divider) {
  let noBackground;
  let onConfirmPress;
  let style;
  divider = divider.divider;
  ({ noBackground, onConfirmPress, style } = divider);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4955) /* useIsStageSpeakingDisabledForCurrentUser */;
  if (obj.useShouldShowAgeVerificationForEvent()) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      obj = {};
      const hasItem = divider.includes(obj4.TOP);
      let tmp11 = hasItem;
      if (hasItem) {
        obj = { style: tmp.divider };
        tmp11 = callback(View, obj);
      }
      const items = [tmp11, , ];
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
