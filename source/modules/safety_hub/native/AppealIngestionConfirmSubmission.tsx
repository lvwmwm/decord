// Module ID: 11039
// Function ID: 85956
// Name: AppealIngestionConfirmSubmission
// Dependencies: []
// Exports: default

// Module 11039 (AppealIngestionConfirmSubmission)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[3]).EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: { "Null": "vertical", "Null": false }, detailsAction: { marginBottom: 16 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  let stateFromStores = obj.useStateFromStores(items, () => store.getAppealClassificationId());
  let obj1 = arg1(dependencyMap[7]);
  if (null == stateFromStores) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let obj2 = arg1(dependencyMap[6]);
  const items1 = [closure_4];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => store.getAppealSignal());
  let obj3 = arg1(dependencyMap[6]);
  const items2 = [closure_4];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => store.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (null != classification) {
    flagged_content = classification.flagged_content;
  }
  if (null == flagged_content) {
    flagged_content = [];
  }
  const intl = arg1(dependencyMap[8]).intl;
  const intl2 = arg1(dependencyMap[8]).intl;
  const stringResult = intl.string(arg1(dependencyMap[8]).t.C5q+pW);
  obj = {};
  const items3 = [callback(arg1(dependencyMap[9]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(arg1(dependencyMap[8]).t.G2g/g5) }), ];
  obj = { style: tmp.container };
  obj1 = {};
  const stringResult1 = intl2.string(arg1(dependencyMap[8]).t.G2g/g5);
  const tmp8 = View;
  const tmp9 = importDefault(dependencyMap[10]);
  const items4 = [arg1(dependencyMap[11]).getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj1.reasons = items4.filter((arg0) => arg0.length > 0);
  const items5 = [callback(tmp9, obj1), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp19 = flagged_content.length > 0;
    if (tmp19) {
      obj2 = { flaggedContent: flagged_content };
      tmp19 = callback(importDefault(dependencyMap[17]), obj2);
    }
    items5[2] = tmp19;
    obj3 = { classification: safetyHubClassification.classification };
    items5[3] = callback(importDefault(dependencyMap[18]), obj3);
    obj.children = items5;
    items3[1] = tmp7(tmp8, obj);
    obj.children = items3;
    return tmp7(arg1(dependencyMap[9]).AppealIngestionModalScreen, obj);
  } else {
    const obj4 = {
      style: tmp.detailsAction,
      onPress() {
          let obj = callback2(paths[13]);
          obj = {
            onSave(userInput) {
              let obj = callback(closure_2[16]);
              obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
              obj.dispatch(obj);
              callback(closure_2[13]).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            },
            onClose() {
              return callback(closure_2[13]).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            }
          };
          return obj.openLazy(callback(paths[15])(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
        }
    };
    if (stateFromStores2.length > 0) {
      const intl4 = arg1(dependencyMap[8]).intl;
      let stringResult2 = intl4.string(arg1(dependencyMap[8]).t.tnE3bZ);
    } else {
      const intl3 = arg1(dependencyMap[8]).intl;
      stringResult2 = intl3.string(arg1(dependencyMap[8]).t.uoQFIp);
    }
    obj4.children = stringResult2;
    callback(arg1(dependencyMap[12]).Text, obj4);
    const tmp10 = callback;
  }
};
