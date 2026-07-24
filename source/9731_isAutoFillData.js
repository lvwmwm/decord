// Module ID: 9731
// Function ID: 75642
// Name: isAutoFillData
// Dependencies: [9732]
// Exports: computedFillDataWithAutoFillData, computedRealIndexWithAutoFillData

// Module 9731 (isAutoFillData)
const SINGLE_ITEM = require("DATA_LENGTH").DATA_LENGTH.SINGLE_ITEM;
const DOUBLE_ITEM = require("DATA_LENGTH").DATA_LENGTH.DOUBLE_ITEM;
let closure_2 = { code: "function isAutoFillData_Pnpm_computedWithAutoFillDataTs1(params){return!!params.loop&&!!params.autoFillData;}" };
let closure_3 = (() => {
  function isAutoFillData(loop) {
    let autoFillData = !tmp;
    if (!!loop.loop) {
      autoFillData = loop.autoFillData;
    }
    return autoFillData;
  }
  isAutoFillData.__closure = {};
  isAutoFillData.__workletHash = 3243810595903;
  isAutoFillData.__initData = closure_2;
  return isAutoFillData;
})();
let closure_4 = { code: "function convertToSharedIndex_Pnpm_computedWithAutoFillDataTs2(params){const{isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM}=this.__closure;const{loop:loop,rawDataLength:rawDataLength,index:index,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return 0;case DOUBLE_ITEM:return index%2;}}return index;}" };
let closure_5 = { code: "function computedOffsetXValueWithAutoFillData_Pnpm_computedWithAutoFillDataTs3(params){const{isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM}=this.__closure;const{rawDataLength:rawDataLength,value:value,size:size,loop:loop,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return value%size;case DOUBLE_ITEM:return value%(size*2);}}return value;}" };

export const convertToSharedIndex = (() => {
  function convertToSharedIndex(loop) {
    let index;
    let rawDataLength;
    ({ rawDataLength, index } = loop);
    if (outer1_3(obj)) {
      if (outer1_0 === rawDataLength) {
        return 0;
      } else if (outer1_1 === rawDataLength) {
        return index % 2;
      }
    }
    return index;
  }
  convertToSharedIndex.__closure = { isAutoFillData: closure_3, SINGLE_ITEM, DOUBLE_ITEM };
  convertToSharedIndex.__workletHash = 6582547575185;
  convertToSharedIndex.__initData = closure_4;
  return convertToSharedIndex;
})();
export const computedOffsetXValueWithAutoFillData = (() => {
  function computedOffsetXValueWithAutoFillData(loop) {
    let rawDataLength;
    let size;
    let value;
    ({ rawDataLength, value, size } = loop);
    if (outer1_3(obj)) {
      if (outer1_0 === rawDataLength) {
        return value % size;
      } else if (outer1_1 === rawDataLength) {
        return value % (2 * size);
      }
    }
    return value;
  }
  computedOffsetXValueWithAutoFillData.__closure = { isAutoFillData: closure_3, SINGLE_ITEM, DOUBLE_ITEM };
  computedOffsetXValueWithAutoFillData.__workletHash = 4588043425301;
  computedOffsetXValueWithAutoFillData.__initData = closure_5;
  return computedOffsetXValueWithAutoFillData;
})();
export const computedRealIndexWithAutoFillData = function computedRealIndexWithAutoFillData(loop) {
  let dataLength;
  let index;
  ({ index, dataLength } = loop);
  if (callback(obj)) {
    if (SINGLE_ITEM === dataLength) {
      return index % 1;
    } else if (DOUBLE_ITEM === dataLength) {
      return index % 2;
    }
  }
  return index;
};
export const computedFillDataWithAutoFillData = function computedFillDataWithAutoFillData(loop) {
  let data;
  let dataLength;
  ({ data, dataLength } = loop);
  if (callback(obj)) {
    if (SINGLE_ITEM === dataLength) {
      const items = [data[0], data[0], data[0]];
      return items;
    } else if (DOUBLE_ITEM === dataLength) {
      const items1 = [data[0], data[1], , ];
      [arr[2], arr[3]] = data;
      return items1;
    }
  }
  return data;
};
