// Module ID: 16017
// Function ID: 16018
// Name: YouSwitchClientsRadioGroup
// Dependencies: [32, 19, 21, 16018, 16019, 4800, 5997, 6000, 10278, 2]
// Exports: default

// Module 16017 (YouSwitchClientsRadioGroup)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import DiscordVariants from "DiscordVariants" /* 16018 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 16019 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx");

export default function YouSwitchClientsRadioGroup() {
  let arr;
  const memo = react.useMemo(() => {
    const obj = memo(dependencyMap[3]);
    return obj.getCurrentVariant();
  }, []);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [arr, importDefault] = tmp2;
  const items = [memo];
  const effect = react.useEffect(() => {
    let _true;
    if (null != c0) {
      c0 = false;
      let tmp = globalThis;
      let DISCORD_VARIANT_LIST = memo(dependencyMap[4]).DISCORD_VARIANT_LIST;
      const allResult = all(DISCORD_VARIANT_LIST.map((item) => {
        const obj = _true(closure_1_2[3]);
        return obj.isVariantInstalled(item);
      }));
      const nextPromise = allResult.then((result) => {
        let closure_0 = result;
        const tmp = c0;
        if (!tmp) {
          const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
          importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
        }
      });
      nextPromise.catch(() => {
        const tmp = c0;
        if (!tmp) {
          importDefault([]);
        }
      });
      return () => {
        let c0 = true;
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
        const TableRadioGroup = memo(5997).TableRadioGroup;
        tmp5 = <TableRadioGroup title="Switch Clients" value={memo} onChange={tmp4} hasIcons>{arr.map((value) => {
          const TableRadioRow = memo(dependencyMap[7]).TableRadioRow;
          ({ color: memo(dependencyMap[4]).DISCORD_VARIANTS[value].color });
          const ClydeIcon = memo(dependencyMap[8]).ClydeIcon;
          return <TableRadioRow key={arg0} value={arg0} label={memo(dependencyMap[4]).DISCORD_VARIANTS[arg0].label} icon={null} />;
        })}</TableRadioGroup>;
      }
    }
  }
  return tmp5;
};
