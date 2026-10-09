// Module ID: 12298
// Function ID: 12299
// Name: MuteAppDmActionSheet
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 8756, 1126, 5087, 5376, 6805, 6800, 5055, 4768, 10312, 6836, 2]

// Module 12298 (MuteAppDmActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6805 */;
import BellSlashIcon from "BellSlashIcon" /* 10312 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: size, content: { padding: 16 }, headerText: { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 }, infoText: { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 }, dismissButtonContainer: { marginTop: 8 } };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MuteAppDMActionSheet(channel) {
  let first;
  let intl4;
  let items;
  let obj9;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(25);
  const tmp4 = closure_6();
  channel = channel.channel;
  const content = tmp4.content;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_4(channel(8756).BellIcon, { size: "md", color: "interactive-text-default" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconBackground) {
    let obj2 = { style: tmp4.iconBackground, "aria-hidden": true, children: first };
    const tmp11 = closure_4(View, obj2);
    cResult[1] = tmp4.iconBackground;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.iconContainer) {
    let tmp12;
    let tmp14;
    let tmp16;
    let tmp19;
    let tmp21;
    let tmp24;
    let tmp26;
    let tmp29;
    let tmp32;
    if (cResult[4] === tmp8) {
      tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    const headerText = tmp4.headerText;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(channel(1126).t.uAmAiL);
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp4.headerText) {
      let obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: headerText, children: tmp14 };
      const tmp18 = closure_4(channel(5087).Text, obj3);
      cResult[7] = tmp4.headerText;
      cResult[8] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    const _Symbol2 = Symbol;
    const infoText = tmp4.infoText;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(channel(1126).t.mscFJU);
      cResult[9] = stringResult1;
      tmp19 = stringResult1;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== tmp4.infoText) {
      let obj4 = { variant: "text-md/normal", color: "text-default", style: infoText, children: tmp19 };
      const tmp23 = closure_4(channel(5087).Text, obj4);
      cResult[10] = tmp4.infoText;
      cResult[11] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(channel(1126).t.uAmAiL);
      cResult[12] = stringResult2;
      tmp24 = stringResult2;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] !== channel.id) {
      const obj5 = {
        variant: "destructive",
        text: tmp24,
        onPress() {
              let intl;
              const obj = NotificationSettingsModalActionCreatorsDefault;
              const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
              const result = obj.updateChannelOverrideSettings(obj2);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet();
              const obj4 = { text: intl.string(intl5.t.EgGpkx), icon: BellSlashIcon.BellSlashIcon };
              const openMana = ToastActionCreatorsDefault.openMana;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              openMana("NOTIFICATIONS_MUTED", obj4);
            }
      };
      const tmp28 = closure_4(channel(5376).Button, obj5);
      cResult[13] = channel.id;
      cResult[14] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[14];
    }
    const _Symbol4 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = {
        variant: "secondary",
        text: intl4.string(channel(1126).t.WAI6xu),
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
      };
      const Button = tmp(5376).Button;
      intl4 = tmp(1126).intl;
      const tmp31 = closure_4(Button, obj6);
      cResult[15] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[15];
    }
    if (cResult[16] !== tmp4.dismissButtonContainer) {
      const obj7 = { style: tmp4.dismissButtonContainer, children: tmp29 };
      const tmp35 = closure_4(View, obj7);
      cResult[16] = tmp4.dismissButtonContainer;
      cResult[17] = tmp35;
      tmp32 = tmp35;
    } else {
      tmp32 = cResult[17];
    }
    if (cResult[18] === tmp4.content) {
      if (cResult[19] === tmp26) {
        if (cResult[20] === tmp32) {
          if (cResult[21] === tmp12) {
            if (cResult[22] === tmp16) {
              let tmp36;
              if (cResult[23] === tmp21) {
                tmp36 = cResult[24];
              }
              return tmp36;
            }
          }
        }
      }
    }
    const obj8 = { startExpanded: true, children: closure_5(View, obj9) };
    obj9 = { style: content, children: items };
    items = [tmp12, tmp16, tmp21, tmp26, tmp32];
    BottomSheet = tmp(6836).BottomSheet;
    const tmp40 = closure_4(BottomSheet, obj8);
    cResult[18] = tmp4.content;
    cResult[19] = tmp26;
    cResult[20] = tmp32;
    cResult[21] = tmp12;
    cResult[22] = tmp16;
    cResult[23] = tmp21;
    cResult[24] = tmp40;
    tmp36 = tmp40;
  }
  const obj10 = { style: tmp4.iconContainer, children: tmp8 };
  const tmp13 = closure_4(View, obj10);
  cResult[3] = tmp4.iconContainer;
  cResult[4] = tmp8;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function MuteAppDMActionSheet(channel) {
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj4;
  let obj9;
  const tmp = closure_6();
  channel = channel.channel;
  let obj = { startExpanded: true, children: closure_5(View, obj2) };
  obj2 = { style: tmp.content, children: items };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, obj4) };
  obj4 = { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(channel(8756).BellIcon, { size: "md", color: "interactive-text-default" }) };
  BottomSheet = channel(6836).BottomSheet;
  items = [closure_4(View, obj3), , , , ];
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(channel(1126).t.uAmAiL) };
  const Text = channel(5087).Text;
  intl = channel(1126).intl;
  items[1] = closure_4(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: intl2.string(channel(1126).t.mscFJU) };
  const Text2 = channel(5087).Text;
  intl2 = channel(1126).intl;
  items[2] = closure_4(Text2, obj6);
  const obj7 = {
    variant: "destructive",
    text: intl3.string(channel(1126).t.uAmAiL),
    onPress() {
      let intl;
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const result = obj.updateChannelOverrideSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
      const obj4 = { text: intl.string(intl5.t.EgGpkx), icon: BellSlashIcon.BellSlashIcon };
      const openMana = ToastActionCreatorsDefault.openMana;
      ToastActionCreatorsDefault;
      intl = intl5.intl;
      openMana("NOTIFICATIONS_MUTED", obj4);
    }
  };
  const Button = channel(5376).Button;
  intl3 = channel(1126).intl;
  items[3] = closure_4(Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: closure_4(Button2, obj9) };
  obj9 = {
    variant: "secondary",
    text: intl4.string(channel(1126).t.WAI6xu),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  Button2 = channel(5376).Button;
  intl4 = channel(1126).intl;
  items[4] = closure_4(View, obj8);
  return closure_4(BottomSheet, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default tmp4;
