// Module ID: 13509
// Function ID: 13510
// Name: GuildAntiRaidReportModal
// Dependencies: [5, 32, 19, 17, 13510, 21, 4836, 576, 1613, 4832, 4525, 1115, 5999, 5916, 5281, 5936, 10388, 6383, 11309, 6421, 2]
// Exports: default

// Module 13509 (GuildAntiRaidReportModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildReportRaidModalConstants from "GuildReportRaidModalConstants" /* 13510 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let unpackModuleId;
function ReportModal(onSubmit) {
  let Button;
  let TableRowGroup;
  let formRow;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj4;
  let obj7;
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const tmp = closure_13();
  dependencyMap = tmp;
  const items = [tmp];
  const bottom = useSafeAreaInsetsDefault().bottom;
  let closure_3 = react.useCallback((arg0) => {
    const obj = { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: metroImportAll(arg0) };
    const Text = Text_Text.Text;
    return authStore(Text, obj);
  }, items);
  let obj = { style: tmp.container, children: items1 };
  const callback = react.useCallback(() => {
    const obj = require("Linking");
    obj.openURL(closure_1_7());
  }, []);
  const obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: intl.format(intl3.t.Hg8Ee7, { onClick: callback }) };
  let Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [closure_10(Text, obj2), , ];
  const obj3 = { style: tmp.formBody, children: closure_10(TableRowGroup, obj4) };
  obj4 = {
    hasIcons: false,
    children: length.map((item, index) => {
      require = item;
      const obj = {
        start: 0 === index,
        end: index === length.length - 1,
        label: closure_3(item),
        checked: require.includes(item),
        onPress() {
          return importDefault(item);
        }
      };
      const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
      return closure_1_10(TableCheckboxRow, obj, item);
    })
  };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  items1[1] = closure_10(View, obj3);
  const obj5 = { style: items2, children: closure_10(Button, obj7) };
  items2 = [tmp.submitButtonContainer, ];
  const obj6 = { paddingBottom: bottom + 16 };
  items2[1] = obj6;
  obj7 = { size: "md", text: intl2.string(intl3.t.geKm7t), onPress: onSubmit };
  Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items1[2] = closure_10(View, obj5);
  return closure_11(View, obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ getReportRaidHelpArticleURL: metroImportDefault, getReportRaidTypeLabel: metroImportAll, REPORT_RAID_OPTIONS: c9 } = GuildReportRaidModalConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const REPORT_RAID = "REPORT_RAID";
let createStyles = createStyles_mod;
let obj = { container: obj2, headerSubtitle: { textAlign: "center", marginTop: 8 }, formBody: { marginTop: 24 }, formRow: { paddingVertical: 2 }, submitButtonContainer: rect };
obj2 = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  let closure_3;
  let closure_4;
  let closure_5;
  let first;
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  first = undefined;
  _asyncToGenerator = undefined;
  react = undefined;
  const top = guildId(first[8])().top;
  [first, _asyncToGenerator] = react.useState([]);
  _slicedToArray = guildId(first[16])();
  react = react.useRef(false);
  const tmp3 = guildId(first[17]);
  const tmp3Result = tmp3(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    if (first === 2) {
      first = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        first = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            first = 3;
            throw value;
          } else if (arg0 === 2) {
            first = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (!ref.current) {
            tmp19.current = true;
            const obj2 = tmp(first[18]);
            const result = obj2.trackReportRaidViewed(guildId, first);
            const obj3 = tmp(first[18]);
            obj3.handleReportRaid(guildId);
            const intl = tmp(first[11]).intl;
            c1 = 1;
            first = 1;
            const obj6 = { value: closure_4(intl.string(tmp(first[11]).t["54qByS"])), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          first = 3;
          throw value;
        } else if (arg0 === 2) {
          first = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0();
        }
        first = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp15) {
        first = 3;
        throw tmp15;
      }
    }
  }));
  let closure_6 = tmp3Result;
  const items = [tmp3Result, onCloseModal, first];
  const memo = react.useMemo(() => {
    let intl;
    let obj3;
    let closure_0 = first;
    function onChange(arg0) {
      let closure_0 = arg0;
      closure_1_3((arr) => {
        let found;
        const tmp2 = closure_0;
        if (arr.includes(closure_0)) {
          found = arr.filter((item) => item !== closure_1_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(found, arr, 0)] = tmp2;
        }
        return found;
      });
    }
    let closure_2 = closure_6;
    let obj = {};
    const obj2 = {
      ignoreKeyboard: true,
      title: intl.string(intl3.t.uYPGsS),
      headerLeft: obj3.getHeaderCloseButton(onCloseModal),
      render() {
        const obj = { raidTypes, onChange, onSubmit };
        return closure_2_10(closure_2_14, obj);
      }
    };
    intl = intl3.intl;
    obj[REPORT_RAID] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: top };
  return closure_10(onCloseModal(first[19]).Navigator, obj);
};
