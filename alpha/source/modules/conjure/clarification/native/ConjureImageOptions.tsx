// Module ID: 12723
// Function ID: 12724
// Name: ConjureImageOptions
// Dependencies: [5, 32, 19, 17, 21, 5009, 575, 12455, 8645, 5619, 1114, 3865, 5712, 5077, 6971, 6983, 7056, 12721, 8020, 5733, 12724, 12453, 8825, 12726, 5629, 12422, 2]
// Exports: default

// Module 12723 (ConjureImageOptions)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import react_native from "react-native" /* 5077 */;
import FastImageDefault from "FastImage" /* 5712 */;
import openMediaModal from "openMediaModal" /* 8825 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12455 */;
import ConjureImageOptions2 from "ConjureImageOptions" /* 12721 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, map;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function ImageOptionPicture(onMeasured) {
  let attachmentId;
  let gone;
  let handleError;
  let inert;
  let intl;
  let items1;
  let obj7;
  let projectId;
  let tmp10;
  onMeasured = onMeasured.onMeasured;
  ({ projectId, attachmentId, inert } = onMeasured);
  let tmp = closure_10();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, attachmentId);
  const src = conjureAttachmentImage.src;
  const items = [tmp.frame, ];
  let frameInert = null;
  ({ gone, handleError } = conjureAttachmentImage);
  if (inert) {
    frameInert = tmp.frameInert;
  }
  items[1] = frameInert;
  const obj2 = { style: items, children: null };
  if (gone) {
    const obj3 = { style: tmp.broken, children: items1 };
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
    const ImageWarningIcon = tmp2(8645).ImageWarningIcon;
    items1 = [metroImportAll(ImageWarningIcon, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.brokenText, children: intl.string(_modDef3865.lhgD88) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    items1[1] = metroImportAll(Text, obj5);
    obj2.children = React4(metroImportDefault, obj3);
    tmp10 = obj2;
  } else {
    let tmp6Result = null;
    if (null != src) {
      const obj6 = {
        source: obj7,
        style: tmp.image,
        resizeMode: "contain",
        onLoad(nativeEvent) {
              let height;
              let width;
              nativeEvent = nativeEvent.nativeEvent;
              let source = nativeEvent;
              if ("source" in nativeEvent) {
                source = nativeEvent.source;
              }
              ({ width, height } = source);
              const tmp = width > 0 && height > 0;
              if (tmp) {
                size = { width, height };
                onMeasured(size);
              }
            },
        onError: handleError,
        accessible: false
      };
      obj7 = { uri: src };
      tmp6Result = tmp6(FastImageDefault, obj6);
    }
    obj2.children = tmp6Result;
    tmp10 = obj2;
  }
  return metroImportAll(metroImportDefault, tmp10);
}
function ImageOptionTile(option) {
  let IconButton;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let disabled;
  let frameHeight;
  let galleryWidth;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let multi;
  let obj19;
  let obj20;
  let obj7;
  let onMeasured;
  let onRemove;
  let projectId;
  let rowTile;
  let selected;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp13Result;
  let tmp13Result3;
  let tmp14;
  let tmp2Result;
  option = option.option;
  ({ multi, galleryWidth, selected, disabled, frameHeight, onFrameHeight: closure_129_1, onPick: closure_129_2, onView: closure_129_3, onRemove } = option);
  ({ projectId, onMeasured } = option);
  const tmp = closure_10();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected, disabled });
  const obj2 = react_native;
  let radioA11yNative = obj2.useRadioA11yNative({ selected, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  const intl = tmp2(1114).intl;
  const stringResult = intl.string(_modDef3865["4/eeDD"]);
  if (null != galleryWidth) {
    rowTile = { width: galleryWidth };
    const obj3 = { width: galleryWidth };
  } else {
    rowTile = tmp.rowTile;
  }
  const items = [rowTile, tmp.ring, ];
  let ringSelected = null;
  if (selected) {
    ringSelected = tmp.ringSelected;
  }
  const obj4 = { style: items, children: items5 };
  items[2] = ringSelected;
  const obj6 = {
    style: tmp.card,
    onPress: disabled ? (() => closure_1_3(option)) : (() => closure_1_2(option)),
    disabled: tmp11,
    accessibilityRole: null,
    accessibilityState: null,
    accessibilityLabel: intl2.formatToPlainString(_modDef3865.AQbxhf, obj7),
    accessibilityActions: tmp12,
    onAccessibilityAction(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if ("view" === nativeEvent.actionName) {
        closure_1_3(option);
      }
      if ("remove" === nativeEvent.actionName) {
        if (onRemove != null) {
          tmp4();
        }
      }
    },
    children: items4
  };
  tmp11 = disabled;
  const Card = tmp2(6971).Card;
  if (disabled) {
    tmp11 = null == option.image;
  }
  ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
  intl2 = tmp2(1114).intl;
  obj7 = { answer: option.label };
  if (null != onRemove) {
    const obj8 = { name: "remove", label: intl3.string(_modDef3865.HQEXJM) };
    intl3 = tmp2(1114).intl;
    const items1 = [obj8];
    tmp12 = items1;
  } else if (null != option.image) {
    const items2 = [{ name: "view", label: stringResult }];
    tmp12 = items2;
    const obj9 = { name: "view", label: stringResult };
  }
  const obj10 = {
    onLayout(nativeEvent) {
      return closure_1_1(nativeEvent.nativeEvent.layout.height);
    },
    children: items3
  };
  if (null != option.image) {
    const obj11 = { projectId, attachmentId: option.image.attachment_id, inert: disabled, onMeasured };
    tmp14 = metroImportAll(ImageOptionPicture, obj11);
    tmp13 = metroImportAll;
  } else {
    tmp13 = metroImportAll;
    const obj12 = { style: tmp.frame };
    tmp14 = metroImportAll(tmp9, obj12);
  }
  items3 = [tmp14, ];
  if (multi) {
    const obj13 = { style: tmp.indicator, children: tmp13Result };
    if (multi) {
      const obj14 = { checked: selected };
      tmp13Result = tmp13(tmp2(6983).FormCheckbox, obj14);
    } else {
      const obj15 = { selected };
      tmp13Result = tmp13(tmp2(7056).FormRadio, obj15);
    }
    tmp13Result3 = tmp13(tmp9, obj13);
  } else {
    tmp13Result3 = null;
  }
  items3[1] = tmp13Result3;
  items4 = [React4(metroImportDefault, obj10), ];
  const obj16 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.caption, children: tmp2Result.imageOptionCaption(option) };
  const Text = tmp2(5619).Text;
  tmp2Result = ConjureImageOptions2;
  items4[1] = tmp13(Text, obj16);
  items5 = [React4(Card, obj6), ];
  let tmp13Result4 = null;
  if (null != option.image) {
    tmp13Result4 = null;
    if (null != frameHeight) {
      let MaximizeIcon;
      const obj17 = { style: items6, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: tmp13(IconButton, obj19) };
      items6 = [tmp.view, ];
      items6[1] = { top: frameHeight - nativeDefault.space.PX_32 };
      const obj18 = { top: frameHeight - nativeDefault.space.PX_32 };
      IconButton = tmp2(8020).IconButton;
      if (null != onRemove) {
        MaximizeIcon = tmp2(5733).TrashIcon;
      } else {
        MaximizeIcon = tmp2(12724).MaximizeIcon;
      }
      obj19 = { icon: tmp13(MaximizeIcon, { size: "xs" }), size: "sm", variant: "secondary-overlay", onPress: onRemove, accessibilityLabel: intl4.formatToPlainString(_modDef3865.JGjZMs, obj20) };
      if (null == onRemove) {
        onRemove = () => closure_1_3(option);
      }
      intl4 = tmp2(1114).intl;
      obj20 = { answer: option.label };
      tmp13Result4 = tmp13(tmp9, obj17);
    }
  }
  items5[1] = tmp13Result4;
  return React4(metroImportDefault, obj4);
}
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native2);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, own: obj3, galleryContent: obj4, rowTile: { flex: 1, minWidth: 0 }, card: obj5, ring: obj6, ringSelected: obj7, frame: obj8, frameInert: { opacity: 0.5 }, image: { width: "100%", height: "100%" }, broken: obj9, brokenText: { textAlign: "center" }, indicator: obj10, caption: obj11, view: obj12 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { padding: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
obj6 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg };
obj7 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj8 = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj9 = { gap: nativeDefault.space.PX_4, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj10 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4, padding: 2, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj11 = { paddingHorizontal: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_4 };
obj12 = { position: "absolute", end: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureImageOptions.tsx");

export default function ConjureImageOptions(projectId) {
  let _undefined;
  let c10;
  let disabled;
  let items4;
  let items5;
  let multi;
  let num;
  let onPick;
  let own;
  let question;
  let tmp21;
  let tmp25Result;
  let tmp27;
  let tmp3Result;
  projectId = projectId.projectId;
  ({ question, selectedIds: importDefault, disabled } = projectId);
  ({ onPick: _asyncToGenerator, own } = projectId);
  c10 = undefined;
  let closure_13;
  let c14;
  let memo;
  let onView;
  let closure_17;
  let tmp = c10();
  let tmp2 = true === question.multi_select;
  react = tmp2;
  const options = question.options;
  let tmp3 = projectId;
  const tmp4 = disabled;
  let obj = projectId(disabled[17]);
  let obj2 = react;
  const useRef = react.useRef;
  const imageOptionsLayoutResult = obj.imageOptionsLayout(options);
  map = new Map();
  useRef(map);
  const tmp7 = own(react.useState(null), 2);
  const frameHeight = tmp7[0];
  const onFrameHeight = tmp9;
  [num, c10] = own(react.useState(null), 2);
  const tmp10 = own(react.useState(null), 2);
  const ref = react.useRef(null);
  const image = own.image;
  let id;
  if (image != null) {
    id = image.attachment.id;
  }
  let items = [id];
  const effect = obj2.useEffect(() => {
    if (null != id) {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd({ animated: true });
      }
    }
  }, items);
  let num2 = 0;
  const length = options.length;
  if (null != own.image) {
    num2 = 1;
  }
  const sum = length + num2;
  let tmp15 = null != num;
  if (tmp15) {
    tmp15 = (num - require("native").space.PX_8 * (sum - 1)) / sum < 104;
  }
  closure_13 = tmp17;
  const _Math = Math;
  const _Math2 = Math;
  if (num == null) {
    num = 0;
  }
  const maxResult = max(104, min(136, (num - 2 * require("native").space.PX_8) / 2.4));
  c14 = maxResult;
  const items1 = [own.image];
  memo = obj2.useMemo(() => {
    let ownImageOptionResult = null;
    if (null != own.image) {
      const obj = ConjureImageOptions2;
      ownImageOptionResult = obj.ownImageOption(tmp.image);
    }
    return ownImageOptionResult;
  }, items1);
  const items2 = [options, memo, projectId];
  onView = obj2.useCallback((arg0) => {
    let items;
    id = arg0;
    const viewableImageOptions = projectId(disabled[17]).viewableImageOptions;
    projectId(disabled[17]);
    if (null == memo) {
      items = options;
    } else {
      items = [];
      let num = 0;
      items[HermesBuiltin.arraySpread(items, options, 0)] = tmp3;
    }
    const viewableImageOptionsResult = viewableImageOptions(items);
    let closure_1 = viewableImageOptionsResult;
    const findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
    disabled = findIndexResult;
    if (findIndexResult >= 0) {
      const allPromises = Promise.all(viewableImageOptionsResult.map((image) => {
        const obj = projectId(disabled[21]);
        return obj.getAttachmentUrl(id, image.image.attachment_id);
      }));
      allPromises.then((arr) => {
        const mapped = arr.map((uri, mediaIndex) => {
          let num;
          let num2;
          const current = ref.current;
          const value = current.get(closure_1_1[mediaIndex].id);
          let result = null;
          const tmp = closure_1_1;
          if (null != value) {
            const obj = projectId(disabled[17]);
            result = obj.imageOptionViewerSize(value);
          }
          size = { uri, mediaIndex, width: num, height: num2, accessoryType: "embed", description: tmp[mediaIndex].label, disableDownload: true };
          num = undefined;
          if (result != null) {
            num = result.width;
          }
          if (num == null) {
            num = 1024;
          }
          num2 = undefined;
          if (result != null) {
            num2 = result.height;
          }
          if (num2 == null) {
            num2 = 1024;
          }
          return size;
        });
        let obj = openMediaModal;
        const obj2 = { initialSources: mapped, initialIndex: findIndexResult, analyticsSource: "ConjureClarificationImageOptions", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
        obj.openMediaModal(obj2);
      }, () => {

      });
    }
  }, items2);
  let mapped = options.map((option) => {
    let tmp3;
    projectId = option;
    const obj = {
      projectId,
      option,
      multi,
      galleryWidth: tmp3,
      selected: closure_1.includes(option.id),
      disabled,
      frameHeight,
      onFrameHeight,
      onMeasured(arg0) {
        const current = ref.current;
        return current.set(option.id, arg0);
      },
      onPick,
      onView
    };
    tmp3 = null;
    const tmp = frameHeight;
    const tmp2 = id;
    if (closure_13) {
      tmp3 = c14;
    }
    return tmp(tmp2, obj, option.id);
  });
  if (null != memo) {
    let obj3 = {
      projectId,
      option: memo,
      multi: tmp2,
      galleryWidth: tmp21,
      selected: own.selected,
      disabled,
      frameHeight,
      onFrameHeight: tmp9,
      onMeasured(arg0) {
          const current = ref.current;
          return current.set(memo.id, arg0);
        },
      onPick: own.onPick,
      onView,
      onRemove: own.onRemove
    };
    tmp21 = null;
    const push = mapped.push;
    const tmp31 = frameHeight;
    const tmp32 = id;
    if ("gallery" === imageOptionsLayoutResult || tmp15) {
      tmp21 = maxResult;
    }
    push(tmp31(tmp32, obj3, memo.id));
  }
  const items3 = [own, projectId];
  closure_17 = obj2.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
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
        let tmp;
        let closure_1;
        c3 = 2;
        if (0 === disabled) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp = undefined;
            closure_1 = undefined;
            const obj3 = tmp(disabled[23]);
            disabled = 1;
            c3 = 1;
            const obj5 = { value: obj3.pickConjurePhotos("photo", 1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp = value;
          closure_1 = own(tmp, 1)[0];
          if (null != closure_1) {
            const onUpload = closure_129_4.onUpload;
            const obj = tmp(disabled[23]);
            onUpload(obj.uploadConjurePickedFile(closure_129_0, closure_1));
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  }), items3);
  let obj4 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: items4
  };
  if ("gallery" === imageOptionsLayoutResult || tmp15) {
    let obj5 = { ref, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.galleryContent, children: mapped };
    tmp25Result = tmp25(options, obj5);
    tmp27 = tmp25;
  } else {
    let obj6 = { style: tmp.row, children: mapped };
    tmp25Result = tmp25(tmp24, obj6);
    tmp27 = tmp25;
  }
  items4 = [tmp25Result, ];
  let tmp23Result = null;
  if (!disabled) {
    const obj7 = { style: tmp.own, children: items5 };
    const obj8 = {
      variant: "secondary",
      size: "sm",
      icon: tmp27(tmp3(tmp4[25]).ImagePlusIcon, { size: "xs" }),
      text: tmp3Result.ownImageUploadText(question),
      loading: "upload" === own.busy,
      onPress() {
          const promise = closure_17();
          promise.catch(() => {

          });
        }
    };
    const Button = tmp3(tmp4[24]).Button;
    tmp3Result = tmp3(tmp4[17]);
    items5 = [tmp27(Button, obj8), ];
    let tmp27Result = null;
    if (null != own.error) {
      const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: own.error.text };
      tmp27Result = tmp27(tmp3(tmp4[9]).Text, obj9);
    }
    items5[1] = tmp27Result;
    tmp23Result = tmp23(tmp24, obj7);
  }
  items4[1] = tmp23Result;
  return onFrameHeight(ref, obj4);
};
