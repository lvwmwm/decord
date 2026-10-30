// Module ID: 19431
// Function ID: 19432
// Name: InteractionModal
// Dependencies: [19, 17, 16184, 21, 5009, 575, 6738, 19432, 5602, 1188, 1410, 5619, 6974, 1114, 7048, 8017, 8688, 19433, 5629, 2]
// Exports: openInteractionModal

// Module 19431 (InteractionModal)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import Text_Text from "Text/Text" /* 5619 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import Pressables from "Pressables" /* 6974 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import InlineNotice2 from "InlineNotice" /* 8017 */;
import InteractionModalStore from "InteractionModalStore" /* 16184 */;
import InteractionModalUtils from "InteractionModalUtils" /* 19432 */;
import renderComponents from "renderComponents" /* 19433 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function onClose() {
  const obj = ModalActionCreatorsDefault;
  return obj.popWithKey(interaction_modal);
}
class InteractionModal {
  constructor(modal) {
    let Button;
    let applicationIconURL;
    let applicationName;
    let components;
    let intl;
    let intl2;
    let intl3;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj11;
    let obj16;
    let obj5;
    let obj8;
    let onSubmit;
    let setValidationErrors;
    let submissionState;
    let tmp2Result;
    let validationErrors;
    let validators;
    const tmp = closure_9();
    const title = modal.title;
    const obj = InteractionModalUtils;
    const modalState = obj.useModalState(modal, onClose);
    const error = modalState.error;
    ({ components, applicationIconURL, applicationName, submissionState, validators, validationErrors, setValidationErrors, onSubmit } = modalState);
    const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
    const obj2 = { style: items, children: items2 };
    items = [tmp.modal, { paddingTop: insets.top, paddingBottom: insets.bottom }];
    const obj3 = { style: tmp.header, children: items1 };
    const obj4 = { style: tmp.icon, source: obj5.makeSource(applicationIconURL), size: native.AvatarSizes.SMALL };
    const Avatar = native.Avatar;
    obj5 = AvatarUtilsDefault;
    items1 = [metroRequire(Avatar, obj4), , ];
    const obj6 = { style: tmp.titleView, children: metroRequire(Text_Text.Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title }) };
    items1[1] = metroRequire(_false, obj6);
    const obj7 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl4.t.cpT0Cq), onPress: onClose, style: tmp.closeButton, children: metroRequire(XSmallIcon.XSmallIcon, obj8) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl4.intl;
    obj8 = { color: tmp.closeIcon.color };
    items1[2] = metroRequire(PressableOpacity, obj7);
    items2 = [metroImportDefault(_false, obj3), ];
    let tmp7Result = null;
    const obj9 = { style: tmp.scroll, contentContainerStyle: tmp.modalContent, keyboardShouldPersistTaps: "handled", children: items4 };
    const tmp8 = React3;
    if (null != error) {
      tmp7Result = null;
      if ("" !== error) {
        const obj10 = { style: tmp.error, children: metroRequire(InlineNotice2.InlineNotice, obj11) };
        obj11 = { type: "critical", message: error, role: "alert" };
        tmp7Result = tmp7(tmp6, obj10);
      }
    }
    const obj12 = { children: items3 };
    items3 = [tmp7Result, ];
    const obj13 = { type: "warning", message: intl2.format(intl4.t["dSTy/w"], { applicationName }), role: "none" };
    const InlineNotice = tmp2(8017).InlineNotice;
    intl2 = tmp2(1114).intl;
    items3[1] = metroRequire(InlineNotice, obj13);
    items4 = [metroImportDefault(_false, obj12), , ];
    const obj14 = { modal, validators, validationErrors, setValidationErrors, children: tmp2Result.renderComponents(components) };
    const ComponentStateContextProvider = tmp2(8688).ComponentStateContextProvider;
    tmp2Result = renderComponents;
    items4[1] = metroRequire(ComponentStateContextProvider, obj14);
    const obj15 = { style: tmp.footer, children: metroRequire(Button, obj16) };
    obj16 = { text: intl3.string(intl4.t.geKm7t), loading: submissionState === InteractionModalState.IN_FLIGHT, size: "lg", onPress: onSubmit };
    Button = tmp2(5629).Button;
    intl3 = tmp2(1114).intl;
    items4[2] = metroRequire(_false, obj15);
    items2[1] = metroImportDefault(tmp8, obj9);
    return metroImportDefault(_false, obj2);
  }
}
({ View: c3, ScrollView: closure_4 } = react_native);
const InteractionModalState = InteractionModalStore.InteractionModalState;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const interaction_modal = "interaction_modal";
let createStyles = createStyles_mod;
let obj = { modal: obj2, scroll: { flex: 1 }, modalContent: obj3, header: obj4, titleView: { flex: 1 }, icon: obj5, footer: obj6, closeButton: { marginLeft: "auto" }, closeIcon: obj7, error: obj8 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { marginRight: nativeDefault.space.PX_8 };
obj6 = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
obj7 = { color: nativeDefault.colors.TEXT_MUTED };
obj8 = { marginBottom: nativeDefault.space.PX_16 };
const React4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default InteractionModal;
export function openInteractionModal(arg0) {
  const arr = ModalActionCreatorsDefault;
  arr.push(InteractionModal, arg0, interaction_modal);
}
