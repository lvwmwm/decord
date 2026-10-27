// Module ID: 19330
// Function ID: 19331
// Name: GuildRoleSubscriptionTierTemplateSelectedActionSheet
// Dependencies: [19, 17, 4820, 21, 4971, 587, 558, 576, 1633, 5234, 1128, 1202, 5244, 5269, 5265, 2]

// Module 19330 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4820 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  let intl;
  let intl2;
  let items;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp26;
  let tmp8;
  let tmp9;
  const obj = markAsDismissed(576);
  const cResult = obj.c(20);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== markAsDismissed) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    cResult[0] = markAsDismissed;
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
  }
  const container = tmp4.container;
  if (cResult[2] !== bottom) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    tmp7[0] = bottom;
    cResult[2] = bottom;
    cResult[3] = tmp7;
  } else {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1128).t.Y0PTc0) };
    const Text = tmp(5234).Text;
    intl = tmp(1128).intl;
    const tmp10 = closure_5(Text, obj2);
    const tmp11 = closure_5(markAsDismissed(1202).Spacer, { size: 12 });
    cResult[4] = tmp10;
    cResult[5] = tmp11;
    tmp9 = tmp11;
    tmp8 = tmp10;
  } else {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1128).t["YSI/1/"]) };
    const Text2 = tmp(5234).Text;
    intl2 = tmp(1128).intl;
    const tmp14 = closure_5(Text2, obj3);
    const tmp15 = closure_5(markAsDismissed(1202).Spacer, { size: 48 });
    cResult[6] = tmp14;
    cResult[7] = tmp15;
    tmp13 = tmp15;
    tmp12 = tmp14;
  } else {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    tmp13 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    const stringResult = obj4.string(markAsDismissed(1128).t.MhldXX);
    cResult[8] = stringResult;
    tmp16 = stringResult;
  } else {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
  }
  if (cResult[9] !== markAsDismissed) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    const obj5 = {
      text: tmp16,
      onPress() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
      grow: true
    };
    cResult[9] = markAsDismissed;
    cResult[10] = closure_5(markAsDismissed(5244).Button, obj5);
    const tmp19 = closure_5(markAsDismissed(5244).Button, obj5);
  } else {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
  }
  if (cResult[11] === tmp6) {
    class S {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    if (cResult[14] === tmp4.container) {
      class S {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      if (cResult[17] === tmp5) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        return tmp26;
      }
      const obj6 = { backdropOpacity: 0.8, onDismiss: tmp5, children: tmp22 };
      const tmp28 = closure_5(markAsDismissed(5265).BottomSheet, obj6);
      cResult[17] = tmp5;
      cResult[18] = tmp22;
      cResult[19] = tmp28;
      tmp26 = tmp28;
    }
    const obj7 = { style: container, children: tmp20 };
    cResult[14] = tmp4.container;
    cResult[15] = tmp20;
    cResult[16] = closure_5(View, obj7);
    const tmp25 = closure_5(View, obj7);
  }
  const obj8 = { contentContainerStyle: tmp6, children: items };
  items = [tmp8, tmp9, tmp12, tmp13, tmp18];
  cResult[11] = tmp6;
  cResult[12] = tmp18;
  cResult[13] = closure_6(markAsDismissed(5269).BottomSheetScrollView, obj8);
  const tmp21 = closure_6(markAsDismissed(5269).BottomSheetScrollView, obj8);
}) : (function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  let BottomSheetScrollView;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj3;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: closure_5(View, obj2)
  };
  obj2 = { style: tmp.container, children: closure_6(BottomSheetScrollView, obj3) };
  BottomSheet = markAsDismissed(5265).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = markAsDismissed(5269).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1128).t.Y0PTc0) };
  const Text = markAsDismissed(5234).Text;
  intl = markAsDismissed(1128).intl;
  items = [closure_5(Text, obj4), closure_5(markAsDismissed(1202).Spacer, { size: 12 }), , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1128).t["YSI/1/"]) };
  const Text2 = markAsDismissed(5234).Text;
  intl2 = markAsDismissed(1128).intl;
  items[2] = closure_5(Text2, obj5);
  items[3] = closure_5(markAsDismissed(1202).Spacer, { size: 48 });
  const obj6 = {
    text: intl3.string(markAsDismissed(1128).t.MhldXX),
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    grow: true
  };
  const Button = markAsDismissed(5244).Button;
  intl3 = markAsDismissed(1128).intl;
  items[4] = closure_5(Button, obj6);
  return closure_5(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default tmp4;
