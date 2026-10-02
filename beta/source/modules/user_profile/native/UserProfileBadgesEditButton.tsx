// Module ID: 14164
// Function ID: 14165
// Name: UserProfileBadgesEditButton
// Dependencies: [32, 19, 17, 2048, 21, 4837, 588, 10642, 6584, 6807, 2035, 4801, 14165, 1987, 14163, 1127, 4833, 10648, 10641, 2]
// Exports: default

// Module 14164 (UserProfileBadgesEditButton)
import nativeDefault from "native" /* 588 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10641 */;
import BadgeUtils from "BadgeUtils" /* 10648 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { content: obj2, badge: { width: 32, height: 32 }, overflowCount: { marginLeft: 2 } };
obj2 = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  let Text2;
  let autoOpen;
  let badges;
  let catalogBadges;
  let closure_1;
  let closure_4;
  let closure_8;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items4;
  let obj10;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  let ownsAnyBadge;
  let tmp18;
  let tmp19;
  let tmp22;
  ({ badges, catalogBadges, ownsAnyBadge, autoOpen } = arg0);
  if (autoOpen === undefined) {
    autoOpen = false;
  }
  let isBadgeManagementEnabled;
  react = undefined;
  let closure_5;
  let onPress;
  let ref;
  let legacyIconUrlByBadgeId;
  let tmp = closure_10();
  importDefault = tmp;
  let tmp2 = autoOpen;
  let obj = autoOpen(isBadgeManagementEnabled[7]);
  isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  const useSelectedDismissibleContent = tmp2(tmp3[9]).useSelectedDismissibleContent;
  tmp2(isBadgeManagementEnabled[9]);
  if (!isBadgeManagementEnabled) {
    items = [];
  } else {
    const items1 = [tmp2(tmp3[10]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  const tmp7 = analyticsLocations(useSelectedDismissibleContent(items, undefined, true), 2);
  react = tmp8;
  const tmp9 = tmp7[0] === tmp2(isBadgeManagementEnabled[10]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  closure_5 = tmp9;
  const items2 = [analyticsLocations, tmp9, tmp8];
  onPress = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { analyticsLocations };
    obj.openLazy(asyncRequire(14165, dependencyMap.paths), "Customize Badges", obj2);
    const tmp2 = closure_5;
    if (tmp2) {
      closure_4(ContentDismissActionType.TAKE_ACTION);
    }
  }, items2);
  ref = react.useRef(false);
  const items3 = [autoOpen, isBadgeManagementEnabled, onPress];
  const effect = react.useEffect(() => {
    const tmp = autoOpen && isBadgeManagementEnabled && !ref.current;
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items3);
  if (isBadgeManagementEnabled) {
    if (0 === length) {
      let obj2 = { label: intl3.string(tmp2(tmp3[15]).t.l6w3Vj), labelTrailing: legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj3), content: legacyIconUrlByBadgeId(onPress, obj4), accessibilityValue: obj6, disabled: !ownsAnyBadge, onPress };
      const UserProfileEditFormButton2 = tmp2(tmp3[14]).UserProfileEditFormButton;
      intl3 = tmp2(tmp3[15]).intl;
      obj3 = { showNewBadge: tmp9 };
      obj4 = { style: tmp.content, "aria-hidden": true, children: legacyIconUrlByBadgeId(Text2, obj5) };
      obj5 = { variant: "text-sm/medium", color: "text-muted", children: intl4.string(tmp2(isBadgeManagementEnabled[15]).t.xfuQvv) };
      Text2 = tmp2(tmp3[16]).Text;
      intl4 = tmp2(tmp3[15]).intl;
      obj6 = { text: intl5.string(tmp2(isBadgeManagementEnabled[15]).t.xfuQvv) };
      intl5 = tmp2(tmp3[15]).intl;
      return legacyIconUrlByBadgeId(UserProfileEditFormButton2, obj2);
    } else {
      let mapped1;
      const tmp2Result2 = tmp2(isBadgeManagementEnabled[17]);
      legacyIconUrlByBadgeId = tmp2Result2.getLegacyIconUrlByBadgeId(badges);
      const substr = badges.slice(0, tmp2(tmp3[17]).MAX_DISPLAYED_PROFILE_BADGES);
      let substr1;
      if (catalogBadges != null) {
        substr1 = catalogBadges.slice(0, tmp2(tmp3[17]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      if (substr1 == null) {
        substr1 = null;
      }
      const _Math = Math;
      const diff = length - Math.min(length, tmp2(tmp3[17]).MAX_DISPLAYED_PROFILE_BADGES);
      let mapped;
      if (substr1 != null) {
        mapped = substr1.map((name) => name.name);
      }
      if (mapped == null) {
        mapped = substr.map((description) => description.description);
      }
      const intl = tmp2(tmp3[15]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj7 = { badge_names: mapped.join(", "), overflow_count: diff };
      const AdyOTw = tmp2(tmp3[15]).t.AdyOTw;
      const obj8 = { label: intl2.string(tmp2(isBadgeManagementEnabled[15]).t.l6w3Vj), labelTrailing: legacyIconUrlByBadgeId(tmp2(isBadgeManagementEnabled[14]).UserProfileEditFormLabelBadges, obj9), content: tmp18(tmp19, obj10), accessibilityValue: tmp22, onPress };
      const formatToPlainStringResult = formatToPlainString(AdyOTw, obj7);
      const UserProfileEditFormButton = tmp2(tmp3[14]).UserProfileEditFormButton;
      intl2 = tmp2(tmp3[15]).intl;
      obj10 = { style: tmp.content, "aria-hidden": true, children: items4 };
      obj9 = { showNewBadge: tmp9 };
      tmp18 = closure_9;
      tmp19 = onPress;
      if (null != substr1) {
        mapped1 = substr1.map((badge_id) => {
          let obj3;
          let tmp6;
          const value = metroImportAll.get(badge_id.badge_id);
          if (null != value) {
            const obj2 = { style: closure_1.badge, source: obj3 };
            obj3 = { uri: value };
            tmp6 = metroImportAll(hasOwnProperty, obj2, badge_id.badge_id);
          } else {
            const obj = { badge: badge_id, size: 32, style: closure_1.badge };
            tmp6 = metroImportAll(BadgeCatalogIconDefault, obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          let obj2;
          let obj3;
          const obj = { style: closure_1.badge, source: obj2 };
          obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
          obj3 = BadgeUtils;
          return metroImportAll(hasOwnProperty, obj, id.id);
        });
      }
      items4 = [mapped1, ];
      let tmp17Result = diff > 0;
      if (tmp17Result) {
        const _HermesInternal = HermesInternal;
        const obj11 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.overflowCount, children: "+" + diff };
        const Text = tmp2(tmp3[16]).Text;
        tmp17Result = tmp17(Text, obj11);
      }
      items4[1] = tmp17Result;
      tmp22 = undefined;
      if (mapped.length > 0) {
        tmp22 = { text: formatToPlainStringResult };
        const obj12 = { text: formatToPlainStringResult };
      }
      return legacyIconUrlByBadgeId(UserProfileEditFormButton, obj8);
    }
  } else {
    return null;
  }
};
