// Module ID: 13662
// Function ID: 104892
// Name: UserProfileUpsellCard
// Dependencies: [31, 27, 5510, 6671, 33, 4130, 689, 1273, 7486, 4126, 4554, 668, 2]
// Exports: default

// Module 13662 (UserProfileUpsellCard)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
let require = arg1;
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: 8, flexShrink: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, gap: 4 };
_createForOfIteratorHelperLoose.upsellButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.titleContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
_createForOfIteratorHelperLoose.linearGradient = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
_createForOfIteratorHelperLoose.outer = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
_createForOfIteratorHelperLoose.scroll = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.inner = { paddingVertical: 12, paddingHorizontal: 14 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  let children;
  let ctaText;
  let onPress;
  let showLinearGradient;
  let style;
  headerText = headerText.headerText;
  ({ style, children, ctaText, showLinearGradient, onPress } = headerText);
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = { borderWidth: 1, style: items };
  items = [tmp.outer, style];
  obj.direction = require(1273) /* Button */.GradientBorder.Direction.HORIZONTAL;
  obj.colors = Gradients.PREMIUM_TIER_2;
  obj.borderRadius = importDefault(689).radii.lg;
  obj = { bounces: false, style: tmp.scroll, contentContainerStyle: tmp.inner };
  let tmp5 = null;
  if (null != headerText) {
    obj = { style: tmp.titleContainer };
    const obj1 = { color: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
    const items1 = [callback(require(7486) /* NitroWheelIcon */.NitroWheelIcon, obj1), ];
    const obj2 = { variant: "heading-sm/bold", children: headerText };
    items1[1] = callback(require(4126) /* Text */.Text, obj2);
    obj.children = items1;
    tmp5 = callback2(closure_3, obj);
  }
  const items2 = [tmp5, children, ];
  const obj3 = {
    style: tmp.upsellButton,
    onPress,
    text: ctaText,
    color: require(1273) /* Button */.ButtonColors.GREEN,
    renderIcon() {
      return outer1_6(tmp(outer1_2[8]).NitroWheelIcon, { color: "white", size: "xs" });
    }
  };
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: items };
      items = [tmp.linearGradient];
      tmp = outer1_1(outer1_2[10]);
      obj.start = tmp(outer1_2[11]).HorizontalGradient.START;
      obj.end = tmp(outer1_2[11]).HorizontalGradient.END;
      obj.colors = outer1_5.PREMIUM_TIER_2_TRI_COLOR;
      return outer1_6(tmp, obj);
    };
  }
  obj3.renderLinearGradient = fn;
  items2[2] = callback(require(1273) /* Button */.ShinyButton, obj3);
  obj.children = items2;
  obj.children = callback2(closure_4, obj);
  return callback(require(1273) /* Button */.GradientBorder, obj);
};
