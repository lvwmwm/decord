// Module ID: 12572
// Function ID: 12573
// Name: ConjureTipsHost
// Dependencies: [19, 17, 21, 5009, 575, 12573, 12583, 12594, 2]
// Exports: default

// Module 12572 (ConjureTipsHost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { tips: { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_4 } };
({ gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_4 });
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipsHost.tsx");

export default function ConjureTipsHost(onShow) {
  let draftHasText;
  let messages;
  let onAskForIdeas;
  let projectId;
  onShow = onShow.onShow;
  let joined;
  ({ projectId, messages, draftHasText, onAskForIdeas } = onShow);
  const tmp = closure_6();
  const tmp2 = joined(12573);
  const tmp2Result = tmp2(onShow(12583).CONJURE_TIPS, projectId, messages, draftHasText, onAskForIdeas);
  const mapped = tmp2Result.map((tip) => "" + tip.tip.id + ":" + tip.presentation);
  joined = mapped.join(",");
  const items = [joined, onShow];
  const layoutEffect = react.useLayoutEffect(() => {
    if ("" !== joined) {
      if (onShow != null) {
        tmp();
      }
    }
  }, items);
  let tmp5 = null;
  if (0 !== tmp2Result.length) {
    tmp5 = <View style={tmp.tips} accessibilityLiveRegion="polite">{tmp2Result.map((presentation) => {
      const tip = presentation.tip;
      const options = presentation.options;
      return jsx(joined(dependencyMap[7]), {
        presentation: presentation.presentation,
        render(arg0) {
          return tip.render(arg0, options);
        }
      }, tip.id);
    })}</View>;
  }
  return tmp5;
};
