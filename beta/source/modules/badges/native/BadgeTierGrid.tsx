// Module ID: 10732
// Function ID: 10733
// Name: BadgeTierGrid
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 4833, 1127, 10648, 10730, 5410, 2]

// Module 10732 (BadgeTierGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import BadgeUtils from "BadgeUtils" /* 10648 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10730 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let badge, obj1, obj10, obj11, obj12, obj13, obj14, obj15, owned, tmp10, tmp16, tmp17, tmp3;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, grid: obj3, item: obj4, progressLabel: obj5, icon: obj6, dimmedIcon: { opacity: 0.4 }, subtitleRow: { flexDirection: "row", alignItems: "center", gap: 2 }, centeredText: { textAlign: "center" } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { width: "33.333%", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let isViewerOnUpgradeableNitro;
  let item;
  let items;
  let obj5;
  let targetUsername;
  let tmp = badge;
  const tmp2 = isViewerOnUpgradeableNitro;
  let obj = badge(isViewerOnUpgradeableNitro[6]);
  const cResult = obj.c(32);
  badge = badge.badge;
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro } = badge);
  const tmp4 = closure_6();
  View = tmp4;
  let tmp5 = isViewingOtherUser;
  if (tmp5) {
    const tmp6 = null;
    tmp5 = null != targetUsername;
  }
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4.progressLabel) {
      let tmp7;
      let arr;
      let tmp12;
      if (cResult[2] === targetUsername) {
        tmp7 = cResult[3];
      }
      const grid = tmp4.grid;
      if (cResult[4] !== badge.tiers) {
        let tiers = badge.tiers;
        let tmp11 = null;
        if (tiers == null) {
          tiers = [];
        }
        cResult[4] = badge.tiers;
        class I {
          constructor(arg0) {
            owned = badge.owned;
            dimmedIcon = !owned;
            if (dimmedIcon) {
              tmp = badge;
              dimmedIcon = badge.owned;
            }
            complex_icon_static_url = badge.simple_icon_url;
            if (complex_icon_static_url == null) {
              complex_icon_static_url = badge.complex_icon_static_url;
            }
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            obj1 = { tier: badge, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: closure_2 };
            tierRowSubtitle = obj.getTierRowSubtitle(obj1);
            intl = closure_0(closure_2[8]).intl;
            string = intl.string;
            t = closure_0(closure_2[8]).t;
            items = [, , ];
            items[0] = badge.name;
            items[1] = tierRowSubtitle;
            items[2] = string(owned ? t.sTFApF : t.uHtDcT);
            found = items.filter(() => { /* body not rendered: F139294 */ });
            tmp5 = jsxs;
            tmp6 = View;
            obj10 = { style: closure_3.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
            tmp7 = closure_3;
            tmp9Result = null != complex_icon_static_url;
            if (tmp9Result) {
              tmp10 = closure_1;
              tmp9 = jsx;
              obj11 = { url: null, height: 32, style: null };
              obj11.url = complex_icon_static_url;
              items1 = [, ];
              items1[0] = tmp7.icon;
              tmp11 = closure_1(tmp3[10]);
              if (dimmedIcon) {
                dimmedIcon = tmp7.dimmedIcon;
              }
              items1[1] = dimmedIcon;
              obj11.style = items1;
              tmp9Result = tmp9(tmp11, obj11);
            }
            items2 = [, , ];
            items2[0] = tmp9Result;
            tmp13Result = null != badge.name;
            if (tmp13Result) {
              tmp13 = jsx;
              str = "text-muted";
              Text = tmp2(tmp3[7]).Text;
              if (owned) {
                str = "text-default";
              }
              obj12 = { variant: "text-sm/semibold", color: null, style: null, children: null };
              obj12.color = str;
              obj12.style = tmp7.centeredText;
              obj12.children = badge.name;
              tmp13Result = tmp13(Text, obj12);
            }
            items2[1] = tmp13Result;
            tmp5Result = "" !== tierRowSubtitle;
            if (tmp5Result) {
              obj13 = { style: null, children: null };
              obj13.style = tmp7.subtitleRow;
              tmp15 = !owned;
              if (tmp15) {
                tmp16 = jsx;
                obj14 = { size: "xxs", color: null };
                tmp17 = closure_1;
                LockIcon = tmp2(tmp3[11]).LockIcon;
                obj14.color = closure_1(tmp3[4]).colors.ICON_MUTED;
                tmp15 = jsx(LockIcon, obj14);
              }
              items3 = [, ];
              items3[0] = tmp15;
              tmp18 = jsx;
              str2 = "text-muted";
              Text2 = tmp2(tmp3[7]).Text;
              if (owned) {
                str2 = "text-default";
              }
              obj15 = { variant: "text-sm/normal", color: null, style: null, children: null };
              obj15.color = str2;
              obj15.style = tmp7.centeredText;
              obj15.children = tierRowSubtitle;
              items3[1] = tmp18(Text2, obj15);
              obj13.children = items3;
              tmp5Result = tmp5(tmp6, obj13);
            }
            items2[2] = tmp5Result;
            obj10.children = items2;
            return tmp5(tmp6, obj10, badge.key);
          }
        }
        cResult[5] = tiers;
        arr = tiers;
      } else {
        arr = cResult[5];
      }
      if (cResult[6] === badge.owned) {
        if (cResult[7] === isViewerOnUpgradeableNitro) {
          if (cResult[8] === isViewingOtherUser) {
            if (cResult[9] === tmp4.centeredText) {
              if (cResult[10] === tmp4.dimmedIcon) {
                if (cResult[11] === tmp4.icon) {
                  if (cResult[12] === tmp4.item) {
                    if (cResult[13] === tmp4.subtitleRow) {
                      if (cResult[14] === arr) {
                        tmp12 = cResult[15];
                      }
                      if (cResult[25] === tmp4.grid) {
                        let tmp15;
                        if (cResult[26] === tmp12) {
                          tmp15 = cResult[27];
                        }
                        if (cResult[28] === tmp4.section) {
                          if (cResult[29] === tmp7) {
                            let tmp19;
                            if (cResult[30] === tmp15) {
                              tmp19 = cResult[31];
                            }
                            return tmp19;
                          }
                        }
                        let obj2 = { style: null, children: items };
                        class I {
                          constructor(arg0) {
                            owned = badge.owned;
                            dimmedIcon = !owned;
                            if (dimmedIcon) {
                              tmp = badge;
                              dimmedIcon = badge.owned;
                            }
                            complex_icon_static_url = badge.simple_icon_url;
                            if (complex_icon_static_url == null) {
                              complex_icon_static_url = badge.complex_icon_static_url;
                            }
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = closure_0(closure_2[9]);
                            obj1 = { tier: badge, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: closure_2 };
                            tierRowSubtitle = obj.getTierRowSubtitle(obj1);
                            intl = closure_0(closure_2[8]).intl;
                            string = intl.string;
                            t = closure_0(closure_2[8]).t;
                            items = [, , ];
                            items[0] = badge.name;
                            items[1] = tierRowSubtitle;
                            items[2] = string(owned ? t.sTFApF : t.uHtDcT);
                            found = items.filter(() => { /* body not rendered: F139294 */ });
                            tmp5 = jsxs;
                            tmp6 = View;
                            obj10 = { style: closure_3.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
                            tmp7 = closure_3;
                            tmp9Result = null != complex_icon_static_url;
                            if (tmp9Result) {
                              tmp10 = closure_1;
                              tmp9 = jsx;
                              obj11 = { url: null, height: 32, style: null };
                              obj11.url = complex_icon_static_url;
                              items1 = [, ];
                              items1[0] = tmp7.icon;
                              tmp11 = closure_1(tmp3[10]);
                              if (dimmedIcon) {
                                dimmedIcon = tmp7.dimmedIcon;
                              }
                              items1[1] = dimmedIcon;
                              obj11.style = items1;
                              tmp9Result = tmp9(tmp11, obj11);
                            }
                            items2 = [, , ];
                            items2[0] = tmp9Result;
                            tmp13Result = null != badge.name;
                            if (tmp13Result) {
                              tmp13 = jsx;
                              str = "text-muted";
                              Text = tmp2(tmp3[7]).Text;
                              if (owned) {
                                str = "text-default";
                              }
                              obj12 = { variant: "text-sm/semibold", color: null, style: null, children: null };
                              obj12.color = str;
                              obj12.style = tmp7.centeredText;
                              obj12.children = badge.name;
                              tmp13Result = tmp13(Text, obj12);
                            }
                            items2[1] = tmp13Result;
                            tmp5Result = "" !== tierRowSubtitle;
                            if (tmp5Result) {
                              obj13 = { style: null, children: null };
                              obj13.style = tmp7.subtitleRow;
                              tmp15 = !owned;
                              if (tmp15) {
                                tmp16 = jsx;
                                obj14 = { size: "xxs", color: null };
                                tmp17 = closure_1;
                                LockIcon = tmp2(tmp3[11]).LockIcon;
                                obj14.color = closure_1(tmp3[4]).colors.ICON_MUTED;
                                tmp15 = jsx(LockIcon, obj14);
                              }
                              items3 = [, ];
                              items3[0] = tmp15;
                              tmp18 = jsx;
                              str2 = "text-muted";
                              Text2 = tmp2(tmp3[7]).Text;
                              if (owned) {
                                str2 = "text-default";
                              }
                              obj15 = { variant: "text-sm/normal", color: null, style: null, children: null };
                              obj15.color = str2;
                              obj15.style = tmp7.centeredText;
                              obj15.children = tierRowSubtitle;
                              items3[1] = tmp18(Text2, obj15);
                              obj13.children = items3;
                              tmp5Result = tmp5(tmp6, obj13);
                            }
                            items2[2] = tmp5Result;
                            obj10.children = items2;
                            return tmp5(tmp6, obj10, badge.key);
                          }
                        }
                        items = [tmp7, tmp15];
                        const tmp22 = closure_5(View, obj2);
                        cResult[28] = tmp4.section;
                        cResult[29] = tmp7;
                        cResult[30] = tmp15;
                        cResult[31] = tmp22;
                        tmp19 = tmp22;
                      }
                      let obj3 = { style: null, accessibilityRole: "list", children: tmp12 };
                      class I {
                        constructor(arg0) {
                          owned = badge.owned;
                          dimmedIcon = !owned;
                          if (dimmedIcon) {
                            tmp = badge;
                            dimmedIcon = badge.owned;
                          }
                          complex_icon_static_url = badge.simple_icon_url;
                          if (complex_icon_static_url == null) {
                            complex_icon_static_url = badge.complex_icon_static_url;
                          }
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = closure_0(closure_2[9]);
                          obj1 = { tier: badge, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: closure_2 };
                          tierRowSubtitle = obj.getTierRowSubtitle(obj1);
                          intl = closure_0(closure_2[8]).intl;
                          string = intl.string;
                          t = closure_0(closure_2[8]).t;
                          items = [, , ];
                          items[0] = badge.name;
                          items[1] = tierRowSubtitle;
                          items[2] = string(owned ? t.sTFApF : t.uHtDcT);
                          found = items.filter(() => { /* body not rendered: F139294 */ });
                          tmp5 = jsxs;
                          tmp6 = View;
                          obj10 = { style: closure_3.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
                          tmp7 = closure_3;
                          tmp9Result = null != complex_icon_static_url;
                          if (tmp9Result) {
                            tmp10 = closure_1;
                            tmp9 = jsx;
                            obj11 = { url: null, height: 32, style: null };
                            obj11.url = complex_icon_static_url;
                            items1 = [, ];
                            items1[0] = tmp7.icon;
                            tmp11 = closure_1(tmp3[10]);
                            if (dimmedIcon) {
                              dimmedIcon = tmp7.dimmedIcon;
                            }
                            items1[1] = dimmedIcon;
                            obj11.style = items1;
                            tmp9Result = tmp9(tmp11, obj11);
                          }
                          items2 = [, , ];
                          items2[0] = tmp9Result;
                          tmp13Result = null != badge.name;
                          if (tmp13Result) {
                            tmp13 = jsx;
                            str = "text-muted";
                            Text = tmp2(tmp3[7]).Text;
                            if (owned) {
                              str = "text-default";
                            }
                            obj12 = { variant: "text-sm/semibold", color: null, style: null, children: null };
                            obj12.color = str;
                            obj12.style = tmp7.centeredText;
                            obj12.children = badge.name;
                            tmp13Result = tmp13(Text, obj12);
                          }
                          items2[1] = tmp13Result;
                          tmp5Result = "" !== tierRowSubtitle;
                          if (tmp5Result) {
                            obj13 = { style: null, children: null };
                            obj13.style = tmp7.subtitleRow;
                            tmp15 = !owned;
                            if (tmp15) {
                              tmp16 = jsx;
                              obj14 = { size: "xxs", color: null };
                              tmp17 = closure_1;
                              LockIcon = tmp2(tmp3[11]).LockIcon;
                              obj14.color = closure_1(tmp3[4]).colors.ICON_MUTED;
                              tmp15 = jsx(LockIcon, obj14);
                            }
                            items3 = [, ];
                            items3[0] = tmp15;
                            tmp18 = jsx;
                            str2 = "text-muted";
                            Text2 = tmp2(tmp3[7]).Text;
                            if (owned) {
                              str2 = "text-default";
                            }
                            obj15 = { variant: "text-sm/normal", color: null, style: null, children: null };
                            obj15.color = str2;
                            obj15.style = tmp7.centeredText;
                            obj15.children = tierRowSubtitle;
                            items3[1] = tmp18(Text2, obj15);
                            obj13.children = items3;
                            tmp5Result = tmp5(tmp6, obj13);
                          }
                          items2[2] = tmp5Result;
                          obj10.children = items2;
                          return tmp5(tmp6, obj10, badge.key);
                        }
                      }
                      let tmp18 = closure_4(View, obj3);
                      cResult[25] = tmp4.grid;
                      cResult[26] = tmp12;
                      cResult[27] = tmp18;
                      tmp15 = tmp18;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (cResult[16] === badge.owned) {
        if (cResult[17] === isViewerOnUpgradeableNitro) {
          if (cResult[18] === isViewingOtherUser) {
            if (cResult[19] === tmp4.centeredText) {
              if (cResult[20] === tmp4.dimmedIcon) {
                if (cResult[21] === tmp4.icon) {
                  if (cResult[22] === tmp4.item) {
                    let tmp13;
                    if (cResult[23] === tmp4.subtitleRow) {
                      tmp13 = cResult[24];
                    }
                    const mapped = arr.map(tmp13);
                    cResult[6] = badge.owned;
                    class I {
                      constructor(arg0) {
                        owned = badge.owned;
                        dimmedIcon = !owned;
                        if (dimmedIcon) {
                          tmp = badge;
                          dimmedIcon = badge.owned;
                        }
                        complex_icon_static_url = badge.simple_icon_url;
                        if (complex_icon_static_url == null) {
                          complex_icon_static_url = badge.complex_icon_static_url;
                        }
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[9]);
                        obj1 = { tier: badge, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: closure_2 };
                        tierRowSubtitle = obj.getTierRowSubtitle(obj1);
                        intl = closure_0(closure_2[8]).intl;
                        string = intl.string;
                        t = closure_0(closure_2[8]).t;
                        items = [, , ];
                        items[0] = badge.name;
                        items[1] = tierRowSubtitle;
                        items[2] = string(owned ? t.sTFApF : t.uHtDcT);
                        found = items.filter(() => { /* body not rendered: F139294 */ });
                        tmp5 = jsxs;
                        tmp6 = View;
                        obj10 = { style: closure_3.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
                        tmp7 = closure_3;
                        tmp9Result = null != complex_icon_static_url;
                        if (tmp9Result) {
                          tmp10 = closure_1;
                          tmp9 = jsx;
                          obj11 = { url: null, height: 32, style: null };
                          obj11.url = complex_icon_static_url;
                          items1 = [, ];
                          items1[0] = tmp7.icon;
                          tmp11 = closure_1(tmp3[10]);
                          if (dimmedIcon) {
                            dimmedIcon = tmp7.dimmedIcon;
                          }
                          items1[1] = dimmedIcon;
                          obj11.style = items1;
                          tmp9Result = tmp9(tmp11, obj11);
                        }
                        items2 = [, , ];
                        items2[0] = tmp9Result;
                        tmp13Result = null != badge.name;
                        if (tmp13Result) {
                          tmp13 = jsx;
                          str = "text-muted";
                          Text = tmp2(tmp3[7]).Text;
                          if (owned) {
                            str = "text-default";
                          }
                          obj12 = { variant: "text-sm/semibold", color: null, style: null, children: null };
                          obj12.color = str;
                          obj12.style = tmp7.centeredText;
                          obj12.children = badge.name;
                          tmp13Result = tmp13(Text, obj12);
                        }
                        items2[1] = tmp13Result;
                        tmp5Result = "" !== tierRowSubtitle;
                        if (tmp5Result) {
                          obj13 = { style: null, children: null };
                          obj13.style = tmp7.subtitleRow;
                          tmp15 = !owned;
                          if (tmp15) {
                            tmp16 = jsx;
                            obj14 = { size: "xxs", color: null };
                            tmp17 = closure_1;
                            LockIcon = tmp2(tmp3[11]).LockIcon;
                            obj14.color = closure_1(tmp3[4]).colors.ICON_MUTED;
                            tmp15 = jsx(LockIcon, obj14);
                          }
                          items3 = [, ];
                          items3[0] = tmp15;
                          tmp18 = jsx;
                          str2 = "text-muted";
                          Text2 = tmp2(tmp3[7]).Text;
                          if (owned) {
                            str2 = "text-default";
                          }
                          obj15 = { variant: "text-sm/normal", color: null, style: null, children: null };
                          obj15.color = str2;
                          obj15.style = tmp7.centeredText;
                          obj15.children = tierRowSubtitle;
                          items3[1] = tmp18(Text2, obj15);
                          obj13.children = items3;
                          tmp5Result = tmp5(tmp6, obj13);
                        }
                        items2[2] = tmp5Result;
                        obj10.children = items2;
                        return tmp5(tmp6, obj10, badge.key);
                      }
                    }
                    cResult[8] = isViewingOtherUser;
                    cResult[9] = tmp4.centeredText;
                    cResult[10] = tmp4.dimmedIcon;
                    cResult[11] = tmp4.icon;
                    cResult[12] = tmp4.item;
                    cResult[13] = tmp4.subtitleRow;
                    cResult[14] = arr;
                    cResult[15] = mapped;
                    tmp12 = mapped;
                  }
                }
              }
            }
          }
        }
      }
      class I {
        constructor(arg0) {
          owned = badge.owned;
          dimmedIcon = !owned;
          if (dimmedIcon) {
            tmp = badge;
            dimmedIcon = badge.owned;
          }
          complex_icon_static_url = badge.simple_icon_url;
          if (complex_icon_static_url == null) {
            complex_icon_static_url = badge.complex_icon_static_url;
          }
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          obj1 = { tier: badge, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: closure_2 };
          tierRowSubtitle = obj.getTierRowSubtitle(obj1);
          intl = closure_0(closure_2[8]).intl;
          string = intl.string;
          t = closure_0(closure_2[8]).t;
          items = [, , ];
          items[0] = badge.name;
          items[1] = tierRowSubtitle;
          items[2] = string(owned ? t.sTFApF : t.uHtDcT);
          found = items.filter(() => { /* body not rendered: F139294 */ });
          tmp5 = jsxs;
          tmp6 = View;
          obj10 = { style: closure_3.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
          tmp7 = closure_3;
          tmp9Result = null != complex_icon_static_url;
          if (tmp9Result) {
            tmp10 = closure_1;
            tmp9 = jsx;
            obj11 = { url: null, height: 32, style: null };
            obj11.url = complex_icon_static_url;
            items1 = [, ];
            items1[0] = tmp7.icon;
            tmp11 = closure_1(tmp3[10]);
            if (dimmedIcon) {
              dimmedIcon = tmp7.dimmedIcon;
            }
            items1[1] = dimmedIcon;
            obj11.style = items1;
            tmp9Result = tmp9(tmp11, obj11);
          }
          items2 = [, , ];
          items2[0] = tmp9Result;
          tmp13Result = null != badge.name;
          if (tmp13Result) {
            tmp13 = jsx;
            str = "text-muted";
            Text = tmp2(tmp3[7]).Text;
            if (owned) {
              str = "text-default";
            }
            obj12 = { variant: "text-sm/semibold", color: null, style: null, children: null };
            obj12.color = str;
            obj12.style = tmp7.centeredText;
            obj12.children = badge.name;
            tmp13Result = tmp13(Text, obj12);
          }
          items2[1] = tmp13Result;
          tmp5Result = "" !== tierRowSubtitle;
          if (tmp5Result) {
            obj13 = { style: null, children: null };
            obj13.style = tmp7.subtitleRow;
            tmp15 = !owned;
            if (tmp15) {
              tmp16 = jsx;
              obj14 = { size: "xxs", color: null };
              tmp17 = closure_1;
              LockIcon = tmp2(tmp3[11]).LockIcon;
              obj14.color = closure_1(tmp3[4]).colors.ICON_MUTED;
              tmp15 = jsx(LockIcon, obj14);
            }
            items3 = [, ];
            items3[0] = tmp15;
            tmp18 = jsx;
            str2 = "text-muted";
            Text2 = tmp2(tmp3[7]).Text;
            if (owned) {
              str2 = "text-default";
            }
            obj15 = { variant: "text-sm/normal", color: null, style: null, children: null };
            obj15.color = str2;
            obj15.style = tmp7.centeredText;
            obj15.children = tierRowSubtitle;
            items3[1] = tmp18(Text2, obj15);
            obj13.children = items3;
            tmp5Result = tmp5(tmp6, obj13);
          }
          items2[2] = tmp5Result;
          obj10.children = items2;
          return tmp5(tmp6, obj10, badge.key);
        }
      }
      cResult[16] = badge.owned;
      cResult[17] = isViewerOnUpgradeableNitro;
      cResult[18] = isViewingOtherUser;
      cResult[19] = tmp4.centeredText;
      cResult[20] = tmp4.dimmedIcon;
      cResult[21] = tmp4.icon;
      cResult[22] = tmp4.item;
      cResult[23] = tmp4.subtitleRow;
      cResult[24] = I;
      tmp13 = I;
    }
  }
  let tmp8 = tmp5;
  if (tmp8) {
    let tmp9 = closure_4;
    let obj4 = { variant: "text-sm/medium", color: "text-default", style: tmp4.progressLabel, children: tmp10(tmp(tmp2[8]).t.KyTwIh, obj5) };
    let Text = tmp(tmp2[7]).Text;
    let intl = tmp(tmp2[8]).intl;
    class I {
      constructor(arg0) {
        owned = badge.owned;
        dimmedIcon = !owned;
        if (dimmedIcon) {
          tmp = badge;
          dimmedIcon = badge.owned;
        }
        complex_icon_static_url = badge.simple_icon_url;
        if (complex_icon_static_url == null) {
          complex_icon_static_url = badge.complex_icon_static_url;
        }
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[9]);
        obj1 = { tier: badge, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: closure_2 };
        tierRowSubtitle = obj.getTierRowSubtitle(obj1);
        intl = closure_0(closure_2[8]).intl;
        string = intl.string;
        t = closure_0(closure_2[8]).t;
        items = [, , ];
        items[0] = badge.name;
        items[1] = tierRowSubtitle;
        items[2] = string(owned ? t.sTFApF : t.uHtDcT);
        found = items.filter(() => { /* body not rendered: F139294 */ });
        tmp5 = jsxs;
        tmp6 = View;
        obj10 = { style: closure_3.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
        tmp7 = closure_3;
        tmp9Result = null != complex_icon_static_url;
        if (tmp9Result) {
          tmp10 = closure_1;
          tmp9 = jsx;
          obj11 = { url: null, height: 32, style: null };
          obj11.url = complex_icon_static_url;
          items1 = [, ];
          items1[0] = tmp7.icon;
          tmp11 = closure_1(tmp3[10]);
          if (dimmedIcon) {
            dimmedIcon = tmp7.dimmedIcon;
          }
          items1[1] = dimmedIcon;
          obj11.style = items1;
          tmp9Result = tmp9(tmp11, obj11);
        }
        items2 = [, , ];
        items2[0] = tmp9Result;
        tmp13Result = null != badge.name;
        if (tmp13Result) {
          tmp13 = jsx;
          str = "text-muted";
          Text = tmp2(tmp3[7]).Text;
          if (owned) {
            str = "text-default";
          }
          obj12 = { variant: "text-sm/semibold", color: null, style: null, children: null };
          obj12.color = str;
          obj12.style = tmp7.centeredText;
          obj12.children = badge.name;
          tmp13Result = tmp13(Text, obj12);
        }
        items2[1] = tmp13Result;
        tmp5Result = "" !== tierRowSubtitle;
        if (tmp5Result) {
          obj13 = { style: null, children: null };
          obj13.style = tmp7.subtitleRow;
          tmp15 = !owned;
          if (tmp15) {
            tmp16 = jsx;
            obj14 = { size: "xxs", color: null };
            tmp17 = closure_1;
            LockIcon = tmp2(tmp3[11]).LockIcon;
            obj14.color = closure_1(tmp3[4]).colors.ICON_MUTED;
            tmp15 = jsx(LockIcon, obj14);
          }
          items3 = [, ];
          items3[0] = tmp15;
          tmp18 = jsx;
          str2 = "text-muted";
          Text2 = tmp2(tmp3[7]).Text;
          if (owned) {
            str2 = "text-default";
          }
          obj15 = { variant: "text-sm/normal", color: null, style: null, children: null };
          obj15.color = str2;
          obj15.style = tmp7.centeredText;
          obj15.children = tierRowSubtitle;
          items3[1] = tmp18(Text2, obj15);
          obj13.children = items3;
          tmp5Result = tmp5(tmp6, obj13);
        }
        items2[2] = tmp5Result;
        obj10.children = items2;
        return tmp5(tmp6, obj10, badge.key);
      }
    }
    obj5 = { username: targetUsername };
    tmp8 = closure_4(Text, obj4);
  }
  cResult[0] = tmp5;
  cResult[1] = tmp4.progressLabel;
  cResult[2] = targetUsername;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((badge) => {
  let intl;
  let isViewerOnUpgradeableNitro;
  let items;
  let obj3;
  let targetUsername;
  let tiers;
  badge = badge.badge;
  let isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro: dependencyMap } = badge);
  let tmp = closure_6();
  const item = tmp;
  let obj = { style: tmp.section, children: items };
  const tmp2 = closure_5;
  if (isViewingOtherUser) {
    isViewingOtherUser = null != targetUsername;
  }
  if (isViewingOtherUser) {
    const tmp5 = closure_4;
    const tmp6 = badge;
    const tmp7 = dependencyMap;
    let obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.progressLabel, children: intl.formatToPlainString(badge(1127).t.KyTwIh, obj3) };
    let Text = badge(4833).Text;
    intl = badge(1127).intl;
    obj3 = { username: targetUsername };
    isViewingOtherUser = closure_4(Text, obj2);
  }
  items = [isViewingOtherUser, ];
  let obj4 = {
    style: tmp.grid,
    accessibilityRole: "list",
    children: tiers.map((owned) => {
      let items1;
      let items2;
      let items3;
      owned = owned.owned;
      let dimmedIcon = !owned;
      if (dimmedIcon) {
        dimmedIcon = badge.owned;
      }
      let complex_icon_static_url = owned.simple_icon_url;
      if (complex_icon_static_url == null) {
        complex_icon_static_url = owned.complex_icon_static_url;
      }
      const obj = BadgeUtils;
      const obj2 = { tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: dependencyMap };
      const tierRowSubtitle = obj.getTierRowSubtitle(obj2);
      const intl = intl2.intl;
      const string = intl.string;
      const t = intl2.t;
      const items = [owned.name, tierRowSubtitle, string(owned ? t.sTFApF : t.uHtDcT)];
      const found = items.filter((item) => null != item && "" !== item);
      let tmp9Result = null != complex_icon_static_url;
      const obj3 = { style: item.item, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
      if (tmp9Result) {
        const obj4 = { url: complex_icon_static_url, height: 32, style: items1 };
        items1 = [item.icon, ];
        const tmp11 = BadgeArtImageDefault;
        const tmp9 = React3;
        if (dimmedIcon) {
          dimmedIcon = tmp7.dimmedIcon;
        }
        items1[1] = dimmedIcon;
        tmp9Result = tmp9(tmp11, obj4);
      }
      items2 = [tmp9Result, , ];
      let tmp13Result = null != owned.name;
      if (tmp13Result) {
        let str = "text-muted";
        const Text = tmp2(4833).Text;
        const tmp13 = React3;
        if (owned) {
          str = "text-default";
        }
        const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
        tmp13Result = tmp13(Text, obj5);
      }
      items2[1] = tmp13Result;
      let tmp5Result = "" !== tierRowSubtitle;
      if (tmp5Result) {
        let tmp15 = !owned;
        const obj6 = { style: item.subtitleRow, children: items3 };
        if (tmp15) {
          const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
          const LockIcon = tmp2(5410).LockIcon;
          tmp15 = React3(LockIcon, obj7);
        }
        items3 = [tmp15, ];
        let str2 = "text-muted";
        const Text2 = tmp2(4833).Text;
        const tmp18 = React3;
        if (owned) {
          str2 = "text-default";
        }
        const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
        items3[1] = tmp18(Text2, obj8);
        tmp5Result = tmp5(tmp6, obj6);
      }
      items2[2] = tmp5Result;
      return hasOwnProperty(View, obj3, owned.key);
    })
  };
  tiers = badge.tiers;
  const tmp8 = closure_4;
  if (tiers == null) {
    tiers = [];
  }
  items[1] = tmp8(item, obj4);
  return tmp2(item, obj);
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeTierGrid.tsx");

export default tmp5;
