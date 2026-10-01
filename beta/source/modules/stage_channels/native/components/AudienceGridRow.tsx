// Module ID: 9527
// Function ID: 9528
// Name: AudienceGridRow
// Dependencies: [19, 17, 5726, 21, 4836, 9528, 9529, 2]

// Module 9527 (AudienceGridRow)
import react_native from "react-native" /* 17 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import BlankAudienceTileDefault from "BlankAudienceTile" /* 9528 */;
import AudienceTileDefault from "AudienceTile" /* 9529 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let theme;

let closure_4;
let hasOwnProperty;
class BlankAudience {
  constructor(count) {
    let num;
    count = count.count;
    const items = [];
    for (let num = 0; num < count; num = num + 1) {
      let arr = items.push(React3(BlankAudienceTileDefault, {}, num));
    }
    return items;
  }
}
const View = react_native.View;
const MAX_AUDIENCE_ROW_LIMIT = StageChannelsConstants.MAX_AUDIENCE_ROW_LIMIT;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ rowContainer: { flex: 1, flexDirection: "row", marginVertical: 16, paddingHorizontal: 4, justifyContent: "space-between" } });
const memoResult = react.memo((theme) => {
  let channel;
  let items1;
  let participants;
  let renderBlankAudience;
  ({ channel: importDefault, participants, renderBlankAudience } = theme);
  if (renderBlankAudience === undefined) {
    renderBlankAudience = true;
  }
  theme = theme.theme;
  let num = 0;
  const tmp = closure_6();
  if (renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  const items = [tmp.rowContainer, ];
  let str = "center";
  const tmp3 = closure_5;
  const tmp4 = View;
  if (renderBlankAudience) {
    str = "space-between";
  }
  let obj = { style: items, children: items1 };
  items[1] = { justifyContent: str };
  items1 = [
    participants.map((participant) => {
      const obj = { theme, channel: importDefault, participant };
      return React3(AudienceTileDefault, obj, participant.id);
    }),

  ];
  let tmp5 = null;
  if (num > 0) {
    const obj2 = { count: num };
    tmp5 = closure_4(BlankAudience, obj2);
  }
  items1[1] = tmp5;
  return tmp3(tmp4, obj);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default memoResult;
export { BlankAudience };
