// Module ID: 19631
// Function ID: 19632
// Name: KeywordsRow
// Dependencies: [19, 21, 6969, 5619, 1114, 5253, 19632, 1995, 2]
// Exports: default

// Module 19631 (KeywordsRow)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsRow.tsx");

export default function KeywordsRow(label) {
  let StringResult;
  let Text;
  let closure_4;
  let closure_5;
  let description;
  let end;
  let keywords;
  let maxWordCount;
  let onSave;
  let start;
  label = label.label;
  ({ description: importDefault, type: dependencyMap, keywords } = label);
  ({ maxWordCount: closure_4, onChangeKeywords: closure_5 } = label);
  const tmp = keywords;
  let tmp2 = label;
  ({ start, end } = label);
  let obj = {
    start,
    end,
    label,
    trailing: tmp(Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: StringResult }),
    arrow: true,
    onPress: function handlePress() {
      let obj3;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { title: label, description: importDefault, keywords, onSave };
      ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequire(19632, dependencyMap.paths);
      if ("regex" === dependencyMap) {
        obj3 = { type: dependencyMap };
        const obj2 = { type: dependencyMap };
      } else {
        obj3 = { type: dependencyMap, maxWordCount };
      }
      const merged = Object.assign(obj3);
      openLazy(tmp2, "AutomodKeywords", obj);
    }
  };
  const TableRow = label(6969).TableRow;
  Text = label(5619).Text;
  if (keywords.length > 0) {
    const _String = String;
    StringResult = String(keywords.length);
  } else {
    const intl = tmp2(1114).intl;
    StringResult = intl.string(tmp2(1114).t.PoWNfe);
  }
  return tmp(TableRow, obj);
};
