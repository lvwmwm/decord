// Module ID: 11671
// Function ID: 11672
// Name: useActivityShelfItemsSorting
// Dependencies: [19, 558, 576, 2046, 11670, 1382, 1998, 2]

// Module 11671 (useActivityShelfItemsSorting)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f109007 = (item) => {
  closure_0 = item;
  const findIndexResult = items.findIndex((application) => application.application.id === closure_0);
  if (-1 !== findIndexResult) {
    const tmp4 = items[findIndexResult];
    items.splice(findIndexResult, 1);
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, items.slice(0, closure_1), 0);
    items[arraySpreadResult] = tmp4;
    HermesBuiltin.arraySpread(items, items.slice(closure_1), arraySpreadResult + 1);
    closure_1 = closure_1 + 1;
  }
};
const f109008 = (item, index) => {
  const items = [item, index];
  return items;
};
const f109009 = (item) => {
  let tmp;
  [tmp] = item;
  const embeddedActivityConfig = tmp.application.embeddedActivityConfig;
  let label_type;
  if (embeddedActivityConfig != null) {
    const client_platform_config = embeddedActivityConfig.client_platform_config;
    const tmp5 = closure_1_1(closure_1_2[4]);
    const obj = closure_1_0(closure_1_2[5]);
    const tmp7 = client_platform_config[tmp5(undefined, obj.getOS(obj))];
    if (tmp7 != null) {
      label_type = tmp7.label_type;
    }
  }
  let tmp8 = null != label_type;
  if (tmp8) {
    tmp8 = label_type === closure_1_0(closure_1_2[6]).EmbeddedActivityLabelTypes.NEW || label_type === closure_1_0(closure_1_2[6]).EmbeddedActivityLabelTypes.UPDATED;
    label_type === closure_1_0(closure_1_2[6]).EmbeddedActivityLabelTypes.NEW || label_type === closure_1_0(closure_1_2[6]).EmbeddedActivityLabelTypes.UPDATED;
  }
  return tmp8;
};
const f109010 = (item) => {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = item;
  let diff = tmp3;
  if (null != tmp2.application.embeddedActivityConfig) {
    diff = tmp3;
    if (null != tmp2.application.embeddedActivityConfig.shelf_rank) {
      diff = tmp2.application.embeddedActivityConfig.shelf_rank - 1;
    }
  }
  if (diff < tmp3) {
    const tmp6 = items[tmp3];
    items.splice(tmp3, 1);
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, items.slice(0, diff), 0);
    items[arraySpreadResult] = tmp6;
    HermesBuiltin.arraySpread(items, items.slice(diff), arraySpreadResult + 1);
  }
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityShelfItemsSorting(arr) {
  let items2;
  let tmp4;
  const obj = items2(576);
  const cResult = obj.c(2);
  const FrecencyUserSettingsActionCreators = items2(2046).FrecencyUserSettingsActionCreators;
  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  if (cResult[0] !== arr) {
    const items = [];
    const item = arr.forEach((application) => items.push(application.application.id));
    const items1 = [];
    let num = 0;
    HermesBuiltin.arraySpread(items1, items, 0);
    const sorted = items1.sort((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let num = 1;
      const findIndexResult = items.findIndex((item) => item === closure_0);
      if (findIndexResult < items.findIndex((item) => item === closure_1)) {
        num = -1;
      }
      return num;
    });
    items2 = [];
    HermesBuiltin.arraySpread(items2, arr, 0);
    let c1 = 0;
    const item1 = items1.forEach(f109007);
    const mapped = items2.map(f109008);
    const found = mapped.filter(f109009);
    const item2 = found.forEach(f109010);
    cResult[0] = arr;
    cResult[1] = items2;
    tmp4 = items2;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useActivityShelfItemsSorting(arg0) {
  _require = arg0;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  let items = [arg0];
  return react.useMemo(() => {
    let items = [];
    const item = closure_0.forEach((application) => items.push(application.application.id));
    const items1 = [...items];
    const sorted = items1.sort((arg0, arg1) => {
      closure_0 = arg0;
      let closure_1 = arg1;
      let num = 1;
      const findIndexResult = items.findIndex((item) => item === closure_0);
      if (findIndexResult < items.findIndex((item) => item === closure_1)) {
        num = -1;
      }
      return num;
    });
    const items2 = [...closure_0];
    items = items2;
    let closure_1 = 0;
    const item1 = items1.forEach(f109007);
    const mapped = items.map(f109008);
    const found = mapped.filter(f109009);
    const item2 = found.forEach(f109010);
    return items;
  }, items);
});
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemsSorting.tsx");

export default tmp2;
