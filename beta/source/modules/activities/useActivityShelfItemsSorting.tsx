// Module ID: 11523
// Function ID: 11524
// Name: useActivityShelfItemsSorting
// Dependencies: [19, 2026, 8713, 1364, 1979, 2]
// Exports: default

// Module 11523 (useActivityShelfItemsSorting)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemsSorting.tsx");

export default function useActivityShelfItemsSorting(arg0) {
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
    const item1 = items1.forEach((item) => {
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
    });
    const mapped = items.map((item, index) => {
      const items = [item, index];
      return items;
    });
    const found = mapped.filter((item) => {
      let tmp;
      [tmp] = item;
      const embeddedActivityConfig = tmp.application.embeddedActivityConfig;
      let label_type;
      if (embeddedActivityConfig != null) {
        const client_platform_config = embeddedActivityConfig.client_platform_config;
        const tmp5 = closure_1_1(closure_1_2[2]);
        const obj = closure_1_0(closure_1_2[3]);
        const tmp7 = client_platform_config[tmp5(undefined, obj.getOS(obj))];
        if (tmp7 != null) {
          label_type = tmp7.label_type;
        }
      }
      let tmp8 = null != label_type;
      if (tmp8) {
        tmp8 = label_type === closure_1_0(closure_1_2[4]).EmbeddedActivityLabelTypes.NEW || label_type === closure_1_0(closure_1_2[4]).EmbeddedActivityLabelTypes.UPDATED;
        label_type === closure_1_0(closure_1_2[4]).EmbeddedActivityLabelTypes.NEW || label_type === closure_1_0(closure_1_2[4]).EmbeddedActivityLabelTypes.UPDATED;
      }
      return tmp8;
    });
    const item2 = found.forEach((item) => {
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
    });
    return items;
  }, items);
};
