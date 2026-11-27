// Module ID: 16425
// Function ID: 16426
// Name: useScheduleTimeControlsRowProps
// Dependencies: [21, 5634, 1112, 2847, 2]
// Exports: default

// Module 16425 (useScheduleTimeControlsRowProps)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import _modDef2847 from "module_2847" /* 2847 */;
import Text_Text from "Text/Text" /* 5634 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  let Text2;
  let intl;
  let intl2;
  let obj5;
  let tmp10;
  if (0 === arr.length) {
    const obj2 = { subLabel: null, trailing: "Array" };
    ({ variant: "body-xs/medium", color: "text-muted", children: intl.string(_modDef2847.fOBIZH) });
    const Text = Text_Text.Text;
    intl = intl4.intl;
    return obj2;
  } else {
    const obj4 = { subLabel: intl2.formatToPlainString(_modDef2847.XfwcpX, obj5), trailing: tmp10(Text2, obj) };
    const someResult = arr.some((enabled) => enabled.enabled);
    intl2 = intl4.intl;
    obj5 = { count: arr.length };
    Text2 = Text_Text.Text;
    const intl3 = intl4.intl;
    const string = intl3.string;
    const tmp11 = _modDef2847;
    tmp10 = jsx;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    return obj4;
  }
};
