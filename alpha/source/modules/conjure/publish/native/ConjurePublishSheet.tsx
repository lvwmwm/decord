// Module ID: 18255
// Function ID: 18256
// Name: ConjurePublishSheet
// Dependencies: [5, 19, 17, 6621, 21, 4913, 575, 5127, 18254, 12305, 504, 7597, 18256, 5924, 5472, 5595, 1112, 4190, 18267, 7553, 7017, 5511, 18268, 7322, 1186, 5504, 2]
// Exports: default

// Module 18255 (ConjurePublishSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import GuildIcon from "GuildIcon" /* 7322 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12305 */;
import showConjurePublishSheet from "showConjurePublishSheet" /* 18254 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let c1, c2, c4, closure_2, importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function hidePublishSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(showConjurePublishSheet.CONJURE_PUBLISH_SHEET_KEY);
}
function PublishSheetBody(project) {
  let NEPcoi;
  let SafeAreaPaddingView;
  let closure_4;
  let disabled;
  let items1;
  let obj3;
  let obj4;
  let obj7;
  let obj8;
  let onLayout;
  let ref;
  let tmp16;
  project = project.project;
  const publish = project.publish;
  const entryPoint = project.entryPoint;
  let closure_3;
  react = undefined;
  let current;
  let closure_6;
  function saveEdits() {
    return obj(...arguments);
  }
  let obj = function _saveEdits() {
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let intl;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (ref.current) {
              c4 = 3;
              return { value: false, done: true };
            } else {
              ref.current = true;
              c3 = 2;
              c1 = 3;
              c4 = 1;
              const obj4 = { value: closure_2_3.save(), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_4.current = false;
            throw closure_2;
          } else if (2 === c1) {
            const obj5 = { text: intl.string(c1(closure_2[17]).Fi7boI), variant: "critical" };
            const open = c1(closure_2[15]).open;
            const tmp12 = c1(closure_2[15]);
            intl = tmp(closure_2[16]).intl;
            open("CONJURE_PUBLISH_SHEET_ERROR", obj5);
            c3 = 0;
            closure_128_4.current = false;
            c4 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4.current = false;
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 0;
            closure_128_4.current = false;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp24) {
          closure_2 = tmp24;
          if (0 === c3) {
            c4 = 3;
            throw tmp24;
          } else if (1 === tmp26) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleConjureIcon() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              let closure_0 = tmp;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: saveEdits(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              closure_1_11();
              c1(c2[18])(closure_128_0.id);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c2 = 3;
          throw tmp13;
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handlePublish() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              let closure_0 = tmp;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: saveEdits(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            current = value && closure_128_6.current;
            if (current) {
              closure_1_11();
              const appChannelsPrivate = closure_128_3.appChannelsPrivate;
              let isPrivate;
              const run = closure_128_1.run;
              const tmp11 = closure_128_2;
              if (appChannelsPrivate != null) {
                isPrivate = appChannelsPrivate.isPrivate;
              }
              run(tmp11, true === isPrivate);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c2 = 3;
          throw tmp17;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = publish;
  const tmp3 = publish(entryPoint[11])();
  const height = tmp3.height;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  const tmp4 = obj;
  if (undefined !== height) {
    num = height;
  }
  const tmp4Result = tmp4(num);
  const tmp6 = tmp(entryPoint[12])(project, publish.guildId);
  closure_3 = tmp6;
  tmp(entryPoint[13])(() => true, tmp6.saving);
  obj = react;
  react = react.useRef(false);
  const context = react.useContext(tmp(tmp2[14]));
  let transitionState;
  if (context != null) {
    transitionState = context.transitionState;
  }
  let tmp10 = null == transitionState;
  if (!tmp10) {
    tmp10 = "visible" === transitionState;
  }
  current = tmp10;
  closure_6 = obj.useRef(tmp10);
  const items = [tmp10];
  const layoutEffect = obj.useLayoutEffect(() => {
    closure_6.current = current;
    return () => {
      closure_1_6.current = false;
    };
  }, items);
  let tmp12 = project;
  const reason = tmp6.reason;
  let intl = project(tmp2[16]).intl;
  const string = intl.string;
  if ("adds_surfaces" === reason) {
    NEPcoi = tmp(tmp2[17]).wnZ4yU;
  } else {
    NEPcoi = tmp(tmp2[17]).NEPcoi;
  }
  let obj2 = { startExpanded: tmp6.editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: string(NEPcoi), footer: tmp14(tmp15, obj3), children: tmp14(tmp15, obj7) };
  obj3 = { style: tmp4Result.footer, ref, onLayout, children: tmp16(SafeAreaPaddingView, obj4) };
  string(NEPcoi);
  const ActionSheet = tmp12(tmp2[19]).ActionSheet;
  obj4 = { bottom: true, style: tmp4Result.footerBody, children: items1 };
  let tmp14Result = null;
  SafeAreaPaddingView = tmp12(tmp2[20]).SafeAreaPaddingView;
  tmp16 = obj;
  if (null != tmp6.destination) {
    let obj5 = { destination: tmp6.destination };
    tmp14Result = tmp14(PublishDestination, obj5);
  }
  items1 = [tmp14Result, ];
  let obj6 = {
    variant: "primary",
    size: "md",
    text: publish.label,
    disabled,
    loading: tmp6.saving,
    onPress: function handlePublish() {
      return obj(...arguments);
    }
  };
  disabled = publish.disabled;
  const Button = tmp12(tmp2[21]).Button;
  if (!disabled) {
    disabled = null != tmp6.nameError;
  }
  items1[1] = saveEdits(Button, obj6);
  obj7 = { style: tmp4Result.content, children: saveEdits(tmp(entryPoint[22]), obj8) };
  obj8 = {
    review: tmp6,
    onConjureIcon: function handleConjureIcon() {
      return obj(...arguments);
    }
  };
  return saveEdits(ActionSheet, obj2);
}
function PublishDestination(destination) {
  let intl2;
  let items;
  let items1;
  let name;
  let tmp10;
  let tmp11;
  let tmp8;
  destination = destination.destination;
  const tmp = closure_10();
  if ("server" === destination.type) {
    name = destination.guild.name;
  } else {
    const intl = intl3.intl;
    name = intl.string(_modDef4190["11Xr/r"]);
  }
  const obj = { style: tmp.destination, accessible: true, children: items };
  if ("server" === destination.type) {
    const obj2 = { guild: destination.guild, size: GuildIcon.GuildIconSizes.NORMAL };
    const tmp15 = GuildIconDefault;
    tmp11 = metroImportDefault(tmp15, obj2);
    tmp8 = require;
    tmp10 = metroImportDefault;
  } else {
    tmp8 = require;
    const obj3 = { user: destination.user, guildId: "Array", size: native.AvatarSizes.NORMAL, accessible: true };
    const Avatar = native.Avatar;
    tmp10 = metroImportDefault;
    tmp11 = metroImportDefault(Avatar, obj3);
  }
  items = [tmp11, ];
  const obj4 = { style: tmp.destinationText, children: items1 };
  const obj5 = { variant: "body-xs/normal", color: "text-subtle", children: intl2.string(_modDef4190.XHjO6t) };
  const Text = tmp8(5504).Text;
  intl2 = tmp8(1112).intl;
  items1 = [tmp10(Text, obj5), tmp10(tmp8(5504).Text, { variant: "body-md/medium", color: "text-strong", lineClamp: 1, children: name })];
  items[1] = metroImportAll(View, obj4);
  return metroImportAll(View, obj);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { content: { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 }, footer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, footerBody: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 });
  return obj;
});
createStyles = createStyles_mod;
let obj = { destination: obj2, destinationText: obj3 };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, gap: nativeDefault.space.PX_4 / 2 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function ConjurePublishSheet(projectId) {
  let closure_1;
  let entryPoint;
  let publishOptions;
  projectId = projectId.projectId;
  ({ publishOptions, entryPoint } = projectId);
  let tmp = useConjurePublishActionDefault(projectId, publishOptions);
  let obj = projectId(504);
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  importDefault = tmp3;
  const items2 = [tmp3];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(showConjurePublishSheet.CONJURE_PUBLISH_SHEET_KEY);
    }
  }, items2);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (null != stateFromStores) {
      const obj2 = { project: stateFromStores, publish: tmp, entryPoint };
      tmp5 = closure_7(PublishSheetBody, obj2);
    }
  }
  return tmp5;
};
