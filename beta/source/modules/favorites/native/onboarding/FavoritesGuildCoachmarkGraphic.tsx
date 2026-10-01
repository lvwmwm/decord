// Module ID: 15951
// Function ID: 15952
// Name: FavoritesGuildCoachmarkGraphic
// Dependencies: [17, 21, 4836, 576, 9694, 1177, 2]
// Exports: default

// Module 15951 (FavoritesGuildCoachmarkGraphic)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 9694 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, betaTag: { marginLeft: 0 } };
obj2 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default function FavoritesGuildCoachmarkGraphic() {
  let items;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [_false(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 160, height: 90 }), ];
  const obj2 = { style: tmp.betaTag };
  items[1] = _false(native.BetaTag, obj2);
  return React3(View, obj);
};
