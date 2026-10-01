// Module ID: 12189
// Function ID: 12190
// Name: ContactSyncLandingOnboardingRedesign
// Dependencies: [5, 19, 17, 5045, 21, 4836, 576, 5994, 5451, 12190, 4832, 1115, 5281, 12191, 12183, 2]
// Exports: default

// Module 12189 (ContactSyncLandingOnboardingRedesign)
import nativeDefault from "native" /* 576 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12183 */;
import AssetRegistryDefault from "AssetRegistry" /* 12190 */;
import ContactSyncErrorDefault from "ContactSyncError" /* 12191 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c1, c2;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let tmp5;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerImage: size, title: obj3, subtitle: obj4, buttonContainer: size1, trailing: obj5 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: tmp5 - NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
tmp5 = -nativeDefault.space.PX_32;
size = { height: 135, width: 216, marginBottom: nativeDefault.space.PX_24 };
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
size1 = { height: 48, width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingBottom: nativeDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default function ContactSyncLandingOnboardingRedesign(onNext) {
  let Button;
  let discoverabilityEnabled;
  let error;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let loading;
  let obj7;
  let setDiscoverabilityEnabled;
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp = closure_11();
  const items = [onNext];
  let obj = { children: items2 };
  let obj2 = { style: tmp.content, children: items1 };
  let obj3 = { resizeMode: "contain", style: tmp.headerImage, source: AssetRegistryDefault };
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp3;
            const obj2 = c1(c2[8]);
            c1 = 1;
            c2 = 1;
            const obj5 = { value: obj2.requestPermission(constants.CONTACTS), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_128_0();
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  }), items);
  items1 = [closure_8(closure_6, obj3), , , , ];
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", children: intl.string(onNext(1115).t["/G+nci"]) };
  const Text = onNext(4832).Text;
  intl = onNext(1115).intl;
  items1[1] = closure_8(Text, obj4);
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", children: intl2.string(onNext(1115).t.G8zcHt) };
  const Text2 = onNext(4832).Text;
  intl2 = onNext(1115).intl;
  items1[2] = closure_8(Text2, obj5);
  const obj6 = { style: tmp.buttonContainer, children: closure_8(Button, obj7) };
  obj7 = { variant: "primary", size: "lg", text: intl3.string(onNext(1115).t.LhlgY9), onPress: callback, loading };
  Button = onNext(5281).Button;
  intl3 = onNext(1115).intl;
  items1[3] = closure_8(closure_5, obj6);
  items1[4] = closure_8(ContactSyncErrorDefault, { error });
  items2 = [closure_9(closure_5, obj2), ];
  const obj8 = { style: tmp.trailing, children: closure_8(RedesignContactSyncDiscoverabilityFooterDefault, { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) };
  items2[1] = closure_8(closure_5, obj8);
  return closure_9(closure_10, obj);
};
