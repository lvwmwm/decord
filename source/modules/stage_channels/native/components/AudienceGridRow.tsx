// Module ID: 10794
// Function ID: 83811
// Name: BlankAudience
// Dependencies: [31, 27, 4947, 33, 4130, 10795, 10796, 2]

// Module 10794 (BlankAudience)
import { View } from "get ActivityIndicator";
import { MAX_AUDIENCE_ROW_LIMIT } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
class BlankAudience {
  constructor(arg0) {
    count = global.count;
    items = [];
    for (let num = 0; num < count; num = num + 1) {
      tmp = jsx;
      tmp2 = closure_0;
      tmp3 = closure_1;
      arr = items.push(jsx(require("module_10795"), {}, num));
    }
    return items;
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ rowContainer: { flex: 1, flexDirection: "row", marginVertical: 16, paddingHorizontal: 4, justifyContent: "space-between" } });
const memoResult = require("result").memo((theme) => {
  let importDefault;
  let participants;
  let renderBlankAudience;
  ({ channel: importDefault, participants, renderBlankAudience } = theme);
  if (renderBlankAudience === undefined) {
    renderBlankAudience = true;
  }
  theme = theme.theme;
  let num = 0;
  if (renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  let obj = {};
  const items = [callback2().rowContainer, ];
  obj = {};
  let str = "center";
  if (renderBlankAudience) {
    str = "space-between";
  }
  obj.justifyContent = str;
  items[1] = obj;
  obj.style = items;
  const items1 = [participants.map((id) => outer1_4(outer1_0(theme[6]), { theme, channel: closure_0, participant: id }, id.id)), ];
  let tmp5 = null;
  if (num > 0) {
    obj = { count: num };
    tmp5 = callback(BlankAudience, obj);
  }
  items1[1] = tmp5;
  obj.children = items1;
  return closure_5(View, obj);
});
const result = require("MAX_STAGE_TOPIC_LENGTH").fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default memoResult;
export { BlankAudience };
