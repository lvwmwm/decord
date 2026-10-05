// Module ID: 16995
// Function ID: 16996
// Name: VoiceChannelAppActionSheet
// Dependencies: [19, 21, 1126, 3821, 558, 576, 16993, 4854, 6644, 6071, 9222, 6701, 6072, 2]

// Module 16995 (VoiceChannelAppActionSheet)
import _modDef3821 from "module_3821" /* 3821 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9222 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const none = "none";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let intl5;
  let items;
  let listState;
  let obj6;
  let onChange;
  let options;
  let selectedApplicationId;
  let tmp13;
  let tmp20;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = onChange;
  let tmp2 = dependencyMap;
  let obj = onChange(576);
  const cResult = obj.c(15);
  ({ selectedApplicationId, onChange } = guildId);
  guildId = guildId.guildId;
  const obj2 = onChange(16993);
  const voiceChannelAppSettingOptions = obj2.useVoiceChannelAppSettingOptions(guildId, selectedApplicationId);
  ({ options, listState } = voiceChannelAppSettingOptions);
  if (cResult[0] !== onChange) {
    const fn = function n(arg0) {
      let tmp2 = null;
      const tmp = onChange;
      if (arg0 !== none) {
        tmp2 = arg0;
      }
      tmp(tmp2);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3821.AdT7SZ);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: tmp6 };
    const tmp11 = closure_4(tmp(6644).BottomSheetTitleHeader, obj3);
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  let tmp12 = selectedApplicationId;
  if (selectedApplicationId == null) {
    tmp12 = none;
  }
  if (cResult[4] !== listState) {
    let stringResult1;
    if ("loading" === listState) {
      const intl4 = tmp(1126).intl;
      stringResult1 = intl4.string(tmp(1126).t.ZTNur7);
    } else if ("failed" === listState) {
      const intl3 = tmp(1126).intl;
      stringResult1 = intl3.string(_modDef3821.X2xOBn);
    } else if ("empty" === listState) {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(_modDef3821["4S6iHa"]);
    }
    cResult[4] = listState;
    cResult[5] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== options) {
    let tmp18;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(applicationId) {
          let iconApplication;
          let name;
          applicationId = applicationId.applicationId;
          ({ name, iconApplication } = applicationId);
          const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
          const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
          return closure_1_4(TableRadioRow, obj, applicationId);
        }
      }
      cResult[8] = I;
      tmp18 = I;
    } else {
      class I {
        constructor(applicationId) {
          let iconApplication;
          let name;
          applicationId = applicationId.applicationId;
          ({ name, iconApplication } = applicationId);
          const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
          const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
          return closure_1_4(TableRadioRow, obj, applicationId);
        }
      }
    }
    const mapped = options.map(tmp18);
    cResult[6] = options;
    cResult[7] = mapped;
  } else {
    class I {
      constructor(applicationId) {
        let iconApplication;
        let name;
        applicationId = applicationId.applicationId;
        ({ name, iconApplication } = applicationId);
        const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
        const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
        return closure_1_4(TableRadioRow, obj, applicationId);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(applicationId) {
        let iconApplication;
        let name;
        applicationId = applicationId.applicationId;
        ({ name, iconApplication } = applicationId);
        const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
        const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
        return closure_1_4(TableRadioRow, obj, applicationId);
      }
    }
    const obj4 = { value: none, label: intl5.string(_modDef3821.KEB4Rm) };
    let TableRadioRow = tmp(6071).TableRadioRow;
    intl5 = tmp(1126).intl;
    const tmp23 = closure_4(TableRadioRow, obj4);
    cResult[9] = tmp23;
    tmp20 = tmp23;
  } else {
    class I {
      constructor(applicationId) {
        let iconApplication;
        let name;
        applicationId = applicationId.applicationId;
        ({ name, iconApplication } = applicationId);
        const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
        const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
        return closure_1_4(TableRadioRow, obj, applicationId);
      }
    }
  }
  if (cResult[10] === tmp5) {
    class I {
      constructor(applicationId) {
        let iconApplication;
        let name;
        applicationId = applicationId.applicationId;
        ({ name, iconApplication } = applicationId);
        const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
        const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
        return closure_1_4(TableRadioRow, obj, applicationId);
      }
    }
  }
  const obj5 = { header: tmp9, children: closure_5(tmp(6072).TableRadioGroup, obj6) };
  const ActionSheet = tmp(6701).ActionSheet;
  obj6 = { accessibilityLabel: tmp6, value: tmp12, onChange: tmp5, helperText: tmp13, hasIcons: true, children: items };
  items = [tmp17, tmp20];
  cResult[10] = tmp5;
  cResult[11] = tmp12;
  cResult[12] = tmp13;
  cResult[13] = tmp17;
  cResult[14] = closure_4(ActionSheet, obj5);
  closure_4(ActionSheet, obj5);
}) : ((guildId) => {
  let TableRadioGroup;
  let intl5;
  let items1;
  let listState;
  let obj3;
  let onChange;
  let options;
  let selectedApplicationId;
  let stringResult1;
  let tmp8;
  ({ selectedApplicationId, onChange } = guildId);
  let tmp = onChange;
  let tmp2 = dependencyMap;
  guildId = guildId.guildId;
  let obj = onChange(16993);
  const voiceChannelAppSettingOptions = obj.useVoiceChannelAppSettingOptions(guildId, selectedApplicationId);
  ({ options, listState } = voiceChannelAppSettingOptions);
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    const tmp = onChange;
    if (arg0 !== none) {
      tmp2 = arg0;
    }
    tmp(tmp2);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  const intl = onChange(1126).intl;
  const stringResult = intl.string(_modDef3821.AdT7SZ);
  const obj2 = { header: closure_4(onChange(6644).BottomSheetTitleHeader, { title: stringResult }), children: tmp8(TableRadioGroup, obj3) };
  const ActionSheet = onChange(6701).ActionSheet;
  obj3 = { accessibilityLabel: stringResult, value: selectedApplicationId, onChange: callback, helperText: stringResult1, hasIcons: true, children: items1 };
  TableRadioGroup = onChange(6072).TableRadioGroup;
  tmp8 = closure_5;
  if (selectedApplicationId == null) {
    selectedApplicationId = none;
  }
  if ("loading" === listState) {
    const intl4 = tmp(1126).intl;
    stringResult1 = intl4.string(tmp(1126).t.ZTNur7);
  } else if ("failed" === listState) {
    const intl3 = tmp(1126).intl;
    stringResult1 = intl3.string(tmp5(3821).X2xOBn);
  } else if ("empty" === listState) {
    const intl2 = tmp(1126).intl;
    stringResult1 = intl2.string(tmp5(3821)["4S6iHa"]);
  }
  items1 = [
    options.map((applicationId) => {
      let iconApplication;
      let name;
      applicationId = applicationId.applicationId;
      ({ name, iconApplication } = applicationId);
      const obj = { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) };
      const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
      return closure_1_4(TableRadioRow, obj, applicationId);
    }),

  ];
  const obj4 = { value: none, label: intl5.string(_modDef3821.KEB4Rm) };
  let TableRadioRow = tmp(6071).TableRadioRow;
  intl5 = tmp(1126).intl;
  items1[1] = closure_4(TableRadioRow, obj4);
  return closure_4(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppActionSheet.tsx");

export default tmp3;
export const VOICE_CHANNEL_APP_ACTION_SHEET_KEY = "VoiceChannelAppActionSheet";
