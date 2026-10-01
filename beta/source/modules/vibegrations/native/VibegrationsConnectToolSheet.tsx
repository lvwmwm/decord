// Module ID: 16305
// Function ID: 16306
// Name: VibegrationsConnectToolSheet
// Dependencies: [5, 32, 19, 17, 12642, 21, 4836, 576, 6610, 4527, 5209, 1115, 3715, 6618, 6570, 4832, 5919, 5281, 2]
// Exports: default

// Module 16305 (VibegrationsConnectToolSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import AlertModal from "AlertModal" /* 5209 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_5, dependencyMap, v0;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const fetchProjectMcpConnection = VibegrationsConnectionStore.fetchProjectMcpConnection;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, actions: obj4, action: { flex: 1 }, failedRow: obj5, failedText: { flexShrink: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConnectToolSheet.tsx");

export default function VibegrationsConnectToolSheet(projectId) {
  let BottomSheetTitleHeader;
  let Button;
  let Button2;
  let Text5;
  let c3;
  let closure_4;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj13;
  let obj18;
  let obj2;
  let obj3;
  let obj8;
  let tmp12Result;
  let tmp5;
  projectId = projectId.projectId;
  first = undefined;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  let callback;
  const tmp = closure_10();
  [first, dependencyMap] = callback.useState(null);
  const tmp4 = _slicedToArray(callback.useState(true), 2);
  [tmp5, c3] = tmp4;
  [first1, _slicedToArray] = callback.useState(false);
  const useCallback = callback.useCallback;
  let closure_0 = _asyncToGenerator(async (regenerate) => {
    let closure_3;
    let c6 = 0;
    let c7 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              tmp(true);
              v0(false);
              v0 = 2;
              closure_1 = closure_2;
              c6 = 3;
              c7 = 1;
              const obj4 = { regenerate };
              const obj5 = { value: closure_2_7(regenerate, obj4), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            v0 = 0;
            tmp(false);
            throw closure_5;
          } else {
            if (2 === c6) {
              v0 = 1;
              const tmp11 = regenerate;
              if (tmp11) {
                closure_2(null);
              }
              v0(true);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              tmp(false);
              c7 = 3;
              return { value, done: true };
            } else {
              closure_1(value);
              v0 = 1;
            }
            v0 = 0;
            tmp(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp34) {
          closure_5 = tmp34;
          if (0 === v0) {
            c7 = 3;
            throw tmp34;
          } else if (1 === tmp36) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  const items = [projectId];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const items1 = [callback];
  const effect = callback.useEffect(() => {
    const promise = callback(false);
    promise.catch(() => {

    });
  }, items1);
  const items2 = [first];
  const items3 = [callback];
  const callback1 = callback.useCallback(() => {
    if (null != first) {
      const obj = ClipboardUtils;
      obj.copy(tmp.url);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  }, items2);
  const callback2 = callback.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      key: "VibegrationsConnectToolRegenerate",
      title: intl.string(_modDef3715.jKNAzJ),
      content: intl2.string(_modDef3715.oWzC0r),
      confirmText: intl3.string(_modDef3715.dZxnCn),
      onConfirm() {
        const promise = callback(true);
        promise.catch(() => {

        });
      }
    };
    const showConfirmModal = AlertModal.showConfirmModal;
    AlertModal;
    intl = intl10.intl;
    intl2 = intl10.intl;
    intl3 = intl10.intl;
    showConfirmModal(obj);
  }, items3);
  let obj = { header: closure_8(BottomSheetTitleHeader, obj2), children: tmp16(tmp17, obj3) };
  const ActionSheet = projectId(6618).ActionSheet;
  obj2 = { title: intl.string(first(3715)["xMOS+Z"]) };
  BottomSheetTitleHeader = projectId(6570).BottomSheetTitleHeader;
  intl = projectId(1115).intl;
  obj3 = { style: tmp.content, children: items4 };
  let obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(first(3715)["1Ew5/j"]) };
  const Text = projectId(4832).Text;
  intl2 = projectId(1115).intl;
  items4 = [closure_8(Text, obj4), , ];
  if (null != first) {
    let obj5 = { style: tmp.section, children: items5 };
    const obj6 = { variant: "text-xs/semibold", color: "text-muted", children: intl4.string(first(3715).DRgXyU) };
    const Text3 = tmp13(4832).Text;
    intl4 = tmp13(1115).intl;
    items5 = [tmp12(Text3, obj6), , , ];
    const obj7 = { variant: "primary", children: closure_8(projectId(4832).Text, obj8) };
    const Card = tmp13(5919).Card;
    obj8 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: first.url };
    items5[1] = closure_8(Card, obj7);
    const obj9 = { style: tmp.actions, children: items6 };
    const obj10 = { style: tmp.action, children: closure_8(Button, obj11) };
    obj11 = { variant: "primary", size: "md", text: intl5.string(projectId(1115).t.OpuAlK), onPress: callback1 };
    Button = tmp13(5281).Button;
    intl5 = tmp13(1115).intl;
    items6 = [tmp12(tmp17, obj10), ];
    const obj12 = { style: tmp.action, children: closure_8(Button2, obj13) };
    obj13 = { variant: "secondary", size: "md", text: intl6.string(first(3715).bsDgiq), loading: tmp5, onPress: callback2 };
    Button2 = tmp13(5281).Button;
    intl6 = tmp13(1115).intl;
    items6[1] = closure_8(View, obj12);
    items5[2] = closure_9(View, obj9);
    const obj14 = { variant: "text-xs/normal", color: "text-muted", children: intl7.string(first(3715).lTtxBT) };
    const Text4 = tmp13(4832).Text;
    intl7 = tmp13(1115).intl;
    items5[3] = closure_8(Text4, obj14);
    tmp12Result = tmp16(tmp17, obj5);
  } else {
    tmp12Result = null;
    if (tmp5) {
      const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(first(3715).c3R8Tx) };
      const Text2 = tmp13(4832).Text;
      intl3 = tmp13(1115).intl;
      tmp12Result = tmp12(Text2, obj15);
    }
  }
  items4[1] = tmp12Result;
  let tmp16Result2 = null;
  if (first1) {
    const obj16 = { style: tmp.failedRow, accessibilityRole: "alert", children: items7 };
    const obj17 = { style: tmp.failedText, children: closure_8(Text5, obj18) };
    obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl8.string(first(3715).QJKw6N) };
    Text5 = tmp13(4832).Text;
    intl8 = tmp13(1115).intl;
    items7 = [tmp12(tmp17, obj17), ];
    const obj19 = {
      variant: "secondary",
      size: "sm",
      text: intl9.string(first(3715)["7xdKYd"]),
      loading: tmp5,
      onPress() {
          const promise = callback(false);
          promise.catch(() => {

          });
        }
    };
    const Button3 = tmp13(5281).Button;
    intl9 = tmp13(1115).intl;
    items7[1] = closure_8(Button3, obj19);
    tmp16Result2 = tmp16(tmp17, obj16);
  }
  items4[2] = tmp16Result2;
  return closure_8(ActionSheet, obj);
};
export const VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY = "VibegrationsConnectToolSheet";
