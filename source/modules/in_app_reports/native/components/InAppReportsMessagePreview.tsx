// Module ID: 7709
// Function ID: 61348
// Name: MessagePreview
// Dependencies: [31, 27, 33, 4130, 689, 7710, 3974, 4126, 1212, 9329, 2]
// Exports: default

// Module 7709 (MessagePreview)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "RowManager";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.borderColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { lineHeight: 16, marginBottom: 8 };
const obj1 = { minHeight: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, padding: 8 };
_createForOfIteratorHelperLoose.chatItemContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
importDefaultResult = new importDefaultResult();
importDefaultResult.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: true, renderReactions: false });
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3974) /* hexToRgb */;
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.iouM3a);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items1 = [tmp.chatItemContainer, { borderColor: hexWithOpacityResult }];
  items[1] = callback(View, { style: items1, children: callback(importDefault(9329), obj2) });
  obj.children = items;
  return callback2(View, obj);
};
