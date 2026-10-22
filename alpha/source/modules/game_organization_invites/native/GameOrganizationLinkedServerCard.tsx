// Module ID: 12669
// Function ID: 12670
// Name: GameOrganizationLinkedServerCard
// Dependencies: [19, 17, 21, 4969, 587, 558, 576, 12666, 5220, 5963, 1128, 6890, 2]

// Module 12669 (GameOrganizationLinkedServerCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5220 */;
import Stack_Stack from "Stack/Stack" /* 5963 */;
import Card_Card from "Card/Card" /* 6890 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12666 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, info: { flex: 1 }, countsRow: { width: "auto" }, count: { width: "auto" }, onlineDot: size, membersDot: size1 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
size1 = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationLinkedServerCard(arg0) {
  let iconUrl;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let memberCount;
  let name;
  let obj11;
  let obj15;
  let presenceCount;
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(26);
  ({ name, iconUrl, presenceCount, memberCount } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== iconUrl) {
    const obj2 = { iconUrl, size: 56, borderRadius: nativeDefault.radii.lg };
    const tmp8 = GameOrganizationIconDefault;
    const tmp9 = React3(tmp8, obj2);
    cResult[0] = iconUrl;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== name) {
    const obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    const tmp12 = React3(Text_Text.Text, obj3);
    cResult[2] = name;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === presenceCount) {
    if (cResult[5] === tmp4.count) {
      let tmp13;
      if (cResult[6] === tmp4.onlineDot) {
        tmp13 = cResult[7];
      }
      if (cResult[8] === memberCount) {
        if (cResult[9] === tmp4.count) {
          let tmp19;
          if (cResult[10] === tmp4.membersDot) {
            tmp19 = cResult[11];
          }
          if (cResult[12] === tmp4.countsRow) {
            if (cResult[13] === tmp13) {
              let tmp25;
              if (cResult[14] === tmp19) {
                tmp25 = cResult[15];
              }
              if (cResult[16] === tmp4.info) {
                if (cResult[17] === tmp10) {
                  let tmp29;
                  if (cResult[18] === tmp25) {
                    tmp29 = cResult[19];
                  }
                  if (cResult[20] === tmp5) {
                    let tmp33;
                    if (cResult[21] === tmp29) {
                      tmp33 = cResult[22];
                    }
                    if (cResult[23] === tmp4.card) {
                      let tmp37;
                      if (cResult[24] === tmp33) {
                        tmp37 = cResult[25];
                      }
                      return tmp37;
                    }
                    const obj4 = { border: "subtle", style: tmp4.card, children: tmp33 };
                    const tmp39 = React3(Card_Card.Card, obj4);
                    cResult[23] = tmp4.card;
                    cResult[24] = tmp33;
                    cResult[25] = tmp39;
                    tmp37 = tmp39;
                  }
                  const obj5 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: items };
                  const Stack5 = tmp(5963).Stack;
                  items = [tmp5, tmp29];
                  const tmp36 = hasOwnProperty(Stack5, obj5);
                  cResult[20] = tmp5;
                  cResult[21] = tmp29;
                  cResult[22] = tmp36;
                  tmp33 = tmp36;
                }
              }
              const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp4.info, children: items1 };
              const Stack4 = tmp(5963).Stack;
              items1 = [tmp10, tmp25];
              const tmp32 = hasOwnProperty(Stack4, obj6);
              cResult[16] = tmp4.info;
              cResult[17] = tmp10;
              cResult[18] = tmp25;
              cResult[19] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj7 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp4.countsRow, children: items2 };
          const Stack3 = tmp(5963).Stack;
          items2 = [tmp13, tmp19];
          const tmp28 = hasOwnProperty(Stack3, obj7);
          cResult[12] = tmp4.countsRow;
          cResult[13] = tmp13;
          cResult[14] = tmp19;
          cResult[15] = tmp28;
          tmp25 = tmp28;
        }
      }
      let tmp20 = null;
      if (null != memberCount) {
        const obj8 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp4.count, children: items3 };
        const Stack2 = tmp(5963).Stack;
        const obj9 = { style: tmp4.membersDot };
        items3 = [React3(View, obj9), ];
        const obj10 = { variant: "text-md/medium", color: "text-muted", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj11) };
        const Text2 = tmp(5220).Text;
        intl2 = tmp(1128).intl;
        obj11 = { count: memberCount };
        items3[1] = React3(Text2, obj10);
        tmp20 = hasOwnProperty(Stack2, obj8);
      }
      cResult[8] = memberCount;
      cResult[9] = tmp4.count;
      cResult[10] = tmp4.membersDot;
      cResult[11] = tmp20;
      tmp19 = tmp20;
    }
  }
  let tmp14 = null;
  if (null != presenceCount) {
    const obj12 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp4.count, children: items4 };
    const Stack = tmp(5963).Stack;
    const obj13 = { style: tmp4.onlineDot };
    items4 = [React3(View, obj13), ];
    const obj14 = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj15) };
    const Text = tmp(5220).Text;
    intl = tmp(1128).intl;
    obj15 = { membersOnline: presenceCount };
    items4[1] = React3(Text, obj14);
    tmp14 = hasOwnProperty(Stack, obj12);
  }
  cResult[4] = presenceCount;
  cResult[5] = tmp4.count;
  cResult[6] = tmp4.onlineDot;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function GameOrganizationLinkedServerCard(arg0) {
  let Stack;
  let iconUrl;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let memberCount;
  let name;
  let obj13;
  let obj2;
  let obj9;
  let presenceCount;
  ({ presenceCount, memberCount } = arg0);
  ({ name, iconUrl } = arg0);
  const tmp = closure_6();
  const obj = { border: "subtle", style: tmp.card, children: hasOwnProperty(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  const obj3 = { iconUrl, size: 56, borderRadius: nativeDefault.radii.lg };
  const tmp7 = GameOrganizationIconDefault;
  items = [React3(tmp7, obj3), ];
  const obj4 = { spacing: nativeDefault.space.PX_4, style: tmp.info, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [React3(Text_Text.Text, { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name }), ];
  const obj5 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp.countsRow, children: items3 };
  const Stack3 = Stack_Stack.Stack;
  let tmp5Result = null;
  if (null != presenceCount) {
    const obj6 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.count, children: items2 };
    const Stack4 = tmp3(5963).Stack;
    const obj7 = { style: tmp.onlineDot };
    items2 = [React3(View, obj7), ];
    const obj8 = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj9) };
    const Text = tmp3(5220).Text;
    intl = tmp3(1128).intl;
    obj9 = { membersOnline: presenceCount };
    items2[1] = React3(Text, obj8);
    tmp5Result = tmp5(Stack4, obj6);
  }
  items3 = [tmp5Result, ];
  let tmp5Result2 = null;
  if (null != memberCount) {
    const obj10 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.count, children: items4 };
    const Stack5 = tmp3(5963).Stack;
    const obj11 = { style: tmp.membersDot };
    items4 = [React3(View, obj11), ];
    const obj12 = { variant: "text-md/medium", color: "text-muted", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj13) };
    const Text2 = tmp3(5220).Text;
    intl2 = tmp3(1128).intl;
    obj13 = { count: memberCount };
    items4[1] = React3(Text2, obj12);
    tmp5Result2 = tmp5(Stack5, obj10);
  }
  items3[1] = tmp5Result2;
  items1[1] = hasOwnProperty(Stack3, obj5);
  items[1] = hasOwnProperty(Stack2, obj4);
  return React3(Card, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx");

export default tmp5;
