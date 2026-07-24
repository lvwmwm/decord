// Module ID: 8952
// Function ID: 70548
// Name: SecureFramesVerificationBottomSheet
// Dependencies: [31, 27, 8938, 33, 4130, 689, 8943, 4098, 5187, 5186, 5499, 4660, 1212, 4126, 4541, 4652, 8950, 8953, 2]
// Exports: default

// Module 8952 (SecureFramesVerificationBottomSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: closure_5, EPOCH_AUTHENTICATOR_COLUMNS: closure_6, EPOCH_AUTHENTICATOR_LENGTH: closure_7 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose.iconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { height: 48, width: 48 };
_createForOfIteratorHelperLoose.share = { height: 24 };
_createForOfIteratorHelperLoose.content = { padding: 16 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY").fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  let epochAuthenticator;
  let footer;
  let subtitle;
  let title;
  onShareClick = onShareClick.onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onShareClick(8943);
  obj = { fingerprintBase64: epochAuthenticator, chunkSize: closure_5, desiredLength: closure_7 };
  const readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj);
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = React.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      readableSecureFramesFingerprint(outer1_2[7]).hideActionSheet();
      onShareClick(joined);
      const obj = readableSecureFramesFingerprint(outer1_2[7]);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    readableSecureFramesFingerprint(outer1_2[7]).hideActionSheet();
  }, []);
  obj = { startExpanded: true };
  const obj1 = { title: null, leading: callback(onShareClick(5499).ActionSheetCloseButton, { onPress: callback1 }) };
  const obj2 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button" };
  const intl = onShareClick(1212).intl;
  obj2.accessibilityLabel = intl.string(onShareClick(1212).t.RDE0Sc);
  const obj3 = { variant: "text-md/semibold", color: "text-brand" };
  const intl2 = onShareClick(1212).intl;
  obj3.children = intl2.string(onShareClick(1212).t.RDE0Sc);
  obj2.children = callback(onShareClick(4126).Text, obj3);
  obj1.trailing = callback(onShareClick(4660).PressableOpacity, obj2);
  obj.header = callback(onShareClick(5186).BottomSheetTitleHeader, obj1);
  const obj4 = { style: tmp.content };
  const obj5 = { spacing: 8, justify: "center", align: "center", direction: "vertical" };
  const obj6 = { style: tmp.iconContainer };
  const obj7 = { style: tmp.icon, color: readableSecureFramesFingerprint(689).colors.TEXT_SUBTLE };
  obj6.children = callback(onShareClick(4652).LockIcon, obj7);
  const items1 = [callback(View, obj6), , ];
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title };
  items1[1] = callback(onShareClick(4126).Text, obj8);
  const obj9 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
  items1[2] = callback(onShareClick(4126).Text, obj9);
  obj5.children = items1;
  const items2 = [callback2(onShareClick(4541).Stack, obj5), , ];
  const obj10 = {};
  const intl3 = onShareClick(1212).intl;
  obj10.title = intl3.string(onShareClick(1212).t.cgBTyO);
  let tmp9 = null != readableSecureFramesFingerprint;
  if (tmp9) {
    const obj11 = { chunks: readableSecureFramesFingerprint };
    tmp9 = callback(readableSecureFramesFingerprint(8953), obj11);
  }
  obj10.trailing = tmp9;
  obj10.chunks = readableSecureFramesFingerprint;
  obj10.columns = closure_6;
  items2[1] = callback(readableSecureFramesFingerprint(8950), obj10);
  const obj12 = { style: tmp.footer, variant: "text-xs/normal", color: "text-muted", children: footer };
  items2[2] = callback(onShareClick(4126).Text, obj12);
  obj4.children = items2;
  obj.children = callback2(View, obj4);
  return callback(onShareClick(5187).BottomSheet, obj);
};
