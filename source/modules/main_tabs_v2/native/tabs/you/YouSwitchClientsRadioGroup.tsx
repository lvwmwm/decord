// Module ID: 16304
// Function ID: 16305
// Name: YouSwitchClientsRadioGroup
// Dependencies: [32, 19, 21, 16305, 16306, 4448, 5640, 5643, 10749, 2]
// Exports: default

// Module 16304 (YouSwitchClientsRadioGroup)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx");

export default function YouSwitchClientsRadioGroup() {
  const memo = React.useMemo(() => memo(16305).getCurrentVariant(), []);
  [arr, importDefault] = callback(React.useState(null), 2);
  const items = [memo];
  const effect = React.useEffect(() => {
    if (null != c0) {
      c0 = false;
      let DISCORD_VARIANT_LIST = memo(closure_1_2[4]).DISCORD_VARIANT_LIST;
      const allPromises = Promise.all(DISCORD_VARIANT_LIST.map((arg0) => callback(table[3]).isVariantInstalled(arg0)));
      Promise.all(DISCORD_VARIANT_LIST.map((arg0) => callback(table[3]).isVariantInstalled(arg0))).then((arg0) => {
        closure_0 = arg0;
        if (!closure_0) {
          const DISCORD_VARIANT_LIST = memo(closure_2_2[4]).DISCORD_VARIANT_LIST;
          closure_1_1(DISCORD_VARIANT_LIST.filter((arg0, arg1) => table[arg1]));
        }
      }).catch(() => {
        if (!c0) {
          closure_1_1([]);
        }
      });
      return () => {
        c0 = true;
      };
    }
  }, items);
  [][0] = memo;
  let tmp5 = null;
  if (null != memo) {
    tmp5 = null;
    if (null != arr) {
      tmp5 = null;
      if (arr.length >= 2) {
        let obj = { title: "Switch Clients", value: null, onChange: null, hasIcons: true, children: null };
        obj[1] = memo;
        obj[2] = tmp4;
        obj[4] = arr.map((value) => {
          let obj = { value, label: memo(16306).DISCORD_VARIANTS[value].label, icon: null };
          obj = { color: memo(16306).DISCORD_VARIANTS[value].color };
          obj[2] = callback(memo(10749).ClydeIcon, obj);
          return callback(memo(5643).TableRadioRow, obj, value);
        });
        tmp5 = jsx(memo(5640).TableRadioGroup, { title: "Switch Clients", value: null, onChange: null, hasIcons: true, children: null });
      }
    }
  }
  return tmp5;
};
