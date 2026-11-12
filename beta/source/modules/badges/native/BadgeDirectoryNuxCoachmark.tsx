// Module ID: 15187
// Function ID: 15188
// Name: BadgeDirectoryNuxCoachmark
// Dependencies: [19, 17, 5016, 21, 5170, 575, 11624, 15188, 15189, 15190, 15185, 15191, 15195, 15199, 1113, 11630, 10109, 2]
// Exports: default

// Module 15187 (BadgeDirectoryNuxCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 11624 */;
import _modDef15188 from "module_15188" /* 15188 */;
import _modDef15189 from "module_15189" /* 15189 */;
import _modDef15190 from "module_15190" /* 15190 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  ({ graphicRow: arr[0], badgeGraphicRow: arr[1] } = closure_9());
  const obj2 = { url: _modDef15188, height: 44 };
  closure_9();
  const tmp2 = BadgeArtImageDefault;
  items1 = [metroRequire(tmp2, obj2), , ];
  const obj3 = { url: _modDef15189, height: 72 };
  const tmp3 = BadgeArtImageDefault;
  items1[1] = metroRequire(tmp3, obj3);
  const obj4 = { url: _modDef15190, height: 44 };
  const tmp4 = BadgeArtImageDefault;
  items1[2] = metroRequire(tmp4, obj4);
  return metroImportDefault(View, obj);
}
function ProgressGraphic(badgeIconUrls) {
  let closure_0;
  let iconUrls;
  let items;
  let items1;
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
      style: items1,
      children: iconUrls.map((url, index) => {
          const obj = { url, height: closure_0[index] };
          return metroRequire(BadgeArtImageDefault, obj, url);
        })
    };
    items1 = [, ];
    ({ graphicRow: arr[0], badgeGraphicRow: arr[1] } = tmp);
    iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
    return closure_6(View, obj3);
  }
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { single: [80], pair: [80, 80], trio: [44, 72, 44] };
let createStyles = createStyles_mod;
let obj = { graphicRow: obj2, badgeGraphicRow: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 60, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { height: "auto", gap: nativeDefault.space.PX_0 };
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
    const intl = userId(visible[14]).intl;
    const string = intl.string;
    const t = userId(visible[14]).t;
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
      buttonLabel: intl3.string(userId(visible[14]).t.pHo9tZ),
      buttonVariant: "primary",
      onButtonPress() {
        markAsDismissed(constants.TAKE_ACTION);
        const obj = userId(visible[15]);
        const obj2 = { targetUserId };
        const result = obj.openBadgeDirectoryScreen(obj2);
      }
    };
    const intl2 = userId(visible[14]).intl;
    if ("progress" === variantProps.variant) {
      let obj2 = { count: tmp.newBadgeCount };
      formatToPlainStringResult = intl2.formatToPlainString(userId(visible[14]).t.Mk5nzZ, obj2);
    } else {
      formatToPlainStringResult = intl2.string(userId(visible[14]).t["2Rb7tE"]);
    }
    intl3 = userId(visible[14]).intl;
    return obj;
  }, items);
  let obj = userId(visible[16]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
