// Module ID: 9696
// Function ID: 75427
// Name: useInitProps
// Dependencies: [31, 9697]
// Exports: useInitProps

// Module 9696 (useInitProps)
import result from "result";

const require = arg1;

export const useInitProps = function useInitProps(defaultIndex) {
  let height;
  let width;
  defaultIndex = defaultIndex.defaultIndex;
  let num = 0;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  let data = defaultIndex.data;
  if (undefined === data) {
    data = [];
  }
  const loop = defaultIndex.loop;
  const dependencyMap = tmp;
  const autoPlayInterval = defaultIndex.autoPlayInterval;
  let num2 = 1000;
  if (undefined !== autoPlayInterval) {
    num2 = autoPlayInterval;
  }
  const scrollAnimationDuration = defaultIndex.scrollAnimationDuration;
  let num3 = 500;
  if (undefined !== scrollAnimationDuration) {
    num3 = scrollAnimationDuration;
  }
  let style = defaultIndex.style;
  if (undefined === style) {
    style = {};
  }
  const autoFillData = defaultIndex.autoFillData;
  const React = tmp2;
  const enabled = defaultIndex.enabled;
  const pagingEnabled = defaultIndex.pagingEnabled;
  const overscrollEnabled = defaultIndex.overscrollEnabled;
  let snapEnabled = defaultIndex.snapEnabled;
  if (undefined === snapEnabled) {
    const enableSnap = defaultIndex.enableSnap;
    snapEnabled = null == enableSnap || enableSnap;
    const tmp7 = null == enableSnap || enableSnap;
  }
  ({ width, height } = defaultIndex);
  if (!width) {
    width = 0;
  }
  const rounded = Math.round(width);
  if (!height) {
    height = 0;
  }
  const rounded1 = Math.round(height);
  const items = [data, undefined === loop || loop, undefined === autoFillData || autoFillData];
  const bound = Math.max(num2, 0);
  const memo = React.useMemo(() => {
    let obj = data(tmp[1]);
    obj = { loop: tmp, autoFillData: result, data, dataLength: data.length };
    return obj.computedFillDataWithAutoFillData(obj);
  }, items);
  let tmp11 = "vertical-stack" !== defaultIndex.mode;
  if (tmp11) {
    tmp11 = "horizontal-stack" !== defaultIndex.mode;
  }
  if (!tmp11) {
    if (!defaultIndex.modeConfig) {
      defaultIndex.modeConfig = {};
    }
    const modeConfig = defaultIndex.modeConfig;
    let showLength;
    if (null != modeConfig) {
      showLength = modeConfig.showLength;
    }
    if (null == showLength) {
      showLength = length - 1;
    }
    defaultIndex.modeConfig.showLength = showLength;
  }
  let obj = { defaultIndex: num, autoFillData: undefined === autoFillData || autoFillData, data: memo, dataLength: memo.length, rawData: data, rawDataLength: data.length, loop: undefined === loop || loop, enabled: undefined === enabled || enabled, autoPlayInterval: bound, scrollAnimationDuration: num3, style, pagingEnabled: undefined === pagingEnabled || pagingEnabled, snapEnabled, overscrollEnabled: undefined === overscrollEnabled || overscrollEnabled, width: rounded, height: rounded1 };
  return Object.assign({}, defaultIndex, obj);
};
