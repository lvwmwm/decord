// Module ID: 13422
// Function ID: 13423
// Name: CheckpointShareActionSheet
// Dependencies: [32, 19, 17, 5273, 21, 6090, 3092, 5014, 575, 1491, 5303, 6087, 13423, 7366, 7321, 1113, 7060, 6975, 6983, 13376, 5258, 2]
// Exports: default

// Module 13422 (CheckpointShareActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef3092 from "module_3092" /* 3092 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5273 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6087 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6090 */;
import CheckpointShareCardDefault from "CheckpointShareCard" /* 13423 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj3;
let obj4;
let obj5;
let size;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {};
obj[CheckpointCardTypes.CheckpointCardTypes.DEFAULT] = _modDef3092.DZQzJn;
obj[CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY] = _modDef3092.tUU3fe;
obj[CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY] = _modDef3092.e2UHGT;
let createStyles = createStyles_mod;
let obj2 = { carousel: obj3, carouselContent: { alignItems: "center", gap: 48 }, pageDots: obj4, pageDot: size, activePageDot: obj5 };
obj3 = { marginHorizontal: -nativeDefault.space.PX_16, height: 284 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_16 };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.ICON_MUTED };
obj5 = { borderColor: nativeDefault.colors.ICON_STRONG, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_11 = createStyles(obj2);
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareActionSheet.tsx");

export default function CheckpointShareActionSheet(character) {
  let BottomSheetTitleHeader;
  let GestureDetector;
  let TableRow;
  let TableRowIcon;
  let closure_3;
  let closure_6;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj12;
  let obj3;
  let obj6;
  let obj7;
  let tmp18;
  character = character.character;
  let stats = character.stats;
  const onForward = character.onForward;
  let ref;
  first = undefined;
  closure_6 = undefined;
  let memo;
  let items7;
  let mapped;
  let num;
  let mapped1;
  let closure_12;
  let tmp = mapped1();
  _slicedToArray = tmp;
  let tmp2 = stats;
  const bound = Math.min(stats(onForward[9])().width, memo);
  ref = ref.useRef(null);
  obj = character(onForward[10]);
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  [first, closure_6] = ref.useState(0);
  const items = [stats];
  memo = ref.useMemo(() => {
    obj = checkpoint_CheckpointMessageComponentUtils;
    stats = obj.toCheckpointMessageComponentData(CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY, null, stats).stats;
    let result = null;
    if (null != stats) {
      const tmpResult = checkpoint_CheckpointMessageComponentUtils;
      result = tmpResult.transformCheckpoint2026StatsToRowGeneratedComponent(stats);
    }
    return result;
  }, items);
  if (null != character) {
    if (null != memo) {
      const items1 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY, tmp6(tmp3[5]).CheckpointCardTypes.DEFAULT, tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
      items7 = items1;
    }
    mapped = items7.map((item) => {
      obj = character(onForward[12]);
      return obj.getCheckpointShareCardSize(item).width;
    });
    num = mapped[0];
    if (num == null) {
      num = 0;
    }
    let num3 = mapped[mapped.length - 1];
    if (num3 == null) {
      num3 = 0;
    }
    mapped1 = mapped.map((item, index) => {
      const substr = mapped.slice(0, index);
      return substr.reduce((acc, item) => acc + item + 48, 0) + (item - num) / 2;
    });
    closure_12 = tmp14;
    let obj2 = { startExpanded: true, header: items7(BottomSheetTitleHeader, obj3), children: items4 };
    const ActionSheet = tmp6(tmp3[13]).ActionSheet;
    obj3 = { title: intl.string(character(onForward[15]).t.RDE0Sc) };
    BottomSheetTitleHeader = tmp6(tmp3[14]).BottomSheetTitleHeader;
    intl = tmp6(tmp3[15]).intl;
    const obj4 = {
      accessible: true,
      accessibilityRole: "adjustable",
      accessibilityLabel: intl2.string(tmp2(onForward[6]).KXDPot),
      accessibilityValue: tmp18,
      accessibilityActions: items2,
      onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("increment" === actionName) {
            const sum = first + 1;
            const tmp9 = sum < 0 || sum >= items7.length;
            if (!tmp9) {
              closure_6(sum);
              const current2 = ref.current;
              if (current2 != null) {
                obj = { x: mapped1[sum], animated: true };
                current2.scrollTo(obj);
              }
            }
          } else if ("decrement" === actionName) {
            const diff = first - 1;
            const tmp2 = diff < 0 || diff >= items7.length;
            if (!tmp2) {
              closure_6(diff);
              const current = ref.current;
              if (current != null) {
                const obj2 = { x: mapped1[diff], animated: true };
                current.scrollTo(obj2);
              }
            }
          }
        },
      children: items7(GestureDetector, obj6)
    };
    intl2 = tmp6(tmp3[15]).intl;
    tmp18 = undefined;
    const tmp15 = mapped;
    if (null != items7[first]) {
      const obj5 = { text: intl3.string(num[items7[first]]) };
      intl3 = tmp6(tmp3[15]).intl;
      tmp18 = obj5;
    }
    items2 = [{ name: "increment" }, { name: "decrement" }];
    obj6 = { gesture: nativeGesture, children: items7(first, obj7) };
    obj7 = {
      ref,
      horizontal: true,
      nestedScrollEnabled: true,
      style: tmp.carousel,
      contentContainerStyle: items3,
      showsHorizontalScrollIndicator: false,
      decelerationRate: "fast",
      snapToOffsets: mapped1,
      onMomentumScrollEnd: function handleMomentumScrollEnd(nativeEvent) {
          let closure_0;
          const x = nativeEvent.nativeEvent.contentOffset.x;
          let c1 = 0;
          const item = mapped1.forEach((item, index) => {
            const absolute = Math.abs(item - closure_0);
            if (absolute < Math.abs(mapped1[c1] - closure_0)) {
              c1 = index;
            }
          });
          closure_6(c1);
        },
      children: items7.map((cardType) => {
          obj = { cardType, character, stats: memo };
          return metroImportAll(CheckpointShareCardDefault, obj, cardType);
        })
    };
    items3 = [tmp.carouselContent, ];
    const obj8 = { paddingLeft: (bound - num) / 2, paddingRight: (bound - num3) / 2 };
    items3[1] = obj8;
    GestureDetector = tmp6(tmp3[10]).GestureDetector;
    items4 = [items7(tmp17, obj4), , ];
    let tmp16Result = items7.length > 1;
    if (tmp16Result) {
      const obj9 = {
        style: tmp.pageDots,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items7.map((item, index) => {
              const style = [closure_3.pageDot, ];
              let activePageDot = index === first;
              const tmp = metroImportAll;
              const tmp2 = metroRequire;
              if (activePageDot) {
                activePageDot = closure_3.activePageDot;
              }
              style[1] = activePageDot;
              return tmp(tmp2, { style }, item);
            })
      };
      tmp16Result = tmp16(tmp17, obj9);
    }
    items4[1] = tmp16Result;
    const obj10 = { hasIcons: true, children: items7(TableRow, obj11) };
    const TableRowGroup = tmp6(tmp3[16]).TableRowGroup;
    obj11 = {
      label: intl4.string(character(onForward[15]).t.I3ltXO),
      icon: items7(TableRowIcon, obj12),
      onPress: function handleForward() {
          if (null != closure_12) {
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            onForward(tmp);
          }
        },
      disabled: null == items7[first]
    };
    TableRow = tmp6(tmp3[17]).TableRow;
    intl4 = tmp6(tmp3[15]).intl;
    obj12 = { IconComponent: tmp2(onForward[19]) };
    TableRowIcon = tmp6(tmp3[18]).TableRowIcon;
    items4[2] = items7(TableRowGroup, obj10);
    return tmp15(ActionSheet, obj2);
  }
  if (null != character) {
    const items5 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY];
    items7 = items5;
  } else if (null != memo) {
    const items6 = [tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
    items7 = items6;
  } else {
    items7 = [];
  }
};
