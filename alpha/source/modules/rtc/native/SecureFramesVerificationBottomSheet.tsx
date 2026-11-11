// Module ID: 10576
// Function ID: 10577
// Name: SecureFramesVerificationBottomSheet
// Dependencies: [19, 17, 10561, 21, 5243, 575, 10568, 5489, 5503, 7847, 7886, 7364, 1113, 5866, 6274, 8027, 10574, 10577, 2]
// Exports: default

// Module 10576 (SecureFramesVerificationBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import react from "react" /* 19 */;
import SecureFramesConstants from "SecureFramesConstants" /* 10561 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: hasOwnProperty, EPOCH_AUTHENTICATOR_COLUMNS: metroRequire, EPOCH_AUTHENTICATOR_LENGTH: metroImportDefault } = SecureFramesConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { iconContainer: size, icon: { height: 48, width: 48 }, share: { height: 24 }, content: { padding: 16 }, subtitle: { textAlign: "center" }, footer: { textAlign: "center", marginTop: 8 } };
size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_10 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  let BottomSheetTitleHeader;
  let LockIcon;
  let PressableOpacity;
  let Text;
  let epochAuthenticator;
  let footer;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let subtitle;
  let title;
  let tmp7Result;
  let tmp8;
  let tmp9;
  onShareClick = onShareClick.onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = closure_10();
  let obj = onShareClick(10568);
  let obj2 = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
  const readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj2);
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = react.useCallback(() => {
    const obj = readableSecureFramesFingerprint;
    if (null != readableSecureFramesFingerprint) {
      const joined = obj.join(" ");
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      onShareClick(joined);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = readableSecureFramesFingerprint(dependencyMap[7]);
    obj.hideActionSheet();
  }, []);
  const obj3 = { startExpanded: true, header: closure_8(BottomSheetTitleHeader, obj4), children: tmp8(tmp9, obj7) };
  const BottomSheet = onShareClick(5503).BottomSheet;
  obj4 = { title: null, leading: closure_8(onShareClick(7886).ActionSheetCloseButton, { onPress: callback1 }), trailing: closure_8(PressableOpacity, obj5) };
  BottomSheetTitleHeader = onShareClick(7847).BottomSheetTitleHeader;
  obj5 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: intl.string(onShareClick(1113).t.RDE0Sc), children: closure_8(Text, obj6) };
  PressableOpacity = onShareClick(7364).PressableOpacity;
  intl = onShareClick(1113).intl;
  obj6 = { variant: "body-md/semibold", color: "text-brand", children: intl2.string(onShareClick(1113).t.RDE0Sc) };
  Text = onShareClick(5866).Text;
  intl2 = onShareClick(1113).intl;
  obj7 = { style: tmp.content, children: items2 };
  const obj8 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: items1 };
  const obj9 = { style: tmp.iconContainer, children: closure_8(LockIcon, obj10) };
  const Stack = onShareClick(6274).Stack;
  obj10 = { style: tmp.icon, color: readableSecureFramesFingerprint(575).colors.TEXT_SUBTLE };
  LockIcon = onShareClick(8027).LockIcon;
  items1 = [closure_8(View, obj9), closure_8(onShareClick(5866).Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title }), ];
  const obj11 = { style: tmp.subtitle, variant: "body-md/medium", color: "text-default", children: subtitle };
  items1[2] = closure_8(onShareClick(5866).Text, obj11);
  items2 = [closure_9(Stack, obj8), , ];
  const obj12 = { title: intl3.string(onShareClick(1113).t.cgBTyO), trailing: tmp7Result, chunks: readableSecureFramesFingerprint, columns };
  const tmp11 = readableSecureFramesFingerprint(10574);
  intl3 = onShareClick(1113).intl;
  tmp7Result = null != readableSecureFramesFingerprint;
  const tmp10 = readableSecureFramesFingerprint;
  const tmp2 = onShareClick;
  tmp8 = closure_9;
  tmp9 = View;
  if (tmp7Result) {
    const obj13 = { chunks: readableSecureFramesFingerprint };
    tmp7Result = tmp7(tmp10(10577), obj13);
  }
  items2[1] = closure_8(tmp11, obj12);
  const obj14 = { style: tmp.footer, variant: "body-xs/normal", color: "text-muted", children: footer };
  items2[2] = closure_8(tmp2(5866).Text, obj14);
  return closure_8(BottomSheet, obj3);
};
