// Module ID: 16151
// Function ID: 125218
// Name: ParentalConsentWarningModal
// Dependencies: [31, 27, 6769, 6770, 653, 1345, 33, 1334, 6771, 3982, 5796, 4340, 4130, 689, 1557, 1212, 2198, 675, 686, 1336, 4098, 4337, 16152, 1934, 5187, 4541, 5807, 4126, 4543, 2]
// Exports: default

// Module 16151 (ParentalConsentWarningModal)
import result from "result";
import { View } from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ FamilyCenterSubPages: closure_6, UserLinkStatus: closure_7, UserLinkType: closure_8 } = items);
({ AnalyticEvents: closure_9, UserSettingsSections: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = require("DismissibleContent").DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.illustration = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningModal.tsx");

export default function ParentalConsentWarningModal(daysRemaining) {
  daysRemaining = daysRemaining.daysRemaining;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = daysRemaining(callback[15]);
  const syncMessages = obj.useSyncMessages(daysRemaining(callback[16]).messagesLoader);
  const effect = callback1.useEffect(() => {
    let obj = ref(callback[17]);
    obj = { surface_type: "modal", days_remaining: daysRemaining };
    obj.track(outer1_9.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, obj);
    ref(callback[18]).dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
  }, []);
  const importDefault = callback1.useRef(false);
  callback = callback1.useCallback(() => {
    let flag = !ref.current;
    if (flag) {
      ref.current = true;
      let obj = daysRemaining(callback[19]);
      obj = { dismissAction: outer1_11.USER_DISMISS };
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(outer1_14, obj);
      flag = true;
    }
    return flag;
  }, []);
  const items = [daysRemaining, callback];
  callback1 = callback1.useCallback(() => {
    if (callback()) {
      let obj = ref(callback[17]);
      obj = { surface_type: "modal", days_remaining: daysRemaining };
      obj.track(outer1_9.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, obj);
    }
  }, items);
  const items1 = [callback1];
  const items2 = [callback];
  const callback2 = callback1.useCallback(() => {
    callback1();
    ref(callback[20]).hideActionSheet();
  }, items1);
  const callback3 = callback1.useCallback(() => {
    callback();
    ref(callback[20]).hideActionSheet();
    if ((function hasPendingParentLink() {
      const values = Object.values(outer2_5.getLinkedUsers());
      return values.some((link_status) => {
        let tmp = link_status.link_status === outer3_7.PENDING;
        if (tmp) {
          tmp = link_status.link_type === outer3_8.PARENT;
        }
        return tmp;
      });
    })()) {
      (function openFamilyCenterRequestsTab() {
        let obj = callback(callback[8]);
        const tab = obj.selectTab(outer2_6.REQUESTS);
        const rootNavigationRef = daysRemaining(callback[9]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            obj = { screen: outer2_10.FAMILY_CENTER };
            daysRemaining(callback[10]).openUserSettings(obj);
            const obj5 = daysRemaining(callback[10]);
          }
        }
        const obj2 = daysRemaining(callback[9]);
        callback(callback[11]).enqueue(() => {
          let obj = daysRemaining(callback[10]);
          obj = { screen: outer3_10.FAMILY_CENTER };
          return obj.openUserSettings(obj);
        });
      })();
    } else {
      ref(callback[21]).pushLazy(daysRemaining(callback[23])(callback[22], callback.paths));
      let obj2 = ref(callback[21]);
    }
  }, items2);
  const intl = daysRemaining(callback[15]).intl;
  if (0 === daysRemaining) {
    let stringResult = intl.string(importDefault(tmp9[16]).Zo5YZD);
  } else {
    obj = { count: daysRemaining };
    stringResult = intl.formatToPlainString(importDefault(tmp9[16]).b4sYUn, obj);
  }
  const intl2 = daysRemaining(callback[15]).intl;
  if (0 === daysRemaining) {
    let stringResult1 = intl2.string(importDefault(tmp13[16]).CRZBSY);
  } else {
    obj = { count: daysRemaining };
    stringResult1 = intl2.formatToPlainString(importDefault(tmp13[16]).mQcGGY, obj);
  }
  const obj1 = { startExpanded: true, onDismiss: callback1 };
  let obj2 = { style: items3 };
  items3 = [tmp.container, { paddingBottom: importDefault(callback[14])().bottom }];
  const obj3 = { spacing: importDefault(callback[13]).space.PX_16 };
  const items4 = [callback(View, { style: tmp.illustration, children: callback(daysRemaining(callback[26]).FamilyKeysSpotIllustration, { accessible: false }) }), , , ];
  let obj5 = { variant: "heading-lg/bold", color: "text-default", style: tmp.title, accessibilityRole: "header", children: stringResult };
  items4[1] = callback(daysRemaining(callback[27]).Text, obj5);
  const obj6 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: stringResult1 };
  items4[2] = callback(daysRemaining(callback[27]).Text, obj6);
  const obj7 = { spacing: importDefault(callback[13]).space.PX_8 };
  const obj8 = { size: "lg", variant: "primary", grow: true };
  const intl3 = daysRemaining(callback[15]).intl;
  obj8.text = intl3.string(importDefault(callback[16]).Kp7sjX);
  obj8.onPress = callback3;
  const items5 = [callback(daysRemaining(callback[28]).Button, obj8), ];
  const obj9 = { size: "lg", variant: "secondary", grow: true };
  const intl4 = daysRemaining(callback[15]).intl;
  obj9.text = intl4.string(importDefault(callback[16]).hST5o8);
  const intl5 = daysRemaining(callback[15]).intl;
  obj9.accessibilityHint = intl5.string(importDefault(callback[16])["4fZtHa"]);
  obj9.onPress = callback2;
  items5[1] = callback(daysRemaining(callback[28]).Button, obj9);
  obj7.children = items5;
  items4[3] = callback2(daysRemaining(callback[25]).Stack, obj7);
  obj3.children = items4;
  obj2.children = callback2(daysRemaining(callback[25]).Stack, obj3);
  obj1.children = callback(View, obj2);
  return callback(daysRemaining(callback[24]).BottomSheet, obj1);
};
