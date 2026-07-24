// Module ID: 11191
// Function ID: 87040
// Name: useActivityShelfItemsSorting
// Dependencies: [31, 1331, 8227, 477, 1881, 2]
// Exports: default

// Module 11191 (useActivityShelfItemsSorting)
import result from "result";

const require = arg1;
const result = require("getPlatform").fileFinishedImporting("modules/activities/useActivityShelfItemsSorting.tsx");

export default function useActivityShelfItemsSorting(arg0) {
  const _require = arg0;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  let items = [arg0];
  return React.useMemo(() => {
    let items = [];
    let item = items.forEach((application) => items.push(application.application.id));
    const items1 = [...items];
    const sorted = items1.sort((arg0, arg1) => {
      const items = arg0;
      let closure_1 = arg1;
      let num = 1;
      if (findIndexResult < items.findIndex((arg0) => arg0 === closure_1)) {
        num = -1;
      }
      return num;
    });
    return (function applySorting(items, items1) {
      items = [...items];
      let c1 = 0;
      const item = items1.forEach((arg0) => {
        let items = arg0;
        const findIndexResult = items.findIndex((application) => application.application.id === items);
        if (-1 !== findIndexResult) {
          items.splice(findIndexResult, 1);
          items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, closure_1), 0);
          items[arraySpreadResult] = items[findIndexResult];
          const sum = arraySpreadResult + 1;
          arraySpreadResult = HermesBuiltin.arraySpread(items.slice(closure_1), sum);
          closure_1 = closure_1 + 1;
        }
      });
      const mapped = items.map((arg0, arg1) => {
        const items = [arg0, arg1];
        return items;
      });
      const found = mapped.filter((arg0) => {
        let tmp;
        [tmp] = arg0;
        const embeddedActivityConfig = tmp.application.embeddedActivityConfig;
        let label_type;
        if (null != embeddedActivityConfig) {
          const obj = items(outer3_2[3]);
          const tmp7 = embeddedActivityConfig.client_platform_config[outer3_1(outer3_2[2])(undefined, obj.getOS(obj))];
          if (null != tmp7) {
            label_type = tmp7.label_type;
          }
          const tmp5 = outer3_1(outer3_2[2]);
        }
        let tmp8 = null != label_type;
        if (tmp8) {
          let tmp11 = label_type === items(outer3_2[4]).EmbeddedActivityLabelTypes.NEW;
          if (!tmp11) {
            tmp11 = label_type === items(outer3_2[4]).EmbeddedActivityLabelTypes.UPDATED;
          }
          tmp8 = tmp11;
        }
        return tmp8;
      });
      const item1 = found.forEach((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        let diff = tmp2;
        if (null != tmp.application.embeddedActivityConfig) {
          diff = tmp2;
          if (null != tmp.application.embeddedActivityConfig.shelf_rank) {
            diff = tmp.application.embeddedActivityConfig.shelf_rank - 1;
          }
        }
        if (diff < tmp2) {
          items.splice(tmp2, 1);
          items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, diff), 0);
          items[arraySpreadResult] = items[tmp2];
          const sum = arraySpreadResult + 1;
          arraySpreadResult = HermesBuiltin.arraySpread(items.slice(diff), sum);
        }
      });
      return items;
    })(items, items1);
  }, items);
};
