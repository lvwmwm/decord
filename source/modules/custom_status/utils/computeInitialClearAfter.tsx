// Module ID: 11890
// Function ID: 92082
// Name: ClearAfterValues
// Dependencies: []
// Exports: default

// Module 11890 (ClearAfterValues)
const ClearAfterValues = require(dependencyMap[0]).ClearAfterValues;
const items = [, , ];
({ MINUTES_30: arr[0], HOURS_1: arr[1], HOURS_4: arr[2] } = ClearAfterValues);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/custom_status/utils/computeInitialClearAfter.tsx");

export default function computeInitialClearAfter() {
  const CustomStatusSetting = callback(dependencyMap[1]).CustomStatusSetting;
  const setting = CustomStatusSetting.getSetting();
  if (null != setting) {
    if ("" !== setting.expiresAtMs) {
      const _Number2 = Number;
      const NumberResult = Number(setting.expiresAtMs);
      const _isNaN = isNaN;
      if (isNaN(NumberResult)) {
        return ClearAfterValues.TODAY;
      } else if (0 === NumberResult) {
        return ClearAfterValues.DONT_CLEAR;
      } else {
        const _Date2 = Date;
        const date = new Date();
        const _Date3 = Date;
        const date1 = new Date(NumberResult);
        const fullYear = date.getFullYear();
        let tmp3 = fullYear === date1.getFullYear();
        if (tmp3) {
          const month = date.getMonth();
          tmp3 = month === date1.getMonth();
        }
        if (tmp3) {
          tmp3 = date.getDate() === date1.getDate();
          const date2 = date.getDate();
        }
        if (tmp3) {
          const _Number = Number;
          const _Date = Date;
          const callback = Number(NumberResult) - Date.now();
          let TODAY = items.find((arg0) => closure_0 <= arg0);
          if (null == TODAY) {
            TODAY = ClearAfterValues.TODAY;
          }
          return TODAY;
        } else {
          return ClearAfterValues.TODAY;
        }
      }
    }
  }
  return ClearAfterValues.TODAY;
};
