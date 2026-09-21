// Module ID: 8873
// Function ID: 8874
// Name: StageAudienceNotificationSheet
// Dependencies: [19, 17, 2050, 5633, 2051, 21, 4758, 580, 4725, 558, 568, 1181, 504, 5802, 8874, 1119, 4754, 8875, 8876, 8897, 8898, 8899, 5188, 8900, 2]

// Module 8873 (StageAudienceNotificationSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import FastImageDefault from "FastImage" /* 5802 */;
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8897 from "module_8897" /* 8897 */;
import _modDef8898 from "module_8898" /* 8898 */;
import _modDef8899 from "module_8899" /* 8899 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8900 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;

require = fn;
function handleDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_5);
}
const View = fn(17).View;
let closure_5 = fn(5633).STAGE_AUDIENCE_NOTICE_SHEET_KEY;
const constants = fn(2051).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { padding: 16 }, header: { alignItems: "center", paddingVertical: 16 }, headerImage: {}, headerTitle: { marginTop: 16, marginBottom: 8 }, headerBulletIconContainer: null, headerBulletIconComponent: null, headerBulletList: null, headerBullet: null, startButton: null };
let size = { alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerBulletIconContainer = size;
obj2.headerBulletIconComponent = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.headerBulletList = { flexDirection: "column", alignItems: "flex-start" };
obj2.headerBullet = { lineHeight: 20 };
obj2.startButton = { marginTop: 0 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  const cResult = c.c(6);
  source = source.source;
  const tmp4 = closure_9();
  if (cResult[0] === source) {
    if (cResult[1] === tmp4.headerBulletIconComponent) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.headerBulletIconContainer) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { style: tmp4.headerBulletIconContainer, children: tmp5 };
    const tmp10 = React5(View, obj2);
    cResult[3] = tmp4.headerBulletIconContainer;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = React5(native.Icon, { source, size: native.Icon.Sizes.MEDIUM, style: tmp4.headerBulletIconComponent });
  cResult[0] = source;
  cResult[1] = tmp4.headerBulletIconComponent;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((source) => {
  const tmp = closure_9();
  const obj = { style: tmp.headerBulletIconContainer, children: React5(native.Icon, { source: source.source, size: native.Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent }) };
  return React5(View, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(41);
  channelId = channelId.channelId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function y() {
      return StageInstanceStore.getStageInstanceByChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  ({ container, header } = tmp4);
  if (cResult[3] !== tmp4.headerImage) {
    const obj2 = { source: _modDef8874, style: tmp4.headerImage };
    const tmp14 = closure_7(FastImageDefault, obj2);
    cResult[3] = tmp4.headerImage;
    cResult[4] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.UVuXCs);
    cResult[5] = stringResult;
    let tmp15 = stringResult;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.headerTitle) {
    const obj3 = { style: tmp4.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = closure_7(tmp(4754).Text, obj3);
    cResult[6] = tmp4.headerTitle;
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { source: _modDef8875 };
    const tmp24 = closure_7(closure_11, obj4);
    cResult[8] = tmp24;
    let tmp20 = tmp24;
  } else {
    tmp20 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.sBDfo6);
    cResult[9] = stringResult1;
    let tmp25 = stringResult1;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] !== tmp4.headerBullet) {
    const obj5 = { leading: tmp20, label: null };
    const obj6 = { style: tmp4.headerBullet, variant: "text-md/medium", color: "text-default", children: tmp25 };
    obj5.label = closure_7(tmp(4754).Text, obj6);
    const tmp29 = closure_7(tmp(8876).FormRow, obj5);
    cResult[10] = tmp4.headerBullet;
    cResult[11] = tmp29;
    let tmp27 = tmp29;
  } else {
    tmp27 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { source: _modDef8897 };
    const tmp34 = closure_7(closure_11, obj7);
    cResult[12] = tmp34;
    let tmp30 = tmp34;
  } else {
    tmp30 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const stringResult2 = intl3.string(tmp(1119).t.x58YtH);
    cResult[13] = stringResult2;
    let tmp35 = stringResult2;
  } else {
    tmp35 = cResult[13];
  }
  if (cResult[14] !== tmp4.headerBullet) {
    const obj8 = { leading: tmp30, label: null };
    const obj9 = { style: tmp4.headerBullet, variant: "text-md/medium", color: "text-default", children: tmp35 };
    obj8.label = closure_7(tmp(4754).Text, obj9);
    const tmp39 = closure_7(tmp(8876).FormRow, obj8);
    cResult[14] = tmp4.headerBullet;
    cResult[15] = tmp39;
    let tmp37 = tmp39;
  } else {
    tmp37 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { source: _modDef8898 };
    const tmp44 = closure_7(closure_11, obj10);
    cResult[16] = tmp44;
    let tmp40 = tmp44;
  } else {
    tmp40 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1119).intl;
    const stringResult3 = intl4.string(tmp(1119).t.XtVqla);
    cResult[17] = stringResult3;
    let tmp45 = stringResult3;
  } else {
    tmp45 = cResult[17];
  }
  if (cResult[18] !== tmp4.headerBullet) {
    const obj11 = { leading: tmp40, label: null };
    const obj12 = { style: tmp4.headerBullet, variant: "text-md/medium", color: "text-default", children: tmp45 };
    obj11.label = closure_7(tmp(4754).Text, obj12);
    const tmp49 = closure_7(tmp(8876).FormRow, obj11);
    cResult[18] = tmp4.headerBullet;
    cResult[19] = tmp49;
    let tmp47 = tmp49;
  } else {
    tmp47 = cResult[19];
  }
  if (cResult[20] === privacy_level === constants.PUBLIC) {
    if (cResult[21] === tmp4.headerBullet) {
      let tmp51 = cResult[22];
    }
    if (cResult[23] === tmp4.headerBulletList) {
      if (cResult[24] === tmp27) {
        if (cResult[25] === tmp37) {
          if (cResult[26] === tmp47) {
            if (cResult[27] === tmp51) {
              let tmp56 = cResult[28];
            }
            if (cResult[29] === tmp4.header) {
              if (cResult[30] === tmp56) {
                if (cResult[31] === tmp10) {
                  if (cResult[32] === tmp17) {
                    let tmp60 = cResult[33];
                  }
                  const _Symbol = Symbol;
                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj13 = { text: null, onPress: null };
                    const intl6 = tmp(1119).intl;
                    obj13.text = intl6.string(tmp(1119).t.obLqZ8);
                    obj13.onPress = handleDismiss;
                    const tmp67 = closure_7(tmp(5188).Button, obj13);
                    cResult[34] = tmp67;
                    let tmp64 = tmp67;
                  } else {
                    tmp64 = cResult[34];
                  }
                  if (cResult[35] !== tmp4.startButton) {
                    const obj14 = { style: tmp4.startButton, children: tmp64 };
                    const tmp71 = closure_7(View, obj14);
                    cResult[35] = tmp4.startButton;
                    cResult[36] = tmp71;
                    let tmp68 = tmp71;
                  } else {
                    tmp68 = cResult[36];
                  }
                  if (cResult[37] === tmp4.container) {
                    if (cResult[38] === tmp60) {
                      if (cResult[39] === tmp68) {
                        let tmp72 = cResult[40];
                      }
                      return tmp72;
                    }
                  }
                  const obj15 = { children: null };
                  const obj16 = { style: container, children: null };
                  const items1 = [tmp60, tmp68];
                  obj16.children = items1;
                  obj15.children = closure_8(View, obj16);
                  const tmp78 = closure_7(ScrollHandlingActionSheetDefault, obj15);
                  cResult[37] = tmp4.container;
                  cResult[38] = tmp60;
                  cResult[39] = tmp68;
                  cResult[40] = tmp78;
                  tmp72 = tmp78;
                }
              }
            }
            const obj17 = { style: header, children: null };
            const items2 = [tmp10, tmp17, tmp56];
            obj17.children = items2;
            const tmp63 = closure_8(View, obj17);
            cResult[29] = tmp4.header;
            cResult[30] = tmp56;
            cResult[31] = tmp10;
            cResult[32] = tmp17;
            cResult[33] = tmp63;
            tmp60 = tmp63;
          }
        }
      }
    }
    const obj18 = { style: tmp4.headerBulletList, children: null };
    const items3 = [tmp27, tmp37, tmp47, tmp51];
    obj18.children = items3;
    const tmp59 = closure_8(View, obj18);
    cResult[23] = tmp4.headerBulletList;
    cResult[24] = tmp27;
    cResult[25] = tmp37;
    cResult[26] = tmp47;
    cResult[27] = tmp51;
    cResult[28] = tmp59;
    tmp56 = tmp59;
  }
  let tmp52 = null;
  if (privacy_level === constants.PUBLIC) {
    const obj19 = { leading: null, label: null };
    const obj20 = { source: _modDef8899 };
    obj19.leading = closure_7(closure_11, obj20);
    const obj21 = { style: tmp4.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
    const intl5 = tmp(1119).intl;
    obj21.children = intl5.string(tmp(1119).t.nDsbJg);
    obj19.label = closure_7(tmp(4754).Text, obj21);
    tmp52 = closure_7(tmp(8876).FormRow, obj19);
  }
  cResult[20] = privacy_level === constants.PUBLIC;
  cResult[21] = tmp4.headerBullet;
  cResult[22] = tmp52;
  tmp51 = tmp52;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const tmp = closure_9();
  const items = [StageInstanceStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj = channelId(504);
  const obj4 = { source: null, style: null };
  const tmp8 = ScrollHandlingActionSheetDefault;
  obj4.source = _modDef8874;
  obj4.style = tmp.headerImage;
  const items1 = [closure_7(FastImageDefault, obj4), , ];
  const obj5 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1119).intl;
  obj5.children = intl.string(channelId(1119).t.UVuXCs);
  items1[1] = closure_7(channelId(4754).Text, obj5);
  const obj6 = { style: tmp.headerBulletList, children: null };
  const obj7 = { leading: null, label: null };
  obj7.leading = closure_7(closure_11, { source: _modDef8875 });
  const obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(1119).intl;
  obj9.children = intl2.string(channelId(1119).t.sBDfo6);
  obj7.label = closure_7(channelId(4754).Text, obj9);
  const items2 = [closure_7(channelId(8876).FormRow, obj7), , , ];
  const obj10 = { leading: null, label: null };
  const obj8 = { source: _modDef8875 };
  const tmp12 = closure_11;
  obj10.leading = closure_7(closure_11, { source: _modDef8897 });
  const obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl3 = tmp2(1119).intl;
  obj12.children = intl3.string(channelId(1119).t.x58YtH);
  obj10.label = closure_7(channelId(4754).Text, obj12);
  items2[1] = closure_7(channelId(8876).FormRow, obj10);
  const obj13 = { leading: null, label: null };
  const obj11 = { source: _modDef8897 };
  obj13.leading = closure_7(closure_11, { source: _modDef8898 });
  const obj15 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp2(1119).intl;
  obj15.children = intl4.string(channelId(1119).t.XtVqla);
  obj13.label = closure_7(channelId(4754).Text, obj15);
  items2[2] = closure_7(channelId(8876).FormRow, obj13);
  let tmp6Result = null;
  if (privacy_level === constants.PUBLIC) {
    const obj16 = { leading: null, label: null };
    const obj17 = { source: _modDef8899 };
    obj16.leading = tmp6(tmp12, obj17);
    const obj18 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
    const intl6 = tmp2(1119).intl;
    obj18.children = intl6.string(tmp2(1119).t.nDsbJg);
    obj16.label = tmp6(tmp2(4754).Text, obj18);
    tmp6Result = tmp6(tmp2(8876).FormRow, obj16);
  }
  const obj19 = { children: null };
  items2[3] = tmp6Result;
  obj6.children = items2;
  items1[2] = closure_8(View, obj6);
  obj3.children = items1;
  const items3 = [closure_8(View, obj3), ];
  const obj20 = { style: tmp.startButton, children: null };
  const obj21 = { text: null, onPress: null };
  const intl5 = tmp2(1119).intl;
  obj21.text = intl5.string(channelId(1119).t.obLqZ8);
  obj21.onPress = handleDismiss;
  obj20.children = closure_7(channelId(5188).Button, obj21);
  items3[1] = closure_7(View, obj20);
  obj2.children = items3;
  obj19.children = closure_8(View, obj2);
  return closure_7(tmp8, obj19);
});
