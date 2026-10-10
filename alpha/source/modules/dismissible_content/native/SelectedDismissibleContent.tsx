// Module ID: 10012
// Function ID: 10013
// Name: SelectedDismissibleContent
// Dependencies: [32, 19, 21, 558, 576, 7099, 2]

// Module 10012 (SelectedDismissibleContent)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp;
const useSelectedDismissibleContent = tmp(7099);
({ Fragment: c3, jsx: closure_4 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(9);
  ({ children, groupName, bypassAutoDismiss } = arg0);
  if (cResult[0] === bypassAutoDismiss) {
    let tmp5;
    if (cResult[1] === groupName) {
      tmp5 = cResult[2];
    }
    const tmpResult = useSelectedDismissibleContent;
    [tmp8, tmp9] = tmpResult.useSelectedDismissibleContent(tmp4, tmp5);
    _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4, tmp5), 2);
    if (cResult[3] === children) {
      if (cResult[4] === tmp9) {
        let tmp10;
        let tmp12;
        if (cResult[5] === tmp8) {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== tmp10) {
          const obj2 = { children: tmp10 };
          const tmp15 = React3(_false, obj2);
          cResult[7] = tmp10;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const obj3 = { visibleContent: tmp8, markAsDismissed: tmp9 };
    const childrenResult = children(obj3);
    cResult[3] = children;
    cResult[4] = tmp9;
    cResult[5] = tmp8;
    cResult[6] = childrenResult;
    tmp10 = childrenResult;
  }
  const obj4 = { groupName, bypassAutoDismiss };
  cResult[0] = bypassAutoDismiss;
  cResult[1] = groupName;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : (function SelectedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentTypes;
  let groupName;
  let obj3;
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedDismissibleContent(contentTypes, { groupName, bypassAutoDismiss }), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedVersionedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentType;
  let groupName;
  let latestVersion;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(6);
  ({ contentType, children, latestVersion, groupName, bypassAutoDismiss } = arg0);
  const obj2 = useSelectedDismissibleContent;
  [tmp3, tmp4] = obj2.useSelectedVersionedDismissibleContent(contentType, latestVersion, groupName, bypassAutoDismiss);
  _slicedToArray(obj2.useSelectedVersionedDismissibleContent(contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp7;
      if (cResult[2] === tmp3) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React3(_false, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
}) : (function SelectedVersionedDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let latestVersion;
  let obj3;
  contentType = contentType.contentType;
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedVersionedDismissibleContent(contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedTimeRecurringDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentType;
  let groupName;
  let timeRecurringConfig;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(6);
  ({ contentType, children, timeRecurringConfig, groupName, bypassAutoDismiss } = arg0);
  const obj2 = useSelectedDismissibleContent;
  [tmp3, tmp4] = obj2.useSelectedTimeRecurringDismissibleContent(contentType, timeRecurringConfig, groupName, bypassAutoDismiss);
  _slicedToArray(obj2.useSelectedTimeRecurringDismissibleContent(contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp7;
      if (cResult[2] === tmp3) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React3(_false, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
}) : (function SelectedTimeRecurringDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let obj3;
  let timeRecurringConfig;
  contentType = contentType.contentType;
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedTimeRecurringDismissibleContent(contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedSnowflakeBoundDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentType;
  let groupName;
  let newSnowflakeId;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(6);
  ({ contentType, children, newSnowflakeId, groupName, bypassAutoDismiss } = arg0);
  const obj2 = useSelectedDismissibleContent;
  [tmp3, tmp4] = obj2.useSelectedSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, groupName, bypassAutoDismiss);
  _slicedToArray(obj2.useSelectedSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp7;
      if (cResult[2] === tmp3) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React3(_false, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
}) : (function SelectedSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  let obj3;
  contentType = contentType.contentType;
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedTimeReccuringSnowflakeBoundDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentType;
  let groupName;
  let newSnowflakeId;
  let timeRecurringConfig;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(6);
  ({ contentType, children, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss } = arg0);
  const obj2 = useSelectedDismissibleContent;
  [tmp3, tmp4] = obj2.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss);
  _slicedToArray(obj2.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp7;
      if (cResult[2] === tmp3) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React3(_false, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
}) : (function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  let obj3;
  let timeRecurringConfig;
  contentType = contentType.contentType;
  ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children(obj3) };
  obj3 = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return React3(_false, obj2);
});
const result = size.fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default tmp4;
export const SelectedVersionedDismissibleContent = tmp5;
export const SelectedTimeRecurringDismissibleContent = tmp6;
export const SelectedSnowflakeBoundDismissibleContent = tmp7;
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = tmp8;
