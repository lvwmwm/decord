// Module ID: 8054
// Function ID: 8055
// Name: StageAudienceNotificationSheet
// Dependencies: [19, 17, 2056, 5727, 2057, 21, 4837, 588, 4801, 558, 576, 1189, 504, 5896, 8055, 1127, 4833, 8056, 8057, 8078, 8079, 8080, 5282, 8081, 2]

// Module 8054 (StageAudienceNotificationSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import native from "native" /* 1189 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5727 */;
import FastImageDefault from "FastImage" /* 5896 */;
import AssetRegistryDefault from "AssetRegistry" /* 8055 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8056 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8078 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8079 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8080 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8081 */;
import react from "react" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channelId, source;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
function handleDismiss() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(closure_5);
}
const View = react_native.View;
let closure_5 = StageChannelsConstants.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
const constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, header: { alignItems: "center", paddingVertical: 16 }, headerImage: {}, headerTitle: { marginTop: 16, marginBottom: 8 }, headerBulletIconContainer: size, headerBulletIconComponent: obj2, headerBulletList: { flexDirection: "column", alignItems: "flex-start" }, headerBullet: { lineHeight: 20 }, startButton: { marginTop: 0 } };
size = { alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  const obj = react2;
  const cResult = obj.c(6);
  source = source.source;
  const tmp4 = closure_9();
  if (cResult[0] === source) {
    let tmp5;
    if (cResult[1] === tmp4.headerBulletIconComponent) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.headerBulletIconContainer) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { style: tmp4.headerBulletIconContainer, children: tmp5 };
    const tmp10 = metroImportDefault(View, obj2);
    cResult[3] = tmp4.headerBulletIconContainer;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const obj3 = { source, size: native.Icon.Sizes.MEDIUM, style: tmp4.headerBulletIconComponent };
  const Icon = tmp(1189).Icon;
  const tmp6 = metroImportDefault(Icon, obj3);
  cResult[0] = source;
  cResult[1] = tmp4.headerBulletIconComponent;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((source) => {
  let Icon;
  let obj2;
  source = source.source;
  const tmp = closure_9();
  const obj = { style: tmp.headerBulletIconContainer, children: metroImportDefault(Icon, obj2) };
  obj2 = { source, size: native.Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent };
  Icon = native.Icon;
  return metroImportDefault(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let Text;
  let container;
  let first;
  let header;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj16;
  let obj20;
  let obj21;
  let obj6;
  let obj9;
  let tmp10;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp25;
  let tmp27;
  let tmp30;
  let tmp35;
  let tmp37;
  let tmp40;
  let tmp45;
  let tmp47;
  let tmp7;
  const obj = channelId(576);
  const cResult = obj.c(41);
  channelId = channelId.channelId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function y() {
      return StageInstanceStore.getStageInstanceByChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  const PUBLIC = constants.PUBLIC;
  ({ container, header } = tmp4);
  if (cResult[3] !== tmp4.headerImage) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.headerImage };
    const tmp13 = FastImageDefault;
    const tmp14 = closure_7(tmp13, obj2);
    cResult[3] = tmp4.headerImage;
    cResult[4] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  const headerTitle = tmp4.headerTitle;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(channelId(1127).t.UVuXCs);
    cResult[5] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.headerTitle) {
    const obj3 = { style: headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = closure_7(channelId(4833).Text, obj3);
    cResult[6] = tmp4.headerTitle;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  const headerBulletList = tmp4.headerBulletList;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { source: AssetRegistryDefault2 };
    const tmp24 = closure_7(closure_11, obj4);
    cResult[8] = tmp24;
    tmp20 = tmp24;
  } else {
    tmp20 = cResult[8];
  }
  const headerBullet = tmp4.headerBullet;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1127).intl;
    const stringResult1 = intl2.string(channelId(1127).t.sBDfo6);
    cResult[9] = stringResult1;
    tmp25 = stringResult1;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] !== tmp4.headerBullet) {
    const obj5 = { leading: tmp20, label: closure_7(channelId(4833).Text, obj6) };
    const FormRow = tmp(8057).FormRow;
    obj6 = { style: headerBullet, variant: "text-md/medium", color: "text-default", children: tmp25 };
    const tmp29 = closure_7(FormRow, obj5);
    cResult[10] = tmp4.headerBullet;
    cResult[11] = tmp29;
    tmp27 = tmp29;
  } else {
    tmp27 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { source: AssetRegistryDefault3 };
    const tmp34 = closure_7(closure_11, obj7);
    cResult[12] = tmp34;
    tmp30 = tmp34;
  } else {
    tmp30 = cResult[12];
  }
  const headerBullet2 = tmp4.headerBullet;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1127).intl;
    const stringResult2 = intl3.string(channelId(1127).t.x58YtH);
    cResult[13] = stringResult2;
    tmp35 = stringResult2;
  } else {
    tmp35 = cResult[13];
  }
  if (cResult[14] !== tmp4.headerBullet) {
    const obj8 = { leading: tmp30, label: closure_7(channelId(4833).Text, obj9) };
    const FormRow2 = tmp(8057).FormRow;
    obj9 = { style: headerBullet2, variant: "text-md/medium", color: "text-default", children: tmp35 };
    const tmp39 = closure_7(FormRow2, obj8);
    cResult[14] = tmp4.headerBullet;
    cResult[15] = tmp39;
    tmp37 = tmp39;
  } else {
    tmp37 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { source: AssetRegistryDefault4 };
    const tmp44 = closure_7(closure_11, obj10);
    cResult[16] = tmp44;
    tmp40 = tmp44;
  } else {
    tmp40 = cResult[16];
  }
  const headerBullet3 = tmp4.headerBullet;
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1127).intl;
    const stringResult3 = intl4.string(channelId(1127).t.XtVqla);
    cResult[17] = stringResult3;
    tmp45 = stringResult3;
  } else {
    tmp45 = cResult[17];
  }
  if (cResult[18] !== tmp4.headerBullet) {
    const obj11 = { leading: tmp40, label: closure_7(channelId(4833).Text, obj12) };
    const FormRow3 = tmp(8057).FormRow;
    obj12 = { style: headerBullet3, variant: "text-md/medium", color: "text-default", children: tmp45 };
    const tmp49 = closure_7(FormRow3, obj11);
    cResult[18] = tmp4.headerBullet;
    cResult[19] = tmp49;
    tmp47 = tmp49;
  } else {
    tmp47 = cResult[19];
  }
  if (cResult[20] === privacy_level === PUBLIC) {
    let tmp51;
    if (cResult[21] === tmp4.headerBullet) {
      tmp51 = cResult[22];
    }
    if (cResult[23] === tmp4.headerBulletList) {
      if (cResult[24] === tmp27) {
        if (cResult[25] === tmp37) {
          if (cResult[26] === tmp47) {
            let tmp56;
            if (cResult[27] === tmp51) {
              tmp56 = cResult[28];
            }
            if (cResult[29] === tmp4.header) {
              if (cResult[30] === tmp56) {
                if (cResult[31] === tmp10) {
                  let tmp60;
                  let tmp64;
                  let tmp68;
                  if (cResult[32] === tmp17) {
                    tmp60 = cResult[33];
                  }
                  const _Symbol = Symbol;
                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj13 = { text: intl6.string(channelId(1127).t.obLqZ8), onPress: handleDismiss };
                    const Button = tmp(5282).Button;
                    intl6 = tmp(1127).intl;
                    const tmp67 = closure_7(Button, obj13);
                    cResult[34] = tmp67;
                    tmp64 = tmp67;
                  } else {
                    tmp64 = cResult[34];
                  }
                  if (cResult[35] !== tmp4.startButton) {
                    const obj14 = { style: tmp4.startButton, children: tmp64 };
                    const tmp71 = closure_7(View, obj14);
                    cResult[35] = tmp4.startButton;
                    cResult[36] = tmp71;
                    tmp68 = tmp71;
                  } else {
                    tmp68 = cResult[36];
                  }
                  if (cResult[37] === tmp4.container) {
                    if (cResult[38] === tmp60) {
                      let tmp72;
                      if (cResult[39] === tmp68) {
                        tmp72 = cResult[40];
                      }
                      return tmp72;
                    }
                  }
                  const obj15 = { children: closure_8(View, obj16) };
                  obj16 = { style: container, children: items1 };
                  items1 = [tmp60, tmp68];
                  const tmp75 = ScrollHandlingActionSheetDefault;
                  const tmp78 = closure_7(tmp75, obj15);
                  cResult[37] = tmp4.container;
                  cResult[38] = tmp60;
                  cResult[39] = tmp68;
                  cResult[40] = tmp78;
                  tmp72 = tmp78;
                }
              }
            }
            const obj17 = { style: header, children: items2 };
            items2 = [tmp10, tmp17, tmp56];
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
    const obj18 = { style: headerBulletList, children: items3 };
    items3 = [tmp27, tmp37, tmp47, tmp51];
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
  if (privacy_level === PUBLIC) {
    const obj19 = { leading: closure_7(closure_11, obj20), label: closure_7(Text, obj21) };
    obj20 = { source: AssetRegistryDefault5 };
    const FormRow4 = tmp(8057).FormRow;
    obj21 = { style: tmp4.headerBullet, variant: "text-md/medium", color: "text-default", children: intl5.string(channelId(1127).t.nDsbJg) };
    Text = tmp(4833).Text;
    intl5 = tmp(1127).intl;
    tmp52 = closure_7(FormRow4, obj19);
  }
  cResult[20] = privacy_level === PUBLIC;
  cResult[21] = tmp4.headerBullet;
  cResult[22] = tmp52;
  tmp51 = tmp52;
}) : ((channelId) => {
  let Button;
  let Text2;
  let Text3;
  let Text4;
  let Text5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj21;
  let obj8;
  let obj9;
  channelId = channelId.channelId;
  const tmp = closure_9();
  const items = [StageInstanceStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  const PUBLIC = constants.PUBLIC;
  const obj2 = { style: tmp.container, children: items3 };
  const obj3 = { style: tmp.header, children: items1 };
  const obj4 = { source: AssetRegistryDefault, style: tmp.headerImage };
  const tmp8 = ScrollHandlingActionSheetDefault;
  const tmp11 = FastImageDefault;
  items1 = [closure_7(tmp11, obj4), , ];
  const obj5 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(channelId(1127).t.UVuXCs) };
  const Text = tmp2(4833).Text;
  intl = tmp2(1127).intl;
  items1[1] = closure_7(Text, obj5);
  const obj6 = { style: tmp.headerBulletList, children: items2 };
  const obj7 = { leading: closure_7(closure_11, obj8), label: closure_7(Text2, obj9) };
  obj8 = { source: AssetRegistryDefault2 };
  const FormRow = tmp2(8057).FormRow;
  obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl2.string(channelId(1127).t.sBDfo6) };
  Text2 = tmp2(4833).Text;
  intl2 = tmp2(1127).intl;
  items2 = [closure_7(FormRow, obj7), , , ];
  const obj10 = { leading: closure_7(closure_11, obj11), label: closure_7(Text3, obj12) };
  obj11 = { source: AssetRegistryDefault3 };
  const FormRow2 = tmp2(8057).FormRow;
  obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl3.string(channelId(1127).t.x58YtH) };
  Text3 = tmp2(4833).Text;
  intl3 = tmp2(1127).intl;
  items2[1] = closure_7(FormRow2, obj10);
  const obj13 = { leading: closure_7(closure_11, obj14), label: closure_7(Text4, obj15) };
  obj14 = { source: AssetRegistryDefault4 };
  const FormRow3 = tmp2(8057).FormRow;
  obj15 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl4.string(channelId(1127).t.XtVqla) };
  Text4 = tmp2(4833).Text;
  intl4 = tmp2(1127).intl;
  items2[2] = closure_7(FormRow3, obj13);
  let tmp6Result = null;
  const tmp12 = closure_11;
  if (privacy_level === PUBLIC) {
    const obj16 = { leading: closure_7(tmp12, obj17), label: closure_7(Text5, obj18) };
    obj17 = { source: AssetRegistryDefault5 };
    const FormRow4 = tmp2(8057).FormRow;
    obj18 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: intl6.string(channelId(1127).t.nDsbJg) };
    Text5 = tmp2(4833).Text;
    intl6 = tmp2(1127).intl;
    tmp6Result = tmp6(FormRow4, obj16);
  }
  items2[3] = tmp6Result;
  const obj19 = { children: closure_8(View, obj2) };
  items1[2] = closure_8(View, obj6);
  items3 = [closure_8(View, obj3), ];
  const obj20 = { style: tmp.startButton, children: closure_7(Button, obj21) };
  obj21 = { text: intl5.string(channelId(1127).t.obLqZ8), onPress: handleDismiss };
  Button = tmp2(5282).Button;
  intl5 = tmp2(1127).intl;
  items3[1] = closure_7(View, obj20);
  return closure_7(tmp8, obj19);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default tmp5;
