// Module ID: 15310
// Function ID: 15311
// Name: DevToolsAgeVerificationScreen
// Dependencies: [5, 19, 17, 21, 4836, 576, 7866, 7859, 4528, 7861, 1613, 5999, 5917, 6377, 5924, 2]
// Exports: default

// Module 15310 (DevToolsAgeVerificationScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import TableRow3 from "TableRow" /* 5917 */;
import TableRowArrow from "TableRowArrow" /* 5924 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import KeyIcon from "KeyIcon" /* 6377 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7866 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, c5;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function showAgeVerificationTestModal() {
  return obj(...arguments);
}
let obj = function _showAgeVerificationTestModal() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj3.requestAgeVerification({}), done: false };
            obj3 = AgeVerificationURLActionCreators;
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj2 = closure_129_1(closure_129_2[8]);
            const openResult = obj2.open({ content: "Failed to show age verification test modal", key: "age-verification-test-failure" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            const obj7 = {
              webviewUrl: closure_0.verification_webview_url,
              verificationRequestId: closure_0.verification_request_id,
              verificationVendorName: closure_0.verification_vendor_name,
              incodeParameters: closure_0.incode_parameters,
              onComplete() {
                        obj = closure_1_1(closure_1_2[8]);
                        obj.open({ content: "[On Complete] Successfully age verified", key: "age-verification-test-success" });
                      },
              entryPoint: closure_129_0(closure_129_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS
            };
            const showAgeVerification = closure_129_1(closure_129_2[7]).showAgeVerification;
            const tmp22 = closure_129_1(closure_129_2[7]);
            showAgeVerification(obj7);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        let closure_2 = tmp12;
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default function DevToolsAgeVerificationScreen() {
  let TableRowGroup;
  let items;
  let items1;
  let obj3;
  const tmp = closure_7();
  obj = { style: tmp.container, contentContainerStyle: items, children: metroRequire(TableRowGroup, obj3) };
  items = [tmp.content, ];
  let obj2 = { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom };
  items[1] = obj2;
  obj3 = { title: "Quick Actions", hasIcons: true, children: items1 };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj4 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: hasOwnProperty(KeyIcon.KeyIcon, {}), trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}) };
  const TableRow = TableRow3.TableRow;
  items1 = [hasOwnProperty(TableRow, obj4), ];
  const obj5 = {
    label: "Launch Age Verification Modal",
    onPress() {
      obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj2);
    },
    icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
    trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {})
  };
  const TableRow2 = TableRow3.TableRow;
  items1[1] = hasOwnProperty(TableRow2, obj5);
  return hasOwnProperty(ScrollView, obj);
};
