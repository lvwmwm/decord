// Module ID: 8162
// Function ID: 8163
// Name: PinotDiscoverableRow
// Dependencies: [19, 1072, 21, 7746, 7443, 8163, 1113, 3385, 8144, 2188, 5552, 8165, 2121, 8166, 8170, 8167, 2]
// Exports: PinotCreateChannelDiscoverableRow

// Module 8162 (PinotDiscoverableRow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import _modDef3385 from "module_3385" /* 3385 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import TableRow2 from "TableRow" /* 7443 */;
import TableRowGroup2 from "TableRowGroup" /* 7746 */;
import PinotDiscoverable from "PinotDiscoverable" /* 8144 */;
import PinotEligibility from "PinotEligibility" /* 8167 */;
import useIsPinotNewChannelPrivate from "useIsPinotNewChannelPrivate" /* 8170 */;
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
  ({ icon: null, label: intl.string(_modDef3385.uneDIi), trailing: null, arrow, disabled, accessible, accessibilityState, onPress });
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
  const prop = _modDef3385["o3+MNm"];
  obj3 = HelpdeskUtilsDefault;
  return <PinotDiscoverableTableRow value={value} description={format(prop, obj2)} arrow={!readOnly} disabled={readOnly} onPress={function handlePress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { options: importDefault, value: require, onChange: dependencyMap };
    obj.openLazy(asyncRequire(8165, dependencyMap.paths), "PinotDiscoverableSheet", obj2);
  }} />;
}
function PinotDiscoverableRow(onChange) {
  let flags;
  let guildId;
  let isPrivate;
  onChange = onChange.onChange;
  ({ guildId, isPrivate, flags } = onChange);
  let obj = onChange(8166);
  const pinotDiscoverableRowState = obj.usePinotDiscoverableRowState(guildId, flags, isPrivate);
  const kind = pinotDiscoverableRowState.kind;
  if ("hidden" === kind) {
    return null;
  } else if ("private" === kind) {
    const intl = tmp(1113).intl;
    return <PinotDiscoverableTableRow value={onChange(8144).PinotDiscoverableOption.NONE} description={intl.string(pinotDiscoverableRowState(3385)["MrI+fw"])} accessible accessibilityState={{ disabled: true }} />;
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
