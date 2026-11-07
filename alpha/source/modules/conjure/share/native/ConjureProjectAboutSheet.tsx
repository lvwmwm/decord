// Module ID: 12998
// Function ID: 12999
// Name: ConjureProjectAboutSheet
// Dependencies: [5, 19, 17, 21, 5140, 575, 12999, 9069, 9767, 13000, 5374, 12997, 1113, 4026, 7426, 7382, 7355, 5392, 13004, 5751, 13005, 13006, 6159, 13007, 5194, 13009, 5758, 2]
// Exports: default

// Module 12998 (ConjureProjectAboutSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4026 from "module_4026" /* 4026 */;
import UserUtils from "UserUtils" /* 5194 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9069 */;
import openConjureProjectAboutSheet from "openConjureProjectAboutSheet" /* 12997 */;
import useConjureSharedProjectDefault from "useConjureSharedProject" /* 12999 */;
import useConjureSharedProjectCoverActionDefault from "useConjureSharedProjectCoverAction" /* 13000 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 13005 */;
import conjureSharedProjectSurfaces from "conjureSharedProjectSurfaces" /* 13006 */;
import useConjureProjectCreator from "useConjureProjectCreator" /* 13007 */;
import openConjureSharedProjectRemixSheetDefault from "openConjureSharedProjectRemixSheet" /* 13009 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let c1, c2;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function Surfaces(project) {
  let intl;
  let items;
  project = project.project;
  let supported_surfaces = project.supported_surfaces;
  const conjureSharedProjectSurfaceLabels = conjureSharedProjectSurfaces.conjureSharedProjectSurfaceLabels;
  conjureSharedProjectSurfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  const result = conjureSharedProjectSurfaceLabels(supported_surfaces);
  let tmp4 = null;
  if (0 !== result.length) {
    const obj = { spacing: nativeDefault.space.PX_4, children: items };
    const Stack = tmp(6159).Stack;
    const obj2 = { variant: "body-xs/semibold", color: "text-muted", children: intl.string(_modDef4026["cF++B3"]) };
    const Text = tmp(5751).Text;
    intl = tmp(1113).intl;
    items = [metroRequire(Text, obj2), ];
    const obj3 = { variant: "body-sm/normal", color: "text-default", children: result.join(" \u00B7 ") };
    const Text2 = tmp(5751).Text;
    items[1] = metroRequire(Text2, obj3);
    tmp4 = metroImportDefault(Stack, obj);
  }
  return tmp4;
}
function Creator(project) {
  let formatToPlainString;
  let obj3;
  let prop;
  let tmpResult;
  project = project.project;
  const obj = useConjureProjectCreator;
  const creator = obj.useConjureProjectPeople(project).creator;
  let tmp3 = null;
  if (null != creator) {
    const obj2 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 1, children: formatToPlainString(prop, obj3) };
    const Text = tmp(5751).Text;
    const intl = tmp(1113).intl;
    formatToPlainString = intl.formatToPlainString;
    obj3 = { name: tmpResult.getName(creator) };
    prop = _modDef4026["6/x9LD"];
    tmpResult = UserUtils;
    tmp3 = metroRequire(Text, obj2);
  }
  return tmp3;
}
function RemixActions(project) {
  let intl;
  let intl2;
  let items1;
  project = project.project;
  const guildId = project.guildId;
  const ticket = project.ticket;
  const items = [guildId, project, ticket];
  let closure_3 = react.useCallback((arg0) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openConjureProjectAboutSheet.CONJURE_PROJECT_ABOUT_SHEET_KEY);
    openConjureSharedProjectRemixSheetDefault(project, guildId, arg0, ticket);
  }, items);
  let obj = { direction: "horizontal", spacing: guildId(ticket[5]).space.PX_8, children: items1 };
  const Stack = project(ticket[22]).Stack;
  const obj2 = {
    grow: true,
    variant: "secondary",
    size: "md",
    text: intl.string(guildId(ticket[13])["6RGR3m"]),
    onPress() {
      return closure_3("remix");
    }
  };
  const Button = project(ticket[26]).Button;
  intl = project(ticket[12]).intl;
  items1 = [closure_6(Button, obj2), ];
  const obj3 = {
    grow: true,
    variant: "primary",
    size: "md",
    text: intl2.string(guildId(ticket[13])["UsUa/c"]),
    onPress() {
      return closure_3("copy");
    }
  };
  const Button2 = project(ticket[26]).Button;
  intl2 = project(ticket[12]).intl;
  items1[1] = closure_6(Button2, obj3);
  return closure_7(Stack, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, body: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 }, identity: { flexDirection: "row", gap: nativeDefault.space.PX_12 }, details: { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 });
  ({ flexDirection: "row", gap: nativeDefault.space.PX_12 });
  ({ flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/share/native/ConjureProjectAboutSheet.tsx");

export default function ConjureProjectAboutSheet(arg0) {
  let BottomSheetScrollView;
  let SafeAreaPaddingView;
  let application;
  let applicationId;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let launchFailed;
  let launching;
  let name;
  let obj4;
  let obj5;
  let obj6;
  let onLayout;
  let ref;
  let source;
  let str5;
  let ticket;
  let tmp14Result;
  let type;
  ({ applicationId, source, ticket } = arg0);
  if (ticket === undefined) {
    ticket = null;
  }
  let run;
  const tmp2 = dependencyMap;
  const tmp3 = useConjureSharedProjectDefault(applicationId, ticket);
  const tmp4 = useMeasuredLayoutDefault();
  const height = tmp4.height;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  const tmp5 = closure_9;
  if (undefined !== height) {
    num = height;
  }
  const tmp5Result = tmp5(num);
  let project = null;
  if ("ready" === tmp3.type) {
    project = null;
    if (tmp3.canRemix) {
      project = tmp3.project;
    }
  }
  let obj = run(9767);
  let tmp9 = null;
  if (obj.useIsConjureMobileEnabled(null != project, "ConjureProjectAboutSheet")) {
    tmp9 = project;
  }
  if ("ready" === tmp3.type) {
    application = tmp3.application;
  } else {
    application = null;
  }
  let project1 = null;
  if ("ready" === tmp3.type) {
    project1 = tmp3.project;
  }
  const tmp12 = useConjureSharedProjectCoverActionDefault(applicationId, project1, source);
  run = tmp12.run;
  ({ type, launching, launchFailed } = tmp12);
  const items = [run];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 1;
            c2 = 1;
            const obj4 = { value: run(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            const obj = c1(c2[10]);
            obj.hideActionSheet(tmp3(c2[11]).CONJURE_PROJECT_ABOUT_SHEET_KEY);
          }
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  }), items);
  if (null != application) {
    name = application.name;
  } else if ("loading" === tmp3.type) {
    const intl2 = tmp8(1113).intl;
    name = intl2.string(tmp8(1113).t.ZTNur7);
  } else {
    let mQma36;
    const intl = tmp8(1113).intl;
    const string = intl.string;
    if ("expired" === tmp3.type) {
      mQma36 = tmp(4026).wahvH2;
    } else {
      mQma36 = tmp(4026).mQma36;
    }
    name = string(mQma36);
  }
  let obj2 = { scrollable: true, header: closure_6(run(7382).BottomSheetTitleHeader, { title: name }), footer: tmp14Result, children: closure_7(BottomSheetScrollView, obj6) };
  const ActionSheet = tmp8(7426).ActionSheet;
  tmp14Result = undefined;
  if (null != tmp9) {
    let obj3 = { style: tmp5Result.footer, ref, onLayout, children: closure_6(SafeAreaPaddingView, obj4) };
    obj4 = { bottom: true, children: closure_6(RemixActions, obj5) };
    obj5 = { project: tmp9, guildId: source.guildId, ticket };
    SafeAreaPaddingView = tmp8(7355).SafeAreaPaddingView;
    tmp14Result = tmp14(View, obj3);
  }
  let tmp18Result = null;
  obj6 = { style: tmp5Result.scroll, contentContainerStyle: tmp5Result.body, children: items4 };
  BottomSheetScrollView = tmp8(5392).BottomSheetScrollView;
  if (null != application) {
    const obj7 = { application, action: type, launching, onPress: callback };
    const items1 = [closure_6(tmp(13004), obj7), , ];
    let tmp14Result4 = null;
    const tmp20 = closure_8;
    if (launchFailed) {
      const obj8 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl3.string(_modDef4026.hh2nuX) };
      const Text = tmp8(5751).Text;
      intl3 = tmp8(1113).intl;
      tmp14Result4 = tmp14(Text, obj8);
    }
    items1[1] = tmp14Result4;
    const obj9 = { style: tmp5Result.identity, children: items2 };
    const obj10 = { application, radius: nativeDefault.radii.sm };
    const tmpResult = ConjureAppSheetIconDefault;
    items2 = [closure_6(tmpResult, obj10), ];
    const obj11 = { style: tmp5Result.details, children: items3 };
    const obj12 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: application.name };
    items3 = [closure_6(run(5751).Text, obj12), ];
    let tmp14Result5 = null;
    if (null != application.description) {
      tmp14Result5 = null;
      const str3 = application.description;
      if ("" !== str3.trim()) {
        const obj13 = { variant: "body-sm/normal", color: "text-default", children: str5.trim() };
        str5 = application.description;
        const Text2 = tmp8(5751).Text;
        tmp14Result5 = tmp14(Text2, obj13);
      }
    }
    const obj14 = { children: items1 };
    items3[1] = tmp14Result5;
    items2[1] = closure_7(View, obj11);
    items1[2] = closure_7(View, obj9);
    tmp18Result = tmp18(tmp20, obj14);
  }
  items4 = [tmp18Result, , ];
  let tmp18Result2 = null;
  if ("ready" === tmp3.type) {
    const obj15 = { children: items5 };
    const obj16 = { project: tmp3.project };
    items5 = [closure_6(Surfaces, obj16), ];
    const obj17 = { project: tmp3.project };
    items5[1] = closure_6(Creator, obj17);
    tmp18Result2 = tmp18(closure_8, obj15);
  }
  items4[1] = tmp18Result2;
  let tmp14Result6 = null;
  if ("info_only" === tmp3.type) {
    const obj18 = { variant: "body-sm/normal", color: "text-muted", children: intl4.string(_modDef4026["2DSRxV"]) };
    const Text3 = tmp8(5751).Text;
    intl4 = tmp8(1113).intl;
    tmp14Result6 = tmp14(Text3, obj18);
  }
  items4[2] = tmp14Result6;
  return closure_6(ActionSheet, obj2);
};
