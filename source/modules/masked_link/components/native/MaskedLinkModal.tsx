// Module ID: 12111
// Function ID: 93331
// Name: MaskedLinkModal
// Dependencies: []
// Exports: default

// Module 12111 (MaskedLinkModal)
const _module = require(dependencyMap[0]);
({ View: closure_2, ScrollView: closure_3 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module1);
const _module2 = require(dependencyMap[2]);
let obj = { linkCalloutContainer: { maxHeight: 250 } };
obj = { borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
obj.emphasis = obj;
let closure_6 = _module2.createStyles(obj);
const _module3 = require(dependencyMap[11]);
const result = _module3.fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default function MaskedLinkModal(isProtocol) {
  let authorityPrefix;
  let handleCancel;
  let handleConfirm;
  let hostname;
  let onCancel;
  let onConfirm;
  let protocol;
  let shouldTrustUrl;
  let theRestOfTheUrl;
  let trustUrl;
  let url;
  isProtocol = isProtocol.isProtocol;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = callback2();
  let obj = require(dependencyMap[4]);
  const modalState = obj.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  const require = shouldTrustUrl;
  const dependencyMap = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  obj = {};
  const intl = require(dependencyMap[6]).intl;
  obj.title = intl.string(require(dependencyMap[6]).t.3w1QGl);
  const intl2 = require(dependencyMap[6]).intl;
  if (isProtocol) {
    let formatResult = intl2.format(tmp4(tmp5[6]).t.aCYv1z, {});
  } else {
    formatResult = intl2.string(tmp4(tmp5[6]).t.soRxRe);
  }
  obj.content = formatResult;
  obj = {};
  const obj1 = { variant: "primary", onPress: handleConfirm };
  const intl3 = require(dependencyMap[6]).intl;
  const string = intl3.string;
  const t = require(dependencyMap[6]).t;
  if (isProtocol) {
    let stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  obj1.text = stringResult;
  const items = [callback(require(dependencyMap[5]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { onPress: handleCancel, variant: "secondary" };
  const intl4 = require(dependencyMap[6]).intl;
  obj2.text = intl4.string(require(dependencyMap[6]).t./g10LC);
  items[1] = callback(require(dependencyMap[5]).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = closure_5(require(dependencyMap[7]).AlertActions, obj);
  const obj3 = { spacing: 16 };
  const obj4 = { style: tmp.emphasis };
  const obj5 = { 400888199: null, 2091392542: null };
  const obj6 = { style: tmp.linkCalloutContainer };
  const obj7 = { variant: "text-md/normal" };
  const obj8 = {};
  let str = "text-md/normal";
  if (isProtocol) {
    str = "text-md/semibold";
  }
  obj8.variant = str;
  let str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  obj8.color = str2;
  const items1 = [protocol, authorityPrefix];
  obj8.children = items1;
  const items2 = [closure_5(require(dependencyMap[10]).Text, obj8), , ];
  const obj9 = {};
  let str3 = "text-md/semibold";
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  obj9.variant = str3;
  let str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  obj9.color = str4;
  obj9.children = hostname;
  items2[1] = callback(require(dependencyMap[10]).Text, obj9);
  items2[2] = callback(require(dependencyMap[10]).Text, { children: theRestOfTheUrl });
  obj7.children = items2;
  obj6.children = closure_5(require(dependencyMap[10]).Text, obj7);
  obj5.label = callback(closure_3, obj6);
  obj4.children = callback(require(dependencyMap[9]).FormRow, obj5);
  const items3 = [callback(closure_2, obj4), ];
  const obj10 = {
    400888199: null,
    2091392542: null,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    }
  };
  const obj11 = { variant: "text-md/medium" };
  const intl5 = require(dependencyMap[6]).intl;
  const format = intl5.format;
  const t2 = require(dependencyMap[6]).t;
  if (isProtocol) {
    const obj12 = { protocol: protocol.replace(":", "") };
    let formatResult1 = format(t2.haA+Xw, obj12);
  } else {
    const obj13 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj13);
  }
  obj11.children = formatResult1;
  obj10.label = callback(require(dependencyMap[10]).Text, obj11);
  items3[1] = callback(require(dependencyMap[9]).FormCheckboxRow, obj10);
  obj3.children = items3;
  obj.extraContent = closure_5(require(dependencyMap[8]).Stack, obj3);
  return callback(require(dependencyMap[5]).AlertModal, obj);
};
