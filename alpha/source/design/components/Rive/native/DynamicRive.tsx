// Module ID: 13030
// Function ID: 13031
// Name: DynamicRive
// Dependencies: [19, 21, 5039, 4986, 2]
// Exports: DynamicRive

// Module 13030 (DynamicRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 4986 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5039 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Rive/native/DynamicRive.tsx");

export function DynamicRive(src) {
  src = src.src;
  const artboard = src.artboard;
  const merged = Object.assign(src, Object.assign({ src: 0, artboard: 0 }));
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const BaseRive = BaseRive2.BaseRive;
  const merged1 = Object.assign(merged);
  return <RiveErrorBoundary key={src}>{null}</RiveErrorBoundary>;
}
