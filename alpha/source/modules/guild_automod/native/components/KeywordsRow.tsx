// Module ID: 17744
// Function ID: 17745
// Name: KeywordsRow
// Dependencies: [19, 21, 6000, 4892, 1126, 4860, 17745, 1987, 2]
// Exports: default

// Module 17744 (KeywordsRow)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
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
    onPress() {
      let obj3;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { title: label, description: importDefault, keywords, onSave };
      ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequire(17745, dependencyMap.paths);
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
  const TableRow = label(6000).TableRow;
  Text = label(4892).Text;
  if (keywords.length > 0) {
    const _String = String;
    StringResult = String(keywords.length);
  } else {
    const intl = tmp2(1126).intl;
    StringResult = intl.string(tmp2(1126).t.PoWNfe);
  }
  return tmp(TableRow, obj);
};
