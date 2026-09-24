// Module ID: 8102
// Function ID: 8103
// Name: BurstReactionFirstSendActionSheet
// Dependencies: [19, 17, 21, 4790, 580, 4757, 558, 568, 8103, 1119, 8104, 8042, 1181, 4786, 5220, 7429, 8063, 4611, 2031, 8102, 1984, 577, 2]
// Exports: openBurstReactionFirstSendActionSheet

// Module 8102 (BurstReactionFirstSendActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import Text_Text from "Text/Text" /* 4786 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7429 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8042 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 8063 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 8103 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 8104 */;
import noop from "module_19" /* 19 */;

require = fn;
function onDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 }, fill: null, nitroWheel: null, textContainer: null, body: null, content: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flex = 1;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.top = -120;
obj2.fill = obj3;
let size = { tintColor: nativeDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
obj2.nitroWheel = size;
obj2.textContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" };
obj2.body = { paddingTop: 8, paddingBottom: 18 };
obj2.content = { paddingHorizontal: 16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ emoji, channelId, messageId } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { quest: tmp(1119).t["5TpPli"] };
    const deviceSpecificString = tmp(8103).getDeviceSpecificString(obj2, tmp(1119).t["2Yp7dF"]);
    cResult[0] = deviceSpecificString;
    let first = deviceSpecificString;
    const tmpResult = tmp(8103);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === emoji) {
      if (cResult[3] === messageId) {
        let tmp7 = cResult[4];
      }
      if (cResult[5] === tmp4.fill) {
        if (cResult[6] === tmp7) {
          let tmp10 = cResult[7];
        }
        if (cResult[8] !== tmp4.nitroWheel) {
          const obj3 = { style: tmp4.nitroWheel };
          const tmp16 = React4(tmp(1181).NitroWheel, obj3);
          cResult[8] = tmp4.nitroWheel;
          cResult[9] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "heading-xl/bold", children: null };
          const intl = tmp(1119).intl;
          obj4.children = intl.string(tmp(1119).t.NX7HI7);
          const tmp19 = React4(tmp(4786).Text, obj4);
          cResult[10] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp4.textContainer) {
          if (cResult[12] === tmp14) {
            let tmp20 = cResult[13];
          }
          if (cResult[14] !== tmp4.textContainer) {
            const obj5 = { style: tmp4.textContainer, variant: "text-md/normal", children: first };
            const tmp26 = React4(tmp(4786).Text, obj5);
            cResult[14] = tmp4.textContainer;
            cResult[15] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[15];
          }
          if (cResult[16] === tmp4.body) {
            if (cResult[17] === tmp24) {
              let tmp27 = cResult[18];
            }
            const _Symbol2 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { text: null, onPress: null };
              const intl2 = tmp(1119).intl;
              obj6.text = intl2.string(tmp(1119).t["+IrDzN"]);
              obj6.onPress = onDismiss;
              const tmp34 = React4(tmp(5220).Button, obj6);
              cResult[19] = tmp34;
              let tmp31 = tmp34;
            } else {
              tmp31 = cResult[19];
            }
            if (cResult[20] === tmp4.container) {
              if (cResult[21] === tmp20) {
                if (cResult[22] === tmp27) {
                  let tmp35 = cResult[23];
                }
                if (cResult[24] === tmp4.content) {
                  if (cResult[25] === tmp35) {
                    if (cResult[26] === tmp10) {
                      let tmp39 = cResult[27];
                    }
                    return tmp39;
                  }
                }
                const obj7 = { backdropOpacity: tmp(8063).BACKDROP_OPACITY, contentStyles: tmp4.content, backdropChildren: tmp10, onDismiss, children: tmp35 };
                const tmp42 = React4(tmp(7429).BottomSheet, obj7);
                cResult[24] = tmp4.content;
                cResult[25] = tmp35;
                cResult[26] = tmp10;
                cResult[27] = tmp42;
                tmp39 = tmp42;
              }
            }
            const obj8 = { style: tmp4.container, children: null };
            const items = [tmp20, tmp27, tmp31];
            obj8.children = items;
            const tmp38 = hasOwnProperty(React3, obj8);
            cResult[20] = tmp4.container;
            cResult[21] = tmp20;
            cResult[22] = tmp27;
            cResult[23] = tmp38;
            tmp35 = tmp38;
          }
          const obj9 = { style: tmp4.body, children: tmp24 };
          const tmp30 = React4(React3, obj9);
          cResult[16] = tmp4.body;
          cResult[17] = tmp24;
          cResult[18] = tmp30;
          tmp27 = tmp30;
        }
        const obj10 = { style: tmp4.textContainer, children: null };
        const items1 = [tmp14, tmp17];
        obj10.children = items1;
        const tmp23 = hasOwnProperty(React3, obj10);
        cResult[11] = tmp4.textContainer;
        cResult[12] = tmp14;
        cResult[13] = tmp23;
        tmp20 = tmp23;
      }
      const obj11 = { style: tmp4.fill, children: tmp7 };
      const tmp13 = React4(React3, obj11);
      cResult[5] = tmp4.fill;
      cResult[6] = tmp7;
      cResult[7] = tmp13;
      tmp10 = tmp13;
    }
  }
  const obj12 = { channelId, emoji, messageId, reactionType: null };
  obj12.reactionType = MessageReactionsTypes.ReactionTypes.BURST;
  const tmp9 = React4(BurstReactionAnimationPreviewDefault, obj12);
  cResult[1] = channelId;
  cResult[2] = emoji;
  cResult[3] = messageId;
  cResult[4] = tmp9;
  tmp7 = tmp9;
}) : ((arg0) => {
  ({ emoji, channelId, messageId } = arg0);
  const tmp = closure_6();
  const obj = getDeviceSpecificString;
  const deviceSpecificString = obj.getDeviceSpecificString({ quest: util.t["5TpPli"] }, util.t["2Yp7dF"]);
  const obj3 = { backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY, contentStyles: tmp.content, backdropChildren: null, onDismiss: null, children: null };
  const obj4 = { style: tmp.fill, children: null };
  const obj5 = { channelId, emoji, messageId, reactionType: null };
  const obj2 = { quest: util.t["5TpPli"] };
  obj5.reactionType = MessageReactionsTypes.ReactionTypes.BURST;
  obj4.children = React4(BurstReactionAnimationPreviewDefault, obj5);
  obj3.backdropChildren = React4(React3, obj4);
  obj3.onDismiss = onDismiss;
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.textContainer, children: null };
  const items = [React4(native.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj9 = { variant: "heading-xl/bold", children: null };
  const intl = util.intl;
  obj9.children = intl.string(util.t.NX7HI7);
  items[1] = React4(Text_Text.Text, obj9);
  obj7.children = items;
  const items1 = [hasOwnProperty(React3, obj7), , ];
  const obj10 = { style: tmp.body, children: React4(Text_Text.Text, { style: tmp.textContainer, variant: "text-md/normal", children: deviceSpecificString }) };
  items1[1] = React4(React3, obj10);
  const obj12 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj12.text = intl2.string(util.t["+IrDzN"]);
  obj12.onPress = onDismiss;
  items1[2] = React4(components_Button_Button.Button, obj12);
  obj6.children = items1;
  obj3.children = hasOwnProperty(React3, obj6);
  return React4(Sheet_BottomSheet.BottomSheet, obj3);
});
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  ({ channelId, messageId, emoji } = arg0);
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const tmp2 = dependencyMap;
  if (obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    const obj3 = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    tmp(577).dispatch(obj3);
    const tmpResult = tmp(577);
  } else {
    const result = tmp4(4611).UNSAFE_markDismissibleContentAsDismissed(tmp4(2031).DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    const tmp4Result = tmp4(4611);
    const obj4 = { channelId, messageId, emoji };
    tmp(4757).openLazy(tmp4(1984)(8102, tmp2.paths), "BurstReactionFirstSendActionSheet", obj4);
    const tmpResult2 = tmp(4757);
  }
};
