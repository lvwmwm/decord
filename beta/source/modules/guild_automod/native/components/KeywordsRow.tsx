// Module ID: 17964
// Function ID: 17965
// Name: KeywordsRow
// Dependencies: [19, 21, 5822, 4754, 1119, 4725, 17965, 1984, 2]
// Exports: default

// Module 17964 (KeywordsRow)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsRow.tsx");

export default function KeywordsRow(label) {
  label = label.label;
  ({ description: importDefault, type: dependencyMap, keywords } = label);
  ({ maxWordCount: closure_4, onChangeKeywords: closure_5 } = label);
  ({ start, end } = label);
  let obj = { start, end, label, trailing: null, arrow: true, onPress: null };
  if (keywords.length > 0) {
    const _String = String;
    let StringResult = String(keywords.length);
  } else {
    const intl = tmp2(1119).intl;
    StringResult = intl.string(tmp2(1119).t.PoWNfe);
  }
  obj.trailing = keywords(label(4754).Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: StringResult });
  obj.onPress = function onPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { title: label, description, keywords, onSave };
    if ("regex" === closure_1_2) {
      const obj3 = { type: tmp2 };
      let obj4 = obj3;
    } else {
      obj4 = { type: tmp2, maxWordCount };
    }
    const merged = Object.assign(obj4);
    obj.openLazy(asyncRequireImpl(17965, dependencyMap.paths), "AutomodKeywords", obj2);
  };
  return keywords(label(5822).TableRow, obj);
};
