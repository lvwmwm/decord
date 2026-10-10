// Module ID: 13563
// Function ID: 13564
// Name: NUFChannelsActionSheet
// Dependencies: [19, 2062, 21, 558, 576, 5056, 13564, 1126, 13568, 6839, 2]

// Module 13563 (NUFChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 13568 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function NUFChannelsActionSheet(markAsDismissed) {
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = markAsDismissed;
  const tmp2 = dependencyMap;
  let obj = markAsDismissed(576);
  const cResult = obj.c(13);
  markAsDismissed = markAsDismissed.markAsDismissed;
  if (cResult[0] !== markAsDismissed) {
    const fn = function l() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp2(ContentDismissActionType.UNKNOWN);
      }
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== markAsDismissed) {
    const fn2 = function h() {
      let tmpResult;
      if (markAsDismissed != null) {
        tmpResult = tmp(ContentDismissActionType.UNKNOWN);
      }
      return tmpResult;
    };
    cResult[2] = markAsDismissed;
    cResult[3] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = jsx(tmp(13564).ServerChannelsAbstractUI, {});
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.Ay9424);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.mufH2P);
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.BddRzS);
    cResult[4] = tmp11;
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    cResult[7] = stringResult2;
    tmp9 = stringResult2;
    tmp8 = stringResult1;
    tmp7 = stringResult;
    tmp6 = tmp11;
  } else {
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
  }
  if (cResult[8] !== tmp4) {
    const tmp18 = jsx(NUFTemplateV2Default, { illustration: tmp6, title: tmp7, description: tmp8, CTALabel: tmp9, onCTAPress: tmp4 });
    cResult[8] = tmp4;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] === tmp5) {
    let tmp19;
    if (cResult[11] === tmp15) {
      tmp19 = cResult[12];
    }
    return tmp19;
  }
  const tmp20 = jsx(tmp(6839).BottomSheet, { onDismiss: tmp5, startExpanded: true, children: tmp15 });
  cResult[10] = tmp5;
  cResult[11] = tmp15;
  cResult[12] = tmp20;
  tmp19 = tmp20;
}) : (function NUFChannelsActionSheet(markAsDismissed) {
  let intl;
  let intl2;
  let intl3;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.UNKNOWN);
    }
  }, items);
  BottomSheet = markAsDismissed(6839).BottomSheet;
  ({ illustration: null, title: intl.string(markAsDismissed(1126).t.Ay9424), description: intl2.string(markAsDismissed(1126).t.mufH2P), CTALabel: intl3.string(markAsDismissed(1126).t.BddRzS), onCTAPress: callback });
  const tmp2 = NUFTemplateV2Default;
  intl = markAsDismissed(1126).intl;
  intl2 = markAsDismissed(1126).intl;
  intl3 = markAsDismissed(1126).intl;
  return <BottomSheet onDismiss={function onDismiss() {
    let tmpResult;
    if (markAsDismissed != null) {
      tmpResult = tmp(ContentDismissActionType.UNKNOWN);
    }
    return tmpResult;
  }} startExpanded>{null}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default tmp2;
