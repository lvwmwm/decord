// Module ID: 17030
// Function ID: 17031
// Name: VibegrationsSelectedMention
// Dependencies: [19, 21, 4758, 580, 558, 568, 4754, 2]

// Module 17030 (VibegrationsSelectedMention)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Text_Text from "Text/Text" /* 4754 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
const obj2 = { chip: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSelectedMention.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ label, variant } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === label) {
    if (cResult[1] === tmp4.chip) {
      if (cResult[2] === variant) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmp6 = jsx(Text_Text.Text, { variant, style: tmp4.chip, children: label });
  cResult[0] = label;
  cResult[1] = tmp4.chip;
  cResult[2] = variant;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ label, variant } = arg0);
  const tmp = closure_3();
  return jsx(Text_Text.Text, { variant, style: closure_3().chip, children: label });
});
