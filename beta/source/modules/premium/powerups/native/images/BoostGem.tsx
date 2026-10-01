// Module ID: 12018
// Function ID: 12019
// Name: BoostGem
// Dependencies: [19, 21, 7909, 2]
// Exports: default

// Module 12018 (BoostGem)
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/images/BoostGem.tsx");

export default function BoostGem(style) {
  let items;
  let num = style.width;
  if (num === undefined) {
    num = 39;
  }
  let num2 = style.height;
  if (num2 === undefined) {
    num2 = 66;
  }
  size = { width: num, height: num2, viewBox: "0 0 39 66", fill: "none", style: style.style, children: items };
  items = [, , , , , ];
  const tmp = inlineStylesDefault;
  items[0] = _false(inlineStyles.Path, { d: "M19.3146 0L0 19.4029V46.6865L19.3146 65.9999L38.6293 46.5969V19.388L19.3146 0ZM28.972 42.6566L19.3146 52.3432L9.65732 42.6566V23.388L19.3146 13.6865L28.972 23.388V42.6566Z", fill: "#FA6EF6" });
  items[1] = _false(inlineStyles.Path, { d: "M19.3145 0V13.6316L28.9718 23.2941L38.6291 19.3102L19.3145 0Z", fill: "#FFADFB" });
  items[2] = _false(inlineStyles.Path, { d: "M9.65732 42.7056L0 46.7269L19.3146 65.9996V52.3419L9.65732 42.7056Z", fill: "#E655D4" });
  items[3] = _false(inlineStyles.Path, { d: "M9.65723 23.3317V42.6835L19.3145 52.4118L28.9719 42.6835V23.3317L19.3145 13.5884L9.65723 23.3317Z", fill: "#FFCFF9" });
  items[4] = _false(inlineStyles.Path, { d: "M28.9719 23.1273L9.74637 42.7058H9.65723V37.3827L26.3273 20.3823L28.9719 23.1273Z", fill: "white" });
  items[5] = _false(inlineStyles.Path, { d: "M28.9717 31.0586V36.3917L16.1689 49.4997L13.52 46.6984L28.9717 31.0586Z", fill: "white" });
  return React3(tmp, size);
};
