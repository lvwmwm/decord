// Module ID: 14545
// Function ID: 14546
// Name: DynamicRive
// Dependencies: [19, 21, 5375, 5322, 2]
// Exports: DynamicRive

// Module 14545 (DynamicRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5322 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5375 */;
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
