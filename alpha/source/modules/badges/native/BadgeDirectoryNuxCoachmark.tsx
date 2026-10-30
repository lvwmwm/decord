// Module ID: 14883
// Function ID: 14884
// Name: BadgeDirectoryNuxCoachmark
// Dependencies: [19, 17, 4855, 21, 5009, 575, 14884, 14888, 14892, 14881, 14896, 14900, 11415, 1114, 11419, 9933, 2]
// Exports: default

// Module 14883 (BadgeDirectoryNuxCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 11415 */;
import GameTimeTier9LargeBadge from "GameTimeTier9LargeBadge" /* 14884 */;
import StreamingTier10LargeBadge from "StreamingTier10LargeBadge" /* 14888 */;
import GameDiversityTier8LargeBadge from "GameDiversityTier8LargeBadge" /* 14892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function NoProgressGraphic() {
  let items;
  let items1;
  const obj = { style: items, children: items1 };
  items = [, ];
  ({ graphicRow: arr[0], noProgressGraphicRow: arr[1] } = closure_9());
  items1 = [, , ];
  closure_9();
  items1[0] = metroRequire(GameTimeTier9LargeBadge.GameTimeTier9LargeBadge, { width: 40, height: 40 });
  items1[1] = metroRequire(StreamingTier10LargeBadge.StreamingTier10LargeBadge, { width: 50, height: 50 });
  items1[2] = metroRequire(GameDiversityTier8LargeBadge.GameDiversityTier8LargeBadge, { width: 40, height: 40 });
  return metroImportDefault(View, obj);
}
function ProgressGraphic(badgeIconUrls) {
  let closure_0;
  let iconUrls;
  let items;
  _require = undefined;
  badgeIconUrls = badgeIconUrls.badgeIconUrls;
  const tmp = closure_9();
  let obj = require("BadgeDirectoryNuxGraphicUtils");
  const badgeDirectoryNuxGraphicLayout = obj.getBadgeDirectoryNuxGraphicLayout(badgeIconUrls);
  if ("fallback" === badgeDirectoryNuxGraphicLayout.type) {
    const obj2 = { style: tmp.graphicRow, children: items };
    items = [closure_6(require("GameDiversityTier9LargeBadge").GameDiversityTier9LargeBadge, { width: 42, height: 42 }), closure_6(require("GameDiversityTier10LargeBadge").GameDiversityTier10LargeBadge, { width: 60, height: 60 }), closure_6(require("GameDiversityTier8LargeBadge").GameDiversityTier8LargeBadge, { width: 42, height: 42 })];
    return closure_7(View, obj2);
  } else {
    _require = closure_8[badgeDirectoryNuxGraphicLayout.type];
    const obj3 = {
      style: tmp.graphicRow,
      children: iconUrls.map((url, index) => {
          const obj = { url, height: closure_0[index] };
          return metroRequire(BadgeArtImageDefault, obj, url);
        })
    };
    iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
    return closure_6(View, obj3);
  }
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { single: [60], pair: [48, 48], trio: [42, 60, 42] };
let createStyles = createStyles_mod;
let obj = { graphicRow: obj2, noProgressGraphicRow: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 60, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryNuxCoachmark.tsx");

export default function BadgeDirectoryNuxCoachmark(userId) {
  userId = userId.userId;
  const variantProps = userId.variantProps;
  const visible = userId.visible;
  const markAsDismissed = userId.markAsDismissed;
  const items = [variantProps, visible, markAsDismissed, userId];
  const targetRef = userId.targetRef;
  const memo = markAsDismissed.useMemo(() => {
    let formatToPlainStringResult;
    let intl3;
    let stringResult;
    const targetUserId = tmp2;
    const tmp = variantProps;
    const intl = userId(visible[13]).intl;
    const string = intl.string;
    const t = userId(visible[13]).t;
    if ("progress" === variantProps.variant) {
      stringResult = string(t.uwDBSq);
    } else {
      stringResult = string(t["5GD53o"]);
    }
    let obj = {
      title: stringResult,
      description: formatToPlainStringResult,
      visible,
      position: "bottom",
      renderImgComponent() {
        let tmpResult;
        if (targetUserId) {
          const obj = { badgeIconUrls: variantProps.badgeIconUrls };
          tmpResult = tmp(ProgressGraphic, obj);
        } else {
          tmpResult = tmp(NoProgressGraphic, {});
        }
        return tmpResult;
      },
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(userId(visible[13]).t.pHo9tZ),
      buttonVariant: "primary",
      onButtonPress() {
        markAsDismissed(constants.TAKE_ACTION);
        const obj = userId(visible[14]);
        const obj2 = { targetUserId };
        const result = obj.openBadgeDirectoryScreen(obj2);
      }
    };
    const intl2 = userId(visible[13]).intl;
    if ("progress" === variantProps.variant) {
      let obj2 = { count: tmp.newBadgeCount };
      formatToPlainStringResult = intl2.formatToPlainString(userId(visible[13]).t.Mk5nzZ, obj2);
    } else {
      formatToPlainStringResult = intl2.string(userId(visible[13]).t["2Rb7tE"]);
    }
    intl3 = userId(visible[13]).intl;
    return obj;
  }, items);
  let obj = userId(visible[15]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
