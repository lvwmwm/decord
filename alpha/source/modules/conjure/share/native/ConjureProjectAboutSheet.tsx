// Module ID: 12324
// Function ID: 12325
// Name: ConjureProjectAboutSheet
// Dependencies: [5, 19, 17, 21, 5012, 575, 12325, 8444, 11441, 12326, 5226, 12323, 1112, 4244, 7515, 7476, 7449, 12329, 5603, 11508, 11948, 6084, 12330, 11514, 12332, 5610, 2]
// Exports: default

// Module 12324 (ConjureProjectAboutSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 8444 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 11508 */;
import ConjureCreatorBylineDefault from "ConjureCreatorByline" /* 11514 */;
import conjureSharedProjectSurfaces from "conjureSharedProjectSurfaces" /* 11948 */;
import openConjureProjectAboutSheet from "openConjureProjectAboutSheet" /* 12323 */;
import useConjureSharedProjectDefault from "useConjureSharedProject" /* 12325 */;
import useConjureSharedProjectCoverActionDefault from "useConjureSharedProjectCoverAction" /* 12326 */;
import useConjureProjectCreator from "useConjureProjectCreator" /* 12330 */;
import openConjureSharedProjectRemixSheetDefault from "openConjureSharedProjectRemixSheet" /* 12332 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
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
    const Stack = tmp(6084).Stack;
    const obj2 = { variant: "body-xs/semibold", color: "text-muted", children: intl.string(_modDef4244["cF++B3"]) };
    const Text = tmp(5603).Text;
    intl = tmp(1112).intl;
    items = [metroRequire(Text, obj2), ];
    const obj3 = { variant: "body-sm/normal", color: "text-default", children: result.join(" \u00B7 ") };
    const Text2 = tmp(5603).Text;
    items[1] = metroRequire(Text2, obj3);
    tmp4 = metroImportDefault(Stack, obj);
  }
  return tmp4;
}
function Creator(arg0) {
  let guildId;
  let project;
  ({ project, guildId } = arg0);
  const obj = useConjureProjectCreator;
  const creator = obj.useConjureProjectPeople(project).creator;
  let tmp2 = null;
  if (null != creator) {
    const obj2 = { creator, guildId };
    tmp2 = metroRequire(ConjureCreatorBylineDefault, obj2);
  }
  return tmp2;
}
function RemixActions(project) {
  let intl;
  project = project.project;
  const guildId = project.guildId;
  const ticket = project.ticket;
  const items = [guildId, project, ticket];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openConjureProjectAboutSheet.CONJURE_PROJECT_ABOUT_SHEET_KEY);
    openConjureSharedProjectRemixSheetDefault(project, guildId, ticket);
  }, items);
  let obj = { variant: "primary", size: "md", text: intl.string(guildId(ticket[13]).XWgAfc), onPress: callback };
  const Button = project(ticket[25]).Button;
  intl = project(ticket[12]).intl;
  return closure_6(Button, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { body: { gap: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 }, identity: { flexDirection: "row", gap: nativeDefault.space.PX_12 }, details: { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 });
  ({ flexDirection: "row", gap: nativeDefault.space.PX_12 });
  ({ flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/share/native/ConjureProjectAboutSheet.tsx");

export default function ConjureProjectAboutSheet(arg0) {
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
  let obj = run(11441);
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
    const intl2 = tmp8(1112).intl;
    name = intl2.string(tmp8(1112).t.ZTNur7);
  } else {
    let mQma36;
    const intl = tmp8(1112).intl;
    const string = intl.string;
    if ("expired" === tmp3.type) {
      mQma36 = tmp(4244).wahvH2;
    } else {
      mQma36 = tmp(4244).mQma36;
    }
    name = string(mQma36);
  }
  let obj2 = { header: closure_6(run(7476).BottomSheetTitleHeader, { title: name }), footer: tmp14Result, children: closure_7(View, obj6) };
  const ActionSheet = tmp8(7515).ActionSheet;
  tmp14Result = undefined;
  if (null != tmp9) {
    let obj3 = { style: tmp5Result.footer, ref, onLayout, children: closure_6(SafeAreaPaddingView, obj4) };
    obj4 = { bottom: true, children: closure_6(RemixActions, obj5) };
    obj5 = { project: tmp9, guildId: source.guildId, ticket };
    SafeAreaPaddingView = tmp8(7449).SafeAreaPaddingView;
    tmp14Result = tmp14(View, obj3);
  }
  let tmp18Result = null;
  obj6 = { style: tmp5Result.body, children: items4 };
  if (null != application) {
    const obj7 = { application, action: type, launching, onPress: callback };
    const items1 = [closure_6(tmp(12329), obj7), , ];
    let tmp14Result4 = null;
    const tmp21 = closure_8;
    if (launchFailed) {
      const obj8 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl3.string(_modDef4244.hh2nuX) };
      const Text = tmp8(5603).Text;
      intl3 = tmp8(1112).intl;
      tmp14Result4 = tmp14(Text, obj8);
    }
    items1[1] = tmp14Result4;
    const obj9 = { style: tmp5Result.identity, children: items2 };
    const obj10 = { application, radius: nativeDefault.radii.sm };
    const tmpResult = ConjureAppSheetIconDefault;
    items2 = [closure_6(tmpResult, obj10), ];
    const obj11 = { style: tmp5Result.details, children: items3 };
    const obj12 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: application.name };
    items3 = [closure_6(run(5603).Text, obj12), ];
    let tmp14Result5 = null;
    if (null != application.description) {
      tmp14Result5 = null;
      const str3 = application.description;
      if ("" !== str3.trim()) {
        const obj13 = { variant: "body-sm/normal", color: "text-default", children: str5.trim() };
        str5 = application.description;
        const Text2 = tmp8(5603).Text;
        tmp14Result5 = tmp14(Text2, obj13);
      }
    }
    const obj14 = { children: items1 };
    items3[1] = tmp14Result5;
    items2[1] = closure_7(View, obj11);
    items1[2] = closure_7(View, obj9);
    tmp18Result = tmp18(tmp21, obj14);
  }
  items4 = [tmp18Result, , ];
  let tmp18Result2 = null;
  if ("ready" === tmp3.type) {
    const obj15 = { children: items5 };
    const obj16 = { project: tmp3.project };
    items5 = [closure_6(Surfaces, obj16), ];
    const obj17 = { project: tmp3.project, guildId: source.guildId };
    items5[1] = closure_6(Creator, obj17);
    tmp18Result2 = tmp18(closure_8, obj15);
  }
  items4[1] = tmp18Result2;
  let tmp14Result6 = null;
  if ("info_only" === tmp3.type) {
    const obj18 = { variant: "body-sm/normal", color: "text-muted", children: intl4.string(_modDef4244["2DSRxV"]) };
    const Text3 = tmp8(5603).Text;
    intl4 = tmp8(1112).intl;
    tmp14Result6 = tmp14(Text3, obj18);
  }
  items4[2] = tmp14Result6;
  return closure_6(ActionSheet, obj2);
};
