// Module ID: 16026
// Function ID: 123003
// Name: ParentalConsentWarningModal
// Dependencies: []
// Exports: default

// Module 16026 (ParentalConsentWarningModal)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ FamilyCenterSubPages: closure_6, UserLinkStatus: closure_7, UserLinkType: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_9, UserSettingsSections: closure_10 } = arg1(dependencyMap[4]));
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let closure_14 = arg1(dependencyMap[7]).DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING;
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[6]);
obj.illustration = { alignItems: "center", paddingTop: importDefault(dependencyMap[13]).space.PX_12 };
obj.title = { textAlign: "center" };
obj.body = { textAlign: "center" };
let closure_15 = obj.createStyles(obj);
const obj1 = { alignItems: "center", paddingTop: importDefault(dependencyMap[13]).space.PX_12 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningModal.tsx");

export default function ParentalConsentWarningModal(daysRemaining) {
  daysRemaining = daysRemaining.daysRemaining;
  const arg1 = daysRemaining;
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const syncMessages = obj.useSyncMessages(arg1(dependencyMap[16]).messagesLoader);
  const effect = React.useEffect(() => {
    let obj = ref(callback[17]);
    obj = { surface_type: "modal", days_remaining: daysRemaining };
    obj.track(constants.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, obj);
    ref(callback[18]).dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
  }, []);
  const importDefault = React.useRef(false);
  const callback = React.useCallback(() => {
    let flag = !ref.current;
    if (flag) {
      ref.current = true;
      let obj = daysRemaining(callback[19]);
      obj = { dismissAction: constants2.USER_DISMISS };
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(closure_14, obj);
      flag = true;
    }
    return flag;
  }, []);
  const dependencyMap = callback;
  const items = [daysRemaining, callback];
  const callback1 = React.useCallback(() => {
    if (callback()) {
      let obj = ref(callback[17]);
      obj = { surface_type: "modal", days_remaining: daysRemaining };
      obj.track(constants.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, obj);
    }
  }, items);
  const React = callback1;
  const items1 = [callback1];
  const items2 = [callback];
  const callback2 = React.useCallback(() => {
    callback1();
    ref(callback[20]).hideActionSheet();
  }, items1);
  const callback3 = React.useCallback(() => {
    callback();
    ref(callback[20]).hideActionSheet();
    if (function hasPendingParentLink() {
      const values = Object.values(linkedUsers.getLinkedUsers());
      return values.some((link_status) => {
        let tmp = link_status.link_status === constants.PENDING;
        if (tmp) {
          tmp = link_status.link_type === constants2.PARENT;
        }
        return tmp;
      });
    }()) {
      function openFamilyCenterRequestsTab() {
        let obj = callback2(closure_2[8]);
        const tab = obj.selectTab(constants.REQUESTS);
        const rootNavigationRef = callback(closure_2[9]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            obj = { screen: constants2.FAMILY_CENTER };
            callback(closure_2[10]).openUserSettings(obj);
            const obj5 = callback(closure_2[10]);
          }
        }
        const obj2 = callback(closure_2[9]);
        callback2(closure_2[11]).enqueue(() => {
          let obj = callback(closure_2[10]);
          obj = { screen: constants.FAMILY_CENTER };
          return obj.openUserSettings(obj);
        });
      }();
    } else {
      ref(callback[21]).pushLazy(daysRemaining(callback[23])(callback[22], callback.paths));
      const obj2 = ref(callback[21]);
    }
  }, items2);
  const intl = arg1(dependencyMap[15]).intl;
  if (0 === daysRemaining) {
    let stringResult = intl.string(importDefault(tmp9[16]).Zo5YZD);
  } else {
    obj = { count: daysRemaining };
    stringResult = intl.formatToPlainString(importDefault(tmp9[16]).b4sYUn, obj);
  }
  const intl2 = arg1(dependencyMap[15]).intl;
  if (0 === daysRemaining) {
    let stringResult1 = intl2.string(importDefault(tmp13[16]).CRZBSY);
  } else {
    obj = { count: daysRemaining };
    stringResult1 = intl2.formatToPlainString(importDefault(tmp13[16]).mQcGGY, obj);
  }
  const obj1 = { startExpanded: true, onDismiss: callback1 };
  const obj2 = { style: items3 };
  const items3 = [tmp.container, { paddingBottom: importDefault(dependencyMap[14])().bottom }];
  const obj3 = { spacing: importDefault(dependencyMap[13]).space.PX_16 };
  const items4 = [callback(View, { style: tmp.illustration, children: callback(arg1(dependencyMap[26]).FamilyKeysSpotIllustration, { accessible: false }) }), , , ];
  const obj5 = { style: tmp.title, children: stringResult };
  items4[1] = callback(arg1(dependencyMap[27]).Text, obj5);
  const obj6 = { style: tmp.body, children: stringResult1 };
  items4[2] = callback(arg1(dependencyMap[27]).Text, obj6);
  const obj7 = { spacing: importDefault(dependencyMap[13]).space.PX_8 };
  const obj8 = { text: true, size: "/assets/.cache/intl/ZGVzaWdu", grow: null };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj8.text = intl3.string(importDefault(dependencyMap[16]).Kp7sjX);
  obj8.onPress = callback3;
  const items5 = [callback(arg1(dependencyMap[28]).Button, obj8), ];
  const obj9 = {};
  const intl4 = arg1(dependencyMap[15]).intl;
  obj9.text = intl4.string(importDefault(dependencyMap[16]).hST5o8);
  const intl5 = arg1(dependencyMap[15]).intl;
  obj9.accessibilityHint = intl5.string(importDefault(dependencyMap[16]).4fZtHa);
  obj9.onPress = callback2;
  items5[1] = callback(arg1(dependencyMap[28]).Button, obj9);
  obj7.children = items5;
  items4[3] = callback2(arg1(dependencyMap[25]).Stack, obj7);
  obj3.children = items4;
  obj2.children = callback2(arg1(dependencyMap[25]).Stack, obj3);
  obj1.children = callback(View, obj2);
  return callback(arg1(dependencyMap[24]).BottomSheet, obj1);
};
