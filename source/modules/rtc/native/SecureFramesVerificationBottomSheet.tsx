// Module ID: 8906
// Function ID: 70292
// Name: SecureFramesVerificationBottomSheet
// Dependencies: []
// Exports: default

// Module 8906 (SecureFramesVerificationBottomSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: closure_5, EPOCH_AUTHENTICATOR_COLUMNS: closure_6, EPOCH_AUTHENTICATOR_LENGTH: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { -9223372036854775808: "337f717407aa04f32bdedf504de7310b", -9223372036854775808: "emoji", 9223372036854775807: "png", -9223372036854775808: true, -9223372036854775808: "/assets/modules/premium/native/images/perks", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.iconContainer = obj;
obj.icon = {};
obj.share = { height: 24 };
obj.content = { padding: 16 };
obj.subtitle = { textAlign: "center" };
obj.footer = {};
let closure_10 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  let epochAuthenticator;
  let footer;
  let subtitle;
  let title;
  onShareClick = onShareClick.onShareClick;
  const arg1 = onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  obj = { fingerprintBase64: epochAuthenticator, chunkSize: closure_5, desiredLength: closure_7 };
  const readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj);
  const importDefault = readableSecureFramesFingerprint;
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = React.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      readableSecureFramesFingerprint(closure_2[7]).hideActionSheet();
      onShareClick(joined);
      const obj = readableSecureFramesFingerprint(closure_2[7]);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    readableSecureFramesFingerprint(closure_2[7]).hideActionSheet();
  }, []);
  obj = { startExpanded: true };
  const obj1 = { title: null, leading: callback(arg1(dependencyMap[10]).ActionSheetCloseButton, { onPress: callback1 }) };
  const obj2 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[12]).intl;
  obj2.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.RDE0Sc);
  const obj3 = { cachedAt: true, edpbxy: true };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[12]).t.RDE0Sc);
  obj2.children = callback(arg1(dependencyMap[13]).Text, obj3);
  obj1.trailing = callback(arg1(dependencyMap[11]).PressableOpacity, obj2);
  obj.header = callback(arg1(dependencyMap[9]).BottomSheetTitleHeader, obj1);
  const obj4 = { style: tmp.content };
  const obj5 = { resizeMode: true, alignSelf: true, borderRadius: true, maxWidth: true };
  const obj6 = { style: tmp.iconContainer };
  const obj7 = { style: tmp.icon, color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
  obj6.children = callback(arg1(dependencyMap[15]).LockIcon, obj7);
  const items1 = [callback(View, obj6), , ];
  const obj8 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, children: title };
  items1[1] = callback(arg1(dependencyMap[13]).Text, obj8);
  items1[2] = callback(arg1(dependencyMap[13]).Text, { style: tmp.subtitle, children: subtitle });
  obj5.children = items1;
  const items2 = [callback2(arg1(dependencyMap[14]).Stack, obj5), , ];
  const obj10 = {};
  const intl3 = arg1(dependencyMap[12]).intl;
  obj10.title = intl3.string(arg1(dependencyMap[12]).t.cgBTyO);
  let tmp9 = null != readableSecureFramesFingerprint;
  if (tmp9) {
    const obj11 = { chunks: readableSecureFramesFingerprint };
    tmp9 = callback(importDefault(dependencyMap[17]), obj11);
  }
  obj10.trailing = tmp9;
  obj10.chunks = readableSecureFramesFingerprint;
  obj10.columns = closure_6;
  items2[1] = callback(importDefault(dependencyMap[16]), obj10);
  items2[2] = callback(arg1(dependencyMap[13]).Text, { style: tmp.footer, children: footer });
  obj4.children = items2;
  obj.children = callback2(View, obj4);
  return callback(arg1(dependencyMap[8]).BottomSheet, obj);
};
