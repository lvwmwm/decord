// Module ID: 5082
// Function ID: 43403
// Name: usePropsValidator
// Dependencies: []
// Exports: usePropsValidator

// Module 5082 (usePropsValidator)
const useMemo = require(dependencyMap[0]).useMemo;

export const usePropsValidator = function usePropsValidator(index) {
  index = index.index;
  const require = index;
  const snapPoints = index.snapPoints;
  const importDefault = snapPoints;
  const enableDynamicSizing = index.enableDynamicSizing;
  const dependencyMap = enableDynamicSizing;
  const topInset = index.topInset;
  const useMemo = topInset;
  const bottomInset = index.bottomInset;
  const items = [index, snapPoints, topInset, bottomInset, enableDynamicSizing];
  useMemo(() => {
    if (snapPoints) {
      if ("get" in snapPoints) {
        let value = obj.get();
      } else {
        value = obj;
      }
    } else {
      const items = [];
      let tmp7 = items;
      if (!items) {
        tmp7 = enableDynamicSizing;
      }
      snapPoints(enableDynamicSizing[1])(tmp7, "'snapPoints' was not provided! please provide at least one snap point.");
      const mapped = items.map((str) => {
        let parsed = str;
        if ("number" !== typeof str) {
          const _Number = Number;
          parsed = Number.parseInt(str.replace("%", ""), 10);
        }
        let tmp4 = parsed > 0;
        if (!tmp4) {
          tmp4 = parsed === callback(closure_2[2]).INITIAL_SNAP_POINT;
        }
        callback2(closure_2[1])(tmp4, "Snap point '" + str + "' is invalid. if you want to allow user to close the sheet, Please use 'enablePanDownToClose' prop.");
      });
      let tmp13 = "value" in items;
      const tmp6 = snapPoints(enableDynamicSizing[1]);
      if (!tmp13) {
        tmp13 = items.length > 0;
      }
      if (!tmp13) {
        tmp13 = enableDynamicSizing;
      }
      snapPoints(enableDynamicSizing[1])(tmp13, "'snapPoints' was provided with no points! please provide at least one snap point.");
      let tmp19 = "number" === typeof index;
      const tmp12 = snapPoints(enableDynamicSizing[1]);
      if (!tmp19) {
        tmp19 = undefined === index;
      }
      snapPoints(enableDynamicSizing[1])(tmp19, "'index' was provided but with wrong type ! expected type is a number.");
      let tmp25 = enableDynamicSizing;
      const tmp17 = snapPoints(enableDynamicSizing[1]);
      if (!enableDynamicSizing) {
        tmp25 = "number" !== typeof index;
      }
      if (!tmp25) {
        let tmp28 = index >= -1;
        if (tmp28) {
          tmp28 = index <= items.length - 1;
        }
        tmp25 = tmp28;
      }
      snapPoints(enableDynamicSizing[1])(tmp25, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
      let tmp35 = "number" === typeof topInset;
      const tmp24 = snapPoints(enableDynamicSizing[1]);
      if (!tmp35) {
        tmp35 = undefined === topInset;
      }
      snapPoints(enableDynamicSizing[1])(tmp35, "'topInset' was provided but with wrong type ! expected type is a number.");
      let tmp42 = "number" === typeof bottomInset;
      const tmp33 = snapPoints(enableDynamicSizing[1]);
      if (!tmp42) {
        tmp42 = undefined === bottomInset;
      }
      snapPoints(enableDynamicSizing[1])(tmp42, "'bottomInset' was provided but with wrong type ! expected type is a number.");
    }
  }, items);
};
