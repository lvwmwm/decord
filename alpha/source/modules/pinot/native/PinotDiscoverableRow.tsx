// Module ID: 9049
// Function ID: 9050
// Name: PinotDiscoverableRow
// Dependencies: [19, 1072, 21, 7060, 6975, 9050, 1113, 3160, 9035, 2061, 5258, 9002, 1994, 9052, 9056, 9053, 2]
// Exports: PinotCreateChannelDiscoverableRow

// Module 9049 (PinotDiscoverableRow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef3160 from "module_3160" /* 3160 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRow2 from "TableRow" /* 6975 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import PinotDiscoverable from "PinotDiscoverable" /* 9035 */;
import PinotEligibility from "PinotEligibility" /* 9053 */;
import useIsPinotNewChannelPrivate from "useIsPinotNewChannelPrivate" /* 9056 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function PinotDiscoverableTableRow(arg0) {
  let accessibilityState;
  let accessible;
  let arrow;
  let description;
  let disabled;
  let intl;
  let intl2;
  let onPress;
  let value;
  ({ value, description, arrow, disabled, accessible, accessibilityState, onPress } = arg0);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  ({ icon: null, label: intl.string(_modDef3160.uneDIi), trailing: null, arrow, disabled, accessible, accessibilityState, onPress });
  const TableRow = TableRow2.TableRow;
  intl = intl3.intl;
  ({ text: intl2.string(PinotDiscoverable.PINOT_DISCOVERABLE_OPTION_LABELS[value]) });
  const TrailingText = TableRow2.TableRow.TrailingText;
  intl2 = intl3.intl;
  return <TableRowGroup description={description} hasIcons>{null}</TableRowGroup>;
}
function PinotDiscoverableSelectRow(value) {
  let obj3;
  let readOnly;
  value = value.value;
  require = value;
  ({ options: importDefault, readOnly, onChange: dependencyMap } = value);
  let intl = intl3.intl;
  const format = intl.format;
  const obj2 = { learnMoreURL: obj3.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES_ADMIN) };
  const prop = _modDef3160["o3+MNm"];
  obj3 = HelpdeskUtilsDefault;
  return <PinotDiscoverableTableRow value={value} description={format(prop, obj2)} arrow={!readOnly} disabled={readOnly} onPress={function handlePress() {
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(_modDef3160["r/o6RM"]),
      items: importDefault.map((value) => {
        let intl;
        const obj = { value, label: intl.string(closure_1_0(closure_1_2[8]).PINOT_DISCOVERABLE_OPTION_LABELS[value]) };
        intl = closure_1_0(closure_1_2[6]).intl;
        return obj;
      }),
      selectedItem: require,
      onItemSelect(arg0) {
        closure_1_2(arg0);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      },
      hasIcons: false
    };
    const tmp2 = asyncRequire(9002, dependencyMap.paths);
    intl = intl3.intl;
    openLazy(tmp2, "PinotDiscoverableSheet", obj);
  }} />;
}
function PinotDiscoverableRow(onChange) {
  let flags;
  let guildId;
  let isPrivate;
  onChange = onChange.onChange;
  ({ guildId, isPrivate, flags } = onChange);
  let obj = onChange(9052);
  const pinotDiscoverableRowState = obj.usePinotDiscoverableRowState(guildId, flags, isPrivate);
  const kind = pinotDiscoverableRowState.kind;
  if ("hidden" === kind) {
    return null;
  } else if ("private" === kind) {
    const intl = tmp(1113).intl;
    return <PinotDiscoverableTableRow value={onChange(9035).PinotDiscoverableOption.NONE} description={intl.string(pinotDiscoverableRowState(3160)["MrI+fw"])} accessible accessibilityState={{ disabled: true }} />;
  } else if ("select" === kind) {
    ({ value: obj2.value, options: obj2.options, readOnly: obj2.readOnly } = pinotDiscoverableRowState);
    return <PinotDiscoverableSelectRow value={null} options={null} readOnly={null} onChange={function onChange(arg0) {
      const obj = PinotDiscoverable;
      return onChange(obj.getPinotDiscoverableFlags(arg0, pinotDiscoverableRowState.serverFlags));
    }} />;
  }
}
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/pinot/native/PinotDiscoverableRow.tsx");

export function PinotCreateChannelDiscoverableRow(isPrivate) {
  let categoryId;
  let channelType;
  isPrivate = isPrivate.isPrivate;
  let tmp = null;
  ({ categoryId, channelType } = isPrivate);
  const merged = Object.assign(isPrivate, Object.assign({ categoryId: 0, channelType: 0, isPrivate: 0 }));
  const obj = useIsPinotNewChannelPrivate;
  const isPinotNewChannelPrivate = obj.useIsPinotNewChannelPrivate(merged.guildId, categoryId);
  const PINOT_CHANNEL_TYPES = PinotEligibility.PINOT_CHANNEL_TYPES;
  if (PINOT_CHANNEL_TYPES.has(channelType)) {
    const obj2 = { isPrivate };
    const merged1 = Object.assign(merged);
    const tmp4 = jsx;
    const tmp5 = PinotDiscoverableRow;
    if (!isPrivate) {
      isPrivate = isPinotNewChannelPrivate;
    }
    tmp = tmp4(tmp5, obj2);
  }
  return tmp;
}
