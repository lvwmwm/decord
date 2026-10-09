// Module ID: 17082
// Function ID: 17083
// Name: ConjurePlanTypeTags
// Dependencies: [19, 17, 21, 10375, 9184, 17083, 8217, 10585, 8182, 11388, 5091, 587, 558, 576, 5087, 1126, 17085, 2]

// Module 17082 (ConjurePlanTypeTags)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import ChatIcon from "ChatIcon" /* 8182 */;
import AppsIcon from "AppsIcon" /* 8217 */;
import GameControllerIcon from "GameControllerIcon" /* 9184 */;
import ShieldIcon from "ShieldIcon" /* 10375 */;
import SlashBoxIcon from "SlashBoxIcon" /* 10585 */;
import RobotIcon from "RobotIcon" /* 11388 */;
import WidgetsIcon from "WidgetsIcon" /* 17083 */;
import conjurePlanTags from "conjurePlanTags" /* 17085 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { automod: ShieldIcon.ShieldIcon, overlay: GameControllerIcon.GameControllerIcon, widget: WidgetsIcon.WidgetsIcon, activity: AppsIcon.AppsIcon, commands: SlashBoxIcon.SlashBoxIcon, chat_bot: ChatIcon.ChatIcon, bot: RobotIcon.RobotIcon };
let createStyles = createStyles_mod;
let obj2 = { tags: obj3, tag: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
obj3 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
let closure_7 = createStyles(obj2);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanTypeTags(tags) {
  let tag;
  let tmp5;
  obj = require("react");
  const cResult = obj.c(8);
  tags = tags.tags;
  const tmp2 = closure_7();
  _require = tmp2;
  if (cResult[0] === tmp2.tag) {
    let tmp4;
    if (cResult[1] === tags) {
      tmp4 = cResult[2];
    }
    if (cResult[5] === tmp2.tags) {
      let tmp7;
      if (cResult[6] === tmp4) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    let obj2 = { style: tmp3, children: tmp4 };
    const tmp10 = closure_4(View, obj2);
    cResult[5] = tmp2.tags;
    cResult[6] = tmp4;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  if (cResult[3] !== tmp2.tag) {
    const fn = function p(arg0) {
      let intl;
      let items;
      obj = { style: tag.tag, children: items };
      items = [, ];
      const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      items[0] = React3(obj[arg0], obj2);
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(conjurePlanTags.CONJURE_PLAN_TAG_LABELS[arg0]) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj, arg0);
    };
    cResult[3] = tmp2.tag;
    cResult[4] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = tags.map(tmp5);
  cResult[0] = tmp2.tag;
  cResult[1] = tags;
  cResult[2] = mapped;
  tmp4 = mapped;
}) : (function ConjurePlanTypeTags(tags) {
  tags = tags.tags;
  const tmp = closure_7();
  const tag = tmp;
  obj = {
    style: tmp.tags,
    children: tags.map((item) => {
      let intl;
      let items;
      obj = { style: tag.tag, children: items };
      items = [, ];
      const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      items[0] = React3(obj[item], obj2);
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(conjurePlanTags.CONJURE_PLAN_TAG_LABELS[item]) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj, item);
    })
  };
  return closure_4(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanTypeTags.tsx");

export default tmp5;
