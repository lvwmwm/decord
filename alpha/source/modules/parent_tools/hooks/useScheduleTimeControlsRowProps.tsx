// Module ID: 17132
// Function ID: 17133
// Name: useScheduleTimeControlsRowProps
// Dependencies: [21, 5751, 1113, 2664, 2]
// Exports: default

// Module 17132 (useScheduleTimeControlsRowProps)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Text_Text from "Text/Text" /* 5751 */;
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
    const obj2 = { subLabel: null, trailing: "r" };
    ({ variant: "body-xs/medium", color: "text-muted", children: intl.string(_modDef2664.fOBIZH) });
    const Text = Text_Text.Text;
    intl = intl4.intl;
    return obj2;
  } else {
    const obj4 = { subLabel: intl2.formatToPlainString(_modDef2664.XfwcpX, obj5), trailing: tmp10(Text2, obj) };
    const someResult = arr.some((enabled) => enabled.enabled);
    intl2 = intl4.intl;
    obj5 = { count: arr.length };
    Text2 = Text_Text.Text;
    const intl3 = intl4.intl;
    const string = intl3.string;
    const tmp11 = _modDef2664;
    tmp10 = jsx;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    return obj4;
  }
};
