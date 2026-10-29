// Module ID: 13009
// Function ID: 13010
// Name: GameOrganizationLinkedServerCard
// Dependencies: [19, 17, 21, 6943, 5005, 587, 558, 576, 1415, 5271, 6015, 1125, 6965, 2]

// Module 13009 (GameOrganizationLinkedServerCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import Text_Text from "Text/Text" /* 5271 */;
import Stack_Stack from "Stack/Stack" /* 6015 */;
import GuildIcon from "GuildIcon" /* 6943 */;
import Card_Card from "Card/Card" /* 6965 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const XLARGE = GuildIcon.GuildIconSizes.XLARGE;
let createStyles = createStyles_mod;
let obj = { card: obj2, icon: obj3, info: { flex: 1 }, autoWidth: { width: "auto" }, dot: size, onlineDot: obj4, membersDot: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
size = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj5 = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationLinkedServerCard(linkedGuild) {
  let icon;
  let id;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let memberCount;
  let name;
  let obj11;
  let obj15;
  let presenceCount;
  const obj = react2;
  const cResult = obj.c(33);
  ({ id, name, icon, presenceCount, memberCount } = linkedGuild.linkedGuild);
  const tmp4 = closure_7();
  if (cResult[0] === id) {
    let tmp5;
    if (cResult[1] === icon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === name) {
        let tmp7;
        let tmp12;
        if (cResult[5] === tmp4.icon) {
          tmp7 = cResult[6];
        }
        if (cResult[7] !== name) {
          const obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
          const tmp14 = React3(Text_Text.Text, obj3);
          cResult[7] = name;
          cResult[8] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === presenceCount) {
          if (cResult[10] === tmp4.autoWidth) {
            if (cResult[11] === tmp4.dot) {
              let tmp15;
              if (cResult[12] === tmp4.onlineDot) {
                tmp15 = cResult[13];
              }
              if (cResult[14] === memberCount) {
                if (cResult[15] === tmp4.autoWidth) {
                  if (cResult[16] === tmp4.dot) {
                    let tmp21;
                    if (cResult[17] === tmp4.membersDot) {
                      tmp21 = cResult[18];
                    }
                    if (cResult[19] === tmp4.autoWidth) {
                      if (cResult[20] === tmp15) {
                        let tmp27;
                        if (cResult[21] === tmp21) {
                          tmp27 = cResult[22];
                        }
                        if (cResult[23] === tmp4.info) {
                          if (cResult[24] === tmp12) {
                            let tmp31;
                            if (cResult[25] === tmp27) {
                              tmp31 = cResult[26];
                            }
                            if (cResult[27] === tmp7) {
                              let tmp35;
                              if (cResult[28] === tmp31) {
                                tmp35 = cResult[29];
                              }
                              if (cResult[30] === tmp4.card) {
                                let tmp39;
                                if (cResult[31] === tmp35) {
                                  tmp39 = cResult[32];
                                }
                                return tmp39;
                              }
                              const obj4 = { border: "subtle", style: tmp4.card, children: tmp35 };
                              const tmp41 = React3(Card_Card.Card, obj4);
                              cResult[30] = tmp4.card;
                              cResult[31] = tmp35;
                              cResult[32] = tmp41;
                              tmp39 = tmp41;
                            }
                            const obj5 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: items };
                            const Stack5 = tmp(6015).Stack;
                            items = [tmp7, tmp31];
                            const tmp38 = hasOwnProperty(Stack5, obj5);
                            cResult[27] = tmp7;
                            cResult[28] = tmp31;
                            cResult[29] = tmp38;
                            tmp35 = tmp38;
                          }
                        }
                        const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp4.info, children: items1 };
                        const Stack4 = tmp(6015).Stack;
                        items1 = [tmp12, tmp27];
                        const tmp34 = hasOwnProperty(Stack4, obj6);
                        cResult[23] = tmp4.info;
                        cResult[24] = tmp12;
                        cResult[25] = tmp27;
                        cResult[26] = tmp34;
                        tmp31 = tmp34;
                      }
                    }
                    const obj7 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp4.autoWidth, children: items2 };
                    const Stack3 = tmp(6015).Stack;
                    items2 = [tmp15, tmp21];
                    const tmp30 = hasOwnProperty(Stack3, obj7);
                    cResult[19] = tmp4.autoWidth;
                    cResult[20] = tmp15;
                    cResult[21] = tmp21;
                    cResult[22] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
              let tmp22 = null;
              if (null != memberCount) {
                const obj8 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp4.autoWidth, children: items4 };
                const Stack2 = tmp(6015).Stack;
                const obj9 = { style: items3 };
                items3 = [, ];
                ({ dot: arr3[0], membersDot: arr3[1] } = tmp4);
                items4 = [React3(View, obj9), ];
                const obj10 = { variant: "text-md/medium", color: "text-muted", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj11) };
                const Text2 = tmp(5271).Text;
                intl2 = tmp(1125).intl;
                obj11 = { count: memberCount };
                items4[1] = React3(Text2, obj10);
                tmp22 = hasOwnProperty(Stack2, obj8);
              }
              cResult[14] = memberCount;
              cResult[15] = tmp4.autoWidth;
              cResult[16] = tmp4.dot;
              cResult[17] = tmp4.membersDot;
              cResult[18] = tmp22;
              tmp21 = tmp22;
            }
          }
        }
        let tmp16 = null;
        if (null != presenceCount) {
          const obj12 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp4.autoWidth, children: items6 };
          const Stack = tmp(6015).Stack;
          const obj13 = { style: items5 };
          items5 = [, ];
          ({ dot: arr[0], onlineDot: arr[1] } = tmp4);
          items6 = [React3(View, obj13), ];
          const obj14 = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj15) };
          const Text = tmp(5271).Text;
          intl = tmp(1125).intl;
          obj15 = { membersOnline: presenceCount };
          items6[1] = React3(Text, obj14);
          tmp16 = hasOwnProperty(Stack, obj12);
        }
        cResult[9] = presenceCount;
        cResult[10] = tmp4.autoWidth;
        cResult[11] = tmp4.dot;
        cResult[12] = tmp4.onlineDot;
        cResult[13] = tmp16;
        tmp15 = tmp16;
      }
    }
    const obj16 = { icon: tmp5, value: name, size: XLARGE, selected: false, style: tmp4.icon };
    const tmp11 = React3(GuildIconDefault, obj16);
    cResult[3] = tmp5;
    cResult[4] = name;
    cResult[5] = tmp4.icon;
    cResult[6] = tmp11;
    tmp7 = tmp11;
  }
  const obj2 = AvatarUtilsDefault;
  const obj17 = { id, icon, size: GuildIcon.ImageSizes[XLARGE] };
  const guildIconURL = obj2.getGuildIconURL(obj17);
  cResult[0] = id;
  cResult[1] = icon;
  cResult[2] = guildIconURL;
  tmp5 = guildIconURL;
}) : (function GameOrganizationLinkedServerCard(linkedGuild) {
  let Stack;
  let icon;
  let id;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let memberCount;
  let name;
  let obj11;
  let obj15;
  let obj4;
  let presenceCount;
  linkedGuild = linkedGuild.linkedGuild;
  ({ name, presenceCount, memberCount } = linkedGuild);
  ({ id, icon } = linkedGuild);
  const tmp = closure_7();
  const obj = AvatarUtilsDefault;
  const obj2 = { id, icon, size: GuildIcon.ImageSizes[XLARGE] };
  const guildIconURL = obj.getGuildIconURL(obj2);
  const obj3 = { border: "subtle", style: tmp.card, children: hasOwnProperty(Stack, obj4) };
  const Card = Card_Card.Card;
  obj4 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  items = [, ];
  const obj5 = { icon: guildIconURL, value: name, size: XLARGE, selected: false, style: tmp.icon };
  items[0] = React3(GuildIconDefault, obj5);
  const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp.info, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [React3(Text_Text.Text, { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name }), ];
  const obj7 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp.autoWidth, children: items4 };
  const Stack3 = Stack_Stack.Stack;
  let tmp7Result = null;
  if (null != presenceCount) {
    const obj8 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.autoWidth, children: items3 };
    const Stack4 = tmp4(6015).Stack;
    const obj9 = { style: items2 };
    items2 = [, ];
    ({ dot: arr3[0], onlineDot: arr3[1] } = tmp);
    items3 = [React3(View, obj9), ];
    const obj10 = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj11) };
    const Text = tmp4(5271).Text;
    intl = tmp4(1125).intl;
    obj11 = { membersOnline: presenceCount };
    items3[1] = React3(Text, obj10);
    tmp7Result = tmp7(Stack4, obj8);
  }
  items4 = [tmp7Result, ];
  let tmp7Result2 = null;
  if (null != memberCount) {
    const obj12 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.autoWidth, children: items6 };
    const Stack5 = tmp4(6015).Stack;
    const obj13 = { style: items5 };
    items5 = [, ];
    ({ dot: arr6[0], membersDot: arr6[1] } = tmp);
    items6 = [React3(View, obj13), ];
    const obj14 = { variant: "text-md/medium", color: "text-muted", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj15) };
    const Text2 = tmp4(5271).Text;
    intl2 = tmp4(1125).intl;
    obj15 = { count: memberCount };
    items6[1] = React3(Text2, obj14);
    tmp7Result2 = tmp7(Stack5, obj12);
  }
  items4[1] = tmp7Result2;
  items1[1] = hasOwnProperty(Stack3, obj7);
  items[1] = hasOwnProperty(Stack2, obj6);
  return React3(Card, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx");

export default tmp5;
