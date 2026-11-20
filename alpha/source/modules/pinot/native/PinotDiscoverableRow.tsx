// Module ID: 7645
// Function ID: 7646
// Name: PinotDiscoverableRow
// Dependencies: [19, 1071, 21, 7228, 6925, 7646, 1112, 3409, 7627, 2186, 5008, 7648, 2119, 7649, 7653, 7650, 2]
// Exports: PinotCreateChannelDiscoverableRow

// Module 7645 (PinotDiscoverableRow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2186 */;
import _modDef3409 from "module_3409" /* 3409 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import TableRow2 from "TableRow" /* 6925 */;
import TableRowGroup2 from "TableRowGroup" /* 7228 */;
import PinotDiscoverable from "PinotDiscoverable" /* 7627 */;
import PinotEligibility from "PinotEligibility" /* 7650 */;
import useIsPinotNewChannelPrivate from "useIsPinotNewChannelPrivate" /* 7653 */;
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
  ({ icon: null, label: intl.string(_modDef3409.uneDIi), trailing: null, arrow, disabled, accessible, accessibilityState, onPress });
  const TableRow = TableRow2.TableRow;
  intl = intl3.intl;
  ({ text: intl2.string(PinotDiscoverable.PINOT_DISCOVERABLE_OPTION_LABELS[value]) });
  const TrailingText = TableRow2.TableRow.TrailingText;
  intl2 = intl3.intl;
  return <TableRowGroup description={description} hasIcons>{null}</TableRowGroup>;
}
function PinotDiscoverableSelectRow(value) {
  let obj3;
  let onChange;
  let options;
  let readOnly;
  value = value.value;
  require = value;
  ({ options: importDefault, readOnly, onChange: dependencyMap } = value);
  const intl = intl3.intl;
  const format = intl.format;
  let obj2 = { learnMoreURL: obj3.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES_ADMIN) };
  const prop = _modDef3409["o3+MNm"];
  obj3 = HelpdeskUtilsDefault;
  return <PinotDiscoverableTableRow value={value} description={format(prop, obj2)} arrow={!readOnly} disabled={readOnly} onPress={function handlePress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { options: importDefault, value: require, onChange: dependencyMap };
    obj.openLazy(asyncRequire(7648, dependencyMap.paths), "PinotDiscoverableSheet", obj2);
  }} />;
}
function PinotDiscoverableRow(onChange) {
  let flags;
  let guildId;
  let isPrivate;
  onChange = onChange.onChange;
  ({ guildId, isPrivate, flags } = onChange);
  let obj = onChange(7649);
  const pinotDiscoverableRowState = obj.usePinotDiscoverableRowState(guildId, flags, isPrivate);
  const kind = pinotDiscoverableRowState.kind;
  if ("hidden" === kind) {
    return null;
  } else if ("private" === kind) {
    const intl = tmp(1112).intl;
    return <PinotDiscoverableTableRow value={onChange(7627).PinotDiscoverableOption.NONE} description={intl.string(pinotDiscoverableRowState(3409)["MrI+fw"])} accessible accessibilityState={{ disabled: true }} />;
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
