// Module ID: 9579
// Function ID: 9580
// Name: oauth2/Header
// Dependencies: [19, 17, 1078, 21, 4790, 580, 558, 568, 1401, 1181, 4786, 9580, 1389, 1119, 2]

// Module 9579 (oauth2/Header)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import Text_Text from "Text/Text" /* 4786 */;
import BotTagDefault from "BotTag" /* 9580 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserFlags = fn(1078).UserFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4790);
let obj2 = { header: { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" }, applicationNameWrapper: { flexDirection: "row" }, headerIcons: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }, ellipseGroup: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 }, ellipse: null, botTag: null };
let size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
obj2.ellipse = size;
obj2.botTag = { marginTop: 4, marginLeft: 8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" };
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(41);
  ({ user, application, accountScopes, bot } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === application.icon) {
    if (cResult[1] === application.id) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== user) {
      let userAvatarSource;
      if (null != user) {
        userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(user);
      }
      cResult[3] = user;
      cResult[4] = userAvatarSource;
      let tmp7 = userAvatarSource;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp5) {
      const obj3 = { source: tmp5, size: tmp(1181).AvatarSizes.XLARGE };
      const tmp13 = hasOwnProperty(tmp(1181).Avatar, obj3);
      cResult[5] = tmp5;
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp4.ellipse) {
      const obj5 = { style: tmp4.ellipse };
      const tmp19 = hasOwnProperty(View, obj5);
      const obj6 = { style: tmp4.ellipse };
      const tmp20 = hasOwnProperty(View, obj6);
      const obj7 = { style: tmp4.ellipse };
      const tmp21 = hasOwnProperty(View, obj7);
      cResult[7] = tmp4.ellipse;
      cResult[8] = tmp19;
      cResult[9] = tmp20;
      cResult[10] = tmp21;
      let tmp16 = tmp21;
      let tmp15 = tmp20;
      let tmp14 = tmp19;
    } else {
      tmp14 = cResult[8];
      tmp15 = cResult[9];
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4.ellipseGroup) {
      if (cResult[12] === tmp14) {
        if (cResult[13] === tmp15) {
          if (cResult[14] === tmp16) {
            let tmp22 = cResult[15];
          }
          if (cResult[16] !== tmp7) {
            const obj8 = { source: tmp7, size: tmp(1181).AvatarSizes.XLARGE };
            const tmp28 = hasOwnProperty(tmp(1181).Avatar, obj8);
            cResult[16] = tmp7;
            cResult[17] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[17];
          }
          if (cResult[18] === tmp4.headerIcons) {
            if (cResult[19] === tmp11) {
              if (cResult[20] === tmp22) {
                if (cResult[21] === tmp26) {
                  let tmp29 = cResult[22];
                }
                if (cResult[23] !== application.name) {
                  const obj9 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name };
                  const tmp35 = hasOwnProperty(tmp(4786).Text, obj9);
                  cResult[23] = application.name;
                  cResult[24] = tmp35;
                  let tmp33 = tmp35;
                } else {
                  tmp33 = cResult[24];
                }
                if (cResult[25] === bot) {
                  if (cResult[26] === tmp4.botTag) {
                    let tmp36 = cResult[27];
                  }
                  if (cResult[28] === tmp4.applicationNameWrapper) {
                    if (cResult[29] === tmp33) {
                      if (cResult[30] === tmp36) {
                        let tmp44 = cResult[31];
                      }
                      if (cResult[32] !== accountScopes.length) {
                        if (accountScopes.length > 0) {
                          const intl2 = tmp(1119).intl;
                          let stringResult = intl2.string(tmp(1119).t.jFbDnJ);
                        } else {
                          const intl = tmp(1119).intl;
                          stringResult = intl.string(tmp(1119).t["X+Fdpo"]);
                        }
                        accountScopes = accountScopes.length;
                        cResult[32] = accountScopes;
                        cResult[33] = stringResult;
                      } else {
                        if (cResult[34] !== cResult[33]) {
                          const obj10 = { variant: "heading-md/normal", color: "text-default", children: tmp48 };
                          const tmp53 = hasOwnProperty(tmp(4786).Text, obj10);
                          cResult[34] = tmp48;
                          cResult[35] = tmp53;
                          let tmp51 = tmp53;
                        } else {
                          tmp51 = cResult[35];
                        }
                        if (cResult[36] === tmp4.header) {
                          if (cResult[37] === tmp44) {
                            if (cResult[38] === tmp51) {
                              if (cResult[39] === tmp29) {
                                let tmp54 = cResult[40];
                              }
                              return tmp54;
                            }
                          }
                        }
                        const obj11 = { style: tmp4.header, children: null };
                        const items = [tmp29, tmp44, tmp51];
                        obj11.children = items;
                        const tmp57 = timestampProducer(View, obj11);
                        cResult[36] = tmp4.header;
                        cResult[37] = tmp44;
                        cResult[38] = tmp51;
                        cResult[39] = tmp29;
                        cResult[40] = tmp57;
                        tmp54 = tmp57;
                      }
                    }
                  }
                  const obj12 = { style: tmp4.applicationNameWrapper, children: null };
                  const items1 = [tmp33, tmp36];
                  obj12.children = items1;
                  const tmp47 = timestampProducer(View, obj12);
                  cResult[28] = tmp4.applicationNameWrapper;
                  cResult[29] = tmp33;
                  cResult[30] = tmp36;
                  cResult[31] = tmp47;
                  tmp44 = tmp47;
                }
                let tmp39Result = null;
                if (null != bot) {
                  const obj13 = { style: tmp4.botTag, verified: null };
                  let hasFlagResult = null != bot.public_flags;
                  if (hasFlagResult) {
                    hasFlagResult = tmp(1389).hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
                    const tmpResult = tmp(1389);
                  }
                  obj13.verified = hasFlagResult;
                  tmp39Result = hasOwnProperty(BotTagDefault, obj13);
                }
                cResult[25] = bot;
                cResult[26] = tmp4.botTag;
                cResult[27] = tmp39Result;
                tmp36 = tmp39Result;
              }
            }
          }
          const obj14 = { style: tmp4.headerIcons, children: null };
          const items2 = [tmp11, tmp22, tmp26];
          obj14.children = items2;
          const tmp32 = timestampProducer(View, obj14);
          cResult[18] = tmp4.headerIcons;
          cResult[19] = tmp11;
          cResult[20] = tmp22;
          cResult[21] = tmp26;
          cResult[22] = tmp32;
          tmp29 = tmp32;
        }
      }
    }
    const obj15 = { style: tmp4.ellipseGroup, children: null };
    const items3 = [tmp14, tmp15, tmp16];
    obj15.children = items3;
    const tmp25 = timestampProducer(View, obj15);
    cResult[11] = tmp4.ellipseGroup;
    cResult[12] = tmp14;
    cResult[13] = tmp15;
    cResult[14] = tmp16;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon });
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  tmp5 = applicationIconSource;
}) : ((accountScopes) => {
  ({ user, application, bot } = accountScopes);
  const tmp = closure_7();
  let userAvatarSource;
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon });
  if (null != user) {
    userAvatarSource = tmp2(1401).getUserAvatarSource(user);
    const tmp2Result = tmp2(1401);
  }
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.headerIcons, children: null };
  const obj2 = { id: application.id, icon: application.icon };
  const items = [hasOwnProperty(native.Avatar, { source: applicationIconSource, size: native.AvatarSizes.XLARGE }), , ];
  const obj6 = { style: tmp.ellipseGroup, children: null };
  const items1 = [hasOwnProperty(View, { style: tmp.ellipse }), hasOwnProperty(View, { style: tmp.ellipse }), hasOwnProperty(View, { style: tmp.ellipse })];
  obj6.children = items1;
  items[1] = timestampProducer(View, obj6);
  const obj5 = { source: applicationIconSource, size: native.AvatarSizes.XLARGE };
  const obj7 = { style: tmp.ellipse };
  const obj8 = { style: tmp.ellipse };
  const obj9 = { style: tmp.ellipse };
  items[2] = hasOwnProperty(native.Avatar, { source: userAvatarSource, size: native.AvatarSizes.XLARGE });
  obj4.children = items;
  const items2 = [timestampProducer(View, obj4), , ];
  const obj11 = { style: tmp.applicationNameWrapper, children: null };
  const items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  let tmp8Result = null;
  if (null != bot) {
    const obj13 = { style: tmp.botTag, verified: null };
    let hasFlagResult = null != bot.public_flags;
    if (hasFlagResult) {
      hasFlagResult = tmp9(1389).hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const tmp9Result = tmp9(1389);
    }
    obj13.verified = hasFlagResult;
    tmp8Result = tmp8(tmp2(9580), obj13);
    const tmp2Result2 = tmp2(9580);
  }
  items3[1] = tmp8Result;
  obj11.children = items3;
  items2[1] = timestampProducer(View, obj11);
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = tmp9(1119).intl;
    let stringResult = intl2.string(tmp9(1119).t.jFbDnJ);
  } else {
    const intl = tmp9(1119).intl;
    stringResult = intl.string(tmp9(1119).t["X+Fdpo"]);
  }
  items2[2] = hasOwnProperty(Text_Text.Text, { variant: "heading-md/normal", color: "text-default", children: stringResult });
  obj3.children = items2;
  return timestampProducer(View, obj3);
});
