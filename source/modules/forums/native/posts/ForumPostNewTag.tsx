// Module ID: 11130
// Function ID: 86584
// Name: ForumPostNewTag
// Dependencies: [31, 33, 4131, 689, 1273, 2]
// Exports: default

// Module 11130 (ForumPostNewTag)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  const obj = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
  const items = [containerStyle.containerStyle, _createForOfIteratorHelperLoose().container];
  obj.containerStyle = items;
  return jsx(require(1273) /* Button */.NewTag, { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" });
};
