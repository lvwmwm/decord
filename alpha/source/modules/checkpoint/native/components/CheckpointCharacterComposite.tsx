// Module ID: 12436
// Function ID: 12437
// Name: CheckpointCharacterComposite
// Dependencies: [17, 21, 4917, 5604, 2]
// Exports: default

// Module 12436 (CheckpointCharacterComposite)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ StyleSheet: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ hidden: { opacity: 0 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterComposite.tsx");

export default function CheckpointCharacterComposite(images) {
  let _undefined;
  let _undefined2;
  let c0;
  let c1;
  let urls;
  images = images.images;
  c0 = undefined;
  c1 = undefined;
  ({ urls, onLoad: c0, onError: c1 } = images);
  const items = [absoluteFill.absoluteFill, ];
  let hidden = "ready" !== images.status;
  const tmp = jsx;
  const tmp2 = closure_3;
  if (hidden) {
    hidden = closure_5().hidden;
  }
  items[1] = hidden;
  const obj = {
    style: items,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: urls.map((uri) => jsx(_undefined(c1[3]), {
      source: { uri },
      style: absoluteFill.absoluteFill,
      fadeDuration: 0,
      onLoad() {
        return uri(closure_0);
      },
      onError() {
        return c1(uri);
      }
    }, uri))
  };
  return tmp(tmp2, obj);
};
